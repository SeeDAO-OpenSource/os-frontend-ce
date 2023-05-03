<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";
import SelectsDisabled from "@/components/vuetifyComponents/selects/SelectsDisabled.vue";
import SelectsReadonly from "@/components/vuetifyComponents/selects/SelectsReadonly.vue";
import SelectsLightTheme from "@/components/vuetifyComponents/selects/SelectsLightTheme.vue";
import SelectsIcons from "@/components/vuetifyComponents/selects/SelectsIcons.vue";
import SelectsMultiple from "@/components/vuetifyComponents/selects/SelectsMultiple.vue";
import SelectsDence from "@/components/vuetifyComponents/selects/SelectsDence.vue";
import SelectsCustomMenuprops from "@/components/vuetifyComponents/selects/SelectsCustomMenuprops.vue";
import SelectsSelectionAppearance from "@/components/vuetifyComponents/selects/SelectsSelectionAppearance.vue";

const page = ref({ title: "Form Select" });
const breadcrumbs = ref([
  {
    text: "Form Elements",
    disabled: false,
    href: "#",
  },
  {
    text: "Form Select",
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
      <BaseCard heading="Selects - Disabled">
        <SelectsDisabled></SelectsDisabled>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Selects - Read-only">
        <SelectsReadonly></SelectsReadonly>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Selects - Light theme">
        <SelectsLightTheme></SelectsLightTheme>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Selects - Icons">
        <SelectsIcons></SelectsIcons>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Selects - Multiple">
        <SelectsMultiple></SelectsMultiple>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Selects - Dense">
        <SelectsDence></SelectsDence>
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12">
      <BaseCard heading="Selects - Custom menu props">
        <SelectsCustomMenuprops></SelectsCustomMenuprops>
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12">
      <BaseCard heading="Selects - Change selection appearance">
        <SelectsSelectionAppearance></SelectsSelectionAppearance>
      </BaseCard>
    </v-col>
  </v-row>
</template>
