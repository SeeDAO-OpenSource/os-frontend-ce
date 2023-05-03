<script setup lang="ts">
import {ref} from "vue";

 const value1 = ref([30, 60]);
 const value2 = ref([30, 60]);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- SlidersRange -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">Range sliders.</p>
    <div class="mt-4">
      <v-subheader>Default range slider</v-subheader>
      <v-card-text>
        <v-range-slider v-model="value1"></v-range-slider>
      </v-card-text>

      <v-subheader>Disabled range slider</v-subheader>
      <v-card-text>
        <v-range-slider v-model="value2" disabled></v-range-slider>
      </v-card-text>
    </div>
  </div>
</template>
