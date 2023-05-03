<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- SelectionControlsSwitchInset -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      You can make switch render in inset mode.
    </p>
    <div class="mt-4">
      <v-sheet class="pa-5">
        <v-switch
          v-model="switch1"
          inset
          :label="`Switch 1: ${switch1.toString()}`"
        ></v-switch>
        <v-switch
          v-model="switch2"
          inset
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
