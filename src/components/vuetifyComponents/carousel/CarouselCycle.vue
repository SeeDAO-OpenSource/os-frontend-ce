<script setup lang="ts">
import { ref } from "vue";

const colors = ref([
  "green",
  "secondary",
  "yellow darken-4",
  "red lighten-2",
  "orange darken-1",
]);

const slides = ref(["First", "Second", "Third", "Fourth", "Fifth"]);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Cycle -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-card>
    <v-carousel
      cycle
      height="350"
      hide-delimiter-background
      show-arrows="hover"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">{{ slide }} Slide</div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>
