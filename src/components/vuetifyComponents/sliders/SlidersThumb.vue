<script setup lang="ts">
import { ref } from "vue";

const satisfactionEmojis = ref([
  "😭",
  "😢",
  "☹️",
  "🙁",
  "😐",
  "🙂",
  "😊",
  "😁",
  "😄",
  "😍",
]);

const slider = ref(45);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- SlidersThumb -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      You can display a <code>thumb-label</code> while sliding or always. It It
      can have a custom color by setting <code>thumb-color</code> and a custom
      size with <code>thumb-size</code>. With <code>always-dirty</code> its
      color will never change, even when on <code>min</code> value.
    </p>
    <div class="mt-4">
      <div class="d-flex flex-column">
    <div>
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <v-slider
        v-model="slider"
        thumb-label
      ></v-slider>
    </div>

    <div>
      <div class="text-caption">
        Always show thumb label
      </div>
      <v-slider
        v-model="slider"
        thumb-label="always"
      ></v-slider>
    </div>

    <div>
      <div class="text-caption">
        Custom thumb size
      </div>
      <v-slider
        v-model="slider"
        :thumb-size="36"
        thumb-label="always"
      ></v-slider>
    </div>

    <div>
      <div class="text-caption">
        Custom thumb label
      </div>
      <v-slider
        v-model="slider"
        thumb-label="always"
      >
        <template v-slot:thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </v-slider>
    </div>
  </div>
    </div>
  </div>
</template>