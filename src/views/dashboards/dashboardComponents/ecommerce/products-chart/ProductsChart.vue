<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ProductsReportChart } from "./ProductsChart2Data";
import { ProductsChart } from "./ProductsChartData";

const elementVisible = ref(false);

onMounted(() => {
  setTimeout(() => (elementVisible.value = true), 10);
});
</script>

<template>
  <v-card>
    <v-card-text>
      <div class="d-sm-flex align-center mb-5">
        <h2 class="title text-h6 font-weight-medium">Products Performance</h2>
        <v-spacer></v-spacer>
        <div>
          <div class="d-flex align-center">
            <div class="d-flex align-center px-2">
              <span class="text-primary">
                <span class="overline">
                  <i class="mdi mdi-brightness-1 mx-1"></i>
                </span>
                <span class="font-weight-regular">Budget</span>
              </span>
            </div>
            <div class="d-flex align-center px-2">
              <span class="text-secondary">
                <span class="overline">
                  <i class="mdi mdi-brightness-1 mx-1"></i>
                </span>
                <span class="font-weight-regular">Expence</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <v-row>
        <v-col lg="4" cols="12">
          <h3 class="text-h5 title font-weight-medium mt-3">$93,438.78</h3>
          <span class="text-grey-darken-1 text-subtitle-2">Budget</span>

          <h3 class="text-h5 title font-weight-medium mt-6">$32,839</h3>
          <span class="text-grey-darken-1 text-subtitle-2">Expense</span>

          <!-- chart -->
          <div class="my-3" v-show="elementVisible"> 
            <apexchart
              type="line"
              height="30px"
              :options="ProductsReportChart.chartOptions"
              :series="ProductsReportChart.series"
            ></apexchart>
          </div>

          <v-btn color="secondary" class="mt-3">Download Report</v-btn>
        </v-col>
        <v-col lg="8">
          <div v-show="elementVisible">
            <apexchart
              type="bar"
              height="285px"
              :options="ProductsChart.chartOptions"
              :series="ProductsChart.series"
            ></apexchart>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>