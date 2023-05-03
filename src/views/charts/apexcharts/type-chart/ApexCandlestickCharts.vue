<script setup lang="ts">
import { candlestickChart } from "../ApexChartsData";
import BaseCard from "@/components/BaseCard.vue";
</script>
<template>
  <BaseCard heading="Candle Chart">
    <apexchart
      type="candlestick"
      height="350"
      :options="candlestickChart.chartOptions"
      :series="candlestickChart.series"
    ></apexchart>
  </BaseCard>
</template>
