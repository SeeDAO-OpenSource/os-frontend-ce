<script setup lang="ts">
import { ref } from "vue";
import { MyRanking } from "./RankingData";

const items = ref([
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me 2" },
]);

const statsData = ref([
  {
    color: "warning",
    icon: "star",
    title: "My-Score",
    desc: "Johnathan Doe",
    rank: 68,
    total: 10890,
  },
  {
    color: "success",
    icon: "play",
    title: "My-Tasks",
    desc: "MaterialPro Admin",
    rank: 68,
    total: 2000,
  },
  {
    color: "secondary",
    icon: "file-text",
    title: "提案参与率",
    desc: "Ample Admin",
    rank: 5,
    total: 112,
  },
]);
</script>


<template>
  <v-card class="overflow-hidden">
    <v-card-text>
      <div class="d-flex align-center">
        <h2 class="title text-h6 font-weight-medium">{{ $t(MyRanking.series[0].name) }}</h2>
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
              {{ $t(item.title) }}
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
            <v-chip label size="small" class="font-weight-bold" color="inherit">{{ item.rank }}/{{ item.total }} </v-chip>
          </div>
        </div>
      </div>
    </v-card-text>
    <div class="position-relative">
      <apexchart
        type="area"
        height="120px"
        :options="MyRanking.chartOptions"
        :series="MyRanking.series"
      ></apexchart>
    </div>
  </v-card>
</template>
