<script setup lang="ts">
import { ref, watch } from "vue";
import { useCustomizerStore } from "@/stores/customizer";
import HorizontalItems from "./horizontalItems";
import VerticalSidebar from "../vertical-sidebar/VerticalSidebar.vue";

const customizer = useCustomizerStore();
const sidebarMenu = ref(HorizontalItems);
function subIsActive(input: any) {
  const paths = Array.isArray(input) ? input : [input];
  return paths.some((path) => {
    return; //$route.path.indexOf(path) === 0; // current path starts with this path string
  });
}
</script>

<template>
  <template v-if="$vuetify.display.mdAndUp">
    <div
      class="horizontalMenu"
      :style="
        customizer.darktheme
          ? 'background:#2b2b2b'
          : `background:` + customizer.SidebarColor
      "
    >
      <ul
        class="horizontal-navbar"
        :class="customizer.SidebarColor == 'white' ? '' : 'text-white'"
      >
        <li v-for="(item, i) in sidebarMenu" :key="i">
          <!-- single item -->
          <ul v-if="!item.children">
            <li class="single-item">
              <router-link :to="item.to">
                <vue-feather :type="item.icon" class="feather-sm"></vue-feather>
                <span>{{ item.title }}</span>
              </router-link>
            </li>
          </ul>
          <!-- start Item with Dropdown -->
          <div v-else>
            <ul class="first-level" :class="item.extraclass">
              <li>
                <a
                  class="d-flex align-center" href="#"
                  :class="{ 'is-link-active': subIsActive(item.to) }"
                >
                  <div class="d-flex align-center">
                    <vue-feather
                      :type="item.icon"
                      class="feather-sm"
                    ></vue-feather>
                    <span>{{ item.title }}</span>
                    <i class="mdi mdi-chevron-down ml-1 mr-0 sidebar-icon"></i>
                  </div>
                  <!-- Start Dropdown Item -->
                  <ul
                    class="second-level"
                    :class="item.class"
                    :style="
                      customizer.darktheme
                        ? 'background:#2b2b2b'
                        : `background:` + customizer.SidebarColor
                    "
                  >
                    <li v-for="(child, i) in item.children" :key="i">
                      <router-link :to="child.to" class="d-flex align-center">
                        <i :class="child.icon"></i>
                        <span>{{ child.title }}</span>
                      </router-link>
                    </li>
                  </ul>
                  <!-- End Dropdown Item -->
                </a>
              </li>
            </ul>
          </div>
          <!-- end Item with Dropdown -->
        </li>
      </ul>
    </div>
  </template>
  <div v-else class="mobile-menu">
    <VerticalSidebar />
  </div>
</template>
<style lang="scss"></style>
