import { config, request } from "@/api";
import { getWallet } from "@/web3";
import axios from "axios";
import { AuthApi, type UserInfo } from "daoly-client-sdk";

export class UserService {
  authApi: AuthApi

  constructor() {
    this.authApi = new AuthApi(config, undefined, axios)
  }

  async login() {
    const wallet = getWallet()
    const address = await wallet.getAddress()
    if (address) {
      const res = await request(() => this.authApi.authControllerGetSignMessage(address))
      if (res?.message) {
        const signature = await wallet.signMessage(res.message, address)
        const loginRes = await request(() => this.authApi.authControllerLogin({ wallet: address, signature }))
        return loginRes
      }
    }
  }

  async tryAutoLogin(): Promise<UserInfo | undefined> {
    const wallet = getWallet()
    const address = await wallet.getConnectedAddress()
    if (address) {
      const reuslt = await request(() => this.authApi.authControllerGetUserInfo())
      if (reuslt) {
        return {
          ...reuslt,
        }
      }
    }
  }
}

export const userService = new UserService()