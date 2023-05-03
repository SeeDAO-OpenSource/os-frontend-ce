<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";
import AutocompletesDence from "@/components/vuetifyComponents/autocompletes/AutocompletesDence.vue";
import AutocompletesStateSelector from "@/components/vuetifyComponents/autocompletes/AutocompletesStateSelector.vue";

const page = ref({ title: "AutoComplate" });
const breadcrumbs = ref([
  {
    text: "Form Elements",
    disabled: false,
    href: "#",
  },
  {
    text: "Autocompletes",
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
    <v-col cols="12" sm="12" lg="12">
      <BaseCard heading="Autocompletes - Dense">
        <AutocompletesDence></AutocompletesDence>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="12">
      <BaseCard heading="Autocompletes - State selector">
        <AutocompletesStateSelector></AutocompletesStateSelector>
      </BaseCard>
    </v-col>
  </v-row>
</template>


