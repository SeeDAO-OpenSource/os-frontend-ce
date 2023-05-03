<script setup lang="ts">
import { ref } from "vue";


const title = ref("Preliminary report");
const description = ref("California is a state in the western United States");
const rules = ref([(v: string) => v.length <= 25 || "Max 25 characters"]);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TextfieldCharacterCounter -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      Use a <code>counter</code> prop to inform a user of the character limit.
      The counter does not perform any validation by itself. You will need to
      pair it with either the internal validation system, or a 3rd party
      library. You can use it on regular, box or outlined text fields.
    </p>
    <div class="mt-4">
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="title"
                :rules="rules"
                counter="25"
                hint="This field uses counter prop"
                label="Regular"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="description"
                :rules="rules"
                counter
                maxlength="25"
                hint="This field uses maxlength attribute"
                label="Limit exceeded"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="title"
                :rules="rules"
                counter="25"
                filled
                label="Filled"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="title"
                :rules="rules"
                counter="25"
                label="Outlined"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
  </div>
</template>
