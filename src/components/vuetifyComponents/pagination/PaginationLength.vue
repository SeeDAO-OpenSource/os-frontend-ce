<script setup lang="ts">
import { ref } from "vue";
const page = ref(1);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Length -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    Using the length prop you can set the length of v-pagination, if the number
    of page buttons exceeds the parent container, it will truncate the list.
  </p>
  <div class="text-center mt-6">
      <v-row justify="center">
        <v-col cols="12">
          <v-container class="max-width">
            <v-pagination
              v-model="page"
              :length="15"
            ></v-pagination>
          </v-container>
        </v-col>
      </v-row>
  </div>
</template>

