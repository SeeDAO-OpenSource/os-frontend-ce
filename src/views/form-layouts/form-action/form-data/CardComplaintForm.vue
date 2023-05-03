<script setup lang="ts">
import { ref } from "vue";
const value = ref("Message");
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
      class="my-2 mb-3 caption pa-3"
      >Form Action at center align of the form</v-alert
    >
    <h6 class="text-subtitle-1 text-grey-darken-1">
      To use add form actions on top of the form add a div with .action-form
      class to the ending of the form. To set a side of the button use
      .text-center as per requirement.
    </h6>
    <v-row class="mt-3">
      <v-col cols="12">
        <v-text-field label="Company" variant="outlined"></v-text-field>
        <v-text-field label="Employee Name" variant="outlined"></v-text-field>
        <v-text-field
          label="Date of Complaint"
          type="date"
          variant="outlined"
        ></v-text-field>
        <v-text-field
          label="Supervisor's Name"
          variant="outlined"
        ></v-text-field>
        <v-textarea
          counter
          rows="2"
          variant="outlined"
          label="Complaint"
          :rules="rules"
        ></v-textarea>
        <v-textarea
          label="Signature"
          rows="1"
          variant="outlined"
          prepend-inner-icon="mdi-currency-usd"
        ></v-textarea>
      </v-col>
    </v-row>

    <div class="pa-5 border-top text-center">
      <v-btn color="primary" class="mr-2 text-capitalize">Save</v-btn>
      <v-btn color="secondary" class="text-capitalize" dark>Cancel</v-btn>
    </div>
  </div>
</template>


