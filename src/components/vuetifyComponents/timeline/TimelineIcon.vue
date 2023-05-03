<script setup lang="ts">
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Icon -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    Insert avatars into dots with use of the icon slot and v-avatar.
  </p>
  <div class="text-center mt-4">
    <v-timeline>
      <v-timeline-item size="large">
        <template v-slot:icon>
          <v-avatar>
            <img src="https://i.pravatar.cc/64" />
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <span>Tus eu perfecto</span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="text-h5"> Lorem ipsum </v-card-title>
          <v-card-text
            >Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
            scaevola imperdiet nec ut, sed euismod convenire principes at. Est
            et nobis iisque percipit, an vim zril disputando voluptatibus, vix
            an salutandi sententiae.</v-card-text
          >
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

