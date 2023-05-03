<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Slots -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      Banners may have one or two text buttons that don’t stand out that much.
    </p>
    <div class="mt-6">
      <v-banner
        lines="one"
        icon="mdi-wifi-strength-alert-outline"
        color="warning"
      >
        <template v-slot:text> No Internet connection </template>

        <template v-slot:actions>
          <v-btn color="error"> Dismiss </v-btn>

          <v-btn color="secondary"> Retry </v-btn>
        </template>
      </v-banner>
    </div>
  </div>
</template>
