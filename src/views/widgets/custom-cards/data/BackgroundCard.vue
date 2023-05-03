<script setup lang="ts">
import { ref } from "vue";

const cards = ref([
  {
    color: "bg-secondary",
    icon: "grid",
    title: "460",
    subtitle: "New Products",
  },
  {
    color: "bg-error",
    icon: "archive",
    title: "50",
    subtitle: "Pending Apps",
  },
  {
    color: "bg-primary",
    icon: "users",
    title: "80",
    subtitle: "Customers",
  },
  {
    color: "bg-success",
    icon: "gift",
    title: "15",
    subtitle: "Birthday Gifts",
  },
  {
    color: "bg-warning",
    icon: "credit-card",
    title: "1800",
    subtitle: "Total Budgets",
  },
  {
    color: "bg-blue",
    icon: "github",
    title: "90",
    subtitle: "Best Designers",
  },
]);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Background Card -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-row>
    <v-col cols="12" lg="2" v-for="(item, i) in cards" :key="i">
      <v-card :class="item.color">
        <v-card-text class="pa-6">
          <vue-feather :type="item.icon" class="text-white"></vue-feather>
          <h5 class="text-h5 mt-2 text-white">{{ item.title }}</h5>
          <span class="text-white">{{
            item.subtitle
          }}</span>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
