<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";
import TextareasIcon from "@/components/vuetifyComponents/textareas/TextareasIcon.vue";
import TextareasAutoGrow from "@/components/vuetifyComponents/textareas/TextareasAutoGrow.vue";
import TextareasBackgroundColor from "@/components/vuetifyComponents/textareas/TextareasBackgroundColor.vue";
import TextareasBrowserAutocomplete from "@/components/vuetifyComponents/textareas/TextareasBrowserAutocomplete.vue";
import TextareasClearable from "@/components/vuetifyComponents/textareas/TextareasClearable.vue";
import TextareasCounter from "@/components/vuetifyComponents/textareas/TextareasCounter.vue";
import TextareasNoresize from "@/components/vuetifyComponents/textareas/TextareasNoresize.vue";
import TextareasRows from "@/components/vuetifyComponents/textareas/TextareasRows.vue";
import TextareasBeautifulForms from "@/components/vuetifyComponents/textareas/TextareasBeautifulForms.vue";
const page = ref({ title: "Textareas" });
const breadcrumbs = ref([
  {
    text: "Form Elements",
    disabled: false,
    href: "#",
  },
  {
    text: "Textareas",
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
        <BaseCard heading="Textareas - Icons">
          <TextareasIcon></TextareasIcon>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12">
        <BaseCard heading="Textareas - Auto grow">
          <TextareasAutoGrow></TextareasAutoGrow>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12">
        <BaseCard heading="Textareas - Background color">
          <TextareasBackgroundColor></TextareasBackgroundColor>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12">
        <BaseCard heading="Textareas - Browser autocomplete">
          <TextareasBrowserAutocomplete></TextareasBrowserAutocomplete>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12">
        <BaseCard heading="Textareas - Clearable">
          <TextareasClearable></TextareasClearable>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12">
        <BaseCard heading="Textareas - Counter">
          <TextareasCounter></TextareasCounter>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12">
        <BaseCard heading="Textareas - No resize">
          <TextareasNoresize></TextareasNoresize>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12">
        <BaseCard heading="Textareas - Rows">
          <TextareasRows></TextareasRows>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12">
        <BaseCard heading="Textareas - Beautiful Forms">
          <TextareasBeautifulForms></TextareasBeautifulForms>
        </BaseCard>
      </v-col>
    </v-row>
</template>

