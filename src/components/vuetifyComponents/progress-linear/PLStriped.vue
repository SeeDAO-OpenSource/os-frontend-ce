<script setup lang="ts">
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Striped -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    This applies a striped background over the value portion of the
    v-progress-linear. This prop has no effect when using inderminate.
  </p>
  <div class="d-flex flex-wrap gap-2 mt-6">
    <v-progress-linear
      model-value="10"
      color="light-blue"
      height="10"
      striped
    ></v-progress-linear>
    <br />
    <v-progress-linear
      model-value="20"
      color="light-green darken-4"
      height="10"
      striped
    ></v-progress-linear>
    <br />
    <v-progress-linear
      model-value="45"
      height="10"
      striped
      color="lime"
    ></v-progress-linear>
    <br />
    <v-progress-linear
      model-value="60"
      height="10"
      striped
      color="deep-orange"
    ></v-progress-linear>
  </div>
</template>

