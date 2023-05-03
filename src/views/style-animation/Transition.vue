<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import CustomOrigin from "@/components/vuetifyStyleComponents/transitions/CustomOrigin.vue";
import Expandx from "@/components/vuetifyStyleComponents/transitions/Expandx.vue";
import Fab from "@/components/vuetifyStyleComponents/transitions/Fab.vue";
import Fade from "@/components/vuetifyStyleComponents/transitions/Fade.vue";
import Scale from "@/components/vuetifyStyleComponents/transitions/Scale.vue";
import Scrollx from "@/components/vuetifyStyleComponents/transitions/Scrollx.vue";
import Scrolly from "@/components/vuetifyStyleComponents/transitions/Scrolly.vue";
import Slidex from "@/components/vuetifyStyleComponents/transitions/Slidex.vue";
import Slidey from "@/components/vuetifyStyleComponents/transitions/Slidey.vue";

const page = ref({ title: "Transition" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Transition",
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
      <BaseCard heading="Custom Origin">
        <CustomOrigin />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Expand x">
        <Expandx />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Fab">
        <Fab />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Fade">
        <Fade />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Scale">
        <Scale />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Scroll x">
        <Scrollx />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Scroll y">
        <Scrolly />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Slide x">
        <Slidex />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Slide y">
        <Slidey />
      </BaseCard>
    </v-col>
  </v-row>
</template>