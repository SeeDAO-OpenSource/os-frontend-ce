<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import DividerInset from "@/components/vuetifyComponents/dividers/DividerInset.vue";
import DividerPortrait from "@/components/vuetifyComponents/dividers/DividerPortrait.vue";
import DividerVertical from "@/components/vuetifyComponents/dividers/DividerVertical.vue";

const page = ref({ title: "Divider" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Divider",
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
      <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
        <BaseCard heading="Inset dividers">
          <DividerInset />
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
        <BaseCard heading="Portrait">
          <DividerPortrait />
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Dividers">
          <DividerVertical />
        </BaseCard>
      </v-col>
    </v-row>
</template>
