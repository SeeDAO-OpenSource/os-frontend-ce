<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- SelectionControlsSwitchArray -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <div class="mt-4">
      <p>{{ people }}</p>
      <v-switch v-model="people" label="John" value="John"></v-switch>
      <v-switch v-model="people" label="Jacob" value="Jacob"></v-switch>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const people = ref(["john"]);
</script>
