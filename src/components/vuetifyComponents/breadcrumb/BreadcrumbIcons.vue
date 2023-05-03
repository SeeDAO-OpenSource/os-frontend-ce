<script setup lang="ts">
import { ref } from "vue";

const items = ref([
  {
    text: "Dashboard",
    disabled: false,
    href: "breadcrumbs_dashboard",
  },
  {
    text: "Link 1",
    disabled: false,
    href: "breadcrumbs_link_1",
  },
  {
    text: "Link 2",
    disabled: true,
    href: "breadcrumbs_link_2",
  },
]);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Icons -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      For the icon variant, breadcrumbs can use any icon in Material Design
      Icons.
    </p>
    <div class="mt-6">
      <v-breadcrumbs :items="items">
        <template v-slot:divider>
          <v-icon icon="mdi-forward"></v-icon>
        </template>
      </v-breadcrumbs>

      <v-breadcrumbs :items="items">
        <template v-slot:divider>
          <v-icon icon="mdi-chevron-right"></v-icon>
        </template>
      </v-breadcrumbs>
    </div>
  </div>
</template>

