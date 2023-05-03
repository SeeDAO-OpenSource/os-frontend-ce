<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RevenueChart } from "./RevenueUpdatesData";

const select = ref("March");
const items = ref(["March", "April", "May", "June"]);

const elementVisible = ref(false);

onMounted(() => {
  setTimeout(() => (elementVisible.value = true), 10);
});

</script>

<template>
  <v-card>
    <v-card-text>
      <div class="d-sm-flex align-start">
        <div>
          <h2 class="title text-h6 font-weight-medium">Revenue Updates</h2>
        </div>
        <v-spacer></v-spacer>
        <div class="ml-auto">
          <v-select
            v-model="select"
            :items="items"
            variant="outlined"
            dense
            hide-details
          ></v-select>
        </div>
      </div>
      <div v-show="elementVisible">
        <apexchart
          type="line"
          height="300px"
          :options="RevenueChart.chartOptions"
          :series="RevenueChart.series"
        ></apexchart>
      </div>
      <div class="d-flex justify-center">
        <div class="d-flex align-center text-primary px-2">
          <span class="text-overline">
            <i class="mdi mdi-brightness-1 mx-1"></i>
          </span>
          <span class="font-weight-regular">Earnings</span>
        </div>
        <div class="d-flex align-center px-2 text-secondary">
          <span class="text-overline">
            <i class="mdi mdi-brightness-1 mx-1"></i>
          </span>
          <span class="font-weight-regular">Expense</span>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>