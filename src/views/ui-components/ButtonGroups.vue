<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import BtnGrpDivided from "@/components/vuetifyComponents/button-group/BtnGrpDivided.vue";
import BtnGrpDefault from "@/components/vuetifyComponents/button-group/BtnGrpDefault.vue";
import BtnGrpText from "@/components/vuetifyComponents/button-group/BtnGrpText.vue";
import BtnGrpPlain from "@/components/vuetifyComponents/button-group/BtnGrpPlain.vue";
import BtnGrpOutlined from "@/components/vuetifyComponents/button-group/BtnGrpOutlined.vue";
import BtnGrpMandatory from "@/components/vuetifyComponents/button-group/BtnGrpMandatory.vue";
import BtnGrpMultiple from "@/components/vuetifyComponents/button-group/BtnGrpMultiple.vue";
import BtnGrpWYSIWYG from "@/components/vuetifyComponents/button-group/BtnGrpWYSIWYG.vue";

const page = ref({ title: "Button Groups" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Button Groups",
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
      <BaseCard heading="Divided">
        <BtnGrpDivided />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="Default">
        <BtnGrpDefault />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="Text">
        <BtnGrpText />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="Plain">
        <BtnGrpPlain />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Outlined">
        <BtnGrpOutlined />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Mandatory">
        <BtnGrpMandatory />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="5" class="d-flex align-items-stretch">
      <BaseCard heading="Multiple">
        <BtnGrpMultiple />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="7" class="d-flex align-items-stretch">
      <BaseCard heading="WYSIWYG">
        <BtnGrpWYSIWYG />
      </BaseCard>
    </v-col>
  </v-row>
</template>
