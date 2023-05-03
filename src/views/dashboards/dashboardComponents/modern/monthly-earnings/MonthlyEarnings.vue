<script setup lang="ts">
import { ref, onMounted } from "vue";
import { MonthlyChart } from "./MonthlyEarningsData";

const select = ref("March");
const items = ref(["March", "April", "May", "June"]);

const elementVisible = ref(false);

onMounted(() => {
  setTimeout(() => (elementVisible.value = true), 10);
});

</script>

<template>
  <v-card class="mb-7 bg-secondary">
    <v-card-text>
      <h3 class="title text-h6 font-weight-medium text-white">Monthly Earnings</h3>
      <div class="mt-4" v-show="elementVisible">
        <apexchart
          type="bar"
          height="45px"
          :options="MonthlyChart.chartOptions"
          :series="MonthlyChart.series"
        ></apexchart>
      </div>
      <h2 class="title text-h5 text-white mt-6 font-weight-medium d-flex align-items-end">
        $39,358
        <span class="text-subtitle-1 ml-2 d-flex align-center font-weight-medium"
          ><vue-feather type="arrow-up-left" size="18"></vue-feather>+9 this week</span
        >
      </h2>
    </v-card-text>
  </v-card>
</template>
