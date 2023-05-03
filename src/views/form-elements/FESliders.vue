<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";
import SlidersMinMax from "@/components/vuetifyComponents/sliders/SlidersMinMax.vue";
import SlidersDisabled from "@/components/vuetifyComponents/sliders/SlidersDisabled.vue";
import SlidersReadonly from "@/components/vuetifyComponents/sliders/SlidersReadonly.vue";
import SlidersIcons from "@/components/vuetifyComponents/sliders/SlidersIcons.vue";
import SlidersVertical from "@/components/vuetifyComponents/sliders/SlidersVertical.vue";
import SlidersThumb from "@/components/vuetifyComponents/sliders/SlidersThumb.vue";
import SlidersInverseLabel from "@/components/vuetifyComponents/sliders/SlidersInverseLabel.vue";
import SlidersCustomRange from "@/components/vuetifyComponents/sliders/SlidersCustomRange.vue";
import SlidersTicks from "@/components/vuetifyComponents/sliders/SlidersTicks.vue";
import SlidersCustomcolors from "@/components/vuetifyComponents/sliders/SlidersCustomcolors.vue";
import SlidersRange from "@/components/vuetifyComponents/sliders/SlidersRange.vue";
import SlidersValidation from "@/components/vuetifyComponents/sliders/SlidersValidation.vue";
import SlidersSlots from "@/components/vuetifyComponents/sliders/SlidersSlots.vue";

const page = ref({ title: "Sliders" });
const breadcrumbs = ref([
  {
    text: "Form Elements",
    disabled: false,
    href: "#",
  },
  {
    text: "Sliders",
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
        <BaseCard heading="Sliders - Min & Max values">
          <SlidersMinMax></SlidersMinMax>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12">
        <BaseCard heading="Sliders - Disabled">
          <SlidersDisabled></SlidersDisabled>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12">
        <BaseCard heading="Sliders - Readonly">
          <SlidersReadonly></SlidersReadonly>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12">
        <BaseCard heading="Sliders - Icons">
          <SlidersIcons></SlidersIcons>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12">
        <BaseCard heading="Sliders - Vertical sliders">
          <SlidersVertical></SlidersVertical>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12">
        <BaseCard heading="Sliders - Thumb">
          <SlidersThumb></SlidersThumb>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12">
        <BaseCard heading="Sliders - Inverse label">
          <SlidersInverseLabel></SlidersInverseLabel>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12">
        <BaseCard heading="Sliders - Ticks">
          <SlidersTicks></SlidersTicks>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12">
        <BaseCard heading="Sliders - Custom colors">
          <SlidersCustomcolors></SlidersCustomcolors>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12">
        <BaseCard heading="Sliders - Range">
          <SlidersRange></SlidersRange>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12">
        <BaseCard heading="Sliders - Validation">
          <SlidersValidation></SlidersValidation>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12">
        <BaseCard heading="Sliders - Slots">
          <SlidersSlots></SlidersSlots>
        </BaseCard>
      </v-col>
    </v-row>
</template>

