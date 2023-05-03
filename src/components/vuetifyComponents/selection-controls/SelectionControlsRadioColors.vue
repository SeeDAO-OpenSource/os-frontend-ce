<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- SelectionControlsRadioColors -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      Radios can be colored by using any of the builtin colors and contextual
      names using the <code>color</code> prop.
    </p>
    <div class="mt-4">
      <v-row>
        <v-col cols="12" sm="6" md="6">
          <v-radio-group v-model="ex7" column>
            <v-radio label="red" color="red" value="red"></v-radio>
            <v-radio
              label="red darken-3"
              color="red darken-3"
              value="red darken-3"
            ></v-radio>
            <v-radio label="indigo" color="indigo" value="indigo"></v-radio>
            <v-radio
              label="indigo darken-3"
              color="indigo darken-3"
              value="indigo darken-3"
            ></v-radio>
            <v-radio label="orange" color="orange" value="orange"></v-radio>
            <v-radio
              label="orange darken-3"
              color="orange darken-3"
              value="orange darken-3"
            ></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-radio-group v-model="ex8" column>
            <v-radio label="primary" color="primary" value="primary"></v-radio>
            <v-radio
              label="secondary"
              color="secondary"
              value="secondary"
            ></v-radio>
            <v-radio label="success" color="success" value="success"></v-radio>
            <v-radio label="info" color="info" value="info"></v-radio>
            <v-radio label="warning" color="warning" value="warning"></v-radio>
            <v-radio label="error" color="error" value="error"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const ex8 = ref("primary");
const ex7 = ref("red");
</script>
