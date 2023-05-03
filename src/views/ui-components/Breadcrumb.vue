<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import BreadcrumbDivider from "@/components/vuetifyComponents/breadcrumb/BreadcrumbDivider.vue";
import BreadcrumbLarge from "@/components/vuetifyComponents/breadcrumb/BreadcrumbLarge.vue";
import BreadcrumbIcons from "@/components/vuetifyComponents/breadcrumb/BreadcrumbIcons.vue";
import BreadcrumbItem from "@/components/vuetifyComponents/breadcrumb/BreadcrumbItem.vue";

const page = ref({ title: "Breadcrumb" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Breadcrumb",
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
      <BaseCard heading="Divider">
        <BreadcrumbDivider />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="Large">
        <BreadcrumbLarge />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Icons">
        <BreadcrumbIcons />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Items">
        <BreadcrumbItem />
      </BaseCard>
    </v-col>
  </v-row>
</template>
