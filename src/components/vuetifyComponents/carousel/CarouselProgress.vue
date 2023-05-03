<script setup lang="ts">
import { ref } from "vue";

const slides = ref(["First", "Second", "Third", "Fourth", "Fifth"]);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Progress -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-card>
    <v-carousel class="theme-carousel" height="350" hide-delimiters progress="primary">
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet height="100%">
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">{{ slide }} Slide</div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

