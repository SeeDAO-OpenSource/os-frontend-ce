<script setup lang="ts">
import { ref } from "vue";

const drawer = ref(true);
const items = ref([
  { title: "Home", icon: "mdi-home-city" },
  { title: "My Account", icon: "mdi-account" },
  { title: "Users", icon: "mdi-account-group-outline" },
]);
const rail = ref(true);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Rail -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    When using the rail prop, the drawer will shrink (default 56px) and hide
    everything inside of v-list except the first element.
  </p>
  <v-card class="mt-6" max-height="300">
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="John Leider"
          nav
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>
</template>

