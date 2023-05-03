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
      >Form Action at Left ending of the form.</v-alert
    >
    <h6 class="text-subtitle-1 text-grey-darken-1">
      To use add form actions on bottom of the form add a div with .action-form
      class to ending the form.
    </h6>
    <v-card-text class="pa-3 mt-3">
      <h3 class="subtitle">Personal Info</h3>
      <form>
        <v-row class="mt-3">
          <v-col cols="12" sm="6" lg="6">
            <v-text-field label="First Name" variant="outlined"></v-text-field>
            <v-text-field label="Email" variant="outlined"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" lg="6">
            <v-text-field label="Last Name" variant="outlined"></v-text-field>
            <v-text-field label="Contact" variant="outlined"></v-text-field>
          </v-col>
        </v-row>
      </form>

      <h3 class="subtitle">Requirements</h3>
      <v-row class="mt-3">
        <v-col cols="12">
          <v-text-field label="Company" variant="outlined"></v-text-field>
        </v-col>
        <v-col class="12" sm="6" lg="6">
          <v-select
            :items="interest"
            label="Interested In"
            class="mt-0 pt-0"
            variant="outlined"
          ></v-select>
        </v-col>
        <v-col class="12" sm="6" lg="6">
          <v-select
            :items="budget"
            label="Budget"
            class="mt-0 pt-0"
            variant="outlined"
          ></v-select>
        </v-col>
        <v-col cols="12">
          <v-textarea
            counter
            label="About Project"
            rows="2"
            :rules="rules"
            variant="outlined"
          ></v-textarea>
        </v-col>
      </v-row>
    </v-card-text>
    <div class="pb-5 px-4">
      <v-btn color="primary" class="mr-2 text-capitalize">Save</v-btn>
      <v-btn color="secondary" class="text-capitalize" dark>Cancel</v-btn>
    </div>
  </div>
</template>


