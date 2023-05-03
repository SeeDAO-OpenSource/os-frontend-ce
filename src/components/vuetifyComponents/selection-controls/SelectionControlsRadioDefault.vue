<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- SelectionControlsRadioDefault -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      Radio-groups are by default mandatory. This can be changed with the
      <code>mandatory</code> prop.
    </p>
    <div class="mt-4">
      <p>{{ radios || "null" }}</p>
      <v-radio-group v-model="radios" :mandatory="false">
        <v-radio label="Radio 1" value="radio-1"></v-radio>
        <v-radio label="Radio 2" value="radio-2"></v-radio>
      </v-radio-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const radios = ref("radio-1");
</script>
