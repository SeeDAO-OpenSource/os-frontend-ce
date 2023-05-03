<script setup lang="ts">
import { ref } from "vue";

const bars = ref([
  { class: "primary", dark: true },
  { class: "elevation-0" },
]);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Variations -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      A v-toolbar has multiple variations that can be applied with themes and
      helper classes. These range from light and dark themes, colored and
      transparent.
    </p>
    <div class="mt-6">
      <v-row>
        <v-col
          v-for="(bar, i) in bars"
          :key="i"
          cols="12"
          sm="12"
          md="6"
          class="my-4"
        >
          <v-card color="grey lighten-1" flat height="200px">
            <v-toolbar :color="bar.class" :dark="bar.dark">
              <v-app-bar-nav-icon color="inherit"></v-app-bar-nav-icon>
              <v-toolbar-title>Title</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon color="inherit">
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
              <v-btn icon color="inherit">
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon color="inherit">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

