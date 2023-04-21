import Moralis from "moralis"
import { EvmChain } from "@moralisweb3/evm-utils"

const IPFS_PREFIX = "ipfs://"
const IPFSIO_PREFIX = "https://ipfs.io/ipfs/"
const WALLET_ADDRESS = "walletAddress"
const MORALIS_APIKEY =
  "Utv89gEdxShqULjKOEmnXFgCnMY0BnIwgzBRXORhbSrHoQx3RMzgSYmko7BeU72v"
const POAPV1_ADDRESS = "0x2C436d61C5Af62bcbfeE40B1f0BE5B483DfA0E11"
const DESCHOOL_SBT_ADDRESS = "0x0D9ea891B4C30e17437D00151399990ED7965F00"
const SEEDAO_FORTUNE_BADGE_ADDRESS =
  "0x1B0fD9020007fEcBaA9dFE141f16209Df04E2BF6"
const SEEDAO_ONBOARDING_SBT_ADDRESS = ""
const SEEDAO_ONBOARDING_SBT_TOKEN_ID = 157
const SEEDAO_NODE_COLLECTION = "seedao-node"
const SEEDAO_NODE_ADDRESS = "0x9d34D407D8586478b3e4c39BE633ED3D7be1c80C"

export default class SBTService {
  static async init() {
    await Moralis.start({
      apiKey: MORALIS_APIKEY
    })
  }

  ipfsLinkConvert(link) {
    if (link !== null && link !== undefined) {
      const prefix = link.slice(0, IPFS_PREFIX.length)
      if (prefix === IPFS_PREFIX) {
        return link.replace(IPFS_PREFIX, IPFSIO_PREFIX)
      }
    }
    return link
  }

  isSeeDAOPOAP(address) {
    const addr = address.toLowerCase()
    return (
      addr === POAPV1_ADDRESS.toLowerCase() ||
      addr === DESCHOOL_SBT_ADDRESS.toLowerCase() ||
      addr === SEEDAO_FORTUNE_BADGE_ADDRESS.toLowerCase()
    )
  }

  async fetchNodes(account, cursor, data) {
    let nodes = data
    let results = null
    if (cursor === "") {
      results = await fetch(
        `https://api.opensea.io/api/v1/assets?owner=${account}&collection=${SEEDAO_NODE_COLLECTION}`
      )
    } else {
      results = await fetch(
        `https://api.opensea.io/api/v1/assets?owner=${account}&collection=${SEEDAO_NODE_COLLECTION}&cursor=${cursor}`
      )
    }
    if (results !== null) {
      const nfts = await results.json()
      nfts.assets.forEach((nft) => {
        if (
          nft.asset_contract.address.toLowerCase() ===
          SEEDAO_NODE_ADDRESS.toLowerCase()
        ) {
          nodes.push({
            image: this.ipfsLinkConvert(nft.image_url),
            url: nft.permalink,
            id: nft.token_id,
            name: nft.name,
            description: nft.description,
            traits: nft.traits
          })
        }
      })
      if (nfts.next === null || nfts.next === cursor) {
        return nodes
      } else {
        return await this.fetchNodes(account, nfts.next, nodes)
      }
    } else {
      return nodes
    }
  }
  async fetchPOAP(account) {
    const chain = EvmChain.POLYGON

    const response = await Moralis.EvmApi.nft.getWalletNFTs({
      address: account,
      chain
    })
    const data = await response.getResult()

    let poaps = []

    data.forEach((nft) => {
      const nftdata = nft._data
      const address = nftdata.tokenAddress._value
      if (this.isSeeDAOPOAP(address)) {
        let poap = {
          uri: nft.token_uri,
          ...nftdata.metadata
        }
        poap.image = this.ipfsLinkConvert(poap.image)
        poaps.push(poap)
      }
    })
    return poaps
  }

  async getSBT() {
    const nodes = await this.fetchNodes(
      localStorage.getItem(WALLET_ADDRESS),
      "",
      []
    )
    const poaps = await this.fetchPOAP(localStorage.getItem(WALLET_ADDRESS))

    return [...nodes, ...poaps]
  }
}
