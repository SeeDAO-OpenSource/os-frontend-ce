<script setup lang="ts">
import { ref } from "vue";
import { WeeklyStats } from "./WeeklyStatsData";

const items = ref([
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me 2" },
]);

const statsData = ref([
  {
    color: "primary",
    icon: "shopping-cart",
    title: "Top Sales",
    desc: "Johnathan Doe",
    percent: 68,
  },
  {
    color: "warning",
    icon: "star",
    title: "Best Seller",
    desc: "MaterialPro Admin",
    percent: 45,
  },
  {
    color: "success",
    icon: "message-square",
    title: "Most Commented",
    desc: "Ample Admin",
    percent: 10,
  },
]);
</script>


<template>
  <v-card class="overflow-hidden">
    <v-card-text>
      <div class="d-flex align-center">
        <h2 class="title text-h6 font-weight-medium">Weekly Stats</h2>
        <v-spacer></v-spacer>
        <div class="ml-auto">
          <v-menu bottom left>
            <template v-slot:activator="{ props }">
              <v-btn icon color="inherit" v-bind="props">
                <vue-feather type="more-horizontal" size="20"></vue-feather>
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
      <!-- lists -->
      <div class="px-0" v-for="(item, i) in statsData" :key="i">
        <div class="d-flex align-center py-4">
          <div class>
            <v-btn
              :color="item.color"
              icon
              size="small"
              elevation="0"
              class="mr-3"
            >
              <vue-feather :type="item.icon" size="18"></vue-feather>
            </v-btn>
          </div>
          <div class="ml-2">
            <h4 class="font-weight-bold text-subtitle-1 title">
              {{ item.title }}
            </h4>
            <span
              class="
                text-grey-darken-1
                text-subtitle-2
                d-block
                text-truncate
                font-weight-regular
              "
              >{{ item.desc }}</span
            >
          </div>
          <div class="ml-auto">
            <v-chip label size="small" class="font-weight-bold" color="inherit"> +{{ item.percent }}% </v-chip>
          </div>
        </div>
      </div>
    </v-card-text>
    <div class="position-relative">
      <apexchart
        type="area"
        height="120px"
        :options="WeeklyStats.chartOptions"
        :series="WeeklyStats.series"
      ></apexchart>
    </div>
  </v-card>
</template>
