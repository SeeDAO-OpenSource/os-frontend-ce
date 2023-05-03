<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";

import AvatarSize from "@/components/vuetifyComponents/avatar/AvatarSize.vue";
import AvatarTile from "@/components/vuetifyComponents/avatar/AvatarTile.vue";
import AvatarSlots from "@/components/vuetifyComponents/avatar/AvatarSlots.vue";
import AvatarProfileCard from "@/components/vuetifyComponents/avatar/AvatarProfileCard.vue";
import AvatarAdvancedUsage from "@/components/vuetifyComponents/avatar/AvatarAdvancedUsage.vue";
import AvatarMenu from "@/components/vuetifyComponents/avatar/AvatarMenu.vue";

const page = ref({ title: "Avatar" });
const breadcrumbs = ref([
  {
    text: "Ui Components",
    disabled: false,
    href: "#",
  },
  {
    text: "Avatar",
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
      <BaseCard heading="Avatar - Size">
        <AvatarSize></AvatarSize>
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Avatar - Tile">
        <AvatarTile></AvatarTile>
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Avatar - Size">
        <AvatarSlots />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Avatar - Menu">
        <AvatarMenu />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12">
      <BaseCard heading="Avatar - Profile Card">
        <AvatarProfileCard></AvatarProfileCard>
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Avatar - Advanced usage">
        <AvatarAdvancedUsage></AvatarAdvancedUsage>
      </BaseCard>
    </v-col>
  </v-row>
</template>
