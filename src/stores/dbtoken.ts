import { defineStore } from 'pinia'
import serverConfig from "@/config/server"
// import type { Score } from "@/types/user"
import osapi from "@/services/osapi.service"
import EthersService from '@/services/ethers.service'
const API_PATH_USER = '/api/users'

interface DBTokenState {
    accessToken: string | null,
    isSigning: boolean,
    sig: any

}

interface SignMessageParams {
    wallet: string,
    ledger: string,
    from: string
}

export const useDBTokenStore = defineStore('dbtoken', {

    state: (): DBTokenState => ({
        accessToken: null,
        isSigning: false,
        sig: null
    }),

    actions: {

        getMessageObj(wallet: string): SignMessageParams {
            return {
                wallet,
                ledger: serverConfig.ledgerDefault,
                from: "https://app.seedao.xyz/", // window.location.href
            }
        },

        getWelcomeMessage(wallet: string): string {
            const data: SignMessageParams = this.getMessageObj(wallet)
            return (
                `${data.from} wants you to sign in\n with your Ethereum account:\n` +
                `${data.wallet}\n\n` +
                "Sign in with Ethereum to the SeeDAO.\n\n" +
                `URI: ${data.from}\n` +
                "Version: 1\n" +
                `Ledger: ${data.ledger}`
            )
        },

        signMessage(message: string, wallet: string) {
            return new Promise((resolve, reject) => {
                window.ethereum
                    .request({
                        method: "personal_sign",
                        params: [message, wallet, 0]
                    })
                    .then((sig: any) => {
                        this.setWalletSign(sig)
                        resolve(sig)
                    })
                    .catch((error: any) => {
                        reject(error)
                    })
            })
        },

        walletLogin(wallet: string) {
            return new Promise((resolve, reject) => {
                this.setIsSigning(true)
                this.signMessage(this.getWelcomeMessage(wallet), wallet.toLowerCase()).then((signed) => {
                    const msgObj = this.getMessageObj(wallet)
                    const data = { signed, msgObj, wallet: wallet.toLowerCase() }
                    osapi.post(`${API_PATH_USER}/wallet/login`, data)
                        .then(({ data }) => {
                            const token: string = data.data.token
                            this.setIsSigning(false)
                            resolve(token)
                        })
                        .catch((error) => {
                            this.setIsSigning(false)
                            reject(error)
                        })
                }).catch((err) => {
                    this.setIsSigning(false)
                    reject(err)
                })
            })
        },

        setWalletSign(sig: any){
            this.sig = sig
        },

        setAccessToken(token: string){
            this.accessToken = token
        }, 

        setIsSigning(isSigning: boolean){
            this.isSigning = isSigning
        },

        walletLogout(){
            this.clearDBToken()
        },

        clearDBToken() {
            this.$reset()
        }
    },

    getters: {
    }
})

