<script setup lang="ts">
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Unique Layout  -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-container class="bg-grey-lighten-5">
    <v-row>
      <v-col cols="12" md="8">
        <v-sheet class="pa-2" outlined tile> .col-12 .col-md-8 </v-sheet>
      </v-col>
      <v-col cols="6" md="4">
        <v-sheet class="pa-2" outlined tile> .col-6 .col-md-4 </v-sheet>
      </v-col>
    </v-row>

    <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
    <v-row>
      <v-col v-for="n in 3" :key="n" cols="6" md="4">
        <v-sheet class="pa-2" outlined tile> .col-6 .col-md-4 </v-sheet>
      </v-col>
    </v-row>

    <!-- Columns are always 50% wide, on mobile and desktop -->
    <v-row>
      <v-col v-for="n in 2" :key="n" cols="6">
        <v-sheet class="pa-2" outlined tile> .col-6 </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
