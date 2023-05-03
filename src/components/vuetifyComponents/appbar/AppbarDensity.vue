<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Dencity -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      You can make app-bar dense. A dense app bar has lower height than regular
      one.
    </p>
    <div class="mt-6">
      <v-card class="mx-auto" max-width="448" max-height="270">
        <v-layout>
          <v-app-bar color="primary" density="compact">
            <template v-slot:prepend>
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </template>

            <v-toolbar-title>Photos</v-toolbar-title>

            <template v-slot:append>
              <v-btn icon="mdi-dots-vertical"></v-btn>
            </template>
          </v-app-bar>

          <v-main>
            <v-container fluid>
              <v-row dense>
                <v-col v-for="n in 8" :key="n" cols="3">
                  <v-sheet color="grey-lighten-2" height="96"></v-sheet>
                </v-col>
              </v-row>
            </v-container>
          </v-main>
        </v-layout>
      </v-card>
    </div>
  </div>
</template>
