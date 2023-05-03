<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import TimelineSingleSide from "@/components/vuetifyComponents/timeline/TimelineSingleSide.vue";
import TimelineSize from "@/components/vuetifyComponents/timeline/TimelineSize.vue";
import TimelineIcon from "@/components/vuetifyComponents/timeline/TimelineIcon.vue";

const page = ref({ title: "Timeline" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Timeline",
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
      <BaseCard heading="Single Side">
        <TimelineSingleSide />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Size">
        <TimelineSize />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Icon">
        <TimelineIcon />
      </BaseCard>
    </v-col>
  </v-row>
</template>
