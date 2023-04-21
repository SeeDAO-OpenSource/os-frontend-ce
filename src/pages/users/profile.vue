<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid" v-if="walletConnectCheck()">
      <div class="user-profile">
        <div class="row" style="padding-top: 125px">
          <!-- user profile first-style start-->
          <div class="col-sm-12">
            <div class="card hovercard text-center">
              <div class="user-image">
                <div class="avatar">
                  <img
                    class="b-10"
                    :src="getWalletAddressAvatarLink()"
                    alt=""
                  />
                </div>
                <!-- <div class="icon-wrapper">
                  <i class="icofont icofont-pencil-alt-5"></i>
                </div> -->
              </div>
              <div class="info">
                <div class="row">
                  <div class="col-sm-6 col-lg-4 order-sm-1 order-xl-0">
                    <div class="row">
                      <div class="col-md-10">
                        <div class="ttl-info text-left">
                          <h6>
                            {{ $t("Wallet-Address") }}&nbsp;:&nbsp;<small>{{
                              getWalletAddress()
                            }}</small>
                          </h6>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div class="ttl-info text-left"></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-12 col-lg-4 order-sm-0 order-xl-1">
                    <div class="user-designation">
                      <div class="title">
                        <b v-if="getWalletUser && getWalletUser.nickname">{{
                          getWalletUser.nickname
                        }}</b>
                        <b v-else>{{ getUserShortAddress() }}</b>
                      </div>
                      <div class="desc mt-2" v-if="getLevel >= 0">
                        Level {{ getLevel }}
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4 order-sm-2 order-xl-2">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="icon-wrapper text-right">
                          <b-button
                            id="default-outline-primary"
                            variant="outline-light"
                            size="sm"
                            v-b-modal.basicinfo
                            ><font color="gray"
                              ><i
                                class="icofont icofont-pencil-alt-5"
                              ></i></font
                          ></b-button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br /><br />
                <div class="row mt-4">
                  <div class="col-sm-6 col-lg-4 order-sm-1 order-xl-0">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="ttl-info text-left">
                          <h6>
                            <i class="fa fa-envelope mr-2"></i>Email (Notion)
                          </h6>
                          <span>{{
                            getWalletUser
                              ? getWalletUser.email
                                ? getWalletUser.email
                                : "-"
                              : "-"
                          }}</span>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="ttl-info text-left">
                          <h6>
                            <i class="fa fa-location-arrow mr-2"></i>Discord
                          </h6>
                          <span>{{
                            getWalletUser
                              ? getWalletUser.discord
                                ? getWalletUser.discord.name
                                : "-"
                              : "-"
                          }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4 order-sm-1 order-xl-0">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="ttl-info text-left">
                          <h6>
                            <i class="fa fa-location-arrow mr-2"></i>Twitter
                          </h6>
                          <span>{{
                            getWalletUser
                              ? getWalletUser.twitter
                                ? "@" + getWalletUser.twitter.handle
                                : "-"
                              : "-"
                          }}</span>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="ttl-info text-left">
                          <h6>
                            <i class="fa fa-location-arrow mr-2"></i>Google
                          </h6>
                          <span>{{
                            getWalletUser
                              ? getWalletUser.google
                                ? getWalletUser.google.email
                                : "-"
                              : "-"
                          }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4 order-sm-2 order-xl-2">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="ttl-info text-left">
                          <h6>
                            <i class="fa fa-location-arrow mr-2"></i>Telegram
                          </h6>
                          <span>{{
                            getWalletUser
                              ? getWalletUser.telegram
                                ? "@" + getWalletUser.telegram.handle
                                : "-"
                              : "-"
                          }}</span>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="ttl-info text-left">
                          <h6>
                            <i class="fa fa-location-arrow mr-2"></i>{{ $t("Wechat")}} ID
                          </h6>
                          <span>{{
                            getWalletUser
                              ? getWalletUser.wechat
                                ? getWalletUser.wechat.id
                                : "-"
                              : "-"
                          }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="text-center">
                  <!-- <b-badge variant="primary">研发公会 lead</b-badge>
                  <b-badge variant="secondary">SeeDAO 成员</b-badge>
                  <b-badge variant="success">翻译公会</b-badge>
                  <b-badge variant="info">财务小组</b-badge>
                  <b-badge variant="warning">项目A</b-badge>
                  <b-badge variant="danger">L4 贡献者</b-badge>
                  <b-badge variant="light">OO频道版主</b-badge>
                  <b-badge variant="dark">Builder</b-badge> -->
                </div>
                <div class="follow">
                  <div class="row" v-if="Number(getScore) >= 0">
                    <div class="col-3"></div>
                    <div class="col-2 text-md-right border-right">
                      <h4 class="mt-4">0</h4>
                      <span>{{ $t("Registered-SCR") }}</span>
                    </div>
                    <div class="col-2">
                      <div class="follow-num counter">
                        {{ (Number(getScore) + 0).toFixed(0) }}
                      </div>
                      <span
                        ><h3>{{ $t("Total-SCR") }}</h3></span
                      >
                    </div>
                    <div class="col-2 text-md-left border-left">
                      <h4 class="mt-4">{{ Number(getScore).toFixed(0) }}</h4>
                      <span>{{ $t("Minted-SCR") }}</span>
                    </div>
                    <div class="col-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- user profile first-style end-->
          <div class="col-sm-12">
            <b-card header-tag="div" no-body>
              <h5 slot="header">
                <b>{{ $t("Onchain-Assets") }}</b>
              </h5>
              <b-card-body>
                <b-tabs pills slot="header" class="tabbed-card">
                  <b-tab title="SBT" active>
                    <div class="profile-img-style">
                      <div class="row">
                        <div class="col-sm-8">
                          <div class="media">
                            <div class="media-body align-self-center">
                              <h4>SBT</h4>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-4 align-self-center">
                          <div
                            class="float-sm-right"
                            v-if="this.sbt.updated > 0"
                          >
                            <small
                              >{{ $t("Last-Updated") }}:&nbsp;{{
                                getUpdatedString(this.sbt.updated)
                              }}</small
                            >
                          </div>
                        </div>
                      </div>
                      <br />
                      <div
                        class="row my-gallery gallery gallery-with-description"
                        itemscope
                        itemprop="thumbnail"
                      >
                        <figure
                          class="col-xl-3 col-sm-6 m-0 hover-1"
                          v-for="(sbt, index) in this.sbt.items"
                          :key="index"
                          @click="goToOpensea(sbt)"
                        >
                          <a>
                            <img
                              :src="sbt.image"
                              class="img-thumbnail"
                              :alt="sbt.name"
                            />
                            <div class="caption">
                              <h4 class="text-center" v-text="sbt.name"></h4>
                              <p>{{ sbt.description }}</p>
                            </div>
                          </a>
                        </figure>
                      </div>
                    </div>
                  </b-tab>
                  <b-tab title="SGN">
                    <div class="profile-img-style">
                      <div class="row">
                        <div class="col-sm-8">
                          <div class="media">
                            <div class="media-body align-self-center">
                              <h4>SeeDAO Genesis NFT (SGN)</h4>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-4 align-self-center">
                          <div
                            class="float-sm-right"
                            v-if="this.sgn.updated > 0"
                          >
                            <small
                              >{{ $t("Last-Updated") }}:&nbsp;{{
                                getUpdatedString(this.sgn.updated)
                              }}</small
                            >
                          </div>
                        </div>
                      </div>
                      <br />
                      <div
                        class="row my-gallery gallery gallery-with-description"
                        itemscope
                        itemprop="thumbnail"
                      >
                        <figure
                          class="col-xl-3 col-sm-6 m-0 hover-1"
                          v-for="(sgn, index) in this.sgn.items"
                          :key="index"
                          @click="goToOpensea(sgn)"
                        >
                          <a>
                            <img
                              :src="sgn.image"
                              class="img-thumbnail"
                              :alt="'SGN #' + sgn.id"
                            />
                            <div class="caption">
                              <h4
                                class="text-center"
                                v-text="'SGN #' + sgn.id"
                              ></h4>
                            </div>
                          </a>
                        </figure>
                      </div>
                    </div>
                  </b-tab>
                </b-tabs>
              </b-card-body>
            </b-card>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid" v-else>
      <ConnectWalletFirst />
    </div>
    <BasicInfo :currUser="getWalletUser" />
  </div>
</template>

<script>
import ConnectWalletFirst from "../../components/modals/connectWalletFirst.vue"
import BasicInfo from "../../components/modals/basicinfo.vue"
import { avatarService } from "../../services/avatar.service"
import EtherService from "../../services/ether.service"
import DiscordService from "../../services/discord.service"
import SGNService from "../../services/sgn.service"
import SBTService from "../../services/sbt.service"

import { mapGetters, mapActions } from "vuex"
import {
  FETCH_WALLET_USER,
  UPDATE_USER,
  GET_WALLET_USER
} from "@/store/modules/user"
import { GET_SCORE, GET_LEVEL } from "@/store/modules/score"

const DISCORD_AUTH = "discordAuth"

export default {
  components: {
    ConnectWalletFirst,
    BasicInfo
  },
  data() {
    return {
      discordAuth: null,
      discordService: null,
      isBasicInfoUpdating: false,
      user: null,
      sbt: {
        service: null,
        items: [],
        updated: 0
      },
      sgn: {
        service: null,
        items: [],
        updated: 0
      },
      gindex: null,
      galleryoptions: {
        prevClass: "prev",
        nextClass: "next"
      }
    }
  },
  mounted() {
    this.discordService = new DiscordService()

    if (this.walletConnectCheck()) {
      this.$store.dispatch(FETCH_WALLET_USER).then((user) => {
        this.user = user
        this.discordAuthCheck()
      })

      this.sgn.service = new SGNService()
      this.sgn.service
        .getSGN()
        .then((sgn) => {
          this.sgn.items = sgn
          this.sgn.updated = new Date()
        })
        .catch(() => {
          this.sgn.items = []
          this.sgn.updated = new Date()
        })

      this.sbt.service = new SBTService()

      this.sbt.service
        .getSBT()
        .then((sbt) => {
          this.sbt.items = sbt
          this.sbt.updated = new Date()
        })
        .catch((err) => {
          console.log("err::", err)
          this.sbt.updated = new Date()
        })
    }
  },
  methods: {
    discordAuthCheck() {
      const data = window.location.href.split("#")
      const searchParams = new URLSearchParams(data[1])
      const params = Object.fromEntries([...searchParams])
      this.discordAuth = JSON.parse(JSON.stringify(params))
      if (this.discordAuth.access_token) {
        this.$bvModal.show("basicinfo")
        this.discordService
          .getUser(this.discordAuth.token_type, this.discordAuth.access_token)
          .then((user) => {
            if (!this.user.discord) {
              this.user["discord"] = {}
            }
            this.user.discord["name"] = `${user.username}#${user.discriminator}`
            this.user.discord["id"] = user.id
            this.discordService
              .getAvatar(user.id, user.avatar)
              .then((avatar) => {
                this.user.discord["avatar"] = avatar
                console.log("updateUser!! from dc ::", {
                  name: this.user.discord.name,
                  id: this.user.discord.id
                })
                this.$store
                  .dispatch(UPDATE_USER, {
                    wallet: EtherService.walletAddress(),
                    discord: {
                      avatar: this.user.discord.avatar,
                      name: this.user.discord.name,
                      id: this.user.discord.id
                    }
                  })
                  .catch((e) => {
                    console.error(e)
                  })
              })
              .catch((err) => {
                console.error(err)
                this.$store
                  .dispatch(UPDATE_USER, {
                    wallet: EtherService.walletAddress(),
                    discord: {
                      name: this.user.discord.name,
                      id: this.user.discord.id
                    }
                  })
                  .catch((e) => {
                    console.error(e)
                  })
              })
          })
          .catch((error) => console.error(error))
      }
    },
    getUserShortAddress() {
      return EtherService.shortWalletAddress()
    },
    walletConnectCheck() {
      return (
        EtherService.walletAddress() !== "" &&
        EtherService.walletAddress() !== undefined &&
        EtherService.walletAddress() !== null
      )
    },
    getUpdatedString(updated) {
      const dt = new Date(updated)
      return `${dt.getFullYear()}/${dt.getMonth() + 1}/${dt.getDate()} ${String(
        dt.getHours()
      ).padStart(2, "0")}:${String(dt.getMinutes()).padStart(2, "0")}:${String(
        dt.getSeconds()
      ).padStart(2, "0")}`
    },
    goToOpensea(item) {
      if (item.url) window.open(item.url, "_blank")
      if (item.external_url) window.open(item.external_url, "_blank")
    },
    getSGNImages(sgnItems) {
      let sgnImages = []
      sgnItems.forEach((n) => {
        sgnImages.push(n.image)
      })
      return sgnImages
    },
    getpath(filename) {
      return require("@/assets/images/big-lightgallry/" + filename)
    },
    getbigimgpath(filename) {
      return require("@/assets/images/big-lightgallry/" + filename)
    },
    getWalletAddressAvatarLink() {
      return avatarService.getAvatar(
        EtherService.walletAddress().toLowerCase(),
        300
      )
    },
    getWalletAddress() {
      return EtherService.walletAddress()
    }
  },
  computed: {
    ...mapGetters([GET_WALLET_USER, GET_SCORE, GET_LEVEL]),
    ...mapActions([FETCH_WALLET_USER, UPDATE_USER])
  }
}
</script>
