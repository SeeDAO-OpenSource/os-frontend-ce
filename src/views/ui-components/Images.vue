<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import ImagesAspectRatio from "@/components/vuetifyComponents/images/ImagesAspectRatio.vue";
import ImagesCover from "@/components/vuetifyComponents/images/ImagesCover.vue";
import ImagesHeight from "@/components/vuetifyComponents/images/ImagesHeight.vue";

const page = ref({ title: "Images" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Images",
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
      <BaseCard heading="Aspect Ratio">
        <ImagesAspectRatio />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Cover">
        <ImagesCover />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Height">
        <ImagesHeight />
      </BaseCard>
    </v-col>
  </v-row>
</template>
