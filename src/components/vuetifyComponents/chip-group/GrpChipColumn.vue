<script setup lang="ts">
import { ref } from "vue";

const tags = ref([
  "Work",
  "Home Improvement",
  "Vacation",
  "Food",
  "Drawers",
  "Shopping",
  "Art",
  "Tech",
  "Creative Writing",
]);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Column -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    Chip groups with column prop can wrap their chips.
  </p>
  <v-sheet elevation="10" rounded="xl" class="mt-6">
    <v-sheet class="pa-3 primary text-right" dark rounded="t-xl">
      <v-btn icon>
        <v-icon>mdi-content-save-cog-outline</v-icon>
      </v-btn>

      <v-btn class="ml-2" icon>
        <v-icon>mdi-check-bold</v-icon>
      </v-btn>
    </v-sheet>

    <div class="pa-4">
      <v-chip-group active-class="primary--text" column>
        <v-chip v-for="tag in tags" :key="tag">
          {{ tag }}
        </v-chip>
      </v-chip-group>
    </div>
  </v-sheet>
</template>

