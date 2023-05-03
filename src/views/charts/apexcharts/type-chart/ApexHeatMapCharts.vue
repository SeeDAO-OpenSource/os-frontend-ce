<script setup lang="ts">
import { heatMapChart } from "../ApexChartsData";
import BaseCard from "@/components/BaseCard.vue";
</script>

<template>
  <BaseCard heading="Heat Map Chart">
    <apexchart
      type="heatmap"
      height="350"
      :options="heatMapChart.chartOptions"
      :series="heatMapChart.series"
    ></apexchart>
  </BaseCard>
</template>
