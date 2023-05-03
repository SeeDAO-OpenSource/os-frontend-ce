<script setup lang="ts"></script>

<template>
  <v-card class="mb-7">
    <v-card-text class="pa-5 border-bottom">
      <h3 class="title text-h6">Input groups</h3>
      <h6 class="text-subtitle-1 text-grey-darken-1">All with vuetify element attributes</h6>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-text class="pa-5 border-bottom">
      <v-text-field
        filled
        background-color="transparent"
        label="Username"
        prepend-inner-icon="mdi-pencil"
      ></v-text-field>
      <v-text-field
        filled
        background-color="transparent"
        label="Recepaint's name"
        append-icon="mdi-pencil"
      ></v-text-field>
      <v-text-field
        filled
        background-color="transparent"
        label="Username"
        prepend-inner-icon="mdi-currency-usd"
      ></v-text-field>
    </v-card-text>
  </v-card>
</template>
