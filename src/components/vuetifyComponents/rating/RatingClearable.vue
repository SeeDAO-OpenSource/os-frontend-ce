<script setup lang="ts">
import {ref} from "vue";

const rating = ref(3);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Clearable -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    Clicking on a current rating value can reset the rating by using clearable prop.
  </p>
  <div class="d-flex flex-wrap gap-2 mt-6">
    <v-rating
      v-model="rating"
      clearable
    ></v-rating>
  </div>
</template>

