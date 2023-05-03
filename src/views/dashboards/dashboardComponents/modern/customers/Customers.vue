<script setup lang="ts">
import { ref, onMounted } from "vue";
import { CustomerChart } from "./CustomersData";

const elementVisible = ref(false);

onMounted(() => {
  setTimeout(() => (elementVisible.value = true), 10);
});

</script>

<template>
  <v-card class="position-relative bg-primary">
    <v-card-text>
      <h2 class="title text-h6 font-weight-medium text-white">Customers</h2>
      <div class="mt-4" v-show="elementVisible">
        <apexchart
          type="line"
          height="55px"
          :options="CustomerChart.chartOptions"
          :series="CustomerChart.series"
        ></apexchart>
      </div>
      <h2 class="title text-h5 text-white mt-6 font-weight-medium d-flex align-end">
        $39,358
        <span class="text-subtitle-1 ml-2 d-flex align-center font-weight-medium"
          ><vue-feather type="arrow-up-left" size="18"></vue-feather>+9 this week</span
        >
      </h2>
    </v-card-text>
  </v-card>
</template>
