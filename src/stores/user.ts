import { userService } from '@/services/user.service'
import { defineStore } from 'pinia'

export class UserState {
  id: string = ""
  wallet?: string
  nickName?: string
  accessToken?: string
  islogining: boolean = false
  loginDialogVisible: boolean = false
}

export const useUserStore = defineStore('user', {
  state: (): UserState => (new UserState()),

  actions: {
    async tryAutoLogin() {
      this.islogining = true
      try {
        const token = localStorage.getItem('accessToken')
        if (token) {
          const result = await userService.tryAutoLogin()
          if (result) {
            this.$patch({
              id: result.id,
              wallet: result.wallet,
              nickName: result.nickname,
              accessToken: token,
            })
          }
        }
      } finally {
        this.$patch({
          islogining: false,
          loginDialogVisible: false
        })
      }
    },
    async login() {
      this.islogining = true
      try {
        const result = await userService.login()
        if (result) {
          localStorage.setItem('accessToken', result.accessToken)
          this.$patch({
            id: result.id,
            wallet: result.wallet,
            nickName: result.nickname,
            accessToken: result.accessToken
          })
        }
      } finally {
        this.$patch({
          islogining: false,
          loginDialogVisible: false
        })
      }

    },
    logout() {
      localStorage.removeItem('accessToken')
      this.$reset()
    },
    showLoginDialog() {
      this.loginDialogVisible = true
    }
  },

  getters: {
    isLogin: (state) => !!state.id && state.id !== "",
    displayName: (state) => getShortAddress(state.nickName) || getShortAddress(state.wallet) || state.id,
    shortWallet: (state) => getShortAddress(state.wallet),
  }
})

/**
 * @description 获取裁剪后的地址
 * @param {string}
 * @returns {string}
 */
export function getShortAddress(address: string | undefined) {
  // eslint-disable-next-line no-nested-ternary
  return address ? (address.length > 10 ? `${address.slice(0, 6)}...${address.slice(address.length - 4, address.length)}` : address) : ''
}

