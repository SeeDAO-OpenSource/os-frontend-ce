<script setup lang="ts">
import { ref, onMounted } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import ApexLineCharts from "./type-chart/ApexLineCharts.vue";
import ApexColumnCharts from "./type-chart/ApexColumnCharts.vue";
import ApexLineAreaCharts from "./type-chart/ApexLineAreaCharts.vue";
import ApexBarCharts from "./type-chart/ApexBarCharts.vue";
import ApexCandlestickCharts from "./type-chart/ApexCandlestickCharts.vue";
import ApexMixedCharts from "./type-chart/ApexMixedCharts.vue";
import Apex3DBubbleCharts from "./type-chart/Apex3DBubbleCharts.vue";
import ApexScatterCharts from "./type-chart/ApexScatterCharts.vue";
import ApexHeatMapCharts from "./type-chart/ApexHeatMapCharts.vue";
import ApexDonutCharts from "./type-chart/ApexDonutCharts.vue";
import ApexPieCharts from "./type-chart/ApexPieCharts.vue";
import ApexRadialBarCharts from "./type-chart/ApexRadialBarCharts.vue";
import ApexRadarCharts from "./type-chart/ApexRadarCharts.vue";

const elementVisible = ref(false);

onMounted(() => {
  setTimeout(() => (elementVisible.value = true), 10);
});

const page = ref({ title: "Apex Charts" });
const breadcrumbs = ref([
  {
    text: "Charts",
    disabled: false,
    href: "#",
  },
  {
    text: "Apex Charts",
    disabled: true,
    href: "#",
  },
]);
</script>
<template>
  <BaseBreadcrumb
    :title="page.title"
    :breadcrumbs="breadcrumbs"
  ></BaseBreadcrumb>
  <v-row v-show="elementVisible">
    <v-col cols="12" sm="12" lg="6">
      <ApexLineCharts></ApexLineCharts>
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <ApexColumnCharts></ApexColumnCharts>
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <ApexLineAreaCharts></ApexLineAreaCharts>
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <ApexBarCharts></ApexBarCharts>
    </v-col>
    <v-col cols="12" sm="12">
      <ApexCandlestickCharts></ApexCandlestickCharts>
    </v-col>
    <v-col cols="12" sm="12">
      <ApexMixedCharts></ApexMixedCharts>
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <Apex3DBubbleCharts></Apex3DBubbleCharts>
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <ApexScatterCharts></ApexScatterCharts>
    </v-col>

    <v-col cols="12" sm="12">
      <ApexHeatMapCharts></ApexHeatMapCharts>
    </v-col>

    <v-col cols="12" sm="12" lg="6">
      <ApexDonutCharts></ApexDonutCharts>
    </v-col>

    <v-col cols="12" sm="12" lg="6">
      <ApexPieCharts></ApexPieCharts>
    </v-col>

    <v-col cols="12" sm="12" lg="6">
      <ApexRadialBarCharts></ApexRadialBarCharts>
    </v-col>

    <v-col cols="12" sm="12" lg="6">
      <ApexRadarCharts></ApexRadarCharts>
    </v-col>
  </v-row>
</template>
