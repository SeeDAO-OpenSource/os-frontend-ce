<script setup lang="ts">
import {ref} from "vue";

const checkbox = ref(false);
const valid = ref(true);
const show1 = ref(false);
const password = ref("");
const email = ref("");
const passwordRules = ref([
  (v: string) => !!v || "Password is required",
  (v: string) =>
    (v && v.length <= 10) || "Password must be less than 10 characters",
]);
const emailRules = ref([
  (v: string) => !!v || "E-mail is required",
  (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
]);
</script>

<template>
  <v-row class="h-100vh">
    <v-col
      cols="12"
      lg="7"
      xl="6"
      class="bg-secondary d-none d-md-flex align-center justify-center"
    >
      <v-container>
        <div class="pa-10">
          <v-row justify="center" >
            <v-col cols="8" xl="5">
              <div>
                <h2 class="text-h4 text-white font-weight-medium">
                  Elegant Design with unlimited features, built with love
                </h2>
                <h6
                  class="
                    text-subtitle-1 text-high-emphasis
                    mt-4
                    text-white
                    font-weight-regular
                  "
                >
                  Wrappixel helps developers to build organized and well-coded
                  admin dashboards full of beautiful and feature rich modules.
                </h6>
                <v-btn
                  class="mt-6 text-capitalize"
                  size="x-large"
                  variant="outlined"
                  color="white"
                  >Learn More</v-btn
                >
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-col>
    <v-col cols="12" lg="5" xl="6" class="d-flex align-center">
      <v-container>
        <div class="pa-7 pa-sm-12">
          <v-row>
            <v-col cols="12" lg="9" xl="6">
              <img src="@/assets/images/logo-icon.png" />
              <h2 class="font-weight-bold mt-4 text--darken-2">Sign in</h2>
              <h6 class="text-subtitle-1 text-grey-darken-1">
                Don't have an account?
                <a
                  href="#/pages/fullregister"
                  class="text-primary text-decoration-none"
                  >Sign Up</a
                >
              </h6>

              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                action="/dashboards/analytical"
                class="mt-7"
              >
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  class="mt-4"
                  required
                  variant="outlined"
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  :counter="10"
                  :rules="passwordRules"
                  label="Password"
                  required
                  variant="outlined"
                  type="password"
                ></v-text-field>

                <div class="d-flex align-center mb-4 mb-sm-0">
                  <v-checkbox
                    v-model="checkbox"
                    :rules="[(v) => !!v || 'You must agree to continue!']"
                    label="Remember me?"
                    required
                    hide-details
                  ></v-checkbox>
                  <div class="ml-auto">
                    <a
                      href="javascript:void(0)"
                      class="text-primary text-decoration-none"
                      >Forgot pwd?</a
                    >
                  </div>
                </div>
                <v-btn
                  color="secondary"
                  block
                  class="mr-4"
                  submit
                  >Sign In</v-btn
                >
              </v-form>
              <div class="text-center mt-6">
                <div class="d-flex align-center justify-center gap-2">
                  <v-btn icon color="secondary">
                    <v-icon>mdi-twitter</v-icon>
                  </v-btn>
                  <v-btn icon color="primary">
                    <v-icon>mdi-github</v-icon>
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-col>
  </v-row>
</template>
