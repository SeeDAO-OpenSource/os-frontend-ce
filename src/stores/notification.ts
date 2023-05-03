import { defineStore } from 'pinia'
// import type { Score } from "@/spec/user"
import osapi from "@/services/osapi.service"
const API_PATH_NOTIFICATION = "/api/notifications"

interface NotificationState {
    email: {
        isVerified: boolean
    }
}

export const useNotificationStore = defineStore('notification', {

    state: (): NotificationState => ({
        email: {
            isVerified: false
        }
    }),

    actions: {

        sendEmailAuthCode(data: any) {
            return new Promise((resolve, reject) => {
                osapi
                    .post(`${API_PATH_NOTIFICATION}/mail/auth`, data)
                    .then((data) => {
                        const result: any = data.data.data
                        resolve(result)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },

        verifyEmailAuthCode(data: any) {
            return new Promise((resolve, reject) => {
                osapi
                    .post(`${API_PATH_NOTIFICATION}/mail/verify`, data)
                    .then((data) => {
                        const result: any = data.data.data
                        resolve(result)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },

        setEmailVerifyStatus(status: boolean){
            this.email.isVerified = status
        },

        clearBudget() {
            this.$reset()
        }
    },

    getters: {
    }
})

