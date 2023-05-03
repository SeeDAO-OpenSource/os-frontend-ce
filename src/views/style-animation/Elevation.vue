<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import Elevation from "@/components/vuetifyStyleComponents/elevation/Elevation.vue";

const page = ref({ title: "Elevation" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Elevation",
    disabled: true,
    href: "#",
  },
]);
</script>

<template>
  <BaseBreadcrumb
    :title="page.title"
    :breadcrumbs="breadcrumbs"
  ></BaseBreadcrumb>
  <v-row>
    <v-col cols="12" sm="12" class="d-flex align-items-stretch">
      <BaseCard heading="Elevation">
      <Elevation />
      </BaseCard>
    </v-col>
    
  </v-row>
</template>