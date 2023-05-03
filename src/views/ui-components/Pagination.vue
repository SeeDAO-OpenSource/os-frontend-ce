<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import PaginationRounded from "@/components/vuetifyComponents/pagination/PaginationRounded.vue";
import PaginationDisabled from "@/components/vuetifyComponents/pagination/PaginationDisabled.vue";
import PaginationIcons from "@/components/vuetifyComponents/pagination/PaginationIcons.vue";
import PaginationLength from "@/components/vuetifyComponents/pagination/PaginationLength.vue";

const page = ref({ title: "Pagination" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Pagination",
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
      <BaseCard heading="Rounded">
        <PaginationRounded />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Disabled">
        <PaginationDisabled />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Icons">
        <PaginationIcons />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Length">
        <PaginationLength />
      </BaseCard>
    </v-col>
  </v-row>
</template>
