import { ethers } from "ethers"
import SCORE_ABI from "../data/scoreabi.json"

const WALLET_ADDRESS = "walletAddress"
const SCORE_ADDRESS = "0xc74DEE15a4700D5df797bDD3982EE649A3Bb8c6C"

export default class ScoreService {    
    static async fetchScore(account: string | null | undefined) {
       const provider = new ethers.BrowserProvider(window.ethereum)
       const contract = new ethers.Contract(SCORE_ADDRESS, SCORE_ABI.abi, provider)
       let addr = account
       if(account === '' || account === null || account === undefined){
         addr = localStorage.getItem(WALLET_ADDRESS)
       }
       return ethers.formatEther(await contract.balanceOf(addr))
     }
     
     static async getScore() {
       const score = await this.fetchScore(localStorage.getItem(WALLET_ADDRESS))
       return score
     }
}