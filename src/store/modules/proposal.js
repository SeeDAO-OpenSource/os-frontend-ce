import api from "@/services/api.service"
const API_PATH_PROPOSAL = "/api/proposals"

// action types
export const CREATE_PROPOSALS = "createProposal"
export const FETCH_METAFORO_PROPOSALS = "fetchMetaforoProposals"
export const FIND_USER_BY_METAFORO_USER_ID = "findUserByMetaforoUserId"
export const QUERY_PROPOSALS_BY_CATEGORY = "queryProposalsByCategory"
export const QUERY_ALL_PROPOSALS = "queryAllProposals"
export const FIND_PROPOSALS_BY_TITLE = "findProposalsByTitle"
export const FETCH_PROPOSAL_BY_ID = "fetchProposalById"

// mutation types
export const SET_METAFORO_PROPOSALS = "setMetaforoProposals"
export const SET_USER_FROM_METAFORO = "setUserFromMetaforo"
export const SET_PROPOSAL = "setProposal"
export const SET_ALL_PROPOSALS = "setAllProposals"

// getter types
export const GET_METAFORO_PROPOSALS = "getMetaforoProposals"
export const GET_USER_FROM_METAFORO = "getUserFromMetaforo"
export const GET_PROPOSAL = "getProposal"
export const GET_ALL_PROPOSALS = "getAllProposals"

const state = {
  proposal: undefined,
  allProposals: [],
  metaforoProposals: [],
  user: undefined
}

const getters = {
  [GET_METAFORO_PROPOSALS](state) {
    return state.metaforoProposals
  },
  [GET_USER_FROM_METAFORO](state) {
    return state.user
  },
  [GET_PROPOSAL](state) {
    return state.proposal
  },
  [GET_ALL_PROPOSALS](state) {
    return state.allProposals
  }
}

const actions = {
  [FETCH_PROPOSAL_BY_ID](context, id){
    return new Promise((resolve, reject) => {
      context.commit(SET_PROPOSAL, undefined)
      api
        .post(`${API_PATH_PROPOSAL}/find/id`, id)
        .then((data) => {
          context.commit(SET_PROPOSAL, data.data.data)
          resolve(data.data.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  [QUERY_ALL_PROPOSALS](context, data) {
    return new Promise((resolve, reject) => {
      api
        .post(`${API_PATH_PROPOSAL}/query/all`, data)
        .then((data) => {
          context.commit(SET_ALL_PROPOSALS, data.data.data)
          resolve(data.data.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  [CREATE_PROPOSALS](context, proposals) {
    return new Promise((resolve, reject) => {
      api
        .post(`${API_PATH_PROPOSAL}/create`, proposals)
        .then((data) => {
          context.commit(SET_PROPOSAL, data.data.data)
          resolve(data.data.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  [FIND_PROPOSALS_BY_TITLE](context, title) {
    return new Promise((resolve, reject) => {
      api
        .post(`${API_PATH_PROPOSAL}/find/title`, { title })
        .then((data) => {
          context.commit(SET_PROPOSAL, data.data.data)
          resolve(data.data.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  [FIND_USER_BY_METAFORO_USER_ID](context, metaforoUserId) {
    return new Promise((resolve, reject) => {
      api
        .post(`${API_PATH_PROPOSAL}/metaforo/users/find/id`, { metaforoUserId })
        .then((data) => {
          context.commit(SET_USER_FROM_METAFORO, data.data.data)
          resolve(data.data.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  [FETCH_METAFORO_PROPOSALS](context, categoryId) {
    return new Promise((resolve, reject) => {
      context.commit(SET_METAFORO_PROPOSALS, [])
      api
        .post(`${API_PATH_PROPOSAL}/metaforo/proposals/find/category`, {
          categoryId
        })
        .then((data) => {
          context.commit(SET_METAFORO_PROPOSALS, data.data.data)
          resolve(data.data.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

const mutations = {
  [SET_METAFORO_PROPOSALS](state, proposals) {
    state.fullRecord = proposals
  },
  [SET_USER_FROM_METAFORO](state, user) {
    state.user = user
  },
  [SET_PROPOSAL](state, proposal) {
    state.proposal = proposal
  },
  [SET_ALL_PROPOSALS](state, proposals) {
    state.allProposals = proposals
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}
