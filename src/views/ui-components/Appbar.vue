<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";


import AppbarDensity from "@/components/vuetifyComponents/appbar/AppbarDensity.vue";
import AppbarImages from "@/components/vuetifyComponents/appbar/AppbarImages.vue";
import AppbarProminent from "@/components/vuetifyComponents/appbar/AppbarProminent.vue";

const page = ref({ title: "Appbar" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Appbar",
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
      <v-col cols="12" sm="12">
        <BaseCard heading="Appbar - Density">
          <AppbarDensity />
        </BaseCard>

      </v-col>
      <v-col cols="12" sm="12">
        <BaseCard heading="Appbar - Images">
          <AppbarImages />
        </BaseCard>

      </v-col>
      <v-col cols="12" sm="12">
        <BaseCard heading="Appbar - Images">
          <AppbarProminent />
        </BaseCard>

      </v-col>
    </v-row>
</template>
