<script setup lang="ts">
import { bubbleChart } from "../ApexChartsData";
import BaseCard from "@/components/BaseCard.vue";
</script>
<template>
  <BaseCard heading="Bar Chart">
    <apexchart
      type="bubble"
      height="350"
      :options="bubbleChart.chartOptions"
      :series="bubbleChart.series"
    ></apexchart>
  </BaseCard>
</template>
