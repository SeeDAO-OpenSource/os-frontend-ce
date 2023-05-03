<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Prominent -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      Prominent toolbars increase the v-toolbar’s height to 128px and positions
      the v-toolbar-title towards the bottom of the container.
    </p>
    <div class="mt-6">
      <v-card color="grey lighten-4" flat height="145px" tile>
        <v-toolbar prominent extended>
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
    </div>
  </div>
</template>

