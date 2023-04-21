<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid" style="padding-top: 40px">
      <div>
        <div class="row product-page-main p-0">
          <div class="col-xl-8 xl-100 box-col-6">
            <div class="card">
              <div class="card-body">
                <div class="text-center">
                  <img
                    width="80%"
                    :src="
                      getEventById.image !== '' &&
                      getEventById.image !== undefined
                        ? getEventById.image
                        : getImgUrl('defaultEvent.png')
                    "
                  />
                </div>
                <div class="product-page-details mt-4">
                  <h3 align="center">{{ getEventById.title }}</h3>
                </div>
                <!-- <div class="product-price">
                  {{ Object.keys(currEvent) }}
                  <del>{{ currEvent["_id"] }} </del>
                </div> -->
                <!-- <hr />
                <div>
                  <table class="product-page-width">
                    <tbody>
                      <tr>
                        <td><b>{{ $t("Event-Where") }} &nbsp;&nbsp;&nbsp;:</b></td>
                        <td>{{ getEventById.where }}</td>
                      </tr>
                      <tr>
                        <td>
                          <b
                            >Availability &nbsp;&nbsp;&nbsp;:
                            &nbsp;&nbsp;&nbsp;</b
                          >
                        </td>
                        <td class="txt-success in-stock">In stock</td>
                        <td
                          class="txt-danger out-of-stock"
                          style="display: none"
                        >
                          Out Of stock
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Seller &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b>
                        </td>
                        <td>ABC</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Fabric &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b>
                        </td>
                        <td>Cotton</td>
                      </tr>
                    </tbody>
                  </table>
                </div> -->

                <!-- <div class="row">
                  <div class="col-md-6">
                    <h6 class="product-title">share it</h6>
                  </div>
                  <div class="col-md-6">
                    <div class="product-icon">
                      <ul class="product-social">
                        <li class="d-inline-block">
                          <a href="#"><i class="fa fa-facebook"></i></a>
                        </li>
                        <li class="d-inline-block">
                          <a href="#"><i class="fa fa-google-plus"></i></a>
                        </li>
                        <li class="d-inline-block">
                          <a href="#"><i class="fa fa-twitter"></i></a>
                        </li>
                        <li class="d-inline-block">
                          <a href="#"><i class="fa fa-instagram"></i></a>
                        </li>
                        <li class="d-inline-block">
                          <a href="#"><i class="fa fa-rss"></i></a>
                        </li>
                      </ul>
                      <form class="d-inline-block f-right"></form>
                    </div>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
          <div class="col-xl-4 xl-cs-35 box-col-6">
            <div class="card">
              <div
                class="card-body"
                v-if="
                  currUser !== null &&
                  currUser !== undefined &&
                  getEventById.start
                "
              >
                <!-- side-bar colleps block stat-->
                <div
                  class="filter-block text-center"
                  v-if="!isEventOver(getEventById)"
                >
                  <p>{{ getUserName }}&nbsp;{{ $t("You-Can") }}&nbsp;:</p>
                  <b-button
                    variant="outline-primary"
                    disabled
                    size="lg"
                    v-if="
                      getEventById.interested &&
                      getEventById.interested.find(
                        (m) => m.wallet === currUser.wallet
                      )
                    "
                    >✔️ {{ $t("Event-Followed") }}</b-button
                  >
                  <b-button
                    variant="primary"
                    size="lg"
                    @click="followEvent"
                    v-else
                    >{{ $t("Follow-Event") }}</b-button
                  >
                  <span v-if="isEventHost(getEventById)"
                    >&nbsp;&nbsp;&nbsp;<b-button
                      variant="info"
                      size="lg"
                      @click="goToEdit(getEventById)"
                      >{{ $t("Edit-Event") }}</b-button
                    ></span
                  >
                </div>
                <div class="filter-block text-center" v-else>
                  <p>{{ getUserName }}&nbsp;{{ $t("You-Can") }}&nbsp;:</p>
                  <b-button
                    id="default-lg-primary"
                    variant="outline-info"
                    class="btn-pill"
                    size="lg"
                    disabled
                    >{{ $t("Event-is-Over") }}</b-button
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
                            <b>{{ $t("Event-Type") }}</b>
                          </h5>
                          <p v-if="getEventById.where === 'local'">
                            <b>{{ $t("Local-Event") }}</b>
                          </p>
                          <p v-else>{{ $t("Online-Event") }}</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="media mt-4">
                        <feather type="clock"></feather>
                        <div class="media-body">
                          <h5>
                            <b>{{ $t("Event-Time") }}</b>
                          </h5>
                          <p>
                            {{
                              getEventTimeString(
                                getEventById.start,
                                getEventById.duration / 60000
                              )
                            }}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="media mt-4">
                        <feather type="home"></feather>
                        <div
                          class="media-body"
                          v-if="getEventById.where === 'local'"
                        >
                          <h5>
                            <b>{{ $t("Event-Location") }}</b>
                          </h5>
                          <a
                            :href="`https://www.google.com.tw/maps/search/${getEventById.location}/`"
                            target="_blank"
                            >{{ getEventById.location }}</a
                          >
                        </div>
                        <div class="media-body" v-else>
                          <h5>
                            <b>{{ $t("Event-Link") }}</b>
                          </h5>
                          <a
                            :href="getEventById.location"
                            target="_blank"
                            v-if="getEventById.location.includes('http')"
                            >{{ getEventById.location }}</a
                          >
                          <a href="#" v-else>{{ getEventById.location }}</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="media mt-4">
                        <feather type="key"></feather>
                        <div class="media-body">
                          <h5>
                            <b>{{ $t("Event-Password") }}</b>
                          </h5>
                          <p
                            v-if="
                              getEventById.password &&
                              getEventById.password !== ''
                            "
                          >
                            {{ getEventById.password }}
                          </p>
                          <p v-else>{{ $t("None") }}</p>
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
      <div class="card">
        <div class="row product-page-main">
          <div class="col-sm-12">
            <ul
              class="nav nav-tabs border-tab mb-0"
              id="top-tab"
              role="tablist"
            >
              <li class="nav-item" @click="tabContent('event_details')">
                <a
                  class="nav-link"
                  id="top-home-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="top-home"
                  aria-selected="false"
                  :class="[{ active: activeTab == 'event_details' }]"
                  ><b>{{ $t("Event-Details") }}</b></a
                >
                <div class="material-border"></div>
              </li>
              <li class="nav-item" @click="tabContent('attendees')">
                <a
                  class="nav-link"
                  id="profile-top-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="top-profile"
                  aria-selected="false"
                  :class="[{ active: activeTab == 'attendees' }]"
                  ><b>{{ $t("Interested-Members") }}</b></a
                >
                <div class="material-border"></div>
              </li>
              <li class="nav-item" @click="tabContent('speakers')">
                <a
                  class="nav-link"
                  id="contact-top-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="top-contact"
                  aria-selected="true"
                  :class="[{ active: activeTab == 'speakers' }]"
                  ><b>{{ $t("Speakers-and-Hosts") }}</b></a
                >
                <div class="material-border"></div>
              </li>
              <li class="nav-item" @click="tabContent('related')">
                <a
                  class="nav-link"
                  id="brand-top-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="top-brand"
                  aria-selected="true"
                  :class="[{ active: activeTab == 'related' }]"
                  ><b>{{ $t("Related-Link") }}</b></a
                >
                <div class="material-border"></div>
              </li>
            </ul>
            <div class="tab-content" id="top-tabContent">
              <div
                class="tab-pane fade"
                :class="{ 'show active': activeTab == 'event_details' }"
                id="event-details"
                role="tabpanel"
                aria-labelledby="top-home-tab"
                v-html="'<br/>' + getEventById.description"
              />
              <div
                class="tab-pane fade"
                :class="{ 'show active': activeTab == 'attendees' }"
                id="top-profile"
                role="tabpanel"
                aria-labelledby="profile-top-tab"
              >
                <br />
                <div
                  class="row"
                  v-if="
                    getEventById.interested && getEventById.interested.length
                  "
                >
                  <div
                    class="col-sm-4"
                    v-for="(member, index) in getEventById.interested"
                    :key="'event-attenee-' + index"
                  >
                    <div class="avatar">
                      <img
                        class="img-60 rounded-circle"
                        :src="getAttendeeAvatar(member.wallet, 60)"
                        alt="#"
                      />
                      {{ getMemberName(member.nickname, member.wallet) }}
                      <div class="status status-100 bg-success"></div>
                    </div>
                  </div>
                </div>
                <div class="row" v-else>
                  <div class="col-12 text-center">
                    <br /><br /><br />
                    <h5>
                      <b>{{ $t("No-One-Interested") }}</b>
                    </h5>
                    <br /><br /><br />
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="top-contact"
                role="tabpanel"
                :class="{ 'show active': activeTab == 'speakers' }"
                aria-labelledby="contact-top-tab"
              >
                <br />
                <h5 align="center">
                  <b>{{ $t("Hosts") }}</b>
                </h5>
                <div
                  class="avatar"
                  align="center"
                  v-if="getEventById.hosts && getEventById.hosts.length > 0"
                >
                  <img
                    class="img-60 rounded-circle"
                    :src="getAttendeeAvatar(getEventById.hosts[0].wallet, 60)"
                    alt="#"
                  />
                  {{
                    getMemberName(
                      getEventById.hosts[0].nickname,
                      getEventById.hosts[0].wallet
                    )
                  }}
                  <div class="status status-100 bg-success"></div>
                </div>
                <div class="avatar" align="center" v-else>
                  <br />
                  <p>{{ $t("No-Any") }}{{ $t("Hosts") }}</p>
                  <br />
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="top-brand"
                role="tabpanel"
                :class="{ 'show active': activeTab == 'related' }"
                aria-labelledby="brand-top-tab"
              >
                <p class="mb-0 m-t-20">Comming Soon...</p>
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
import { mapState } from "vuex"
import { HeartRating } from "vue-rate-it"
import router from "@/router"
import { swiper, swiperSlide } from "vue-awesome-swiper"
import "swiper/dist/css/swiper.css"
import { avatarService } from "../../services/avatar.service"
import EthersService from "../../services/ether.service"

import { mapGetters, mapActions } from "vuex"
import {
  FETCH_EVENT_BY_ID,
  REGISTER_EVENT,
  GET_EVENT_BY_ID
} from "@/store/modules/event"
import { FETCH_WALLET_USER, GET_WALLET_USER_NAME } from "@/store/modules/user"

export default {
  name: "ProductDetails",
  components: {
    HeartRating,
    swiper,
    swiperSlide
  },
  data() {
    return {
      isRegistering: false,
      currUser: null,
      currEvent: {
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
    ...mapGetters([GET_EVENT_BY_ID, GET_WALLET_USER_NAME]),
    ...mapActions([FETCH_EVENT_BY_ID, REGISTER_EVENT, FETCH_WALLET_USER]),
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
      .dispatch(FETCH_EVENT_BY_ID, this.$route.params.id)
      .then((event) => {
        this.currEvent = event
        this.$store.dispatch(FETCH_WALLET_USER).then((user) => {
          this.currUser = user
        })
      })
  },
  methods: {
    goToEdit(event){
      this.$router.push(`/events/${event['_id']}/edit`)
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
          eventId: this.currEvent["_id"],
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
