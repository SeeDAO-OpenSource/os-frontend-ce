<script setup lang="ts">
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Scale -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1 mb-6">
    Many of Vuetify’s components contain a transition prop which allows you to specify your own.
  </p>
  <v-menu transition="scale-transition">
    <template v-slot:activator="{ props }">
      <v-btn dark color="primary" v-bind="props"> Scale Transition </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="n in 5" :key="n">
        <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
