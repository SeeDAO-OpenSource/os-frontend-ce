<script setup lang="ts">
import { radarChart } from "../ApexChartsData";
import BaseCard from "@/components/BaseCard.vue";
</script>

<template>
  <BaseCard heading="Radar Chart">
    <apexchart
      type="radar"
      height="300"
      :options="radarChart.chartOptions"
      :series="radarChart.series"
    ></apexchart>
  </BaseCard>
</template>
