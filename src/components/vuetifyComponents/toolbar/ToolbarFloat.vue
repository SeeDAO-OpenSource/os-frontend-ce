<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Float -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      A floating toolbar is turned into an inline element that only takes up as
      much space as needed. This is particularly useful when placing toolbars
      over content.
    </p>
    <div class="mt-6">
      <v-card
        class="pa-4"
        flat
        height="90px"
        img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg"
      >
        <v-toolbar dense floating>
          <v-text-field
            hide-details
            prepend-icon="mdi-magnify"
            single-line
          ></v-text-field>

          <v-btn icon color="inherit">
            <v-icon>mdi-crosshairs-gps</v-icon>
          </v-btn>

          <v-btn icon color="inherit">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>
      </v-card>
    </div>
  </div>
</template>

