<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import Typography from "@/components/vuetifyStyleComponents/typography/Typography.vue";
import FontEmphasis from "@/components/vuetifyStyleComponents/typography/FontEmphasis.vue";
import TextDecoration from "@/components/vuetifyStyleComponents/typography/TextDecoration.vue";
import Opacity from "@/components/vuetifyStyleComponents/typography/Opacity.vue";
import Transform from "@/components/vuetifyStyleComponents/typography/Transform.vue";

const page = ref({ title: "Text and Typography" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Text and Typography",
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
      <BaseCard heading="Typography">
        <Typography />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Font Emphasis">
        <FontEmphasis />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Decoration">
        <TextDecoration />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Opacity">
        <Opacity />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Transform">
        <Transform />
      </BaseCard>
    </v-col>
  </v-row>
</template>