/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */

import { Buffer } from 'buffer'
import type { TransactionMessage, WalletConfig, WalletEnable, WalletProvider } from './wallet'
import { checkIsExpectChain, checkEthereum, onAccountchanged, onChainChange, onDisconnect } from './ethereum'
const toHex = (num: number) => `0x${num.toString(16)}`

export class MetaMaskProvider implements WalletProvider {
  private config: WalletConfig

  private dispose?: () => void

  constructor(config: WalletConfig) {
    this.config = config
  }

  async isEnabled(): Promise<WalletEnable> {
    const result: WalletEnable = { isEnabled: false }
    if (!checkEthereum()) {
      result.message = 'not install metamask'
      return result
    }
    return {
      isEnabled: true,
    }
  }

  async getConnectAccount(): Promise<string | undefined> {
    try {
      const eth = await this.getEth()
      const acts = await eth.request({
        method: 'eth_accounts',
        // method: 'eth_requestAccounts',
      })
      if (acts && acts.length > 0) {
        return acts[0]
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log('getConnectAccount', err)
    }
  }

  private async checkChain(): Promise<boolean> {
    if (!this.config.chain) {
      return true
    }
    const isChainRight = checkIsExpectChain(this.config.chain.chainId)
    if (!isChainRight) {
      const result = await this.changeChain()
      return result
    }
    return isChainRight
  }

  // 切链
  private async changeChain(): Promise<boolean> {
    if (!this.config.chain) {
      return true
    }
    const chainid = toHex(this.config.chain.chainId)
    const eth = await this.getEth()
    try {
      await eth.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainid }],
      })
    } catch (switchError: any) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        // eslint-disable-next-line no-useless-catch
        try {
          await eth.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: chainid,
                chainName: this.config.chain.name,
                nativeCurrency: this.config.chain.nativeCurrency,
                rpcUrls: this.config.chain.rpc.map(r => r.url),
                blockExplorerUrls: this.config.chain.explorers.map(e => e.url),
              },
            ],
          })
        } catch (addError) {
          console.log('changeChain', addError)
          return false
        }
      }
    }
    return true
  }

  async requestAccount(): Promise<string | undefined> {
    const isChainRight = await this.checkChain()
    if (!isChainRight) {
      return
    }
    const eth = await this.getEth()
    const acts = await eth.request({
      method: 'eth_requestAccounts',
    })
    if (acts && acts.length > 0) {
      return acts[0]
    }
  }

  async sendTransaction(tx: TransactionMessage): Promise<string> {
    const isChainRight = await this.checkChain()
    if (!isChainRight) {
      return ''
    }
    const eth = await this.getEth()
    const result = await eth.request({
      method: 'eth_sendTransaction',
      params: [tx],
    })
    return result
  }

  async signMessage(msg: string, address?: string): Promise<string> {
    const isChainRight = await this.checkChain()
    if (!isChainRight) {
      return ''
    }
    const eth = await this.getEth()
    // For historical reasons, you must submit the message to sign in hex-encoded UTF-8.
    // This uses a Node.js-style buffer shim in the browser.
    msg = `0x${Buffer.from(msg, 'utf8').toString('hex')}`
    let account = address
    if (!account) {
      account = await this.getConnectAccount()
    }
    const sign = await eth.request({
      method: 'personal_sign',
      params: [msg, account, 'DeSchool sign message'],
    })
    return sign
  }

  async mount(): Promise<void> {
    this.disposing()
    const d1 = onAccountchanged(a => this.accountChanged(a))
    const d2 = onDisconnect(() => this.disconnected())
    const d3 = onChainChange(c => this.onChainChanged(c))
    this.dispose = () => {
      d1()
      d2()
      d3()
    }
  }

  async unmount(): Promise<void> {
    this.disposing()
  }

  disposing() {
    if (this.dispose) {
      this.dispose()
    }
  }

  accountChanged(account: string[]): void {
    if (this.config.accountChanged) {
      if (account) {
        this.config.accountChanged(account[0])
      }
    }
  }

  disconnected(): void {
    if (this.config.disconnected) {
      this.config.disconnected()
    }
  }

  onChainChanged(chainId: string): void {
    if (this.config.chainChanged) {
      this.config.chainChanged(chainId)
    }
  }

  protected async getEth(): Promise<any> {
    const enable = await this.isEnabled()
    if (!enable.isEnabled) {
      throw new Error(enable.message)
    }
    return window.ethereum
  }
}
