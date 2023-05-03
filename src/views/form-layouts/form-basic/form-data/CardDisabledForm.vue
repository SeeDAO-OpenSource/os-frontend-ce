<script setup lang="ts">
import { ref } from "vue";

const checkbox2 = ref("");
const items = ref(["IT", "Blade Runner", "Thor"]);

</script>

<template>
  <v-card class="mb-7">
    <v-card-text class="pa-5 border-bottom">
      <h3 class="title text-h6">Disabled Form</h3>
      <h6 class="text-subtitle-1 text-grey-darken-1">All with vuetify element attributes</h6>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-text class="pa-5">
      <v-text-field label="Disabled input" disabled filled></v-text-field>
      <v-select :items="items" filled label="Input Select" disabled></v-select>
      <v-checkbox
        v-model="checkbox2"
        class="mt-2"
        label="Check this custom checkbox"
        hide-details
        disabled
      ></v-checkbox>
      <v-btn color="secondary" class="text-capitalize mt-4" disabled>Save</v-btn>
    </v-card-text>
  </v-card>
</template>
