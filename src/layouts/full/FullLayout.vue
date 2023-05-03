<script setup lang="ts">
import { RouterView } from "vue-router";
import VerticalSidebarVue from "./vertical-sidebar/VerticalSidebar.vue";
import VerticalHeaderVue from "./vertical-header/VerticalHeader.vue";
import Customizer from "./customizer/Customizer.vue";
import { useCustomizerStore } from "@/stores/customizer";
import HorizontalHeader from "./horizontal-header/HorizontalHeader.vue";
import HorizontalSidebar from "./horizontal-sidebar/HorizontalSidebar.vue";
const customizer = useCustomizerStore();
</script>

<template>
  <v-app
    :theme="customizer.darktheme ? 'dark' : 'light'"
    :class="[
      customizer.mini_sidebar ? 'mini-sidebar' : '',
      customizer.setHorizontalLayout ? 'horizontalLayout' : 'verticalLayout',
    ]"
  >
    <Customizer />
    <VerticalSidebarVue v-if="!customizer.setHorizontalLayout" />
    <VerticalHeaderVue v-if="!customizer.setHorizontalLayout" />
    <v-main>
      <HorizontalHeader v-if="customizer.setHorizontalLayout" />
      <HorizontalSidebar v-if="customizer.setHorizontalLayout" />
      <v-container fluid class="page-wrapper">
        <RouterView />

        <!-- <v-btn
          class="customizer-btn"
          icon="mdi-cog"
          size="large"
          flat
          @click.stop="
            customizer.SET_CUSTOMIZER_DRAWER(!customizer.Customizer_drawer)
          "
        >
        </v-btn> -->
      </v-container>
    </v-main>
  </v-app>
</template>
