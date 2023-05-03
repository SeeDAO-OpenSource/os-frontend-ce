<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- error -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      The <code>selection</code> slot can be used to customize the way selected
      values are shown in the input. This is great when you want something like
      <code>foo (+20 others)</code> or don't want the selection to occupy
      multiple lines.
    </p>
    <div class="mt-4">
     <v-select
      v-model="value"
      :items="items"
      label="Select Item"
      multiple
    >
      <template v-slot:selection="{ item, index }">
        <v-chip v-if="index < 2">
          <span>{{ item }}</span>
        </v-chip>
        <span
          v-if="index >= 2"
          class="text-grey text-caption align-self-center"
        >
          (+{{ value.length - 2 }} others)
        </span>
      </template>
    </v-select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const items = ref(["foo", "bar", "fizz", "buzz", "fizzbuzz", "foobar"]);
const value = ref(["foo", "bar", "fizz"]);
</script>
