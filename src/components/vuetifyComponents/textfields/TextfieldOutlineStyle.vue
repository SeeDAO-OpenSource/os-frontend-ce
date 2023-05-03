<script setup lang="ts">
import { ref } from "vue";

const first = ref("John");
const last = ref("Doe");
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TextfieldOutlineStyle -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      Text fields can be used with an alternative outlined design.
    </p>
    <div class="mt-4">
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="first"
                label="First Name"
                outlined
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="last"
                label="Last Name"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
  </div>
</template>