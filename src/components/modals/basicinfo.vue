<template>
  <div>
    <b-modal
      id="basicinfo"
      centered
      size="lg"
      ok-title="完成"
      cancel-title="取消"
      class="theme-modal"
      @ok="handleOk"
      @show="initModal"
    >
      <template #modal-header>
        <h5 class="mt-1">
          <b>{{ $t("Update-Profile") }}</b>
        </h5>
      </template>
      <template #default>
        <form class="form theme-form">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">{{
                    $t("Nickname")
                  }}</label>
                  <div class="col-sm-9">
                    <b-form-input
                      type="text"
                      v-model="newUser.nickname"
                    ></b-form-input>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label"
                    >EMail&nbsp;&nbsp;<i
                      class="icofont icofont-question-circle"
                      style="color: #d3d3d3"
                      v-b-tooltip.hover
                      :title="$t('Why-Need-Email')"
                  /></label>
                  <div class="col-sm-7">
                    <b-form-input
                      type="email"
                      v-model="newUser.email"
                    ></b-form-input>
                  </div>
                  <b-button
                    class="col-sm-2"
                    variant="primary"
                    :disabled="
                      !isValidEmail(newUser.email) && !isEmailVerifying
                    "
                    @click="verifyEmail"
                    v-if="remainSec <= 0"
                    ><small>{{ $t("Get-Auth-Code") }}</small></b-button
                  >
                  <b-button class="col-sm-2" variant="primary" disabled v-else
                    ><small
                      >{{ $t("Get-Auth-Code") }} ({{ remainSec }})</small
                    ></b-button
                  >
                </div>
                <div class="form-group row" v-if="isEmailVerifying">
                  <label class="col-sm-2 col-form-label"></label>
                  <div class="col-sm-3">
                    <b-form-input
                      type="text"
                      v-model="emailAuthCode"
                    ></b-form-input>
                  </div>
                  <b-button
                    class="col-sm-2"
                    variant="primary"
                    @click="verifyCode"
                    ><small>{{ $t("Verify") }}</small></b-button
                  >
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label"
                    >Discord&nbsp;&nbsp;<i
                      class="icofont icofont-question-circle"
                      style="color: #d3d3d3"
                      v-b-tooltip.hover
                      :title="$t('Why-Need-Discord')"
                  /></label>
                  <div class="col-sm-7">
                    <b-form-input
                      type="text"
                      :placeholder="$t('Click-the-Button') + ' ---->'"
                      v-model="newUser.discord.name"
                      disabled
                    ></b-form-input>
                  </div>
                  <b-button
                    class="col-sm-2"
                    variant="primary"
                    @click="goToDiscordAuth"
                    >{{ $t("Verify") }}</b-button
                  >
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label"
                    >Google&nbsp;&nbsp;<i
                      class="icofont icofont-question-circle"
                      style="color: #d3d3d3"
                      v-b-tooltip.hover
                      :title="$t('Why-Need-Google')"
                  /></label>
                  <div class="col-sm-7">
                    <b-form-input
                      type="text"
                      :placeholder="$t('Click-the-Button') + ' ---->'"
                      v-model="newUser.google.email"
                      disabled
                    ></b-form-input>
                  </div>
                  <b-button
                    class="col-sm-2"
                    variant="primary"
                    @click="googleSignIn"
                    >{{ $t("Verify") }}</b-button
                  >
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label"
                    >Twitter&nbsp;&nbsp;<i
                      class="icofont icofont-question-circle"
                      style="color: #d3d3d3"
                      v-b-tooltip.hover
                      :title="$t('Why-Need-Twitter')"
                  /></label>
                  <div class="col-sm-7">
                    <b-form-input
                      type="text"
                      :placeholder="$t('Click-the-Button') + ' ---->'"
                      v-model="newUser.twitter.handle"
                      disabled
                    ></b-form-input>
                  </div>
                  <b-button
                    class="col-sm-2"
                    variant="primary"
                    @click="twitterSignIn"
                    >{{ $t("Verify") }}</b-button
                  >
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label"
                    >Telegram&nbsp;&nbsp;<i
                      class="icofont icofont-question-circle"
                      style="color: #d3d3d3"
                      v-b-tooltip.hover
                      :title="$t('Why-Need-Telegram')"
                  /></label>
                  <div class="col-sm-9">
                    <b-form-input
                      type="text"
                      v-model="newUser.telegram.handle"
                    ></b-form-input>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label"
                    >{{ $t("Wechat") }} ID&nbsp;&nbsp;<i
                      class="icofont icofont-question-circle"
                      style="color: #d3d3d3"
                      v-b-tooltip.hover
                      :title="$t('Why-Need-Wechat')"
                  /></label>
                  <div class="col-sm-9">
                    <b-form-input
                      type="text"
                      v-model="newUser.wechat.id"
                    ></b-form-input>
                  </div>
                </div>
                <!-- <div class="form-group row">
                  <label class="col-sm-2 col-form-label"
                    >Mirror&nbsp;&nbsp;<i
                      class="icofont icofont-question-circle"
                      style="color: #d3d3d3"
                      v-b-tooltip.hover
                      title=""
                  /></label>
                  <div class="col-sm-9">
                    <b-form-input type="text"></b-form-input>
                  </div>
                </div>

                <div class="form-group row">
                  <label class="col-sm-2 col-form-label"
                    >个人网站&nbsp;&nbsp;<i
                      class="icofont icofont-question-circle"
                      style="color: #d3d3d3"
                      v-b-tooltip.hover
                      title=""
                  /></label>
                  <div class="col-sm-9">
                    <b-form-input type="text"></b-form-input>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </form>
      </template>

      <template #modal-footer="{ ok, hide }">
        <b-button size="sm" variant="outline-primary" @click="hide('forget')">
          取消
        </b-button>
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button size="sm" variant="primary" @click="ok()"> 完成 </b-button>
      </template>
    </b-modal>
  </div>
</template>
<script>
import EtherService from "../../services/ether.service"
import DiscordService from "../../services/discord.service"
import firebase from "firebase/app"
import "firebase/auth"
import firebaseConfig from "@/config/firebase"
firebaseConfig
firebase.auth().useDeviceLanguage()
const googleProvider = new firebase.auth.GoogleAuthProvider()
const twitterProvider = new firebase.auth.TwitterAuthProvider()

import { mapState } from "vuex"
import { mapGetters, mapActions } from "vuex"
import { UPDATE_USER, FETCH_WALLET_USER } from "@/store/modules/user"
import {
  SEND_EMAIL_AUTH_CODE,
  VERIFY_EMAIL_AUTH_CODE
} from "@/store/modules/notification"

export default {
  name: "BasicInfoForm",
  computed: {
    ...mapState({
      menuItems: (state) => state.menu.data,
      activeoverlay: (state) => state.menu.activeoverlay
    }),
    ...mapGetters([]),
    ...mapActions([
      UPDATE_USER,
      SEND_EMAIL_AUTH_CODE,
      FETCH_WALLET_USER,
      VERIFY_EMAIL_AUTH_CODE
    ])
  },
  props: ["currUser"],
  data() {
    return {
      emailAuthCode: "",
      mailAuthJob: null,
      remainSec: 0,
      discordService: null,
      isLoggingGoogle: false,
      isLoggingTwitter: false,
      isEmailVerifying: false,
      newUser: {
        google: {
          id: "",
          email: "",
          name: ""
        },
        github: {
          username: "",
          id: "",
          name: ""
        },
        wallet: "",
        nickname: "",
        email: "",
        twitter: {
          name: "",
          handle: this.$t("Click-the-Button") + " ---->"
        },
        discord: {
          id: "",
          name: this.$t("Click-the-Button") + " ---->",
          handle: ""
        },
        telegram: {
          id: "",
          handle: "",
          name: ""
        },
        wechat: {
          id: "",
          name: ""
        }
      }
    }
  },
  mounted() {
    this.emailAuthCode = ""
    this.initModal()
    this.discordService = new DiscordService()
  },
  methods: {
    verifyCode() {
      this.$store
        .dispatch(VERIFY_EMAIL_AUTH_CODE, {
          wallet: this.newUser.wallet,
          code: this.emailAuthCode
        })
        .then((result) => {
          if (result.isVerified) {
            clearInterval(this.mailAuthJob)
            this.remainSec = 0
            this.emailAuthCode = ""
            this.isEmailVerifying = false
            this.$store.dispatch(FETCH_WALLET_USER).then(() => {
              this.initModal()
            })
          }
        })
        .catch((err) => {
          console.error(err)
        })
    },
    verifyEmail() {
      this.emailAuthCode = ""
      this.$store
        .dispatch(SEND_EMAIL_AUTH_CODE, {
          wallet: this.newUser.wallet,
          email: this.newUser.email
        })
        .then((result) => {
          if (result.isSend) {
            this.mailAuthJob = setInterval(() => {
              if (this.remainSec <= 0) {
                this.isEmailVerifying = true
                this.remainSec = 300
              } else {
                this.remainSec = this.remainSec - 1
                if (this.remainSec <= 0) {
                  this.emailAuthCode = ""
                  this.isEmailVerifying = false
                  clearInterval(this.mailAuthJob)
                }
              }
            }, 1000)
          }
        })
    },
    toggle_sidebar() {
      this.$store.dispatch("menu/opensidebar")
      this.$store.state.menu.activeoverlay = false
    },
    initModal() {
      if (this.currUser) {
        if (this.currUser.wallet)
          this.newUser.wallet = this.currUser.wallet + ""
        if (this.currUser.nickname)
          this.newUser.nickname = this.currUser.nickname + ""
        if (this.currUser.email) this.newUser.email = this.currUser.email + ""
        if (this.currUser.google)
          this.newUser.google = { ...this.currUser.google }
        if (this.currUser.github)
          this.newUser.github = { ...this.currUser.github }
        if (this.currUser.twitter)
          this.newUser.twitter = { ...this.currUser.twitter }
        if (this.currUser.telegram)
          this.newUser.telegram = { ...this.currUser.telegram }
        if (this.currUser.discord)
          this.newUser.discord = { ...this.currUser.discord }
        if (this.currUser.wechat)
          this.newUser.wechat = { ...this.currUser.wechat }
      }
    },
    handleOk(event) {
      event.preventDefault()
      console.log('nickname:', this.newUser.nickname)
      this.$store
        .dispatch(UPDATE_USER, {
          wallet: EtherService.walletAddress(),
          nickname: this.newUser.nickname,
          telegram: {
            id: `${this.currUser['_id']}#telegram`,
            name: this.newUser.nickname,
            handle: this.newUser.telegram.handle
          },
          wechat: {
            name: this.newUser.nickname,
            id: this.newUser.wechat.id
          }
        })
        .then(() => {
          this.$store.dispatch(FETCH_WALLET_USER).then(() => {
            this.$bvModal.hide('basicinfo')
          })
        })
        .catch((e) => {
          console.error(e)
        })
    },
    isValidEmail(email) {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    },
    goToDiscordAuth() {
      window.location.href = this.discordService.getDiscordAuthLink()
      // window.open(this.discordService.getDiscordAuthLink(), "_blank")
    },
    googleSignIn() {
      if (!this.isLoggingGoogle) {
        this.isLoggingGoogle = true
        firebase
          .auth()
          .signInWithPopup(googleProvider)
          .then((result) => {
            this.newUser.google["name"] = result.user.displayName
            this.newUser.google["email"] = result.user.email
            this.newUser.google["id"] = result.additionalUserInfo.profile.id
            firebase
              .auth()
              .signOut()
              .then(() => {
                this.$store
                  .dispatch(UPDATE_USER, {
                    wallet: EtherService.walletAddress(),
                    google: {
                      email: this.newUser.google.email,
                      name: this.newUser.google.name,
                      id: this.newUser.google.id
                    }
                  })
                  .then(() => {
                    this.isLoggingGoogle = false
                  })
                  .catch((e) => {
                    this.isLoggingGoogle = false
                    console.error(e)
                  })
              })
              .catch((err) => {
                this.isLoggingGoogle = false
                console.error(err)
              })
          })
          .catch((error) => {
            this.isLoggingGoogle = false
            console.error(error)
          })
      }
    },
    twitterSignIn() {
      if (!this.isLoggingTwitter) {
        this.isLoggingTwitter = true
        firebase
          .auth()
          .signInWithPopup(twitterProvider)
          .then((result) => {
            this.newUser.twitter["handle"] = result.additionalUserInfo.username
            this.newUser.twitter["name"] = result.user.displayName
            this.newUser.twitter["id"] = result.additionalUserInfo.profile.id
            firebase
              .auth()
              .signOut()
              .then(() => {
                this.$store
                  .dispatch(UPDATE_USER, {
                    wallet: EtherService.walletAddress(),
                    twitter: {
                      handle: this.newUser.twitter.handle,
                      name: this.newUser.twitter.name,
                      id: this.newUser.twitter.id
                    }
                  })
                  .then(() => {
                    this.isLoggingTwitter = false
                  })
                  .catch((e) => {
                    this.isLoggingTwitter = false
                    console.error(e)
                  })
              })
              .catch((err) => {
                this.isLoggingTwitter = false
                console.error(err)
              })
          })
          .catch((error) => {
            this.isLoggingTwitter = false
            console.error(error)
          })
      }
    }
  }
}
</script>
