<script setup lang="ts">
import { ref } from "vue";

const value = ref(10);
const value2 = ref([20, 40]);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- SlidersVertical -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      You can use <code>vertical</code> to switch sliders to a vertical
      orientation. If you need to change the height of the slider, use css.
    </p>
    <div class="mt-4">
      <v-slider v-model="value" vertical label="Regular"></v-slider>
      <v-range-slider v-model="value2" vertical label="Range"></v-range-slider>
      <v-slider direction="vertical"></v-slider>
    </div>
  </div>
</template>
