<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- FileInputs Validation -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      Similar to other inputs, you can use the
      <span class="grey--text text--darken-4 font-weight-bold">rules</span> prop
      to can create your own custom validation parameters.
    </p>
    <div class="mt-4">
      <v-file-input
        :rules="rules"
        accept="image/png, image/jpeg, image/bmp"
        placeholder="Pick an avatar"
        prepend-icon="mdi-camera"
        label="Avatar"
      ></v-file-input>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const rules = ref([
  (value: { size: number }) =>
    !value || value.size < 2000000 || "Avatar size should be less than 2 MB!",
]);
</script>
