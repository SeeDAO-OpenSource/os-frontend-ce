<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- error -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      A multi-select can utilize <code>v-chip</code> as the display for selected
      items.
    </p>
    <div class="mt-4">
      <v-row>
        <v-col cols="12" sm="6" lg="4">
          <v-subheader v-text="'Multiple with persistent hint'"></v-subheader>
        </v-col>
        <v-col cols="12" sm="6" lg="8">
          <v-select
            v-model="e6"
            :items="states"
            label="Select"
            multiple
            hint="Pick your favorite states"
            persistent-hint
          ></v-select>
        </v-col>

        <v-col cols="12" sm="6" lg="4">
          <v-subheader
            v-text="'Multiple (Chips) with persistent hint'"
          ></v-subheader>
        </v-col>

        <v-col cols="12" sm="6" lg="8">
          <v-select
            v-model="e7"
            :items="states"
            label="Select"
            multiple
            chips
            hint="What are the target regions"
            persistent-hint
          ></v-select>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const e6 = ref([]);
const e7 = ref([]);

const states = ref([
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Federated States of Micronesia",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Marshall Islands",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Northern Mariana Islands",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Palau",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Island",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
]);
</script>
