<script setup lang="ts">
import { ref } from "vue";

const tags = ref([
  "Work",
  "Home",
  "Vacation",
  "Food",
  "Drawers"
]);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Multiple -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    Chip groups with multiple prop can have many values selected.
  </p>
  <v-sheet elevation="10" class="py-4 px-1 mt-6">
    <v-chip-group multiple active-class="primary--text">
      <v-chip v-for="tag in tags" :key="tag">
        {{ tag }}
      </v-chip>
    </v-chip-group>
  </v-sheet>
</template>

