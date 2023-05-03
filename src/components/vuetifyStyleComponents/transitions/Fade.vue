<script setup lang="ts">
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Fade -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1 mb-6">
    An example of the fade transition can be found on the Carousel component.
  </p>
  <v-menu transition="fade-transition">
      <template v-slot:activator="{ props }">
        <v-btn
          dark
          color="primary"
          v-bind="props"
        >
          Fade Transition
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="n in 5"
          :key="n"
        >
          <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
</template>
