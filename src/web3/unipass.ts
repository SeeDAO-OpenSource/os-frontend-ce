/* eslint-disable class-methods-use-this */

import { UniPassPopupSDK, type PopupSDKOption } from '@unipasswallet/popup-sdk'
import { UniPassTheme } from '@unipasswallet/popup-types'
import type { ChainType } from '@unipasswallet/popup-types'
import type { TransactionMessage, WalletConfig, WalletEnable, WalletProvider } from './wallet'

export class UniPassProvider implements WalletProvider {
  private wallet: UniPassPopupSDK
  protected config: WalletConfig

  constructor(config: WalletConfig) {
    this.config = config
    this.wallet = new UniPassPopupSDK(this.parseConfig(config))
  }

  async isEnabled(): Promise<WalletEnable> {
    return {
      isEnabled: true,
    }
  }

  async getConnectAccount(): Promise<string | undefined> {
    const account = this.wallet.getAccount()
    return account?.address
  }

  async requestAccount(): Promise<string> {
    const address = await this.getConnectAccount()
    if (address) {
      return address
    }
    const account = await this.wallet.login({
      email: true,
      connectType: 'both',
    })
    return account.address
  }

  /**
   *  
   * @param tx
   * @returns
   */
  async sendTransaction(tx: TransactionMessage): Promise<string> {
    /* eslint-disable no-await-in-loop */
    /* eslint-disable no-promise-executor-return */
    const txHashERC20 = await this.wallet.sendTransaction(tx)
    const checkTxStatus = async (txHash: string) => {
      let tryTimes = 0
      while (tryTimes++ < 3) {
        const receipt = await this.wallet.getProvider().getTransactionReceipt(txHash)
        if (receipt) return receipt.status
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
      return false
    }
    await checkTxStatus(txHashERC20)
    return txHashERC20
  }

  /**
   * sign message
   * @param message
   * @returns
   */
  async signMessage(message: string): Promise<string> {
    const signContent = await this.wallet.signMessage(message)
    return signContent
  }

  async mount(): Promise<void> {
  }

  async unmount(): Promise<void> {
    await this.wallet.logout()
  }

  private parseConfig(config: WalletConfig): PopupSDKOption {
    const chainType = this.getChantType(config.chain?.chainId)
    const options: PopupSDKOption = {
      env: 'prod',
      chainType: chainType,
      storageType: 'localStorage',
      appSettings: {
        theme: UniPassTheme.LIGHT,
        appName: 'SeeDAO OS',
        appIcon: '',
      },
    }
    return options
  }

  private getChantType(chain?: number): ChainType {
    switch (chain) {
      case 1:
        return 'eth'
      case 137:
        return 'polygon'
      default:
        return 'eth'
    }
  }
}
