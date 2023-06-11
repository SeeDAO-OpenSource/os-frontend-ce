<script setup lang="ts">
import { ref, onMounted } from "vue";
import { FirstClassData } from "./FirstClassData";
const elementVisible = ref(false);

onMounted(() => {
  setTimeout(() => (elementVisible.value = true), 10);
});
</script>

<template>
  <!-- ------------------------------------ -->
  <!-- html -->
  <!-- ------------------------------------ -->
  <v-card class="overflow-hidden w-100">
    <v-card-text class="pa-7">
      <v-row>
      <div class="d-flex align-start" style="padding-bottom: 20px;">
        <div>
          <h2 class="title font-weight-medium">第1期低代码GPT共学营</h2>
          <span class="text-subtitle-1 text-grey-darken-1 font-weight-medium">TIME: 2023.06.05~2023.06.11</span>

        </div>
        <v-spacer></v-spacer>
      </div> 
      </v-row> 
      <v-row>

       <!-- lists -->
      <div class="px-0" v-for="(item, i) in FirstClassData.statsData" :key="i" >
        <div class="d-flex align-center py-4" style="margin-bottom: 20px; margin-right: 20px;">
          <div class>
            <v-btn
              :color="item.color"
              icon
              size="small"
              elevation="0"
              class="mr-3"
            >
              <vue-feather :type="item.icon" size="18"></vue-feather>
            </v-btn>
          </div>
          <div class="ml-2">
            <h4 class="font-weight-bold text-subtitle-1 title">
              {{ item.title }}
            </h4>
            <span
              class="
                text-grey-darken-1
                text-subtitle-2
                d-block
                text-truncate
                font-weight-regular
              "
              >{{ item.desc }}</span
            >
          </div>
          <div class="ml-auto">
            <v-chip label size="small" class="font-weight-bold" color="inherit"> {{ item.number }} </v-chip>
          </div>
        </div>
      </div>
        <div class="ml-auto">
          <v-btn icon class="btn-custom-sm" color="secondary" fab small>
            <vue-feather type="shopping-bag" class="white--text"></vue-feather>
          </v-btn>
        </div>
      </v-row>
  
    </v-card-text>
    <!-- <div v-show="elementVisible">
      <apexchart
        type="area"
        height="75px"
        :options="FirstClassData.chartOptions"
        :series="FirstClassData.series"
      ></apexchart>
    </div> -->
  </v-card>
</template>


