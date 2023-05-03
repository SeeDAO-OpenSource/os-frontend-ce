<script setup lang="ts">
import { ref } from "vue";

const drawer = ref(false);
const group = ref(null);
const items = ref([
  {
    title: "Foo",
    value: "foo",
  },
  {
    title: "Bar",
    value: "bar",
  },
  {
    title: "Fizz",
    value: "fizz",
  },
  {
    title: "Buzz",
    value: "buzz",
  },
]);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Bottom drawer -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    Using the bottom prop, we are able to relocate our drawer on mobile devices
    to come from the bottom of the screen. This is an alternative style and only
    activates once the mobile-breakpoint is met.
  </p>
  <v-card class="mt-6" max-height="300">
    <v-layout>
      <v-app-bar color="primary" prominent>
        <v-app-bar-nav-icon color="white"
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>My files</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn variant="text" color="white" icon="mdi-magnify"></v-btn>

        <v-btn variant="text" color="white" icon="mdi-filter"></v-btn>

        <v-btn variant="text" color="white" icon="mdi-dots-vertical"></v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" bottom temporary>
        <v-list :items="items"></v-list>
      </v-navigation-drawer>

      <v-main>
        <v-card-text>
          The navigation drawer will appear from the bottom on smaller size
          screens.
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>
</template>

