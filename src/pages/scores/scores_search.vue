<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid" style="padding-top: 40px">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="mb-2">
                <b>{{ $t("Score-Search") }}</b>
              </h5>
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-12 mb-2 mt-2">
                  <div class="col-form-label">{{ $t("Filters") }}</div>
                  <multiselect
                    v-model="searchFilter"
                    :options="searchOptions"
                    :custom-label="searchLabel"
                    :searchable="false"
                    :close-on-select="true"
                    :show-labels="false"
                    @select="afterSelectFilter"
                    :placeholder="this.$t('Please-Select') + ' ...'"
                  ></multiselect>
                </div>
              </div>
              <div class="row">
                <form
                  class="form theme-form col-6"
                  @submit.prevent="emptySubmit"
                >
                  <div
                    class="form-group"
                    v-if="searchFilter && searchFilter.code === 'budget'"
                  >
                    <div class="col-form-label">
                      {{ $t("Score-Budget-Source") }}
                    </div>
                    <b-form-input
                      type="text"
                      v-model="searchCondition"
                      @keydown.enter="submitSearch"
                      :placeholder="this.$t('Keyword') + ' ...'"
                    ></b-form-input>
                  </div>
                  <div
                    class="form-group"
                    v-else-if="searchFilter && searchFilter.code === 'creator'"
                  >
                    <div class="col-form-label">
                      {{ $t("Score-Register-Applicant") }}
                    </div>
                    <vue-bootstrap-typeahead
                      v-model="searchUser"
                      :minMatchingChars="1"
                      inputClass="typeahead"
                      :data="usernames"
                      @input="userCheck()"
                      @hit="userSelected()"
                      :disabled="userLocked"
                      :placeholder="this.$t('Nickname') + '...'"
                      v-if="!userLocked"
                    />
                    <b-form-input
                      v-if="userLocked"
                      type="text"
                      v-model="searchUser"
                      disabled
                    ></b-form-input>
                    <div class="col-form-label">
                      {{ $t("Wallet-Address") }}
                    </div>
                    <b-form-input
                      type="text"
                      v-model="searchCondition"
                      placeholder="0x..."
                      @blur="walletAddressCheck()"
                      :disabled="walletLocked"
                    ></b-form-input>
                  </div>
                  <div
                    class="form-group"
                    v-else-if="searchFilter && searchFilter.code === 'datetime'"
                  >
                    <div class="col-form-label">
                      {{ $t("Event-Date") }}
                    </div>
                    <b-form-input
                      type="date"
                      v-model="searchCondition"
                      :max="todayDate"
                    ></b-form-input>
                  </div>
                  <div
                    class="form-group"
                    v-else-if="
                      searchFilter && searchFilter.code === 'beneficiary'
                    "
                  >
                    <div class="col-form-label">
                      {{ $t("Score-Beneficiary") }}
                    </div>
                    <vue-bootstrap-typeahead
                      v-model="searchUser"
                      :minMatchingChars="1"
                      inputClass="typeahead"
                      :data="usernames"
                      @input="userCheck()"
                      @hit="userSelected()"
                      :disabled="userLocked"
                      :placeholder="this.$t('Nickname') + '...'"
                      v-if="!userLocked"
                    />
                    <b-form-input
                      v-if="userLocked"
                      type="text"
                      v-model="searchUser"
                      disabled
                    ></b-form-input>
                    <div class="col-form-label">
                      {{ $t("Wallet-Address") }}
                    </div>
                    <b-form-input
                      type="text"
                      v-model="searchCondition"
                      placeholder="0x..."
                      @blur="walletAddressCheck()"
                      :disabled="walletLocked"
                    ></b-form-input>
                  </div>
                  <div
                    class="form-group"
                    v-else-if="
                      searchFilter && searchFilter.code === 'value_claim'
                    "
                  >
                    <div class="col-form-label">
                      {{ $t("Score") }}
                    </div>
                    <b-input-group append="$ SCR">
                      <b-form-input
                        class="touchspin"
                        type="number"
                        v-model="searchCondition"
                        min="0"
                        max="12500000"
                        @blur="scrValueCheck()"
                        step="1"
                      ></b-form-input>
                    </b-input-group>
                  </div>

                  <div
                    class="form-group"
                    v-else-if="searchFilter && searchFilter.code === 'status'"
                  >
                    <div class="col-form-label">
                      {{ $t("Score-Status") }}
                    </div>
                    <multiselect
                      v-model="searchCondition"
                      :options="scoreStatusOptions"
                      :custom-label="searchLabel"
                      :searchable="false"
                      :close-on-select="true"
                      :show-labels="false"
                      :placeholder="this.$t('Please-Select') + ' ...'"
                    ></multiselect>
                  </div>
                  <div class="form-group" v-if="searchFilter !== ''">
                    <b-button
                      size="md"
                      variant="primary"
                      @click="submitSearch"
                      >{{ this.$t("Search") }}</b-button
                    >
                  </div>
                </form>
              </div>
            </div>

            <div class="card-body">
              <b-row>
                <b-col xl="6">
                  <b-input-group class="datatable-btn">
                    <b-form-input
                      v-model="filter"
                      :placeholder="this.$t('Type-to-Search')"
                    ></b-form-input>
                    <b-input-group-append>
                      <b-button :disabled="!filter" @click="filter = ''">{{
                        this.$t("Clear")
                      }}</b-button>
                    </b-input-group-append>
                  </b-input-group>
                </b-col>

                <b-col xl="6">
                  <b-form-group
                    label-cols="2"
                    :label="this.$t('Per-Page')"
                    class="mb-0 datatable-select"
                  >
                    <b-form-select
                      v-model="perPage"
                      :options="pageOptions"
                    ></b-form-select>
                  </b-form-group>
                </b-col>
              </b-row>
              <div class="table-responsive datatable-vue">
                <b-table
                  show-empty
                  stacked="md"
                  :items="searchRecords"
                  :fields="tablefields"
                  :filter="filter"
                  :current-page="currentPage"
                  :per-page="perPage"
                  :empty-text="this.$t('There-Are-No-Records-Matched')"
                  :empty-filtered-text="this.$t('There-Are-No-Records-Matched')"
                  @filtered="onFiltered"
                >
                  <template #cell(budget)="data">
                    <p>
                      <a href="#" @click="openPointRecord(data.item)">{{
                        $t(data.item.budget.subject)
                      }}</a>
                    </p>
                  </template>
                  <template #cell(beneficiary)="data">
                    <p>{{ getUserName(data.item.beneficiary) }}</p>
                  </template>
                  <template #cell(creator)="data">
                    <p>{{ getUserName(data.item.creator) }}</p>
                  </template>
                  <template #cell(datetime)="data">
                    <p>{{ getDateStr(data.item.datetime) }}</p>
                  </template>
                  <template #cell(status)="data">
                    <h5>
                      <b-badge
                        pill
                        :variant="getRecordVariant(data.item.status)"
                        >{{ $t(data.item.status) }}</b-badge
                      >
                    </h5>
                  </template>
                </b-table>
              </div>

              <b-col md="6" class="my-1 p-0">
                <b-pagination
                  v-model="currentPage"
                  :total-rows="totalRows"
                  :per-page="perPage"
                  class="my-0"
                ></b-pagination>
              </b-col>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Container-fluid Ends-->
    <Bot
      :title="$t('Score-Search')"
      :data="searchRecords"
      :user="user"
      path="/scores/search"
      v-if="
        searchRecords !== [] &&
        user !== null &&
        user !== undefined &&
        user.wallet !== undefined
      "
    />
    <PointRecord :recordDetails="selectedRecord" />
  </div>
</template>

<script>
import Bot from "../../components/bot/main.vue"
import PointRecord from "../../components/modals/pointRecord.vue"
import VueBootstrapTypeahead from "vue-bootstrap-typeahead"
import Multiselect from "vue-multiselect"
import EthersService from "../../services/ether.service"
import { mapGetters, mapActions } from "vuex"
import { FETCH_USER_QUICK_LIST, FETCH_WALLET_USER } from "@/store/modules/user"

// import {
//   FETCH_USER_QUICK_LIST,
//   GET_USERS_NAME,
//   FETCH_WALLET_USER
// } from "@/store/modules/user"
import {
  FETCH_ALL_POINT_RECORDS,
  QUERY_POINT_RECORDS,
  FETCH_FULL_POINT_RECORD
} from "@/store/modules/score"

export default {
  components: {
    VueBootstrapTypeahead,
    Multiselect,
    PointRecord,
    Bot
  },
  data() {
    return {
      selectedRecord: {},
      todayDate: "2099-12-31",
      searchUser: "",
      searchCondition: "",
      searchFilter: "",
      scoreStatusOptions: [
        { code: "Reviewing", name: this.$t("Reviewing") },
        { code: "Rejected", name: this.$t("Rejected") },
        { code: "Registered", name: this.$t("Registered") },
        { code: "Onchained", name: this.$t("Onchained") }
      ],
      searchOptions: [
        { code: "budget", name: this.$t("Score-Budget-Source") },
        { code: "creator", name: this.$t("Score-Register-Applicant") },
        { code: "beneficiary", name: this.$t("Score-Beneficiary") },
        // { code: "datetime", name: this.$t("Event-Date") },
        // { code: "value_claim", name: this.$t("Score") },
        { code: "status", name: this.$t("Score-Status") }
      ],
      searchRecords: [],
      tablefields: [
        {
          key: "budget",
          label: this.$t("Score-Budget-Source"),
          sortable: true
        },
        {
          key: "creator",
          label: this.$t("Score-Register-Applicant"),
          sortable: true
        },
        { key: "datetime", label: this.$t("Event-Date"), sortable: true },

        {
          key: "beneficiary",
          label: this.$t("Score-Beneficiary"),
          sortable: true
        },

        { key: "value_claim", label: this.$t("Score"), sortable: true },
        { key: "status", label: this.$t("Score-Status"), sortable: true }
      ],
      user: null,
      users: [],
      usernames: [],
      walletLocked: false,
      userLocked: false,
      items: [
        {
          name: "Tiger Nixon",
          position: "System Architect",
          office: "Edinburgh",
          age: 61,
          startdate: "2011/04/25",
          salary: "$320,800"
        }
      ],
      filter: null,
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100]
    }
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.tablefields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key }
        })
    },
    ...mapGetters([]),
    ...mapActions([
      FETCH_ALL_POINT_RECORDS,
      FETCH_USER_QUICK_LIST,
      FETCH_FULL_POINT_RECORD,
      FETCH_WALLET_USER
    ])
  },
  mounted() {
    this.todayDate = this.getTodayDate()
    this.$store
      .dispatch(FETCH_ALL_POINT_RECORDS, { offset: 0, limit: 101 })
      .then((records) => {
        this.searchRecords = records
      })

    this.$store.dispatch(FETCH_WALLET_USER).then((user) => {
      this.user = user
    })
    this.$store.dispatch(FETCH_USER_QUICK_LIST).then((users) => {
      this.usernames = this.$store.getters.getUsersName
      this.users = users
    })

    // Set the initial number of items
    this.totalRows = this.items.length
  },
  methods: {
    openPointRecord(record) {
      this.$store
        .dispatch(FETCH_FULL_POINT_RECORD, record["_id"])
        .then((fullRecord) => {
          this.selectedRecord = fullRecord
          this.$bvModal.show("pointRecord")
        })
    },
    getTodayDate() {
      const now = new Date()
      return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
        2,
        "0"
      )}-${String(now.getDate()).padStart(2, "0")}`
    },
    emptySubmit() {},
    scrValueCheck() {
      this.searchCondition = Math.max(
        0.0,
        Math.min(this.searchCondition, 999999999.9)
      )
    },
    submitSearch() {
      const filter = this.searchFilter.code
      let query = { filter }
      if (filter === "creator" || filter === "beneficiary") {
        const user = this.users.find(
          (user) => user.wallet === this.searchCondition
        )
        query["condition"] = user["_id"]
      } else if (filter === "status") {
        query["condition"] = this.searchCondition.code
      } else {
        query["condition"] = this.searchCondition
      }
      console.log("query::", query)
      this.$store
        .dispatch(QUERY_POINT_RECORDS, { query, offset: 0, limit: 100000 })
        .then((records) => {
          this.searchRecords = records
        })
    },
    walletAddressCheck() {
      this.searchCondition = this.searchCondition.toLocaleLowerCase()
      const user = this.users.find((u) => u.wallet === this.searchCondition)
      if (user && user.username) {
        this.searchUser = user.username
        this.userLocked = true
      } else if (EthersService.isAddress(this.searchCondition)) {
        this.userLocked = true
        this.searchUser = EthersService.shortWalletAddress(this.searchCondition)
      } else {
        this.userLocked = false
        this.searchUser = ""
      }
    },
    userCheck() {
      const user = this.users.find((u) => u.username === this.searchUser)
      if (user && user.wallet) {
        this.walletLocked = true
        this.searchCondition = user.wallet
      } else {
        if (this.walletLocked) {
          this.searchCondition = ""
          this.walletLocked = false
        }
      }
    },
    userSelected() {
      const user = this.users.find((u) => u.username === this.searchUser)
      if (user && user.wallet) {
        this.walletLocked = true
        this.searchCondition = user.wallet
      } else {
        this.walletLocked = false
      }
    },
    afterSelectFilter() {
      this.searchCondition = ""
      this.searchUser = ""
      if (this.searchFilter.code === "datetime") {
        this.searchCondition = this.todayDate
      }
    },
    searchLabel({ name }) {
      return name
    },
    getDateStr(datetime) {
      const dt = new Date(datetime)
      return `${dt.getFullYear()}/${dt.getMonth() + 1}/${dt.getDate()}`
    },
    getUserName(user) {
      if (!user || !user.wallet) {
        return ""
      }
      const shorts = EthersService.shortWalletAddress(user.wallet)
      if (user && user.nickname) {
        return `${user.nickname} (${shorts})`
      } else {
        return shorts
      }
    },
    getRecordVariant(status) {
      if (status === "Reviewing") return "warning"
      else if (status === "Rejected") return "danger"
      else if (status === "Registered") return "info"
      else if (status === "Onchained") return "success"
      else return "light"
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  }
}
</script>
