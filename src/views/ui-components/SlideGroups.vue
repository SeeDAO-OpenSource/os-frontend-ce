<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import GrpSlideActiveClass from "@/components/vuetifyComponents/slide-group/GrpSlideActiveClass.vue";
import GrpSlideCenteredActiveItem from "@/components/vuetifyComponents/slide-group/GrpSlideCenteredActiveItem.vue";
import GrpSlideCustomIcons from "@/components/vuetifyComponents/slide-group/GrpSlideCustomIcons.vue";
import GrpSlideMandatory from "@/components/vuetifyComponents/slide-group/GrpSlideMandatory.vue";
import GrpSlideMultiple from "@/components/vuetifyComponents/slide-group/GrpSlideMultiple.vue";

const page = ref({ title: "Slide Groups" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Slide Groups",
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
      <BaseCard heading="Active class">
        <GrpSlideActiveClass />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Center active">
        <GrpSlideCenteredActiveItem />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Custom Icons">
        <GrpSlideCustomIcons />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Mandatory">
        <GrpSlideMandatory />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Multiple">
        <GrpSlideMultiple />
      </BaseCard>
    </v-col>
  </v-row>
</template>
