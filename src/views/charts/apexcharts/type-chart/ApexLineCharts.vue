<script setup lang="ts">
import { lineChartSimple } from "../ApexChartsData";
import BaseCard from "@/components/BaseCard.vue";
</script>
<template>
  <BaseCard heading="Line Chart">
    <apexchart
      type="line"
      height="350"
      :options="lineChartSimple.chartOptions"
      :series="lineChartSimple.series"
    ></apexchart>
  </BaseCard>
</template>
