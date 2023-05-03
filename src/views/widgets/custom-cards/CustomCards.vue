<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import BackgroundCard from "./data/BackgroundCard.vue";
import SampleCard from "./data/SampleCard.vue";
import ButtonsCards from "./data/ButtonsCards.vue";
import ImageCards from "./data/ImageCards.vue";

const page = ref({ title: "Custom Cards" });
const breadcrumbs = ref([
  {
    text: "Widgets",
    disabled: false,
    href: "#",
  },
  {
    text: "Custom Cards",
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
    <v-col cols="12">
      <BackgroundCard />
    </v-col>
    <v-col cols="12">
      <SampleCard />
    </v-col>
    <v-col cols="12">
      <ButtonsCards />
    </v-col>
    <v-col cols="12">
      <ImageCards />
    </v-col>
  </v-row>
</template>