import { ethers } from "ethers"
import SCORE_ABI from "../data/scoreabi.json"

const WALLET_ADDRESS = "walletAddress"
const SCORE_ADDRESS = "0xc74DEE15a4700D5df797bDD3982EE649A3Bb8c6C"

export const ScoreService = {
  fetchScore,
  getScore
}

async function fetchScore(account) {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const contract = new ethers.Contract(SCORE_ADDRESS, SCORE_ABI.abi, provider)
  let addr = account
  if(account === '' || account === null || account === undefined || account === 0){
    addr = localStorage.getItem(WALLET_ADDRESS)
  }
  console.log('addr::', addr)
  return ethers.utils.formatEther(await contract.balanceOf(addr))
}

async function getScore() {
  console.log('localStorage.getItem(WALLET_ADDRESS)::', localStorage.getItem(WALLET_ADDRESS))
  const score = await this.fetchScore(localStorage.getItem(WALLET_ADDRESS))
  console.log('score::', score)
  return score
}
