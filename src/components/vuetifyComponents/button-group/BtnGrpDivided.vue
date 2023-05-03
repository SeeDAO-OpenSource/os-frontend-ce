<script setup lang="ts">
import { ref } from "vue";

const toggle = ref(null);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Divided -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    For simple text, use the content property to display a value on the badge.
  </p>
  <div class="d-flex align-center flex-column mt-6 bg-grey-lighten-4 pa-6">
    <v-btn-toggle v-model="toggle" divided>
      <v-btn icon="mdi-format-align-left"></v-btn>
      <v-btn icon="mdi-format-align-center"></v-btn>
      <v-btn icon="mdi-format-align-right"></v-btn>
      <v-btn icon="mdi-format-align-justify"></v-btn>
    </v-btn-toggle>
  </div>
</template>

