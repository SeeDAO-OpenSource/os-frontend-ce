const WALLET_ADDRESS = "walletAddress"
const SGN_ADDRESS = "0x23fda8a873e9e46dbe51c78754dddccfbc41cfe1"
const SGN_COLLECTION = "seedaogenesis"

export default class SGNService {
  async fetchSGN(account, cursor, data) {
    let sgn = data
    let results = null
    if (cursor === "") {
      results = await fetch(
        `https://api.opensea.io/api/v1/assets?owner=${account}&collection=${SGN_COLLECTION}`
      )
    } else {
      results = await fetch(
        `https://api.opensea.io/api/v1/assets?owner=${account}&collection=${SGN_COLLECTION}&cursor=${cursor}`
      )
    }
    if (results !== null) {
      const nfts = await results.json()
      nfts.assets.forEach((nft) => {
        if (nft.asset_contract.address.toLowerCase() === SGN_ADDRESS.toLowerCase()) {
          sgn.push({
            image: nft.image_url,
            url: nft.permalink,
            id: nft.token_id,
            traits: nft.traits
          })
        }
      })
      if (nfts.next === null || nfts.next === cursor) {
        return sgn
      } else {
        return await this.fetchSGN(account, nfts.next, sgn)
      }
    } else {
      return sgn
    }
  }

  async getSGN() {
    return await this.fetchSGN(localStorage.getItem(WALLET_ADDRESS), "", [])
  }
}
