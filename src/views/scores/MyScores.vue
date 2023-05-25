<script setup lang="ts">
import { ref } from "vue"
import BaseCard from "@/components/BaseCard.vue"
import "vue-activity-calendar/style.css"
import ConnectWalletFirst from "@/components/ConnectWalletFirst.vue"
import MyScoreTotal from "./MyScoreTotal.vue"
import MyOffChainScoreTotal from "./MyOffChainScoreTotal.vue"
import MyNodeQualificationStatus from "./MyNodeQualificationStatus.vue"

import MyScoreTable from "./MyScoreTable.vue"
import MyRegistrationTable from "./MyRegistrationTable.vue"
import FullRecordDialog from "./FullRecordDialog.vue"
import EthersService from "@/services/ethers.service"
import { useUserStore } from "@/stores/user"

const tab = ref(0)

const user = useUserStore()

</script>

<template>
  <ConnectWalletFirst v-if="user.isLogin" />
  <v-row v-else>
    <!-- <v-colcol cols="12" sm="12" lg="4" class="">
      <DailyActivities></DailyActivities>
    </v-colcol> -->
    <v-col col="12" sm="12" lg="12">
      <v-row>
        <!-- <v-col cols="4" sm="12" lg="4">
          <MyNodeQualificationStatus />
        </v-col> -->
        <v-col cols="12" sm="12" md="6" lg="6">
          <MyOffChainScoreTotal />
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6">
          <MyScoreTotal />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" sm="12" lg="12">
      <BaseCard :heading="$t('My-Score')">
        <v-tabs v-model="tab" background-color="secondary" class="d-flex align-center" center-active>
          <v-tab>{{ $t("My-Score") }}</v-tab>
          <v-tab>{{ $t("My-Score-Registration") }}</v-tab>
        </v-tabs>
        <v-window v-model="tab" :touch="false">
          <v-window-item>
            <MyScoreTable />
          </v-window-item>
          <v-window-item>
            <MyRegistrationTable />
          </v-window-item>
        </v-window>
      </BaseCard>
    </v-col>
    <FullRecordDialog />
  </v-row>
</template>
