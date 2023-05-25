import { WalletType, type WalletConfig, getWallet, createProvider, type WalletProvider } from "@/web3";


export class WalletService {
  private providers: Map<string, WalletProvider> = new Map()
  private wallet = getWallet()


  constructor() {
    const wt = localStorage.getItem('WallatType')
    if (wt) {
      this.setWalletType(wt as WalletType)
    }
  }

  async setWalletType(type: WalletType) {
    const p = this.createMetaMaskProvider(type)
    await this.wallet.setProvider(type, p)
    localStorage.setItem('WallatType', type)
  }

  private createMetaMaskProvider(name: string): WalletProvider {
    let p = this.providers.get(WalletType.MetaMask)
    if (!p) {
      const metamaskConfig: WalletConfig = {
        type: WalletType.MetaMask,
        chainId: 1,
      }
      p = createProvider(metamaskConfig)
      this.providers.set(WalletType.MetaMask, p)
    }
    return p
  }
}

export const walletService = new WalletService()