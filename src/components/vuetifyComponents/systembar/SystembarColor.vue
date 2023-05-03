<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Color -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      You can optionally change the color of the v-system-bar by using the color
      prop.
    </p>
    <div class="mt-6">
      <v-layout style="height: 50px">
        <v-system-bar color="primary">
          <v-icon icon="mdi-wifi-strength-4" class="ml-2"></v-icon>

          <v-icon icon="mdi-signal-cellular-outline" class="ml-2"></v-icon>

          <v-icon icon="mdi-battery" class="ml-2"></v-icon>

          <span class="ml-2">08:30</span>
        </v-system-bar>
      </v-layout>

      <v-layout style="height: 50px">
        <v-system-bar color="secondary">
          <v-icon icon="mdi-wifi-strength-2" class="ml-2"></v-icon>

          <v-icon icon="mdi-signal-cellular-outline" class="ml-2"></v-icon>

          <v-icon icon="mdi-battery" class="ml-2"></v-icon>

          <span class="ml-2">18:30</span>
        </v-system-bar>
      </v-layout>

      <v-layout style="height: 50px">
        <v-system-bar color="warning">
          <v-icon icon="mdi-wifi-strength-3" class="ml-2"></v-icon>

          <v-icon icon="mdi-signal-cellular-outline" class="ml-2"></v-icon>

          <v-icon icon="mdi-battery" class="ml-2"></v-icon>

          <span class="ml-2">13:24</span>
        </v-system-bar>
      </v-layout>
    </div>
  </div>
</template>

