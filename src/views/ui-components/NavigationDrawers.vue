<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import NDBottom from "@/components/vuetifyComponents/navigation-drawers/NDBottom.vue";
import NDHover from "@/components/vuetifyComponents/navigation-drawers/NDHover.vue";
import NDBackgroundImages from "@/components/vuetifyComponents/navigation-drawers/NDBackgroundImages.vue";
import NDRail from "@/components/vuetifyComponents/navigation-drawers/NDRail.vue";
import NDFloat from "@/components/vuetifyComponents/navigation-drawers/NDFloat.vue";
import NDPosition from "@/components/vuetifyComponents/navigation-drawers/NDPosition.vue";
import NDTemporary from "@/components/vuetifyComponents/navigation-drawers/NDTemporary.vue";
import MDMultiple from "@/components/vuetifyComponents/navigation-drawers/MDMultiple.vue";

const page = ref({ title: "Navigation Drawers" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Navigation Drawers",
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
      <BaseCard heading="Bottom drawer">
        <NDBottom />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Expand on Hover">
        <NDHover />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Background images">
        <NDBackgroundImages />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Rail Variant">
        <NDRail />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Floating">
        <NDFloat />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Position">
        <NDPosition />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Temporary">
        <NDTemporary />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Multiple">
        <MDMultiple />
      </BaseCard>
    </v-col>
  </v-row>
</template>
