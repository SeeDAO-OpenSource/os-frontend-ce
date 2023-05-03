<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";
import FileInputsMultiple from "@/components/vuetifyComponents/file-inputs/FileInputsMultiple.vue";
import FileInputsAcceptFormats from "@/components/vuetifyComponents/file-inputs/FileInputsAcceptFormats.vue";
import FileInputsChips from "@/components/vuetifyComponents/file-inputs/FileInputsChips.vue";
import FileInputsSize from "@/components/vuetifyComponents/file-inputs/FileInputsSize.vue";
import FileInputsCounter from "@/components/vuetifyComponents/file-inputs/FileInputsCounter.vue";
import FileInputsCustomIcon from "@/components/vuetifyComponents/file-inputs/FileInputsCustomIcon.vue";
import FileInputsDense from "@/components/vuetifyComponents/file-inputs/FileInputsDense.vue";
import FileInputsSelectionSlot from "@/components/vuetifyComponents/file-inputs/FileInputsSelectionSlot.vue";
import FileInputsValidation from "@/components/vuetifyComponents/file-inputs/FileInputsValidation.vue";
import FileInputsComplexSlots from "@/components/vuetifyComponents/file-inputs/FileInputsComplexSlots.vue";

const page = ref({ title: "File Inputs" });
const breadcrumbs = ref([
  {
    text: "Form Elements",
    disabled: false,
    href: "#",
  },
  {
    text: "File Inputs",
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
      <BaseCard heading="File inputs - Multiple">
        <FileInputsMultiple></FileInputsMultiple>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="File inputs - Accept formats">
        <FileInputsAcceptFormats></FileInputsAcceptFormats>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="File inputs - With chips">
        <FileInputsChips></FileInputsChips>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="File inputs - Size displaying">
        <FileInputsSize></FileInputsSize>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="File inputs - Counter">
        <FileInputsCounter></FileInputsCounter>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="File inputs - Custom icons">
        <FileInputsCustomIcon></FileInputsCustomIcon>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="File inputs - Dense">
        <FileInputsDense></FileInputsDense>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="File inputs - Selection slot">
        <FileInputsSelectionSlot></FileInputsSelectionSlot>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="File inputs - Validation">
        <FileInputsValidation></FileInputsValidation>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="File inputs - Complex selection slots">
        <FileInputsComplexSlots></FileInputsComplexSlots>
      </BaseCard>
    </v-col>
  </v-row>
</template>


