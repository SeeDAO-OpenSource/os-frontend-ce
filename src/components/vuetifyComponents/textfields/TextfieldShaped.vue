<script setup lang="ts">
import { ref } from "vue";

const first = ref("John");
const last = ref("Doe");
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TextfieldShaped -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      <code>shaped</code> text fields are rounded if they're
      <code>outlined</code> and have higher <code>border-radius</code> if
      <code>filled</code>.
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
                shaped
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="last"
                label="Last Name"
                filled
                shaped
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
  </div>
</template>
