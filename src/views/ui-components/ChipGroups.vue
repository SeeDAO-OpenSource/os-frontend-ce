<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import GrpChipColumn from "@/components/vuetifyComponents/chip-group/GrpChipColumn.vue";
import GrpChipMandatory from "@/components/vuetifyComponents/chip-group/GrpChipMandatory.vue";
import GrpChipProductCard from "@/components/vuetifyComponents/chip-group/GrpChipProductCard.vue";
import GrpChipMultiple from "@/components/vuetifyComponents/chip-group/GrpChipMultiple.vue";

const page = ref({ title: "Chip Groups" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Chip Groups",
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
      <BaseCard heading="Column">
        <GrpChipColumn />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="Product Card">
        <GrpChipProductCard />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="Mandatory">
        <GrpChipMandatory />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="Multiple">
        <GrpChipMultiple />
      </BaseCard>
    </v-col>
  </v-row>
</template>
