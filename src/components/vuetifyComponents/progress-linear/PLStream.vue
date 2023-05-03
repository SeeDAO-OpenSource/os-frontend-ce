<script setup lang="ts">
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Stream -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    The stream property works with buffer-value to convey to the user that there
    is some action taking place.
  </p>
  <div class="d-flex flex-wrap gap-2 mt-6">
    <v-progress-linear
      color="red lighten-2"
      buffer-value="0"
      stream
    ></v-progress-linear>
    <br />
    <v-progress-linear
      model-value="20"
      color="teal"
      buffer-value="0"
      stream
    ></v-progress-linear>
    <br />
    <v-progress-linear
      buffer-value="50"
      stream
      color="cyan"
    ></v-progress-linear>
    <br />
    <v-progress-linear
      model-value="40"
      buffer-value="60"
      stream
      color="orange"
    ></v-progress-linear>
  </div>
</template>

