
<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import CardsProps from "@/components/vuetifyComponents/cards/CardsProps.vue";
import CardsSlots from "@/components/vuetifyComponents/cards/CardsSlots.vue";
import CardsMarkup from "@/components/vuetifyComponents/cards/CardsMarkup.vue";
import CardsOutlined from "@/components/vuetifyComponents/cards/CardsOutlined.vue";
import CardsReveal from "@/components/vuetifyComponents/cards/CardsReveal.vue";
import CardsCustomActions from "@/components/vuetifyComponents/cards/CardsCustomActions.vue";
import CardsContentWrap from "@/components/vuetifyComponents/cards/CardsContentWrap.vue";
import CardsInformation from "@/components/vuetifyComponents/cards/CardsInformation.vue";
import CardsGrid from "@/components/vuetifyComponents/cards/CardsGrid.vue";
import CardsHorizontal from "@/components/vuetifyComponents/cards/CardsHorizontal.vue";
import CardsMedia from "@/components/vuetifyComponents/cards/CardsMedia.vue";
import CardsWeather from "@/components/vuetifyComponents/cards/CardsWeather.vue";
import CardsLoad from "@/components/vuetifyComponents/cards/CardsLoad.vue";
import CardsTwitter from "@/components/vuetifyComponents/cards/CardsTwitter.vue";

const page = ref({ title: "Cards" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Cards",
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
      <BaseCard heading="With Props">
        <CardsProps />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="With Slots">
        <CardsSlots />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="With Markup">
        <CardsMarkup />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Outlined Card">
        <CardsOutlined />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="Card Reveal">
        <CardsReveal />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="Card Information">
        <CardsInformation />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Custom Actions">
        <CardsCustomActions />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Content Wrap">
        <CardsContentWrap />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="7" class="d-flex align-items-stretch">
      <BaseCard heading="Card Grid">
        <CardsGrid />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="5" class="d-flex align-items-stretch">
      <BaseCard heading="Card Horizontal">
        <CardsHorizontal />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Card Media">
        <CardsMedia />
      </BaseCard>
    </v-col>

    

    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Weather Card">
        <CardsWeather />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="Loading Card">
        <CardsLoad />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="Twitter Card">
        <CardsTwitter />
      </BaseCard>
    </v-col>
  </v-row>
</template>
