<script setup lang="ts">
import { ref } from "vue";
const interest = ref(["Desiging", "Development", "Marketing"]);
const budget = ref(["Less then $5000", "$5000 - $10000"]);
const rules = ref([
  (v: string | any[]) => v.length <= 25 || "Max 25 characters",
]);
</script>

<template>
  <div>
    <v-alert
      icon="mdi-alert-outline"
      variant="tonal"
      density="comfortable"
      type="info"
      class="mb-4 caption pa-3"
      >Form Action at left ending of the form.</v-alert
    >
    <h6 class="text-subtitle-1 text-grey-darken-1">
      To use add form actions on top of the form add a div with .action-form
      class to ending of the form. To set a side of the button use .text-right
      or .text-left as per requirement.
    </h6>

    <v-card-text class="pa-5 border-bottom">
      <form>
        <v-row class="mt-3">
          <v-col cols="12">
            <v-text-field label="Issue Title" variant="outlined"></v-text-field>
            <v-text-field label="Opened By" variant="outlined"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" lg="6">
            <v-text-field
              label="Date Opened"
              type="date"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" lg="6">
            <v-text-field
              label="Date Fixed"
              type="date"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-select
              :items="interest"
              label="Priority"
              class="mt-0 pt-0"
              variant="outlined"
            ></v-select>
            <v-select
              :items="budget"
              label="Status"
              variant="outlined"
            ></v-select>
            <v-textarea
              counter
              variant="outlined"
              label="About Project"
              rows="2"
              :rules="rules"
            ></v-textarea>
          </v-col>
        </v-row>
      </form>
    </v-card-text>
    <div class="pa-5 border-top">
      <v-btn color="primary" class="mr-2 text-capitalize">Save</v-btn>
      <v-btn color="secondary" class="text-capitalize" dark>Cancel</v-btn>
    </div>
  </div>
</template>


