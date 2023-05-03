<script setup lang="ts">
import { ref } from "vue";

const expand = ref(false);
const expand2 = ref(false);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Expand x -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1 mb-6">
    The expand transition is used in Expansion Panels and List Groups. There is also a horizontal version available with v-expand-x-transition.
  </p>
  <v-row justify="center" style="min-height: 160px">
    <v-col class="shrink">
      <v-btn class="ma-2" color="primary" @click="expand = !expand">
        Expand Transition
      </v-btn>

      <v-expand-transition>
        <v-card
          v-show="expand"
          height="100"
          width="100"
          class="mx-auto bg-secondary"
        ></v-card>
      </v-expand-transition>
    </v-col>

    <div class="mx-4 hidden-sm-and-down"></div>

    <v-col class="shrink">
      <v-btn class="ma-2" color="secondary" @click="expand2 = !expand2">
        Expand X Transition
      </v-btn>

      <v-expand-x-transition>
        <v-card
          v-show="expand2"
          height="100"
          width="100"
          class="mx-auto bg-secondary"
        ></v-card>
      </v-expand-x-transition>
    </v-col>
  </v-row>
</template>
