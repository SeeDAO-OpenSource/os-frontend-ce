<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import BRPill from "@/components/vuetifyStyleComponents/border-radius/BRPill.vue";
import BRSide from "@/components/vuetifyStyleComponents/border-radius/BRSide.vue";
import BRCorner from "@/components/vuetifyStyleComponents/border-radius/BRCorner.vue";
import BRRemove from "@/components/vuetifyStyleComponents/border-radius/BRRemove.vue";

const page = ref({ title: "Border Radius" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Border Radius",
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
      <BaseCard heading="Pill and circle">
        <BRPill/>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Rounding by corner">
        <BRRemove/>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" class="d-flex align-items-stretch">
      <BaseCard heading="Rounding by side">
        <BRSide/>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" class="d-flex align-items-stretch">
      <BaseCard heading="Rounding by corner">
        <BRCorner/>
      </BaseCard>
    </v-col>
    
  </v-row>
</template>