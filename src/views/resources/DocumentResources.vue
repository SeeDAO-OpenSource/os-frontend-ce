<script setup lang="ts">
import { ref } from "vue";

const show1 = ref(false);
const checkbox = ref("");
const password = ref("");
const rules = ref({
  required: (value: string) => !!value || "Required.",
  min: (v: string) => v.length >= 8 || "Min 8 characters",
  emailMatch: () => "The email and password you entered don't match",
});

</script>

<template>
  <v-card class="mb-7">
    <v-card-text class="pa-5 border-bottom">
      <h3 class="title text-h6">General Form</h3>
      <h6 class="text-subtitle-1 text-grey-darken-1">All with vuetify element attributes</h6>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-text>
      <v-text-field
        label="Email address"
        filled
        background-color="transparent"
        hint="We'll never share your email with anyone else."
        height="25"
        persistent-hint
      ></v-text-field>
      <v-text-field
        v-model="password"
        filled
        background-color="transparent"
        class="mt-3"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Password"
        hint="At least 8 characters"
        counter
        @click:append="show1 = !show1"
      ></v-text-field>
      <v-checkbox v-model="checkbox" hide-details label="Check me Out!" class="mt-0"></v-checkbox>
      <v-btn color="secondary" class="text-capitalize">Submit</v-btn>
    </v-card-text>
  </v-card>
</template>

