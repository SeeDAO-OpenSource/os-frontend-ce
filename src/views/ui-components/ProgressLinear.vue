<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import PLColor from "@/components/vuetifyComponents/progress-linear/PLColor.vue";
import PLIndeterminate from "@/components/vuetifyComponents/progress-linear/PLIndeterminate.vue";
import PLReversed from "@/components/vuetifyComponents/progress-linear/PLReversed.vue";
import PLRounded from "@/components/vuetifyComponents/progress-linear/PLRounded.vue";
import PLStream from "@/components/vuetifyComponents/progress-linear/PLStream.vue";
import PLStriped from "@/components/vuetifyComponents/progress-linear/PLStriped.vue";

const page = ref({ title: "Progress Linear" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Progress Linear",
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
      <BaseCard heading="Color">
        <PLColor />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Indeterminate">
        <PLIndeterminate />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Reversed">
        <PLReversed />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Rounded">
        <PLRounded />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Stream">
        <PLStream />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Striped">
        <PLStriped />
      </BaseCard>
    </v-col>
  </v-row>
</template>
