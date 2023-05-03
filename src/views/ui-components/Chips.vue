<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import ChipsClosable from "@/components/vuetifyComponents/chips/ChipsClosable.vue";
import ChipsColored from "@/components/vuetifyComponents/chips/ChipsColored.vue";
import ChipsDraggable from "@/components/vuetifyComponents/chips/ChipsDraggable.vue";
import ChipsLabel from "@/components/vuetifyComponents/chips/ChipsLabel.vue";
import ChipsOutlined from "@/components/vuetifyComponents/chips/ChipsOutlined.vue";
import ChipsSize from "@/components/vuetifyComponents/chips/ChipsSize.vue";
import ChipsNoRipple from "@/components/vuetifyComponents/chips/ChipsNoRipple.vue";
import ChipsIcon from "@/components/vuetifyComponents/chips/ChipsIcon.vue";
import ChipsAction from "@/components/vuetifyComponents/chips/ChipsAction.vue";
import ChipsExpandable from "@/components/vuetifyComponents/chips/ChipsExpandable.vue";
import ChipsSelect from "@/components/vuetifyComponents/chips/ChipsSelect.vue";

const page = ref({ title: "Chips" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Chips",
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
      <BaseCard heading="Colored">
        <ChipsColored />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Label">
        <ChipsLabel />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Outlined">
        <ChipsOutlined />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Size">
        <ChipsSize />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="4" class="d-flex align-items-stretch">
      <BaseCard heading="Closable">
        <ChipsClosable />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="4" class="d-flex align-items-stretch">
      <BaseCard heading="Draggable">
        <ChipsDraggable />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="4" class="d-flex align-items-stretch">
      <BaseCard heading="No Ripple">
        <ChipsNoRipple />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12">
      <BaseCard heading="Icon">
        <ChipsIcon />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Action">
        <ChipsAction />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Expandable">
        <ChipsExpandable />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Expandable">
        <ChipsSelect />
      </BaseCard>
    </v-col>
  </v-row>
</template>
