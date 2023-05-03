<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import FlexDir from "@/components/vuetifyStyleComponents/flex/FlexDir.vue";
import FlexJustify from "@/components/vuetifyStyleComponents/flex/FlexJustify.vue";
import FlexAlignSelf from "@/components/vuetifyStyleComponents/flex/FlexAlignSelf.vue";
import FlexWrap from "@/components/vuetifyStyleComponents/flex/FlexWrap.vue";

const page = ref({ title: "SeeDAO" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "SeeDAO",
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
      <BaseCard heading="Direction">
        <FlexDir />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Justify">
        <FlexJustify />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Align Self">
        <FlexAlignSelf />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Wrap">
        <FlexWrap />
      </BaseCard>
    </v-col>
  </v-row>
</template>