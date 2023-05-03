<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TextfieldCustomValidation -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      While the built in <code>v-form</code> or 3rd party plugin such as
      vuelidate or vee-validation can help streamline your validation process,
      you can choose to simply control it yourself.
    </p>
    <div class="mt-4">
      <v-card-text>
        <v-text-field
          ref="name"
          v-model="name"
          :rules="[() => !!name || 'This field is required']"
          :error-messages="errorMessages"
          label="Full Name"
          placeholder="John Doe"
          required
        ></v-text-field>
        <v-text-field
          ref="address"
          v-model="address"
          :rules="[
            () => !!address || 'This field is required',
            () =>
              (!!address && address <= 25) ||
              'Address must be less than 25 characters',
          ]"
          label="Address Line"
          placeholder="Snowy Rock Pl"
          counter="25"
          required
        ></v-text-field>
        <v-text-field
          ref="city"
          v-model="city"
          :rules="[() => !!city || 'This field is required']"
          label="City"
          placeholder="El Paso"
          required
        ></v-text-field>
        <v-text-field
          ref="state"
          v-model="state"
          :rules="[() => !!state || 'This field is required']"
          label="State/Province/Region"
          required
          placeholder="TX"
        ></v-text-field>
        <v-text-field
          ref="zip"
          v-model="zip"
          :rules="[() => !!zip || 'This field is required']"
          label="ZIP / Postal Code"
          required
          placeholder="79938"
        ></v-text-field>
        <v-autocomplete
          ref="country"
          v-model="country"
          :rules="[() => !!country || 'This field is required']"
          :items="countries"
          label="Country"
          placeholder="Select..."
          required
        ></v-autocomplete>
      </v-card-text>
      <v-divider class="mt-5"></v-divider>
      <v-card-actions>
        <v-btn text>Cancel</v-btn>
        <v-spacer></v-spacer>
        <v-slide-x-reverse-transition>
          <v-tooltip v-if="formHasErrors" left>
            <template v-slot:activator="{ props }">
              <v-btn icon class="my-0" @click="resetForm" v-bind="props">
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
            </template>
            <span>Refresh form</span>
          </v-tooltip>
        </v-slide-x-reverse-transition>
        <v-btn color="primary" text @click="submit">Submit</v-btn>
      </v-card-actions>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
const countries = ref([
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua &amp; Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia &amp; Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Cape Verde",
    "Cayman Islands",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cruise Ship",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyz Republic",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre &amp; Miquelon",
    "Samoa",
    "San Marino",
    "Satellite",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St Kitts &amp; Nevis",
    "St Lucia",
    "St Vincent",
    "St. Lucia",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad &amp; Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks &amp; Caicos",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ]),
  errorMessages = ref(""),
  name = ref(null),
  address = ref(null),
  city = ref(null),
  state = ref(null),
  zip = ref(null),
  country = ref(),
  formHasErrors = ref(false);
const form = computed(() => {
  return;
  name: name.value;
  address: address.value;
  city: city.value;
  state: state.value;
  zip: zip.value;
  country: country.value;
});
function addressCheck() {
  errorMessages.value = address.value && !name.value ? "Hey! I'm required" : "";

  return true;
}
function resetForm() {
  errorMessages.value = "";
  formHasErrors.value = false;
}
function submit() {
  formHasErrors.value = false;
}
</script>
