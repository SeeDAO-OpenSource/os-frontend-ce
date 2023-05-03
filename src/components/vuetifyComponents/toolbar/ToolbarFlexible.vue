<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Flexible -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      In this example we offset our card onto the extended content area of a
      toolbar using the extended prop.
    </p>
    <div class="mt-6">
      <v-card flat>
        <v-toolbar color="primary" dark extended flat>
          <v-app-bar-nav-icon color="inherit"></v-app-bar-nav-icon>
        </v-toolbar>

        <v-card class="mx-auto" max-width="700" style="margin-top: -64px">
          <v-toolbar flat>
            <v-toolbar-title class="grey--text"> Title </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon color="inherit">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon color="inherit">
              <v-icon>mdi-apps</v-icon>
            </v-btn>

            <v-btn icon color="inherit">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-toolbar>

          <v-divider></v-divider>

          <v-card-text style="height: 100px"></v-card-text>
        </v-card>
      </v-card>
    </div>
  </div>
</template>

