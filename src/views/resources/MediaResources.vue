<script setup lang="ts">
import { ref } from "vue"
import BaseCard from "@/components/BaseCard.vue"
import TheEarnings from "@/views/dashboards/dashboardComponents/analytical/earnings/TheEarnings.vue"
import MonthlyRevenue from "@/views/dashboards/dashboardComponents/analytical/monthly-revenue/MonthlyRevenue.vue"
import WeeklyStats from "@/views/dashboards/dashboardComponents/analytical/weekly-stats/WeeklyStats.vue"

const page = ref(1)
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

    <v-col cols="12" sm="12" lg="6" class="">
      <WeeklyStats></WeeklyStats>
    </v-col>
    <v-col col="12" sm="12" lg="6">
      <BaseCard heading="V-model" style="height: 270px;" class="overflow-auto">

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

        <v-expansion-panels fluid>
          <v-expansion-panel v-for="(message, i) in messages" :key="i" hide-actions>
            <v-expansion-panel-title>
              <v-row align="center" class="spacer" no-gutters>
                <v-col cols="4" sm="2" md="1">
                  <v-avatar size="36px">
                    <v-img v-if="message.avatar" alt="Avatar"
                      src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"></v-img>
                    <v-icon v-else :color="message.color" :icon="message.icon"></v-icon>
                  </v-avatar>
                </v-col>

                <v-col class="hidden-xs-only text-left ml-2" sm="5" md="3">
                  <strong v-html="message.name"></strong>
                  <span v-if="message.total" class="text-grey">
                    &nbsp;({{ message.total }})
                  </span>
                </v-col>

                <v-col class="text-no-wrap text-left" cols="5" sm="3">
                  <v-chip v-if="message.new" :color="`${message.color}-lighten-1`" class="ml-0 mr-2 text-black" label
                    small>
                    {{ message.new }} new
                  </v-chip>
                  <strong v-html="message.title"></strong>
                </v-col>

                <v-col v-if="message.excerpt" class="text-grey text-truncate hidden-sm-and-down">
                  &mdash;
                  {{ message.excerpt }}
                </v-col>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-card-text class="text-subtitle-1" v-text="lorem"></v-card-text>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-pagination v-model="page" :length="4" rounded="circle" class="pa-3 mt-2"></v-pagination>
      </BaseCard>
    </v-col>
  </v-row>
</template>
