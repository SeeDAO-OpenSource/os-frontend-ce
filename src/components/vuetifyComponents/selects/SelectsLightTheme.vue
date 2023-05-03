<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- error -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      A standard single select has a multitude of configuration options.
    </p>
    <div class="mt-4">
      <v-row>
        <v-col cols="12" sm="6">
          <v-select
            v-model="value"
            :items="items"
            attach
            chips
            label="Chips"
            multiple
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            v-model="value"
            :items="items"
            filled
            chips
            label="Chips"
            multiple
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            v-model="value"
            :items="items"
            chips
            label="Chips"
            multiple
            outlined
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            v-model="value"
            :items="items"
            chips
            label="Chips"
            multiple
            solo
          ></v-select>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const items = ref(["Foo", "Bar", "Fizz", "Buzz"]);
const value = ref(["Foo", "Bar", "Fizz", "Buzz"]);
</script>
