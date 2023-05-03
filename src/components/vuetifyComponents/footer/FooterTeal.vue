<script setup lang="ts">
import { ref } from "vue";

const icons = ref([
  "mdi-facebook",
  "mdi-twitter",
  "mdi-linkedin",
  "mdi-instagram",
]);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Teal  -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-footer class="d-flex flex-column">
    <div class="bg-teal d-flex w-100 align-center px-4">
      <strong class="text-white"
        >Get connected with us on social networks!</strong
      >

      <v-spacer></v-spacer>

      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="plain"
        color="white"
        size="small"
      ></v-btn>
    </div>

    <div class="px-4 py-2 bg-black text-white text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div>
  </v-footer>
</template>
