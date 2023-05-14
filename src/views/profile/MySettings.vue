<script setup lang="ts">
import { ref } from "vue"
import BaseCard from "@/components/BaseCard.vue"
import TheEarnings from "@/views/dashboards/dashboardComponents/analytical/earnings/TheEarnings.vue"
import MonthlyRevenue from "@/views/dashboards/dashboardComponents/analytical/monthly-revenue/MonthlyRevenue.vue"
import MyRanking from "@/views/profile/my-ranking/MyRanking.vue"


const page = ref(1)
const pagenum = ref(1)
const radios = ref("radio-1")
const tabs = ref([
    {
        title: "Account-Setting"
    },
    {
        title: "Interested-Tags"
    },
    {
        title: "Notification-Setting"
    },
    {
        title: "General-Setting"
    }
])
const tab = ref(tabs.value[0].title)
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

        <!-- <v-col cols="12" sm="12" lg="4" class="">
            <MyRanking></MyRanking>
        </v-col>
        <v-col col="12" sm="12" lg="8">
            <v-row>
                <v-col cols="12" sm="6" lg="6" class="">
                    <TheEarnings></TheEarnings>
                </v-col>
                <v-col cols="12" sm="6" lg="6" class="">
                    <MonthlyRevenue></MonthlyRevenue>
                </v-col>
                <v-col cols="12" sm="12" lg="12">
                    <BaseCard heading="V-model" style="height: 270px;" class="overflow-auto">

                    </BaseCard>
                </v-col>
            </v-row>
        </v-col> -->

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
            <BaseCard :heading="$t('My-Settings')">
                <v-tabs v-model="tab" background-color="secondary" class="d-flex align-center" center-active>
                    <v-tab v-for="(tabinfo, index) in tabs">{{  $t(tabinfo.title) }}</v-tab>
                </v-tabs>
                <v-card-text>
                    <v-window v-model="tab">
                        <v-window-item :value="tabs[0].title">
                            One
                        </v-window-item>

                        <v-window-item :value="tabs[1].title">
                            Two
                        </v-window-item>

                        <v-window-item :value="tabs[2].title">
                            Three
                        </v-window-item>
                    </v-window>
                </v-card-text>
            </BaseCard>
        </v-col>
    </v-row>
</template>
