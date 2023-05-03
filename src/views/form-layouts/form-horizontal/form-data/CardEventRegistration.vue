<script setup lang="ts">
import { ref } from "vue";

const fname = ref("");
const cno = ref("");
const title = ref("");
const company = ref("");
const email = ref("");
const customer = ref("");
const wname = ref("");
const bio = ref("");

</script>

<template>
  <v-card class="mb-7">
    <v-card-text class="pa-5">
      <h3 class="title text-h6">Event Registration</h3>
      <h6 class="text-subtitle-1 text-grey-darken-1">This is the event registration form with labels on left and form controls on right in one line. To use add class form-horizontal to the form tag and give class row with form-group.</h6>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-text class="pa-5">
      <div class="mt-4">
        <v-row>
          <v-col cols="12" sm="2" class="d-flex align-center">
            <label>Full Name</label>
          </v-col>
          <v-col cols="12" sm="10">
            <v-text-field
              v-model="fname"
              label="Enter Full name"
              single-line
              hide-details
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="2" class="d-flex align-center">
            <label>Title</label>
          </v-col>
          <v-col cols="12" sm="10">
            <v-text-field
              v-model="title"
              label="Enter Title here"
              single-line
              hide-details
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="2" class="d-flex align-center">
            <label>Company</label>
          </v-col>
          <v-col cols="12" sm="10">
            <v-text-field
              v-model="company"
              label="Enter Company name here"
              single-line
              hide-details
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="2" class="d-flex align-center">
            <label>Email</label>
          </v-col>
          <v-col cols="12" sm="10">
            <v-text-field
              v-model="email"
              type="email"
              label="Enter Email here"
              single-line
              hide-details
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="2" class="d-flex align-center">
            <label>Contact No</label>
          </v-col>
          <v-col cols="12" sm="10">
            <v-text-field
              v-model="cno"
              type="tel"
              label="Enter Contact no here"
              single-line
              hide-details
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="2" class="d-flex align-center">
            <label>Existing Customer</label>
          </v-col>
          <v-col cols="12" sm="10">
            <v-radio-group v-model="customer" class="mb-0">
              <v-radio label="Yes" color="info" value="yes" class="mt-2"></v-radio>
              <v-radio label="No" color="info" value="no"></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
      </div>
    </v-card-text>
    <v-divider></v-divider>
    <div class="pa-5 text-right">
      <v-btn color="secondary" class="text-capitalize mr-2">Save</v-btn>
      <v-btn color="primary" class="text-capitalize" dark>Cancel</v-btn>
    </div>
  </v-card>
</template>
