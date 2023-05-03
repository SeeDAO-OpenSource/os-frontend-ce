<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Order First Last  -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-container class="bg-grey-lighten-5">
    <v-row no-gutters>
      <v-col order="last">
        <v-sheet class="pa-2 ma-2"> First, but last </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2"> Second, but unordered </v-sheet>
      </v-col>
      <v-col order="first">
        <v-sheet class="pa-2 ma-2"> Third, but first </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
