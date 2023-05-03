<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- error -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      Custom props can be passed directly to <code>v-menu</code> using
      <code>menuProps</code> prop. In this example menu is force directed to top
      and shifted to top.
    </p>
    <div class="mt-4">
      <v-select
        :items="items"
        label="Label"
      ></v-select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const items = ref(["Foo", "Bar", "Fizz", "Buzz"]);
</script>
