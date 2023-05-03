<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import MenusAnchor from "@/components/vuetifyComponents/menus/MenusAnchor.vue";
import MenusHover from "@/components/vuetifyComponents/menus/MenusHover.vue";
import MenusActivatorTooltip from "@/components/vuetifyComponents/menus/MenusActivatorTooltip.vue";
import MenusPopover from "@/components/vuetifyComponents/menus/MenusPopover.vue";

const page = ref({ title: "Menus" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Menus",
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
      <BaseCard heading="Anchor">
        <MenusAnchor />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Hover">
        <MenusHover />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Activator and tooltip">
        <MenusActivatorTooltip />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Popover">
        <MenusPopover />
      </BaseCard>
    </v-col>
  </v-row>
</template>
