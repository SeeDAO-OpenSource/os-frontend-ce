<script setup lang="ts">
import { ref } from "vue";
const ex7 = ref("red");
</script>

<template>
  <div>
    <v-alert
      icon="mdi-alert-outline"
      variant="tonal"
      density="comfortable"
      type="info"
      class="mb-4 caption pa-3"
      >Form Action at mulitple space top,bottom and left,right.</v-alert
    >
    <h6 class="text-subtitle-1 text-grey-darken-1">
      To use add class .action-form at which side you want to add buttons.
    </h6>
    <v-row class="mt-3">
      <v-col cols="12">
        <v-text-field label="Full Name" variant="outlined"></v-text-field>
        <v-text-field label="Title" variant="outlined"></v-text-field>
        <v-text-field label="Company Name" variant="outlined"></v-text-field>
        <v-text-field label="Email" variant="outlined"></v-text-field>
        <v-text-field label="Contact no" variant="outlined"></v-text-field>
        <v-radio-group v-model="ex7" column class="mb-0">
          <label>Existing Customer</label>
          <v-radio label="Yes" color="info" value="yes" class="mt-2"></v-radio>
          <v-radio label="No" color="info" value="no"></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>

    <div class="pb-5 border-top">
      <v-btn color="primary" class="mr-2 text-capitalize">Save</v-btn>
      <v-btn color="secondary" class="text-capitalize" dark>Cancel</v-btn>
    </div>
  </div>
</template>


