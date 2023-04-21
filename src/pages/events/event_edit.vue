<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid" style="padding-top: 40px">
      <div class="row">
        <div class="col-sm-12">
          <px-card>
            <div slot="with-padding">
              <h3>
                <b>{{ $t("Edit-Event") }}</b>
                <b-button
                  class="mt-2 pull-right"
                  variant="danger"
                  @click="submitDeleteEvent"
                  >{{ $t("Delete-Event") }}</b-button
                >
                <b-button
                  class="mt-2 mr-3 pull-right"
                  variant="info"
                  @click="backToEvent"
                  >{{ $t("Back-to-Event") }}</b-button
                >
              </h3>
              <hr />
              <div class="form theme-form">
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <label
                        >{{ $t("Event-Title") }}
                        <font color="red">*</font></label
                      >
                      <input
                        class="form-control"
                        type="text"
                        v-model="newEvent.title"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>{{ $t("Event-Type") }}</label>
                      <select
                        class="form-control digits"
                        v-model="newEvent.where"
                      >
                        <option value="" disabled>
                          {{ $t("Please-Select") }}...
                        </option>
                        <option value="online">{{ $t("Online-Event") }}</option>
                        <option value="local">{{ $t("Local-Event") }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>{{ $t("Hosts") }}</label>
                      <input
                        class="form-control"
                        type="text"
                        :value="getUserName"
                        disabled
                      />
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label
                        >{{ $t("SBT-Requirement") }}
                        <small>(Comming soon)</small></label
                      >
                      <input class="form-control" type="text" disabled />
                    </div>
                  </div>
                </div>
                <div class="row" v-if="newEvent.where !== ''">
                  <div class="col-sm-8">
                    <div class="form-group">
                      <label v-if="newEvent.where === 'online'">{{
                        $t("Event-Link")
                      }}</label>
                      <label v-else>{{ $t("Event-Location") }}</label>
                      <input
                        class="form-control"
                        type="text"
                        v-model="newEvent.location"
                      />
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>{{ $t("Event-Password") }}</label>
                      <input
                        class="form-control"
                        type="text"
                        :placeholder="this.$t('If-None-Leave-It-Empty') + '...'"
                      />
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label>{{ $t("Related-Link") }}</label>
                      <input
                        class="form-control"
                        type="text"
                        :placeholder="this.$t('If-None-Leave-It-Empty') + '...'"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3">
                    <div class="form-group">
                      <label
                        >{{ $t("Start-Time") }} (UTC+8)
                        <font color="red">*</font></label
                      >
                      <datepicker
                        input-class="datepicker-here form-control digits"
                        v-model="newEvent.start.date"
                      ></datepicker>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="form-group">
                      <label>&nbsp;</label>
                      <b-form-input
                        type="time"
                        v-model="newEvent.start.time"
                      ></b-form-input>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="form-group">
                      <label
                        >{{ $t("End-Time") }} (UTC+8)
                        <font color="red">*</font></label
                      >
                      <datepicker
                        input-class="datepicker-here form-control digits"
                        v-model="newEvent.end.date"
                      ></datepicker>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="form-group">
                      <label>&nbsp;</label>
                      <b-form-input
                        type="time"
                        v-model="newEvent.end.time"
                      ></b-form-input>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <label>{{ $t("Event-Details") }}</label>
                      <ckeditor
                        :editor="editor"
                        v-model="newEvent.description"
                      ></ckeditor>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <label>{{ $t("Cover-Image") }}</label>
                      <b-form-file
                        class="form-control"
                        v-model="newEvent.imageFile"
                        @input="loadCoverImage"
                        plain
                      ></b-form-file>
                    </div>
                  </div>
                  <div class="col-4" v-if="newEvent.image !== ''">
                    <img class="img-fluid" :src="this.newEvent.image" />
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col">
                    <div class="form-group mb-0">
                      <b-button
                        class="btn-primary mr-3"
                        @click="submitEvent()"
                        >{{ $t("Event-Update") }}</b-button
                      >
                      <a class="btn btn-outline-primary" href="#">{{
                        $t("Cancel")
                      }}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </px-card>
        </div>
      </div>
    </div>
    <!-- Container-fluid Ends-->
  </div>
</template>
<script>
import Datepicker from "vuejs-datepicker"
import CKEditor from "@ckeditor/ckeditor5-vue"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"

import EthersService from "@/services/ether.service"

import { mapGetters, mapActions } from "vuex"
import {
  FETCH_EVENT_BY_ID,
  UPDATE_EVENT,
  DELETE_EVENT
} from "@/store/modules/event"
import { FETCH_WALLET_USER, GET_WALLET_USER_NAME } from "@/store/modules/user"

export default {
  components: {
    ckeditor: CKEditor.component,
    Datepicker
  },
  data() {
    return {
      isEventDeleting: false,
      currUser: "",
      currEvent: "",
      currHost: "",
      newEvent: {
        title: "",
        description: "",
        hosts: "",
        where: "",
        location: "",
        password: "",
        imageFile: [],
        image: "",
        type: "",
        start: {
          date: "",
          time: ""
        },
        end: {
          date: "",
          time: ""
        }
      },
      isEventUpdating: false,
      editor: ClassicEditor
    }
  },
  mounted() {
    this.$store.dispatch(FETCH_WALLET_USER).then((user) => {
      this.currUser = user
      console.log("user::", user)
      this.$store
        .dispatch(FETCH_EVENT_BY_ID, this.$route.params.id)
        .then((event) => {
          this.currEvent = event
          if (
            event.hosts &&
            event.hosts.length > 0 &&
            event.hosts.find((h) => h.wallet === this.currUser.wallet)
          ) {
            this.initNewEvent(event)
          } else {
            this.$router.push(`/events/${this.$route.params.id}`)
          }
        })
    })
  },
  methods: {
    initNewEvent(event) {
      this.newEvent.title = event.title
      this.newEvent.description = event.description
      const host = event.hosts.length
        ? this.getHostName(event.hosts[0].nickname, event.hosts[0].wallet)
        : ""
      this.newEvent.hosts = host
      this.newEvent.where = event.where
      this.newEvent.location = event.location
      this.newEvent.password = event.password
      this.newEvent.image = event.image
      this.newEvent.type = event.type
      const starttime = new Date(event.start)
      const endtime = new Date(event.start + event.duration)
      this.newEvent.start.date = starttime
      this.newEvent.start.time = `${String(starttime.getHours()).padStart(
        2,
        "0"
      )}:${String(starttime.getMinutes()).padStart(2, "0")}`
      this.newEvent.end.date = endtime
      this.newEvent.end.time = `${String(endtime.getHours()).padStart(
        2,
        "0"
      )}:${String(endtime.getMinutes()).padStart(2, "0")}`
    },
    getHostName(nickname, address) {
      const shorts = EthersService.shortWalletAddress(address)
      if (nickname) {
        return `${nickname} (${shorts})`
      } else {
        return shorts
      }
    },
    getDatetime(dt) {
      const timestr = String(dt.time).split(":")
      return new Date(
        dt.date.getFullYear(),
        dt.date.getMonth(),
        dt.date.getDate(),
        Number(timestr[0]),
        Number(timestr[1]),
        0,
        0
      )
    },
    isInvalidEvent(event) {
      if (event.title === "") {
        this.$toasted.show(
          `${this.$t("Title-Cant-Be-Empty")} : ${this.$t("Event-Title")}`,
          {
            theme: "outline",
            position: "top-right",
            type: "error",
            duration: 3500
          }
        )
      } else if (event.where === "") {
        this.$toasted.show(
          `${this.$t("Where-Cant-Be-Empty")} : ${this.$t("Event-Type")}`,
          {
            theme: "outline",
            position: "top-right",
            type: "error",
            duration: 3500
          }
        )
      } else {
        const start = this.getDatetime(event.start)
        const end = this.getDatetime(event.end)
        if (start > end) {
          this.$toasted.show(
            `${this.$t("Endtime-Must-Greater-Than-Starttime")} : ${this.$t(
              "Start-Time"
            )} , ${this.$t("End-Time")}`,
            {
              theme: "outline",
              position: "top-right",
              type: "error",
              duration: 3500
            }
          )
        }
      }
    },
    validEvent(event) {
      const start = this.getDatetime(event.start)
      const end = this.getDatetime(event.end)
      if (start < end && event.title !== "" && event.where !== "") {
        return true
      }
      this.isInvalidEvent(event)
      return false
    },
    submitDeleteEvent() {
      this.isEventDeleting = true
      this.$store
        .dispatch(DELETE_EVENT, this.$route.params.id)
        .then(() => {
          this.isEventDeleting = false
          this.$router.push("/events/")
        })
        .catch((error) => {
          this.$toasted.show(
            `${this.$t("Server-Error-Try-Again")} : ${error}`,
            {
              theme: "outline",
              position: "top-right",
              type: "error",
              duration: 3500
            }
          )
          console.error(error)
          this.isEventDeleting = false
        })
    },
    submitEvent() {
      const valid = this.validEvent(this.newEvent)
      if (valid) {
        this.isEventUpdating = true
        const start = this.getDatetime(this.newEvent.start)
        const end = this.getDatetime(this.newEvent.end)
        const finnalEvent = {
          title: this.newEvent.title,
          description: this.newEvent.description,
          start: start.getTime(),
          duration: end - start,
          hosts: this.currUser["_id"] ? [this.currUser["_id"]] : [],
          type: "public",
          image: this.newEvent.image,
          location: this.newEvent.location,
          password: this.newEvent.password,
          where: this.newEvent.where
        }
        console.log("finnalEvent::", finnalEvent)
        this.$store
          .dispatch(UPDATE_EVENT, {
            id: this.currEvent["_id"],
            event: finnalEvent
          })
          .then(() => {
            this.$router.push(`/events/${this.currEvent["_id"]}`)
            this.isEventUpdating = false
          })
          .catch((error) => {
            this.$toasted.show(
              `${this.$t("Server-Error-Try-Again")} : ${error}`,
              {
                theme: "outline",
                position: "top-right",
                type: "error",
                duration: 3500
              }
            )
            console.error(error)
            this.isEventUpdating = false
          })
      }
    },
    loadCoverImage() {
      const file = this.newEvent.imageFile
      const reader = new FileReader()
      reader.onloadend = () => {
        this.newEvent.image = reader.result
      }
      reader.readAsDataURL(file)
    },
    backToEvent() {
      this.$router.push(`/events/${this.$route.params.id}`)
    }
  },
  computed: {
    ...mapGetters([GET_WALLET_USER_NAME]),
    ...mapActions([
      UPDATE_EVENT,
      DELETE_EVENT,
      FETCH_WALLET_USER,
      FETCH_EVENT_BY_ID
    ])
  }
}
</script>
