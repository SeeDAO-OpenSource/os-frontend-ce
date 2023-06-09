<script setup lang="ts">
import { ref, watch } from "vue"
import { storeToRefs } from "pinia"
import DateService from "@/services/date.service"
import { useScoreStore } from "@/stores/score"
import { useUserStore } from "@/stores/user"
import AvatarService from "@/services/avatar.service"
import type { ScoreMyRegistered, SearchRecord } from "@/types/score"
import { useLayoutStore, SCORE_FULL_RECORD } from "@/stores/layout"
import FullRecordDialog from "./FullRecordDialog.vue"
import { useCustomizerStore } from "@/stores/customizer"

// Store Hooks
const layoutStore = useLayoutStore()
const userStore = useUserStore()
const scoreStore = useScoreStore()
const customizer = useCustomizerStore()

// Refs
const page = ref(0)
const pageTotal = ref(1)
const size = ref(10)
const { searchRecords } = storeToRefs(scoreStore)
const currentScores = ref([] as Array<SearchRecord>)

// Watchers
// Updates the 'currentScores' variable based on a filtered dataset 
// stored in 'searchRecords', and also updates the 'page' and 
// 'pageTotal' variables.
watch(searchRecords, (newVal) => {
    console.log('seaerch:', newVal.length)
    if (newVal) {
        page.value = 1
        pageTotal.value = Math.ceil(newVal.length / size.value)
        currentScores.value = searchRecords.value.slice(0, size.value)
    }
}, { deep: true })
// Updates the 'currentScores' variable based on the page number
// and a filtered dataset stored in 'searchRecords'.
watch(page, (newVal) => {
    if (searchRecords.value) {
        currentScores.value = searchRecords.value.slice((newVal - 1) * size.value, newVal * size.value)
    }
}, { deep: true })

// Functions
/**
 * Opens the dialog of score record for the given ScoreMyRegistered record.
 * @async
 * @param {ScoreMyRegistered} record - The record to open the dialog for.
 * @returns {Promise<void>}
 */
async function openPointRecord(record: ScoreMyRegistered): Promise<void> {
    layoutStore.setDialogVisible(SCORE_FULL_RECORD, true)
    layoutStore.setDialogLoading(SCORE_FULL_RECORD, true)
    await scoreStore.fetchFullPointRecord(`${record["_id"]}`)
    layoutStore.setDialogData(SCORE_FULL_RECORD, scoreStore.fullRecord)
    layoutStore.setDialogLoading(SCORE_FULL_RECORD, false)
}

/** 
 * Returns a string-based variant of the given status for use in a UI. 
 * @param {string} status - The status to get a variant for. 
 * @returns {string} - The string-based variant of the given status. 
 */
function getRecordVariant(status: string): string {
    if (status === "Reviewing") return 'warning'
    else if (status === "Rejected") return 'danger'
    else if (status === "Registered") return 'info'
    else if (status === "Onchained") return 'success'
    else return 'light'
}
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
                        <th>{{ $t("Score-Beneficiary") }} </th>
                        <th>{{ $t("Score") }}</th>
                        <th>{{ $t("Score-Status") }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in currentScores" :key="`score-${index}`">
                        <td>{{ DateService.getDateString(item.datetime) }}</td>
                        <td><v-btn variant="text" :color="customizer.darktheme ? 'white' : 'black'" @click="openPointRecord(item)">{{
                            $t(item.budget.subject) }}</v-btn></td>
                        <td>
                            <div class="d-flex align-center py-4">
                                <div>
                                    <v-img :src="AvatarService.getAvatar(item.beneficiary.wallet, 20)" width="20px"
                                        class="rounded-circle img-fluid" />
                                </div>

                                <div class="ml-5">
                                    <p>{{ userStore.getUserNickname(item.beneficiary) }}</p>
                                </div>
                            </div>
                        </td>
                        <td align="right">{{ item.value_claim }}</td>
                        <td> <v-badge class="ml-3 mb-2" :color="getRecordVariant(item.status)" :content="$t(item.status)" />
                        </td>
                    </tr>
                </tbody>
            </v-table>
            <v-pagination class="mt-3" v-model="page" :length="pageTotal" rounded="circle"></v-pagination>
        </v-card-text>
        <FullRecordDialog />
    </v-card>
</template>
