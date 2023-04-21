<template>
  <div>
    <b-modal
      id="ConnectWalletFirst"
      centered
      class="theme-modal"
      :hide-footer="true"
      :hide-header="true"
      @hide="preventHide"
      ok-only
      visible
    >
      <template #default>
        <div class="text-center" v-if="isFinishedConnected">
          <br />
          <h5 class="mt-1">
            <b>{{ $t("Connect-Wallet-First") }}</b>
          </h5>
          <br />
          <b-button
            id="default-primary-gradien"
            size="lg"
            variant="outline-primary"
            class="btn-pill btn-primary-gradien"
            @click="connectWallet"
          >
            {{ $t("Connect-Wallet") }}
          </b-button>
          <br /><br />
        </div>
        <div class="text-center" v-if="!isFinishedConnected">
          <div class="loader-box">
            <div class="loader-3"></div>
          </div>
        </div>
      </template>
    </b-modal>
    <vue-metamask
      :userMessage="msg"
      @onComplete="onComplete"
      v-if="isWalletConnecting"
    />
  </div>
</template>
<script>
import { mapState } from "vuex"
import { avatarService } from "../../services/avatar.service"
import VueMetamask from "vue-metamask"
import EtherService from "../../services/ether.service"

import { mapGetters, mapActions } from "vuex"
import {
  WALLET_LOGIN,
  WALLET_LOGOUT,
  GET_ACCESS_TOKEN
} from "@/store/modules/dbtoken"

import { FETCH_SCORE, CLEAR_SCORE, GET_LEVEL } from "@/store/modules/score"

export default {
  name: "ConnectWalletFirst",
  components: {
    VueMetamask
  },
  data() {
    return {
      level: -1,
      msg: "",
      isWalletConnecting: false,
      isNetworkSwitching: false,
      isFinishedConnected: true,
      wallet: {
        message: "",
        metaMaskAddress: "",
        netID: -1,
        type: "",
        web3: null
      }
    }
  },
  computed: {
    ...mapState({
      menuItems: (state) => state.menu.data,
      activeoverlay: (state) => state.menu.activeoverlay
    }),
    ...mapGetters([GET_ACCESS_TOKEN, GET_LEVEL]),
    ...mapActions([WALLET_LOGIN, WALLET_LOGOUT, CLEAR_SCORE, FETCH_SCORE])
  },
  methods: {
    disconnect() {
      EtherService.disconnect()
      this.wallet = {
        message: "",
        metaMaskAddress: "",
        netID: -1,
        type: "",
        web3: null
      }
      this.isWalletConnecting = false
      this.$store.dispatch(CLEAR_SCORE).then(() => {
        this.$router.push("/dashboard")
      })
    },
    getWalletShortAddress() {
      return EtherService.shortWalletAddress(this.wallet.metaMaskAddress)
    },
    getWalletAddressAvatarLink() {
      return avatarService.getAvatar(
        this.wallet.metaMaskAddress.toLowerCase(),
        40
      )
    },
    async fetchCurrentScore(wallet) {
      let addr = wallet
      if(wallet === '' || wallet === null || wallet === undefined){
        addr = EtherService.walletAddress()
      }
      await this.$store.dispatch(FETCH_SCORE, addr)
      return (this.level = this.$store.getters.getLevel)
    },
    connectWallet() {
      this.$store.dispatch(CLEAR_SCORE).then(() => {
        this.isWalletConnecting = true
        this.isFinishedConnected = false
      })
    },
    afterConnected() {
      this.$router.go(0)
    },
    async isWrongNetworkCheck() {
      this.isNetworkWrong = await EtherService.isWrongNetwork()
    },
    async switchNetwork(originalNetId) {
      EtherService.switchNetwork().then(() => {
        this.isNetworkSwitching = false
        this.isWrongNetworkCheck().then(() => {
          // this.$gtag.event('login', { 'method': 'wallet' })
          if (EtherService.isWrongNetworkByNetId(originalNetId)) {
            this.afterConnected()
          }
        })
      })
    },
    isInvalidAddress() {
      return (
        this.wallet.metaMaskAddress === null ||
        this.wallet.metaMaskAddress === undefined ||
        this.wallet.metaMaskAddress === ""
      )
    },
    onComplete(data) {
      this.isWalletConnecting = false
      this.wallet = data
      this.isWrongNetworkCheck()
        .then(() => {
          if (this.isInvalidAddress()) {
            EtherService.removeStorageWalletAddress()
            this.dispatch(WALLET_LOGOUT)
          } else {
            EtherService.setStorageWalletAddress(data.metaMaskAddress)
            EtherService.setWalletDispatchEvent()
            this.switchNetwork(this.wallet.netID)
              .then(() => {
                const originalToken = this.$store.getters.getAccessToken
                this.$store
                  .dispatch(WALLET_LOGIN, data.metaMaskAddress)
                  .then((token) => {
                    if (originalToken !== token) {
                      this.afterConnected()
                    }
                    this.$store.dispatch(FETCH_SCORE).then(() => {
                      this.level = this.$store.getters.getLevel
                    })
                  })
              })
              .catch((err) => {
                console.log(err)
              })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    preventHide(event) {
      event.preventDefault()
    }
  }
}
</script>
