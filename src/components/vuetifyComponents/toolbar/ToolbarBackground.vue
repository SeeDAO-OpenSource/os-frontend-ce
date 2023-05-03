<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Background -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      Toolbars can display a background as opposed to a solid color using the
      src prop. This can be modified further by using the img slot and providing
      your own v-img component.
    </p>
    <div class="mt-6">
      <v-toolbar
        dark
        prominent
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
        <v-app-bar-nav-icon color="inherit"></v-app-bar-nav-icon>

        <v-toolbar-title>Vuetify</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon color="inherit">
          <v-icon>mdi-export</v-icon>
        </v-btn>
      </v-toolbar>
    </div>
  </div>
</template>

