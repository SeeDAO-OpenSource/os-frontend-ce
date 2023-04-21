<template>
  <div>
    <b-modal
      id="pointRecord"
      centered
      @show="resetModal"
      size="lg"
      class="theme-modal"
      hide-footer
    >
      <template #modal-title>
        <h5 class="mt-1">
          <b>{{ $t("Registered-Score-Record") }}</b>
        </h5>
      </template>
      <template #default>
        <form class="form theme-form">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <h3 class="text-center">{{ $t(getFullRecord.status) }}</h3>
                <b-progress
                  :value="getStatusValue(getFullRecord.status)"
                  striped
                  animated
                  :max="100"
                  :variant="getRecordVariant(getFullRecord.status)"
                  class="ml-5 mr-5"
                ></b-progress>
                <br />
                <hr />
                <br />
                <div class="ml-3">
                  <div class="collection-filter-block">
                    <ul>
                      <li>
                        <div class="media">
                          <feather type="credit-card"></feather>
                          <div class="media-body">
                            <h5>
                              <b>{{ $t("Score-Budget-Source") }}</b>
                            </h5>
                            <span
                              v-if="
                                getFullRecord &&
                                getFullRecord.budget &&
                                getFullRecord.budget.subject
                              "
                            >
                              {{ $t(getFullRecord.budget.subject) }}
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="media">
                          <feather type="user"></feather>
                          <div class="media-body">
                            <h5>
                              <b>{{ $t("Score-Beneficiary") }}</b>
                            </h5>
                            <span
                              v-if="
                                getFullRecord &&
                                getFullRecord.beneficiary &&
                                getFullRecord.beneficiary.nickname !== ''
                              "
                            >
                              {{ getFullRecord.beneficiary.nickname }} <br /></span
                            >
                            <span>{{ getFullRecord.beneficiary.wallet }}</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="media">
                          <feather type="star"></feather>
                          <div class="media-body">
                            <h5>
                              <b>{{ $t("Score") }}</b>
                            </h5>
                            <p>{{ getFullRecord.value_claim }} $SCR</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="media">
                          <feather type="edit"></feather>
                          <div class="media-body">
                            <h5>
                              <b>{{ $t("Score-Register-Applicant") }}</b>
                            </h5>
                            <span
                              v-if="
                                getFullRecord &&
                                getFullRecord.creator &&
                                getFullRecord.creator.nickname !== ''
                              "
                            >
                              {{ getFullRecord.creator.nickname }} <br /></span
                            >
                            <span>{{ getFullRecord.creator.wallet }}</span>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div class="media">
                          <feather type="clock"></feather>
                          <div class="media-body">
                            <h5>
                              <b>{{ $t("Event-Date") }}</b>
                            </h5>
                            <p>{{ getDateStr(getFullRecord.datetime) }}</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="media">
                          <feather type="info"></feather>
                          <div class="media-body">
                            <h5>
                              <b>{{ $t("Score-Register-Event") }}</b>
                            </h5>
                            <p>
                              {{
                                getFullRecord.event
                                  ? getFullRecord.event
                                  : $t("None")
                              }}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="media">
                          <feather type="message-circle"></feather>
                          <div class="media-body">
                            <h5>
                              <b>{{ $t("Score-Register-Details") }}</b>
                            </h5>
                            <p>
                              {{
                                getFullRecord.notes
                                  ? getFullRecord.notes
                                  : $t("None")
                              }}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="media">
                          <feather type="link"></feather>
                          <div
                            class="media-body"
                            v-if="
                              getFullRecord &&
                              getFullRecord.links &&
                              getFullRecord.links.length > 0
                            "
                          >
                            <h5>
                              <b>{{ $t("Related-Link") }}</b>
                            </h5>
                            <div
                              v-for="(link, index) in getFullRecord.links"
                              :key="'link-' + index"
                            >
                              <a :href="link.url" target="_blank">{{
                                link.title
                              }}</a>
                            </div>
                          </div>
                          <div class="media-body" v-else>
                            <h5>
                              <b>{{ $t("Related-Link") }}</b>
                            </h5>
                            <div>
                              <p>{{ $t("None") }}</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </template>

      <template #modal-footer> </template>
    </b-modal>
  </div>
</template>
<script>
// import EtherService from "../../services/ether.service"

// import { mapState } from "vuex"
import { mapGetters, mapActions } from "vuex"
import { GET_FULL_RECORD } from "@/store/modules/score"

export default {
  name: "PointRecord",
  computed: {
    ...mapGetters([GET_FULL_RECORD]),
    ...mapActions([])
  },
  props: ["recordDetails"],
  data() {
    return {}
  },
  mounted() {},
  methods: {
    getDateStr(datetime) {
      const dt = new Date(datetime)
      return `${dt.getFullYear()}/${dt.getMonth() + 1}/${dt.getDate()}`
    },
    getStatusValue(status) {
      if (status === "Reviewing") return 40
      else if (status === "Rejected") return 50
      else if (status === "Registered") return 80
      else if (status === "Onchained") return 100
      else return 0
    },
    getRecordVariant(status) {
      if (status === "Reviewing") return "warning"
      else if (status === "Rejected") return "danger"
      else if (status === "Registered") return "info"
      else if (status === "Onchained") return "success"
      else return "light"
    },
    resetModal() {}
  }
}
</script>
