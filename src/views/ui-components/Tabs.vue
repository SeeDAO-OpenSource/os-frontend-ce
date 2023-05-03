<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import TabsAlign from "@/components/vuetifyComponents/tabs/TabsAlign.vue";
import TabsCenterActive from "@/components/vuetifyComponents/tabs/TabsCenterActive.vue";
import TabsCustomIcon from "@/components/vuetifyComponents/tabs/TabsCustomIcon.vue"; 
import TabsVertical from "@/components/vuetifyComponents/tabs/TabsVertical.vue"; 

const page = ref({ title: "Tabs" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Tabs",
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
      <BaseCard heading="Align">
        <TabsAlign />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Center Active">
        <TabsCenterActive />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Custom Icon">
        <TabsCustomIcon />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Vertical Tabs">
         <TabsVertical />
      </BaseCard>
    </v-col>
  </v-row>
</template>
