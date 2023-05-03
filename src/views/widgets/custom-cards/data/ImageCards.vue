<script setup lang="ts">
import { ref } from "vue";

const cards = ref([
  {
    image: "u1.jpg",
    color: "secondary",
    icon: "grid",
    title: "460",
    subtitle: "New Products",
  },
  {
    image: "u2.jpg",
    color: "error",
    icon: "archive",
    title: "50",
    subtitle: "Pending Apps",
  },
  {
    image: "u3.jpg",
    color: "primary",
    icon: "users",
    title: "80",
    subtitle: "Customers",
  },
]);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Image Card -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-row>
    <v-col cols="12" lg="4" v-for="(item, i) in cards" :key="i">
      <v-card>
        <v-img :src="'../src/assets/images/background/' + item.image" />
        <v-card-text class="pa-6">
          <h5 class="text-h6 title">Special title treatment</h5>
          <p class="text-grey-darken-1 text-subtitle-1 mt-3"
            >With supporting text below as a natural lead-in to additional
            content.
          </p>
          <v-btn class="mt-4" :color="item.color">Go Somewhere</v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
