<script setup lang="ts">
import { ref, watch, computed } from "vue"
import { storeToRefs } from 'pinia'
import DateService from "@/services/date.service"
import { useScoreStore } from "@/stores/score"
import ContactData from "./ContactData"
import { useUserStore } from "@/stores/user"
import AvatarService from "@/services/avatar.service"
import EthersService from "@/services/ethers.service"
import { SCORE_FULL_RECORD, useLayoutStore } from '@/stores/layout'
import type { ScoreMyRegistered } from "@/types/score"
import { useCustomizerStore } from "@/stores/customizer"

const customizer = useCustomizerStore()
const layoutStore = useLayoutStore()
async function openPointRecord(record: ScoreMyRegistered) {
    layoutStore.setDialogVisible(SCORE_FULL_RECORD, true)
    layoutStore.setDialogLoading(SCORE_FULL_RECORD, true)
    await scoreStore.fetchFullPointRecord(`${record["_id"]}`)
    layoutStore.setDialogData(SCORE_FULL_RECORD, scoreStore.fullRecord)
    layoutStore.setDialogLoading(SCORE_FULL_RECORD, false)
}

const userStore = useUserStore()
const valid = ref(true)
const dialog = ref(false)
const search = ref("")
const rolesbg = ref([
    "teal lighten-3",
    "green lighten-3",
    "cyan lighten-3",
    "light-blue lighten-3",
    "deep-purple lighten-2",
])

const page = ref(0)
const pageTotal = ref(1)
const size = ref(10)
const scoreStore = useScoreStore()
const { myScores } = storeToRefs(scoreStore)
const currentScores = ref([] as Array<any>)


watch(myScores, (newVal) => {
    if (newVal) {
        page.value = 1
        pageTotal.value = Math.ceil(newVal.length / size.value)
        currentScores.value = myScores.value.slice(0, size.value)
    }
}, { deep: true })

watch(page, (newVal, oldVal) => {
    if (myScores.value) {
        currentScores.value = myScores.value.slice((newVal - 1) * size.value, newVal * size.value)
    }
}, { deep: true })

function getRecordVariant(status: string): string {
    if (status === "Reviewing") return 'warning'
    else if (status === "Rejected") return 'danger'
    else if (status === "Registered") return 'info'
    else if (status === "Onchained") return 'success'
    else return 'light'
}

async function queryMyScores() {
    const user = await userStore.fetchWalletUser(`${EthersService.walletAddress()}`)
    await scoreStore.queryMyScores({ query: { filter: "beneficiary", condition: `${user["_id"]}` }, offset: 0, limit: 100000 })
}

const desserts = ref(ContactData)
const editedIndex = ref(-1)
const editedItem = ref({
    id: "",
    avatar: "1.jpg",
    userinfo: "",
    usermail: "",
    phone: "",
    jdate: "",
    role: "",
    rolestatus: "",
})
const defaultItem = ref({
    id: "",
    avatar: "1.jpg",
    userinfo: "",
    usermail: "",
    phone: "",
    jdate: "",
    role: "",
    rolestatus: "",
})
//OnMounted

//Methods

const filteredList = computed(() => {
    return desserts.value.filter((user: any) => {
        return user.userinfo.toLowerCase().includes(search.value.toLowerCase())
    })
})

function editItem(item: any) {
    editedIndex.value = desserts.value.indexOf(item)
    editedItem.value = Object.assign({}, item)
    dialog.value = true
}
function deleteItem(item: any) {
    const index = desserts.value.indexOf(item)
    confirm("Are you sure you want to delete this item?") &&
        desserts.value.splice(index, 1)
}

function close() {
    dialog.value = false
    setTimeout(() => {
        editedItem.value = Object.assign({}, defaultItem.value)
        editedIndex.value = -1
    }, 300)
}
function save() {
    if (editedIndex.value > -1) {
        Object.assign(desserts.value[editedIndex.value], editedItem.value)
    } else {
        desserts.value.push(editedItem.value)
    }
    close()
}

//Computed Property
const formTitle = computed(() => {
    return editedIndex.value === -1 ? "New Contact" : "Edit Contact"
})

queryMyScores()
</script>

<template>
    <v-card class="mt-5">
        <v-card-text class="pa-5">
            <!-- <v-row>
                <v-col cols="12" lg="4" md="6">
                    <v-text-field density="compact" v-model="search" label="Search Contacts" hide-details
                        variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" lg="8" md="6" class="text-right">
                    <v-dialog v-model="dialog">
                        <template v-slot:activator="{ props }">
                            <v-btn color="primary" v-bind="props" class="ml-auto">
                                <v-icon class="mr-2">mdi-account-multiple-plus</v-icon>Add
                                Contact
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title class="pa-4 bg-secondary">
                                <span class="title text-white">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                    <v-form ref="form" v-model="valid" lazy-validation>
                                        <v-row>
                                            <v-col cols="12" sm="6">
                                                <v-text-field variant="outlined" hide-details v-model="editedItem.id"
                                                    label="Id"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field variant="outlined" hide-details v-model="editedItem.userinfo"
                                                    label="User info"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field variant="outlined" hide-details v-model="editedItem.usermail"
                                                    label="User email" type="email"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field variant="outlined" hide-details v-model="editedItem.phone"
                                                    label="Phone" type="phone"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field variant="outlined" hide-details v-model="editedItem.jdate"
                                                    label="Joining Date"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field variant="outlined" hide-details v-model="editedItem.role"
                                                    label="Role"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="12">
                                                <v-select variant="outlined" hide-details :items="rolesbg"
                                                    v-model="editedItem.rolestatus" label="Role Background"></v-select>
                                            </v-col>
                                        </v-row>
                                    </v-form>
                                </v-container>
                            </v-card-text>

                            <v-card-actions class="pa-4">
                                <v-spacer></v-spacer>
                                <v-btn color="error" @click="close">Cancel</v-btn>
                                <v-btn color="secondary" :disabled="editedItem.userinfo == '' || editedItem.usermail == ''
                                    " variant="flat" @click="save">Save</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-col>
            </v-row> -->
            <v-table class="mt-2">
                <thead>
                    <tr>
                        <th>{{ $t("Event-Date") }}</th>
                        <th>{{ $t("Score-Budget-Source") }}</th>
                        <th>{{ $t("Score-Register-Event") }} </th>
                        <th>{{ $t("Score") }}</th>
                        <th>{{ $t("Score-Status") }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in currentScores" :key="`score-${index}`">
                        <td>{{ DateService.getDateString(item.datetime) }}</td>
                        <td><v-btn variant="text" :color="customizer.darktheme ? 'white' : 'black'" @click="openPointRecord(item)">{{
                            $t(item.budget.subject) }}</v-btn></td>
                        <td><v-btn variant="text" :color="customizer.darktheme ? 'white' : 'black'" @click="openPointRecord(item)">{{
                            item.event }}</v-btn></td>
                        <td align="right">{{ item.value_claim }}</td>
                        <td> <v-badge class="ml-3 mb-2" :color="getRecordVariant(item.status)" :content="$t(item.status)" />
                        </td>
                    </tr>
                </tbody>
            </v-table>
            <v-pagination class="mt-3" v-model="page" :length="pageTotal" rounded="circle"></v-pagination>
        </v-card-text>
    </v-card>
</template>
