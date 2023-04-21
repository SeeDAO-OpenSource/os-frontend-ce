import serverConfig from "../config/server"
import EthersService from "./ether.service"
import axios from "axios"

const OS_IS_SIGNING = "isSigning"
const OS_ACCESS_TOKEN = "SeeDAOAccessToken"

function isInvalid(token) {
  return (
    token === null ||
    token === undefined ||
    token === "undefined" ||
    token === "null" ||
    token === ""
  )
}

export default class DBTokenService {
  request
  ledger

  constructor() {
    this.request = axios.create(serverConfig.axios)
    this.ledger = serverConfig.ledgerDefault
    localStorage.removeItem(OS_IS_SIGNING)
  }

  static removeAccessToken() {
    localStorage.removeItem(OS_ACCESS_TOKEN)
  }

  static getAccessToken() {
    return localStorage.getItem(OS_ACCESS_TOKEN)
  }

  signMessage(message) {
    return new Promise((resolve, reject) => {
      window.ethereum
        .request({
          method: "personal_sign",
          params: [message, EthersService.walletAddress(), 0]
        })
        .then((sig) => {
          resolve(sig)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  getWelcomeMessage(data){
    return `${data.from} wants you to sign in\n with your Ethereum account:\n`
    + `${data.wallet.toLowerCase()}\n\n`
    + "Sign in with Ethereum to the SeeDAO.\n\n"
    + `URI: ${window.location.href}\n`
    + "Version: 1\n"
    + `Ledger: ${data.ledger}`
  }

  walletLogin(wallet) {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem(OS_ACCESS_TOKEN)
      const isSigning = localStorage.getItem(OS_IS_SIGNING)
      if (isInvalid(token) && isInvalid(isSigning)) {
        localStorage.setItem(OS_IS_SIGNING, "true")
        const msgObj = { wallet: wallet.toLowerCase(), ledger: this.ledger, from: window.location.href };
        this.signMessage(this.getWelcomeMessage(msgObj))
          .then((signed) => {
            const data = { signed, msgObj, wallet: wallet.toLowerCase() }
            this.request
              .post("/api/users/wallet/login", data)
              .then(({ data }) => {
                localStorage.setItem(OS_ACCESS_TOKEN, data.data.token)
                localStorage.removeItem(OS_IS_SIGNING)
                resolve(data.data.token)
              })
              .catch((error) => {
                console.log(error)
                localStorage.removeItem(OS_IS_SIGNING)
                reject(error)
              })
          })
          .catch((err) => {
            localStorage.removeItem(OS_IS_SIGNING)
            reject(err)
          })
      } else {
        resolve(token)
      }
    })
  }
}
