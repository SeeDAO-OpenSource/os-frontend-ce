<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import FooterCompany from "@/components/vuetifyComponents/footer/FooterCompany.vue";
import FooterIndigo from "@/components/vuetifyComponents/footer/FooterIndigo.vue";
import FooterTeal from "@/components/vuetifyComponents/footer/FooterTeal.vue";

const page = ref({ title: "Footer" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Footer",
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
      <BaseCard heading="Company Footer">
        <FooterCompany />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Indigo Footer">
        <FooterIndigo />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Teal Footer">
        <FooterTeal />
      </BaseCard>
    </v-col>
  </v-row>
</template>
