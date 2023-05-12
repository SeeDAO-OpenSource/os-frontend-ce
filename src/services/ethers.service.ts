import { ethers } from "ethers"

const WALLET_ADDRESS = "walletAddress"
const WALLET_CHANGED = "wallet-localstorage-changed"
const MASTER_CHAIN_ID = 1 // Mainnet

export default class EthersService {

  static isAddress(address: string | null) {
    return ethers.isAddress(address)
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

  static chainName(netId: number) {
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

  static isWrongNetwork(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      window.ethereum
        .request({ method: "eth_chainId" })
        .then((currentChain: string) => {
          resolve(currentChain !== this.masterChainId())
        })
        .catch((error: any) => reject(error))
    })
  }

  static isWrongNetworkByChainId(currentChain: string) {
    return currentChain !== this.masterChainId()
  }

  static isWrongNetworkByNetId(netId: number) {
    return netId !== this.masterNetId()
  }

  static switchNetwork(): Promise<number> {
    return new Promise((resolve, reject) => {
      window.ethereum
        .request(this.network())
        .then(() => {
          this.setStorageWalletAddress(`${this.walletAddress()}`)
          resolve(this.masterNetId())
        })
        .catch((error: any) => {
          this.disconnect()
          reject(error)
        })
    })
  }

  static async isWalletConnected() {
    const isLogin = this.walletAddress()
    if (isLogin === "" || isLogin === null || isLogin === undefined) {
      return false
    }
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    if (accounts.length > 0) {
      return true
    } else {
      this.disconnect()
      return false
    }
  }

  static disconnect() {
    localStorage.removeItem(WALLET_ADDRESS)
  }

  static walletAddress() {
    return localStorage.getItem(WALLET_ADDRESS)
  }

  static shortWalletAddress(addr: string | undefined) {
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

  static setStorageWalletAddress(data: string) {
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
