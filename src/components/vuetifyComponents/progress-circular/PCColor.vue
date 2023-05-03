<script setup lang="ts">
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Color -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    Alternate colors can be applied to v-progress-circular using the color prop.
  </p>
  <div class="d-flex flex-wrap gap-2 mt-6">
    <v-progress-circular
      model-value="100"
      color="blue-grey"
    ></v-progress-circular>

    <v-progress-circular
      model-value="80"
      color="deep-orange lighten-2"
    ></v-progress-circular>

    <v-progress-circular model-value="60" color="brown"></v-progress-circular>

    <v-progress-circular model-value="40" color="lime"></v-progress-circular>

    <v-progress-circular
      model-value="20"
      color="indigo darken-2"
    ></v-progress-circular>
  </div>
</template>

