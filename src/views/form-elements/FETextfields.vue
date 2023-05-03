<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";
import TextfieldSingleline from "@/components/vuetifyComponents/textfields/TextfieldSingleline.vue";
import TextfieldShaped from "@/components/vuetifyComponents/textfields/TextfieldShaped.vue";
import TextfieldDisabledReadonly from "@/components/vuetifyComponents/textfields/TextfieldDisabledReadonly.vue";

import TextfieldDense from "@/components/vuetifyComponents/textfields/TextfieldDense.vue";
import TextfieldIcons from "@/components/vuetifyComponents/textfields/TextfieldIcons.vue";
import TextfieldPasswordInput from "@/components/vuetifyComponents/textfields/TextfieldPasswordInput.vue";

import TextfieldClearable from "@/components/vuetifyComponents/textfields/TextfieldClearable.vue";
import TextfieldCharacterCounter from "@/components/vuetifyComponents/textfields/TextfieldCharacterCounter.vue";

import TextfieldAutohideDetails from "@/components/vuetifyComponents/textfields/TextfieldAutohideDetails.vue";

import TextfieldBoxStyle from "@/components/vuetifyComponents/textfields/TextfieldBoxStyle.vue";
import TextfieldSoloStyle from "@/components/vuetifyComponents/textfields/TextfieldSoloStyle.vue";
import TextfieldOutlineStyle from "@/components/vuetifyComponents/textfields/TextfieldOutlineStyle.vue";
import TextfieldCustomColors from "@/components/vuetifyComponents/textfields/TextfieldCustomColors.vue";
import TextfieldMask from "@/components/vuetifyComponents/textfields/TextfieldMask.vue";
import TextfieldHintText from "@/components/vuetifyComponents/textfields/TextfieldHintText.vue";
import TextfieldPrefixesSuffixes from "@/components/vuetifyComponents/textfields/TextfieldPrefixesSuffixes.vue";

import TextfieldIconEvents from "@/components/vuetifyComponents/textfields/TextfieldIconEvents.vue";
import TextfieldIconSlots from "@/components/vuetifyComponents/textfields/TextfieldIconSlots.vue";
import TextfieldLabelSlots from "@/components/vuetifyComponents/textfields/TextfieldLabelSlots.vue";
import TextfieldValidation from "@/components/vuetifyComponents/textfields/TextfieldValidation.vue";
import TextfieldFullwidthCharahterCounter from "@/components/vuetifyComponents/textfields/TextfieldFullwidthCharahterCounter.vue";

import TextfieldProgressbar from "@/components/vuetifyComponents/textfields/TextfieldProgressbar.vue";

const page = ref({ title: "TextFields" });
const breadcrumbs = ref([
  {
    text: "Form Elements",
    disabled: false,
    href: "#",
  },
  {
    text: "TextFields",
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
      <BaseCard heading="Textfields - Single line">
        <TextfieldSingleline></TextfieldSingleline>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Textfields - Shaped">
        <TextfieldShaped></TextfieldShaped>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Textfields - Disabled and readonly">
        <TextfieldDisabledReadonly></TextfieldDisabledReadonly>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Textfields - Dense">
        <TextfieldDense></TextfieldDense>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Textfields - Icons">
        <TextfieldIcons></TextfieldIcons>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Textfields - Clearable">
        <TextfieldClearable></TextfieldClearable>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Textfields - Character counter">
        <TextfieldCharacterCounter></TextfieldCharacterCounter>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Textfields - Auto hiding details">
        <TextfieldAutohideDetails></TextfieldAutohideDetails>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Textfields - Password input">
        <TextfieldPasswordInput></TextfieldPasswordInput>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Textfields - Box style">
        <TextfieldBoxStyle></TextfieldBoxStyle>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Textfields - Solo style">
        <TextfieldSoloStyle></TextfieldSoloStyle>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Textfields - Outlined style">
        <TextfieldOutlineStyle></TextfieldOutlineStyle>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Textfields - Custom colors">
        <TextfieldCustomColors></TextfieldCustomColors>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Textfields - Hint text">
        <TextfieldHintText></TextfieldHintText>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Textfields - Prefixes & suffixes">
        <TextfieldPrefixesSuffixes></TextfieldPrefixesSuffixes>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Textfields - Icon events">
        <TextfieldIconEvents></TextfieldIconEvents>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Textfields - Icon slots">
        <TextfieldIconSlots></TextfieldIconSlots>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Textfields - Label slot">
        <TextfieldLabelSlots></TextfieldLabelSlots>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Textfields - Validation">
        <TextfieldValidation></TextfieldValidation>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard
        heading="Textfields - Full-width text field with character counter"
      >
        <TextfieldFullwidthCharahterCounter></TextfieldFullwidthCharahterCounter>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Textfields - Progress bar">
        <TextfieldProgressbar></TextfieldProgressbar>
      </BaseCard>
    </v-col>
  </v-row>
</template>
