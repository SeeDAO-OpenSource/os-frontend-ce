<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import GrpItemSelected from "@/components/vuetifyComponents/item-group/GrpItemSelected.vue";
import GrpItemMandatory from "@/components/vuetifyComponents/item-group/GrpItemMandatory.vue";
import GrpItemMultiple from "@/components/vuetifyComponents/item-group/GrpItemMultiple.vue";
import GrpItemSelection from "@/components/vuetifyComponents/item-group/GrpItemSelection.vue";
import GrpItemChip from "@/components/vuetifyComponents/item-group/GrpItemChip.vue";

const page = ref({ title: "Item Groups" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Item Groups",
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
      <BaseCard heading="Selected Item">
        <GrpItemSelected />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Mandatory">
        <GrpItemMandatory />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Multiple">
        <GrpItemMultiple />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Selection">
        <GrpItemSelection />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Chips">
        <GrpItemChip />
      </BaseCard>
    </v-col>
  </v-row>
</template>
