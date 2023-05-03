<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Nested  -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-container class="bg-grey-lighten-5">
    <v-row class="">
      <v-col cols="8">
        <v-sheet class="pa-2 ma-2"> Level 1: .v-col-8 </v-sheet>

        <v-row no-gutters class="bg-red">
          <v-col cols="8">
            <v-sheet class="pa-2 ma-2"> Level 2: .v-col-8 </v-sheet>
          </v-col>

          <v-col cols="4">
            <v-sheet class="pa-2 ma-2"> Level 2: .v-col-4 </v-sheet>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="4">
        <v-sheet class="pa-2 ma-2"> Level 1: .v-col-4 </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
