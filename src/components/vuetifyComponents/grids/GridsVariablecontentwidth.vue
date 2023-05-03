<script setup lang="ts">
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Variable content width  -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-container class="bg-grey-lighten-5">
    <v-row class="mb-6" justify="center" no-gutters>
      <v-col lg="2">
        <v-sheet class="pa-2" outlined tile> 1 of 3 </v-sheet>
      </v-col>
      <v-col md="auto">
        <v-sheet class="pa-2" outlined tile> Variable width content </v-sheet>
      </v-col>
      <v-col lg="2">
        <v-sheet class="pa-2" outlined tile> 3 of 3 </v-sheet>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <v-sheet class="pa-2" outlined tile> 1 of 3 </v-sheet>
      </v-col>
      <v-col md="auto">
        <v-sheet class="pa-2" outlined tile> Variable width content </v-sheet>
      </v-col>
      <v-col lg="2">
        <v-sheet class="pa-2" outlined tile> 3 of 3 </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
