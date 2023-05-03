<script setup lang="ts">
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Reversed -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    Displays reversed progress. The component also has RTL support, such that a
    progress bar in right-to-left mode with reverse prop enabled will display
    left-to-right.
  </p>
  <div class="d-flex flex-wrap gap-2 mt-6">
    <v-progress-linear
      model-value="15"
      color="pink"
      reverse
    ></v-progress-linear>

    <br />

    <v-progress-linear color="lime" indeterminate reverse></v-progress-linear>

    <br />

    <v-progress-linear
      model-value="30"
      buffer-value="55"
      color="success"
      reverse
      streams
    ></v-progress-linear>

    <br />

    <p class="text-subtitle-1 text-grey-darken-1">
      In specific cases you may want progress to display in left-to-right mode
      regardless of the application direction (LTR or RTL):
    </p>

    <v-progress-linear
      model-value="15"
    ></v-progress-linear>
    
  </div>
</template>

