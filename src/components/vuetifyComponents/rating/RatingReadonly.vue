<script setup lang="ts">
import {ref} from "vue";

const rating = ref(3);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Readonly -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    For ratings that are not meant to be changed you can use readonly prop.
  </p>
  <div class="d-flex flex-wrap gap-2 mt-6">
    <v-rating
      v-model="rating"
      readonly
    ></v-rating>
  </div>
</template>

