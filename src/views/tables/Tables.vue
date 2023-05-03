<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import TableDarktheme from "./table-data/TableDarktheme.vue";
import TableDencity from "./table-data/TableDencity.vue";
import TableFixHeight from "./table-data/TableFixHeight.vue";
import TableFixHeader from "./table-data/TableFixHeader.vue";

const page = ref({ title: "Tables" });
const breadcrumbs = ref([
  {
    text: "Table",
    disabled: false,
    href: "#",
  },
  {
    text: "Tables",
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
      <BaseCard heading="Dark Theme">
        <TableDarktheme />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Dencity">
        <TableDencity />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Height">
        <TableFixHeight />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Fixed Header">
        <TableFixHeader />
      </BaseCard>
    </v-col>
  </v-row>
</template>
