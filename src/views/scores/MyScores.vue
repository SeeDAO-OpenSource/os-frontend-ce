<script setup lang="ts">
import { ref } from "vue"
import BaseCard from "@/components/BaseCard.vue"
import TheEarnings from "@/views/dashboards/dashboardComponents/analytical/earnings/TheEarnings.vue"
import MonthlyRevenue from "@/views/dashboards/dashboardComponents/analytical/monthly-revenue/MonthlyRevenue.vue"
import WeeklyStats from "@/views/dashboards/dashboardComponents/analytical/weekly-stats/WeeklyStats.vue"
import DailyActivities from "@/views/dashboards/dashboardComponents/analytical/daily-activities/DailyActivities.vue"
import ScoresTable from "@/views/scores/ScoresTable.vue";
import { ActivityCalendar } from "vue-activity-calendar"
import "vue-activity-calendar/style.css"

const page = ref({ title: "My-Tasks" })
const radios = ref("radio-1")
const breadcrumbs = ref([
  {
    text: "Tasks",
    disabled: false,
    href: "#",
  },
  {
    text: "My-Tasks",
    disabled: true,
    href: "#",
  },
])

const activity = ref([
  { date: "2022-09-22", count: 5 },
])

const colors = ref(["#f5f5f5", "#ebfaff", "#e5f9ff", "#c7f1ff", "#86e0fe", "#3ecefe",])

const messages = ref([
  {
    avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
    name: "John Leider",
    title: "Welcome to Vuetify!",
    excerpt: "Thank you for joining our community...",
  },
  {
    color: "red",
    icon: "mdi-account-multiple",
    name: "Social",
    new: 1,
    total: 3,
    title: "Twitter",
  },
  {
    color: "teal",
    icon: "mdi-tag",
    name: "Promos",
    new: 2,
    total: 4,
    title: "Shop your way",
    exceprt: "New deals available, Join Today",
  },
])

const lorem = ref(
  "Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos."
)
const selected = ref([])
</script>

<template>
  <v-row>

    <v-col cols="12" sm="12" lg="4" class="">
      <DailyActivities></DailyActivities>
    </v-col>
    <v-col col="12" sm="12" lg="8">
      <v-row>
        <v-col cols="12" sm="12" lg="12">
          <BaseCard heading="V-model" style="height: 423px;">

          </BaseCard>
        </v-col>
      </v-row>
    </v-col>

    <v-col col="12" sm="12" lg="12">
      <BaseCard heading="Activity">
      <ActivityCalendar :data="activity" :width="40" :height="7" :cellLength="20" :cellInterval="10" :colors="colors"
        :cellBorderRadius="4" :fontSize="12" :showLevelFlag="false" />
      </BaseCard>
      
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
    <v-col cols="12" sm="12" lg="12">
      <BaseCard heading="V-model">

        <ScoresTable />
        <v-pagination v-model="page" :length="4" rounded="circle" class="pa-3 mt-2"></v-pagination>
      </BaseCard>
    </v-col>
  </v-row>
</template>
