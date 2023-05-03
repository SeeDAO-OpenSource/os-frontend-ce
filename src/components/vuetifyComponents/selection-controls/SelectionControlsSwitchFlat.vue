<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- SelectionControlsSwitchFlat -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      You can make switch render without elevation of thumb using
      <code>flat</code> property.
    </p>
    <div class="mt-5">
      <v-sheet class="pa-2">
        <v-switch
          v-model="switch1"
          flat
          :label="`Switch 1: ${switch1.toString()}`"
        ></v-switch>
        <v-switch
          v-model="switch2"
          flat
          :label="`Switch 2: ${switch2.toString()}`"
        ></v-switch>
      </v-sheet>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const switch1 = ref(true);
const switch2 = ref(false);
</script>
