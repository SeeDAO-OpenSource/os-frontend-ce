<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Default Slot -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      The <code>v-avatar</code> default slot will accept the
      <code>v-icon</code> component, an image, or text. Mix and match these with
      other props to create something unique.
    </p>
    <div class="mt-4 text-center">
      <v-row justify="space-around">
        <v-avatar color="info">
          <v-icon icon="mdi-account-circle"></v-icon>
        </v-avatar>

        <v-avatar>
          <v-img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
          ></v-img>
        </v-avatar>

        <v-avatar color="red">
          <span class="text-white text-h5">CJ</span>
        </v-avatar>
      </v-row>
    </div>
  </div>
</template>

