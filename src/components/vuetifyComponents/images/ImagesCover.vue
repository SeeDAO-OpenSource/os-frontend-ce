<script setup lang="ts">
import { ref } from "vue";

const width = ref(300);
const aspectRatio = ref(16 / 9);
const aspectRatios = ref([
  {
    title: "16/9",
    value: 16 / 9,
  },
  {
    title: "4/3",
    value: 4 / 3,
  },
  {
    title: "1/1",
    value: 1,
  },
]);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- cover -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    If the provided aspect ratio doesn’t match that of the actual image, the
    default behavior is to fill as much space as possible without cropping. To
    fill the entire available space use the cover prop.
  </p>
  <div class="d-flex justify-space-around align-center bg-grey-lighten-4">
    <div class="ma-4">
      <div class="text-subtitle-2">Default</div>
      <v-img
        class="bg-white"
        width="300"
        :aspect-ratio="1"
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      ></v-img>
    </div>

    <div class="ma-4">
      <div class="text-subtitle-2">Cover</div>
      <v-img
        class="bg-white"
        width="300"
        :aspect-ratio="1"
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        cover
      ></v-img>
    </div>
  </div>
</template>

