<script setup lang="ts">
import { ref } from "vue";

const drawer = ref(false);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Float -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    A temporary drawer sits above its application and uses a scrim (overlay) to darken the background.
  </p>
  <v-card class="mt-6" max-height="300">
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        temporary
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
          title="John Leider"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <div style="height: 300px" class="d-flex justify-center align-center w-100">
        <div >
          <v-btn
            color="primary"
            @click.stop="drawer = !drawer"
          >
            Toggle
          </v-btn>
        </div>
      </div>
    </v-layout>
  </v-card>
</template>

