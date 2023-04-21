<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid" style="padding-top: 40px">
      <div class="row">
        <div class="col-sm-8">
          <div class="card">
            <div class="card-header">
              <h5>
                <b>{{ $t("Score-Registration") }}</b>
              </h5>
            </div>
            <form class="form theme-form">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <label class="col-sm-3 col-form-label"
                        >{{ $t("Score-Beneficiary") }}
                        <font color="red">*</font></label
                      >
                      <div class="col-sm-12" v-if="!beneficiaryLocked">
                        <vue-bootstrap-typeahead
                          v-model="newPointRecord.beneficiary"
                          :minMatchingChars="1"
                          inputClass="typeahead"
                          :data="usernames"
                          @input="beneficiaryCheck()"
                          @hit="beneficiarySelected()"
                          :placeholder="this.$t('Nickname') + '...'"
                        />
                      </div>
                      <div class="col-sm-12" v-else>
                        <b-form-input
                          :placeholder="this.$t('Nickname') + '...'"
                          v-model="newPointRecord.beneficiary"
                          disabled
                        ></b-form-input>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="col-sm-3 col-form-label"
                        >{{ $t("Wallet-Address") }}
                        <font color="red">*</font></label
                      >
                      <div class="col-sm-12">
                        <b-form-input
                          type="text"
                          placeholder="0x..."
                          v-model="newPointRecord.wallet"
                          @blur="walletAddressCheck()"
                          :disabled="walletLocked"
                        ></b-form-input>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="col-sm-3 col-form-label"
                        >{{ $t("Score-Budget-Source") }}
                        <font color="red">*</font></label
                      >
                      <div class="col-sm-12">
                        <vue-bootstrap-typeahead
                          v-model="newPointRecord.budget"
                          :minMatchingChars="1"
                          inputClass="typeahead"
                          :data="budgetsSubject"
                          @input="budgetCheck()"
                          :placeholder="
                            this.$t('SIP') +
                            ', ' +
                            this.$t('P1') +
                            ', ' +
                            this.$t('Guilds') +
                            ', ' +
                            this.$t('City-Hall') +
                            ' ...'
                          "
                        />
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="col-sm-3 col-form-label">{{
                        $t("Score-Register-Event")
                      }}</label>
                      <div class="col-sm-12">
                        <b-form-input v-model="newPointRecord.event" />
                      </div>
                    </div>

                    <!-- <div class="form-group">
                      <label class="col-sm-3 col-form-label">{{
                        $t("Score-Register-Applicant")
                      }}</label>
                      <div class="col-sm-12">
                        <b-form-input
                          v-model="newPointRecord.creator"
                          disabled
                        />
                      </div>
                    </div> -->

                    <div class="form-group">
                      <label class="col-sm-3 col-form-label">{{
                        $t("Event-Date")
                      }}</label>
                      <div class="col-sm-12">
                        <b-form-input
                          type="date"
                          v-model="newPointRecord.date"
                          :max="todayDate"
                        ></b-form-input>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="col-sm-3 col-form-label">{{
                        $t("Score-Register-Number")
                      }}</label>
                      <div class="col-sm-12">
                        <b-input-group append="$ SCR">
                          <b-form-input
                            class="touchspin"
                            type="number"
                            v-model="newPointRecord.value_claim"
                            min="0"
                            max="12500000"
                            @blur="scrValueCheck()"
                            step="1"
                          ></b-form-input>
                        </b-input-group>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="col-sm-3 col-form-label">{{
                        $t("Score-Register-Details")
                      }}</label>
                      <div class="col-sm-12">
                        <b-form-textarea
                          rows="6"
                          :placeholder="this.$t('Note') + ' ...'"
                        ></b-form-textarea>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="col-sm-3 col-form-label">{{
                        $t("Reference-Links")
                      }}</label>
                      <div class="row col-sm-12">
                        <div class="col-sm-3">
                          <b-form-input
                            type="text"
                            v-model="recordLink1.title"
                            :placeholder="this.$t('Subject') + ' ...'"
                          ></b-form-input>
                        </div>
                        <div class="col-sm-9">
                          <b-form-input
                            type="url"
                            v-model="recordLink1.url"
                            :placeholder="this.$t('URL') + ' ...'"
                          ></b-form-input>
                        </div>
                        <div class="col-sm-3 mt-2">
                          <b-form-input
                            type="text"
                            v-model="recordLink2.title"
                            :placeholder="this.$t('Subject') + ' ...'"
                          ></b-form-input>
                        </div>
                        <div class="col-sm-9 mt-2">
                          <b-form-input
                            type="url"
                            v-model="recordLink2.url"
                            :placeholder="this.$t('URL') + ' ...'"
                          ></b-form-input>
                        </div>
                        <div class="col-sm-3 mt-2">
                          <b-form-input
                            type="text"
                            v-model="recordLink3.title"
                            :placeholder="this.$t('Subject') + ' ...'"
                          ></b-form-input>
                        </div>
                        <div class="col-sm-9 mt-2">
                          <b-form-input
                            type="url"
                            v-model="recordLink3.url"
                            :placeholder="this.$t('URL') + ' ...'"
                          ></b-form-input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card-footer">
                <div class="col-12 text-center">
                  <b-button
                    size="lg"
                    variant="primary"
                    class="mr-1"
                    @click="submitRegstration"
                    >{{ $t("Submit") }}</b-button
                  >
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-header">
              <h5>
                <b>{{ $t("Score-Panel") }}</b>
              </h5>
            </div>
            <form class="form theme-form">
              <div class="row p-3">
                <!-- <div class="col col-md-12 col-lg-6 align-self-center">
                  <CreateEvent
                    :title="$t('Create-Register-Event')"
                    @result="geCreateEventData"
                  />
                </div> -->
                <div class="col-12 text-center">
                  <RegisterBatch
                    :title="$t('Score-Register-Batch')"
                    @result="geRegisterBatchData"
                  />
                </div>
              </div>
            </form>
          </div>

          <div class="card">
            <div class="card-header">
              <h5>
                <b>{{ $t("My-Register-History") }}</b>
              </h5>
            </div>
            <div class="card-body">
              <b-list-group tag="ul" flush>
                <b-list-group-item
                  tag="li"
                  v-for="(record, index) in myRecords"
                  :key="'record-' + index"
                  > <b-badge :variant="getRecordVariant(record.status)">{{ $t(record.status) }}</b-badge><br/>
                  <a href="#" @click="openPointRecord(record)"
                    >{{ $t("Give-To-give") }} {{ record.value_claim }} $SCR
                    {{ $t("Give-To-to") }}
                    {{ getNickName(record.beneficiary) }} ({{
                      String(new Date(record.datetime).getMonth() + 1) +
                      "/" +
                      String(new Date(record.datetime).getDate())
                    }})</a
                  ><br /><small>{{
                    $t(record.budget.subject)
                  }}</small></b-list-group-item
                >
              </b-list-group>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Container-fluid Ends-->
    <PointRecord :recordDetails="selectedRecord" />
  </div>
</template>
<script>
import PointRecord from "../../components/modals/pointRecord.vue"
import VueBootstrapTypeahead from "vue-bootstrap-typeahead"
import Multiselect from "vue-multiselect"
import CreateEvent from "./components/create_event.vue"
import RegisterBatch from "./components/register_batch.vue"

import { mapGetters, mapActions } from "vuex"
import {
  FETCH_USER_QUICK_LIST,
  GET_USERS_NAME,
  FETCH_WALLET_USER
} from "@/store/modules/user"
import {
  REGISTER_SCORE,
  FETCH_SCORE_MY_REGISTERED,
  FETCH_FULL_POINT_RECORD
} from "@/store/modules/score"
import { FETCH_BUDGETS_SUBJECT } from "@/store/modules/budget"
import EthersService from "../../services/ether.service"

export default {
  components: {
    VueBootstrapTypeahead,
    // Multiselect,
    // CreateEvent,
    RegisterBatch,
    PointRecord
  },
  filters: {
    stringify(value) {
      return JSON.stringify(value, null, 2)
    }
  },
  mounted() {
    this.resetPointRecord()
    this.$store.dispatch(FETCH_WALLET_USER).then((creator) => {
      this.user = creator
      this.newPointRecord.creator = this.getCreatorName(creator)
      this.newPointRecord.status = this.singleValue.code
      this.$store
        .dispatch(FETCH_SCORE_MY_REGISTERED, this.user["_id"])
        .then((records) => {
          this.myRecords = records
          console.log("this.myRecords:", this.myRecords)
        })
    })
    this.$store.dispatch(FETCH_USER_QUICK_LIST).then((users) => {
      this.usernames = this.$store.getters.getUsersName
      this.users = users
      this.$store.dispatch(FETCH_BUDGETS_SUBJECT, "2").then((budgets) => {
        this.budgets = []
        this.budgetsSubject = []
        budgets.forEach((budget) => {
          const name = this.$t(budget.subject)
          this.budgets.push({
            name,
            ...budget
          })
          this.budgetsSubject.push(name)
        })
      })
    })
  },
  methods: {
    openPointRecord(record){
      this.$store.dispatch(FETCH_FULL_POINT_RECORD, record["_id"]).then((fullRecord)=>{
        this.selectedRecord = fullRecord
        this.$bvModal.show("pointRecord")
      })
    },
    getRecordVariant(status){
      if(status === "Reviewing") return 'warning';
      else if(status === "Rejected") return 'danger';
      else if(status === "Registered") return 'info';
      else if(status === "Onchained") return 'success';
      else return 'light'
    },
    getNickName(user) {
      if (user && user.nickname) {
        return user.nickname
      } else {
        return EthersService.shortWalletAddress(user.wallet)
      }
    },
    resetPointRecord() {
      this.newPointRecord = JSON.parse(JSON.stringify(this.emptyRecord))
      this.recordLink1 = JSON.parse(JSON.stringify(this.emptyLink))
      this.recordLink2 = JSON.parse(JSON.stringify(this.emptyLink))
      this.recordLink3 = JSON.parse(JSON.stringify(this.emptyLink))
      this.newPointRecord.date = this.getTodayDate()
      this.todayDate = this.getTodayDate()
    },
    validScoreValue(value) {
      if (value <= 0) {
        this.$toasted.show(`${this.$t("Score-Cant-Be-Zero")}`, this.toastError)
        return false
      }
      return true
    },
    validWalletCheck(address) {
      if (address === "" || address === null || address === undefined) {
        this.$toasted.show(
          `${this.$t("Wallet-Address-Cant-Be-Empty")}`,
          this.toastError
        )
        return false
      }
      if (!EthersService.isAddress(address)) {
        this.$toasted.show(
          `${this.$t("Wallet-Address-is-Invalid")} : ${address}`,
          this.toastError
        )
        return false
      }
      return true
    },
    validBudgetCheck(subject) {
      const budget = this.budgets.find((b) => b.name === subject)
      if (!budget) {
        this.$toasted.show(
          `${this.$t("Budget-Source-is-Invalid")}`,
          this.toastError
        )
        return false
      }
      return true
    },
    validLinkCheck(link) {
      if (
        (link.url === "" || !link.url) &&
        (link.title === "" || !link.title)
      ) {
        return false
      }
      if (link.url !== "" && link.url && (link.title === "" || !link.title)) {
        this.$toasted.show(
          `${this.$t("Link-Title-Cant-Be-Empty")}: ${link.url}`,
          this.toastError
        )
        return false
      }
      if (link.title !== "" && link.title && (link.url === "" || !link.url)) {
        this.$toasted.show(
          `${this.$t("Link-URL-Cant-Be-Empty")}: ${link.title}`,
          this.toastError
        )
        return false
      }
      return true
    },
    submitRegstration() {
      if (
        this.validWalletCheck(this.newPointRecord.wallet) &&
        this.validBudgetCheck(this.newPointRecord.budget) &&
        this.validScoreValue(this.newPointRecord.value_claim)
      ) {
        if (this.validLinkCheck(this.recordLink1)) {
          this.newPointRecord.links.push(this.recordLink1)
        }
        if (this.validLinkCheck(this.recordLink2)) {
          this.newPointRecord.links.push(this.recordLink2)
        }
        if (this.validLinkCheck(this.recordLink3)) {
          this.newPointRecord.links.push(this.recordLink3)
        }
        const datetime = this.getDatetimeFromDate(this.newPointRecord.date)
        const budget = this.budgets.find(
          (b) => b.name === this.newPointRecord.budget
        )
        let record = {
          creator: this.user["_id"],
          wallet: this.newPointRecord.wallet,
          notes: this.newPointRecord.notes,
          event: this.newPointRecord.event,
          status: "Reviewing",
          value_claim: this.newPointRecord.value_claim,
          value_fulfilled: 0,
          datetime: datetime.getTime(),
          budget: budget["_id"],
          links: this.newPointRecord.links
        }
        this.$store.dispatch(REGISTER_SCORE, [record]).then(() => {
          window.scrollTo(0, 0)
          this.$toasted.show(`${this.$t("Successfully-Registered")}`, {
            theme: "outline",
            position: "top-right",
            type: "success",
            duration: 2000
          })
          this.resetPointRecord()
          this.$store
            .dispatch(FETCH_SCORE_MY_REGISTERED, this.user["_id"])
            .then((records) => {
              this.myRecords = records
              console.log("this.myRecords:", this.myRecords)
            })
        })
      }
    },
    getDatetimeFromDate(date) {
      const datearr = date.split("-")
      return new Date(datearr[0], Number(datearr[1]) - 1, datearr[2])
    },
    budgetCheck() {
      const budget = this.budgets.find(
        (b) => b.name === this.newPointRecord.budget
      )
      if (budget) {
        this.newPointRecord.budget = budget.name
      } else {
        this.newPointRecord.budget = ""
      }
    },
    scrValueCheck() {
      this.newPointRecord.value_claim = Math.max(
        0.0,
        Math.min(this.newPointRecord.value_claim, 999999999.9)
      )
    },
    getTodayDate() {
      const now = new Date()
      return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
        2,
        "0"
      )}-${String(now.getDate()).padStart(2, "0")}`
    },
    getCreatorName(creator) {
      if (!creator || !creator.wallet) {
        return ""
      }
      const shorts = EthersService.shortWalletAddress(creator.wallet)
      if (creator && creator.nickname) {
        return `${creator.nickname} (${shorts})`
      } else {
        return this.$t("You") + ` (${shorts})`
      }
    },
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      }
      this.options.push(tag)
      this.value.push(tag)
    },
    geCreateEventData(param) {
      // 接收回來的資料
      console.log("geCreateEventData", param)
    },
    geRegisterBatchData(param) {
      // 接收回來的資料
      console.log("geRegisterBatchData", param)
    },
    walletAddressCheck() {
      this.newPointRecord.wallet =
        this.newPointRecord.wallet.toLocaleLowerCase()
      const beneficiary = this.users.find(
        (u) => u.wallet === this.newPointRecord.wallet
      )
      if (beneficiary && beneficiary.username) {
        this.newPointRecord.beneficiary = beneficiary.username
        this.beneficiaryLocked = true
        console.log("beneficiary::", this.newPointRecord.beneficiary)
      } else if(EthersService.isAddress(this.newPointRecord.wallet)) {
        this.beneficiaryLocked = true
        this.newPointRecord.beneficiary = EthersService.shortWalletAddress(this.newPointRecord.wallet)        
      } else {
        this.beneficiaryLocked = false
        this.newPointRecord.beneficiary = ""
      }
    },
    beneficiaryCheck() {
      const beneficiary = this.users.find(
        (u) => u.username === this.newPointRecord.beneficiary
      )
      if (beneficiary && beneficiary.wallet) {
        this.walletLocked = true
        this.newPointRecord.wallet = beneficiary.wallet
      } else {
        if (this.walletLocked) {
          this.newPointRecord.wallet = ""
          this.walletLocked = false
        }
      }
    },
    beneficiarySelected() {
      const beneficiary = this.users.find(
        (u) => u.username === this.newPointRecord.beneficiary
      )
      if (beneficiary && beneficiary.wallet) {
        this.walletLocked = true
        this.newPointRecord.wallet = beneficiary.wallet
      } else {
        this.walletLocked = false
      }
    }
  },
  data() {
    return {
      selectedRecord: {},
      myRecords: [],
      todayDate: "2099-12-31",
      toastError: {
        theme: "outline",
        position: "top-right",
        type: "error",
        duration: 3500
      },
      budgets: [],
      budgetsSubject: [],
      beneficiaryLocked: false,
      walletLocked: false,
      emptyRecord: {
        creator: "",
        beneficiary: "",
        wallet: "",
        notes: "",
        event: "",
        status: "",
        value_claim: 0,
        value_fulfilled: 0,
        date: "",
        budget: "",
        links: []
      },
      newPointRecord: null,
      emptyLink: {
        title: "",
        url: ""
      },
      recordLink1: null,
      recordLink2: null,
      recordLink3: null,
      singleValue: { code: "Registering", name: this.$t("Registering") },
      options: [
        { code: "Submitting", name: this.$t("Submitting") },
        { code: "Reviewing", name: this.$t("Reviewing") },
        { code: "Rejected", name: this.$t("Rejected") },
        { code: "Registered", name: this.$t("Registered") },
        { code: "Onchained", name: this.$t("Onchained") }
      ],
      multiValue: [{ name: "Reviewing", code: "1" }],
      query: "",
      users: [],
      displayUser: false,
      usernames: []
    }
  },
  watch: {},
  computed: {
    ...mapGetters([]),
    ...mapActions([
      REGISTER_SCORE,
      FETCH_SCORE_MY_REGISTERED,
      FETCH_BUDGETS_SUBJECT,
      FETCH_FULL_POINT_RECORD,
      FETCH_WALLET_USER,
      FETCH_USER_QUICK_LIST
    ])
  }
}
</script>
