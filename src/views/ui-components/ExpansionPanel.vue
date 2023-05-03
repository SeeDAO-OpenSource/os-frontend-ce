<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import ExpansionDefault from "@/components/vuetifyComponents/expansionpanel/ExpansionDefault.vue";
import ExpansionAccordian from "@/components/vuetifyComponents/expansionpanel/ExpansionAccordian.vue";
import ExpansionInset from "@/components/vuetifyComponents/expansionpanel/ExpansionInset.vue";
import ExpansionPopout from "@/components/vuetifyComponents/expansionpanel/ExpansionPopout.vue";
import ExpansionDisabled from "@/components/vuetifyComponents/expansionpanel/ExpansionDisabled.vue";
import ExpansionModel from "@/components/vuetifyComponents/expansionpanel/ExpansionModel.vue";
import ExpansionReadonly from "@/components/vuetifyComponents/expansionpanel/ExpansionReadonly.vue";
import ExpansionCustomIcon from "@/components/vuetifyComponents/expansionpanel/ExpansionCustomIcon.vue";

const page = ref({ title: "Expansion Panel" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Expansion Panel",
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
      <BaseCard heading="Default">
        <ExpansionDefault />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Accordian">
        <ExpansionAccordian />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Inset">
        <ExpansionInset />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Popout">
        <ExpansionPopout />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Disabled">
        <ExpansionDisabled />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Disabled">
        <ExpansionModel />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Read Only">
        <ExpansionReadonly />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Custom Icon">
        <ExpansionCustomIcon />
      </BaseCard>
    </v-col>
  </v-row>
</template>
