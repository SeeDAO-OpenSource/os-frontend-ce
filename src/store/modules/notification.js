import api from "@/services/api.service"
const API_PATH_NOTIFICATION = "/api/notifications"

// action types
export const SEND_EMAIL_AUTH_CODE = "sendEmailAuthCode"
export const VERIFY_EMAIL_AUTH_CODE = "verifyEmailAuthCode"

// mutation types
export const SET_EMAIL_VERIFY_STATUS = "setEmailVerifyStatus"

// getter types
export const GET_EMAIL_VERIFY_STATUS = "getEmailVerifyStatus"

const state = {
  email: {
    isVerified: false,
  }
}

const getters = {
  [GET_EMAIL_VERIFY_STATUS](state) {
    return state.email.isVerified
  },
}

const actions = {
  [SEND_EMAIL_AUTH_CODE](context, data) {
    return new Promise((resolve, reject) => {
      api
        .post(`${API_PATH_NOTIFICATION}/mail/auth`, data)
        .then((data) => {
          console.log('data.data.data:', data.data.data)
          resolve(data.data.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  [VERIFY_EMAIL_AUTH_CODE](context, data) {
    return new Promise((resolve, reject) => {
      api
        .post(`${API_PATH_NOTIFICATION}/mail/verify`, data)
        .then((data) => {
          console.log('data.data.data:', data.data.data)
          resolve(data.data.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

const mutations = {
  [SET_EMAIL_VERIFY_STATUS](state, status) {
    state.email.isVerified = status
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}
