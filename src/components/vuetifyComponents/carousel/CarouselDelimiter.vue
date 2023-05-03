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
  <!-- Delimiter -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-card>
    
    <v-carousel
      :continuous="false"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-square"
      height="350"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%" tile>
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">{{ slide }} Slide</div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>
