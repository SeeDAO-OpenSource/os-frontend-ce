<script setup lang="ts">
import { ref, mergeProps } from "vue";
const items = ref([
  {
    id: 1,
    color: "info",
    icon: "mdi-information",
  },
  {
    id: 2,
    color: "error",
    icon: "mdi-alert-circle",
  },
]);
mergeProps();
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Single side -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    single-side positions all items to one side of the timeline. In this
    example, v-alert replaces the card to provide a different design.
  </p>
  <div class="text-center mt-4">
    <v-timeline side="end">
    <v-timeline-item
      v-for="item in items"
      :key="item.id"
      :dot-color="item.color"
      size="small"
    >
      <v-alert
        :value="true"
        :color="item.color"
        :icon="item.icon"
      >
        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
      </v-alert>
    </v-timeline-item>
  </v-timeline>
  </div>
</template>

