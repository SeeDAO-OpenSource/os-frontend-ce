<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import TooltipsAnchor from "@/components/vuetifyComponents/tooltips/TooltipsAnchor.vue";
import TooltipsVisibility from "@/components/vuetifyComponents/tooltips/TooltipsVisibility.vue";

const page = ref({ title: "Tooltips" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Tooltips",
    disabled: true,
    href: "#",
  },
]);
</script>

<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Anchor">
          <TooltipsAnchor />
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12">
        <BaseCard heading="Visibility">
          <TooltipsVisibility />
        </BaseCard>
      </v-col>
    </v-row>
</template>
