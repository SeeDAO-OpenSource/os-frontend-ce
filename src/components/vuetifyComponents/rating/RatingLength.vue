<script setup lang="ts">
import { ref } from "vue";

const rating = ref(2);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Length -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    Change the number of items by modifying the the length prop.
  </p>
  <div class="d-flex align-center justify-center flex-column mt-6">
    <v-rating v-model="rating" length="10"></v-rating>
  </div>
</template>

