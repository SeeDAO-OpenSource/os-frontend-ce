<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";
import GridsAlign from "@/components/vuetifyComponents/grids/GridsAlign.vue";
import GridsBreakpoint from "@/components/vuetifyComponents/grids/GridsBreakpoint.vue";
import GridsJustify from "@/components/vuetifyComponents/grids/GridsJustify.vue";
import GridsNogutters from "@/components/vuetifyComponents/grids/GridsNoGutters.vue";
import GridsOffset from "@/components/vuetifyComponents/grids/GridsOffset.vue";
import GridsOffsetBreakpoint from "@/components/vuetifyComponents/grids/GridsOffsetBreakpoint.vue";
import GridsOrder from "@/components/vuetifyComponents/grids/GridsOrder.vue";
import GridsOrderFirstLast from "@/components/vuetifyComponents/grids/GridsOrderFirstLast.vue";
import GridsColumnwrap from "@/components/vuetifyComponents/grids/GridsColumnwrap.vue";
import GridsEqualwidth from "@/components/vuetifyComponents/grids/GridsEqualwidth.vue";
import GridsGrowshrink from "@/components/vuetifyComponents/grids/GridsGrowshrink.vue";
import GridsMargin from "@/components/vuetifyComponents/grids/GridsMargin.vue";
import GridsNested from "@/components/vuetifyComponents/grids/GridsNested.vue";
import GridOnecolumnwidth from "@/components/vuetifyComponents/grids/GridOnecolumnwidth.vue";
import GridsSpacer from "@/components/vuetifyComponents/grids/GridsSpacer.vue";
import GridsUniquelayout from "@/components/vuetifyComponents/grids/GridsUniquelayout.vue";
import GridsVariablecontentwidth from "@/components/vuetifyComponents/grids/GridsVariablecontentwidth.vue";

const page = ref({ title: "Grids" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Grids",
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
        <GridsAlign />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Breakpoints">
        <GridsBreakpoint />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Justify">
        <GridsJustify />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="No Gutters">
        <GridsNogutters />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Offset">
        <GridsOffset />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Offset Breakpoint">
        <GridsOffsetBreakpoint />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Order">
        <GridsOrder />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Order First and Last">
        <GridsOrderFirstLast />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Column Wrapping">
        <GridsColumnwrap />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Equal Width Column">
        <GridsEqualwidth />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Grow and Shrink">
        <GridsGrowshrink />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Margin">
        <GridsMargin />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Nested Grid">
        <GridsNested />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="One Column Width">
        <GridOnecolumnwidth />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Spacer">
        <GridsSpacer />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Unique Layout">
        <GridsUniquelayout />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Variable content width">
        <GridsVariablecontentwidth />
      </BaseCard>
    </v-col>
  </v-row>
</template>
