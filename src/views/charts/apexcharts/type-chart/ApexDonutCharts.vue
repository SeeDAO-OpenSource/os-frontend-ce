<script setup lang="ts">
import { donutChart } from "../ApexChartsData";
import BaseCard from "@/components/BaseCard.vue";
</script>

<template>
  <BaseCard heading="Dount Chart">
    <apexchart
      type="donut"
      height="350"
      :options="donutChart.chartOptions"
      :series="donutChart.series"
    ></apexchart>
  </BaseCard>
</template>
