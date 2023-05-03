<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";
import CardGeneralForm from "./form-data/CardGeneralForm.vue";
import CardDefaultForm from "./form-data/CardDefaultForm.vue";
import CardSampleForm from "./form-data/CardSampleForm.vue";
import CardDefaultBasicForm from "./form-data/CardDefaultBasicForm.vue";
import CardInputGroupForm from "./form-data/CardInputGroupForm.vue";
import CardInputStateForm from "./form-data/CardInputStateForm.vue";
import CardDisabledForm from "./form-data/CardDisabledForm.vue";
import CardSimpleForm from "./form-data/CardSimpleForm.vue";
import CardSampleFormwithIcons from "./form-data/CardSampleFormwithIcons.vue";
import CardSampleFormwithRightIcons from "./form-data/CardSampleFormwithRightIcons.vue";
const page = ref({ title: "Form Basic" });
const breadcrumbs = ref([
  {
    text: "Form Elements",
    disabled: false,
    href: "#",
  },
  {
    text: "Form Basic",
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
    <v-col cols="12">
      <CardGeneralForm></CardGeneralForm>
      <CardDefaultForm></CardDefaultForm>
      <CardSampleForm></CardSampleForm>
      <CardDefaultBasicForm></CardDefaultBasicForm>
      <CardInputGroupForm></CardInputGroupForm>
      <CardInputStateForm></CardInputStateForm>
      <CardDisabledForm></CardDisabledForm>
      <CardSimpleForm></CardSimpleForm>
    </v-col>
    <v-col cols="12" sm="6">
      <CardSampleFormwithIcons></CardSampleFormwithIcons>
    </v-col>
    <v-col cols="12" sm="6">
      <CardSampleFormwithRightIcons></CardSampleFormwithRightIcons>
    </v-col>
  </v-row>
</template>


