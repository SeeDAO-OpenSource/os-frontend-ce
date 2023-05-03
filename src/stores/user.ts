import { defineStore } from 'pinia'
import EthersService from "@/services/ethers.service"
import type { User } from "@/spec/user"
import osapi from "@/services/osapi.service"
const API_PATH_USER = "/api/users"

interface UserState {
  quickList: Array<any>
  usernames: Array<string>
  username: string | null
  walletUser: User | null
}

export const useUserStore = defineStore('user', {

  state: (): UserState => ({
    quickList: [],
    usernames: [],
    username: null,
    walletUser: null
  }),

  actions: {
    // actions
    fetchWalletUser(wallet: string | null = EthersService.walletAddress()) {
      return new Promise((resolve, reject) => {
        this.setWalletUser(null)
        this.setUserName(null)
        osapi
          .post(`${API_PATH_USER}/find`, { wallet })
          .then((data) => {
            const user: User = data.data.data
            this.setWalletUser(user)
            this.setUserName(user)
            resolve(user)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    getUserName(nickname: string, address: string) {
      const shorts = EthersService.shortWalletAddress(address)
      if (nickname) {
        return `${nickname} (${shorts})`
      } else {
        return shorts
      }
    },

    getNickname() {
      if (this.walletUser?.nickname) {
        return `${this.walletUser?.nickname}`
      } else {
        return EthersService.shortWalletAddress(this.walletUser?.wallet)
      }
    },

    setWalletUser(user: User | null) {
      this.walletUser = user
    },

    setUserQuickList(list: Array<any>) {
      this.quickList = list
    },
    setUserName(user: User | null) {
      if (user && user.nickname && user.wallet) {
        this.username = this.getUserName(user.nickname, user.wallet)
      } else {
        this.username = null
      }
    },

    setUserNames(usernames: Array<string>) {
      this.usernames = usernames
    },

    clearUser() {
      this.$reset()
    }
  },

  getters: {
  }
})

