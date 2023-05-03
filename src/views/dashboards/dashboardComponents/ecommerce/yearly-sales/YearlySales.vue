<script setup lang="ts">
import { ref, onMounted } from "vue";
import { YearlySalesChart } from "./YearlySalesData";

const elementVisible = ref(false);

onMounted(() => {
  setTimeout(() => (elementVisible.value = true), 10);
});
</script>

<template>
  <v-card>
    <v-card-text>
      <v-row>
        <v-col sm="6">
          <h3 class="text-h5 font-weight-medium title">43,246</h3>
          <span class="text-grey-darken-1 text-subtitle-1 font-weight-regular"
            >Yearly Sales</span
          >
          <div class="d-flex align-center justify-space-between mt-3">
            <span class="text-grey-darken-1 d-flex align-center">
              <span class="text-overline">
                <i class="mdi mdi-brightness-1 text-primary mx-1"></i>
              </span>
              <span class="font-weight-regular">2021</span>
            </span>
            <span class="text-grey-darken-1 d-flex align-center">
              <span class="text-overline">
                <i class="mdi mdi-brightness-1 text-secondary mx-1"></i>
              </span>
              <span class="font-weight-regular">2020</span>
            </span>
          </div>
          <div class="d-flex align-center justify-space-between">
            <span class="text-grey-darken-1 d-flex align-center">
              <span class="text-overline">
                <i class="mdi mdi-brightness-1 text-warning mx-1"></i>
              </span>
              <span class="font-weight-regular">2019</span>
            </span>
            <span class="text-grey-darken-1 d-flex align-center">
              <span class="text-overline">
                <i class="mdi mdi-brightness-1 text-grey-darken-1 mx-1"></i>
              </span>
              <span class="font-weight-regular">2018</span>
            </span>
          </div>
        </v-col>
        <v-col sm="6">
          <div v-show="elementVisible" class="position-relative">
            <apexchart
              type="donut"
              height="145px"
              :options="YearlySalesChart.chartOptions"
              :series="YearlySalesChart.series"
            ></apexchart>
            <vue-feather
              size="20"
              type="shopping-cart"
              class="text-grey-darken-1 center-icon"
            ></vue-feather>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style lang="scss">
.center-icon {
  position: absolute;
  left: 43%;
  top: 43%;
}
</style>