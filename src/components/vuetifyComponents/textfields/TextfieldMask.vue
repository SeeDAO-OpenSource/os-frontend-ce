<script setup lang="ts">
import { ref } from "vue";

const mask = ref("####-####-####-####");
const value = ref("4444444444444444");
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TextfieldMask -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      You can add masking functionality using a 3rd party library such as
      vue-the-mask.
    </p>
    <div class="mt-4">
      <v-card-text>
        <v-text-field v-model="mask" label="Mask"></v-text-field>
      </v-card-text>
      <v-card-text>
        <v-text-field v-model="value" label="Value"></v-text-field>
      </v-card-text>
    </div>
  </div>
</template>
