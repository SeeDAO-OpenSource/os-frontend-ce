<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid" style="padding-top: 40px">
      <div>
        <div class="row product-page-main p-0" v-if="isFetched">
          <div class="col-xl-8 xl-cs-35 box-col-6">
            <div class="card">
              <div class="card-body">
                <div class="product-page-details mt-4">
                  <h3 align="left">{{ getProposal.title }}</h3>
                  <hr />
                </div>
                <div v-html="'<br/>' + getProposal.content"></div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 xl-cs-100 box-col-6">
            <div class="card">
              <div
                class="card-body"
                v-if="
                  currUser !== null &&
                  currUser !== undefined &&
                  getProposal.datetime
                "
              >
                <!-- side-bar colleps block stat-->
                <div class="filter-block text-center">
                  <p>{{ getWalletUserName }}&nbsp;{{ $t("You-Can") }}&nbsp;:</p>
                  <b-button variant="outline-primary" disabled size="lg"
                    >✔️ {{ $t("Proposal-Voted") }}</b-button
                  >
                  <span
                    >&nbsp;&nbsp;&nbsp;<b-button
                      variant="info"
                      size="lg"
                      @click="goToEdit(getEventById)"
                      >{{ $t("Edit-Proposal") }}</b-button
                    ></span
                  >
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <div class="collection-filter-block">
                  <ul>
                    <li>
                      <div class="media">
                        <feather type="globe"></feather>
                        <div class="media-body">
                          <h5>
                            <b>{{ $t("Proposal-Type") }}</b>
                          </h5>
                          <p v-if="getProposal.type === 'Voting'">
                            <b>{{ $t("Voting-Proposal") }}</b>
                          </p>
                          <p v-else>{{ $t("Discussion-Proposal") }}</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="media mt-4">
                        <feather type="clock"></feather>
                        <div class="media-body">
                          <h5>
                            <b>{{ $t("Proposal-Time") }}</b>
                          </h5>
                          <p>
                            {{ getProposalTimeStr(getProposal) }}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="media mt-4">
                        <feather type="home"></feather>
                        <div class="media-body">
                          <h5>
                            <b>{{ $t("Prposal-Status") }}</b>
                          </h5>
                          {{ $t(getProposal.status) }}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="media mt-4">
                        <feather type="key"></feather>
                        <div class="media-body">
                          <h5>
                            <b>{{ $t("Proposal-Category") }}</b>
                          </h5>
                          <p>
                            {{ $t(getProposal.category) }}
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- silde-bar colleps block end here-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <Bot
      :title="$t(currProposal.title)"
      :data="getBotData()"
      :user="currUser"
      :path="'/proposals/:id'"
      v-if="
        currProposal !== null &&
        currProposal !== undefined &&
        currProposal.title !== undefined &&
        currUser !== null &&
        currUser !== undefined &&
        currUser.wallet !== undefined
      "
    />
    <!-- Container-fluid Ends-->
  </div>
</template>
<script>
import Bot from "../../components/bot/main.vue"
import { mapState } from "vuex"
import { HeartRating } from "vue-rate-it"
import router from "@/router"
import { swiper, swiperSlide } from "vue-awesome-swiper"
import "swiper/dist/css/swiper.css"
import { avatarService } from "../../services/avatar.service"
import EthersService from "../../services/ether.service"

import { mapGetters, mapActions } from "vuex"
import { FETCH_PROPOSAL_BY_ID, GET_PROPOSAL } from "@/store/modules/proposal"
import { FETCH_WALLET_USER, GET_WALLET_USER_NAME } from "@/store/modules/user"

export default {
  name: "ProductDetails",
  components: {
    HeartRating,
    swiper,
    swiperSlide,
    Bot
  },
  data() {
    return {
      isFetched: false,
      isRegistering: false,
      currUser: null,
      currProposal: {
        image: "",
        description: "",
        where: "",
        location: ""
      },
      heartrating: {
        rating: 3
      },
      counter: 1,
      modalShow: false,
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 1,
        freeMode: true
      },
      swiperOption1: {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        centeredSlides: false
      },
      activeTab: "event_details"
    }
  },
  computed: {
    ...mapGetters([GET_WALLET_USER_NAME, GET_PROPOSAL]),
    ...mapActions([FETCH_PROPOSAL_BY_ID, FETCH_WALLET_USER]),
    ...mapState({
      cartDate: (state) =>
        state.products.cart.find((item) => {
          if (parseInt(router.currentRoute.params.id) === item.sku) return item
        }) || [],
      products: (state) =>
        state.products.products.find((item) => {
          if (parseInt(router.currentRoute.params.id) === item.sku) return item
        })
    }),
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    this.$store
      .dispatch(FETCH_PROPOSAL_BY_ID, { id: this.$route.params.id })
      .then((proposal) => {
        this.currProposal = proposal
        this.$store
          .dispatch(FETCH_WALLET_USER)
          .then((user) => {
            this.currUser = user
            this.isFetched = true
          })
          .catch((err) => {
            console.error(err)
            this.isFetched = true
          })
      })
      .catch((err) => {
        console.error(err)
        this.isFetched = true
      })
  },
  methods: {
    getBotData(){
      let proposal = JSON.parse(JSON.stringify(this.currProposal))
      proposal.content = this.strippedContent(this.currProposal.content)
      return proposal
    },
    strippedContent(string) {
      return string.replace(/<\/?[^>]+>/gi, " ")
    },
    getProposalTimeStr(proposal) {
      if (!proposal.datetime) {
        return this.$t("Unknown")
      }
      return this.getDatetimeString(new Date(proposal.datetime))
    },
    goToEdit(event) {
      this.$router.push(`/events/${event["_id"]}/edit`)
    },
    isEventHost(event) {
      if (
        event.hosts &&
        event.hosts.length > 0 &&
        event.hosts.find((h) => h.wallet === this.currUser.wallet)
      ) {
        return true
      }
      return false
    },
    isEventOver(event) {
      const now = new Date()
      const endtime = this.getEndtime(event.start, event.duration / 60000)
      if (now > endtime) return true
      else return false
    },
    getMemberName(nickname, address) {
      const shorts = EthersService.shortWalletAddress(address)
      if (nickname) {
        return `${nickname} (${shorts})`
      } else {
        return shorts
      }
    },
    getAttendeeAvatar(id, size) {
      return avatarService.getAvatar(id, size)
    },
    followEvent() {
      this.isRegistering = true
      this.$store
        .dispatch(REGISTER_EVENT, {
          eventId: this.currProposal["_id"],
          userId: this.currUser["_id"]
        })
        .then((result) => {
          this.isRegistering = false
          console.log("followed!! result::", result)
        })
        .catch((error) => {
          this.isRegistering = false
          console.error(error)
        })
    },
    getDatetimeString(datetime) {
      return `${datetime.toLocaleDateString("zh-CN")} (${this.getDayList(
        datetime.getDay()
      )}) ${datetime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      })}`
    },
    getTimeString(datetime, start = null) {
      let s = start
      if (!start) s = datetime
      if (
        datetime.toLocaleDateString("zh-CN") !== s.toLocaleDateString("zh-CN")
      ) {
        return this.getDatetimeString(datetime)
      } else {
        return datetime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        })
      }
    },

    getDayList(num) {
      const daylist = ["日", "一", "二", "三", "四", "五", "六"]
      return daylist[num]
    },

    getEventTimeString(start, duration) {
      if (start === null || start === undefined) {
        return ""
      } else if (start === "" || start === 0) {
        return "待定"
      } else if (!duration) {
        return this.getDatetimeString(new Date(start))
      } else {
        const starttime = new Date(start)
        const endtime = new Date(Number(start) + Number(duration) * 60000)
        return (
          this.getDatetimeString(starttime) +
          " - " +
          this.getTimeString(endtime, starttime)
        )
      }
    },

    getEndtime(start, duration) {
      if (start && duration)
        return new Date(new Date(start).getTime() + Number(duration) * 60000)
      else if (start) return new Date(new Date(start).getTime() + 60 * 60000)
      else return new Date(new Date() + 60 * 60000)
    },
    getImgUrl(path) {
      return require("../../assets/images/" + path)
    },
    slideTo(id) {
      this.swiper.slideTo(id, 1000, false)
    },
    //Add to cart
    addToCart: function (product, qty) {
      product.quantity = qty ? qty : 1
      this.$store.dispatch("products/addToCart", product)
    },
    increment() {
      if (this.counter < this.quickViewProduct.stock) this.counter++
    },
    decrement() {
      if (this.counter > 1) this.counter--
    },
    // Detail Tab
    tabContent(val) {
      this.activeTab = val
    }
  }
}
</script>
