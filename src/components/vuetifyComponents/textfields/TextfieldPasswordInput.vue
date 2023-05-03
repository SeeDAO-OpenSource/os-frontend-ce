<script setup lang="ts">
import { ref } from "vue";

const show1 = ref(false);
const show2 = ref(true),
  show3 = ref(false),
  show4 = ref(false),
  password = ref("Password"),
  rules = ref({
    required: (value: any) => !!value || "Required.",
    min: (v: string | any[]) => v.length >= 8 || "Min 8 characters",
    emailMatch: () => "The email and password you entered don't match",
  });
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TextfieldPasswordInput -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      A password input can be used with an appended icon and callback to control
      the visibility.
    </p>
    <div class="mt-4">
      <v-form>
        <v-container fluid>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Normal with hint text"
                hint="At least 8 characters"
                counter
                @click:append="show1 = !show1"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show2 ? 'text' : 'password'"
                name="input-10-2"
                label="Visible"
                hint="At least 8 characters"
                value="wqfasds"
                class="input-group--focused"
                @click:append="show2 = !show2"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show3 ? 'text' : 'password'"
                name="input-10-2"
                label="Not visible"
                hint="At least 8 characters"
                value="wqfasds"
                class="input-group--focused"
                @click:append="show3 = !show3"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.emailMatch]"
                :type="show4 ? 'text' : 'password'"
                name="input-10-2"
                label="Error"
                hint="At least 8 characters"
                value="Pa"
                error
                @click:append="show4 = !show4"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
  </div>
</template>
