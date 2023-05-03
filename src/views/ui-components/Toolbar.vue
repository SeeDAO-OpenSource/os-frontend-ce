<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import ToolbarBackground from "@/components/vuetifyComponents/toolbar/ToolbarBackground.vue";
import ToolbarCollapse from "@/components/vuetifyComponents/toolbar/ToolbarCollapse.vue";
import ToolbarDense from "@/components/vuetifyComponents/toolbar/ToolbarDense.vue";
import ToolbarExtended from "@/components/vuetifyComponents/toolbar/ToolbarExtended.vue";
import ToolbarExtensionHeight from "@/components/vuetifyComponents/toolbar/ToolbarExtensionHeight.vue";
import ToolbarFloat from "@/components/vuetifyComponents/toolbar/ToolbarFloat.vue";
import ToolbarLightDark from "@/components/vuetifyComponents/toolbar/ToolbarLightDark.vue";
import ToolbarProminent from "@/components/vuetifyComponents/toolbar/ToolbarProminent.vue";
import ToolbarContextual from "@/components/vuetifyComponents/toolbar/ToolbarContextual.vue";
import ToolbarFlexible from "@/components/vuetifyComponents/toolbar/ToolbarFlexible.vue";
import ToolbarVariations from "@/components/vuetifyComponents/toolbar/ToolbarVariations.vue";

const page = ref({ title: "Toolbar" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Toolbar",
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
      <BaseCard heading="Toolbar - Background">
        <ToolbarBackground />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="Toolbar - Collapse">
        <ToolbarCollapse />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="Toolbar - Collapse">
        <ToolbarDense />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="Toolbar - Extended">
        <ToolbarExtended />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="Extension Height">
        <ToolbarExtensionHeight />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="Prominent Toolbar">
        <ToolbarProminent />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Light-Dark">
        <ToolbarLightDark />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Floating">
        <ToolbarFloat />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Contextual action bar">
        <ToolbarContextual />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Flexible">
        <ToolbarFlexible />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="12">
      <BaseCard heading="Variations">
        <ToolbarVariations />
      </BaseCard>
    </v-col>
  </v-row>
</template>
