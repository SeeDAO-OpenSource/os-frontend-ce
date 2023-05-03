<script setup lang="ts">
import { ref } from "vue";
const show = ref(false);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Visibility -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    Tooltip visibility can be programmatically changed using v-model.
  </p>
  <div class="mt-4 d-flex gap-2">
    <v-btn @click="show = !show"> toggle </v-btn>

    <v-tooltip v-model="show" top>
      <template v-slot:activator="{ props }">
        <v-btn class="ml-5" icon v-bind="props">
          <v-icon> mdi-cart </v-icon>
        </v-btn>
      </template>
      <span>Programmatic tooltip</span>
    </v-tooltip>
  </div>
</template>

