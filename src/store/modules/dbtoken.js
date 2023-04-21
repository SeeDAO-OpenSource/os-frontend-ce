import serverConfig from "@/config/server"
import ApiService from "@/services/api.service"
import EtherService from "@/services/ether.service"

// action types
export const WALLET_LOGIN = "walletLogin"
export const WALLET_LOGOUT = "walletLogout"
export const SIGN_MESSAGE = "signMessage"

// mutation types
export const SET_IS_SIGNING = "setIsSigning"
export const SET_ACCESS_TOKEN = "setAccessToken"
export const SET_WALLET_SIGN = "setWalletSign"

// getter types
export const GET_ACCESS_TOKEN = "getAccessToken"

function isInvalid(token) {
  return (
    token === null ||
    token === undefined ||
    token === "undefined" ||
    token === "null" ||
    token === ""
  )
}

function getMessageObj() {
  return {
    wallet: EtherService.walletAddress().toLowerCase(),
    ledger: serverConfig.ledgerDefault,
    from: "https://app.seedao.xyz/", // window.location.href
  }
}

function getWelcomeMessage() {
  const data = getMessageObj()
  return (
    `${data.from} wants you to sign in\n with your Ethereum account:\n` +
    `${data.wallet}\n\n` +
    "Sign in with Ethereum to the SeeDAO.\n\n" +
    `URI: ${data.from}\n` +
    "Version: 1\n" +
    `Ledger: ${data.ledger}`
  )
}

const state = {
  accessToken: null,
  isSigning: false,
  sig: null
}

const getters = {
  [GET_ACCESS_TOKEN](state) {
    return state.accessToken
  }
}

const actions = {
  [SIGN_MESSAGE](context, data) {
    return new Promise((resolve, reject) => {
      window.ethereum
        .request({
          method: "personal_sign",
          params: [data.message, data.wallet, 0]
        })
        .then((sig) => {
          context.commit(SET_WALLET_SIGN, sig)
          resolve(sig)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  [WALLET_LOGIN](context, wallet) {
    return new Promise((resolve, reject) => {
      if (isInvalid(this.accessToken) && isInvalid(this.isSigning)) {
        context.commit(SET_IS_SIGNING, true)
        context.dispatch(SIGN_MESSAGE, {message: getWelcomeMessage(), wallet:  wallet.toLowerCase()})
          .then((signed) => {
            const msgObj = getMessageObj()
            const data = { signed, msgObj, wallet: wallet.toLowerCase() }
            console.log('msg:', msgObj)
            console.log('signed:', signed)
            ApiService
              .post("/api/users/wallet/login", data)
              .then(({ data }) => {
                console.log('data', data)
                context.commit(SET_ACCESS_TOKEN, data.data.token)
                context.commit(SET_IS_SIGNING, false)
                resolve(data.data.token)
              })
              .catch((error) => {
                console.log(error)
                context.commit(SET_IS_SIGNING, false)
                reject(error)
              })
          })
          .catch((err) => {
            context.commit(SET_IS_SIGNING, false)
            reject(err)
          })
      } else {
        resolve(this.accessToken)
      }
    })
  },
  [WALLET_LOGOUT](context) {
    context.commit(SET_ACCESS_TOKEN, "")
    context.commit(SET_WALLET_SIGN, "")
    context.commit(SET_IS_SIGNING, false)
  },
}

const mutations = {
  [SET_WALLET_SIGN](state, sig) {
    state.sig = sig
  },
  [SET_ACCESS_TOKEN](state, token) {
    state.accessToken = token
  },
  [SET_IS_SIGNING](state, isSigning) {
    state.isSigning = isSigning
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}
