import api from "@/services/api.service"
import { ScoreService } from "@/services/score.service"
const API_PATH_SCORE = "/api/scores"

// action types
export const FETCH_SCORE = "fetchScore"
export const CLEAR_SCORE = "clearScore"
export const REGISTER_SCORE = "registerScore"
export const QUERY_POINT_RECORDS = "queryPointRecords"
export const FETCH_ALL_POINT_RECORDS = "fetchAllPointRecords"
export const FETCH_SCORE_MY_REGISTERED = "fetchScoreMyRegistered"
export const FETCH_FULL_POINT_RECORD = "fetchFullPointRecord"

// mutation types
export const SET_SCORE = "setScore"
export const SET_SCORE_MY_REGISTERED = "setScoreMyRegistered"
export const SET_SCORE_SEARCHED = "setScoreSearched"
export const SET_FULL_RECORD = "setFullRecord"
export const SET_LEVEL = "setLevel"

// getter types
export const GET_SCORE = "getScore"
export const GET_SCORE_MY_REGISTERED = "getScoreMyRegistered"
export const GET_SCORE_SEARCHED = "getScoreSearched"
export const GET_FULL_RECORD = "getFullRecord"
export const GET_LEVEL = "getLevel"

function getLevel(score) {
  if (score < 5000) {
    return 0
  } else if (score < 20000) {
    return 1
  } else if (score < 100000) {
    return 2
  } else if (score < 300000) {
    return 3
  } else if (score < 1000000) {
    return 4
  } else {
    return 5
  }
}

const state = {
  score: -1,
  level: -1,
  searchRecords: [],
  fullRecord: {},
  myRegisteredRecords: []
}

const getters = {
  [GET_FULL_RECORD](state){
    return state.fullRecord
  },
  [GET_SCORE_SEARCHED](state) {
    return state.searchRecords
  },
  [GET_SCORE_MY_REGISTERED](state) {
    return state.myRegisteredRecords
  },
  [GET_SCORE](state) {
    return state.score
  },
  [GET_LEVEL](state) {
    return state.level
  }
}

const actions = {
  [FETCH_FULL_POINT_RECORD](context, recordId){
    return new Promise((resolve, reject) => {
      context.commit(SET_FULL_RECORD, {})
      api
        .post(`${API_PATH_SCORE}/find/id`, { recordId })
        .then((data) => {
          context.commit(SET_FULL_RECORD, data.data.data)
          resolve(data.data.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  [QUERY_POINT_RECORDS](context, data) {
    return new Promise((resolve, reject) => {
      api
        .post(`${API_PATH_SCORE}/query`, {
          query: data.query ? data.query : { filter: "", condition: "" },
          offset: data.offset ? data.offset : 0,
          limit: data.limit ? data.limit : 1000
        })
        .then((data) => {
          context.commit(SET_SCORE_SEARCHED, data.data.data)
          resolve(data.data.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  [FETCH_ALL_POINT_RECORDS](context, data) {
    return new Promise((resolve, reject) => {
      api
        .post(`${API_PATH_SCORE}/find/all`, {
          offset: data.offset ? data.offset : 0,
          limit: data.limit ? data.limit : 1000
        })
        .then((data) => {
          console.log("data::", data.data.data)
          context.commit(SET_SCORE_SEARCHED, data.data.data)
          resolve(data.data.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  [REGISTER_SCORE](context, records) {
    return new Promise((resolve, reject) => {
      api
        .post(`${API_PATH_SCORE}/create`, { records })
        .then((data) => {
          console.log("data::", data)
          resolve(data.data.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  [FETCH_SCORE_MY_REGISTERED](context, creatorId) {
    return new Promise((resolve, reject) => {
      api
        .post(`${API_PATH_SCORE}/find/creator`, { creatorId })
        .then((data) => {
          context.commit(SET_SCORE_MY_REGISTERED, data.data.data)
          resolve(data.data.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  [CLEAR_SCORE](context) {
    context.commit(SET_SCORE, -1)
  },
  [FETCH_SCORE](context, wallet) {
    return new Promise((resolve, reject) => {
      ScoreService.fetchScore(wallet)
        .then((score) => {
          context.commit(SET_SCORE, score)
          const level = getLevel(score)
          context.commit(SET_LEVEL, level)
          resolve(score)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

const mutations = {
  [SET_FULL_RECORD](state, record){
    state.fullRecord = record
  },
  [SET_SCORE](state, score) {
    state.score = score
  },
  [SET_LEVEL](state, level) {
    state.level = level
  },
  [SET_SCORE_MY_REGISTERED](state, records) {
    state.myRegisteredRecords = records
  },
  [SET_SCORE_SEARCHED](state, records) {
    state.searchRecords = records
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
