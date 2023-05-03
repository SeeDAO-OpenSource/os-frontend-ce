<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import ButtonsDefault from "@/components/vuetifyComponents/buttons/ButtonsDefault.vue";
import ButtonsOutlined from "@/components/vuetifyComponents/buttons/ButtonsOutlined.vue";
import ButtonsText from "@/components/vuetifyComponents/buttons/ButtonsText.vue";
import ButtonsBlock from "@/components/vuetifyComponents/buttons/ButtonsBlock.vue";
import ButtonsIcon from "@/components/vuetifyComponents/buttons/ButtonsIcon.vue";
import ButtonsIconSmall from "@/components/vuetifyComponents/buttons/ButtonsIconSmall.vue";
import ButtonsIconLarge from "@/components/vuetifyComponents/buttons/ButtonsIconLarge.vue";
import ButtonsRounded from "@/components/vuetifyComponents/buttons/ButtonsRounded.vue";
import ButtonsSizing from "@/components/vuetifyComponents/buttons/ButtonsSizing.vue";

const page = ref({ title: "Buttons" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Buttons",
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
      <BaseCard heading="Default">
        <ButtonsDefault />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="Outlined">
        <ButtonsOutlined />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="Text">
        <ButtonsText />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="Block">
        <ButtonsBlock />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="4" class="d-flex align-items-stretch">
      <BaseCard heading="Icons">
        <ButtonsIcon />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="4" class="d-flex align-items-stretch">
      <BaseCard heading="Small Icons">
        <ButtonsIconSmall />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="4" class="d-flex align-items-stretch">
      <BaseCard heading="Large Icons">
        <ButtonsIconLarge />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Rounded Buttons">
        <ButtonsRounded />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Button Size">
        <ButtonsSizing />
      </BaseCard>
    </v-col>
  </v-row>
</template>
