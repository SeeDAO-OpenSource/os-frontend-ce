
const MainnetChainId = 1; // Mainnet
// const GoerliChainId = 5; // Goerli
const PolygonChainId = 137; // Polygon

const toHex = (num: number) => `0x${num.toString(16)}`

export async function swtichChain(chain: any, rpc: any) {
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: toHex(chain.chainId) }],
    })
  } catch (switchError: any) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      // eslint-disable-next-line no-useless-catch
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: toHex(chain.chainId),
              chainName: chain.name,
              rpcUrls: rpc ? [rpc] : chain.rpc.map((r: any) => r.url),
            },
          ],
        })
        // eslint-disable-next-line no-useless-catch
      } catch (addError) {
        // handle "add" error
        throw addError
      }
    }
    // handle other "switch" errors
  }
}

export async function switchChain(chainId: number) {
  await window.ethereum.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: toHex(chainId) }],
  })
}

export async function checkIsExpectChain(chainId: number = MainnetChainId) {
  const p = window.ethereum
  const chainIdHex = await p.request({
    method: 'eth_chainId',
  })
  const currentChianId = parseInt(chainIdHex, 16)
  return currentChianId === chainId
}

export function checkEthereum(): boolean {
  return !!window.ethereum
}

export interface ConnectInfo {
  chainId: string
}

export interface ProviderMessage {
  type: string
  data: unknown
}

export interface ProviderRpcError extends Error {
  message: string
  code: number
  data?: unknown
}

export function onAccountchanged(handler: (accounts: string[]) => void) {
  if (window.ethereum) {
    window.ethereum?.on('accountsChanged', (ac: string[]) => {
      ac = ac ?? []
      handler(ac)
    })
  }
  return () => {
    window.ethereum?.removeListener('accountsChanged', handler)
  }
}

export function onDisconnect(handler: (err: ProviderRpcError) => void) {
  if (window.ethereum) {
    window.ethereum.on('disconnect', handler)
  }
  return () => {
    window.ethereum?.removeListener('disconnect', handler)
  }
}

export function onChainChange(handler: (chainId: string) => void) {
  if (window.ethereum) {
    window.ethereum.on('chainChanged', handler)
  }
  return () => {
    window.ethereum?.removeListener('chainChanged', handler)
  }
}

