<script setup lang="ts">
import { ref } from "vue";

const rating = ref(3.5);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Icons -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">You can use custom icons.</p>
  <div class="d-flex align-center justify-center flex-column mt-6">
    <v-rating
      v-model="rating"
      empty-icon="mdi-circle-outline"
      full-icon="mdi-circle"
      half-icon="mdi-circle-half"
      half-increments
      hover
    ></v-rating>
  </div>
</template>

