<script setup lang="ts">
import { ref } from "vue";

const cards = ref([
  {
    color: "secondary",
    icon: "grid",
    title: "460",
    subtitle: "New Products",
  },
  {
    color: "error",
    icon: "archive",
    title: "50",
    subtitle: "Pending Apps",
  },
  {
    color: "primary",
    icon: "users",
    title: "80",
    subtitle: "Customers",
  },
  {
    color: "success",
    icon: "gift",
    title: "15",
    subtitle: "Birthday Gifts",
  },
  {
    color: "warning",
    icon: "credit-card",
    title: "1800",
    subtitle: "Total Budgets",
  },
  {
    color: "blue",
    icon: "github",
    title: "90",
    subtitle: "Best Designers",
  },
]);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Sample Card -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-row>
    <v-col cols="12" lg="4" v-for="(item, i) in cards" :key="i">
      <v-card>
        <v-card-item :class="'py-4 px-6 text-white bg-' + item.color">
          <h4 class="text-h6">Card Title</h4>
        </v-card-item>
        <v-card-text class="pa-6">
          <h5 class="text-h6 title">Special title treatment</h5>
          <p class="text-grey-darken-1 text-subtitle-1 mt-3"
            >With supporting text below as a natural lead-in to additional
            content.
          </p>
          <v-btn variant="flat" class="mt-4 text-white" :color="item.color">Go Somewhere</v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
