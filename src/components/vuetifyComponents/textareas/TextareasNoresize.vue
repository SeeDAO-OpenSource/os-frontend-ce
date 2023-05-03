<script setup lang="ts">
import { ref } from "vue";
const value = ref(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, !"
);
</script>
<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TextareasNoresize -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      <code>v-textarea</code>'s have the option to remain the same size
      regardless of their content's size, using the <code>no-resize</code> prop.
    </p>
    <div class="mt-4">
      <v-textarea
      label="Text"
      no-resize
      rows="1"
      :model-value="value"
    ></v-textarea>
    </div>
  </div>
</template>
