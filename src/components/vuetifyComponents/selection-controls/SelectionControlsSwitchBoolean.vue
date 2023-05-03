<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- SelectionControlsSwitchBoolean -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <div class="mt-4">
      <v-switch
        v-model="switch1"
        :label="`Switch 1: ${switch1.toString()}`"
      ></v-switch>
      <v-switch
        v-model="switch2"
        :label="`Switch 2: ${switch2.toString()}`"
      ></v-switch>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const switch1 = ref(true);
const switch2 = ref(false);
</script>
