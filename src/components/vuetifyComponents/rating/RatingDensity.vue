<script setup lang="ts">
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Density -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    Control the space occupied by v-rating items using the density prop.
  </p>
  <div class="d-flex flex-column align-center justify-center mt-6">
    <v-rating class="ma-2" :model-value="3" density="default"></v-rating>

    <v-rating class="ma-2" :model-value="3" density="comfortable"></v-rating>

    <v-rating class="ma-2" :model-value="3" density="compact"></v-rating>
  </div>
</template>

