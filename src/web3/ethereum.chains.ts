
export const Mainnet = {
  "name": "Ethereum Mainnet",
  "chain": "ETH",
  "icon": "ethereum",
  "rpc": [
    {
      "url": "https://eth.llamarpc.com",
      "tracking": "none",
      "trackingDetails": "LlamaNodes is open-source and does not track or store any kind of user information (i.e., location, IP, wallet address, etc) that transits through our RPCs, ever. To learn more, review the public privacy policy: https://llamanodes.notion.site/Privacy-Practices-f20fd8fdd02a469d9d4f42a5989bb936",
      "isOpenSource": true
    },
    {
      "url": "https://endpoints.omniatech.io/v1/eth/mainnet/public",
      "tracking": "none",
      "trackingDetails": "All the data and metadata remain private to the users. No third party is able to access, analyze or track it. OMNIA leverages different technologies and approaches to guarantee the privacy of their users, from front-running protection and private mempools, to obfuscation and random dispatching. https://blog.omniatech.io/how-omnia-handles-your-personal-data"
    },
    {
      "url": "https://rpc.ankr.com/eth",
      "tracking": "limited",
      "trackingDetails": "For service delivery purposes, we temporarily record IP addresses to set usage limits and monitor for denial of service attacks against our infrastructure. Though we do look at high-level data around the success rate of transactions made over the blockchain RPC, we do not correlate wallet transactions made over the infrastructure to the IP address making the RPC request. Thus, we do not store, exploit, or share any information regarding Personal Identifiable Information (PII), including wallet addresses. https://www.ankr.com/blog/ankrs-ip-address-policy-and-your-privacy/"
    },
    {
      "url": "https://eth-mainnet.nodereal.io/v1/1659dfb40aa24bbb8153a677b98064d7",
      "tracking": "yes",
      "trackingDetails": "We may automatically record certain information about how you use our Sites (we refer to this information as \"Log Data\"). Log Data may include information such as a user's Internet Protocol (IP) address, device and browser type, operating system, the pages or features of our Sites to which a user browsed and the time spent on those pages or features, the frequency with which the Sites are used by a user, search terms, the links on our Sites that a user clicked on or used, and other statistics. We use this information to administer the Service and we analyze (and may engage third parties to analyze) this information to improve and enhance the Service by expanding its features and functionality and tailoring it to our users' needs and preferences. https://nodereal.io/terms"
    },
    {
      "url": "https://ethereum.publicnode.com",
      "tracking": "none",
      "trackingDetails": "We do not store or track any user data with the exception of data that will be public on chain. We do not correlate wallets address's with IP's,  any data which is needed to transact is deleted after 24 hours. We also do no use any Analytics or 3rd party website tracking. https://www.publicnode.com/privacy"
    },
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://ethereum.org",
  "shortName": "eth",
  "chainId": 1,
  "networkId": 1,
  "slip44": 60,
  "ens": {
    "registry": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
  },
  "explorers": [
    {
      "name": "etherscan",
      "url": "https://etherscan.io",
      "standard": "EIP3091"
    }
  ],
  "tvl": 52152941667.63168,
  "chainSlug": "ethereum"
}

export const Polygon = {
  "name": "Polygon Mainnet",
  "chain": "Polygon",
  "icon": "polygon",
  "rpc": [
    { "url": "https://polygon-rpc.com" },
    { "url": "https://rpc-mainnet.matic.network" },
    { "url": "https://rpc-mainnet.maticvigil.com" },
    { "url": "https://rpc-mainnet.matic.quiknode.pro" },
    { "url": "https://matic-mainnet.chainstacklabs.com" },
    { "url": "https://matic-mainnet-full-rpc.bwarelabs.com" },
    { "url": "https://matic-mainnet-archive-rpc.bwarelabs.com" },
    { "url": "https://poly-rpc.gateway.pokt.network" },
    {
      "url": "https://rpc.ankr.com/polygon",
      "tracking": "limited",
      "trackingDetails": "For service delivery purposes, we temporarily record IP addresses to set usage limits and monitor for denial of service attacks against our infrastructure. Though we do look at high-level data around the success rate of transactions made over the blockchain RPC, we do not correlate wallet transactions made over the infrastructure to the IP address making the RPC request. Thus, we do not store, exploit, or share any information regarding Personal Identifiable Information (PII), including wallet addresses. https://www.ankr.com/blog/ankrs-ip-address-policy-and-your-privacy/",
    },
    { "url": "https://rpc-mainnet.maticvigil.com" },
    {
      "url": "https://polygon-mainnet.public.blastapi.io",
      "tracking": "limited",
      "trackingDetails": "All the information in our logs (log data) can only be accessed for the last 7 days at any certain time, and it is completely purged after 14 days. We do not store any user information for longer periods of time or with any other purposes than investigating potential errors and service failures. https://blastapi.io/privacy-policy",
    },
    { "url": "https://polygonapi.terminet.io/rpc" },
    {
      "url": "https://1rpc.io/matic",
      "tracking": "none",
      "trackingDetails": "With the exception of data that will be public on chain, all the other metadata / data should remain private to users and other parties should not be able to access or collect it. 1RPC uses many different techniques to prevent the unnecessary collection of user privacy, which prevents tracking from RPC providers. https://docs.ata.network/1rpc/design/#tracking-prevention",
    },
    { "url": "https://polygon-mainnet.rpcfast.com" },
    { "url": "https://polygon-mainnet.rpcfast.com?api_key=eQhI7SkwYXeQJyOLWrKNvpRnW9fTNoqkX0CErPfEsZjBBtYmn2e2uLKZtQkHkZdT" },
    {
      "url": "https://polygon-bor.publicnode.com",
      "tracking": "yes",
      "trackingDetails": "We may also collect information on how the Service is accessed and used (\\'Usage Data\\'). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data. https://www.allnodes.com/privacy",
    },
    { "url": "https://polygon-mainnet-public.unifra.io" },
  ],
  "faucets": [],
  "nativeCurrency": { "name": "MATIC", "symbol": "MATIC", "decimals": 18 },
  "infoURL": "https://polygon.technology/",
  "shortName": "matic",
  "chainId": 137,
  "networkId": 137,
  "slip44": 966,
  "explorers": [{ "name": "polygonscan", "url": "https://polygonscan.com", "standard": "EIP3091" }],
  "tvl": 1242987972.0764065,
  "chainSlug": "polygon",
}
