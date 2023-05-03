<script setup lang="ts"></script>
<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TextareasIcon -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      The <code>append-icon</code> and <code>prepend-icon</code> props help add
      context to <code>v-textarea</code>.
    </p>
    <div class="mt-4">
      <v-row>
        <v-col cols="12" sm="6">
          <v-textarea
            class="mx-2"
            label="prepend-icon"
            rows="1"
            prepend-icon="mdi-comment-text-outline"
          ></v-textarea>
        </v-col>
        <v-col cols="12" sm="6">
          <v-textarea
            append-icon="mdi-comment-text-outline"
            class="mx-2"
            label="append-icon"
            rows="1"
          ></v-textarea>
        </v-col>
        <v-col cols="12" sm="6">
          <v-textarea
            prepend-inner-icon="mdi-comment-text-outline"
            class="mx-2"
            label="prepend-inner-icon"
            rows="1"
          ></v-textarea>
        </v-col>
        <v-col cols="12" sm="6">
          <v-textarea
            append-outer-icon="mdi-comment-text-outline"
            class="mx-2"
            label="append-outer-icon"
            rows="1"
          ></v-textarea>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
