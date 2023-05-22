import { defineStore } from 'pinia'
import EthersService from "@/services/ethers.service"
import type { QuickUser, User } from "@/types/user"
import osapi from "@/services/osapi.service"
import i18n from '@/plugins/i18n'

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

    updateUserProfile(user: Partial<User>){
      return new Promise((resolve, reject) => {
        this.setWalletUser(null)
        this.setUserName(null)
        osapi
          .post(`${API_PATH_USER}/profile/update`, user)
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


    fetchWalletUser(wallet: string | null = EthersService.walletAddress()): Promise<User> {
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

    fetchUserQuickList(): Promise<any> {
      return new Promise((resolve, reject) => {
        osapi
          .post(`${API_PATH_USER}/quick/list`, {})
          .then((data) => {
            const users: any = data.data.data
            let list: any[] = []
            let names: Array<string> = []
            users.forEach((user: QuickUser) => {
              if (user.nickname) {
                names.push(this.getUserName(user.nickname, user.wallet))
                list.push({
                  username: this.getUserName(user.nickname, user.wallet),
                  ...user
                })
              } else {
                list.push(user)
              }
            })
            this.setUserQuickList(list)
            this.setUserNames(names)
            resolve(list)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    getUserName(nickname: string | null, address: string | null) {
      const shorts = EthersService.shortWalletAddress(address ? address : "")
      if (nickname) {
        return `${nickname} (${shorts})`
      }
      return shorts ? shorts : "-"
    },

    getNickname() {
      if (this.walletUser?.nickname) {
        return `${this.walletUser?.nickname}`
      } else {
        return EthersService.shortWalletAddress(this.walletUser?.wallet)
      }
    },

    getUserNickname(user: Pick<User, "wallet" | "nickname">) {
      if (user.nickname) {
        return `${user.nickname}`
      } else {
        return EthersService.shortWalletAddress(user.wallet)
      }
    },

    getUserItemName(user: Pick<User, "wallet" | "nickname"> | null | undefined) {
      if (!user || !user.wallet) {
        return "-"
      }
      const shorts = EthersService.shortWalletAddress(user.wallet)
      if (user.nickname) {
        return `${user.nickname} (${shorts})`
      } else {
        return shorts
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

