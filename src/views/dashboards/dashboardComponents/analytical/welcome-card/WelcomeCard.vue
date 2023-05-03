<script setup lang="ts"></script>
<template>
  <v-card>
    <img
      src="@/assets/images/background/welcome-bg2-2x-svg.svg"
      class="bg-img-1"
    />
    <v-card-text>
      <h3 class="h3 title overlay-title font-weight-medium mb-1">
        Hey John, <br />Download latest report
      </h3>
      <v-btn color="secondary" class="mt-4"> Download </v-btn>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.overlay-title {
  position: relative;
  z-index: 1;
}
</style>
