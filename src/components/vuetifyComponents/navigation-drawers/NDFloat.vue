<script setup lang="ts">
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Float -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    By default, a navigation drawer has a 1px right border that separates it
    from content.
  </p>
  <v-card class="mt-6" max-height="300">
    <v-layout>
      <v-navigation-drawer
        floating
        permanent
      >
        <v-list
          density="compact"
          nav
        >
          <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>
</template>

