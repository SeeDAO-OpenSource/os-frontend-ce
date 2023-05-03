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
  <!-- Custom Arrow -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-card height="350">
    <v-carousel height="350" show-arrows hide-delimiter-background>
      <template v-slot:prev="{ props }">
        <v-btn variant="flat" color="primary" @click="props.onClick"
          >Previous slide</v-btn
        >
      </template>
      <template v-slot:next="{ props }">
        <v-btn variant="flat" color="secondary" @click="props.onClick"
          >Next slide</v-btn
        >
      </template>
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="350">
          <div class="d-flex fill-height justify-center mt-12 align-center">
            <div class="text-h3">{{ slide }} Slide</div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>
