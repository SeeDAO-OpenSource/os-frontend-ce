<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import DialogsActivator from "@/components/vuetifyComponents/dialogs/DialogsActivator.vue";
import DialogsModel from "@/components/vuetifyComponents/dialogs/DialogsModel.vue";
import DialogsFullscreen from "@/components/vuetifyComponents/dialogs/DialogsFullscreen.vue";
import DialogsTransitions from "@/components/vuetifyComponents/dialogs/DialogsTransitions.vue";
import DialogsPersistent from "@/components/vuetifyComponents/dialogs/DialogsPersistent.vue";
import DialogsScrollable from "@/components/vuetifyComponents/dialogs/DialogsScrollable.vue";
import DialogsForm from "@/components/vuetifyComponents/dialogs/DialogsForm.vue";
import DialogsNested from "@/components/vuetifyComponents/dialogs/DialogsNested.vue";

const page = ref({ title: "Dialogs" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Dialogs",
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
        <BaseCard heading="Activator">
          <DialogsActivator />
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="V-model">
          <DialogsModel />
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
        <BaseCard heading="Fullscreen">
          <DialogsFullscreen />
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
        <BaseCard heading="Transitions">
          <DialogsTransitions />
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
        <BaseCard heading="Persistent">
          <DialogsPersistent />
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
        <BaseCard heading="Scrollable">
          <DialogsScrollable />
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
        <BaseCard heading="Form">
          <DialogsForm />
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
        <BaseCard heading="Nested Dialog">
          <DialogsNested />
        </BaseCard>
      </v-col>
    </v-row>
</template>
