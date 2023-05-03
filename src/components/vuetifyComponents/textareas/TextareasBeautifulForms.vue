<script setup lang="ts">
import { ref } from "vue";
const agreement = ref(false);
const conversation = ref();
const bio = ref(
  "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts"
);
const dialog = ref(false);
const email = ref(undefined);
const form = ref(false);
const isLoading = ref(false);
const password = ref(undefined);
const phone = ref(undefined);
const rules = ref({
  email: (v: any) => (v || "").match(/@/) || "Please enter a valid email",
  length: (len: number) => (v: any) =>
    (v || "").length >= len || `Invalid character length, required ${len}`,
  password: (v: any) =>
    (v || "").match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
    "Password must contain an upper case letter, a numeric character, and a special character",
  required: (v: any) => !!v || "This field is required",
});

</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TextareasBeautifulForms -->
  <!-- ----------------------------------------------------------------------------- -->
  <div class="position-relative">
    <p class="text-subtitle-1 text-grey-darken-1">
      Utilizing alternative input styles, you can create amazing interfaces that
      are easy to build and easy to use.
    </p>
    <div class="mt-4">
      <v-card class="mx-auto" style="max-width: 500px">
        <v-toolbar color="secondary" cards dark flat>
          <v-btn icon color="white">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-card-title class="text-h6 font-weight-regular">
            Sign up
          </v-card-title>
          <v-spacer></v-spacer>
          <v-btn icon color="white">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn icon color="white">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>
        <v-form ref="form" v-model="form" class="pa-4 pt-6">
          <v-text-field
            v-model="password"
            :rules="[rules.password, rules.length(6)]"
            variant="filled"
            color="success"
            counter="6"
            label="Password"
            style="min-height: 96px"
            type="password"
          ></v-text-field>
          <v-text-field
            v-model="phone"
            variant="filled"
            color="success"
            label="Phone number"
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="[rules.email]"
            variant="filled"
            color="success"
            label="Email address"
            type="email"
          ></v-text-field>
          <v-textarea
            v-model="bio"
            auto-grow
            variant="filled"
            color="success"
            label="Bio"
            rows="1"
          ></v-textarea>
          <v-checkbox
            v-model="agreement"
            :rules="[rules.required]"
            color="success"
          >
            <template v-slot:label>
              I agree to the&nbsp;
              <a href="#" @click.stop.prevent="dialog = true"
                >Terms of Service</a
              >
              &nbsp;and&nbsp;
              <a href="#" @click.stop.prevent="dialog = true">Privacy Policy</a
              >*
            </template>
          </v-checkbox>
        </v-form>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!form"
            :loading="isLoading"
            color="deep-purple-accent-4"
          >
            Submit
          </v-btn>
        </v-card-actions>
        <v-dialog v-model="dialog" max-width="400" persistent>
          <v-card>
            <v-card-title class="text-h5 bg-grey-lighten-3">
              Legal
            </v-card-title>
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn
                variant="text"
                @click="(agreement = false), (dialog = false)"
              >
                No
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                color="deep-purple"
                variant="tonal"
                @click="(agreement = true), (dialog = false)"
              >
                Yes
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card>
    </div>
  </div>
</template>
