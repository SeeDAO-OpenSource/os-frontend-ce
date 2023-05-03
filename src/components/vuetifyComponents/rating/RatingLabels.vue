<script setup lang="ts">
import { ref } from "vue";

const rating = ref(4);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Labels -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    The v-rating component can display labels above or below each item.
  </p>
  <div class="d-flex align-center justify-center flex-column mt-6">
    <v-rating
      v-model="rating"
      class="ma-2"
      :item-labels="['sad', '', '', '', 'happy']"
      item-label-position="top"
    ></v-rating>

    <v-rating
      v-model="rating"
      class="ma-2"
      :item-labels="['sad', '', '', '', 'happy']"
      item-label-position="bottom"
    ></v-rating>
  </div>
</template>

