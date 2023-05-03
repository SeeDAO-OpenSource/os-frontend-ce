<script setup lang="ts">
import { columnChart } from "../ApexChartsData";
import BaseCard from "@/components/BaseCard.vue";
</script>
<template>
  <BaseCard heading="Column Chart">
    <apexchart
      type="bar"
      height="350"
      :options="columnChart.chartOptions"
      :series="columnChart.series"
    ></apexchart>
  </BaseCard>
</template>
