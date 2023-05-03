<script setup lang="ts">
import { ref } from "vue";

const toggle = ref([]);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Multiple -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    A v-btn-toggle with the multiple prop will allow a user to select multiple
    return values as an array.
  </p>
  <div class="d-flex align-center flex-column mt-6 bg-grey-lighten-4 pa-6">
    <v-btn-toggle v-model="toggle" multiple>
      <v-btn icon="mdi-format-align-left" value="left"></v-btn>
      <v-btn icon="mdi-format-align-center" value="center"></v-btn>
      <v-btn icon="mdi-format-align-right" value="right"></v-btn>
      <v-btn icon="mdi-format-align-justify" value="justify"></v-btn>
    </v-btn-toggle>

    <pre class="pt-2">{{ toggle }}</pre>
  </div>
</template>

