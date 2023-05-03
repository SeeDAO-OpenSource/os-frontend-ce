<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Vertical -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      Vertical dividers give you more tools for unique layouts.
    </p>
    <div class="mt-4">
      <v-toolbar color="secondary" dark>
        <v-toolbar-title>Title</v-toolbar-title>

        <v-divider class="mx-4" vertical></v-divider>

        <span class="subheading">My Home</span>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text> News </v-btn>

          <v-divider vertical></v-divider>

          <v-btn text> Blog </v-btn>

          <v-divider vertical></v-divider>

          <v-btn text> Music </v-btn>

          <v-divider vertical></v-divider>
        </v-toolbar-items>

        <v-app-bar-nav-icon color="inherit"></v-app-bar-nav-icon>
      </v-toolbar>
    </div>
  </div>
</template>