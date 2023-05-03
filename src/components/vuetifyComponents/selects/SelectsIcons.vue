<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- error -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      Use a custom prepended or appended icon.
    </p>
    <div class="mt-4">
      <v-row>
        <v-col cols="6" lg="4">
          <v-subheader>Prepended icon</v-subheader>
        </v-col>
        <v-col cols="6" lg="8">
          <v-select
            v-model="e1"
            :items="states"
            label="Select"
            hide-details
            prepend-icon="map"
            single-line
            ><template v-slot:prepend>
              <v-icon color="green"> mdi-map </v-icon>
            </template></v-select
          >
        </v-col>
        <v-col cols="6" lg="4">
          <v-subheader>Appended icon</v-subheader>
        </v-col>
        <v-col cols="6" lg="8">
          <v-select
            v-model="e2"
            :items="states"
            hide-details
            label="Select"
            single-line
            ><template v-slot:append>
              <v-icon color="error"> mdi-map </v-icon>
            </template></v-select
          >
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const e1 = ref("Florida");
const e2 = ref("Texas");

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
