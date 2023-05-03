<script setup lang="ts">
import { ref } from "vue";

const sticky = ref(false);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Line -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      You can optionally turn on the sticky prop to ensure that the content is pinned to the top of the screen.
    </p>
    <div class="mt-6">
      <v-card class="overflow-auto mx-auto" max-height="300" width="448">
        <v-toolbar color="primary">
          <v-toolbar-title>My Document</v-toolbar-title>

          <v-spacer></v-spacer>

          <div>
            <v-switch
              v-model="sticky"
              label="Sticky Banner"
              hide-details
            ></v-switch>
          </div>
        </v-toolbar>

        <v-banner :sticky="sticky" lines="one">
          <template v-slot:text>
            We can't save your edits while you are in offline mode.
          </template>

          <template v-slot:actions>
            <v-btn color="secondary"> Go Online </v-btn>
          </template>
        </v-banner>

        <v-card-text class="bg-grey-lighten-4">
          <v-sheet class="mx-auto" height="300"></v-sheet>
        </v-card-text>

        <v-footer class="justify-center" color="primary">
          End of Content
        </v-footer>
      </v-card>
    </div>
  </div>
</template>
