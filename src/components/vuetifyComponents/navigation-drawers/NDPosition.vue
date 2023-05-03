<script setup lang="ts">
import { ref } from "vue";

const items = ref([
  { title: "Home", icon: "mdi-home-city" },
  { title: "My Account", icon: "mdi-account" },
  { title: "Users", icon: "mdi-account-group-outline" },
]);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Position -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    Navigation drawers can also be positioned on the right side of your
    application (or an element) using the position prop.
  </p>
  <v-card class="mt-6" max-height="300">
    <v-layout>
      <v-navigation-drawer permanent location="right">
        <template v-slot:prepend>
          <v-list-item
            two-line
            prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
            title="Jane Smith"
            subtitle="Logged in"
          ></v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-home-city"
            title="Home"
            value="home"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account"
            title="My Account"
            value="account"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-group-outline"
            title="Users"
            value="users"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>
</template>

