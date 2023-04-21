<template>
  <li
    class="profile-nav onhover-dropdown p-0 mr-0"
    v-if="!isSigned || isInvalidAddress()"
  >
    <div class="media profile-media">
      <b-button
        id="default-outline-primary-lg"
        variant="outline-primary"
        size="lg"
        class="btn btn-pill btn-primary btn-air-primary btn-lg"
        @click="connectWallet()"
        ><font color="white"
          ><b>{{ $t("Connect-Wallet") }}</b></font
        >
      </b-button>
    </div>
    <vue-metamask
      :userMessage="msg"
      @onComplete="onComplete"
      v-if="isWalletConnecting"
    />
  </li>
  <li class="profile-nav onhover-dropdown p-0 mr-0" v-else>
    <div class="media profile-media" @click="goToProfile">
      <img class="b-r-10" :src="getWalletAddressAvatarLink()" alt="" />
      <div class="media-body">
        <span>{{ getWalletShortAddress() }}</span>
        <p class="mb-0 font-roboto" v-if="this.level >= 0">
          Level {{ this.level }} &nbsp;&nbsp;<i
            class="middle fa fa-angle-down"
          ></i>
        </p>
        <p class="mb-0 font-roboto" v-else>
          Loading... &nbsp;&nbsp;<i class="middle fa fa-angle-down"></i>
        </p>
      </div>
    </div>
    <ul class="profile-dropdown onhover-show-div">
      <li>
        <router-link to="/my/profile"
          ><feather type="user"></feather
          ><span>{{ $t("Profile") }} </span></router-link
        >
      </li>
      <li>
        <router-link to="/my/settings"
          ><feather type="settings"></feather
          ><span>{{ $t("Settings") }}</span></router-link
        >
      </li>
      <li>
        <span @click="disconnect()"
          ><feather type="log-in"></feather
          ><span>{{ String($t("Logout")).toUpperCase() }}</span></span
        >
      </li>
    </ul>
  </li>
</template>

<script>
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
  name: "My-Profile",
  components: {
    VueMetamask
  },
  data() {
    return {
      isSigned: false,
      level: -1,
      msg: "",
      isWalletConnecting: false,
      isNetworkSwitching: false,
      wallet: {
        message: "",
        metaMaskAddress: "",
        netID: -1,
        type: "",
        web3: null
      }
    }
  },
  mounted() {
    window.addEventListener(EtherService.walletChangedEventName(), (event) => {
      this.wallet.metaMaskAddress = event.detail.storage
    })
    const isLogin = EtherService.walletAddress()
    if (isLogin !== "" && isLogin !== null && isLogin !== undefined) {
      this.isSigned = true
      this.isWalletConnecting = true
      this.wallet.metaMaskAddress = EtherService.walletAddress()
      this.fetchCurrentScore(this.wallet.metaMaskAddress)
    }
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
    goToProfile() {
      this.$router.push("/my/profile")
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
      await this.$store.dispatch(FETCH_SCORE, wallet)
      return (this.level = this.$store.getters.getLevel)
    },
    connectWallet() {
      this.$store.dispatch(CLEAR_SCORE).then(() => {
        this.isWalletConnecting = true
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
                    }else{
                      this.isSigned = true
                    }
                    const addr = EtherService.walletAddress()
                    this.$store.dispatch(FETCH_SCORE, addr).then(() => {
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
    }
  },
  computed: {
    ...mapGetters([GET_ACCESS_TOKEN, GET_LEVEL]),
    ...mapActions([WALLET_LOGIN, WALLET_LOGOUT, CLEAR_SCORE, FETCH_SCORE])
  }
}
</script>
