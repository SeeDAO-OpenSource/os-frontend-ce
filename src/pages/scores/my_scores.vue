<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid" style="padding-top: 40px">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="mb-2"><b>{{$t("My-Score")}}</b></h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <ul
                    class="nav nav-tabs border-tab mb-0"
                    id="top-tab"
                    role="tablist"
                  >
                    <li class="nav-item" @click="tabContent(' my_scores')">
                      <a
                        class="nav-link"
                        id="top-home-tab"
                        data-toggle="tab"
                        role="tab"
                        aria-controls="top-home"
                        aria-selected="false"
                        :class="[{ active: activeTab == ' my_scores' }]"
                        ><b>{{ $t("My-Score") }}</b></a
                      >
                      <div class="material-border"></div>
                    </li>
                    <li class="nav-item" @click="tabContent('my_registration')">
                      <a
                        class="nav-link"
                        id="profile-top-tab"
                        data-toggle="tab"
                        role="tab"
                        aria-controls="top-profile"
                        aria-selected="false"
                        :class="[{ active: activeTab == 'my_registration' }]"
                        ><b>{{ $t("My-Score-Registration") }}</b></a
                      >
                      <div class="material-border"></div>
                    </li>
                    <li
                      class="nav-item"
                      @click="tabContent('my_project_details')"
                    >
                      <a
                        class="nav-link"
                        id="contact-top-tab"
                        data-toggle="tab"
                        role="tab"
                        aria-controls="top-contact"
                        aria-selected="true"
                        :class="[{ active: activeTab == 'my_project_details' }]"
                        ><b>{{ $t("My-Project-Score-Budget") }}</b>
                        <small>(Comming Soon)</small></a
                      >
                      <div class="material-border"></div>
                    </li>
                  </ul>
                  <div class="tab-content" id="top-tabContent">
                    <div
                      class="tab-pane fade"
                      :class="{ 'show active': activeTab == ' my_scores' }"
                      id="top-home"
                      role="tabpanel"
                      aria-labelledby="top-home-tab"
                    >
                      <div class="row mt-4">
                        <div class="col">
                          <b-row>
                            <b-col xl="6">
                              <b-input-group class="datatable-btn">
                                <b-form-input
                                  v-model="myPoint.filter"
                                  :placeholder="this.$t('Type-to-Search')"
                                ></b-form-input>
                                <b-input-group-append>
                                  <b-button
                                    :disabled="!myPoint.filter"
                                    @click="myPoint.filter = ''"
                                    >{{ this.$t("Clear") }}</b-button
                                  >
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
                                  v-model="myPoint.perPage"
                                  :options="myPoint.pageOptions"
                                ></b-form-select>
                              </b-form-group>
                            </b-col>
                          </b-row>
                          <div class="table-responsive datatable-vue">
                            <b-table
                              show-empty
                              stacked="md"
                              :items="myPoint.records"
                              :fields="myPoint.tablefields"
                              :filter="myPoint.filter"
                              :current-page="myPoint.currentPage"
                              :per-page="myPoint.perPage"
                              :empty-text="
                                this.$t('There-Are-No-Records-Matched')
                              "
                              :empty-filtered-text="
                                this.$t('There-Are-No-Records-Matched')
                              "
                              @filtered="onMyPointFiltered"
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
                                    :variant="
                                      getRecordVariant(data.item.status)
                                    "
                                    >{{ $t(data.item.status) }}</b-badge
                                  >
                                </h5>
                              </template>
                            </b-table>
                          </div>

                          <b-col md="6" class="my-1 p-0">
                            <b-pagination
                              v-model="myPoint.currentPage"
                              :total-rows="myPoint.totalRows"
                              :per-page="myPoint.perPage"
                              class="my-0"
                            ></b-pagination>
                          </b-col>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      :class="{ 'show active': activeTab == 'my_registration' }"
                      id="top-profile"
                      role="tabpanel"
                      aria-labelledby="profile-top-tab"
                    >
                      <div class="row mt-4">
                        <div class="col">
                          <b-row>
                            <b-col xl="6">
                              <b-input-group class="datatable-btn">
                                <b-form-input
                                  v-model="myRegistered.filter"
                                  :placeholder="this.$t('Type-to-Search')"
                                ></b-form-input>
                                <b-input-group-append>
                                  <b-button
                                    :disabled="!myRegistered.filter"
                                    @click="myRegistered.filter = ''"
                                    >{{ this.$t("Clear") }}</b-button
                                  >
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
                                  v-model="myRegistered.perPage"
                                  :options="myRegistered.pageOptions"
                                ></b-form-select>
                              </b-form-group>
                            </b-col>
                          </b-row>
                          <div class="table-responsive datatable-vue">
                            <b-table
                              show-empty
                              stacked="md"
                              :items="myRegistered.records"
                              :fields="myRegistered.tablefields"
                              :filter="myRegistered.filter"
                              :current-page="myRegistered.currentPage"
                              :per-page="myRegistered.perPage"
                              :empty-text="
                                this.$t('There-Are-No-Records-Matched')
                              "
                              :empty-filtered-text="
                                this.$t('There-Are-No-Records-Matched')
                              "
                              @filtered="onMyRegisteredFiltered"
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
                                    :variant="
                                      getRecordVariant(data.item.status)
                                    "
                                    >{{ $t(data.item.status) }}</b-badge
                                  >
                                </h5>
                              </template>
                            </b-table>
                          </div>

                          <b-col md="6" class="my-1 p-0">
                            <b-pagination
                              v-model="myRegistered.currentPage"
                              :total-rows="myRegistered.myPointRecordsTotalRows"
                              :per-page="myRegistered.perPage"
                              class="my-0"
                            ></b-pagination>
                          </b-col>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="top-contact"
                      role="tabpanel"
                      :class="{
                        'show active': activeTab == 'my_project_details'
                      }"
                      aria-labelledby="contact-top-tab"
                    >
                      <p class="mb-0 m-t-20">Comming Soon ...</p>
                    </div>
                  </div>
                </div>
              </div>
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
import EthersService from "../../services/ether.service"
import { mapGetters, mapActions } from "vuex"
import { FETCH_WALLET_USER } from "@/store/modules/user"
import { QUERY_POINT_RECORDS, FETCH_FULL_POINT_RECORD } from "@/store/modules/score"

export default {
  components:{
    PointRecord
  },
  data() {
    return {
      selectedRecord: {},
      user: null,
      activeTab: " my_scores",
      myPoint: {
        filter: null,
        totalRows: 1,
        currentPage: 1,
        perPage: 10,
        pageOptions: [5, 10, 15],
        records: [],
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
        ]
      },
      myRegistered: {
        filter: null,
        totalRows: 1,
        currentPage: 1,
        perPage: 10,
        pageOptions: [5, 10, 15],
        records: [],
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
        ]
      }
    }
  },
  computed: {
    ...mapGetters([]),
    ...mapActions([QUERY_POINT_RECORDS, FETCH_FULL_POINT_RECORD, FETCH_WALLET_USER])
  },
  mounted() {
    this.$store.dispatch(FETCH_WALLET_USER).then((user) => {
      this.user = user
      this.$store
        .dispatch(QUERY_POINT_RECORDS, {
          query: {
            filter: "beneficiary",
            condition: this.user["_id"]
          },
          offset: 0,
          limit: 100000
        })
        .then((records) => {
          this.myPoint.records = records
          this.myPoint.totalRows = records.length
          this.$store
            .dispatch(QUERY_POINT_RECORDS, {
              query: {
                filter: "creator",
                condition: this.user["_id"]
              },
              offset: 0,
              limit: 100000
            })
            .then((records) => {
              this.myRegistered.records = records
              this.myRegistered.totalRows = records.length
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
    getRecordVariant(status) {
      if (status === "Reviewing") return "warning"
      else if (status === "Rejected") return "danger"
      else if (status === "Registered") return "info"
      else if (status === "Onchained") return "success"
      else return "light"
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
    onMyPointFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.myPoint.totalRows = filteredItems.length
      this.myPoint.currentPage = 1
    },
    onMyRegisteredFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.myRegistered.totalRows = filteredItems.length
      this.myRegistered.currentPage = 1
    },
    tabContent(val) {
      this.activeTab = val
    }
  }
}
</script>
