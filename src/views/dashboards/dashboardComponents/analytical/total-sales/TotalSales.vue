<script setup lang="ts">
import { ref } from "vue";
import { TotalSales } from "./TotalSalesData";

const select = ref("March");
const items = ref(["March", "April", "May", "June"]);
</script>

<template>
  <!-- ------------------------------------ -->
  <!-- html -->
  <!-- ------------------------------------ -->
  <v-card>
    <v-card-text>
      <div class="d-flex align-center mb-5">
        <h2 class="title text-h6 font-weight-medium">Total Sales</h2>

        <div class="ml-auto">
          <v-select
            v-model="select"
            :items="items"
            hide-details
            variant="outlined"
            single-line
          ></v-select>
        </div>
      </div>
      <v-divider></v-divider>
      <div class="border-top mt-5 d-flex align-center">
        <h6 class="text-subtitle-1 text-grey-darken-1 font-weight-regular">
          Sales Yearly
        </h6>
        <div class="ml-auto">
          <h3 class="h3 title font-weight-bold">8,364,398</h3>
        </div>
      </div>
      <div class="mt-5 pt-5 position-relative">
        <apexchart
          type="donut"
          height="280px"
          :options="TotalSales.chartOptions"
          :series="TotalSales.series"
        ></apexchart>
        <vue-feather
          size="35"
          type="shopping-cart"
          class="text-grey-darken-1 total-sales-icon"
        ></vue-feather>
      </div>
      <div class="d-flex align-center justify-space-between mt-9">
        <div class="d-flex align-center px-2">
          <span>
            <span class="text-overline">
              <i class="mdi mdi-brightness-1 text-secondary mx-1"></i>
            </span>
            <span class="text-grey-darken-1 font-weight-medium mr-1">2021</span>
          </span>
        </div>
        <div class="d-flex align-center px-2">
          <span>
            <span class="text-overline">
              <i class="mdi mdi-brightness-1 text-primary mx-1"></i>
            </span>
            <span class="text-grey-darken-1 font-weight-medium mr-1">2020</span>
          </span>
        </div>
        <div class="d-flex align-center px-2">
          <span>
            <span class="text-overline">
              <i class="mdi mdi-brightness-1 text-warning mx-1"></i>
            </span>
            <span class="text-grey-darken-1 font-weight-medium mr-1"
              >2019
            </span>
          </span>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.total-sales-icon {
  position: absolute;
  left: 46%;
  top: 45%;
}
</style>
