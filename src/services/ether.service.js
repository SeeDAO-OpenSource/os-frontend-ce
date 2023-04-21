import { ethers } from "ethers"

const WALLET_ADDRESS = "walletAddress"
const WALLET_CHANGED = "wallet-localstorage-changed"
const MASTER_CHAIN_ID = 1 // Mainnet

export default class EthersService {

  static isAddress(address){
    return ethers.utils.isAddress(address)
  }

  async getBlockAverageTime(web3, span) {
    const times = []
    const currentNumber = await web3.eth.getBlockNumber()
    const firstBlock = await web3.eth.getBlock(currentNumber - span)
    let prevTimestamp = firstBlock.timestamp

    for (let i = currentNumber - span + 1; i <= currentNumber; i++) {
      const block = await web3.eth.getBlock(i)
      let time = block.timestamp - prevTimestamp
      prevTimestamp = block.timestamp
      times.push(time)
    }
    return Math.round(times.reduce((a, b) => a + b) / times.length)
  }

  static network() {
    return {
      method: "wallet_switchEthereumChain",
      params: [
        {
          chainId: this.masterChainId()
        }
      ]
    }
  }

  static masterChainId() {
    return `0x${Number(this.masterNetId()).toString(16)}`
  }

  static masterNetId() {
    return MASTER_CHAIN_ID
  }

  static chainName(netId) {
    if (netId === 1) return "Ethereum"
    else if (netId === 3) return "Ropsten"
    else if (netId === 4) return "Rinkeby"
    else if (netId === 5) return "Goerli"
    else if (netId === 10) return "Optimism"
    else if (netId === 42) return "Kovan"
    else if (netId === 56) return "Binance Smart Chain"
    else if (netId === 61) return "Ethereum Classic"
    else if (netId === 62) return "Morden"
    else if (netId === 137) return "Polygon"
    return "Unknown"
  }

  static getCurrentChainName() {
    return new Promise((resolve, reject) => {
      this.switchNetwork()
        .then((netId) => {
          resolve(this.chainName(netId))
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  static isWrongNetwork() {
    return new Promise((resolve, reject) => {
      window.ethereum
        .request({ method: "eth_chainId" })
        .then((currentChain) => {
          // console.log("currentChain:", currentChain)
          // console.log("this.masterChainId():", this.masterChainId())
          resolve(currentChain !== this.masterChainId())
        })
        .catch((error) => reject(error))
    })
  }

  static isWrongNetworkByChainId(currentChain) {
    return currentChain !== this.masterChainId()
  }

  static isWrongNetworkByNetId(netId) {
    return netId !== this.masterNetId()
  }

  static switchNetwork() {
    return new Promise((resolve, reject) => {
      window.ethereum
        .request(this.network())
        .then(() => {
          resolve(this.masterNetId())
        })
        .catch((error) => reject(error))
    })
  }

  static isWalletConnected() {
    const isLogin = this.walletAddress()
    if (isLogin === "" || isLogin === null || isLogin === undefined) {
      return false
    }
    return true
  }

  static disconnect() {
    localStorage.removeItem(WALLET_ADDRESS)
  }

  static walletAddress() {
    return localStorage.getItem(WALLET_ADDRESS)
  }

  static shortWalletAddress(addr) {
    let wallet = this.walletAddress()
    if (addr) {
      wallet = addr.toLowerCase()
    }
    if (!wallet) return wallet
    return (
      wallet.slice(0, 5) +
      "..." +
      wallet.slice(wallet.length - 5, wallet.length)
    )
  }

  static removeStorageWalletAddress() {
    localStorage.removeItem(WALLET_ADDRESS)
  }

  static setStorageWalletAddress(data) {
    localStorage.setItem(WALLET_ADDRESS, data)
  }

  static setWalletDispatchEvent() {
    window.dispatchEvent(
      new CustomEvent(this.walletChangedEventName(), {
        detail: {
          storage: localStorage.getItem(WALLET_ADDRESS)
        }
      })
    )
  }

  static walletChangedEventName() {
    return WALLET_CHANGED
  }
}
