<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Elevation -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-row justify="center">
    <v-col v-for="n in 25" :key="n" cols="auto">
      <v-card
        height="100"
        width="100"
        :class="[
          'd-flex justify-center align-center bg-secondary',
          `elevation-${n}`,
        ]"
      >
        <div>{{ n - 1 }}</div>
      </v-card>
    </v-col>
  </v-row>
</template>
