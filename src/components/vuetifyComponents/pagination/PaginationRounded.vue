<script setup lang="ts">
import { ref } from "vue";
const page = ref(1);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Rounded -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    The rounded prop allows you to render pagination buttons with alternative styles.
  </p>
   <div class="text-center mt-6">
    <v-pagination
      v-model="page"
      :length="4"
      rounded="circle"
    ></v-pagination>

    <v-pagination
      v-model="page"
      :length="4"
      rounded="0"
    ></v-pagination>
  </div>
</template>

