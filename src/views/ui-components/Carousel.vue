<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import CarouselDelimiter from "@/components/vuetifyComponents/carousel/CarouselDelimiter.vue";
import CarouselCycle from "@/components/vuetifyComponents/carousel/CarouselCycle.vue";
import CarouselHideControls from "@/components/vuetifyComponents/carousel/CarouselHideControls.vue";
import CarouselCustomArrow from "@/components/vuetifyComponents/carousel/CarouselCustomArrow.vue";
import CarouselHideDelimiter from "@/components/vuetifyComponents/carousel/CarouselHideDelimiter.vue";
import CarouselProgress from "@/components/vuetifyComponents/carousel/CarouselProgress.vue";
import CarouselModel from "@/components/vuetifyComponents/carousel/CarouselModel.vue";

const page = ref({ title: "Carousel" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Carousel",
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
    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="Custom delimiters">
        <CarouselDelimiter />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="Cycle">
        <CarouselCycle />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="Hide Controls">
        <CarouselHideControls />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="Customized arrows">
        <CarouselCustomArrow />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="Hide delimiters">
        <CarouselHideDelimiter />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="Progress Carousel">
        <CarouselProgress />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="12">
      <BaseCard heading="Model">
        <CarouselModel />
      </BaseCard>
    </v-col>
  </v-row>
</template>
