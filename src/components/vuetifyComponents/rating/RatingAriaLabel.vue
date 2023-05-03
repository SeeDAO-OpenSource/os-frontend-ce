<script setup lang="ts">
import { ref } from "vue";

const rating = ref(4);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Aria labels -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    Provide a label to assistive technologies for each item.
  </p>
  <div class="d-flex flex-wrap gap-2 mt-6">
    <v-rating
      v-model="rating"
      item-aria-label="custom icon label text {0} of {1}"
    ></v-rating>
  </div>
</template>

