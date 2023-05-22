<script setup lang="ts">
import DotLoader from 'vue-spinner/src/DotLoader.vue'
import ConnectWalletFirst from "@/components/ConnectWalletFirst.vue"
import { ref, watch } from "vue"
import { createFileInput } from "@/services/csv.service"
import { useUserStore } from "@/stores/user"
import EthersService from "@/services/ethers.service"
import { useScoreStore } from "@/stores/score"
import { useBudgetStore } from "@/stores/budget"
import type { ScoreMyRegistered, FullRecord, NewRecord } from "@/types/score"
import DateService from "@/services/date.service"
import FullRecordDialog from './FullRecordDialog.vue'
import { SCORE_FULL_RECORD, useLayoutStore } from '@/stores/layout'
import { useI18n } from "vue-i18n"

const { t } = useI18n()
const layoutStore = useLayoutStore()

const onlyWalletString = ref('No Name')
const userStore = useUserStore()
const scoreStore = useScoreStore()
const budgetStore = useBudgetStore()

const newRecordBeneficiary = ref(undefined as string | undefined)
const newRecordWallet = ref("")
const newRecordBudget = ref(undefined as string | undefined)

const emptyLink = { title: "", url: "" }

const initNewRecord = () => ({
  creator: "",
  beneficiary: "",
  wallet: "",
  notes: "",
  event: "",
  status: "",
  value_claim: 0,
  value_fulfilled: 0,
  date: DateService.getMinMaxString(new Date().getTime()),
  budget: "",
  links: [{ title: "", url: "" }]
})

const newRecord = ref(JSON.parse(JSON.stringify(initNewRecord())))

const season = ref(2)
const registerByBeneficiary = ref(false)
const registerByWallet = ref(false)
const myRegisterRecords = ref([] as ScoreMyRegistered[])
const batchRegisterDialog = ref(false)
const budgetSubjects = ref([] as Array<string>)

const success = ref([] as Array<string>)
const errors = ref([] as Array<string>)
const files = ref([] as any)
const content = ref("" as string)
const uploadRecords = ref([] as Array<NewRecord>)
const recordIndex = ref([] as Array<number>)

function getSubject(budegtId: number) {
  const result = budgetStore.subjects.find((s) => s._id === budegtId)
  if (result && result.subject) {
    return result.subject
  } else {
    return ""
  }
}

function closeBatchRegisterDialog() {
  batchRegisterDialog.value = false
  batchSuccess.value = ""
  isBatchSubmitting.value = false
  newRecordWallet.value = ""
  newRecordBudget.value = undefined
  files.value = []
  content.value = ""
  uploadRecords.value = []
  invalidRecords.value = []
  recordIndex.value = []
}

async function uploadFile() {
  uploadRecords.value = []
  invalidRecords.value = []
  content.value = await createFileInput(files.value[0])
  const lines = content.value.split('\n')
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i]
    if (line) {
      const columns = line.split(',')
      const datestr = columns[2].split('/')
      const budget = budgetStore.subjects.find((s) => t(s.subject) === columns[1])
      const addr = String(columns[0]).toLowerCase()
      const value = Number(columns[3])
      const eventDate = new Date(Number(datestr[0]), Number(datestr[1]) - 1, Number(datestr[2])).getTime()
      if (userStore.walletUser?._id && eventDate <= new Date().getTime() && EthersService.isAddress(addr) && value > 0 && columns.length === 8 && datestr.length === 3 && budget) {
        const link = {
          title: columns[6],
          url: columns[7]
        }

        const record = {
          creator: userStore.walletUser._id,
          wallet: addr,
          notes: columns[5],
          event: columns[4],
          value_claim: value,
          value_fulfilled: 0,
          datetime: eventDate,
          budget: budget._id,
          status: "Registered", // "Reviewing",
          links: [] as Array<{ title: string, url: string }>
        }
        if (link.title !== "_" && link.url !== "_" && link.title.length > 0 && link.url.length > 0) {
          record.links.push(link)
        }
        recordIndex.value.push(i)
        uploadRecords.value.push(record)
      } else {
        let error = `${t('Error')} in #${i}: `
        if (!EthersService.isAddress(addr)) error = error + t('Wallet-Address-is-Invalid') + ","
        if (!budget) error = error + t('Budget-Source-Not-Found') + ","
        if (columns.length !== 8) error = error + t('Wrong-Column-Number') + ","
        if (value <= 0) error = error + t("Score-Cant-Be-Zero") + ","
        if (datestr.length !== 3 || eventDate > new Date().getTime()) error = error + t("Event-Date-Is-Invalid") + ","
        invalidRecords.value.push(error.slice(0, error.length - 1))
      }
    }
  }
}

function validWalletCheck() {
  if (EthersService.isAddress(newRecord.value.wallet)) {
    return true
  } else if (newRecord.value.wallet.length > 0) {
    errors.value.push("Wallet-Address-is-Invalid")
  } else {
    errors.value.push("Wallet-Address-Cant-Be-Empty")
  }
  return false
}

function validBudgetCheck() {
  if (Number(newRecord.value.budget._id) > 0) {
    return true
  } else {
    errors.value.push("Budget-Source-Cant-Be-Empty")
  }
  return false
}

function validScoreValueCheck() {
  if (newRecord.value.value_claim > 0) {
    return true
  } else {
    errors.value.push("Score-Cant-Be-Zero")
  }
  return false
}

function validLinkCheck() {
  if (newRecord.value.links.length === 0) {
    return true
  } else {
    for (var i = 0; i < newRecord.value.links.length; i++) {
      const link = newRecord.value.links[i]
      if (link.title.length > 0 && link.url.length === 0) {
        errors.value.push("Link-URL-Cant-Be-Empty")
        return false
      } else if (link.title.length === 0 && link.url.length > 0) {
        errors.value.push("Link-Title-Cant-Be-Empty")
        return false
      }
    }
    return true
  }
}
const isBatchSubmitting = ref(false)
const batchSuccess = ref("" as string)
async function submitBatchRegistration() {
  isBatchSubmitting.value = true
  const chunkSize = 10
  const delay = (ms: number) => new Promise(res => setTimeout(res, ms))
  for (let i = 0; i < uploadRecords.value.length; i += chunkSize) {
    try {
      const chunk = uploadRecords.value.slice(i, i + chunkSize)
      await scoreStore.registerScore(chunk)
      console.log(`Uploaded ${i + chunkSize}/${uploadRecords.value.length} records`)
      await delay(1000)
    } catch (error) {
      console.error(error)
    }
  }
  await fetchScoreMyRegistered()
  isBatchSubmitting.value = false
  batchSuccess.value = t("Successfully-Registered")
  setTimeout(() => {
    batchSuccess.value = ""
  }, 10000)
}

async function submitRegistration() {
  errors.value = []
  if (validWalletCheck() && validBudgetCheck() && validScoreValueCheck() && validLinkCheck()) {
    isSubmitting.value = true
    let record = {
      creator: newRecord.value.creator["_id"],
      wallet: newRecord.value.wallet,
      notes: newRecord.value.notes,
      event: newRecord.value.event,
      status: "Reviewing",
      value_claim: newRecord.value.value_claim,
      value_fulfilled: 0,
      datetime: DateService.getDatetimeFromMinMaxString(newRecord.value.date),
      budget: newRecord.value.budget["_id"],
      links: newRecord.value.links
    }
    const results = await scoreStore.registerScore([record])
    await fetchScoreMyRegistered()
    newRecord.value = JSON.parse(JSON.stringify(initNewRecord()))
    newRecordBeneficiary.value = undefined
    newRecordBudget.value = ""
    newRecordScoreNumber.value = 0
    newRecordWallet.value = ""
    window.scrollTo(0, 0)
    isSubmitting.value = false
    success.value.push("Successfully-Registered")
    setTimeout(() => {
      success.value = []
    }, 10000)


  } else {
    if (errors.value.length > 0) {
      window.scrollTo(0, 0)
    } else {
      errors.value.push("System-Error-Please-Try-Again")
    }
  }
}

async function fetchScoreMyRegistered() {
  const user = await userStore.fetchWalletUser(`${EthersService.walletAddress()}`)
  newRecord.value.creator = user
  myRegisterRecords.value = (await scoreStore.fetchScoreMyRegistered(`${user._id}`)).slice(0, 5)
}

async function fetchBudgetSubjects() {
  await budgetStore.fetchBudgetSubjects(`${season.value}`)
  budgetSubjects.value = budgetStore.subjects.map((s) => t(s.subject))
  newRecordBudget.value = undefined
}

async function fetchUserQuickList() {
  await userStore.fetchUserQuickList()
}

function getRecordVariant(status: string): string {
  if (status === "Reviewing") return 'warning'
  else if (status === "Rejected") return 'danger'
  else if (status === "Registered") return 'info'
  else if (status === "Onchained") return 'success'
  else return 'light'
}

const isSubmitting = ref(false)
async function openPointRecord(record: ScoreMyRegistered) {
  layoutStore.setDialogVisible(SCORE_FULL_RECORD, true)
  layoutStore.setDialogLoading(SCORE_FULL_RECORD, true)
  await scoreStore.fetchFullPointRecord(`${record["_id"]}`)
  layoutStore.setDialogData(SCORE_FULL_RECORD, scoreStore.fullRecord)
  layoutStore.setDialogLoading(SCORE_FULL_RECORD, false)
}

function moreLink() {
  newRecord.value.links.push(JSON.parse(JSON.stringify(emptyLink)))
}

function removeLink(idx: number) {
  newRecord.value.links.splice(idx, 1)
}

const title = ref([
  "Wallet-Address",
  "Score-Budget-Source",
  "Event-Date",
  "Score-Register-Number",
  "Score-Register-Event",
  "Score-Register-Details",
  "Link-Subject",
  "Link-Url"
])

const batchTitle = ref([
  "Wallet-Address",
  "Score-Budget-Source",
  "Event-Date",
  "Score-Register-Number",
  "Score-Register-Event",
  "Score-Register-Details",
  "Reference-Links"
])

const titleStr = ref([] as Array<string>)

title.value.forEach((field) => {
  titleStr.value.push(t(field))
})

const csvdata = ref([
  ["0x65d5b68A7878A987e7A19826A7f9Aa6F5F92e10F", "SIP-73：SeeDAO ChatGPT 赚钱比赛！", "2023/5/1", "1200", "ChatGPT赚钱大赛", "起始资金", "SIP-73：SeeDAO ChatGPT 赚钱比赛！ ", "https://forum.seedao.xyz/thread/sip-73-seedao-chatgpt-43052"],
  ["0x42b81011a367d3c7f4e4b570fadd51209c93f287", "公共教育 & 新手村", "2023/5/3", "3000", "新手营线下分享", "", "P1 小额委员会 - 治理记录", "https://seedao.notion.site/P1-13e5ecbb867e49a096bcea12622b0bda"],
  ["0xf7e423285d3e73c887d0685d1fc3ac97ebccbe12", "研发公会", "2023/5/3", "1500", "积分赠与活动", "", "", ""],
  ["0xb8aEe482305B7B219704350786FCE47847CEC996", "研发公会", "2023/5/4", "3000", "积分赠与活动", "第 34 周会", "", ""],
  ["0x42b0765b70af2b6910F6281b3dC0C34a9CdbB65c", "城市联络人 & 线下活动", "2023/5/4", "3532", "城市联络人工资", "", "实验期积分和U发放", "https://seedao.notion.site/U-1b830cd87e3a4e8db6336447d5b65167"],
  ["0xc397987f10d577ac7eb2eb6ce90a24c881fe065d", "战略孵化器", "2023/5/7", "4094", "孵化器岗位津贴", "", "", ""],
  ["0x5513f5B0C9FD31aA25135d3F25FCd31ea891A809", "P1 提案：香港嘉年华 线上分享交流会", "2023/5/7", "10586", "积分激励", "U 有赞助支持", "P1 提案：香港嘉年华 线上分享交流会", "https://forum.seedao.xyz/thread/search-43625"],
  ["0xE02533f1B8bc4BefD8561Df63721A96936F978f9", "投研公会", "2023/5/9", "9300", "财务员", "评分 100%", "Discord 记录", "https://discord.com/channels/841189467128594442/918756636250755132/1104187275551715368"],
  ["0xD8652A853F4aC24C797fAA02E4633BD69AC9394D", "投研公会", "2023/5/9", "9750", "领航员", "", "Discord 记录", "https://discord.com/channels/841189467128594442/918756636250755132/11041872755517153688"]
])

const invalidRecords = ref([] as Array<string>)

function downloadCSVData() {
  let csv = titleStr.value.join(',') + '\n'
  csvdata.value.forEach((row) => {
    csv += row.join(',')
    csv += "\n"
  })

  const anchor = document.createElement('a')
  anchor.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv)
  anchor.target = '_blank'
  anchor.download = (t('Score-Registration') + " " + t('Example')).replace(" ", "_") + '.csv'
  anchor.click()
}

const newRecordScoreNumber = ref(0)
const budgetLimit = ref(12500000)
watch(newRecordScoreNumber, (newVal, oldVal) => {
  if (Math.floor(newVal) !== newVal) {
    newRecordScoreNumber.value = Math.floor(newVal)
  }
  if (newVal < 0) {
    newRecordScoreNumber.value = 0
  } else if (newVal > budgetLimit.value) {
    newRecordScoreNumber.value = budgetLimit.value
  }
  if (newVal !== newRecord.value.value_claim) {
    newRecord.value.value_claim = newVal
  }
}, { deep: true })

watch(newRecordBeneficiary, (newVal, oldVal) => {
  const isAddr = EthersService.isAddress(newRecordWallet.value)
  if (((newVal && newVal?.length > 2) || (newVal === null && oldVal ? oldVal?.length ? oldVal.length > 0 : false : false)) &&
    (newRecordWallet.value === '' || isAddr)) {
    const user = userStore.quickList.find((user) => user.username === newVal)
    if (user && user.wallet) {
      if (!isAddr && !registerByWallet.value) {
        registerByBeneficiary.value = true
      }
      newRecord.value.beneficiary = user
      newRecord.value.wallet = user.wallet
      newRecordWallet.value = user.wallet
    } else {
      registerByBeneficiary.value = false
      newRecord.value.beneficiary = ""
      newRecord.value.wallet = ""
      newRecordWallet.value = ""
    }
  } else if (!isAddr) {
    registerByBeneficiary.value = false
    newRecord.value.beneficiary = ""
    newRecord.value.wallet = ""
    newRecordWallet.value = ""
  }
}, { deep: true })

watch(newRecordBudget, (newVal, oldVal) => {
  if (newVal) {
    const budget = budgetStore.subjects.find((b) => t(b.subject) === newVal)
    if (budget) {
      newRecord.value.budget = budget
    } else {
      newRecord.value.budget = ""
    }
  } else {
    newRecord.value.budget = ""
  }
})

watch(newRecordWallet, (newVal, oldVal) => {
  if (newVal) {
    if (EthersService.isAddress(newVal)) {
      const wallet = newVal.toLowerCase() ? newVal.toLowerCase() : ""
      if (!newRecordBeneficiary.value) {
        registerByWallet.value = true
      }
      const user = userStore.quickList.find((user) => user.wallet === wallet)
      if (user.wallet) {
        newRecord.value.beneficiary = user
        newRecord.value.wallet = wallet
        newRecordBeneficiary.value = user.username
      } else {
        newRecord.value.beneficiary = ""
        newRecord.value.wallet = wallet
        newRecordBeneficiary.value = wallet
      }
    } else {
      registerByWallet.value = false
      newRecord.value.beneficiary = ""
      newRecord.value.wallet = ""
      newRecordWallet.value = ""
      newRecordBeneficiary.value = ""
    }
  } else {
    if (oldVal ? oldVal?.length ? oldVal.length > 0 : false : false) {
      newRecordBeneficiary.value = ""
    }
    registerByWallet.value = false
    newRecord.value.beneficiary = ""
    newRecord.value.wallet = ""
    newRecordWallet.value = ""
  }
}, { deep: true })

fetchScoreMyRegistered()
fetchUserQuickList()
fetchBudgetSubjects()
</script>

<template>
  <ConnectWalletFirst v-if="!EthersService.isAddress(EthersService.walletAddress())" />
  <v-row v-else>
    <v-col cols="12">
      <v-alert variant="elevated" border="end" color="primary">由于第二季即将结束，财务官正在密切接洽各项目与公会记录积分，为避免重复登记暂停登记积分功能至
        6/4，此期间请找财务官登记积分。</v-alert>
    </v-col>
    <v-col cols="12" sm="12" md="8" lg="8">
      <v-card class="mb-7">
        <v-card-text class="pa-5 border-bottom">
          <h3 class="title text-h6">{{ $t("Score-Registration") }}</h3>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          <div class="mb-5">
            <v-alert v-for="(error, index) in errors" :key="`error-${index}`" type="error">
              {{ $t(error) }}
            </v-alert>
            <v-alert v-for="(msg, index) in success" :key="`success-${index}`" type="success">
              {{ $t(msg) }}
            </v-alert>
          </div>
          <v-autocomplete v-model="newRecordBeneficiary" :items="userStore.usernames" clearable hide-no-data
            :label="$t('Score-Beneficiary') + '*'" v-if="!registerByWallet" />
          <v-text-field v-model="newRecordBeneficiary" density="compact" type="text" :label="$t('Score-Beneficiary')"
            readonly v-else-if="newRecordBeneficiary && (newRecordBeneficiary.length > 0)" />
          <v-text-field v-model="onlyWalletString" density="compact" type="text" :label="$t('Score-Beneficiary')" readonly
            v-else />
          <v-text-field v-model="newRecordWallet" :label="$t('Wallet-Address') + '*'" density="compact" type="text"
            :readonly="registerByBeneficiary"></v-text-field>
          <v-autocomplete v-model="newRecordBudget" :items="budgetSubjects" hide-no-data clearable
            :label="$t('Score-Budget-Source') + '*'" />
          <v-text-field v-model="newRecord.date" :label="$t('Event-Date') + '*'" density="compact" type="date"
            :max="DateService.getMinMaxString(new Date().getTime())" />
          <v-text-field v-model="newRecordScoreNumber" :label="$t('Score-Register-Number') + '*'" density="compact"
            type="number"></v-text-field>
          <v-text-field v-model="newRecord.event" :label="$t('Score-Register-Event')" filled
            background-color="transparent" height="25" persistent-hint></v-text-field>
          <v-textarea v-model="newRecord.notes" :label="$t('Score-Register-Details')" auto-grow rows="5"
            row-height="15"></v-textarea>
          <h3 class="mb-2">{{ $t("References") }}</h3>
          <v-row v-for="(link, index) in newRecord.links" :key="`link-${index}`">
            <v-col cols="12" sm="12" md="4" lg="4">
              <v-text-field v-model="newRecord.links[index].title" :label="$t('Link-Subject')" density="compact" />
            </v-col>
            <v-col cols="12" sm="12" md="8" lg="8">
              <v-text-field v-model="newRecord.links[index].url" :label="$t('Link-Url')" density="compact">
                <template v-slot:append v-if="index === newRecord.links.length - 1">
                  <v-icon color="blue" @click="moreLink()" v-if="index === newRecord.links.length - 1"> mdi-plus </v-icon>
                </template>
                <template v-slot:append v-else>
                  <v-icon color="red" @click="removeLink(index)"> mdi-minus </v-icon>
                </template>
              </v-text-field>
            </v-col>
          </v-row>
          <v-col align="center">
            <v-btn color="secondary" class="text-capitalize" @click="submitRegistration()" :disabled="true">
              <!-- isSubmitting -->
              <DotLoader :loading="isSubmitting" color="white" size="12px" />&nbsp;{{ $t("Submit") }}
            </v-btn>
          </v-col>
        </v-card-text>
      </v-card>

    </v-col>
    <v-col cols="12" sm="12" md="4" lg="4">
      <v-card class="mb-7">
        <v-card-text class="pa-5 border-bottom">
          <h3 class="title text-h6">{{ $t("Control-Panel") }}</h3>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text align="center">
          <v-btn color="secondary" class="text-capitalize">{{ $t("Score-Register-Batch") }}
            <v-dialog v-model="batchRegisterDialog" activator="parent" :width="uploadRecords.length > 0 ? '80%' : '50%'"
              rounded="100px">
              <v-card>
                <v-card-text class="pa-5 border-bottom">
                  <h3 class="title text-h6">{{ $t("Score-Register-Batch") }}<v-btn class="ml-5" size="small"
                      color="secondary" @click="downloadCSVData()">{{
                        $t('Example-CSV') }}</v-btn></h3>
                  <h5 class="title mt-2">{{ $t("Score-Register-Batch-Notice-1") }}</h5>
                  <h5 class="title">{{ $t("Score-Register-Batch-Notice-2") }}</h5>
                  <v-file-input v-model="files" accept=".csv" class="mt-5" :label="$t('Click-to-Upload')"
                    @change="uploadFile"></v-file-input>
                  <div class="pa-3">
                    <v-alert type="success" v-if="batchSuccess !== ''">{{
                      batchSuccess }}</v-alert>
                    <v-alert type="error" v-if="uploadRecords.length >= 0 && invalidRecords.length > 0">{{
                      $t("Part-Of-the-Records-Upload-Failed") }}</v-alert>
                  </div>
                  <v-table fixed-header height="300px" v-if="uploadRecords.length > 0">
                    <thead>
                      <tr>
                        <th class="text-center">#</th>
                        <th class="text-left" v-for="(title, index) in batchTitle">{{ $t(title) }}</th>
                      </tr>
                    </thead>
                    <tbody v-for="(record, index) in uploadRecords">
                      <td class="text-center">{{ recordIndex[index] }}</td>
                      <td>{{ userStore.quickList.find((u) => u.wallet === record.wallet) ?
                        userStore.getUserItemName(userStore.quickList.find((u) => u.wallet === record.wallet)) :
                        EthersService.shortWalletAddress(record.wallet) }}</td>
                      <td>{{ $t(getSubject(record.budget)) }}</td>
                      <td>{{ DateService.getDateString(record.datetime) }}</td>
                      <td>{{ record.value_claim }}</td>
                      <td>{{ record.event !== "" ? record.event : "-" }}</td>
                      <td>{{ record.notes !== "" ? record.notes : "-" }}</td>
                      <td v-if="record.links.length > 0"><a :href="record.links[0].url" target="_blank">{{
                        record.links[0].title }}</a></td>
                      <td v-else>-</td>
                    </tbody>
                  </v-table>
                  <p class="ml-4" v-for="(error, index) in invalidRecords">
                    <font color="red">⚠️ {{ error }}</font>
                  </p>
                </v-card-text>
                <v-card-actions>
                  <v-col align="center" v-if="batchSuccess === ''">
                    <v-btn color="primary" @click="closeBatchRegisterDialog">{{ $t('Cancel') }}</v-btn>
                    <v-btn color="info" variant="elevated" class="text-capitalize" @click="submitBatchRegistration()"
                      :disabled="true"
                      v-if="uploadRecords.length > 0 && invalidRecords.length === 0"><!-- isBatchSubmitting -->
                      <DotLoader :loading="isBatchSubmitting" color="white" size="12px" />&nbsp;{{ $t("Submit") }}
                    </v-btn>
                    <v-btn color="info" variant="outlined" class="text-capitalize" disabled v-else>{{ $t("Submit") }}
                    </v-btn>
                  </v-col>
                  <v-col align="center" v-else>
                    <v-btn color="primary" block @click="closeBatchRegisterDialog">{{ $t('Close') }}</v-btn>
                  </v-col>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-btn>
        </v-card-text>
      </v-card>
      <v-card class="mb-7">
        <v-card-text class="pa-5 border-bottom">
          <h3 class="title text-h6">{{ $t("My-Score-Registration-Recently") }}</h3>
        </v-card-text>
        <v-divider></v-divider>
        <div class="pa-3" align="left" v-for="(record, index) in myRegisterRecords" :key="`my-records-${index}`">
          <v-badge class="ml-5" :color="getRecordVariant(record.status)" text-color="black"
            :content="$t(record.status)" />
          <h5>
            <v-btn variant="text" color="secondary" @click="openPointRecord(record)">{{ $t("Give-To-give") }}&nbsp;{{
              record.value_claim }}&nbsp;$SCR
              &nbsp;{{ $t("Give-To-to") }}&nbsp;{{ userStore.getUserNickname(record.beneficiary) }} ({{
                String(new Date(record.datetime).getMonth() + 1) +
                "/" +
                String(new Date(record.datetime).getDate())
              }})</v-btn>
          </h5>
          <small class="ml-5">{{ $t(record.budget.subject.substring(0, 25)) }}{{ (record.budget.subject.length > 25 ?
            " ..." : "") }}</small>
        </div>
        <br />
        <FullRecordDialog />
        <!-- <v-dialog v-model="myRegisterDialog" width="700px">
          <v-card>
            <v-card-text v-if="!isFetchingFullRecord">
              <v-table>
                <tbody>
                  <tr>
                    <td>{{ $t("Score-Status") }}</td>
                    <td>{{ $t(myRegisterScore?.status ? myRegisterScore.status : "-") }}</td>
                  </tr>
                  <tr>
                    <td>{{ $t("Score-Budget-Source") }}</td>
                    <td>{{ $t(myRegisterScore?.budget?.subject ? myRegisterScore.budget.subject : "-") }}</td>
                  </tr>
                  <tr>
                    <td>{{ $t("Score-Beneficiary") }}</td>
                    <td>{{ userStore.getUserItemName(myRegisterScore?.beneficiary) }}</td>
                  </tr>
                  <tr>
                    <td>{{ $t("Event-Date") }}</td>
                    <td>{{ myRegisterScore?.datetime ? DateService.getDateString(Number(myRegisterScore.datetime)) : "-"
                    }}</td>
                  </tr>
                  <tr>
                    <td>{{ $t("Score-Register-Number") }}</td>
                    <td>{{ myRegisterScore?.value_claim }} $SCR</td>
                  </tr>
                  <tr>
                    <td>{{ $t("Score-Register-Applicant") }}</td>
                    <td>{{ userStore.getUserItemName(myRegisterScore?.creator) }}</td>
                  </tr>
                  <tr>
                    <td>{{ $t("Score-Register-Event") }}</td>
                    <td v-if="myRegisterScore.event">{{ myRegisterScore?.event }}</td>
                    <td v-else>{{ $t("None") }}</td>
                  </tr>
                  <tr v-if="myRegisterScore.notes">
                    <td>{{ $t("Score-Register-Details") }}</td>
                    <td v-if="myRegisterScore.notes">{{ myRegisterScore?.notes }}</td>
                    <td v-else>{{ $t("None") }}</td>
                  </tr>
                  <tr v-for="(link, index) in myRegisterScore.links" :key="`my-register-link-${index}`">
                    <td>{{ $t("Reference-Links") }} <span v-if="myRegisterScore.links.length > 1">{{ (index + 1) }}</span>
                    </td>
                    <td>🔗 <a :href="link.url" target="_blank">{{ link.title }}</a></td>
                  </tr>
                  <tr v-if="(!myRegisterScore.links) || (myRegisterScore.links.length === 0)">
                    <td>{{ $t("Reference-Links") }}</td>
                    <td>{{ $t("None") }}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-card-text>
            <v-card-text v-else>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block @click="myRegisterDialog = false">{{ $t("Close") }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog> -->
      </v-card>
    </v-col>
  </v-row>
</template>


