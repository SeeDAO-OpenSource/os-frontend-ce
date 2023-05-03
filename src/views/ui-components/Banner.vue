<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import BannerLine from "@/components/vuetifyComponents/banner/BannerLine.vue";
import BannerSticky from "@/components/vuetifyComponents/banner/BannerSticky.vue";
import BannerSlots from "@/components/vuetifyComponents/banner/BannerSlots.vue";
import BannerIcon from "@/components/vuetifyComponents/banner/BannerIcon.vue";
import BannerPrepand from "@/components/vuetifyComponents/banner/BannerPrepand.vue";

const page = ref({ title: "Banner" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Banner",
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
      <BaseCard heading="Banner - Lines">
        <BannerLine />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Banner - Sticky">
        <BannerSticky />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Banner - Slots">
        <BannerSlots />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Banner - Icon">
        <BannerIcon />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Banner - Prepand">
        <BannerPrepand />
      </BaseCard>
    </v-col>
  </v-row>
</template>

