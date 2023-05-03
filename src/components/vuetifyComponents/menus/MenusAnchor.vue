<script setup lang="ts">
import { ref } from "vue";

const items = ref([
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me 2" },
]);
const locations = ref(["top", "bottom", "start", "end", "center"]);
const location = ref<any>("end");
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Anchor -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    Menu can be offset relative to the activator by using the anchor prop.
  </p>
  <div class="text-center mt-4">
    <v-select v-model="location" :items="locations" label="Location"></v-select>
    <v-menu :location="location">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" dark v-bind="props"> Dropdown </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
