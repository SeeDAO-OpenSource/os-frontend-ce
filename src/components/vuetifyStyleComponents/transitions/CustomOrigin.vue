<script setup lang="ts">
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Custom Origin -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1 mb-6">
    Programmatically control the transition origin with a simple prop.
  </p>
  <v-menu transition="scale-transition" origin="center center">
    <template v-slot:activator="{ props }">
      <v-btn dark color="primary" v-bind="props"> Scale Transition </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="n in 5" :key="n" @click="() => {}">
        <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
