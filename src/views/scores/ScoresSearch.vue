<script setup lang="ts">
import { ref, nextTick, watch } from "vue"
import BaseCard from "@/components/BaseCard.vue"
import ScoresSearchTable from "@/views/scores/ScoreSearchTable.vue"
import ConnectWalletFirst from "@/components/ConnectWalletFirst.vue"
import DotLoader from 'vue-spinner/src/DotLoader.vue'
import "vue-activity-calendar/style.css"
import { useScoreStore } from "@/stores/score"
import { useI18n } from "vue-i18n"
import { useBudgetStore } from "@/stores/budget"
import { useUserStore } from "@/stores/user"
import EthersService from "@/services/ethers.service"
import type { QuickUser } from "@/types/user"

const budgetStore = useBudgetStore()
const userStore = useUserStore()

const registerByUsername = ref(false)
const registerByWallet = ref(false)
const selectUsername = ref(undefined as string | undefined)
const selectWallet = ref("")

const { t, n } = useI18n()

const statuses = ref([
  "Reviewing",
  "Rejected",
  "Registered",
  "Onchained"
])

const statusesStr = ref([
  t("Reviewing"),
  t("Rejected"),
  t("Registered"),
  t("Onchained")
])
const searchOptions = ref([
  t("Score-Budget-Source"),
  t("Score-Register-Applicant"),
  t("Score-Beneficiary"),
  t("Score-Status")
])
const emptyUser = {
  _id: -1,
  wallet: "",
  nickname: ""
} as QuickUser

const searchUser = ref({
  wallet: "",
  user: JSON.parse(JSON.stringify(emptyUser))
})
const searchStatus = ref(undefined as string | undefined)
const searchBudget = ref(undefined as string | undefined)
const isSearching = ref(false)
const scoreStore = useScoreStore()
const searchOption = ref("")
const budgetSubjects = ref([] as Array<string>)
const season = ref(2)

async function setSearchOption() {
  if (searchOption.value === t("Score-Budget-Source")) {
    await budgetStore.fetchBudgetSubjects(`${season.value}`)
    budgetStore.subjects.forEach((budget) => {
      budgetSubjects.value.push(t(budget.subject))
    })
  } else if (searchOption.value === t("Score-Register-Applicant") || searchOption.value === t("Score-Beneficiary")) {
    if (userStore.quickList.length === 0) {
      userStore.fetchUserQuickList()
    }
  }
}

const startSearch = ref(false)
const searchTotal = ref(-1)

async function submitSearch() {
  startSearch.value = true
  isSearching.value = true
  searchTotal.value = -1
  let query = { filter: "none", condition: "none" }
  if (searchOption.value === t("Score-Budget-Source")) {
    query.filter = "budget"
    const budget = budgetStore.subjects.find((s) => t(s.subject) === searchBudget.value)
    query.condition = `${budget ? budget.subject : ""}`
  } else if (searchOption.value === t("Score-Register-Applicant")) {
    query.filter = "creator"
    query.condition = `${searchUser.value?.user ? searchUser.value.user._id : ""}`
  } else if (searchOption.value === t("Score-Beneficiary")) {
    query.filter = "beneficiary"
    query.condition = `${searchUser.value?.user ? searchUser.value.user._id : ""}`
  } else if (searchOption.value === t("Score-Status")) {
    query.filter = "status"
    const select = statuses.value[statusesStr.value.findIndex((s) => s === searchStatus.value)]
    query.condition = `${select ? select : ""}`
  }
  const scores = await scoreStore.searchScores({ query, offset: 0, limit: 100000 })
  searchTotal.value = scores.length

  await nextTick()
  isSearching.value = false
}

watch(selectWallet, (newVal, oldVal) => {
  console.log('isAddr:', EthersService.isAddress(newVal))
  if (newVal && userStore.quickList.length > 0) {
    if (EthersService.isAddress(newVal)) {
      const wallet = newVal.toLowerCase() ? newVal.toLowerCase() : ""
      if (selectUsername.value === "") {
        registerByWallet.value = true
      }
      const user = userStore.quickList.find((user) => user.wallet === wallet)
      if (user && user.wallet) {
        searchUser.value.user = user
        searchUser.value.wallet = wallet
        selectUsername.value = user.username
      } else {
        searchUser.value.user = JSON.parse(JSON.stringify(emptyUser))
        searchUser.value.wallet = wallet
        selectUsername.value = wallet
      }
    } else {
      registerByWallet.value = false
      searchUser.value.user = JSON.parse(JSON.stringify(emptyUser))
      searchUser.value.wallet = ""
      selectWallet.value = ""
      selectUsername.value = ""
    }
  } else {
    if (oldVal ? oldVal?.length ? oldVal.length > 0 : false : false) {
      selectUsername.value = ""
    }
    registerByWallet.value = false
    searchUser.value.user = JSON.parse(JSON.stringify(emptyUser))
    searchUser.value.wallet = ""
    selectWallet.value = ""
  }
}, { deep: true })

watch(selectUsername, (newVal, oldVal) => {
  const isAddr = EthersService.isAddress(selectWallet.value)
  if (((newVal && newVal?.length > 2) || (newVal === null && oldVal ? oldVal?.length ? oldVal.length > 0 : false : false)) &&
    (selectWallet.value === '' || isAddr)) {
    const user = userStore.quickList.find((user) => user.username === newVal)
    if (user && user.wallet) {
      if (!isAddr && !registerByWallet.value) {
        registerByUsername.value = true
      }
      searchUser.value.user = user
      searchUser.value.wallet = user.wallet
      selectWallet.value = user.wallet
    } else {
      registerByUsername.value = false
      searchUser.value.user = JSON.parse(JSON.stringify(emptyUser))
      searchUser.value.wallet = ""
      selectWallet.value = ""
    }
  } else if (!isAddr) {
    registerByUsername.value = false
    searchUser.value.user = JSON.parse(JSON.stringify(emptyUser))
    searchUser.value.wallet = ""
    selectWallet.value = ""
  }
}, { deep: true })


</script>

<template>
  <ConnectWalletFirst v-if="!EthersService.isAddress(EthersService.walletAddress())" />
  <v-row v-else>
    <v-col col="12" sm="12" lg="12">
      <v-row>
        <v-col cols="12" sm="12" lg="12">
          <BaseCard :heading="$t('Score-Search')">
            <v-row>
              <v-col cols="12" sm="8" md="6" lg="4">
                <v-select v-model="searchOption" :items="searchOptions" :label="$t('Please-Select') + ' ...'"
                  density="compact" @update:modelValue="setSearchOption()"></v-select>
              </v-col>
            </v-row>
            <v-row v-if="searchOption === $t('Score-Budget-Source')">
              <v-col cols="12" sm="12" md="8" lg="8">
                <v-autocomplete v-model="searchBudget" :items="budgetSubjects" clearable
                  :label="$t('Please-Select') + ' ...'" density="compact" />
              </v-col>
              <v-col cols="12" sm="12" lg="12">
                <v-btn color="primary" @click="submitSearch()" :disabled="(!searchBudget) || isSearching">
                  <DotLoader :loading="isSearching" color="white" size="12px" />&nbsp;{{ $t("Search") }}
                </v-btn><span class="ml-4" v-if="searchTotal > 0">{{ $t("Search-Total-1") }} {{
                  searchTotal }} {{
    $t("Search-Total-2") }} </span><span class="ml-4" v-if="searchTotal === 0">{{
    $t("No-Results-For-This-Search") }} </span>
              </v-col>
            </v-row>
            <v-row v-else-if="searchOption === $t('Score-Register-Applicant')">
              <v-col cols="8" sm="12" lg="8">
                <v-autocomplete v-model="selectUsername" :items="userStore.usernames" clearable hide-no-data
                  :label="$t('Score-Register-Applicant') + '*'" v-if="!registerByWallet" />
                <v-text-field v-model="selectUsername" density="compact" type="text"
                  :label="$t('Score-Register-Applicant')" readonly
                  v-else-if="selectUsername && (selectUsername.length > 0)" />
                <v-text-field v-model="selectWallet" density="compact" type="text" :label="$t('Score-Register-Applicant')"
                  readonly v-else />
                <v-text-field v-model="selectWallet" :label="$t('Wallet-Address') + '*'" density="compact" type="text"
                  :readonly="registerByUsername"></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" lg="12">
                <v-btn color="primary" @click="submitSearch()"
                  :disabled="!selectUsername || !selectWallet || isSearching">
                  <DotLoader :loading="isSearching" color="white" size="12px" />&nbsp;{{ $t("Search") }}
                </v-btn><span class="ml-4" v-if="searchTotal > 0">{{ $t("Search-Total-1") }} {{ searchTotal }} {{
                  $t("Search-Total-2") }} </span><span class="ml-4" v-if="searchTotal === 0">{{
    $t("No-Results-For-This-Search") }} </span>
              </v-col>
            </v-row>
            <v-row v-else-if="searchOption === $t('Score-Beneficiary')">
              <v-col cols="8" sm="12" lg="8">
                <v-autocomplete v-model="selectUsername" :items="userStore.usernames" clearable hide-no-data
                  :label="$t('Score-Beneficiary') + '*'" v-if="!registerByWallet" />
                <v-text-field v-model="selectUsername" density="compact" type="text" :label="$t('Score-Beneficiary')"
                  readonly v-else-if="selectUsername && (selectUsername.length > 0)" />
                <v-text-field v-model="selectWallet" density="compact" type="text" :label="$t('Score-Beneficiary')"
                  readonly v-else />
                <v-text-field v-model="selectWallet" :label="$t('Wallet-Address') + '*'" density="compact" type="text"
                  :readonly="registerByUsername"></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" lg="12">
                <v-btn color="primary" @click="submitSearch()"
                  :disabled="!selectUsername || !selectWallet || isSearching">
                  <DotLoader :loading="isSearching" color="white" size="12px" />&nbsp;{{ $t("Search") }}
                </v-btn><span class="ml-4" v-if="searchTotal > 0">{{ $t("Search-Total-1") }} {{ searchTotal }} {{
                  $t("Search-Total-2") }} </span><span class="ml-4" v-if="searchTotal === 0">{{
    $t("No-Results-For-This-Search") }} </span>
              </v-col>
            </v-row>
            <v-row v-else-if="searchOption === $t('Score-Status')">
              <v-col cols="8" sm="12" lg="8">
                <v-select v-model="searchStatus" :items="statusesStr" :label="$t('Score-Status')"></v-select>
              </v-col>
              <v-col cols="12" sm="12" lg="12">
                <v-btn color="primary" @click="submitSearch()" :disabled="!searchStatus || isSearching">
                  <DotLoader :loading="isSearching" color="white" size="12px" />&nbsp;{{ $t("Search") }}
                </v-btn><span class="ml-4" v-if="searchTotal > 0">{{ $t("Search-Total-1") }} {{ searchTotal }} {{
                  $t("Search-Total-2") }} </span><span class="ml-4" v-if="searchTotal === 0">{{
    $t("No-Results-For-This-Search") }} </span>
              </v-col>
            </v-row>
          </BaseCard>
        </v-col>
      </v-row>
    </v-col>

    <!-- <v-col cols="12" sm="12" lg="12">
      <v-alert class="mb-3" prominent type="success">
        <template v-slot:text>
          Nunc nonummy metus. Nunc interdum lacus sit amet orci Nullam dictum
          felis eu pede.
        </template>
        <template v-slot:append>
          <v-btn size="small" color="white" variant="text">Take action</v-btn>
        </template>
      </v-alert>
    </v-col> -->
    <v-col cols="12" sm="12" lg="12" v-if="startSearch">
      <ScoresSearchTable />
    </v-col>
  </v-row>
</template>
