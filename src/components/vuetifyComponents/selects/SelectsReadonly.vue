<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- error -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      You cannot use read-only <code>v-select</code>, but it looks default.
    </p>
    <div class="mt-4">
      <v-select :items="items" readonly label="Read-only"></v-select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const items = ref(["Foo", "Bar", "Fizz", "Buzz"]);
</script>
