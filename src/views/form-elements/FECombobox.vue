<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";
import ComboboxMultiple from "@/components/vuetifyComponents/combobox/ComboboxMultiple.vue";
import ComboboxDense from "@/components/vuetifyComponents/combobox/ComboboxDense.vue";
import ComboboxNodatachips from "@/components/vuetifyComponents/combobox/ComboboxNodatachips.vue";

const page = ref({ title: "Combobox" });
const breadcrumbs = ref([
  {
    text: "Form Elements",
    disabled: false,
    href: "#",
  },
  {
    text: "Combobox",
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
      <BaseCard heading="Combobox - Multiple combobox">
        <ComboboxMultiple></ComboboxMultiple>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Combobox - Dense">
        <ComboboxDense></ComboboxDense>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Combobox - No data with chips">
        <ComboboxNodatachips></ComboboxNodatachips>
      </BaseCard>
    </v-col>
  </v-row>
</template>


