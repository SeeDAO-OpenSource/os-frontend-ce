<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- error -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      You can use <code>dense</code> prop to reduce the field height and lower
      max height of list items.
    </p>
    <div class="mt-4">
      <div class="d-flex flex-column">
    <v-select
      :items="items"
      label="Compact"
      density="compact"
    ></v-select>

    <v-select
      :items="items"
      label="Comfortable"
      density="comfortable"
    ></v-select>

    <v-select
      :items="items"
      label="Default"
    ></v-select>
  </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const items = ref(["Foo", "Bar", "Fizz", "Buzz"]);
</script>
