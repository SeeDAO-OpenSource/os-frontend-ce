<script setup lang="ts">

</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- height -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    v-img will automatically grow to the size of its src, preserving the correct
    aspect ratio. You can limit this with the height and max-height props.
  </p>
  <v-container class="fill-height mt-6" fluid style="min-height: 434px">
    <v-fade-transition mode="out-in">
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-img
              src="https://picsum.photos/350/165?random"
              height="125"
              class="bg-grey-lighten-2"
            ></v-img>
            <v-card-title class="text-h6"> height </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card>
            <v-img
              src="https://picsum.photos/350/165?random"
              height="125"
              cover
              class="bg-grey-lighten-2"
            ></v-img>
            <v-card-title class="text-h6"> height with cover </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card>
            <v-img
              src="https://picsum.photos/350/165?random"
              max-height="125"
              class="bg-grey-lighten-2"
            ></v-img>
            <v-card-title class="text-h6"> max-height </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card>
            <v-img
              src="https://picsum.photos/350/165?random"
              max-height="125"
              cover
              class="bg-grey-lighten-2"
            ></v-img>
            <v-card-title class="text-h6"> max-height with cover </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-fade-transition>
  </v-container>
</template>

