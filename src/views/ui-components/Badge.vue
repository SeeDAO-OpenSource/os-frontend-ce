<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import BadgeInline from "@/components/vuetifyComponents/badge/BadgeInline.vue";
import BadgeContent from "@/components/vuetifyComponents/badge/BadgeContent.vue";

const page = ref({ title: "Badge" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Badge",
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
        <BaseCard heading="Badge - Inline">
          <BadgeInline />
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12">
        <BaseCard heading="Badge - Content">
          <BadgeContent />
        </BaseCard>
      </v-col>
    </v-row>
</template>
