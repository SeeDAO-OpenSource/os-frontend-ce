import { Wallet, WalletProviderFactory, type WalletConfig, type WalletProvider } from './wallet'

export class AppWallet extends Wallet {
  // eslint-disable-next-line class-methods-use-this
  async init(param: string): Promise<any> {
    return param
  }

  // eslint-disable-next-line class-methods-use-this
  async destroy(param: string): Promise<any> {
    return param
  }
}

const wallet: Wallet = new AppWallet()
const factory: WalletProviderFactory = new WalletProviderFactory()

export function getWallet(): Wallet {
  return wallet
}

export function createProvider(config: WalletConfig): WalletProvider {
  return factory.create(config)
}
