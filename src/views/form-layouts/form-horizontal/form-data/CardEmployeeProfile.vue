<script setup lang="ts">
import { ref } from "vue";

const fname = ref("");
const uname = ref("");
const lname = ref("");
const nname = ref("");
const emailtext = ref("");
const cno = ref("");
const wname = ref("");
const bio = ref("");

</script>

<template>
  <v-card class="mb-7">
    <v-card-text class="pa-5">
      <h3 class="title text-h6">Employee Profile</h3>
      <h6 class="text-subtitle-1 text-grey-darken-1">This is the employee profile form with labels on left and form controls on right in one line two controls. To use add class form-horizontal to the form tag and give class row with form-group.</h6>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-text class="pa-5">
      <h3 class="title text-h6">Employee User</h3>
      <v-row>
        <v-col cols="12" lg="6">
          <v-row>
            <v-col cols="12" sm="3" class="d-flex align-center">
              <label>First Name</label>
            </v-col>
            <v-col cols="12" sm="9">
              <v-text-field
                v-model="fname"
                label="Enter First name"
                single-line
                hide-details
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="3" class="d-flex align-center">
              <label>Username</label>
            </v-col>
            <v-col cols="12" sm="9">
              <v-text-field
                v-model="uname"
                label="Enter Username"
                single-line
                hide-details
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" lg="6">
          <v-row>
            <v-col cols="12" sm="3" class="d-flex align-center">
              <label>Last Name</label>
            </v-col>
            <v-col cols="12" sm="9">
              <v-text-field
                v-model="fname"
                label="Enter Last name"
                hide-details
                single-line
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="3" class="d-flex align-center">
              <label>Nick Name</label>
            </v-col>
            <v-col cols="12" sm="9">
              <v-text-field
                v-model="nname"
                label="Enter Nick name"
                single-line
                hide-details
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-text class="pa-5">
      <h3 class="title text-h6">Contact Info & Bio</h3>
      <v-row>
        <v-col cols="12" lg="6">
          <v-row>
            <v-col cols="12" sm="3" class="d-flex align-center">
              <label>Email</label>
            </v-col>
            <v-col cols="12" sm="9">
              <v-text-field
                v-model="emailtext"
                label="Enter Email"
                single-line
                hide-details
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="3" class="d-flex align-center">
              <label>Contact No</label>
            </v-col>
            <v-col cols="12" sm="9">
              <v-text-field
                v-model="cno"
                label="Enter Contact no"
                single-line
                hide-details
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" lg="6">
          <v-row>
            <v-col cols="12" sm="3" class="d-flex align-center">
              <label>Website</label>
            </v-col>
            <v-col cols="12" sm="9">
              <v-text-field
                v-model="wname"
                label="http://"
                single-line
                hide-details
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="3" class="d-flex align-center">
              <label>Bio</label>
            </v-col>
            <v-col cols="12" sm="9">
              <v-text-field
                v-model="bio"
                label="Enter Bio"
                single-line
                hide-details
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider></v-divider>
    <div class="pa-5 text-right">
      <v-btn color="secondary" class="text-capitalize mr-2">Save</v-btn>
      <v-btn color="primary" class="text-capitalize" dark>Cancel</v-btn>
    </div>
  </v-card>
</template>