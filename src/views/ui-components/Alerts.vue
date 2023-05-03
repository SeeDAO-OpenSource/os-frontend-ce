<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import AlertType from "@/components/vuetifyComponents/alerts/AlertType.vue";
import AlertBorder from "@/components/vuetifyComponents/alerts/AlertBorder.vue";
import AlertColorBorder from "@/components/vuetifyComponents/alerts/AlertColorBorder.vue";
import AlertDensity from "@/components/vuetifyComponents/alerts/AlertDensity.vue";
import AlertClosable from "@/components/vuetifyComponents/alerts/AlertClosable.vue";
import AlertIcon from "@/components/vuetifyComponents/alerts/AlertIcon.vue";
import AlertOutlined from "@/components/vuetifyComponents/alerts/AlertOutlined.vue";
import AlertProminent from "@/components/vuetifyComponents/alerts/AlertProminent.vue";
import AlertVariant from "@/components/vuetifyComponents/alerts/AlertVariant.vue";
import AlertRounded from "@/components/vuetifyComponents/alerts/AlertRounded.vue";

const page = ref({ title: "Alert" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Alert",
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
      <BaseCard heading="Alert - Type">
        <AlertType/>
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Alert - Border">
        <AlertBorder />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Alert - Coloured Border">
        <AlertColorBorder />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Alert - Density">
        <AlertDensity />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Alert - Closable">
        <AlertClosable />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Alert - Icon">
        <AlertIcon />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Alert - Outlined">
        <AlertOutlined />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Alert - Prominent">
        <AlertProminent />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12">
      <BaseCard heading="Alert - Variant">
        <AlertVariant />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12">
      <BaseCard heading="Alert - Rounded">
        <AlertRounded />
      </BaseCard>
    </v-col>
  </v-row>
</template>