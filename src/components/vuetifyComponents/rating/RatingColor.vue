<script setup lang="ts">
import {ref} from "vue";

const rating = ref(3);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Color -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    The v-rating component can be colored as you want, you can set both selected
    and not selected colors.
  </p>
  <div class="d-flex flex-wrap gap-2 mt-6">
    <v-rating
      v-model="rating"
      bg-color="orange-lighten-1"
      color="blue"
    ></v-rating>
  </div>
</template>

