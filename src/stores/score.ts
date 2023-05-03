import { defineStore } from 'pinia'
import ScoreService from "@/services/score.service"
// import type { Score } from "@/spec/user"
import { getQuery } from "@/spec/query"
import type { Query } from "@/spec/query"
import osapi from "@/services/osapi.service"
const API_PATH_SCORE = "/api/scores"

interface WalletScore {
  onchainScore: number,
  offchainScore: number,
  level: number
}

interface ScoreState {
  wallet: WalletScore,
  searchRecords: Array<any>
  fullRecord: any
  myRegisteredRecords: Array<any>
}

export const useScoreStore = defineStore('score', {

  state: (): ScoreState => ({
    wallet: {
      onchainScore: -1,
      offchainScore: -1,
      level: -1,
    },
    searchRecords: [],
    fullRecord: {},
    myRegisteredRecords: [
    ]
  }),

  actions: {
    fetchFullPointRecord(recordId: string) {
      return new Promise((resolve, reject) => {
        osapi
          .post(`${API_PATH_SCORE}/find`, { recordId })
          .then((data) => {
            const scores: any = data.data.data
            this.setFullRecord(scores)
            resolve(scores)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    queryPointRecords(query: Partial<Query>) {
      return new Promise((resolve, reject) => {
        osapi
          .post(`${API_PATH_SCORE}/find`, getQuery(query))
          .then((data) => {
            const scores: any = data.data.data
            this.setScoreSearched(scores)
            resolve(scores)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    fetchAllPointRecords(filter: Partial<Query>) {
      return new Promise((resolve, reject) => {
        osapi
          .post(`${API_PATH_SCORE}/find/all`, filter)
          .then((data) => {
            const scores: any = data.data.data
            this.setScoreSearched(scores)
            resolve(scores)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    registerScore(records: Array<Partial<any>>) {
      return new Promise((resolve, reject) => {
        osapi
          .post(`${API_PATH_SCORE}/create`, { records })
          .then((data) => {
            const temp = data.data.data
            console.log('temp::', temp)
            resolve(temp)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    fetchScoreMyRegistered(creatorId: string) {
      return new Promise((resolve, reject) => {
        osapi
          .post(`${API_PATH_SCORE}/find/creator`, { creatorId })
          .then((data) => {
            const scores: any = data.data.data
            this.setScoresMyRegistered(scores)
            resolve(scores)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    fetchWalletOnchainScore(wallet: string | null) {
      return new Promise((resolve, reject) => {
        ScoreService.fetchScore(wallet)
          .then((score) => {
            this.setWalletOnchainScore(Number(score))
            resolve(score)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    setFullRecord(record: any) {
      this.fullRecord = record
    },

    setWalletOnchainScore(score: number) {
      this.wallet.onchainScore = score
    },

    setScoresMyRegistered(records: any) {
      this.myRegisteredRecords = records
    },

    setScoreSearched(records: any) {
      this.searchRecords = records
    },

    updateWalletLevel() {
      const score = (this.wallet.onchainScore > -1 ? this.wallet.onchainScore : 0)
        + (this.wallet.offchainScore > -1 ? this.wallet.offchainScore : 0)
      if (score < 5000) {
        this.wallet.level = 0
      } else if (score < 20000) {
        this.wallet.level = 1
      } else if (score < 100000) {
        this.wallet.level = 2
      } else if (score < 300000) {
        this.wallet.level = 3
      } else if (score < 1000000) {
        this.wallet.level = 4
      } else {
        this.wallet.level = 5
      }
    },

    clearScore() {
      this.$reset()
    }
  },

  getters: {
  }
})

