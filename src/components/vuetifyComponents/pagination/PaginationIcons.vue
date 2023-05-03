<script setup lang="ts">
import { ref } from "vue";
const page = ref(1);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Icons -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    Previous and next page icons can be customized with the prev-icon and
    next-icon props.
  </p>
  <div class="text-center mt-6">
    <v-pagination
      v-model="page"
      :length="4"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
    ></v-pagination>
  </div>
</template>

