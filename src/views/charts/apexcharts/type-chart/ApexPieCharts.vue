<script setup lang="ts">
import { pieChart } from "../ApexChartsData";
import BaseCard from "@/components/BaseCard.vue";
</script>

<template>
  <BaseCard heading="Pie Chart">
    <apexchart
      type="pie"
      height="350"
      :options="pieChart.chartOptions"
      :series="pieChart.series"
    ></apexchart>
  </BaseCard>
</template>
