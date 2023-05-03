<script setup lang="ts">
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Buffer -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    Using the indeterminate prop, v-progress-linear continuously animates.
  </p>
  <div class="d-flex flex-wrap gap-2 mt-6">
    <v-progress-linear
      indeterminate
      color="yellow darken-2"
    ></v-progress-linear>
    <br />
    <v-progress-linear indeterminate color="green"></v-progress-linear>
    <br />
    <v-progress-linear indeterminate color="teal"></v-progress-linear>
    <br />
    <v-progress-linear indeterminate color="cyan"></v-progress-linear>
  </div>
</template>

