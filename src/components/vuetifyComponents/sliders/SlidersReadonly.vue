<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- SlidersReadonly -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      You cannot interact with readonly sliders, but they look as ordinary ones.
    </p>
    <div class="mt-4">
      <v-slider readonly label="Readonly" value="30"></v-slider>
    </div>
  </div>
</template>
