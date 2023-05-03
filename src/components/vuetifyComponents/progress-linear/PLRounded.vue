<script setup lang="ts">
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Buffer -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    The rounded prop is used to apply a border radius to the v-progress-linear
    component.
  </p>
  <div class="d-flex flex-wrap gap-2 mt-6">
    <v-progress-linear
      model-value="100"
      color="red darken-2"
      rounded
    ></v-progress-linear>
    <br />
    <v-progress-linear
      model-value="100"
      color="indigo"
      rounded
    ></v-progress-linear>
    <br />
    <v-progress-linear
      model-value="100"
      color="teal"
      rounded
    ></v-progress-linear>
    <br />
    <v-progress-linear
      model-value="100"
      color="cyan darken-2"
      rounded
    ></v-progress-linear>
  </div>
</template>

