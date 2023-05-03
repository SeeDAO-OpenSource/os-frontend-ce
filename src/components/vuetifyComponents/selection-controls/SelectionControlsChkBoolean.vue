<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- SelectionControlsChkBoolean -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <div class="mt-4">
      <v-checkbox
        v-model="checkbox1"
        :label="`Checkbox 1: ${checkbox1.toString()}`"
      ></v-checkbox>
      <v-checkbox
        v-model="checkbox2"
        :label="`Checkbox 2: ${checkbox2.toString()}`"
      ></v-checkbox>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const checkbox1 = ref(true);
const checkbox2 = ref(false);
</script>
