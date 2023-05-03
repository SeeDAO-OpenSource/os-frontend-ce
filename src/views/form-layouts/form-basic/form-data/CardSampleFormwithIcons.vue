
<script setup lang="ts"></script>

<template>
  <v-card class="mb-7">
    <v-card-text class="pa-5 border-bottom">
      <h3 class="title text-h6">Sample Form with the Icons</h3>
      <h6 class="text-subtitle-1 text-grey-darken-1">All with vuetify element attributes</h6>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-text class="pa-5 border-bottom">
      <v-text-field
        outlined
        label="User Name"
        placeholder="Username"
        prepend-inner-icon="mdi-account"
      ></v-text-field>
      <v-text-field
        outlined
        label="Email address"
        placeholder="Email"
        prepend-inner-icon="mdi-email"
      ></v-text-field>
      <v-text-field outlined label="Password" placeholder="Password" prepend-inner-icon="mdi-lock"></v-text-field>
      <v-text-field
        outlined
        label="Confirm Password"
        placeholder="Confirm Password"
        prepend-inner-icon="mdi-lock"
        hide-details
      ></v-text-field>
      <v-checkbox label="Remember me" hide-details></v-checkbox>
      <div class="mt-4">
        <v-btn color="success" class="text-capitalize mr-2">Save</v-btn>
        <v-btn color="black" class="text-capitalize" dark>Cancel</v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>
