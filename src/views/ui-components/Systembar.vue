<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import SystembarColor from "@/components/vuetifyComponents/systembar/SystembarColor.vue";
import SystembarWindow from "@/components/vuetifyComponents/systembar/SystembarWindow.vue";

const page = ref({ title: "Systembar" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Systembar",
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
      <BaseCard heading="Systembar - Color">
        <SystembarColor />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Systembar - Window">
        <SystembarWindow />
      </BaseCard>
    </v-col>
  </v-row>
</template>

