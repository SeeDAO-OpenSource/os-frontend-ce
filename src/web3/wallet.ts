import { MetaMaskWithSDKProvider } from './metamsk_sdk'
import { UniPassProvider } from './unipass'

export enum WalletType {
  None = '_',
  MetaMask = 'MetaMask',
  UniPass = 'UniPass',
}

export type TransactionMessage = {
  from: string
  to: string
  value: string
  data: string
}

export type WalletConfig = {
  type: WalletType
  chain?: {
    chainId: number
    name: string
    rpc: { url: string }[]
    explorers: { url: string }[]
    [key: string]: any
  }
  [key: string]: any

  accountChanged?: (account: string) => Promise<void>
  disconnected?: () => Promise<void>
  chainChanged?: (chain: string) => Promise<void>
}

export type WalletEnable = {
  isEnabled: boolean
  message?: string
}

export class Wallet {
  private provider: WalletProvider | undefined

  public type?: WalletType

  async setProvider(type: WalletType, p: WalletProvider): Promise<void> {
    if (this.provider === p) {
      return
    }
    await this.provider?.unmount()
    this.provider = p
    await p.mount()
    this.type = type
    localStorage.setItem('WallatType', type)
  }

  async disconnect(): Promise<void> {
    await this.provider?.unmount()
    this.provider = undefined
    this.type = WalletType.None
    localStorage.removeItem('WallatType')
  }

  protected getProvider(): WalletProvider {
    if (!this.provider) {
      throw new Error('not set wallet')
    }
    return this.provider
  }

  protected tryGetProvider(): WalletProvider | undefined {
    return this.provider
  }

  signMessage(msg: string, address?: string): Promise<string> {
    return this.getProvider().signMessage(msg, address)
  }

  getAddress(): Promise<string | undefined> {
    return this.getProvider().requestAccount()
  }

  async getConnectedAddress(): Promise<string | undefined> {
    const account = await this.tryGetProvider()?.getConnectAccount()
    return account
  }
}

export interface WalletProvider {
  getConnectAccount(): Promise<string | undefined>
  requestAccount(): Promise<string | undefined>
  signMessage(msg: string, address?: string): Promise<string>
  sendTransaction(tx: TransactionMessage): Promise<string>
  isEnabled(): Promise<WalletEnable>
  mount(): Promise<void>
  unmount(): Promise<void>
}

type ProviderCreator = (conf: WalletConfig) => WalletProvider

export class WalletProviderFactory {
  providers: { [key: string]: ProviderCreator }

  constructor() {
    this.providers = {
      [WalletType.MetaMask]: c => new MetaMaskWithSDKProvider(c),
      [WalletType.UniPass]: (c) => new UniPassProvider(c),
    }
  }

  create(conf: WalletConfig): WalletProvider {
    const p = this.providers[conf.type]
    if (!p) {
      throw new Error('wallet type is not found')
    }
    return p(conf)
  }
}
