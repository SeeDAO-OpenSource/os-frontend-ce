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
  <!-- Divider -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      Breadcrumbs separator can be set using divider property.
    </p>
    <div class="mt-6">
      <v-breadcrumbs :items="items" divider="-"></v-breadcrumbs>

      <v-breadcrumbs :items="items" divider="."></v-breadcrumbs>
    </div>
  </div>
</template>

