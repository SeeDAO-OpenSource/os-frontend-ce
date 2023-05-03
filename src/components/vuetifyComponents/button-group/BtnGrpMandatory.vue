<script setup lang="ts">
import { ref } from "vue";

const toggle = ref(undefined);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Mandatory -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    A v-btn-toggle with the mandatory prop will always have a value.
  </p>
  <div class="d-flex align-center flex-column mt-6 bg-grey-lighten-4 pa-6">
    <v-btn-toggle v-model="toggle" color="primary" mandatory>
      <v-btn icon="mdi-format-align-left" value="left"></v-btn>
      <v-btn icon="mdi-format-align-center" value="center"></v-btn>
      <v-btn icon="mdi-format-align-right" value="right"></v-btn>
      <v-btn icon="mdi-format-align-justify" value="justify"></v-btn>
    </v-btn-toggle>
    <pre class="pt-2">{{ toggle }}</pre>
  </div>
</template>

