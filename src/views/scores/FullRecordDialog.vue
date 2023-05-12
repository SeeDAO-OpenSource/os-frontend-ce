<script setup lang="ts">
import { ref } from "vue"
import type { ComponentObjectPropsOptions } from "vue"
import type { FullRecord } from "@/types/score"
import { useUserStore } from "@/stores/user"
import DateService from "@/services/date.service"
import { useLayoutStore, SCORE_FULL_RECORD } from "@/stores/layout"
const userStore = useUserStore()
const layoutStore = useLayoutStore()

</script>

<template>
    <v-dialog v-model="layoutStore.scoreFullRecord.dialog" width="700px">
        <v-card>
            <v-card-text v-if="!layoutStore.scoreFullRecord.loading">
                <v-table>
                    <tbody>
                        <tr>
                            <td class="font-weight-bold">{{ $t("Score-Status") }}</td>
                            <td>{{ $t(layoutStore.scoreFullRecord.data?.status ? layoutStore.scoreFullRecord.data.status :
                                "-") }}</td>
                        </tr>
                        <tr>
                            <td class="font-weight-bold">{{ $t("Score-Budget-Source") }}</td>
                            <td>{{ $t(layoutStore.scoreFullRecord.data?.budget?.subject ?
                                layoutStore.scoreFullRecord.data.budget.subject : "-") }}</td>
                        </tr>
                        <tr>
                            <td class="font-weight-bold">{{ $t("Score-Beneficiary") }}</td>
                            <td>{{ userStore.getUserItemName(layoutStore.scoreFullRecord.data?.beneficiary) }}</td>
                        </tr>
                        <tr>
                            <td class="font-weight-bold">{{ $t("Event-Date") }}</td>
                            <td>{{ layoutStore.scoreFullRecord.data?.datetime ?
                                DateService.getDateString(Number(layoutStore.scoreFullRecord.data.datetime)) :
                                "-"
                            }}</td>
                        </tr>
                        <tr>
                            <td class="font-weight-bold">{{ $t("Score-Register-Number") }}</td>
                            <td>{{ layoutStore.scoreFullRecord.data?.value_claim }} $SCR</td>
                        </tr>
                        <tr>
                            <td class="font-weight-bold">{{ $t("Score-Register-Applicant") }}</td>
                            <td>{{ userStore.getUserItemName(layoutStore.scoreFullRecord.data?.creator) }}</td>
                        </tr>
                        <tr>
                            <td class="font-weight-bold">{{ $t("Score-Register-Event") }}</td>
                            <td v-if="layoutStore.scoreFullRecord.data?.event">{{ layoutStore.scoreFullRecord.data?.event }}
                            </td>
                            <td v-else>{{ $t("None") }}</td>
                        </tr>
                        <tr v-if="layoutStore.scoreFullRecord.data?.notes">
                            <td class="font-weight-bold">{{ $t("Score-Register-Details") }}</td>
                            <td v-if="layoutStore.scoreFullRecord.data.notes">{{ layoutStore.scoreFullRecord.data?.notes }}
                            </td>
                            <td v-else>{{ $t("None") }}</td>
                        </tr>
                        <tr v-for="(link, index) in layoutStore.scoreFullRecord.data?.links"
                            :key="`my-register-link-${index}`">
                            <td class="font-weight-bold">{{ $t("Reference-Links") }} <span
                                    v-if="layoutStore.scoreFullRecord.data?.links && layoutStore.scoreFullRecord.data?.links.length > 1">{{
                                        (index + 1)
                                    }}</span>
                            </td>
                            <td>🔗 <a :href="link.url" target="_blank">{{ link.title.slice(0,60) }}<span v-if="link.title.length >= 60">...</span></a></td>
                        </tr>
                        <tr
                            v-if="(!layoutStore.scoreFullRecord.data?.links) || (layoutStore.scoreFullRecord.data?.links.length === 0)">
                            <td class="font-weight-bold">{{ $t("Reference-Links") }}</td>
                            <td>{{ $t("None") }}</td>
                        </tr>
                    </tbody>
                </v-table>
            </v-card-text>
            <v-card-text v-else>
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" block @click="layoutStore.setDialogVisible(SCORE_FULL_RECORD, false)">{{ $t("Close")
                }}</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>