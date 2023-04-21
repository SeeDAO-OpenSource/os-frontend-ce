import api from "@/services/api.service"
import EthersService from "@/services/ether.service"
const API_PATH_USER = "/api/users"

// action types
export const FETCH_USER_QUICK_LIST = "fetchUserQuickList"
export const FETCH_WALLET_USER = "fetchWalletUser"
export const CLEAR_WALLET_USER = "clearWalletUser"
export const UPDATE_USER = "updateUser"

// mutation types
export const SET_WALLET_USER = "setWalletUser"
export const SET_USER_QUICK_LIST = "setUserQuickList"
export const SET_USER_NAME = "setUserName"
export const SET_USERS_NAME = "setUsersName"

// getter types
export const GET_WALLET_USER = "getWalletUser"
export const GET_WALLET_USER_NAME = "getWalletUserName"
export const GET_USERS_NAME = "getUsersName"
export const GET_USER_QUICK_LIST = "getUserQuickList"

function getUserName(nickname, address) {
  const shorts = EthersService.shortWalletAddress(address)
  if (nickname) {
    return `${nickname} (${shorts})`
  } else {
    return shorts
  }
}
const state = {
  quickList: [],
  usersname: [],
  username: "",
  walletUser: null
}

const getters = {
  [GET_USER_QUICK_LIST](state) {
    return state.quickList
  },
  [GET_USERS_NAME](state) {
    return state.usersname
  },
  [GET_WALLET_USER](state) {
    return state.walletUser
  },
  [GET_WALLET_USER_NAME](state) {
    return state.username
  }
}

const actions = {
  [CLEAR_WALLET_USER](context) {
    context.commit(SET_WALLET_USER, null)
    context.commit(SET_USER_NAME, "")
  },
  [UPDATE_USER](context, user) {
    return new Promise((resolve, reject) => {
      api
        .post(`${API_PATH_USER}/profile/update`, user)
        .then((data) => {
          const user = data.data.data
          context.commit(SET_WALLET_USER, user)
          context.commit(SET_USER_NAME, user)
          resolve(user)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  [FETCH_USER_QUICK_LIST](context) {
    return new Promise((resolve, reject) => {
      api
        .post(`${API_PATH_USER}/quick/list`, {})
        .then((data) => {
          const users = data.data.data
          let list = []
          let usersname = []
          users.forEach((user) => {
            if (user.nickname) {
              usersname.push(getUserName(user.nickname, user.wallet))
              list.push({
                username: getUserName(user.nickname, user.wallet),
                ...user
              })
            } else {
              list.push(user)
            }
          })
          context.commit(SET_USERS_NAME, usersname)
          context.commit(SET_USER_QUICK_LIST, list)
          resolve(list)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  [FETCH_WALLET_USER](context, wallet = EthersService.walletAddress()) {
    return new Promise((resolve, reject) => {
      context.commit(SET_WALLET_USER, null)
      context.commit(SET_USER_NAME, "")
      api
        .post(`${API_PATH_USER}/find`, { wallet })
        .then((data) => {
          const user = data.data.data
          context.commit(SET_WALLET_USER, user)
          context.commit(SET_USER_NAME, user)
          resolve(user)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

const mutations = {
  [SET_USER_QUICK_LIST](state, list) {
    state.quickList = list
  },
  [SET_WALLET_USER](state, user) {
    state.walletUser = user
  },
  [SET_USER_NAME](state, user) {
    if(user && user.nickname && user.wallet){
      state.username = getUserName(user.nickname, user.wallet)
    }
  },
  [SET_USERS_NAME](state, usersname){
    state.usersname = usersname
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}

/**
 *
 *
 *
 */

