<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid" style="padding-top: 40px">
      <div class="row">
        <div class="col-md-12 project-list">
          <div class="card">
            <div class="row m-0">
              <div class="col-sm-12 p-0">
                <b-tabs content-class="mt-3">
                  <b-tab active>
                    <template v-slot:title>
                      <feather type="target"></feather>{{ $t("All-Proposals") }}
                    </template>
                    <b-card-text>
                      <div class="col-sm-12 p-0">
                        <div class="card">
                          <div class="card-body">
                            <div class="row">
                              <div
                                class="col-xl-4 col-lg-6"
                                v-for="(proposal, index) in allProposals"
                                :key="index"
                                :class="index < 3 ? 'mb-4' : ''"
                              >
                                <div class="project-box">
                                  <span
                                    v-if="isVoting(proposal.type)"
                                    class="badge mt-1"
                                    :class="
                                      'badge-' + getSatusBadge(proposal.status)
                                    "
                                    >{{ proposal.status }}</span
                                  >
                                  <div
                                    v-if="proposal.sip"
                                    class="ribbon ribbon-bookmark ribbon-secondary"
                                  >
                                    <font color="white"><b>SIP</b></font>
                                  </div>
                                  <h6 :class="proposal.sip ? 'mt-4' : ''">
                                    <small>{{
                                      getDateStr(proposal.datetime)
                                    }}</small
                                    ><br />
                                    <h6>
                                      <b
                                        ><router-link
                                          :to="`/proposals/${proposal['_id']}`"
                                          >{{ proposal.title }}</router-link
                                        ></b
                                      >
                                    </h6>
                                  </h6>
                                  <div
                                    class="media"
                                    v-if="
                                      proposal.proposer &&
                                      proposal.proposer.wallet
                                    "
                                  >
                                    <img
                                      class="img-20 mr-1 rounded-circle"
                                      :src="
                                        getWalletAddressAvatarLink(
                                          proposal.proposer.wallet
                                        )
                                      "
                                    />
                                    <div class="media-body">
                                      <p>
                                        &nbsp;&nbsp;{{
                                          getProposerName(proposal.proposer)
                                        }}
                                      </p>
                                    </div>
                                  </div>
                                  <div>
                                    <div class="row details">
                                      <div class="col-2">
                                        <span>{{ $t("Yes-Vote") }}</span>
                                      </div>
                                      <div class="col-10 text-primary">
                                        <b>43</b>
                                      </div>
                                      <div class="col-2">
                                        <span>{{ $t("No-Vote") }}</span>
                                      </div>
                                      <div class="col-10 text-danger">
                                        <b>11</b>
                                      </div>
                                      <div class="col-2">
                                        <span>{{ $t("Abstain-Vote") }}</span>
                                      </div>
                                      <div class="col-10 text-secondary">
                                        <b>3</b>
                                      </div>
                                    </div>
                                    <div class="project-status mt-4">
                                      <div class="media mb-0">
                                        <div class="media-body">
                                          <span
                                            ><b
                                              >43 / <small>30 SGN</small></b
                                            ></span
                                          >
                                        </div>
                                        <div class="media-body text-right">
                                          <span><b>75.43 %</b></span>
                                        </div>
                                      </div>
                                      <b-progress
                                        class="sm-progress-bar"
                                        :value="75.43"
                                        striped
                                        animated
                                        :max="100"
                                        variant="success"
                                      ></b-progress>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-card-text>
                  </b-tab>
                  <b-tab>
                    <template v-slot:title>
                      <feather type="info"></feather> P1 提案
                    </template>
                    <b-card-text>
                      <div class="col-sm-12 p-0">
                        <div class="card">
                          <div class="card-body">
                            <div class="row">
                              <div
                                class="col-xl-4 col-lg-6"
                                v-for="(proposal, index) in doingprojects"
                                :key="index"
                                :class="index < 3 ? 'mb-4' : ''"
                              >
                                <div class="project-box">
                                  <span
                                    class="badge"
                                    :class="'badge-' + proposal.type"
                                    >{{ proposal.badge }}</span
                                  >
                                  <h6>{{ proposal.title }}</h6>
                                  <div class="media">
                                    <img
                                      class="img-20 mr-1 rounded-circle"
                                      :src="getImgUrl(proposal.img)"
                                      alt=""
                                      title=""
                                    />
                                    <div class="media-body">
                                      <p>{{ proposal.sites }}</p>
                                    </div>
                                  </div>
                                  <p>{{ proposal.desc }}</p>
                                  <div class="row details">
                                    <div class="col-6">
                                      <span>Issues </span>
                                    </div>
                                    <div
                                      class="col-6 text-primary"
                                      :class="'text-' + proposal.type"
                                    >
                                      {{ proposal.issue }}
                                    </div>
                                    <div class="col-6">
                                      <span>Resolved</span>
                                    </div>
                                    <div
                                      class="col-6 text-primary"
                                      :class="'text-' + proposal.type"
                                    >
                                      {{ proposal.resolved }}
                                    </div>
                                    <div class="col-6">
                                      <span>Comment</span>
                                    </div>
                                    <div
                                      class="col-6 text-primary"
                                      :class="'text-' + proposal.type"
                                    >
                                      {{ proposal.comment }}
                                    </div>
                                  </div>
                                  <div class="customers">
                                    <ul>
                                      <li class="d-inline-block">
                                        <img
                                          class="img-30 rounded-circle"
                                          :src="
                                            getImgUrl(proposal.customers_img1)
                                          "
                                          alt=""
                                          title=""
                                        />
                                      </li>
                                      <li class="d-inline-block">
                                        <img
                                          class="img-30 rounded-circle"
                                          :src="
                                            getImgUrl(proposal.customers_img2)
                                          "
                                          alt=""
                                          title=""
                                        />
                                      </li>
                                      <li class="d-inline-block">
                                        <img
                                          class="img-30 rounded-circle"
                                          :src="
                                            getImgUrl(proposal.customers_img3)
                                          "
                                          alt=""
                                          title=""
                                        />
                                      </li>
                                      <li class="d-inline-block ml-2">
                                        <p class="f-12">+10 More</p>
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="project-status mt-4">
                                    <div class="media mb-0">
                                      <p>{{ proposal.progress }}%</p>
                                      <div class="media-body text-right">
                                        <span>Done</span>
                                      </div>
                                    </div>
                                    <div class="progress" style="height: 5px">
                                      <div
                                        class="progress-bar-animated progress-bar-striped"
                                        :class="'bg-' + proposal.type"
                                        role="progressbar"
                                        :style="{
                                          width: proposal.progress + '%'
                                        }"
                                        aria-valuenow="10"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-card-text>
                  </b-tab>
                  <b-tab>
                    <template v-slot:title>
                      <feather type="check-circle"></feather> P2 提案
                    </template>
                    <b-card-text>
                      <div class="col-sm-12 p-0">
                        <div class="card">
                          <div class="card-body">
                            <div class="row">
                              <div
                                class="col-xl-4 col-lg-6"
                                v-for="(proposal, index) in doneprojects"
                                :key="index"
                                :class="index < 3 ? 'mb-4' : ''"
                              >
                                <div class="project-box">
                                  <span
                                    class="badge"
                                    :class="'badge-' + proposal.type"
                                    >{{ proposal.badge }}</span
                                  >
                                  <h6>{{ proposal.title }}</h6>
                                  <div class="media">
                                    <img
                                      class="img-20 mr-1 rounded-circle"
                                      :src="getImgUrl(proposal.img)"
                                      alt=""
                                      title=""
                                    />
                                    <div class="media-body">
                                      <p>{{ proposal.sites }}</p>
                                    </div>
                                  </div>
                                  <p>{{ proposal.desc }}</p>
                                  <div class="row details">
                                    <div class="col-6">
                                      <span>Issues </span>
                                    </div>
                                    <div
                                      class="col-6 text-primary"
                                      :class="'text-' + proposal.type"
                                    >
                                      {{ proposal.issue }}
                                    </div>
                                    <div class="col-6">
                                      <span>Resolved</span>
                                    </div>
                                    <div
                                      class="col-6 text-primary"
                                      :class="'text-' + proposal.type"
                                    >
                                      {{ proposal.resolved }}
                                    </div>
                                    <div class="col-6">
                                      <span>Comment</span>
                                    </div>
                                    <div
                                      class="col-6 text-primary"
                                      :class="'text-' + proposal.type"
                                    >
                                      {{ proposal.comment }}
                                    </div>
                                  </div>
                                  <div class="customers">
                                    <ul>
                                      <li class="d-inline-block">
                                        <img
                                          class="img-30 rounded-circle"
                                          :src="
                                            getImgUrl(proposal.customers_img1)
                                          "
                                          alt=""
                                          title=""
                                        />
                                      </li>
                                      <li class="d-inline-block">
                                        <img
                                          class="img-30 rounded-circle"
                                          :src="
                                            getImgUrl(proposal.customers_img2)
                                          "
                                          alt=""
                                          title=""
                                        />
                                      </li>
                                      <li class="d-inline-block">
                                        <img
                                          class="img-30 rounded-circle"
                                          :src="
                                            getImgUrl(proposal.customers_img3)
                                          "
                                          alt=""
                                          title=""
                                        />
                                      </li>
                                      <li class="d-inline-block ml-2">
                                        <p class="f-12">+10 More</p>
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="project-status mt-4">
                                    <div class="media mb-0">
                                      <p>{{ proposal.progress }}%</p>
                                      <div class="media-body text-right">
                                        <span>Done</span>
                                      </div>
                                    </div>
                                    <div class="progress" style="height: 5px">
                                      <div
                                        class="progress-bar-animated progress-bar-striped"
                                        :class="'bg-' + proposal.type"
                                        role="progressbar"
                                        :style="{
                                          width: proposal.progress + '%'
                                        }"
                                        aria-valuenow="10"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-card-text>
                  </b-tab>
                  <b-tab>
                    <template v-slot:title>
                      <feather type="check-circle"></feather> P3 提案
                    </template>
                    <b-card-text>
                      <div class="col-sm-12 p-0">
                        <div class="card">
                          <div class="card-body">
                            <div class="row">
                              <div
                                class="col-xl-4 col-lg-6"
                                v-for="(proposal, index) in doneprojects"
                                :key="index"
                                :class="index < 3 ? 'mb-4' : ''"
                              >
                                <div class="project-box">
                                  <span
                                    class="badge"
                                    :class="'badge-' + proposal.type"
                                    >{{ proposal.badge }}</span
                                  >
                                  <h6>{{ proposal.title }}</h6>
                                  <div class="media">
                                    <img
                                      class="img-20 mr-1 rounded-circle"
                                      :src="getImgUrl(proposal.img)"
                                      alt=""
                                      title=""
                                    />
                                    <div class="media-body">
                                      <p>{{ proposal.sites }}</p>
                                    </div>
                                  </div>
                                  <p>{{ proposal.desc }}</p>
                                  <div class="row details">
                                    <div class="col-6">
                                      <span>Issues </span>
                                    </div>
                                    <div
                                      class="col-6 text-primary"
                                      :class="'text-' + proposal.type"
                                    >
                                      {{ proposal.issue }}
                                    </div>
                                    <div class="col-6">
                                      <span>Resolved</span>
                                    </div>
                                    <div
                                      class="col-6 text-primary"
                                      :class="'text-' + proposal.type"
                                    >
                                      {{ proposal.resolved }}
                                    </div>
                                    <div class="col-6">
                                      <span>Comment</span>
                                    </div>
                                    <div
                                      class="col-6 text-primary"
                                      :class="'text-' + proposal.type"
                                    >
                                      {{ proposal.comment }}
                                    </div>
                                  </div>
                                  <div class="customers">
                                    <ul>
                                      <li class="d-inline-block">
                                        <img
                                          class="img-30 rounded-circle"
                                          :src="
                                            getImgUrl(proposal.customers_img1)
                                          "
                                          alt=""
                                          title=""
                                        />
                                      </li>
                                      <li class="d-inline-block">
                                        <img
                                          class="img-30 rounded-circle"
                                          :src="
                                            getImgUrl(proposal.customers_img2)
                                          "
                                          alt=""
                                          title=""
                                        />
                                      </li>
                                      <li class="d-inline-block">
                                        <img
                                          class="img-30 rounded-circle"
                                          :src="
                                            getImgUrl(proposal.customers_img3)
                                          "
                                          alt=""
                                          title=""
                                        />
                                      </li>
                                      <li class="d-inline-block ml-2">
                                        <p class="f-12">+10 More</p>
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="project-status mt-4">
                                    <div class="media mb-0">
                                      <p>{{ proposal.progress }}%</p>
                                      <div class="media-body text-right">
                                        <span>Done</span>
                                      </div>
                                    </div>
                                    <div class="progress" style="height: 5px">
                                      <div
                                        class="progress-bar-animated progress-bar-striped"
                                        :class="'bg-' + proposal.type"
                                        role="progressbar"
                                        :style="{
                                          width: proposal.progress + '%'
                                        }"
                                        aria-valuenow="10"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-card-text>
                  </b-tab>
                  <b-tab>
                    <template v-slot:title>
                      <feather type="check-circle"></feather> SIP
                    </template>
                    <b-card-text>
                      <div class="col-sm-12 p-0">
                        <div class="card">
                          <div class="card-body">
                            <div class="row">
                              <div
                                class="col-xl-4 col-lg-6"
                                v-for="(proposal, index) in doneprojects"
                                :key="index"
                                :class="index < 3 ? 'mb-4' : ''"
                              >
                                <div class="project-box">
                                  <span
                                    class="badge"
                                    :class="'badge-' + proposal.type"
                                    >{{ proposal.badge }}</span
                                  >
                                  <h6>{{ proposal.title }}</h6>
                                  <div class="media">
                                    <img
                                      class="img-20 mr-1 rounded-circle"
                                      :src="getImgUrl(proposal.img)"
                                      alt=""
                                      title=""
                                    />
                                    <div class="media-body">
                                      <p>{{ proposal.sites }}</p>
                                    </div>
                                  </div>
                                  <p>{{ proposal.desc }}</p>
                                  <div class="row details">
                                    <div class="col-6">
                                      <span>Issues </span>
                                    </div>
                                    <div
                                      class="col-6 text-primary"
                                      :class="'text-' + proposal.type"
                                    >
                                      {{ proposal.issue }}
                                    </div>
                                    <div class="col-6">
                                      <span>Resolved</span>
                                    </div>
                                    <div
                                      class="col-6 text-primary"
                                      :class="'text-' + proposal.type"
                                    >
                                      {{ proposal.resolved }}
                                    </div>
                                    <div class="col-6">
                                      <span>Comment</span>
                                    </div>
                                    <div
                                      class="col-6 text-primary"
                                      :class="'text-' + proposal.type"
                                    >
                                      {{ proposal.comment }}
                                    </div>
                                  </div>
                                  <div class="customers">
                                    <ul>
                                      <li class="d-inline-block">
                                        <img
                                          class="img-30 rounded-circle"
                                          :src="
                                            getImgUrl(proposal.customers_img1)
                                          "
                                          alt=""
                                          title=""
                                        />
                                      </li>
                                      <li class="d-inline-block">
                                        <img
                                          class="img-30 rounded-circle"
                                          :src="
                                            getImgUrl(proposal.customers_img2)
                                          "
                                          alt=""
                                          title=""
                                        />
                                      </li>
                                      <li class="d-inline-block">
                                        <img
                                          class="img-30 rounded-circle"
                                          :src="
                                            getImgUrl(proposal.customers_img3)
                                          "
                                          alt=""
                                          title=""
                                        />
                                      </li>
                                      <li class="d-inline-block ml-2">
                                        <p class="f-12">+10 More</p>
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="project-status mt-4">
                                    <div class="media mb-0">
                                      <p>{{ proposal.progress }}%</p>
                                      <div class="media-body text-right">
                                        <span>Done</span>
                                      </div>
                                    </div>
                                    <div class="progress" style="height: 5px">
                                      <div
                                        class="progress-bar-animated progress-bar-striped"
                                        :class="'bg-' + proposal.type"
                                        role="progressbar"
                                        :style="{
                                          width: proposal.progress + '%'
                                        }"
                                        aria-valuenow="10"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-card-text>
                  </b-tab>
                </b-tabs>
              </div>
              <div class="col-sm-6 create-project-btn">
                <div class="text-right">
                  <div class="form-group mb-0 mr-0"></div>
                  <!-- <a class="btn btn-primary" href="">
                      <i data-feather="plus-square"> </i>Create New Project</a
                    > -->
                  <router-link to="/proposals/generator"
                    ><a class="btn btn-primary" href="">
                      {{ $t("Create-Proposal") }}</a
                    ></router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Container-fluid Ends-->
  </div>
</template>

<script>
import EthersService from "../../services/ether.service"
import { avatarService } from "../../services/avatar.service"
import { mapState, mapGetters, mapActions } from "vuex"

import { QUERY_ALL_PROPOSALS } from "@/store/modules/proposal"
// import { FETCH_WALLET_USER } from "@/store/modules/user"

export default {
  data() {
    return {
      allProposals: []
    }
  },
  mounted() {
    this.$store
      .dispatch(QUERY_ALL_PROPOSALS, { offset: 0, limit: 10000 })
      .then((proposals) => {
        this.allProposals = proposals
        console.log("allProposals::", this.allProposals)
      })
  },
  computed: {
    ...mapState({
      allprojects: (state) => state.common.allprojects,
      doingprojects: (state) => state.common.doingprojects,
      doneprojects: (state) => state.common.doneprojects
    }),
    ...mapGetters([]),
    ...mapActions([QUERY_ALL_PROPOSALS])
  },
  methods: {
    getProposerName(proposer) {
      if (!proposer || !proposer.wallet) {
        return "Anonymous"
      }
      const shorts = EthersService.shortWalletAddress(proposer.wallet)
      if (proposer && proposer.nickname) {
        return proposer.nickname
      } else {
        return shorts
      }
    },
    getWalletAddressAvatarLink(wallet) {
      return avatarService.getAvatar(wallet, 30)
    },
    getSatusBadge() {
      return "primary"
    },
    getDateStr(datetime) {
      const dt = new Date(datetime)
      return `${dt.getFullYear()}/${dt.getMonth() + 1}/${dt.getDate()}`
    },
    getImgUrl(path) {
      return require("@/assets/images/" + path)
    },
    isVoting(proposalType) {
      return proposalType === "Voting"
    }
  }
}
</script>
