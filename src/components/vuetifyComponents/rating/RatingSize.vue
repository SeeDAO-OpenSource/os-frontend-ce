<script setup lang="ts">
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Size -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    Utilize the same sizing classes available in v-icon or provide your own with
    the size prop.
  </p>
  <div class="d-flex flex-column align-center mt-6">
    <v-rating value="3" size="x-small"></v-rating>

    <v-rating value="3" size="small"></v-rating>

    <v-rating value="3"></v-rating>

    <v-rating value="3" size="large"></v-rating>

    <v-rating value="3" size="x-large"></v-rating>

    <v-rating value="3" size="72"></v-rating>
  </div>
</template>

