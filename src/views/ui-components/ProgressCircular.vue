<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import PCColor from "@/components/vuetifyComponents/progress-circular/PCColor.vue";
import PCIndeterminate from "@/components/vuetifyComponents/progress-circular/PCIndeterminate.vue";

const page = ref({ title: "Progress Circular" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Progress Circular",
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
      <BaseCard heading="Color">
        <PCColor />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" class="d-flex align-items-stretch">  
      <BaseCard heading="Indeterminate">
        <PCIndeterminate />
      </BaseCard>
    </v-col>
  </v-row>
</template>
