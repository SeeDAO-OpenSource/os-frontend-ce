<script setup lang="ts">
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Color -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    You can set the colors of the progresss bar using the props color and background-color.
  </p>
  <div class="d-flex flex-wrap gap-2 mt-6">
    <v-progress-linear
      model-value="15"
      background-color="pink lighten-3"
      color="pink lighten-1"
    ></v-progress-linear>
    <br />
    <v-progress-linear
      model-value="30"
      background-color="blue-grey"
      color="lime"
    ></v-progress-linear>
    <br />
    <v-progress-linear
      model-value="45"
      background-color="success"
      color="error"
    ></v-progress-linear>
  </div>
</template>

