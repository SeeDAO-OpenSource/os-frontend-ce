<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- error -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <div class="mt-4">
      <v-card>

      <div class="d-flex pb-4">
        <v-checkbox-btn
          v-model="includeFiles"
          class="pr-2"
        ></v-checkbox-btn>
        <v-text-field
          label="Include files"
          hide-details
        ></v-text-field>
      </div>
      <div class="d-flex ">
        <v-checkbox-btn
          v-model="enabled"
          class="pr-2"
        ></v-checkbox-btn>
        <v-text-field
          :disabled="!enabled"
          hide-details
          label="I only work if you check the box"
        ></v-text-field>
      </div>

  </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const includeFiles = ref(true);
const enabled = ref(false);
</script>
