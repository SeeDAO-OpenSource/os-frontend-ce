<script setup lang="ts"></script>

<template>
  <v-card class="position-relative overflow-hidden">
    <img
      src="@/assets/images/background/welcome-bg2-2x-svg.svg"
      class="bg-img-1"
    />
    <v-card-text>
      <h2 class="title text-h6 overlay-title font-weight-medium">Congratulation Julia</h2>
      <h2 class="title text-h5 mt-4 font-weight-bold d-flex align-end">
        $39,358
        <span
          class="text-subtitle-1 ml-2 d-flex align-center font-weight-medium"
          ><vue-feather type="arrow-up-left" size="18"></vue-feather>+9%</span
        >
      </h2>
      <v-btn color="primary" class="mt-8"> Download </v-btn>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.overlay-title {
  position: relative;
  z-index: 1;
}
</style>