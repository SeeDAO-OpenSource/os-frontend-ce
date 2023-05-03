<script setup lang="ts">
import { radialBarChart } from "../ApexChartsData";
import BaseCard from "@/components/BaseCard.vue";
</script>

<template>
  <BaseCard heading="Radial Chart">
    <apexchart
      type="radialBar"
      height="350"
      :options="radialBarChart.chartOptions"
      :series="radialBarChart.series"
    ></apexchart>
  </BaseCard>
</template>
