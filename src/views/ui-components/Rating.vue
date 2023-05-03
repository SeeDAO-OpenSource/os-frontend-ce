<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import RatingColor from "@/components/vuetifyComponents/rating/RatingColor.vue";
import RatingClearable from "@/components/vuetifyComponents/rating/RatingClearable.vue";
import RatingReadonly from "@/components/vuetifyComponents/rating/RatingReadonly.vue";
import RatingHover from "@/components/vuetifyComponents/rating/RatingHover.vue";
import RatingDensity from "@/components/vuetifyComponents/rating/RatingDensity.vue";
import RatingLabels from "@/components/vuetifyComponents/rating/RatingLabels.vue";
import RatingIcons from "@/components/vuetifyComponents/rating/RatingIcons.vue";
import RatingLength from "@/components/vuetifyComponents/rating/RatingLength.vue";
import RatingAriaLabel from "@/components/vuetifyComponents/rating/RatingAriaLabel.vue";
import RatingItemSlot from "@/components/vuetifyComponents/rating/RatingItemSlot.vue";
import RatingSize from "@/components/vuetifyComponents/rating/RatingSize.vue";

const page = ref({ title: "Rating" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Rating",
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
      <BaseCard heading="Color">
        <RatingColor />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Clearable">
        <RatingClearable />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Read Only">
        <RatingReadonly />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Read Only">
        <RatingHover />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Density">
        <RatingDensity />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Labels">
        <RatingLabels />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Icons">
        <RatingIcons />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Length">
        <RatingLength />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Aria labels">
        <RatingAriaLabel />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Item slot">
        <RatingItemSlot />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Size">
        <RatingSize />
      </BaseCard>
    </v-col>
  </v-row>
</template>
