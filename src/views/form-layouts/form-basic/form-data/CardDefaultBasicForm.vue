<script setup lang="ts">
import { ref } from "vue";

const ftext = ref("Artisanal kale");
const searchtext = ref("How do I shoot web");
const emailtext = ref("bootstrap@example.com");
const urltext = ref("https://getbootstrap.com");
const teltext = ref("1-(555)-555-5555");
const password = ref("");
const show1 = ref(false);
const numbertext = ref(false);
const datetimetext = ref("2008-05-13T22:33:00");
const datetext = ref("2018-05-13");
const monthtext = ref("1999-08");
const weektext = ref("2011-W33");
const timetext = ref("22:33:00");
const items3 = ref(["India", "Canada", "United Kingdom"]);
const colortext = ref("#563d7c");

const rules = ref({
  required: (value: string) => !!value || "Required.",
  min: (v: string) => v.length >= 8 || "Min 8 characters",
  emailMatch: () => "The email and password you entered don't match",
});
</script>

<template>
  <v-card class="mb-7">
    <v-card-text class="pa-5 border-bottom">
      <h3 class="title text-h6">
        Default Basic Forms
      </h3>
      <h6 class="text-subtitle-1 text-grey-darken-1">
        All with vuetify element attributes
      </h6>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-text class="pa-5">
      <v-row>
        <v-col cols="12" sm="2" class="align-center d-flex">
          <label class="font-weight-medium subtitle-1">Text</label>
        </v-col>
        <v-col cols="12" sm="10">
          <v-text-field
            v-model="ftext"
            hide-details
            background-color="transparent"
            filled
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="2" class="align-center d-flex">
          <label class="font-weight-medium subtitle-1">Search</label>
        </v-col>
        <v-col cols="12" sm="10">
          <v-text-field
            v-model="searchtext"
            type="search"
            hide-details
            background-color="transparent"
            filled
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="2" class="align-center d-flex">
          <label class="font-weight-medium subtitle-1">Email</label>
        </v-col>
        <v-col cols="12" sm="10">
          <v-text-field
            v-model="emailtext"
            type="search"
            hide-details
            filled
            background-color="transparent"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="2" class="align-center d-flex">
          <label class="font-weight-medium subtitle-1">URL</label>
        </v-col>
        <v-col cols="12" sm="10">
          <v-text-field
            v-model="urltext"
            type="url"
            hide-details
            filled
            background-color="transparent"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="2" class="align-center d-flex">
          <label class="font-weight-medium subtitle-1">Telephone</label>
        </v-col>
        <v-col cols="12" sm="10">
          <v-text-field
            v-model="teltext"
            type="url"
            hide-details
            filled
            background-color="transparent"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="2" class="align-center d-flex">
          <label class="font-weight-medium subtitle-1">Password</label>
        </v-col>
        <v-col cols="12" sm="10">
          <v-text-field
            v-model="password"
            filled
            background-color="transparent"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            hide-details
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            placeholder="Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="2" class="align-center d-flex">
          <label class="font-weight-medium subtitle-1">Number</label>
        </v-col>
        <v-col cols="12" sm="10">
          <v-text-field
            v-model="numbertext"
            type="number"
            hide-details
            filled
            background-color="transparent"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="2" class="align-center d-flex">
          <label class="font-weight-medium subtitle-1">Date and time</label>
        </v-col>
        <v-col cols="12" sm="10">
          <v-text-field
            v-model="datetimetext"
            type="datetime-local"
            hide-details
            filled
            background-color="transparent"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="2" class="align-center d-flex">
          <label class="font-weight-medium subtitle-1">Date</label>
        </v-col>
        <v-col cols="12" sm="10">
          <v-text-field
            v-model="datetext"
            type="date"
            hide-details
            filled
            background-color="transparent"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="2" class="align-center d-flex">
          <label class="font-weight-medium subtitle-1">Month</label>
        </v-col>
        <v-col cols="12" sm="10">
          <v-text-field
            v-model="monthtext"
            type="month"
            hide-details
            filled
            background-color="transparent"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="2" class="align-center d-flex">
          <label class="font-weight-medium subtitle-1">Week</label>
        </v-col>
        <v-col cols="12" sm="10">
          <v-text-field
            v-model="weektext"
            type="week"
            hide-details
            filled
            background-color="transparent"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="2" class="align-center d-flex">
          <label class="font-weight-medium subtitle-1">Time</label>
        </v-col>
        <v-col cols="12" sm="10">
          <v-text-field
            v-model="timetext"
            type="time"
            hide-details
            filled
            background-color="transparent"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="2" class="align-center d-flex">
          <label class="font-weight-medium subtitle-1">Select</label>
        </v-col>
        <v-col cols="12" sm="10">
          <v-select
            :items="items3"
            filled
            background-color="transparent"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="2" class="align-center d-flex">
          <label class="font-weight-medium subtitle-1">Color</label>
        </v-col>
        <v-col cols="12" sm="10">
          <v-text-field
            v-model="colortext"
            type="color"
            hide-details
            filled
            background-color="transparent"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
