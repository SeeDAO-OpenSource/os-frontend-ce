// @ts-ignore
import MetaMaskSDK from '@metamask/sdk/dist/browser/es/metamask-sdk.js'
import { MetaMaskProvider } from './metamask'
import type { WalletConfig } from './wallet'

export class MetaMaskWithSDKProvider extends MetaMaskProvider {

  constructor(config: WalletConfig) {
    super(config)
    new MetaMaskSDK({
      enableDebug: false,
    })
  }
}
