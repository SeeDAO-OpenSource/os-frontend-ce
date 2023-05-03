<script setup lang="ts">
import { ref } from "vue";

const selection = ref("08");
const sizes = ref(["04", "06", "08", "10", "12", "14"]);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Product -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-card>
    <v-card-title>
      <h2 class="text-h5">Shirt Blouse</h2>
      <v-spacer></v-spacer>
      <span class="text-h6">$44.50</span>
    </v-card-title>
    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <span class="subheading">Select size</span>

      <v-chip-group
        v-model="selection"
        active-class="deep-purple--text text--accent-4"
        mandatory
      >
        <v-chip v-for="size in sizes" :key="size" :value="size">
          {{ size }}
        </v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn block variant="flat" color="secondary">
        Add to Cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

