<template>
  <v-navigation-drawer
    app
    temporary
    elevation="10"
    location="right"
    v-model="customizer.Customizer_drawer"
  >
    <div class="px-4 py-4">
      <h3>Customizer</h3>
    </div>
    <v-divider></v-divider>

    <div class="px-4 py-4" v-if="!customizer.darktheme">
      <h4 class="mb-3">Topbar Colors</h4>

      <v-item-group mandatory v-model="customizer.navbarColor">
        <v-item
          v-slot="{ isSelected, toggle }"
          v-for="color in navbarColors"
          :key="color"
          :value="color"
        >
          <v-avatar
            :class="isSelected && 'v-sidebar_active'"
            :color="color"
            class="v-settings__item mr-2 cursor-pointer"
            size="25"
            @click="toggle"
          />
        </v-item>
      </v-item-group>
    </div>
    <v-divider></v-divider>
    <div class="px-4 py-4" v-if="!customizer.darktheme">
      <h4 class="mb-3">Sidebar Colors</h4>

      <v-item-group mandatory v-model="customizer.SidebarColor">
        <v-item
          v-slot="{ isSelected, toggle }"
          v-for="color in sidebarColors"
          :key="color"
          :value="color"
        >
          <v-avatar
            :class="isSelected && 'v-sidebar_active'"
            :color="color"
            class="v-settings__item mr-2 cursor-pointer"
            size="25"
            @click="toggle"
          />
        </v-item>
      </v-item-group>
    </div>
    <v-divider></v-divider>
    <div class="px-4 py-4">
      <h4>Horizontal Layout</h4>
      <div @click="reloadPage">
        <v-checkbox
          hide-details
          v-model="customizer.setHorizontalLayout"
          label="Horizontal"
        ></v-checkbox>
      </div>
      <br />
      <h4>Dark Mode</h4>
      <v-checkbox
        hide-details
        v-model="customizer.darktheme"
        label="Dark"
      ></v-checkbox
      ><br />
      <h4>Mini Sidebar</h4>
      <v-checkbox
        hide-details
        v-model="customizer.mini_sidebar"
        label="Mini"
      ></v-checkbox>
    </div>
    <v-divider></v-divider>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useCustomizerStore } from "@/stores/customizer";
function reloadPage() {
  if (customizer.setHorizontalLayout) {
    window.location.reload();
  }
}
const customizer = useCustomizerStore();
const navbarColors = ref([
  "#f6f6f6",
  "#1e88e6",
  "#21c1d6",
  "#fc4b6c",
  "#563dea",
  "#ff9800",
]);
const sidebarColors = ref([
  "white",
  "#212121",
  "#1e88e6",
  "#fc4b6c",
  "#563dea",
  "#ff9800",
]);
</script>
<style lang="scss">
.v-application .v-item-group .v-avatar--density-default {
  border: 1px solid rgb(0, 0, 0, 0.1) !important;
}
.v-application .v-item-group .v-sidebar_active {
  border: 2px solid black !important;
}
</style>
