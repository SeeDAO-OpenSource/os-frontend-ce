import api from "@/services/api.service"
const API_PATH_BUDGET = "/api/budgets"

// action types
export const FETCH_BUDGETS_SUBJECT = "fetchBudgetsSubject"

// mutation types
export const SET_BUDGETS_SUBJECT = "setBudgetsSubject"

// getter types
export const GET_BUDGETS_SUBJECT = "getBudgetsSubject"

const state = {
  subjects: []
}

const getters = {
  [GET_BUDGETS_SUBJECT](state) {
    return state.subjects
  }
}

const actions = {
  [FETCH_BUDGETS_SUBJECT](context, season) {
    return new Promise((resolve, reject) => {
      api
        .post(`${API_PATH_BUDGET}/query/subject`, { season })
        .then((data) => {
          console.log("data::", data)
          context.commit(SET_BUDGETS_SUBJECT, data.data.data)
          resolve(data.data.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

const mutations = {
  [SET_BUDGETS_SUBJECT](state, subjects) {
    state.subjects = subjects
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}