<script setup lang="ts">
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Indeterminate -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    Using the indeterminate prop, a v-progress-circular continues to animate
    indefinitely.
  </p>
  <div class="d-flex flex-wrap gap-2 mt-6">
    <v-progress-circular indeterminate color="primary"></v-progress-circular>

    <v-progress-circular indeterminate color="red"></v-progress-circular>

    <v-progress-circular indeterminate color="purple"></v-progress-circular>

    <v-progress-circular indeterminate color="green"></v-progress-circular>

    <v-progress-circular indeterminate color="amber"></v-progress-circular>
  </div>
</template>

