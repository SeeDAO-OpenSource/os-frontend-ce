<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid" style="padding-top: 40px">
      <div class="row">
        <div class="col-sm-12">
          <px-card>
            <div slot="with-padding">
              <h3>
                <b>{{ $t("Create-Event") }}</b>
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
                      <input class="form-control" type="text" :value="getUserName" disabled />
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
                        >{{ $t("Event-Create") }}</b-button
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

import { mapGetters, mapActions } from "vuex"
import { CREATE_EVENT } from "@/store/modules/event"
import { FETCH_WALLET_USER, GET_WALLET_USER_NAME } from "@/store/modules/user"

export default {
  components: {
    ckeditor: CKEditor.component,
    Datepicker
  },
  data() {
    return {
      currUser: "",
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
      isEventCreating: false,
      editor: ClassicEditor
    }
  },
  mounted() {
    this.$store.dispatch(FETCH_WALLET_USER).then((user)=>{
      this.currUser = user;
      console.log('user::', user)
    })

    if (this.newEvent.start.date === "" && this.newEvent.end.date === "") {
      const now = new Date()
      const nextHour =
        Number(
          now.toLocaleString("en", {
            hour: "2-digit",
            hour12: false,
            timeZone: "Asia/Shanghai"
          })
        ) + 1
      this.newEvent.start.date = now
      this.newEvent.start.time = `${String(nextHour % 24).padStart(2, "0")}:00`
      this.newEvent.end.date = now
      this.newEvent.end.time = `${String((nextHour + 1) % 24).padStart(
        2,
        "0"
      )}:00`
    }
  },
  methods: {
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
    submitEvent() {
      const valid = this.validEvent(this.newEvent)
      if (valid) {
        this.isEventCreating = true
        const start = this.getDatetime(this.newEvent.start)
        const end = this.getDatetime(this.newEvent.end)
        const finnalEvent = {
          title: this.newEvent.title,
          description: this.newEvent.description,
          start: start.getTime(),
          duration: end - start,
          hosts: this.currUser['_id'] ? [this.currUser['_id']] : [],
          type: "public",
          image: this.newEvent.image,
          location: this.newEvent.location,
          password: this.newEvent.password,
          where: this.newEvent.where
        }
        console.log("finnalEvent::", finnalEvent)
        this.$store
          .dispatch(CREATE_EVENT, finnalEvent)
          .then((event) => {
            console.log('event::', event)
            this.isEventCreating = false
            this.$router.push(`/events/${event['_id']}`)
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
            this.isEventCreating = false
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
    }
  },
  computed: {
    ...mapGetters([GET_WALLET_USER_NAME]),
    ...mapActions([CREATE_EVENT, FETCH_WALLET_USER])
  }
}
</script>
