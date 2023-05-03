<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Autocompletes State Selector -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      Using a combination of <code>v-autocomplete</code> slots and transitions,
      you can create a stylish toggleable autocomplete field such as this state
      selector.
    </p>
    <div class="mt-4">
      <v-card>
        <v-card-text class="px-0">
          <div class="text-caption pa-3">Where do you live?</div>
          <v-autocomplete
            v-model="model"
            :hint="
              !isEditing ? 'Click the icon to edit' : 'Click the icon to save'
            "
            :items="states"
            :readonly="!isEditing"
            :label="`State — ${isEditing ? 'Editable' : 'Readonly'}`"
            persistent-hint
            prepend-icon="mdi-city"
          >
            <template v-slot:append>
              <v-slide-x-reverse-transition mode="out-in">
                <v-icon
                  :key="`icon-${isEditing}`"
                  :color="isEditing ? 'success' : 'info'"
                  :icon="
                    isEditing ? 'mdi-check-outline' : 'mdi-circle-edit-outline'
                  "
                  @click="isEditing = !isEditing"
                ></v-icon>
              </v-slide-x-reverse-transition>
            </template>
          </v-autocomplete>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isEditing = ref(false);
const model = ref(undefined);
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
