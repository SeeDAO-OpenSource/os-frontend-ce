<script setup lang="ts">
import { ref } from "vue";
import WelcomeCard from "./WelcomeCard.vue";
import Roadmap from "./Roadmap.vue";
const page = ref({ title: "Dashboard" });
</script>

<template>
  <v-row>
    <v-col cols="12" sm="12" lg="12">
      <WelcomeCard />
    </v-col>
  </v-row>
</template>
