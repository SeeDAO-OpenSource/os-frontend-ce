import { defineStore } from 'pinia'
import ScoreService from "@/services/score.service"
import type { SearchRecord, FullRecord, WalletScore, NewRecord, NewRecordResult, ScoreMyRegistered } from "@/types/score"
import { getQuery } from "@/types/query"
import type { Query } from "@/types/query"
import osapi from "@/services/osapi.service"

const API_PATH_SCORE = "/api/scores"
interface ScoreState {
  wallet: WalletScore,
  searchRecords: Array<SearchRecord>,
  fullRecord: FullRecord,
  myScores: Array<SearchRecord>,
  myRegisteredRecords: Array<ScoreMyRegistered>,
  symbolShortName: string,
}

export const useScoreStore = defineStore('score', {
  state: (): ScoreState => ({
    symbolShortName: "$SCR",
    wallet: {
      onchainScore: -1,
      offchainScore: {
        registered: -1,
        reviewing: -1
      },
      updated: 0,
      level: -1,
    },
    searchRecords: [],
    fullRecord: {
      _id: -1,
      wallet: "",
      event: "",
      creator: {
        _id: 0,
        wallet: "",
        nickname: ""
      },
      beneficiary: {
        _id: 0,
        wallet: "",
        nickname: ""
      },
      status: "",
      value_claim: -1,
      datetime: -1,
      links: [],
      budget: {
        subject: "",
        _id: -1
      },
      notes: "",
      value_fulfilled: -1,
    },
    myScores: [],
    myRegisteredRecords: []
  }),

  actions: {

    
    fetchFullPointRecord(recordId: string): Promise<FullRecord> {
      return new Promise((resolve, reject) => {
        osapi
          .post(`${API_PATH_SCORE}/find/id`, { recordId })
          .then((data) => {
            const record: FullRecord = data.data.data
            this.setFullRecord(record)
            resolve(record)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    queryMyScores(query: Partial<Query>) {
      return new Promise((resolve, reject) => {
        osapi
          .post(`${API_PATH_SCORE}/query`, getQuery(query))
          .then((data) => {
            const scores: any = data.data.data
            this.setMyScores(scores)
            resolve(scores)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    queryScoreUserRegistered(query: Partial<Query>) {
      return new Promise((resolve, reject) => {
        osapi
          .post(`${API_PATH_SCORE}/query`, getQuery(query))
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

    searchScores(query: Partial<Query>): Promise<Array<SearchRecord>> {
      return new Promise((resolve, reject) => {
        console.log('query::', query) 
        osapi
          .post(`${API_PATH_SCORE}/query`, getQuery(query))
          .then((data) => {
            const scores: Array<SearchRecord> = data.data.data
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
            const scores: Array<SearchRecord> = data.data.data
            this.setScoreSearched(scores)
            resolve(scores)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    registerScore(records: Array<NewRecord>) {
      return new Promise((resolve, reject) => {
        osapi
          .post(`${API_PATH_SCORE}/create`, { records })
          .then((data) => {
            const records: Array<NewRecordResult> = data.data.data
            console.log('records::', records)
            resolve(records)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    fetchScoreMyRegistered(creatorId: string): Promise<ScoreMyRegistered[]> {
      return new Promise((resolve, reject) => {
        osapi
          .post(`${API_PATH_SCORE}/find/creator`, { creatorId })
          .then((data) => {
            const scores: ScoreMyRegistered[] = data.data.data
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

    fetchWalletRegisteredScore(userId: string | null) {
      return new Promise((resolve, reject) => {
        osapi
          .post(`${API_PATH_SCORE}/find/registered/total`, { userId })
          .then((data) => {
            const score: number = data.data.data
            this.setOffChainRegisteredScore(score)
            resolve(score)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    fetchWalletReviewingScore(userId: string | null) {
      return new Promise((resolve, reject) => {
        osapi
          .post(`${API_PATH_SCORE}/find/reviewing/total`, { userId })
          .then((data) => {
            const score: number = data.data.data
            this.setOffChainReviewingScore(score)
            resolve(score)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    setFullRecord(record: FullRecord) {
      this.fullRecord = record
    },

    setWalletOnchainScore(score: number) {
      this.wallet.onchainScore = score
      this.wallet.updated = new Date().getTime()
    },

    setScoresMyRegistered(records: Array<ScoreMyRegistered>) {
      this.myRegisteredRecords = records
    },

    setScoreSearched(records: Array<SearchRecord>) {
      this.searchRecords = records
    },

    setMyScores(records: Array<SearchRecord>) {
      this.myScores = records
    },

    setOffChainRegisteredScore(score: number){
      console.log('reg score:', score)
      this.wallet.offchainScore.registered = score
    },

    setOffChainReviewingScore(score: number){
      console.log('review score:', score)
      this.wallet.offchainScore.reviewing = score
    },

    updateWalletLevel() {
      const score = (this.wallet.onchainScore > -1 ? this.wallet.onchainScore : 0)
        + (this.wallet.offchainScore.registered > -1 ? this.wallet.offchainScore.registered : 0)
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