<script setup lang="ts">
import { ref } from "vue";

const rating = ref(3);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Hover -->
  <!-- ----------------------------------------------------------------------------- -->

  <div class="d-flex flex-wrap gap-2 mt-6">
    <v-rating v-model="rating" hover></v-rating>
  </div>
</template>

