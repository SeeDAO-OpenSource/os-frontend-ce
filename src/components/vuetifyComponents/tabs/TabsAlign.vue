<script setup lang="ts">
import { ref } from "vue";

const tab = ref(null);
const items = ref(["web", "shopping", "videos", "images", "news"]);
const text = ref(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Align -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      You can optionally change the color of the v-system-bar by using the color
      prop.
    </p>
    <div class="mt-6">
      <v-card>
        <v-toolbar color="primary">
          <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>

          <v-toolbar-title>Your Dashboard</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon color="white">mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon color="white">mdi-dots-vertical</v-icon>
          </v-btn>

          <template v-slot:extension>
            <v-tabs v-model="tab" align-with-title>
              <v-tab v-for="item in items" :key="item" :value="item">
                {{ item }}
              </v-tab>
            </v-tabs>
          </template>
        </v-toolbar>

        <v-window v-model="tab">
          <v-window-item v-for="item in items" :key="item" :value="item">
            <v-card flat>
              <v-card-text v-text="text"></v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
      </v-card>
    </div>
  </div>
</template>
