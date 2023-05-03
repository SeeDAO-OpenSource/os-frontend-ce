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
  <!-- Indigo  -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-footer
    class="bg-indigo-lighten-1 text-white text-center d-flex flex-column"
  >
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        color="white"
        :icon="icon"
        variant="text"
      ></v-btn>
    </div>

    <div class="text-white pt-0">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris
      cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id
      ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.
      Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada.
      Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin.
      Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </div>

    <v-divider></v-divider>

    <div class="text-white">
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div>
  </v-footer>
</template>
