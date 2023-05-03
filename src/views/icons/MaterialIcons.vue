<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";

const page = ref({ title: "Material" });
const breadcrumbs = ref([
  {
    text: "Icons",
    disabled: false,
    href: "#",
  },
  {
    text: "Material",
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
  <v-row vs-justify="center">
    <v-col lg="12" cols="12">
      <v-card>
        <v-card-text class="pa-5">
          <v-row>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-access-point"></i>
              <code class="mr-2">f002</code>
              <span>mdi-access-point</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-access-point-network"></i>
              <code class="mr-2">f003</code>
              <span>mdi-access-point-network</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-account"></i>
              <code class="mr-2">f004</code>
              <span>mdi-account</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-account-alert"></i>
              <code class="mr-2">f005</code>
              <span>mdi-account-alert</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-account-box"></i>
              <code class="mr-2">f006</code>
              <span>mdi-account-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-account-box-outline"></i>
              <code class="mr-2">f007</code>
              <span>mdi-account-box-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-account-check"></i>
              <code class="mr-2">f008</code>
              <span>mdi-account-check</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-account-circle"></i>
              <code class="mr-2">f009</code>
              <span>mdi-account-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-account-convert"></i>
              <code class="mr-2">f00a</code>
              <span>mdi-account-convert</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-account-edit"></i>
              <code class="mr-2">f6bb</code>
              <span>mdi-account-edit</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-account-key"></i>
              <code class="mr-2">f00b</code>
              <span>mdi-account-key</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-account-minus"></i>
              <code class="mr-2">f00d</code>
              <span>mdi-account-minus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-account-multiple"></i>
              <code class="mr-2">f00e</code>
              <span>mdi-account-multiple</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-account-multiple-minus"></i>
              <code class="mr-2">f5d3</code>
              <span>mdi-account-multiple-minus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-account-multiple-outline"></i>
              <code class="mr-2">f00f</code>
              <span>mdi-account-multiple-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-account-multiple-plus"></i>
              <code class="mr-2">f010</code>
              <span>mdi-account-multiple-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-account-network"></i>
              <code class="mr-2">f011</code>
              <span>mdi-account-network</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-account-off"></i>
              <code class="mr-2">f012</code>
              <span>mdi-account-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-account-outline"></i>
              <code class="mr-2">f013</code>
              <span>mdi-account-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-account-plus"></i>
              <code class="mr-2">f014</code>
              <span>mdi-account-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-account-remove"></i>
              <code class="mr-2">f015</code>
              <span>mdi-account-remove</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-account-search"></i>
              <code class="mr-2">f016</code>
              <span>mdi-account-search</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-account-settings"></i>
              <code class="mr-2">f630</code>
              <span>mdi-account-settings</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-account-star"></i>
              <code class="mr-2">f017</code>
              <span>mdi-account-star</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-account-switch"></i>
              <code class="mr-2">f019</code>
              <span>mdi-account-switch</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-adjust"></i>
              <code class="mr-2">f01a</code>
              <span>mdi-adjust</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-air-conditioner"></i>
              <code class="mr-2">f01b</code>
              <span>mdi-air-conditioner</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-airballoon"></i>
              <code class="mr-2">f01c</code>
              <span>mdi-airballoon</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-airplane"></i>
              <code class="mr-2">f01d</code>
              <span>mdi-airplane</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-airplane-landing"></i>
              <code class="mr-2">f5d4</code>
              <span>mdi-airplane-landing</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-airplane-off"></i>
              <code class="mr-2">f01e</code>
              <span>mdi-airplane-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-airplane-takeoff"></i>
              <code class="mr-2">f5d5</code>
              <span>mdi-airplane-takeoff</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-alarm"></i>
              <code class="mr-2">f020</code>
              <span>mdi-alarm</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-alarm-check"></i>
              <code class="mr-2">f021</code>
              <span>mdi-alarm-check</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-alarm-multiple"></i>
              <code class="mr-2">f022</code>
              <span>mdi-alarm-multiple</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-alarm-off"></i>
              <code class="mr-2">f023</code>
              <span>mdi-alarm-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-alarm-plus"></i>
              <code class="mr-2">f024</code>
              <span>mdi-alarm-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-alarm-snooze"></i>
              <code class="mr-2">f68d</code>
              <span>mdi-alarm-snooze</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-album"></i>
              <code class="mr-2">f025</code>
              <span>mdi-album</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-alert"></i>
              <code class="mr-2">f026</code>
              <span>mdi-alert</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-alert-box"></i>
              <code class="mr-2">f027</code>
              <span>mdi-alert-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-alert-circle"></i>
              <code class="mr-2">f028</code>
              <span>mdi-alert-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-alert-circle-outline"></i>
              <code class="mr-2">f5d6</code>
              <span>mdi-alert-circle-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-alert-octagon"></i>
              <code class="mr-2">f029</code>
              <span>mdi-alert-octagon</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-alert-octagram"></i>
              <code class="mr-2">f6bc</code>
              <span>mdi-alert-octagram</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-alert-outline"></i>
              <code class="mr-2">f02a</code>
              <span>mdi-alert-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-all-inclusive"></i>
              <code class="mr-2">f6bd</code>
              <span>mdi-all-inclusive</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-alpha"></i>
              <code class="mr-2">f02b</code>
              <span>mdi-alpha</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-alphabetical"></i>
              <code class="mr-2">f02c</code>
              <span>mdi-alphabetical</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-altimeter"></i>
              <code class="mr-2">f5d7</code>
              <span>mdi-altimeter</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-amazon"></i>
              <code class="mr-2">f02d</code>
              <span>mdi-amazon</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-amazon-clouddrive"></i>
              <code class="mr-2">f02e</code>
              <span>mdi-amazon-clouddrive</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-ambulance"></i>
              <code class="mr-2">f02f</code>
              <span>mdi-ambulance</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-amplifier"></i>
              <code class="mr-2">f030</code>
              <span>mdi-amplifier</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-anchor"></i>
              <code class="mr-2">f031</code>
              <span>mdi-anchor</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-android"></i>
              <code class="mr-2">f032</code>
              <span>mdi-android</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-android-debug-bridge"></i>
              <code class="mr-2">f033</code>
              <span>mdi-android-debug-bridge</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-android-studio"></i>
              <code class="mr-2">f034</code>
              <span>mdi-android-studio</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-angular"></i>
              <code class="mr-2">f6b1</code>
              <span>mdi-angular</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-angularjs"></i>
              <code class="mr-2">f6be</code>
              <span>mdi-angularjs</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-animation"></i>
              <code class="mr-2">f5d8</code>
              <span>mdi-animation</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-apple"></i>
              <code class="mr-2">f035</code>
              <span>mdi-apple</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-apple-finder"></i>
              <code class="mr-2">f036</code>
              <span>mdi-apple-finder</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-apple-ios"></i>
              <code class="mr-2">f037</code>
              <span>mdi-apple-ios</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-apple-keyboard-caps"></i>
              <code class="mr-2">f632</code>
              <span>mdi-apple-keyboard-caps</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-apple-keyboard-command"></i>
              <code class="mr-2">f633</code>
              <span>mdi-apple-keyboard-command</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-apple-keyboard-control"></i>
              <code class="mr-2">f634</code>
              <span>mdi-apple-keyboard-control</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-apple-keyboard-option"></i>
              <code class="mr-2">f635</code>
              <span>mdi-apple-keyboard-option</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-apple-keyboard-shift"></i>
              <code class="mr-2">f636</code>
              <span>mdi-apple-keyboard-shift</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-apple-safari"></i>
              <code class="mr-2">f039</code>
              <span>mdi-apple-safari</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-application"></i>
              <code class="mr-2">f614</code>
              <span>mdi-application</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-apps"></i>
              <code class="mr-2">f03b</code>
              <span>mdi-apps</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-archive"></i>
              <code class="mr-2">f03c</code>
              <span>mdi-archive</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrange-bring-forward"></i>
              <code class="mr-2">f03d</code>
              <span>mdi-arrange-bring-forward</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrange-bring-to-front"></i>
              <code class="mr-2">f03e</code>
              <span>mdi-arrange-bring-to-front</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrange-send-backward"></i>
              <code class="mr-2">f03f</code>
              <span>mdi-arrange-send-backward</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrange-send-to-back"></i>
              <code class="mr-2">f040</code>
              <span>mdi-arrange-send-to-back</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-all"></i>
              <code class="mr-2">f041</code>
              <span>mdi-arrow-all</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-bottom-left"></i>
              <code class="mr-2">f042</code>
              <span>mdi-arrow-bottom-left</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-bottom-right"></i>
              <code class="mr-2">f043</code>
              <span>mdi-arrow-bottom-right</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-down"></i>
              <code class="mr-2">f045</code>
              <span>mdi-arrow-down</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-down-bold"></i>
              <code class="mr-2">f046</code>
              <span>mdi-arrow-down-bold</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-down-bold-circle"></i>
              <code class="mr-2">f047</code>
              <span>mdi-arrow-down-bold-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-down-bold-circle-outline"></i>
              <code class="mr-2">f048</code>
              <span>mdi-arrow-down-bold-circle-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-down-bold-hexagon-outline"></i>
              <code class="mr-2">f049</code>
              <span>mdi-arrow-down-bold-hexagon-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-down-box"></i>
              <code class="mr-2">f6bf</code>
              <span>mdi-arrow-down-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-down-drop-circle"></i>
              <code class="mr-2">f04a</code>
              <span>mdi-arrow-down-drop-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-down-drop-circle-outline"></i>
              <code class="mr-2">f04b</code>
              <span>mdi-arrow-down-drop-circle-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-expand"></i>
              <code class="mr-2">f616</code>
              <span>mdi-arrow-expand</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-expand-all"></i>
              <code class="mr-2">f04c</code>
              <span>mdi-arrow-expand-all</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-left"></i>
              <code class="mr-2">f04d</code>
              <span>mdi-arrow-left</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-left-bold"></i>
              <code class="mr-2">f04e</code>
              <span>mdi-arrow-left-bold</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-left-bold-circle"></i>
              <code class="mr-2">f04f</code>
              <span>mdi-arrow-left-bold-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-left-bold-circle-outline"></i>
              <code class="mr-2">f050</code>
              <span>mdi-arrow-left-bold-circle-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-left-bold-hexagon-outline"></i>
              <code class="mr-2">f051</code>
              <span>mdi-arrow-left-bold-hexagon-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-left-box"></i>
              <code class="mr-2">f6c0</code>
              <span>mdi-arrow-left-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-left-drop-circle"></i>
              <code class="mr-2">f052</code>
              <span>mdi-arrow-left-drop-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-left-drop-circle-outline"></i>
              <code class="mr-2">f053</code>
              <span>mdi-arrow-left-drop-circle-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-right"></i>
              <code class="mr-2">f054</code>
              <span>mdi-arrow-right</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-right-bold"></i>
              <code class="mr-2">f055</code>
              <span>mdi-arrow-right-bold</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-right-bold-circle"></i>
              <code class="mr-2">f056</code>
              <span>mdi-arrow-right-bold-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-right-bold-circle-outline"></i>
              <code class="mr-2">f057</code>
              <span>mdi-arrow-right-bold-circle-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-right-bold-hexagon-outline"></i>
              <code class="mr-2">f058</code>
              <span>mdi-arrow-right-bold-hexagon-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-right-box"></i>
              <code class="mr-2">f6c1</code>
              <span>mdi-arrow-right-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-right-drop-circle"></i>
              <code class="mr-2">f059</code>
              <span>mdi-arrow-right-drop-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-right-drop-circle-outline"></i>
              <code class="mr-2">f05a</code>
              <span>mdi-arrow-right-drop-circle-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-top-left"></i>
              <code class="mr-2">f05b</code>
              <span>mdi-arrow-top-left</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-top-right"></i>
              <code class="mr-2">f05c</code>
              <span>mdi-arrow-top-right</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-up"></i>
              <code class="mr-2">f05d</code>
              <span>mdi-arrow-up</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-up-bold"></i>
              <code class="mr-2">f05e</code>
              <span>mdi-arrow-up-bold</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-up-bold-circle"></i>
              <code class="mr-2">f05f</code>
              <span>mdi-arrow-up-bold-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-up-bold-circle-outline"></i>
              <code class="mr-2">f060</code>
              <span>mdi-arrow-up-bold-circle-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-up-bold-hexagon-outline"></i>
              <code class="mr-2">f061</code>
              <span>mdi-arrow-up-bold-hexagon-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-up-box"></i>
              <code class="mr-2">f6c2</code>
              <span>mdi-arrow-up-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-up-drop-circle"></i>
              <code class="mr-2">f062</code>
              <span>mdi-arrow-up-drop-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-arrow-up-drop-circle-outline"></i>
              <code class="mr-2">f063</code>
              <span>mdi-arrow-up-drop-circle-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-assistant"></i>
              <code class="mr-2">f064</code>
              <span>mdi-assistant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-asterisk"></i>
              <code class="mr-2">f6c3</code>
              <span>mdi-asterisk</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-at"></i>
              <code class="mr-2">f065</code>
              <span>mdi-at</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-attachment"></i>
              <code class="mr-2">f066</code>
              <span>mdi-attachment</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-auto-fix"></i>
              <code class="mr-2">f068</code>
              <span>mdi-auto-fix</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-auto-upload"></i>
              <code class="mr-2">f069</code>
              <span>mdi-auto-upload</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-autorenew"></i>
              <code class="mr-2">f06a</code>
              <span>mdi-autorenew</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-av-timer"></i>
              <code class="mr-2">f06b</code>
              <span>mdi-av-timer</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-baby"></i>
              <code class="mr-2">f06c</code>
              <span>mdi-baby</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-backburger"></i>
              <code class="mr-2">f06d</code>
              <span>mdi-backburger</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-backspace"></i>
              <code class="mr-2">f06e</code>
              <span>mdi-backspace</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-backup-restore"></i>
              <code class="mr-2">f06f</code>
              <span>mdi-backup-restore</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bandcamp"></i>
              <code class="mr-2">f674</code>
              <span>mdi-bandcamp</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bank"></i>
              <code class="mr-2">f070</code>
              <span>mdi-bank</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-barcode"></i>
              <code class="mr-2">f071</code>
              <span>mdi-barcode</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-barcode-scan"></i>
              <code class="mr-2">f072</code>
              <span>mdi-barcode-scan</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-barley"></i>
              <code class="mr-2">f073</code>
              <span>mdi-barley</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-barrel"></i>
              <code class="mr-2">f074</code>
              <span>mdi-barrel</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-basket"></i>
              <code class="mr-2">f076</code>
              <span>mdi-basket</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-basket-fill"></i>
              <code class="mr-2">f077</code>
              <span>mdi-basket-fill</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-basket-unfill"></i>
              <code class="mr-2">f078</code>
              <span>mdi-basket-unfill</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-battery"></i>
              <code class="mr-2">f079</code>
              <span>mdi-battery</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-battery-10"></i>
              <code class="mr-2">f07a</code>
              <span>mdi-battery-10</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-battery-20"></i>
              <code class="mr-2">f07b</code>
              <span>mdi-battery-20</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-battery-30"></i>
              <code class="mr-2">f07c</code>
              <span>mdi-battery-30</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-battery-40"></i>
              <code class="mr-2">f07d</code>
              <span>mdi-battery-40</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-battery-50"></i>
              <code class="mr-2">f07e</code>
              <span>mdi-battery-50</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-battery-60"></i>
              <code class="mr-2">f07f</code>
              <span>mdi-battery-60</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-battery-70"></i>
              <code class="mr-2">f080</code>
              <span>mdi-battery-70</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-battery-80"></i>
              <code class="mr-2">f081</code>
              <span>mdi-battery-80</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-battery-90"></i>
              <code class="mr-2">f082</code>
              <span>mdi-battery-90</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-battery-alert"></i>
              <code class="mr-2">f083</code>
              <span>mdi-battery-alert</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-battery-charging"></i>
              <code class="mr-2">f084</code>
              <span>mdi-battery-charging</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-battery-charging-100"></i>
              <code class="mr-2">f085</code>
              <span>mdi-battery-charging-100</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-battery-charging-20"></i>
              <code class="mr-2">f086</code>
              <span>mdi-battery-charging-20</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-battery-charging-30"></i>
              <code class="mr-2">f087</code>
              <span>mdi-battery-charging-30</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-battery-charging-40"></i>
              <code class="mr-2">f088</code>
              <span>mdi-battery-charging-40</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-battery-charging-60"></i>
              <code class="mr-2">f089</code>
              <span>mdi-battery-charging-60</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-battery-charging-80"></i>
              <code class="mr-2">f08a</code>
              <span>mdi-battery-charging-80</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-battery-charging-90"></i>
              <code class="mr-2">f08b</code>
              <span>mdi-battery-charging-90</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-battery-minus"></i>
              <code class="mr-2">f08c</code>
              <span>mdi-battery-minus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-battery-negative"></i>
              <code class="mr-2">f08d</code>
              <span>mdi-battery-negative</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-battery-outline"></i>
              <code class="mr-2">f08e</code>
              <span>mdi-battery-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-battery-plus"></i>
              <code class="mr-2">f08f</code>
              <span>mdi-battery-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-battery-positive"></i>
              <code class="mr-2">f090</code>
              <span>mdi-battery-positive</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-battery-unknown"></i>
              <code class="mr-2">f091</code>
              <span>mdi-battery-unknown</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-beach"></i>
              <code class="mr-2">f092</code>
              <span>mdi-beach</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-beaker"></i>
              <code class="mr-2">f68f</code>
              <span>mdi-beaker</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-beer"></i>
              <code class="mr-2">f098</code>
              <span>mdi-beer</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-behance"></i>
              <code class="mr-2">f099</code>
              <span>mdi-behance</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bell"></i>
              <code class="mr-2">f09a</code>
              <span>mdi-bell</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bell-off"></i>
              <code class="mr-2">f09b</code>
              <span>mdi-bell-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bell-outline"></i>
              <code class="mr-2">f09c</code>
              <span>mdi-bell-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bell-plus"></i>
              <code class="mr-2">f09d</code>
              <span>mdi-bell-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bell-ring"></i>
              <code class="mr-2">f09e</code>
              <span>mdi-bell-ring</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bell-ring-outline"></i>
              <code class="mr-2">f09f</code>
              <span>mdi-bell-ring-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bell-sleep"></i>
              <code class="mr-2">f0a0</code>
              <span>mdi-bell-sleep</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-beta"></i>
              <code class="mr-2">f0a1</code>
              <span>mdi-beta</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bike"></i>
              <code class="mr-2">f0a3</code>
              <span>mdi-bike</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-binoculars"></i>
              <code class="mr-2">f0a5</code>
              <span>mdi-binoculars</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bio"></i>
              <code class="mr-2">f0a6</code>
              <span>mdi-bio</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-biohazard"></i>
              <code class="mr-2">f0a7</code>
              <span>mdi-biohazard</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bitbucket"></i>
              <code class="mr-2">f0a8</code>
              <span>mdi-bitbucket</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-black-mesa"></i>
              <code class="mr-2">f0a9</code>
              <span>mdi-black-mesa</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-blender"></i>
              <code class="mr-2">f0ab</code>
              <span>mdi-blender</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-blinds"></i>
              <code class="mr-2">f0ac</code>
              <span>mdi-blinds</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-block-helper"></i>
              <code class="mr-2">f0ad</code>
              <span>mdi-block-helper</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-blogger"></i>
              <code class="mr-2">f0ae</code>
              <span>mdi-blogger</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bluetooth"></i>
              <code class="mr-2">f0af</code>
              <span>mdi-bluetooth</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bluetooth-audio"></i>
              <code class="mr-2">f0b0</code>
              <span>mdi-bluetooth-audio</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bluetooth-connect"></i>
              <code class="mr-2">f0b1</code>
              <span>mdi-bluetooth-connect</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bluetooth-off"></i>
              <code class="mr-2">f0b2</code>
              <span>mdi-bluetooth-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bluetooth-settings"></i>
              <code class="mr-2">f0b3</code>
              <span>mdi-bluetooth-settings</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bluetooth-transfer"></i>
              <code class="mr-2">f0b4</code>
              <span>mdi-bluetooth-transfer</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-blur"></i>
              <code class="mr-2">f0b5</code>
              <span>mdi-blur</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-blur-linear"></i>
              <code class="mr-2">f0b6</code>
              <span>mdi-blur-linear</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-blur-off"></i>
              <code class="mr-2">f0b7</code>
              <span>mdi-blur-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-blur-radial"></i>
              <code class="mr-2">f0b8</code>
              <span>mdi-blur-radial</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bomb"></i>
              <code class="mr-2">f690</code>
              <span>mdi-bomb</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bomb-off"></i>
              <code class="mr-2">f6c4</code>
              <span>mdi-bomb-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bone"></i>
              <code class="mr-2">f0b9</code>
              <span>mdi-bone</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-book"></i>
              <code class="mr-2">f0ba</code>
              <span>mdi-book</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-book-minus"></i>
              <code class="mr-2">f5d9</code>
              <span>mdi-book-minus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-book-multiple"></i>
              <code class="mr-2">f0bb</code>
              <span>mdi-book-multiple</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-book-open"></i>
              <code class="mr-2">f0bd</code>
              <span>mdi-book-open</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-book-open-page-variant"></i>
              <code class="mr-2">f5da</code>
              <span>mdi-book-open-page-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-book-open-variant"></i>
              <code class="mr-2">f0be</code>
              <span>mdi-book-open-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-book-plus"></i>
              <code class="mr-2">f5db</code>
              <span>mdi-book-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-book-variant"></i>
              <code class="mr-2">f0bf</code>
              <span>mdi-book-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bookmark"></i>
              <code class="mr-2">f0c0</code>
              <span>mdi-bookmark</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bookmark-check"></i>
              <code class="mr-2">f0c1</code>
              <span>mdi-bookmark-check</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bookmark-music"></i>
              <code class="mr-2">f0c2</code>
              <span>mdi-bookmark-music</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bookmark-outline"></i>
              <code class="mr-2">f0c3</code>
              <span>mdi-bookmark-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bookmark-plus"></i>
              <code class="mr-2">f0c5</code>
              <span>mdi-bookmark-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bookmark-plus-outline"></i>
              <code class="mr-2">f0c4</code>
              <span>mdi-bookmark-plus-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bookmark-remove"></i>
              <code class="mr-2">f0c6</code>
              <span>mdi-bookmark-remove</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-boombox"></i>
              <code class="mr-2">f5dc</code>
              <span>mdi-boombox</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bootstrap"></i>
              <code class="mr-2">f6c5</code>
              <span>mdi-bootstrap</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-border-all"></i>
              <code class="mr-2">f0c7</code>
              <span>mdi-border-all</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-border-bottom"></i>
              <code class="mr-2">f0c8</code>
              <span>mdi-border-bottom</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-border-color"></i>
              <code class="mr-2">f0c9</code>
              <span>mdi-border-color</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-border-horizontal"></i>
              <code class="mr-2">f0ca</code>
              <span>mdi-border-horizontal</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-border-inside"></i>
              <code class="mr-2">f0cb</code>
              <span>mdi-border-inside</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-border-left"></i>
              <code class="mr-2">f0cc</code>
              <span>mdi-border-left</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-border-none"></i>
              <code class="mr-2">f0cd</code>
              <span>mdi-border-none</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-border-outside"></i>
              <code class="mr-2">f0ce</code>
              <span>mdi-border-outside</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-border-right"></i>
              <code class="mr-2">f0cf</code>
              <span>mdi-border-right</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-border-style"></i>
              <code class="mr-2">f0d0</code>
              <span>mdi-border-style</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-border-top"></i>
              <code class="mr-2">f0d1</code>
              <span>mdi-border-top</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-border-vertical"></i>
              <code class="mr-2">f0d2</code>
              <span>mdi-border-vertical</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bow-tie"></i>
              <code class="mr-2">f677</code>
              <span>mdi-bow-tie</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bowl"></i>
              <code class="mr-2">f617</code>
              <span>mdi-bowl</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bowling"></i>
              <code class="mr-2">f0d3</code>
              <span>mdi-bowling</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-box"></i>
              <code class="mr-2">f0d4</code>
              <span>mdi-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-box-cutter"></i>
              <code class="mr-2">f0d5</code>
              <span>mdi-box-cutter</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-box-shadow"></i>
              <code class="mr-2">f637</code>
              <span>mdi-box-shadow</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bridge"></i>
              <code class="mr-2">f618</code>
              <span>mdi-bridge</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-briefcase"></i>
              <code class="mr-2">f0d6</code>
              <span>mdi-briefcase</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-briefcase-check"></i>
              <code class="mr-2">f0d7</code>
              <span>mdi-briefcase-check</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-briefcase-download"></i>
              <code class="mr-2">f0d8</code>
              <span>mdi-briefcase-download</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-briefcase-upload"></i>
              <code class="mr-2">f0d9</code>
              <span>mdi-briefcase-upload</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-brightness-1"></i>
              <code class="mr-2">f0da</code>
              <span>mdi-brightness-1</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-brightness-2"></i>
              <code class="mr-2">f0db</code>
              <span>mdi-brightness-2</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-brightness-3"></i>
              <code class="mr-2">f0dc</code>
              <span>mdi-brightness-3</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-brightness-4"></i>
              <code class="mr-2">f0dd</code>
              <span>mdi-brightness-4</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-brightness-5"></i>
              <code class="mr-2">f0de</code>
              <span>mdi-brightness-5</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-brightness-6"></i>
              <code class="mr-2">f0df</code>
              <span>mdi-brightness-6</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-brightness-7"></i>
              <code class="mr-2">f0e0</code>
              <span>mdi-brightness-7</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-brightness-auto"></i>
              <code class="mr-2">f0e1</code>
              <span>mdi-brightness-auto</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-broom"></i>
              <code class="mr-2">f0e2</code>
              <span>mdi-broom</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-brush"></i>
              <code class="mr-2">f0e3</code>
              <span>mdi-brush</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-buffer"></i>
              <code class="mr-2">f619</code>
              <span>mdi-buffer</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bug"></i>
              <code class="mr-2">f0e4</code>
              <span>mdi-bug</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bulletin-board"></i>
              <code class="mr-2">f0e5</code>
              <span>mdi-bulletin-board</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bullhorn"></i>
              <code class="mr-2">f0e6</code>
              <span>mdi-bullhorn</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bullseye"></i>
              <code class="mr-2">f5dd</code>
              <span>mdi-bullseye</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-burst-mode"></i>
              <code class="mr-2">f5de</code>
              <span>mdi-burst-mode</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-bus"></i>
              <code class="mr-2">f0e7</code>
              <span>mdi-bus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cached"></i>
              <code class="mr-2">f0e8</code>
              <span>mdi-cached</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cake"></i>
              <code class="mr-2">f0e9</code>
              <span>mdi-cake</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cake-layered"></i>
              <code class="mr-2">f0ea</code>
              <span>mdi-cake-layered</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cake-variant"></i>
              <code class="mr-2">f0eb</code>
              <span>mdi-cake-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-calculator"></i>
              <code class="mr-2">f0ec</code>
              <span>mdi-calculator</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-calendar"></i>
              <code class="mr-2">f0ed</code>
              <span>mdi-calendar</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-calendar-blank"></i>
              <code class="mr-2">f0ee</code>
              <span>mdi-calendar-blank</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-calendar-check"></i>
              <code class="mr-2">f0ef</code>
              <span>mdi-calendar-check</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-calendar-clock"></i>
              <code class="mr-2">f0f0</code>
              <span>mdi-calendar-clock</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-calendar-multiple"></i>
              <code class="mr-2">f0f1</code>
              <span>mdi-calendar-multiple</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-calendar-multiple-check"></i>
              <code class="mr-2">f0f2</code>
              <span>mdi-calendar-multiple-check</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-calendar-plus"></i>
              <code class="mr-2">f0f3</code>
              <span>mdi-calendar-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-calendar-question"></i>
              <code class="mr-2">f691</code>
              <span>mdi-calendar-question</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-calendar-range"></i>
              <code class="mr-2">f678</code>
              <span>mdi-calendar-range</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-calendar-remove"></i>
              <code class="mr-2">f0f4</code>
              <span>mdi-calendar-remove</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-calendar-text"></i>
              <code class="mr-2">f0f5</code>
              <span>mdi-calendar-text</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-calendar-today"></i>
              <code class="mr-2">f0f6</code>
              <span>mdi-calendar-today</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-call-made"></i>
              <code class="mr-2">f0f7</code>
              <span>mdi-call-made</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-call-merge"></i>
              <code class="mr-2">f0f8</code>
              <span>mdi-call-merge</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-call-missed"></i>
              <code class="mr-2">f0f9</code>
              <span>mdi-call-missed</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-call-received"></i>
              <code class="mr-2">f0fa</code>
              <span>mdi-call-received</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-call-split"></i>
              <code class="mr-2">f0fb</code>
              <span>mdi-call-split</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-camcorder"></i>
              <code class="mr-2">f0fc</code>
              <span>mdi-camcorder</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-camcorder-off"></i>
              <code class="mr-2">f0ff</code>
              <span>mdi-camcorder-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-camera"></i>
              <code class="mr-2">f100</code>
              <span>mdi-camera</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-camera-burst"></i>
              <code class="mr-2">f692</code>
              <span>mdi-camera-burst</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-camera-enhance"></i>
              <code class="mr-2">f101</code>
              <span>mdi-camera-enhance</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-camera-front"></i>
              <code class="mr-2">f102</code>
              <span>mdi-camera-front</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-camera-front-variant"></i>
              <code class="mr-2">f103</code>
              <span>mdi-camera-front-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-camera-iris"></i>
              <code class="mr-2">f104</code>
              <span>mdi-camera-iris</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-camera-off"></i>
              <code class="mr-2">f5df</code>
              <span>mdi-camera-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-camera-party-mode"></i>
              <code class="mr-2">f105</code>
              <span>mdi-camera-party-mode</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-camera-rear"></i>
              <code class="mr-2">f106</code>
              <span>mdi-camera-rear</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-camera-rear-variant"></i>
              <code class="mr-2">f107</code>
              <span>mdi-camera-rear-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-camera-switch"></i>
              <code class="mr-2">f108</code>
              <span>mdi-camera-switch</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-camera-timer"></i>
              <code class="mr-2">f109</code>
              <span>mdi-camera-timer</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-candle"></i>
              <code class="mr-2">f5e2</code>
              <span>mdi-candle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-candycane"></i>
              <code class="mr-2">f10a</code>
              <span>mdi-candycane</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-car"></i>
              <code class="mr-2">f10b</code>
              <span>mdi-car</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-car-battery"></i>
              <code class="mr-2">f10c</code>
              <span>mdi-car-battery</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-car-connected"></i>
              <code class="mr-2">f10d</code>
              <span>mdi-car-connected</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-car-wash"></i>
              <code class="mr-2">f10e</code>
              <span>mdi-car-wash</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cards"></i>
              <code class="mr-2">f638</code>
              <span>mdi-cards</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cards-outline"></i>
              <code class="mr-2">f639</code>
              <span>mdi-cards-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cards-playing-outline"></i>
              <code class="mr-2">f63a</code>
              <span>mdi-cards-playing-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cards-variant"></i>
              <code class="mr-2">f6c6</code>
              <span>mdi-cards-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-carrot"></i>
              <code class="mr-2">f10f</code>
              <span>mdi-carrot</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cart"></i>
              <code class="mr-2">f110</code>
              <span>mdi-cart</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cart-off"></i>
              <code class="mr-2">f66b</code>
              <span>mdi-cart-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cart-outline"></i>
              <code class="mr-2">f111</code>
              <span>mdi-cart-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cart-plus"></i>
              <code class="mr-2">f112</code>
              <span>mdi-cart-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-case-sensitive-alt"></i>
              <code class="mr-2">f113</code>
              <span>mdi-case-sensitive-alt</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cash"></i>
              <code class="mr-2">f114</code>
              <span>mdi-cash</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cash-100"></i>
              <code class="mr-2">f115</code>
              <span>mdi-cash-100</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cash-multiple"></i>
              <code class="mr-2">f116</code>
              <span>mdi-cash-multiple</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cash-usd"></i>
              <code class="mr-2">f117</code>
              <span>mdi-cash-usd</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cast"></i>
              <code class="mr-2">f118</code>
              <span>mdi-cast</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cast-connected"></i>
              <code class="mr-2">f119</code>
              <span>mdi-cast-connected</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-castle"></i>
              <code class="mr-2">f11a</code>
              <span>mdi-castle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cat"></i>
              <code class="mr-2">f11b</code>
              <span>mdi-cat</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cellphone"></i>
              <code class="mr-2">f11c</code>
              <span>mdi-cellphone</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cellphone-android"></i>
              <code class="mr-2">f11d</code>
              <span>mdi-cellphone-android</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cellphone-basic"></i>
              <code class="mr-2">f11e</code>
              <span>mdi-cellphone-basic</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cellphone-dock"></i>
              <code class="mr-2">f11f</code>
              <span>mdi-cellphone-dock</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cellphone-iphone"></i>
              <code class="mr-2">f120</code>
              <span>mdi-cellphone-iphone</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cellphone-link"></i>
              <code class="mr-2">f121</code>
              <span>mdi-cellphone-link</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cellphone-link-off"></i>
              <code class="mr-2">f122</code>
              <span>mdi-cellphone-link-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cellphone-settings"></i>
              <code class="mr-2">f123</code>
              <span>mdi-cellphone-settings</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-certificate"></i>
              <code class="mr-2">f124</code>
              <span>mdi-certificate</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-chair-school"></i>
              <code class="mr-2">f125</code>
              <span>mdi-chair-school</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-chart-arc"></i>
              <code class="mr-2">f126</code>
              <span>mdi-chart-arc</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-chart-areaspline"></i>
              <code class="mr-2">f127</code>
              <span>mdi-chart-areaspline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-chart-bar"></i>
              <code class="mr-2">f128</code>
              <span>mdi-chart-bar</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-chart-bubble"></i>
              <code class="mr-2">f5e3</code>
              <span>mdi-chart-bubble</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-chart-gantt"></i>
              <code class="mr-2">f66c</code>
              <span>mdi-chart-gantt</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-chart-histogram"></i>
              <code class="mr-2">f129</code>
              <span>mdi-chart-histogram</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-chart-line"></i>
              <code class="mr-2">f12a</code>
              <span>mdi-chart-line</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-chart-pie"></i>
              <code class="mr-2">f12b</code>
              <span>mdi-chart-pie</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-chart-timeline"></i>
              <code class="mr-2">f66e</code>
              <span>mdi-chart-timeline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-check"></i>
              <code class="mr-2">f12c</code>
              <span>mdi-check</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-check-all"></i>
              <code class="mr-2">f12d</code>
              <span>mdi-check-all</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-check-circle"></i>
              <code class="mr-2">f5e0</code>
              <span>mdi-check-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-check-circle-outline"></i>
              <code class="mr-2">f5e1</code>
              <span>mdi-check-circle-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-checkbox-blank"></i>
              <code class="mr-2">f12e</code>
              <span>mdi-checkbox-blank</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-checkbox-blank-circle"></i>
              <code class="mr-2">f12f</code>
              <span>mdi-checkbox-blank-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-checkbox-blank-circle-outline"></i>
              <code class="mr-2">f130</code>
              <span>mdi-checkbox-blank-circle-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-checkbox-blank-outline"></i>
              <code class="mr-2">f131</code>
              <span>mdi-checkbox-blank-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-checkbox-marked"></i>
              <code class="mr-2">f132</code>
              <span>mdi-checkbox-marked</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-checkbox-marked-circle"></i>
              <code class="mr-2">f133</code>
              <span>mdi-checkbox-marked-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-checkbox-marked-circle-outline"></i>
              <code class="mr-2">f134</code>
              <span>mdi-checkbox-marked-circle-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-checkbox-marked-outline"></i>
              <code class="mr-2">f135</code>
              <span>mdi-checkbox-marked-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-checkbox-multiple-blank"></i>
              <code class="mr-2">f136</code>
              <span>mdi-checkbox-multiple-blank</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-checkbox-multiple-blank-circle"></i>
              <code class="mr-2">f63b</code>
              <span>mdi-checkbox-multiple-blank-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i
                class="mr-2 mdi mdi-checkbox-multiple-blank-circle-outline"
              ></i>
              <code class="mr-2">f63c</code>
              <span>mdi-checkbox-multiple-blank-circle-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-checkbox-multiple-blank-outline"></i>
              <code class="mr-2">f137</code>
              <span>mdi-checkbox-multiple-blank-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-checkbox-multiple-marked"></i>
              <code class="mr-2">f138</code>
              <span>mdi-checkbox-multiple-marked</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-checkbox-multiple-marked-circle"></i>
              <code class="mr-2">f63d</code>
              <span>mdi-checkbox-multiple-marked-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i
                class="mr-2 mdi mdi-checkbox-multiple-marked-circle-outline"
              ></i>
              <code class="mr-2">f63e</code>
              <span>mdi-checkbox-multiple-marked-circle-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-checkbox-multiple-marked-outline"></i>
              <code class="mr-2">f139</code>
              <span>mdi-checkbox-multiple-marked-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-checkerboard"></i>
              <code class="mr-2">f13a</code>
              <span>mdi-checkerboard</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-chemical-weapon"></i>
              <code class="mr-2">f13b</code>
              <span>mdi-chemical-weapon</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-chevron-double-down"></i>
              <code class="mr-2">f13c</code>
              <span>mdi-chevron-double-down</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-chevron-double-left"></i>
              <code class="mr-2">f13d</code>
              <span>mdi-chevron-double-left</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-chevron-double-right"></i>
              <code class="mr-2">f13e</code>
              <span>mdi-chevron-double-right</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-chevron-double-up"></i>
              <code class="mr-2">f13f</code>
              <span>mdi-chevron-double-up</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-chevron-down"></i>
              <code class="mr-2">f140</code>
              <span>mdi-chevron-down</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-chevron-left"></i>
              <code class="mr-2">f141</code>
              <span>mdi-chevron-left</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-chevron-right"></i>
              <code class="mr-2">f142</code>
              <span>mdi-chevron-right</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-chevron-up"></i>
              <code class="mr-2">f143</code>
              <span>mdi-chevron-up</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-chip"></i>
              <code class="mr-2">f61a</code>
              <span>mdi-chip</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-church"></i>
              <code class="mr-2">f144</code>
              <span>mdi-church</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cisco-webex"></i>
              <code class="mr-2">f145</code>
              <span>mdi-cisco-webex</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-city"></i>
              <code class="mr-2">f146</code>
              <span>mdi-city</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-clipboard"></i>
              <code class="mr-2">f147</code>
              <span>mdi-clipboard</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-clipboard-account"></i>
              <code class="mr-2">f148</code>
              <span>mdi-clipboard-account</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-clipboard-alert"></i>
              <code class="mr-2">f149</code>
              <span>mdi-clipboard-alert</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-clipboard-arrow-down"></i>
              <code class="mr-2">f14a</code>
              <span>mdi-clipboard-arrow-down</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-clipboard-arrow-left"></i>
              <code class="mr-2">f14b</code>
              <span>mdi-clipboard-arrow-left</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-clipboard-check"></i>
              <code class="mr-2">f14c</code>
              <span>mdi-clipboard-check</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-clipboard-flow"></i>
              <code class="mr-2">f6c7</code>
              <span>mdi-clipboard-flow</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-clipboard-outline"></i>
              <code class="mr-2">f14d</code>
              <span>mdi-clipboard-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-clipboard-text"></i>
              <code class="mr-2">f14e</code>
              <span>mdi-clipboard-text</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-clippy"></i>
              <code class="mr-2">f14f</code>
              <span>mdi-clippy</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-clock"></i>
              <code class="mr-2">f150</code>
              <span>mdi-clock</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-clock-alert"></i>
              <code class="mr-2">f5ce</code>
              <span>mdi-clock-alert</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-clock-end"></i>
              <code class="mr-2">f151</code>
              <span>mdi-clock-end</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-clock-fast"></i>
              <code class="mr-2">f152</code>
              <span>mdi-clock-fast</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-clock-in"></i>
              <code class="mr-2">f153</code>
              <span>mdi-clock-in</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-clock-out"></i>
              <code class="mr-2">f154</code>
              <span>mdi-clock-out</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-clock-start"></i>
              <code class="mr-2">f155</code>
              <span>mdi-clock-start</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-close"></i>
              <code class="mr-2">f156</code>
              <span>mdi-close</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-close-box"></i>
              <code class="mr-2">f157</code>
              <span>mdi-close-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-close-box-outline"></i>
              <code class="mr-2">f158</code>
              <span>mdi-close-box-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-close-circle"></i>
              <code class="mr-2">f159</code>
              <span>mdi-close-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-close-circle-outline"></i>
              <code class="mr-2">f15a</code>
              <span>mdi-close-circle-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-close-network"></i>
              <code class="mr-2">f15b</code>
              <span>mdi-close-network</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-close-octagon"></i>
              <code class="mr-2">f15c</code>
              <span>mdi-close-octagon</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-close-octagon-outline"></i>
              <code class="mr-2">f15d</code>
              <span>mdi-close-octagon-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-close-outline"></i>
              <code class="mr-2">f6c8</code>
              <span>mdi-close-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-closed-caption"></i>
              <code class="mr-2">f15e</code>
              <span>mdi-closed-caption</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cloud"></i>
              <code class="mr-2">f15f</code>
              <span>mdi-cloud</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cloud-check"></i>
              <code class="mr-2">f160</code>
              <span>mdi-cloud-check</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cloud-circle"></i>
              <code class="mr-2">f161</code>
              <span>mdi-cloud-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cloud-download"></i>
              <code class="mr-2">f162</code>
              <span>mdi-cloud-download</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cloud-outline"></i>
              <code class="mr-2">f163</code>
              <span>mdi-cloud-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cloud-outline-off"></i>
              <code class="mr-2">f164</code>
              <span>mdi-cloud-outline-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cloud-print"></i>
              <code class="mr-2">f165</code>
              <span>mdi-cloud-print</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cloud-print-outline"></i>
              <code class="mr-2">f166</code>
              <span>mdi-cloud-print-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cloud-sync"></i>
              <code class="mr-2">f63f</code>
              <span>mdi-cloud-sync</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cloud-upload"></i>
              <code class="mr-2">f167</code>
              <span>mdi-cloud-upload</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-code-array"></i>
              <code class="mr-2">f168</code>
              <span>mdi-code-array</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-code-braces"></i>
              <code class="mr-2">f169</code>
              <span>mdi-code-braces</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-code-brackets"></i>
              <code class="mr-2">f16a</code>
              <span>mdi-code-brackets</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-code-equal"></i>
              <code class="mr-2">f16b</code>
              <span>mdi-code-equal</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-code-greater-than"></i>
              <code class="mr-2">f16c</code>
              <span>mdi-code-greater-than</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-code-greater-than-or-equal"></i>
              <code class="mr-2">f16d</code>
              <span>mdi-code-greater-than-or-equal</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-code-less-than"></i>
              <code class="mr-2">f16e</code>
              <span>mdi-code-less-than</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-code-less-than-or-equal"></i>
              <code class="mr-2">f16f</code>
              <span>mdi-code-less-than-or-equal</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-code-not-equal"></i>
              <code class="mr-2">f170</code>
              <span>mdi-code-not-equal</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-code-not-equal-variant"></i>
              <code class="mr-2">f171</code>
              <span>mdi-code-not-equal-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-code-parentheses"></i>
              <code class="mr-2">f172</code>
              <span>mdi-code-parentheses</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-code-string"></i>
              <code class="mr-2">f173</code>
              <span>mdi-code-string</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-code-tags"></i>
              <code class="mr-2">f174</code>
              <span>mdi-code-tags</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-code-tags-check"></i>
              <code class="mr-2">f693</code>
              <span>mdi-code-tags-check</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-codepen"></i>
              <code class="mr-2">f175</code>
              <span>mdi-codepen</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-coffee"></i>
              <code class="mr-2">f176</code>
              <span>mdi-coffee</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-coffee-outline"></i>
              <code class="mr-2">f6c9</code>
              <span>mdi-coffee-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-coffee-to-go"></i>
              <code class="mr-2">f177</code>
              <span>mdi-coffee-to-go</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-coin"></i>
              <code class="mr-2">f178</code>
              <span>mdi-coin</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-coins"></i>
              <code class="mr-2">f694</code>
              <span>mdi-coins</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-collage"></i>
              <code class="mr-2">f640</code>
              <span>mdi-collage</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-color-helper"></i>
              <code class="mr-2">f179</code>
              <span>mdi-color-helper</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-comment"></i>
              <code class="mr-2">f17a</code>
              <span>mdi-comment</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-comment-account"></i>
              <code class="mr-2">f17b</code>
              <span>mdi-comment-account</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-comment-account-outline"></i>
              <code class="mr-2">f17c</code>
              <span>mdi-comment-account-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-comment-alert"></i>
              <code class="mr-2">f17d</code>
              <span>mdi-comment-alert</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-comment-alert-outline"></i>
              <code class="mr-2">f17e</code>
              <span>mdi-comment-alert-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-comment-check"></i>
              <code class="mr-2">f17f</code>
              <span>mdi-comment-check</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-comment-check-outline"></i>
              <code class="mr-2">f180</code>
              <span>mdi-comment-check-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-comment-multiple-outline"></i>
              <code class="mr-2">f181</code>
              <span>mdi-comment-multiple-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-comment-outline"></i>
              <code class="mr-2">f182</code>
              <span>mdi-comment-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-comment-plus-outline"></i>
              <code class="mr-2">f183</code>
              <span>mdi-comment-plus-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-comment-processing"></i>
              <code class="mr-2">f184</code>
              <span>mdi-comment-processing</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-comment-processing-outline"></i>
              <code class="mr-2">f185</code>
              <span>mdi-comment-processing-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-comment-question-outline"></i>
              <code class="mr-2">f186</code>
              <span>mdi-comment-question-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-comment-remove-outline"></i>
              <code class="mr-2">f187</code>
              <span>mdi-comment-remove-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-comment-text"></i>
              <code class="mr-2">f188</code>
              <span>mdi-comment-text</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-comment-text-outline"></i>
              <code class="mr-2">f189</code>
              <span>mdi-comment-text-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-compare"></i>
              <code class="mr-2">f18a</code>
              <span>mdi-compare</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-compass"></i>
              <code class="mr-2">f18b</code>
              <span>mdi-compass</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-compass-outline"></i>
              <code class="mr-2">f18c</code>
              <span>mdi-compass-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-console"></i>
              <code class="mr-2">f18d</code>
              <span>mdi-console</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-contacts"></i>
              <code class="mr-2">f6ca</code>
              <span>mdi-contacts</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-content-copy"></i>
              <code class="mr-2">f18f</code>
              <span>mdi-content-copy</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-content-cut"></i>
              <code class="mr-2">f190</code>
              <span>mdi-content-cut</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-content-duplicate"></i>
              <code class="mr-2">f191</code>
              <span>mdi-content-duplicate</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-content-paste"></i>
              <code class="mr-2">f192</code>
              <span>mdi-content-paste</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-content-save"></i>
              <code class="mr-2">f193</code>
              <span>mdi-content-save</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-content-save-all"></i>
              <code class="mr-2">f194</code>
              <span>mdi-content-save-all</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-content-save-settings"></i>
              <code class="mr-2">f61b</code>
              <span>mdi-content-save-settings</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-contrast"></i>
              <code class="mr-2">f195</code>
              <span>mdi-contrast</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-contrast-box"></i>
              <code class="mr-2">f196</code>
              <span>mdi-contrast-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-contrast-circle"></i>
              <code class="mr-2">f197</code>
              <span>mdi-contrast-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cookie"></i>
              <code class="mr-2">f198</code>
              <span>mdi-cookie</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-copyright"></i>
              <code class="mr-2">f5e6</code>
              <span>mdi-copyright</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-counter"></i>
              <code class="mr-2">f199</code>
              <span>mdi-counter</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cow"></i>
              <code class="mr-2">f19a</code>
              <span>mdi-cow</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-creation"></i>
              <code class="mr-2">f1c9</code>
              <span>mdi-creation</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-credit-card"></i>
              <code class="mr-2">f19b</code>
              <span>mdi-credit-card</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-credit-card-multiple"></i>
              <code class="mr-2">f19c</code>
              <span>mdi-credit-card-multiple</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-credit-card-off"></i>
              <code class="mr-2">f5e4</code>
              <span>mdi-credit-card-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-credit-card-plus"></i>
              <code class="mr-2">f675</code>
              <span>mdi-credit-card-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-credit-card-scan"></i>
              <code class="mr-2">f19d</code>
              <span>mdi-credit-card-scan</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-crop"></i>
              <code class="mr-2">f19e</code>
              <span>mdi-crop</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-crop-free"></i>
              <code class="mr-2">f19f</code>
              <span>mdi-crop-free</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-crop-landscape"></i>
              <code class="mr-2">f1a0</code>
              <span>mdi-crop-landscape</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-crop-portrait"></i>
              <code class="mr-2">f1a1</code>
              <span>mdi-crop-portrait</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-crop-rotate"></i>
              <code class="mr-2">f695</code>
              <span>mdi-crop-rotate</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-crop-square"></i>
              <code class="mr-2">f1a2</code>
              <span>mdi-crop-square</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-crosshairs"></i>
              <code class="mr-2">f1a3</code>
              <span>mdi-crosshairs</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-crosshairs-gps"></i>
              <code class="mr-2">f1a4</code>
              <span>mdi-crosshairs-gps</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-crown"></i>
              <code class="mr-2">f1a5</code>
              <span>mdi-crown</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cube"></i>
              <code class="mr-2">f1a6</code>
              <span>mdi-cube</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cube-outline"></i>
              <code class="mr-2">f1a7</code>
              <span>mdi-cube-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cube-send"></i>
              <code class="mr-2">f1a8</code>
              <span>mdi-cube-send</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cube-unfolded"></i>
              <code class="mr-2">f1a9</code>
              <span>mdi-cube-unfolded</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cup"></i>
              <code class="mr-2">f1aa</code>
              <span>mdi-cup</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cup-off"></i>
              <code class="mr-2">f5e5</code>
              <span>mdi-cup-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cup-water"></i>
              <code class="mr-2">f1ab</code>
              <span>mdi-cup-water</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-currency-btc"></i>
              <code class="mr-2">f1ac</code>
              <span>mdi-currency-btc</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-currency-eur"></i>
              <code class="mr-2">f1ad</code>
              <span>mdi-currency-eur</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-currency-gbp"></i>
              <code class="mr-2">f1ae</code>
              <span>mdi-currency-gbp</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-currency-inr"></i>
              <code class="mr-2">f1af</code>
              <span>mdi-currency-inr</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-currency-ngn"></i>
              <code class="mr-2">f1b0</code>
              <span>mdi-currency-ngn</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-currency-rub"></i>
              <code class="mr-2">f1b1</code>
              <span>mdi-currency-rub</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-currency-try"></i>
              <code class="mr-2">f1b2</code>
              <span>mdi-currency-try</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-currency-usd"></i>
              <code class="mr-2">f1b3</code>
              <span>mdi-currency-usd</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-currency-usd-off"></i>
              <code class="mr-2">f679</code>
              <span>mdi-currency-usd-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cursor-default"></i>
              <code class="mr-2">f1b4</code>
              <span>mdi-cursor-default</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cursor-default-outline"></i>
              <code class="mr-2">f1b5</code>
              <span>mdi-cursor-default-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cursor-move"></i>
              <code class="mr-2">f1b6</code>
              <span>mdi-cursor-move</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cursor-pointer"></i>
              <code class="mr-2">f1b7</code>
              <span>mdi-cursor-pointer</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-cursor-text"></i>
              <code class="mr-2">f5e7</code>
              <span>mdi-cursor-text</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-database"></i>
              <code class="mr-2">f1b8</code>
              <span>mdi-database</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-database-minus"></i>
              <code class="mr-2">f1b9</code>
              <span>mdi-database-minus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-database-plus"></i>
              <code class="mr-2">f1ba</code>
              <span>mdi-database-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-debug-step-into"></i>
              <code class="mr-2">f1bb</code>
              <span>mdi-debug-step-into</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-debug-step-out"></i>
              <code class="mr-2">f1bc</code>
              <span>mdi-debug-step-out</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-debug-step-over"></i>
              <code class="mr-2">f1bd</code>
              <span>mdi-debug-step-over</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-decimal-decrease"></i>
              <code class="mr-2">f1be</code>
              <span>mdi-decimal-decrease</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-decimal-increase"></i>
              <code class="mr-2">f1bf</code>
              <span>mdi-decimal-increase</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-delete"></i>
              <code class="mr-2">f1c0</code>
              <span>mdi-delete</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-delete-circle"></i>
              <code class="mr-2">f682</code>
              <span>mdi-delete-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-delete-empty"></i>
              <code class="mr-2">f6cb</code>
              <span>mdi-delete-empty</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-delete-forever"></i>
              <code class="mr-2">f5e8</code>
              <span>mdi-delete-forever</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-delete-sweep"></i>
              <code class="mr-2">f5e9</code>
              <span>mdi-delete-sweep</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-delete-variant"></i>
              <code class="mr-2">f1c1</code>
              <span>mdi-delete-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-delta"></i>
              <code class="mr-2">f1c2</code>
              <span>mdi-delta</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-deskphone"></i>
              <code class="mr-2">f1c3</code>
              <span>mdi-deskphone</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-desktop-mac"></i>
              <code class="mr-2">f1c4</code>
              <span>mdi-desktop-mac</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-desktop-tower"></i>
              <code class="mr-2">f1c5</code>
              <span>mdi-desktop-tower</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-details"></i>
              <code class="mr-2">f1c6</code>
              <span>mdi-details</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-developer-board"></i>
              <code class="mr-2">f696</code>
              <span>mdi-developer-board</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-deviantart"></i>
              <code class="mr-2">f1c7</code>
              <span>mdi-deviantart</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-dialpad"></i>
              <code class="mr-2">f61c</code>
              <span>mdi-dialpad</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-diamond"></i>
              <code class="mr-2">f1c8</code>
              <span>mdi-diamond</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-dice-1"></i>
              <code class="mr-2">f1ca</code>
              <span>mdi-dice-1</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-dice-2"></i>
              <code class="mr-2">f1cb</code>
              <span>mdi-dice-2</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-dice-3"></i>
              <code class="mr-2">f1cc</code>
              <span>mdi-dice-3</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-dice-4"></i>
              <code class="mr-2">f1cd</code>
              <span>mdi-dice-4</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-dice-5"></i>
              <code class="mr-2">f1ce</code>
              <span>mdi-dice-5</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-dice-6"></i>
              <code class="mr-2">f1cf</code>
              <span>mdi-dice-6</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-dice-d20"></i>
              <code class="mr-2">f5ea</code>
              <span>mdi-dice-d20</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-dice-d4"></i>
              <code class="mr-2">f5eb</code>
              <span>mdi-dice-d4</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-dice-d6"></i>
              <code class="mr-2">f5ec</code>
              <span>mdi-dice-d6</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-dice-d8"></i>
              <code class="mr-2">f5ed</code>
              <span>mdi-dice-d8</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-dictionary"></i>
              <code class="mr-2">f61d</code>
              <span>mdi-dictionary</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-directions"></i>
              <code class="mr-2">f1d0</code>
              <span>mdi-directions</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-directions-fork"></i>
              <code class="mr-2">f641</code>
              <span>mdi-directions-fork</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-discord"></i>
              <code class="mr-2">f66f</code>
              <span>mdi-discord</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-disqus"></i>
              <code class="mr-2">f1d2</code>
              <span>mdi-disqus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-division"></i>
              <code class="mr-2">f1d4</code>
              <span>mdi-division</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-division-box"></i>
              <code class="mr-2">f1d5</code>
              <span>mdi-division-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-dna"></i>
              <code class="mr-2">f683</code>
              <span>mdi-dna</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-dns"></i>
              <code class="mr-2">f1d6</code>
              <span>mdi-dns</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-do-not-disturb"></i>
              <code class="mr-2">f697</code>
              <span>mdi-do-not-disturb</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-do-not-disturb-off"></i>
              <code class="mr-2">f698</code>
              <span>mdi-do-not-disturb-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-dolby"></i>
              <code class="mr-2">f6b2</code>
              <span>mdi-dolby</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-domain"></i>
              <code class="mr-2">f1d7</code>
              <span>mdi-domain</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-dots-horizontal"></i>
              <code class="mr-2">f1d8</code>
              <span>mdi-dots-horizontal</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-dots-vertical"></i>
              <code class="mr-2">f1d9</code>
              <span>mdi-dots-vertical</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-douban"></i>
              <code class="mr-2">f699</code>
              <span>mdi-douban</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-download"></i>
              <code class="mr-2">f1da</code>
              <span>mdi-download</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-drag"></i>
              <code class="mr-2">f1db</code>
              <span>mdi-drag</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-drag-horizontal"></i>
              <code class="mr-2">f1dc</code>
              <span>mdi-drag-horizontal</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-drag-vertical"></i>
              <code class="mr-2">f1dd</code>
              <span>mdi-drag-vertical</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-drawing"></i>
              <code class="mr-2">f1de</code>
              <span>mdi-drawing</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-drawing-box"></i>
              <code class="mr-2">f1df</code>
              <span>mdi-drawing-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-drone"></i>
              <code class="mr-2">f1e2</code>
              <span>mdi-drone</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-dropbox"></i>
              <code class="mr-2">f1e3</code>
              <span>mdi-dropbox</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-drupal"></i>
              <code class="mr-2">f1e4</code>
              <span>mdi-drupal</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-duck"></i>
              <code class="mr-2">f1e5</code>
              <span>mdi-duck</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-dumbbell"></i>
              <code class="mr-2">f1e6</code>
              <span>mdi-dumbbell</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-earth"></i>
              <code class="mr-2">f1e7</code>
              <span>mdi-earth</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-earth-box"></i>
              <code class="mr-2">f6cc</code>
              <span>mdi-earth-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-earth-box-off"></i>
              <code class="mr-2">f6cd</code>
              <span>mdi-earth-box-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-earth-off"></i>
              <code class="mr-2">f1e8</code>
              <span>mdi-earth-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-eject"></i>
              <code class="mr-2">f1ea</code>
              <span>mdi-eject</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-elevation-decline"></i>
              <code class="mr-2">f1eb</code>
              <span>mdi-elevation-decline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-elevation-rise"></i>
              <code class="mr-2">f1ec</code>
              <span>mdi-elevation-rise</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-elevator"></i>
              <code class="mr-2">f1ed</code>
              <span>mdi-elevator</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-email"></i>
              <code class="mr-2">f1ee</code>
              <span>mdi-email</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-email-alert"></i>
              <code class="mr-2">f6ce</code>
              <span>mdi-email-alert</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-email-open"></i>
              <code class="mr-2">f1ef</code>
              <span>mdi-email-open</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-email-open-outline"></i>
              <code class="mr-2">f5ef</code>
              <span>mdi-email-open-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-email-outline"></i>
              <code class="mr-2">f1f0</code>
              <span>mdi-email-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-email-secure"></i>
              <code class="mr-2">f1f1</code>
              <span>mdi-email-secure</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-email-variant"></i>
              <code class="mr-2">f5f0</code>
              <span>mdi-email-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-emby"></i>
              <code class="mr-2">f6b3</code>
              <span>mdi-emby</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-emoticon"></i>
              <code class="mr-2">f1f2</code>
              <span>mdi-emoticon</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-emoticon-cool"></i>
              <code class="mr-2">f1f3</code>
              <span>mdi-emoticon-cool</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-emoticon-dead"></i>
              <code class="mr-2">f69a</code>
              <span>mdi-emoticon-dead</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-emoticon-devil"></i>
              <code class="mr-2">f1f4</code>
              <span>mdi-emoticon-devil</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-emoticon-excited"></i>
              <code class="mr-2">f69b</code>
              <span>mdi-emoticon-excited</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-emoticon-happy"></i>
              <code class="mr-2">f1f5</code>
              <span>mdi-emoticon-happy</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-emoticon-neutral"></i>
              <code class="mr-2">f1f6</code>
              <span>mdi-emoticon-neutral</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-emoticon-poop"></i>
              <code class="mr-2">f1f7</code>
              <span>mdi-emoticon-poop</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-emoticon-sad"></i>
              <code class="mr-2">f1f8</code>
              <span>mdi-emoticon-sad</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-emoticon-tongue"></i>
              <code class="mr-2">f1f9</code>
              <span>mdi-emoticon-tongue</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-engine"></i>
              <code class="mr-2">f1fa</code>
              <span>mdi-engine</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-engine-outline"></i>
              <code class="mr-2">f1fb</code>
              <span>mdi-engine-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-equal"></i>
              <code class="mr-2">f1fc</code>
              <span>mdi-equal</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-equal-box"></i>
              <code class="mr-2">f1fd</code>
              <span>mdi-equal-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-eraser"></i>
              <code class="mr-2">f1fe</code>
              <span>mdi-eraser</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-eraser-variant"></i>
              <code class="mr-2">f642</code>
              <span>mdi-eraser-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-escalator"></i>
              <code class="mr-2">f1ff</code>
              <span>mdi-escalator</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-ethernet"></i>
              <code class="mr-2">f200</code>
              <span>mdi-ethernet</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-ethernet-cable"></i>
              <code class="mr-2">f201</code>
              <span>mdi-ethernet-cable</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-ethernet-cable-off"></i>
              <code class="mr-2">f202</code>
              <span>mdi-ethernet-cable-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-ev-station"></i>
              <code class="mr-2">f5f1</code>
              <span>mdi-ev-station</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-evernote"></i>
              <code class="mr-2">f204</code>
              <span>mdi-evernote</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-exclamation"></i>
              <code class="mr-2">f205</code>
              <span>mdi-exclamation</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-exit-to-app"></i>
              <code class="mr-2">f206</code>
              <span>mdi-exit-to-app</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-export"></i>
              <code class="mr-2">f207</code>
              <span>mdi-export</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-eye"></i>
              <code class="mr-2">f208</code>
              <span>mdi-eye</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-eye-off"></i>
              <code class="mr-2">f209</code>
              <span>mdi-eye-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-eye-outline"></i>
              <code class="mr-2">f6cf</code>
              <span>mdi-eye-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-eye-outline-off"></i>
              <code class="mr-2">f6d0</code>
              <span>mdi-eye-outline-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-eyedropper"></i>
              <code class="mr-2">f20a</code>
              <span>mdi-eyedropper</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-eyedropper-variant"></i>
              <code class="mr-2">f20b</code>
              <span>mdi-eyedropper-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-face"></i>
              <code class="mr-2">f643</code>
              <span>mdi-face</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-face-profile"></i>
              <code class="mr-2">f644</code>
              <span>mdi-face-profile</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-facebook"></i>
              <code class="mr-2">f20c</code>
              <span>mdi-facebook</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-facebook-box"></i>
              <code class="mr-2">f20d</code>
              <span>mdi-facebook-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-facebook-messenger"></i>
              <code class="mr-2">f20e</code>
              <span>mdi-facebook-messenger</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-factory"></i>
              <code class="mr-2">f20f</code>
              <span>mdi-factory</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-fan"></i>
              <code class="mr-2">f210</code>
              <span>mdi-fan</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-fast-forward"></i>
              <code class="mr-2">f211</code>
              <span>mdi-fast-forward</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-fast-forward-outline"></i>
              <code class="mr-2">f6d1</code>
              <span>mdi-fast-forward-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-fax"></i>
              <code class="mr-2">f212</code>
              <span>mdi-fax</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-feather"></i>
              <code class="mr-2">f6d2</code>
              <span>mdi-feather</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-ferry"></i>
              <code class="mr-2">f213</code>
              <span>mdi-ferry</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-file"></i>
              <code class="mr-2">f214</code>
              <span>mdi-file</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-file-chart"></i>
              <code class="mr-2">f215</code>
              <span>mdi-file-chart</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-file-check"></i>
              <code class="mr-2">f216</code>
              <span>mdi-file-check</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-file-cloud"></i>
              <code class="mr-2">f217</code>
              <span>mdi-file-cloud</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-file-delimited"></i>
              <code class="mr-2">f218</code>
              <span>mdi-file-delimited</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-file-document"></i>
              <code class="mr-2">f219</code>
              <span>mdi-file-document</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-file-document-box"></i>
              <code class="mr-2">f21a</code>
              <span>mdi-file-document-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-file-excel"></i>
              <code class="mr-2">f21b</code>
              <span>mdi-file-excel</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-file-excel-box"></i>
              <code class="mr-2">f21c</code>
              <span>mdi-file-excel-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-file-export"></i>
              <code class="mr-2">f21d</code>
              <span>mdi-file-export</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-file-find"></i>
              <code class="mr-2">f21e</code>
              <span>mdi-file-find</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-file-hidden"></i>
              <code class="mr-2">f613</code>
              <span>mdi-file-hidden</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-file-image"></i>
              <code class="mr-2">f21f</code>
              <span>mdi-file-image</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-file-import"></i>
              <code class="mr-2">f220</code>
              <span>mdi-file-import</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-file-lock"></i>
              <code class="mr-2">f221</code>
              <span>mdi-file-lock</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-file-multiple"></i>
              <code class="mr-2">f222</code>
              <span>mdi-file-multiple</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-file-music"></i>
              <code class="mr-2">f223</code>
              <span>mdi-file-music</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-file-outline"></i>
              <code class="mr-2">f224</code>
              <span>mdi-file-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-file-pdf"></i>
              <code class="mr-2">f225</code>
              <span>mdi-file-pdf</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-file-pdf-box"></i>
              <code class="mr-2">f226</code>
              <span>mdi-file-pdf-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-file-powerpoint"></i>
              <code class="mr-2">f227</code>
              <span>mdi-file-powerpoint</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-file-powerpoint-box"></i>
              <code class="mr-2">f228</code>
              <span>mdi-file-powerpoint-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-file-presentation-box"></i>
              <code class="mr-2">f229</code>
              <span>mdi-file-presentation-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-file-restore"></i>
              <code class="mr-2">f670</code>
              <span>mdi-file-restore</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-file-send"></i>
              <code class="mr-2">f22a</code>
              <span>mdi-file-send</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-file-tree"></i>
              <code class="mr-2">f645</code>
              <span>mdi-file-tree</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-file-video"></i>
              <code class="mr-2">f22b</code>
              <span>mdi-file-video</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-file-word"></i>
              <code class="mr-2">f22c</code>
              <span>mdi-file-word</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-file-word-box"></i>
              <code class="mr-2">f22d</code>
              <span>mdi-file-word-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-file-xml"></i>
              <code class="mr-2">f22e</code>
              <span>mdi-file-xml</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-film"></i>
              <code class="mr-2">f22f</code>
              <span>mdi-film</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-filmstrip"></i>
              <code class="mr-2">f230</code>
              <span>mdi-filmstrip</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-filmstrip-off"></i>
              <code class="mr-2">f231</code>
              <span>mdi-filmstrip-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-filter"></i>
              <code class="mr-2">f232</code>
              <span>mdi-filter</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-filter-outline"></i>
              <code class="mr-2">f233</code>
              <span>mdi-filter-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-filter-remove"></i>
              <code class="mr-2">f234</code>
              <span>mdi-filter-remove</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-filter-remove-outline"></i>
              <code class="mr-2">f235</code>
              <span>mdi-filter-remove-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-filter-variant"></i>
              <code class="mr-2">f236</code>
              <span>mdi-filter-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-find-replace"></i>
              <code class="mr-2">f6d3</code>
              <span>mdi-find-replace</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-fingerprint"></i>
              <code class="mr-2">f237</code>
              <span>mdi-fingerprint</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-fire"></i>
              <code class="mr-2">f238</code>
              <span>mdi-fire</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-firefox"></i>
              <code class="mr-2">f239</code>
              <span>mdi-firefox</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-fish"></i>
              <code class="mr-2">f23a</code>
              <span>mdi-fish</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-flag"></i>
              <code class="mr-2">f23b</code>
              <span>mdi-flag</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-flag-checkered"></i>
              <code class="mr-2">f23c</code>
              <span>mdi-flag-checkered</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-flag-outline"></i>
              <code class="mr-2">f23d</code>
              <span>mdi-flag-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-flag-outline-variant"></i>
              <code class="mr-2">f23e</code>
              <span>mdi-flag-outline-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-flag-triangle"></i>
              <code class="mr-2">f23f</code>
              <span>mdi-flag-triangle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-flag-variant"></i>
              <code class="mr-2">f240</code>
              <span>mdi-flag-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-flash"></i>
              <code class="mr-2">f241</code>
              <span>mdi-flash</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-flash-auto"></i>
              <code class="mr-2">f242</code>
              <span>mdi-flash-auto</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-flash-off"></i>
              <code class="mr-2">f243</code>
              <span>mdi-flash-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-flash-outline"></i>
              <code class="mr-2">f6d4</code>
              <span>mdi-flash-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-flash-red-eye"></i>
              <code class="mr-2">f67a</code>
              <span>mdi-flash-red-eye</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-flashlight"></i>
              <code class="mr-2">f244</code>
              <span>mdi-flashlight</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-flashlight-off"></i>
              <code class="mr-2">f245</code>
              <span>mdi-flashlight-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-flask"></i>
              <code class="mr-2">f093</code>
              <span>mdi-flask</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-flask-empty"></i>
              <code class="mr-2">f094</code>
              <span>mdi-flask-empty</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-flask-empty-outline"></i>
              <code class="mr-2">f095</code>
              <span>mdi-flask-empty-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-flask-outline"></i>
              <code class="mr-2">f096</code>
              <span>mdi-flask-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-flip-to-back"></i>
              <code class="mr-2">f247</code>
              <span>mdi-flip-to-back</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-flip-to-front"></i>
              <code class="mr-2">f248</code>
              <span>mdi-flip-to-front</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-floppy"></i>
              <code class="mr-2">f249</code>
              <span>mdi-floppy</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-flower"></i>
              <code class="mr-2">f24a</code>
              <span>mdi-flower</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-folder"></i>
              <code class="mr-2">f24b</code>
              <span>mdi-folder</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-folder-account"></i>
              <code class="mr-2">f24c</code>
              <span>mdi-folder-account</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-folder-download"></i>
              <code class="mr-2">f24d</code>
              <span>mdi-folder-download</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-folder-google-drive"></i>
              <code class="mr-2">f24e</code>
              <span>mdi-folder-google-drive</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-folder-image"></i>
              <code class="mr-2">f24f</code>
              <span>mdi-folder-image</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-folder-lock"></i>
              <code class="mr-2">f250</code>
              <span>mdi-folder-lock</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-folder-lock-open"></i>
              <code class="mr-2">f251</code>
              <span>mdi-folder-lock-open</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-folder-move"></i>
              <code class="mr-2">f252</code>
              <span>mdi-folder-move</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-folder-multiple"></i>
              <code class="mr-2">f253</code>
              <span>mdi-folder-multiple</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-folder-multiple-image"></i>
              <code class="mr-2">f254</code>
              <span>mdi-folder-multiple-image</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-folder-multiple-outline"></i>
              <code class="mr-2">f255</code>
              <span>mdi-folder-multiple-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-folder-outline"></i>
              <code class="mr-2">f256</code>
              <span>mdi-folder-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-folder-plus"></i>
              <code class="mr-2">f257</code>
              <span>mdi-folder-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-folder-remove"></i>
              <code class="mr-2">f258</code>
              <span>mdi-folder-remove</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-folder-star"></i>
              <code class="mr-2">f69c</code>
              <span>mdi-folder-star</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-folder-upload"></i>
              <code class="mr-2">f259</code>
              <span>mdi-folder-upload</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-font-awesome"></i>
              <code class="mr-2">f03a</code>
              <span>mdi-font-awesome</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-food"></i>
              <code class="mr-2">f25a</code>
              <span>mdi-food</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-food-apple"></i>
              <code class="mr-2">f25b</code>
              <span>mdi-food-apple</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-food-fork-drink"></i>
              <code class="mr-2">f5f2</code>
              <span>mdi-food-fork-drink</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-food-off"></i>
              <code class="mr-2">f5f3</code>
              <span>mdi-food-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-food-variant"></i>
              <code class="mr-2">f25c</code>
              <span>mdi-food-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-football"></i>
              <code class="mr-2">f25d</code>
              <span>mdi-football</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-football-australian"></i>
              <code class="mr-2">f25e</code>
              <span>mdi-football-australian</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-football-helmet"></i>
              <code class="mr-2">f25f</code>
              <span>mdi-football-helmet</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-align-center"></i>
              <code class="mr-2">f260</code>
              <span>mdi-format-align-center</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-align-justify"></i>
              <code class="mr-2">f261</code>
              <span>mdi-format-align-justify</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-align-left"></i>
              <code class="mr-2">f262</code>
              <span>mdi-format-align-left</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-align-right"></i>
              <code class="mr-2">f263</code>
              <span>mdi-format-align-right</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-annotation-plus"></i>
              <code class="mr-2">f646</code>
              <span>mdi-format-annotation-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-bold"></i>
              <code class="mr-2">f264</code>
              <span>mdi-format-bold</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-clear"></i>
              <code class="mr-2">f265</code>
              <span>mdi-format-clear</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-color-fill"></i>
              <code class="mr-2">f266</code>
              <span>mdi-format-color-fill</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-color-text"></i>
              <code class="mr-2">f69d</code>
              <span>mdi-format-color-text</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-float-center"></i>
              <code class="mr-2">f267</code>
              <span>mdi-format-float-center</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-float-left"></i>
              <code class="mr-2">f268</code>
              <span>mdi-format-float-left</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-float-none"></i>
              <code class="mr-2">f269</code>
              <span>mdi-format-float-none</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-float-right"></i>
              <code class="mr-2">f26a</code>
              <span>mdi-format-float-right</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-font"></i>
              <code class="mr-2">f6d5</code>
              <span>mdi-format-font</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-header-1"></i>
              <code class="mr-2">f26b</code>
              <span>mdi-format-header-1</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-header-2"></i>
              <code class="mr-2">f26c</code>
              <span>mdi-format-header-2</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-header-3"></i>
              <code class="mr-2">f26d</code>
              <span>mdi-format-header-3</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-header-4"></i>
              <code class="mr-2">f26e</code>
              <span>mdi-format-header-4</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-header-5"></i>
              <code class="mr-2">f26f</code>
              <span>mdi-format-header-5</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-header-6"></i>
              <code class="mr-2">f270</code>
              <span>mdi-format-header-6</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-header-decrease"></i>
              <code class="mr-2">f271</code>
              <span>mdi-format-header-decrease</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-header-equal"></i>
              <code class="mr-2">f272</code>
              <span>mdi-format-header-equal</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-header-increase"></i>
              <code class="mr-2">f273</code>
              <span>mdi-format-header-increase</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-header-pound"></i>
              <code class="mr-2">f274</code>
              <span>mdi-format-header-pound</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-horizontal-align-center"></i>
              <code class="mr-2">f61e</code>
              <span>mdi-format-horizontal-align-center</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-horizontal-align-left"></i>
              <code class="mr-2">f61f</code>
              <span>mdi-format-horizontal-align-left</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-horizontal-align-right"></i>
              <code class="mr-2">f620</code>
              <span>mdi-format-horizontal-align-right</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-indent-decrease"></i>
              <code class="mr-2">f275</code>
              <span>mdi-format-indent-decrease</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-indent-increase"></i>
              <code class="mr-2">f276</code>
              <span>mdi-format-indent-increase</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-italic"></i>
              <code class="mr-2">f277</code>
              <span>mdi-format-italic</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-line-spacing"></i>
              <code class="mr-2">f278</code>
              <span>mdi-format-line-spacing</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-line-style"></i>
              <code class="mr-2">f5c8</code>
              <span>mdi-format-line-style</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-line-weight"></i>
              <code class="mr-2">f5c9</code>
              <span>mdi-format-line-weight</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-list-bulleted"></i>
              <code class="mr-2">f279</code>
              <span>mdi-format-list-bulleted</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-list-bulleted-type"></i>
              <code class="mr-2">f27a</code>
              <span>mdi-format-list-bulleted-type</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-list-numbers"></i>
              <code class="mr-2">f27b</code>
              <span>mdi-format-list-numbers</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-page-break"></i>
              <code class="mr-2">f6d6</code>
              <span>mdi-format-page-break</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-paint"></i>
              <code class="mr-2">f27c</code>
              <span>mdi-format-paint</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-paragraph"></i>
              <code class="mr-2">f27d</code>
              <span>mdi-format-paragraph</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-pilcrow"></i>
              <code class="mr-2">f6d7</code>
              <span>mdi-format-pilcrow</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-quote"></i>
              <code class="mr-2">f27e</code>
              <span>mdi-format-quote</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-rotate-90"></i>
              <code class="mr-2">f6a9</code>
              <span>mdi-format-rotate-90</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-section"></i>
              <code class="mr-2">f69e</code>
              <span>mdi-format-section</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-size"></i>
              <code class="mr-2">f27f</code>
              <span>mdi-format-size</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-strikethrough"></i>
              <code class="mr-2">f280</code>
              <span>mdi-format-strikethrough</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-strikethrough-variant"></i>
              <code class="mr-2">f281</code>
              <span>mdi-format-strikethrough-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-subscript"></i>
              <code class="mr-2">f282</code>
              <span>mdi-format-subscript</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-superscript"></i>
              <code class="mr-2">f283</code>
              <span>mdi-format-superscript</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-text"></i>
              <code class="mr-2">f284</code>
              <span>mdi-format-text</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-textdirection-l-to-r"></i>
              <code class="mr-2">f285</code>
              <span>mdi-format-textdirection-l-to-r</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-textdirection-r-to-l"></i>
              <code class="mr-2">f286</code>
              <span>mdi-format-textdirection-r-to-l</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-title"></i>
              <code class="mr-2">f5f4</code>
              <span>mdi-format-title</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-underline"></i>
              <code class="mr-2">f287</code>
              <span>mdi-format-underline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-vertical-align-bottom"></i>
              <code class="mr-2">f621</code>
              <span>mdi-format-vertical-align-bottom</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-vertical-align-center"></i>
              <code class="mr-2">f622</code>
              <span>mdi-format-vertical-align-center</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-vertical-align-top"></i>
              <code class="mr-2">f623</code>
              <span>mdi-format-vertical-align-top</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-wrap-inline"></i>
              <code class="mr-2">f288</code>
              <span>mdi-format-wrap-inline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-wrap-square"></i>
              <code class="mr-2">f289</code>
              <span>mdi-format-wrap-square</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-wrap-tight"></i>
              <code class="mr-2">f28a</code>
              <span>mdi-format-wrap-tight</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-format-wrap-top-bottom"></i>
              <code class="mr-2">f28b</code>
              <span>mdi-format-wrap-top-bottom</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-forum"></i>
              <code class="mr-2">f28c</code>
              <span>mdi-forum</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-forward"></i>
              <code class="mr-2">f28d</code>
              <span>mdi-forward</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-foursquare"></i>
              <code class="mr-2">f28e</code>
              <span>mdi-foursquare</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-fridge"></i>
              <code class="mr-2">f28f</code>
              <span>mdi-fridge</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-fridge-filled"></i>
              <code class="mr-2">f290</code>
              <span>mdi-fridge-filled</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-fridge-filled-bottom"></i>
              <code class="mr-2">f291</code>
              <span>mdi-fridge-filled-bottom</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-fridge-filled-top"></i>
              <code class="mr-2">f292</code>
              <span>mdi-fridge-filled-top</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-fullscreen"></i>
              <code class="mr-2">f293</code>
              <span>mdi-fullscreen</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-fullscreen-exit"></i>
              <code class="mr-2">f294</code>
              <span>mdi-fullscreen-exit</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-function"></i>
              <code class="mr-2">f295</code>
              <span>mdi-function</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-gamepad"></i>
              <code class="mr-2">f296</code>
              <span>mdi-gamepad</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-gamepad-variant"></i>
              <code class="mr-2">f297</code>
              <span>mdi-gamepad-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-garage"></i>
              <code class="mr-2">f6d8</code>
              <span>mdi-garage</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-garage-open"></i>
              <code class="mr-2">f6d9</code>
              <span>mdi-garage-open</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-gas-cylinder"></i>
              <code class="mr-2">f647</code>
              <span>mdi-gas-cylinder</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-gas-station"></i>
              <code class="mr-2">f298</code>
              <span>mdi-gas-station</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-gate"></i>
              <code class="mr-2">f299</code>
              <span>mdi-gate</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-gauge"></i>
              <code class="mr-2">f29a</code>
              <span>mdi-gauge</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-gavel"></i>
              <code class="mr-2">f29b</code>
              <span>mdi-gavel</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-gender-female"></i>
              <code class="mr-2">f29c</code>
              <span>mdi-gender-female</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-gender-male"></i>
              <code class="mr-2">f29d</code>
              <span>mdi-gender-male</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-gender-male-female"></i>
              <code class="mr-2">f29e</code>
              <span>mdi-gender-male-female</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-gender-transgender"></i>
              <code class="mr-2">f29f</code>
              <span>mdi-gender-transgender</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-ghost"></i>
              <code class="mr-2">f2a0</code>
              <span>mdi-ghost</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-gift"></i>
              <code class="mr-2">f2a1</code>
              <span>mdi-gift</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-git"></i>
              <code class="mr-2">f2a2</code>
              <span>mdi-git</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-github-box"></i>
              <code class="mr-2">f2a3</code>
              <span>mdi-github-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-github-circle"></i>
              <code class="mr-2">f2a4</code>
              <span>mdi-github-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-github-face"></i>
              <code class="mr-2">f6da</code>
              <span>mdi-github-face</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-glass-flute"></i>
              <code class="mr-2">f2a5</code>
              <span>mdi-glass-flute</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-glass-mug"></i>
              <code class="mr-2">f2a6</code>
              <span>mdi-glass-mug</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-glass-stange"></i>
              <code class="mr-2">f2a7</code>
              <span>mdi-glass-stange</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-glass-tulip"></i>
              <code class="mr-2">f2a8</code>
              <span>mdi-glass-tulip</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-glassdoor"></i>
              <code class="mr-2">f2a9</code>
              <span>mdi-glassdoor</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-glasses"></i>
              <code class="mr-2">f2aa</code>
              <span>mdi-glasses</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-gmail"></i>
              <code class="mr-2">f2ab</code>
              <span>mdi-gmail</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-gnome"></i>
              <code class="mr-2">f2ac</code>
              <span>mdi-gnome</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-gondola"></i>
              <code class="mr-2">f685</code>
              <span>mdi-gondola</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-google"></i>
              <code class="mr-2">f2ad</code>
              <span>mdi-google</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-google-cardboard"></i>
              <code class="mr-2">f2ae</code>
              <span>mdi-google-cardboard</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-google-chrome"></i>
              <code class="mr-2">f2af</code>
              <span>mdi-google-chrome</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-google-circles"></i>
              <code class="mr-2">f2b0</code>
              <span>mdi-google-circles</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-google-circles-communities"></i>
              <code class="mr-2">f2b1</code>
              <span>mdi-google-circles-communities</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-google-circles-extended"></i>
              <code class="mr-2">f2b2</code>
              <span>mdi-google-circles-extended</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-google-circles-group"></i>
              <code class="mr-2">f2b3</code>
              <span>mdi-google-circles-group</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-google-controller"></i>
              <code class="mr-2">f2b4</code>
              <span>mdi-google-controller</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-google-controller-off"></i>
              <code class="mr-2">f2b5</code>
              <span>mdi-google-controller-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-google-drive"></i>
              <code class="mr-2">f2b6</code>
              <span>mdi-google-drive</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-google-earth"></i>
              <code class="mr-2">f2b7</code>
              <span>mdi-google-earth</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-google-glass"></i>
              <code class="mr-2">f2b8</code>
              <span>mdi-google-glass</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-google-keep"></i>
              <code class="mr-2">f6db</code>
              <span>mdi-google-keep</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-google-maps"></i>
              <code class="mr-2">f5f5</code>
              <span>mdi-google-maps</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-google-nearby"></i>
              <code class="mr-2">f2b9</code>
              <span>mdi-google-nearby</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-google-pages"></i>
              <code class="mr-2">f2ba</code>
              <span>mdi-google-pages</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-google-photos"></i>
              <code class="mr-2">f6dc</code>
              <span>mdi-google-photos</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-google-physical-web"></i>
              <code class="mr-2">f2bb</code>
              <span>mdi-google-physical-web</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-google-play"></i>
              <code class="mr-2">f2bc</code>
              <span>mdi-google-play</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-google-plus"></i>
              <code class="mr-2">f2bd</code>
              <span>mdi-google-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-google-plus-box"></i>
              <code class="mr-2">f2be</code>
              <span>mdi-google-plus-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-google-translate"></i>
              <code class="mr-2">f2bf</code>
              <span>mdi-google-translate</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-google-wallet"></i>
              <code class="mr-2">f2c0</code>
              <span>mdi-google-wallet</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-gradient"></i>
              <code class="mr-2">f69f</code>
              <span>mdi-gradient</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-grease-pencil"></i>
              <code class="mr-2">f648</code>
              <span>mdi-grease-pencil</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-grid"></i>
              <code class="mr-2">f2c1</code>
              <span>mdi-grid</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-grid-off"></i>
              <code class="mr-2">f2c2</code>
              <span>mdi-grid-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-group"></i>
              <code class="mr-2">f2c3</code>
              <span>mdi-group</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-guitar-electric"></i>
              <code class="mr-2">f2c4</code>
              <span>mdi-guitar-electric</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-guitar-pick"></i>
              <code class="mr-2">f2c5</code>
              <span>mdi-guitar-pick</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-guitar-pick-outline"></i>
              <code class="mr-2">f2c6</code>
              <span>mdi-guitar-pick-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-hackernews"></i>
              <code class="mr-2">f624</code>
              <span>mdi-hackernews</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-hamburger"></i>
              <code class="mr-2">f684</code>
              <span>mdi-hamburger</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-hand-pointing-right"></i>
              <code class="mr-2">f2c7</code>
              <span>mdi-hand-pointing-right</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-hanger"></i>
              <code class="mr-2">f2c8</code>
              <span>mdi-hanger</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-hangouts"></i>
              <code class="mr-2">f2c9</code>
              <span>mdi-hangouts</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-harddisk"></i>
              <code class="mr-2">f2ca</code>
              <span>mdi-harddisk</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-headphones"></i>
              <code class="mr-2">f2cb</code>
              <span>mdi-headphones</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-headphones-box"></i>
              <code class="mr-2">f2cc</code>
              <span>mdi-headphones-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-headphones-settings"></i>
              <code class="mr-2">f2cd</code>
              <span>mdi-headphones-settings</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-headset"></i>
              <code class="mr-2">f2ce</code>
              <span>mdi-headset</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-headset-dock"></i>
              <code class="mr-2">f2cf</code>
              <span>mdi-headset-dock</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-headset-off"></i>
              <code class="mr-2">f2d0</code>
              <span>mdi-headset-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-heart"></i>
              <code class="mr-2">f2d1</code>
              <span>mdi-heart</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-heart-box"></i>
              <code class="mr-2">f2d2</code>
              <span>mdi-heart-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-heart-box-outline"></i>
              <code class="mr-2">f2d3</code>
              <span>mdi-heart-box-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-heart-broken"></i>
              <code class="mr-2">f2d4</code>
              <span>mdi-heart-broken</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-heart-half-outline"></i>
              <code class="mr-2">f6dd</code>
              <span>mdi-heart-half-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-heart-half-part"></i>
              <code class="mr-2">f6de</code>
              <span>mdi-heart-half-part</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-heart-half-part-outline"></i>
              <code class="mr-2">f6df</code>
              <span>mdi-heart-half-part-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-heart-outline"></i>
              <code class="mr-2">f2d5</code>
              <span>mdi-heart-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-heart-pulse"></i>
              <code class="mr-2">f5f6</code>
              <span>mdi-heart-pulse</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-help"></i>
              <code class="mr-2">f2d6</code>
              <span>mdi-help</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-help-circle"></i>
              <code class="mr-2">f2d7</code>
              <span>mdi-help-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-help-circle-outline"></i>
              <code class="mr-2">f625</code>
              <span>mdi-help-circle-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-hexagon"></i>
              <code class="mr-2">f2d8</code>
              <span>mdi-hexagon</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-hexagon-multiple"></i>
              <code class="mr-2">f6e0</code>
              <span>mdi-hexagon-multiple</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-hexagon-outline"></i>
              <code class="mr-2">f2d9</code>
              <span>mdi-hexagon-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-highway"></i>
              <code class="mr-2">f5f7</code>
              <span>mdi-highway</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-history"></i>
              <code class="mr-2">f2da</code>
              <span>mdi-history</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-hololens"></i>
              <code class="mr-2">f2db</code>
              <span>mdi-hololens</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-home"></i>
              <code class="mr-2">f2dc</code>
              <span>mdi-home</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-home-map-marker"></i>
              <code class="mr-2">f5f8</code>
              <span>mdi-home-map-marker</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-home-modern"></i>
              <code class="mr-2">f2dd</code>
              <span>mdi-home-modern</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-home-outline"></i>
              <code class="mr-2">f6a0</code>
              <span>mdi-home-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-home-variant"></i>
              <code class="mr-2">f2de</code>
              <span>mdi-home-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-hook"></i>
              <code class="mr-2">f6e1</code>
              <span>mdi-hook</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-hook-off"></i>
              <code class="mr-2">f6e2</code>
              <span>mdi-hook-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-hops"></i>
              <code class="mr-2">f2df</code>
              <span>mdi-hops</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-hospital"></i>
              <code class="mr-2">f2e0</code>
              <span>mdi-hospital</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-hospital-building"></i>
              <code class="mr-2">f2e1</code>
              <span>mdi-hospital-building</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-hospital-marker"></i>
              <code class="mr-2">f2e2</code>
              <span>mdi-hospital-marker</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-hotel"></i>
              <code class="mr-2">f2e3</code>
              <span>mdi-hotel</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-houzz"></i>
              <code class="mr-2">f2e4</code>
              <span>mdi-houzz</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-houzz-box"></i>
              <code class="mr-2">f2e5</code>
              <span>mdi-houzz-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-human"></i>
              <code class="mr-2">f2e6</code>
              <span>mdi-human</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-human-child"></i>
              <code class="mr-2">f2e7</code>
              <span>mdi-human-child</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-human-female"></i>
              <code class="mr-2">f649</code>
              <span>mdi-human-female</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-human-greeting"></i>
              <code class="mr-2">f64a</code>
              <span>mdi-human-greeting</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-human-handsdown"></i>
              <code class="mr-2">f64b</code>
              <span>mdi-human-handsdown</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-human-handsup"></i>
              <code class="mr-2">f64c</code>
              <span>mdi-human-handsup</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-human-male"></i>
              <code class="mr-2">f64d</code>
              <span>mdi-human-male</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-human-male-female"></i>
              <code class="mr-2">f2e8</code>
              <span>mdi-human-male-female</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-human-pregnant"></i>
              <code class="mr-2">f5cf</code>
              <span>mdi-human-pregnant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-image"></i>
              <code class="mr-2">f2e9</code>
              <span>mdi-image</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-image-album"></i>
              <code class="mr-2">f2ea</code>
              <span>mdi-image-album</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-image-area"></i>
              <code class="mr-2">f2eb</code>
              <span>mdi-image-area</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-image-area-close"></i>
              <code class="mr-2">f2ec</code>
              <span>mdi-image-area-close</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-image-broken"></i>
              <code class="mr-2">f2ed</code>
              <span>mdi-image-broken</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-image-broken-variant"></i>
              <code class="mr-2">f2ee</code>
              <span>mdi-image-broken-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-image-filter"></i>
              <code class="mr-2">f2ef</code>
              <span>mdi-image-filter</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-image-filter-black-white"></i>
              <code class="mr-2">f2f0</code>
              <span>mdi-image-filter-black-white</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-image-filter-center-focus"></i>
              <code class="mr-2">f2f1</code>
              <span>mdi-image-filter-center-focus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-image-filter-center-focus-weak"></i>
              <code class="mr-2">f2f2</code>
              <span>mdi-image-filter-center-focus-weak</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-image-filter-drama"></i>
              <code class="mr-2">f2f3</code>
              <span>mdi-image-filter-drama</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-image-filter-frames"></i>
              <code class="mr-2">f2f4</code>
              <span>mdi-image-filter-frames</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-image-filter-hdr"></i>
              <code class="mr-2">f2f5</code>
              <span>mdi-image-filter-hdr</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-image-filter-none"></i>
              <code class="mr-2">f2f6</code>
              <span>mdi-image-filter-none</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-image-filter-tilt-shift"></i>
              <code class="mr-2">f2f7</code>
              <span>mdi-image-filter-tilt-shift</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-image-filter-vintage"></i>
              <code class="mr-2">f2f8</code>
              <span>mdi-image-filter-vintage</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-image-multiple"></i>
              <code class="mr-2">f2f9</code>
              <span>mdi-image-multiple</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-import"></i>
              <code class="mr-2">f2fa</code>
              <span>mdi-import</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-inbox"></i>
              <code class="mr-2">f686</code>
              <span>mdi-inbox</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-inbox-arrow-down"></i>
              <code class="mr-2">f2fb</code>
              <span>mdi-inbox-arrow-down</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-inbox-arrow-up"></i>
              <code class="mr-2">f3d1</code>
              <span>mdi-inbox-arrow-up</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-incognito"></i>
              <code class="mr-2">f5f9</code>
              <span>mdi-incognito</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-infinity"></i>
              <code class="mr-2">f6e3</code>
              <span>mdi-infinity</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-information"></i>
              <code class="mr-2">f2fc</code>
              <span>mdi-information</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-information-outline"></i>
              <code class="mr-2">f2fd</code>
              <span>mdi-information-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-information-variant"></i>
              <code class="mr-2">f64e</code>
              <span>mdi-information-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-instagram"></i>
              <code class="mr-2">f2fe</code>
              <span>mdi-instagram</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-instapaper"></i>
              <code class="mr-2">f2ff</code>
              <span>mdi-instapaper</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-internet-explorer"></i>
              <code class="mr-2">f300</code>
              <span>mdi-internet-explorer</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-invert-colors"></i>
              <code class="mr-2">f301</code>
              <span>mdi-invert-colors</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-itunes"></i>
              <code class="mr-2">f676</code>
              <span>mdi-itunes</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-jeepney"></i>
              <code class="mr-2">f302</code>
              <span>mdi-jeepney</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-jira"></i>
              <code class="mr-2">f303</code>
              <span>mdi-jira</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-jsfiddle"></i>
              <code class="mr-2">f304</code>
              <span>mdi-jsfiddle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-json"></i>
              <code class="mr-2">f626</code>
              <span>mdi-json</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-keg"></i>
              <code class="mr-2">f305</code>
              <span>mdi-keg</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-kettle"></i>
              <code class="mr-2">f5fa</code>
              <span>mdi-kettle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-key"></i>
              <code class="mr-2">f306</code>
              <span>mdi-key</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-key-change"></i>
              <code class="mr-2">f307</code>
              <span>mdi-key-change</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-key-minus"></i>
              <code class="mr-2">f308</code>
              <span>mdi-key-minus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-key-plus"></i>
              <code class="mr-2">f309</code>
              <span>mdi-key-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-key-remove"></i>
              <code class="mr-2">f30a</code>
              <span>mdi-key-remove</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-key-variant"></i>
              <code class="mr-2">f30b</code>
              <span>mdi-key-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-keyboard"></i>
              <code class="mr-2">f30c</code>
              <span>mdi-keyboard</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-keyboard-backspace"></i>
              <code class="mr-2">f30d</code>
              <span>mdi-keyboard-backspace</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-keyboard-caps"></i>
              <code class="mr-2">f30e</code>
              <span>mdi-keyboard-caps</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-keyboard-close"></i>
              <code class="mr-2">f30f</code>
              <span>mdi-keyboard-close</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-keyboard-off"></i>
              <code class="mr-2">f310</code>
              <span>mdi-keyboard-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-keyboard-return"></i>
              <code class="mr-2">f311</code>
              <span>mdi-keyboard-return</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-keyboard-tab"></i>
              <code class="mr-2">f312</code>
              <span>mdi-keyboard-tab</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-keyboard-variant"></i>
              <code class="mr-2">f313</code>
              <span>mdi-keyboard-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-kodi"></i>
              <code class="mr-2">f314</code>
              <span>mdi-kodi</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-label"></i>
              <code class="mr-2">f315</code>
              <span>mdi-label</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-label-outline"></i>
              <code class="mr-2">f316</code>
              <span>mdi-label-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-lambda"></i>
              <code class="mr-2">f627</code>
              <span>mdi-lambda</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-lamp"></i>
              <code class="mr-2">f6b4</code>
              <span>mdi-lamp</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-lan"></i>
              <code class="mr-2">f317</code>
              <span>mdi-lan</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-lan-connect"></i>
              <code class="mr-2">f318</code>
              <span>mdi-lan-connect</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-lan-disconnect"></i>
              <code class="mr-2">f319</code>
              <span>mdi-lan-disconnect</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-lan-pending"></i>
              <code class="mr-2">f31a</code>
              <span>mdi-lan-pending</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-language-c"></i>
              <code class="mr-2">f671</code>
              <span>mdi-language-c</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-language-cpp"></i>
              <code class="mr-2">f672</code>
              <span>mdi-language-cpp</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-language-csharp"></i>
              <code class="mr-2">f31b</code>
              <span>mdi-language-csharp</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-language-css3"></i>
              <code class="mr-2">f31c</code>
              <span>mdi-language-css3</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-language-html5"></i>
              <code class="mr-2">f31d</code>
              <span>mdi-language-html5</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-language-javascript"></i>
              <code class="mr-2">f31e</code>
              <span>mdi-language-javascript</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-language-php"></i>
              <code class="mr-2">f31f</code>
              <span>mdi-language-php</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-language-python"></i>
              <code class="mr-2">f320</code>
              <span>mdi-language-python</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-language-python-text"></i>
              <code class="mr-2">f321</code>
              <span>mdi-language-python-text</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-language-swift"></i>
              <code class="mr-2">f6e4</code>
              <span>mdi-language-swift</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-language-typescript"></i>
              <code class="mr-2">f6e5</code>
              <span>mdi-language-typescript</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-laptop"></i>
              <code class="mr-2">f322</code>
              <span>mdi-laptop</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-laptop-chromebook"></i>
              <code class="mr-2">f323</code>
              <span>mdi-laptop-chromebook</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-laptop-mac"></i>
              <code class="mr-2">f324</code>
              <span>mdi-laptop-mac</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-laptop-off"></i>
              <code class="mr-2">f6e6</code>
              <span>mdi-laptop-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-laptop-windows"></i>
              <code class="mr-2">f325</code>
              <span>mdi-laptop-windows</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-lastfm"></i>
              <code class="mr-2">f326</code>
              <span>mdi-lastfm</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-launch"></i>
              <code class="mr-2">f327</code>
              <span>mdi-launch</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-layers"></i>
              <code class="mr-2">f328</code>
              <span>mdi-layers</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-layers-off"></i>
              <code class="mr-2">f329</code>
              <span>mdi-layers-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-lead-pencil"></i>
              <code class="mr-2">f64f</code>
              <span>mdi-lead-pencil</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-leaf"></i>
              <code class="mr-2">f32a</code>
              <span>mdi-leaf</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-led-off"></i>
              <code class="mr-2">f32b</code>
              <span>mdi-led-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-led-on"></i>
              <code class="mr-2">f32c</code>
              <span>mdi-led-on</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-led-outline"></i>
              <code class="mr-2">f32d</code>
              <span>mdi-led-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-led-variant-off"></i>
              <code class="mr-2">f32e</code>
              <span>mdi-led-variant-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-led-variant-on"></i>
              <code class="mr-2">f32f</code>
              <span>mdi-led-variant-on</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-led-variant-outline"></i>
              <code class="mr-2">f330</code>
              <span>mdi-led-variant-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-library"></i>
              <code class="mr-2">f331</code>
              <span>mdi-library</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-library-books"></i>
              <code class="mr-2">f332</code>
              <span>mdi-library-books</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-library-music"></i>
              <code class="mr-2">f333</code>
              <span>mdi-library-music</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-library-plus"></i>
              <code class="mr-2">f334</code>
              <span>mdi-library-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-lightbulb"></i>
              <code class="mr-2">f335</code>
              <span>mdi-lightbulb</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-lightbulb-on"></i>
              <code class="mr-2">f6e7</code>
              <span>mdi-lightbulb-on</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-lightbulb-on-outline"></i>
              <code class="mr-2">f6e8</code>
              <span>mdi-lightbulb-on-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-lightbulb-outline"></i>
              <code class="mr-2">f336</code>
              <span>mdi-lightbulb-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-link"></i>
              <code class="mr-2">f337</code>
              <span>mdi-link</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-link-off"></i>
              <code class="mr-2">f338</code>
              <span>mdi-link-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-link-variant"></i>
              <code class="mr-2">f339</code>
              <span>mdi-link-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-link-variant-off"></i>
              <code class="mr-2">f33a</code>
              <span>mdi-link-variant-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-linkedin"></i>
              <code class="mr-2">f33b</code>
              <span>mdi-linkedin</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-linkedin-box"></i>
              <code class="mr-2">f33c</code>
              <span>mdi-linkedin-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-linux"></i>
              <code class="mr-2">f33d</code>
              <span>mdi-linux</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-lock"></i>
              <code class="mr-2">f33e</code>
              <span>mdi-lock</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-lock-open"></i>
              <code class="mr-2">f33f</code>
              <span>mdi-lock-open</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-lock-open-outline"></i>
              <code class="mr-2">f340</code>
              <span>mdi-lock-open-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-lock-outline"></i>
              <code class="mr-2">f341</code>
              <span>mdi-lock-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-lock-pattern"></i>
              <code class="mr-2">f6e9</code>
              <span>mdi-lock-pattern</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-lock-plus"></i>
              <code class="mr-2">f5fb</code>
              <span>mdi-lock-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-login"></i>
              <code class="mr-2">f342</code>
              <span>mdi-login</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-login-variant"></i>
              <code class="mr-2">f5fc</code>
              <span>mdi-login-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-logout"></i>
              <code class="mr-2">f343</code>
              <span>mdi-logout</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-logout-variant"></i>
              <code class="mr-2">f5fd</code>
              <span>mdi-logout-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-looks"></i>
              <code class="mr-2">f344</code>
              <span>mdi-looks</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-loop"></i>
              <code class="mr-2">f6ea</code>
              <span>mdi-loop</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-loupe"></i>
              <code class="mr-2">f345</code>
              <span>mdi-loupe</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-lumx"></i>
              <code class="mr-2">f346</code>
              <span>mdi-lumx</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-magnet"></i>
              <code class="mr-2">f347</code>
              <span>mdi-magnet</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-magnet-on"></i>
              <code class="mr-2">f348</code>
              <span>mdi-magnet-on</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-magnify"></i>
              <code class="mr-2">f349</code>
              <span>mdi-magnify</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-magnify-minus"></i>
              <code class="mr-2">f34a</code>
              <span>mdi-magnify-minus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-magnify-minus-outline"></i>
              <code class="mr-2">f6eb</code>
              <span>mdi-magnify-minus-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-magnify-plus"></i>
              <code class="mr-2">f34b</code>
              <span>mdi-magnify-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-magnify-plus-outline"></i>
              <code class="mr-2">f6ec</code>
              <span>mdi-magnify-plus-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-mail-ru"></i>
              <code class="mr-2">f34c</code>
              <span>mdi-mail-ru</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-mailbox"></i>
              <code class="mr-2">f6ed</code>
              <span>mdi-mailbox</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-map"></i>
              <code class="mr-2">f34d</code>
              <span>mdi-map</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-map-marker"></i>
              <code class="mr-2">f34e</code>
              <span>mdi-map-marker</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-map-marker-circle"></i>
              <code class="mr-2">f34f</code>
              <span>mdi-map-marker-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-map-marker-minus"></i>
              <code class="mr-2">f650</code>
              <span>mdi-map-marker-minus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-map-marker-multiple"></i>
              <code class="mr-2">f350</code>
              <span>mdi-map-marker-multiple</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-map-marker-off"></i>
              <code class="mr-2">f351</code>
              <span>mdi-map-marker-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-map-marker-plus"></i>
              <code class="mr-2">f651</code>
              <span>mdi-map-marker-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-map-marker-radius"></i>
              <code class="mr-2">f352</code>
              <span>mdi-map-marker-radius</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-margin"></i>
              <code class="mr-2">f353</code>
              <span>mdi-margin</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-markdown"></i>
              <code class="mr-2">f354</code>
              <span>mdi-markdown</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-marker"></i>
              <code class="mr-2">f652</code>
              <span>mdi-marker</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-marker-check"></i>
              <code class="mr-2">f355</code>
              <span>mdi-marker-check</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-martini"></i>
              <code class="mr-2">f356</code>
              <span>mdi-martini</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-material-ui"></i>
              <code class="mr-2">f357</code>
              <span>mdi-material-ui</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-math-compass"></i>
              <code class="mr-2">f358</code>
              <span>mdi-math-compass</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-matrix"></i>
              <code class="mr-2">f628</code>
              <span>mdi-matrix</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-maxcdn"></i>
              <code class="mr-2">f359</code>
              <span>mdi-maxcdn</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-medical-bag"></i>
              <code class="mr-2">f6ee</code>
              <span>mdi-medical-bag</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-medium"></i>
              <code class="mr-2">f35a</code>
              <span>mdi-medium</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-memory"></i>
              <code class="mr-2">f35b</code>
              <span>mdi-memory</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-menu"></i>
              <code class="mr-2">f35c</code>
              <span>mdi-menu</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-menu-down"></i>
              <code class="mr-2">f35d</code>
              <span>mdi-menu-down</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-menu-down-outline"></i>
              <code class="mr-2">f6b5</code>
              <span>mdi-menu-down-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-menu-left"></i>
              <code class="mr-2">f35e</code>
              <span>mdi-menu-left</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-menu-right"></i>
              <code class="mr-2">f35f</code>
              <span>mdi-menu-right</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-menu-up"></i>
              <code class="mr-2">f360</code>
              <span>mdi-menu-up</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-menu-up-outline"></i>
              <code class="mr-2">f6b6</code>
              <span>mdi-menu-up-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-message"></i>
              <code class="mr-2">f361</code>
              <span>mdi-message</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-message-alert"></i>
              <code class="mr-2">f362</code>
              <span>mdi-message-alert</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-message-bulleted"></i>
              <code class="mr-2">f6a1</code>
              <span>mdi-message-bulleted</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-message-bulleted-off"></i>
              <code class="mr-2">f6a2</code>
              <span>mdi-message-bulleted-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-message-draw"></i>
              <code class="mr-2">f363</code>
              <span>mdi-message-draw</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-message-image"></i>
              <code class="mr-2">f364</code>
              <span>mdi-message-image</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-message-outline"></i>
              <code class="mr-2">f365</code>
              <span>mdi-message-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-message-plus"></i>
              <code class="mr-2">f653</code>
              <span>mdi-message-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-message-processing"></i>
              <code class="mr-2">f366</code>
              <span>mdi-message-processing</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-message-reply"></i>
              <code class="mr-2">f367</code>
              <span>mdi-message-reply</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-message-reply-text"></i>
              <code class="mr-2">f368</code>
              <span>mdi-message-reply-text</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-message-settings"></i>
              <code class="mr-2">f6ef</code>
              <span>mdi-message-settings</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-message-settings-variant"></i>
              <code class="mr-2">f6f0</code>
              <span>mdi-message-settings-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-message-text"></i>
              <code class="mr-2">f369</code>
              <span>mdi-message-text</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-message-text-outline"></i>
              <code class="mr-2">f36a</code>
              <span>mdi-message-text-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-message-video"></i>
              <code class="mr-2">f36b</code>
              <span>mdi-message-video</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-meteor"></i>
              <code class="mr-2">f629</code>
              <span>mdi-meteor</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-microphone"></i>
              <code class="mr-2">f36c</code>
              <span>mdi-microphone</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-microphone-off"></i>
              <code class="mr-2">f36d</code>
              <span>mdi-microphone-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-microphone-outline"></i>
              <code class="mr-2">f36e</code>
              <span>mdi-microphone-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-microphone-settings"></i>
              <code class="mr-2">f36f</code>
              <span>mdi-microphone-settings</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-microphone-variant"></i>
              <code class="mr-2">f370</code>
              <span>mdi-microphone-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-microphone-variant-off"></i>
              <code class="mr-2">f371</code>
              <span>mdi-microphone-variant-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-microscope"></i>
              <code class="mr-2">f654</code>
              <span>mdi-microscope</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-microsoft"></i>
              <code class="mr-2">f372</code>
              <span>mdi-microsoft</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-minecraft"></i>
              <code class="mr-2">f373</code>
              <span>mdi-minecraft</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-minus"></i>
              <code class="mr-2">f374</code>
              <span>mdi-minus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-minus-box"></i>
              <code class="mr-2">f375</code>
              <span>mdi-minus-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-minus-box-outline"></i>
              <code class="mr-2">f6f1</code>
              <span>mdi-minus-box-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-minus-circle"></i>
              <code class="mr-2">f376</code>
              <span>mdi-minus-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-minus-circle-outline"></i>
              <code class="mr-2">f377</code>
              <span>mdi-minus-circle-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-minus-network"></i>
              <code class="mr-2">f378</code>
              <span>mdi-minus-network</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-mixcloud"></i>
              <code class="mr-2">f62a</code>
              <span>mdi-mixcloud</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-monitor"></i>
              <code class="mr-2">f379</code>
              <span>mdi-monitor</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-monitor-multiple"></i>
              <code class="mr-2">f37a</code>
              <span>mdi-monitor-multiple</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-more"></i>
              <code class="mr-2">f37b</code>
              <span>mdi-more</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-motorbike"></i>
              <code class="mr-2">f37c</code>
              <span>mdi-motorbike</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-mouse"></i>
              <code class="mr-2">f37d</code>
              <span>mdi-mouse</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-mouse-off"></i>
              <code class="mr-2">f37e</code>
              <span>mdi-mouse-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-mouse-variant"></i>
              <code class="mr-2">f37f</code>
              <span>mdi-mouse-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-mouse-variant-off"></i>
              <code class="mr-2">f380</code>
              <span>mdi-mouse-variant-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-move-resize"></i>
              <code class="mr-2">f655</code>
              <span>mdi-move-resize</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-move-resize-variant"></i>
              <code class="mr-2">f656</code>
              <span>mdi-move-resize-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-movie"></i>
              <code class="mr-2">f381</code>
              <span>mdi-movie</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-multiplication"></i>
              <code class="mr-2">f382</code>
              <span>mdi-multiplication</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-multiplication-box"></i>
              <code class="mr-2">f383</code>
              <span>mdi-multiplication-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-music-box"></i>
              <code class="mr-2">f384</code>
              <span>mdi-music-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-music-box-outline"></i>
              <code class="mr-2">f385</code>
              <span>mdi-music-box-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-music-circle"></i>
              <code class="mr-2">f386</code>
              <span>mdi-music-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-music-note"></i>
              <code class="mr-2">f387</code>
              <span>mdi-music-note</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-music-note-bluetooth"></i>
              <code class="mr-2">f5fe</code>
              <span>mdi-music-note-bluetooth</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-music-note-bluetooth-off"></i>
              <code class="mr-2">f5ff</code>
              <span>mdi-music-note-bluetooth-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-music-note-eighth"></i>
              <code class="mr-2">f388</code>
              <span>mdi-music-note-eighth</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-music-note-half"></i>
              <code class="mr-2">f389</code>
              <span>mdi-music-note-half</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-music-note-off"></i>
              <code class="mr-2">f38a</code>
              <span>mdi-music-note-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-music-note-quarter"></i>
              <code class="mr-2">f38b</code>
              <span>mdi-music-note-quarter</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-music-note-sixteenth"></i>
              <code class="mr-2">f38c</code>
              <span>mdi-music-note-sixteenth</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-music-note-whole"></i>
              <code class="mr-2">f38d</code>
              <span>mdi-music-note-whole</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-nature"></i>
              <code class="mr-2">f38e</code>
              <span>mdi-nature</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-nature-people"></i>
              <code class="mr-2">f38f</code>
              <span>mdi-nature-people</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-navigation"></i>
              <code class="mr-2">f390</code>
              <span>mdi-navigation</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-near-me"></i>
              <code class="mr-2">f5cd</code>
              <span>mdi-near-me</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-needle"></i>
              <code class="mr-2">f391</code>
              <span>mdi-needle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-nest-protect"></i>
              <code class="mr-2">f392</code>
              <span>mdi-nest-protect</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-nest-thermostat"></i>
              <code class="mr-2">f393</code>
              <span>mdi-nest-thermostat</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-network"></i>
              <code class="mr-2">f6f2</code>
              <span>mdi-network</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-network-download"></i>
              <code class="mr-2">f6f3</code>
              <span>mdi-network-download</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-network-question"></i>
              <code class="mr-2">f6f4</code>
              <span>mdi-network-question</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-network-upload"></i>
              <code class="mr-2">f6f5</code>
              <span>mdi-network-upload</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-new-box"></i>
              <code class="mr-2">f394</code>
              <span>mdi-new-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-newspaper"></i>
              <code class="mr-2">f395</code>
              <span>mdi-newspaper</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-nfc"></i>
              <code class="mr-2">f396</code>
              <span>mdi-nfc</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-nfc-tap"></i>
              <code class="mr-2">f397</code>
              <span>mdi-nfc-tap</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-nfc-variant"></i>
              <code class="mr-2">f398</code>
              <span>mdi-nfc-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-nodejs"></i>
              <code class="mr-2">f399</code>
              <span>mdi-nodejs</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-note"></i>
              <code class="mr-2">f39a</code>
              <span>mdi-note</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-note-multiple"></i>
              <code class="mr-2">f6b7</code>
              <span>mdi-note-multiple</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-note-multiple-outline"></i>
              <code class="mr-2">f6b8</code>
              <span>mdi-note-multiple-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-note-outline"></i>
              <code class="mr-2">f39b</code>
              <span>mdi-note-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-note-plus"></i>
              <code class="mr-2">f39c</code>
              <span>mdi-note-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-note-plus-outline"></i>
              <code class="mr-2">f39d</code>
              <span>mdi-note-plus-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-note-text"></i>
              <code class="mr-2">f39e</code>
              <span>mdi-note-text</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-notification-clear-all"></i>
              <code class="mr-2">f39f</code>
              <span>mdi-notification-clear-all</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-npm"></i>
              <code class="mr-2">f6f6</code>
              <span>mdi-npm</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-nuke"></i>
              <code class="mr-2">f6a3</code>
              <span>mdi-nuke</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric"></i>
              <code class="mr-2">f3a0</code>
              <span>mdi-numeric</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-0-box"></i>
              <code class="mr-2">f3a1</code>
              <span>mdi-numeric-0-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-0-box-multiple-outline"></i>
              <code class="mr-2">f3a2</code>
              <span>mdi-numeric-0-box-multiple-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-0-box-outline"></i>
              <code class="mr-2">f3a3</code>
              <span>mdi-numeric-0-box-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-1-box"></i>
              <code class="mr-2">f3a4</code>
              <span>mdi-numeric-1-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-1-box-multiple-outline"></i>
              <code class="mr-2">f3a5</code>
              <span>mdi-numeric-1-box-multiple-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-1-box-outline"></i>
              <code class="mr-2">f3a6</code>
              <span>mdi-numeric-1-box-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-2-box"></i>
              <code class="mr-2">f3a7</code>
              <span>mdi-numeric-2-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-2-box-multiple-outline"></i>
              <code class="mr-2">f3a8</code>
              <span>mdi-numeric-2-box-multiple-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-2-box-outline"></i>
              <code class="mr-2">f3a9</code>
              <span>mdi-numeric-2-box-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-3-box"></i>
              <code class="mr-2">f3aa</code>
              <span>mdi-numeric-3-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-3-box-multiple-outline"></i>
              <code class="mr-2">f3ab</code>
              <span>mdi-numeric-3-box-multiple-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-3-box-outline"></i>
              <code class="mr-2">f3ac</code>
              <span>mdi-numeric-3-box-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-4-box"></i>
              <code class="mr-2">f3ad</code>
              <span>mdi-numeric-4-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-4-box-multiple-outline"></i>
              <code class="mr-2">f3ae</code>
              <span>mdi-numeric-4-box-multiple-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-4-box-outline"></i>
              <code class="mr-2">f3af</code>
              <span>mdi-numeric-4-box-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-5-box"></i>
              <code class="mr-2">f3b0</code>
              <span>mdi-numeric-5-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-5-box-multiple-outline"></i>
              <code class="mr-2">f3b1</code>
              <span>mdi-numeric-5-box-multiple-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-5-box-outline"></i>
              <code class="mr-2">f3b2</code>
              <span>mdi-numeric-5-box-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-6-box"></i>
              <code class="mr-2">f3b3</code>
              <span>mdi-numeric-6-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-6-box-multiple-outline"></i>
              <code class="mr-2">f3b4</code>
              <span>mdi-numeric-6-box-multiple-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-6-box-outline"></i>
              <code class="mr-2">f3b5</code>
              <span>mdi-numeric-6-box-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-7-box"></i>
              <code class="mr-2">f3b6</code>
              <span>mdi-numeric-7-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-7-box-multiple-outline"></i>
              <code class="mr-2">f3b7</code>
              <span>mdi-numeric-7-box-multiple-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-7-box-outline"></i>
              <code class="mr-2">f3b8</code>
              <span>mdi-numeric-7-box-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-8-box"></i>
              <code class="mr-2">f3b9</code>
              <span>mdi-numeric-8-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-8-box-multiple-outline"></i>
              <code class="mr-2">f3ba</code>
              <span>mdi-numeric-8-box-multiple-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-8-box-outline"></i>
              <code class="mr-2">f3bb</code>
              <span>mdi-numeric-8-box-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-9-box"></i>
              <code class="mr-2">f3bc</code>
              <span>mdi-numeric-9-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-9-box-multiple-outline"></i>
              <code class="mr-2">f3bd</code>
              <span>mdi-numeric-9-box-multiple-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-9-box-outline"></i>
              <code class="mr-2">f3be</code>
              <span>mdi-numeric-9-box-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-9-plus-box"></i>
              <code class="mr-2">f3bf</code>
              <span>mdi-numeric-9-plus-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-9-plus-box-multiple-outline"></i>
              <code class="mr-2">f3c0</code>
              <span>mdi-numeric-9-plus-box-multiple-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-numeric-9-plus-box-outline"></i>
              <code class="mr-2">f3c1</code>
              <span>mdi-numeric-9-plus-box-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-nut"></i>
              <code class="mr-2">f6f7</code>
              <span>mdi-nut</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-nutrition"></i>
              <code class="mr-2">f3c2</code>
              <span>mdi-nutrition</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-oar"></i>
              <code class="mr-2">f67b</code>
              <span>mdi-oar</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-octagon"></i>
              <code class="mr-2">f3c3</code>
              <span>mdi-octagon</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-octagon-outline"></i>
              <code class="mr-2">f3c4</code>
              <span>mdi-octagon-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-octagram"></i>
              <code class="mr-2">f6f8</code>
              <span>mdi-octagram</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-odnoklassniki"></i>
              <code class="mr-2">f3c5</code>
              <span>mdi-odnoklassniki</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-office"></i>
              <code class="mr-2">f3c6</code>
              <span>mdi-office</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-oil"></i>
              <code class="mr-2">f3c7</code>
              <span>mdi-oil</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-oil-temperature"></i>
              <code class="mr-2">f3c8</code>
              <span>mdi-oil-temperature</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-omega"></i>
              <code class="mr-2">f3c9</code>
              <span>mdi-omega</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-onedrive"></i>
              <code class="mr-2">f3ca</code>
              <span>mdi-onedrive</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-opacity"></i>
              <code class="mr-2">f5cc</code>
              <span>mdi-opacity</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-open-in-app"></i>
              <code class="mr-2">f3cb</code>
              <span>mdi-open-in-app</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-open-in-new"></i>
              <code class="mr-2">f3cc</code>
              <span>mdi-open-in-new</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-openid"></i>
              <code class="mr-2">f3cd</code>
              <span>mdi-openid</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-opera"></i>
              <code class="mr-2">f3ce</code>
              <span>mdi-opera</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-ornament"></i>
              <code class="mr-2">f3cf</code>
              <span>mdi-ornament</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-ornament-variant"></i>
              <code class="mr-2">f3d0</code>
              <span>mdi-ornament-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-owl"></i>
              <code class="mr-2">f3d2</code>
              <span>mdi-owl</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-package"></i>
              <code class="mr-2">f3d3</code>
              <span>mdi-package</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-package-down"></i>
              <code class="mr-2">f3d4</code>
              <span>mdi-package-down</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-package-up"></i>
              <code class="mr-2">f3d5</code>
              <span>mdi-package-up</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-package-variant"></i>
              <code class="mr-2">f3d6</code>
              <span>mdi-package-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-package-variant-closed"></i>
              <code class="mr-2">f3d7</code>
              <span>mdi-package-variant-closed</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-page-first"></i>
              <code class="mr-2">f600</code>
              <span>mdi-page-first</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-page-last"></i>
              <code class="mr-2">f601</code>
              <span>mdi-page-last</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-page-layout-body"></i>
              <code class="mr-2">f6f9</code>
              <span>mdi-page-layout-body</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-page-layout-footer"></i>
              <code class="mr-2">f6fa</code>
              <span>mdi-page-layout-footer</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-page-layout-header"></i>
              <code class="mr-2">f6fb</code>
              <span>mdi-page-layout-header</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-page-layout-sidebar-left"></i>
              <code class="mr-2">f6fc</code>
              <span>mdi-page-layout-sidebar-left</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-page-layout-sidebar-right"></i>
              <code class="mr-2">f6fd</code>
              <span>mdi-page-layout-sidebar-right</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-palette"></i>
              <code class="mr-2">f3d8</code>
              <span>mdi-palette</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-palette-advanced"></i>
              <code class="mr-2">f3d9</code>
              <span>mdi-palette-advanced</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-panda"></i>
              <code class="mr-2">f3da</code>
              <span>mdi-panda</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pandora"></i>
              <code class="mr-2">f3db</code>
              <span>mdi-pandora</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-panorama"></i>
              <code class="mr-2">f3dc</code>
              <span>mdi-panorama</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-panorama-fisheye"></i>
              <code class="mr-2">f3dd</code>
              <span>mdi-panorama-fisheye</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-panorama-horizontal"></i>
              <code class="mr-2">f3de</code>
              <span>mdi-panorama-horizontal</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-panorama-vertical"></i>
              <code class="mr-2">f3df</code>
              <span>mdi-panorama-vertical</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-panorama-wide-angle"></i>
              <code class="mr-2">f3e0</code>
              <span>mdi-panorama-wide-angle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-paper-cut-vertical"></i>
              <code class="mr-2">f3e1</code>
              <span>mdi-paper-cut-vertical</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-paperclip"></i>
              <code class="mr-2">f3e2</code>
              <span>mdi-paperclip</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-parking"></i>
              <code class="mr-2">f3e3</code>
              <span>mdi-parking</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pause"></i>
              <code class="mr-2">f3e4</code>
              <span>mdi-pause</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pause-circle"></i>
              <code class="mr-2">f3e5</code>
              <span>mdi-pause-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pause-circle-outline"></i>
              <code class="mr-2">f3e6</code>
              <span>mdi-pause-circle-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pause-octagon"></i>
              <code class="mr-2">f3e7</code>
              <span>mdi-pause-octagon</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pause-octagon-outline"></i>
              <code class="mr-2">f3e8</code>
              <span>mdi-pause-octagon-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-paw"></i>
              <code class="mr-2">f3e9</code>
              <span>mdi-paw</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-paw-off"></i>
              <code class="mr-2">f657</code>
              <span>mdi-paw-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pen"></i>
              <code class="mr-2">f3ea</code>
              <span>mdi-pen</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pencil"></i>
              <code class="mr-2">f3eb</code>
              <span>mdi-pencil</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pencil-box"></i>
              <code class="mr-2">f3ec</code>
              <span>mdi-pencil-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pencil-box-outline"></i>
              <code class="mr-2">f3ed</code>
              <span>mdi-pencil-box-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pencil-circle"></i>
              <code class="mr-2">f6fe</code>
              <span>mdi-pencil-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pencil-lock"></i>
              <code class="mr-2">f3ee</code>
              <span>mdi-pencil-lock</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pencil-off"></i>
              <code class="mr-2">f3ef</code>
              <span>mdi-pencil-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pentagon"></i>
              <code class="mr-2">f6ff</code>
              <span>mdi-pentagon</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pentagon-outline"></i>
              <code class="mr-2">f700</code>
              <span>mdi-pentagon-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-percent"></i>
              <code class="mr-2">f3f0</code>
              <span>mdi-percent</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pharmacy"></i>
              <code class="mr-2">f3f1</code>
              <span>mdi-pharmacy</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-phone"></i>
              <code class="mr-2">f3f2</code>
              <span>mdi-phone</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-phone-bluetooth"></i>
              <code class="mr-2">f3f3</code>
              <span>mdi-phone-bluetooth</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-phone-classic"></i>
              <code class="mr-2">f602</code>
              <span>mdi-phone-classic</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-phone-forward"></i>
              <code class="mr-2">f3f4</code>
              <span>mdi-phone-forward</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-phone-hangup"></i>
              <code class="mr-2">f3f5</code>
              <span>mdi-phone-hangup</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-phone-in-talk"></i>
              <code class="mr-2">f3f6</code>
              <span>mdi-phone-in-talk</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-phone-incoming"></i>
              <code class="mr-2">f3f7</code>
              <span>mdi-phone-incoming</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-phone-locked"></i>
              <code class="mr-2">f3f8</code>
              <span>mdi-phone-locked</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-phone-log"></i>
              <code class="mr-2">f3f9</code>
              <span>mdi-phone-log</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-phone-minus"></i>
              <code class="mr-2">f658</code>
              <span>mdi-phone-minus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-phone-missed"></i>
              <code class="mr-2">f3fa</code>
              <span>mdi-phone-missed</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-phone-outgoing"></i>
              <code class="mr-2">f3fb</code>
              <span>mdi-phone-outgoing</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-phone-paused"></i>
              <code class="mr-2">f3fc</code>
              <span>mdi-phone-paused</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-phone-plus"></i>
              <code class="mr-2">f659</code>
              <span>mdi-phone-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-phone-settings"></i>
              <code class="mr-2">f3fd</code>
              <span>mdi-phone-settings</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-phone-voip"></i>
              <code class="mr-2">f3fe</code>
              <span>mdi-phone-voip</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pi"></i>
              <code class="mr-2">f3ff</code>
              <span>mdi-pi</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pi-box"></i>
              <code class="mr-2">f400</code>
              <span>mdi-pi-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-piano"></i>
              <code class="mr-2">f67c</code>
              <span>mdi-piano</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pig"></i>
              <code class="mr-2">f401</code>
              <span>mdi-pig</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pill"></i>
              <code class="mr-2">f402</code>
              <span>mdi-pill</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pillar"></i>
              <code class="mr-2">f701</code>
              <span>mdi-pillar</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pin"></i>
              <code class="mr-2">f403</code>
              <span>mdi-pin</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pin-off"></i>
              <code class="mr-2">f404</code>
              <span>mdi-pin-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pine-tree"></i>
              <code class="mr-2">f405</code>
              <span>mdi-pine-tree</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pine-tree-box"></i>
              <code class="mr-2">f406</code>
              <span>mdi-pine-tree-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pinterest"></i>
              <code class="mr-2">f407</code>
              <span>mdi-pinterest</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pinterest-box"></i>
              <code class="mr-2">f408</code>
              <span>mdi-pinterest-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pistol"></i>
              <code class="mr-2">f702</code>
              <span>mdi-pistol</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pizza"></i>
              <code class="mr-2">f409</code>
              <span>mdi-pizza</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-plane-shield"></i>
              <code class="mr-2">f6ba</code>
              <span>mdi-plane-shield</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-play"></i>
              <code class="mr-2">f40a</code>
              <span>mdi-play</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-play-box-outline"></i>
              <code class="mr-2">f40b</code>
              <span>mdi-play-box-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-play-circle"></i>
              <code class="mr-2">f40c</code>
              <span>mdi-play-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-play-circle-outline"></i>
              <code class="mr-2">f40d</code>
              <span>mdi-play-circle-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-play-pause"></i>
              <code class="mr-2">f40e</code>
              <span>mdi-play-pause</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-play-protected-content"></i>
              <code class="mr-2">f40f</code>
              <span>mdi-play-protected-content</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-playlist-check"></i>
              <code class="mr-2">f5c7</code>
              <span>mdi-playlist-check</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-playlist-minus"></i>
              <code class="mr-2">f410</code>
              <span>mdi-playlist-minus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-playlist-play"></i>
              <code class="mr-2">f411</code>
              <span>mdi-playlist-play</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-playlist-plus"></i>
              <code class="mr-2">f412</code>
              <span>mdi-playlist-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-playlist-remove"></i>
              <code class="mr-2">f413</code>
              <span>mdi-playlist-remove</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-playstation"></i>
              <code class="mr-2">f414</code>
              <span>mdi-playstation</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-plex"></i>
              <code class="mr-2">f6b9</code>
              <span>mdi-plex</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-plus"></i>
              <code class="mr-2">f415</code>
              <span>mdi-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-plus-box"></i>
              <code class="mr-2">f416</code>
              <span>mdi-plus-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-plus-box-outline"></i>
              <code class="mr-2">f703</code>
              <span>mdi-plus-box-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-plus-circle"></i>
              <code class="mr-2">f417</code>
              <span>mdi-plus-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-plus-circle-multiple-outline"></i>
              <code class="mr-2">f418</code>
              <span>mdi-plus-circle-multiple-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-plus-circle-outline"></i>
              <code class="mr-2">f419</code>
              <span>mdi-plus-circle-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-plus-network"></i>
              <code class="mr-2">f41a</code>
              <span>mdi-plus-network</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-plus-one"></i>
              <code class="mr-2">f41b</code>
              <span>mdi-plus-one</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-plus-outline"></i>
              <code class="mr-2">f704</code>
              <span>mdi-plus-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pocket"></i>
              <code class="mr-2">f41c</code>
              <span>mdi-pocket</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pokeball"></i>
              <code class="mr-2">f41d</code>
              <span>mdi-pokeball</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-polaroid"></i>
              <code class="mr-2">f41e</code>
              <span>mdi-polaroid</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-poll"></i>
              <code class="mr-2">f41f</code>
              <span>mdi-poll</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-poll-box"></i>
              <code class="mr-2">f420</code>
              <span>mdi-poll-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-polymer"></i>
              <code class="mr-2">f421</code>
              <span>mdi-polymer</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pool"></i>
              <code class="mr-2">f606</code>
              <span>mdi-pool</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-popcorn"></i>
              <code class="mr-2">f422</code>
              <span>mdi-popcorn</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pot"></i>
              <code class="mr-2">f65a</code>
              <span>mdi-pot</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pot-mix"></i>
              <code class="mr-2">f65b</code>
              <span>mdi-pot-mix</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pound"></i>
              <code class="mr-2">f423</code>
              <span>mdi-pound</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pound-box"></i>
              <code class="mr-2">f424</code>
              <span>mdi-pound-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-power"></i>
              <code class="mr-2">f425</code>
              <span>mdi-power</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-power-plug"></i>
              <code class="mr-2">f6a4</code>
              <span>mdi-power-plug</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-power-plug-off"></i>
              <code class="mr-2">f6a5</code>
              <span>mdi-power-plug-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-power-settings"></i>
              <code class="mr-2">f426</code>
              <span>mdi-power-settings</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-power-socket"></i>
              <code class="mr-2">f427</code>
              <span>mdi-power-socket</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-prescription"></i>
              <code class="mr-2">f705</code>
              <span>mdi-prescription</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-presentation"></i>
              <code class="mr-2">f428</code>
              <span>mdi-presentation</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-presentation-play"></i>
              <code class="mr-2">f429</code>
              <span>mdi-presentation-play</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-printer"></i>
              <code class="mr-2">f42a</code>
              <span>mdi-printer</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-printer-3d"></i>
              <code class="mr-2">f42b</code>
              <span>mdi-printer-3d</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-printer-alert"></i>
              <code class="mr-2">f42c</code>
              <span>mdi-printer-alert</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-printer-settings"></i>
              <code class="mr-2">f706</code>
              <span>mdi-printer-settings</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-priority-high"></i>
              <code class="mr-2">f603</code>
              <span>mdi-priority-high</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-priority-low"></i>
              <code class="mr-2">f604</code>
              <span>mdi-priority-low</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-professional-hexagon"></i>
              <code class="mr-2">f42d</code>
              <span>mdi-professional-hexagon</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-projector"></i>
              <code class="mr-2">f42e</code>
              <span>mdi-projector</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-projector-screen"></i>
              <code class="mr-2">f42f</code>
              <span>mdi-projector-screen</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-publish"></i>
              <code class="mr-2">f6a6</code>
              <span>mdi-publish</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-pulse"></i>
              <code class="mr-2">f430</code>
              <span>mdi-pulse</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-puzzle"></i>
              <code class="mr-2">f431</code>
              <span>mdi-puzzle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-qqchat"></i>
              <code class="mr-2">f605</code>
              <span>mdi-qqchat</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-qrcode"></i>
              <code class="mr-2">f432</code>
              <span>mdi-qrcode</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-qrcode-scan"></i>
              <code class="mr-2">f433</code>
              <span>mdi-qrcode-scan</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-quadcopter"></i>
              <code class="mr-2">f434</code>
              <span>mdi-quadcopter</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-quality-high"></i>
              <code class="mr-2">f435</code>
              <span>mdi-quality-high</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-quicktime"></i>
              <code class="mr-2">f436</code>
              <span>mdi-quicktime</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-radar"></i>
              <code class="mr-2">f437</code>
              <span>mdi-radar</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-radiator"></i>
              <code class="mr-2">f438</code>
              <span>mdi-radiator</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-radio"></i>
              <code class="mr-2">f439</code>
              <span>mdi-radio</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-radio-handheld"></i>
              <code class="mr-2">f43a</code>
              <span>mdi-radio-handheld</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-radio-tower"></i>
              <code class="mr-2">f43b</code>
              <span>mdi-radio-tower</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-radioactive"></i>
              <code class="mr-2">f43c</code>
              <span>mdi-radioactive</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-radiobox-blank"></i>
              <code class="mr-2">f43d</code>
              <span>mdi-radiobox-blank</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-radiobox-marked"></i>
              <code class="mr-2">f43e</code>
              <span>mdi-radiobox-marked</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-raspberrypi"></i>
              <code class="mr-2">f43f</code>
              <span>mdi-raspberrypi</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-ray-end"></i>
              <code class="mr-2">f440</code>
              <span>mdi-ray-end</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-ray-end-arrow"></i>
              <code class="mr-2">f441</code>
              <span>mdi-ray-end-arrow</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-ray-start"></i>
              <code class="mr-2">f442</code>
              <span>mdi-ray-start</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-ray-start-arrow"></i>
              <code class="mr-2">f443</code>
              <span>mdi-ray-start-arrow</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-ray-start-end"></i>
              <code class="mr-2">f444</code>
              <span>mdi-ray-start-end</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-ray-vertex"></i>
              <code class="mr-2">f445</code>
              <span>mdi-ray-vertex</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-rdio"></i>
              <code class="mr-2">f446</code>
              <span>mdi-rdio</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-react"></i>
              <code class="mr-2">f707</code>
              <span>mdi-react</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-read"></i>
              <code class="mr-2">f447</code>
              <span>mdi-read</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-readability"></i>
              <code class="mr-2">f448</code>
              <span>mdi-readability</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-receipt"></i>
              <code class="mr-2">f449</code>
              <span>mdi-receipt</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-record"></i>
              <code class="mr-2">f44a</code>
              <span>mdi-record</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-record-rec"></i>
              <code class="mr-2">f44b</code>
              <span>mdi-record-rec</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-recycle"></i>
              <code class="mr-2">f44c</code>
              <span>mdi-recycle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-reddit"></i>
              <code class="mr-2">f44d</code>
              <span>mdi-reddit</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-redo"></i>
              <code class="mr-2">f44e</code>
              <span>mdi-redo</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-redo-variant"></i>
              <code class="mr-2">f44f</code>
              <span>mdi-redo-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-refresh"></i>
              <code class="mr-2">f450</code>
              <span>mdi-refresh</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-regex"></i>
              <code class="mr-2">f451</code>
              <span>mdi-regex</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-relative-scale"></i>
              <code class="mr-2">f452</code>
              <span>mdi-relative-scale</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-reload"></i>
              <code class="mr-2">f453</code>
              <span>mdi-reload</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-remote"></i>
              <code class="mr-2">f454</code>
              <span>mdi-remote</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-rename-box"></i>
              <code class="mr-2">f455</code>
              <span>mdi-rename-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-reorder-horizontal"></i>
              <code class="mr-2">f687</code>
              <span>mdi-reorder-horizontal</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-reorder-vertical"></i>
              <code class="mr-2">f688</code>
              <span>mdi-reorder-vertical</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-repeat"></i>
              <code class="mr-2">f456</code>
              <span>mdi-repeat</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-repeat-off"></i>
              <code class="mr-2">f457</code>
              <span>mdi-repeat-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-repeat-once"></i>
              <code class="mr-2">f458</code>
              <span>mdi-repeat-once</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-replay"></i>
              <code class="mr-2">f459</code>
              <span>mdi-replay</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-reply"></i>
              <code class="mr-2">f45a</code>
              <span>mdi-reply</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-reply-all"></i>
              <code class="mr-2">f45b</code>
              <span>mdi-reply-all</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-reproduction"></i>
              <code class="mr-2">f45c</code>
              <span>mdi-reproduction</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-resize-bottom-right"></i>
              <code class="mr-2">f45d</code>
              <span>mdi-resize-bottom-right</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-responsive"></i>
              <code class="mr-2">f45e</code>
              <span>mdi-responsive</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-restart"></i>
              <code class="mr-2">f708</code>
              <span>mdi-restart</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-restore"></i>
              <code class="mr-2">f6a7</code>
              <span>mdi-restore</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-rewind"></i>
              <code class="mr-2">f45f</code>
              <span>mdi-rewind</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-rewind-outline"></i>
              <code class="mr-2">f709</code>
              <span>mdi-rewind-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-rhombus"></i>
              <code class="mr-2">f70a</code>
              <span>mdi-rhombus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-rhombus-outline"></i>
              <code class="mr-2">f70b</code>
              <span>mdi-rhombus-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-ribbon"></i>
              <code class="mr-2">f460</code>
              <span>mdi-ribbon</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-road"></i>
              <code class="mr-2">f461</code>
              <span>mdi-road</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-road-variant"></i>
              <code class="mr-2">f462</code>
              <span>mdi-road-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-robot"></i>
              <code class="mr-2">f6a8</code>
              <span>mdi-robot</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-rocket"></i>
              <code class="mr-2">f463</code>
              <span>mdi-rocket</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-roomba"></i>
              <code class="mr-2">f70c</code>
              <span>mdi-roomba</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-rotate-3d"></i>
              <code class="mr-2">f464</code>
              <span>mdi-rotate-3d</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-rotate-left"></i>
              <code class="mr-2">f465</code>
              <span>mdi-rotate-left</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-rotate-left-variant"></i>
              <code class="mr-2">f466</code>
              <span>mdi-rotate-left-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-rotate-right"></i>
              <code class="mr-2">f467</code>
              <span>mdi-rotate-right</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-rotate-right-variant"></i>
              <code class="mr-2">f468</code>
              <span>mdi-rotate-right-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-rounded-corner"></i>
              <code class="mr-2">f607</code>
              <span>mdi-rounded-corner</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-router-wireless"></i>
              <code class="mr-2">f469</code>
              <span>mdi-router-wireless</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-routes"></i>
              <code class="mr-2">f46a</code>
              <span>mdi-routes</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-rowing"></i>
              <code class="mr-2">f608</code>
              <span>mdi-rowing</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-rss"></i>
              <code class="mr-2">f46b</code>
              <span>mdi-rss</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-rss-box"></i>
              <code class="mr-2">f46c</code>
              <span>mdi-rss-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-ruler"></i>
              <code class="mr-2">f46d</code>
              <span>mdi-ruler</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-run"></i>
              <code class="mr-2">f70d</code>
              <span>mdi-run</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-run-fast"></i>
              <code class="mr-2">f46e</code>
              <span>mdi-run-fast</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-sale"></i>
              <code class="mr-2">f46f</code>
              <span>mdi-sale</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-satellite"></i>
              <code class="mr-2">f470</code>
              <span>mdi-satellite</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-satellite-variant"></i>
              <code class="mr-2">f471</code>
              <span>mdi-satellite-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-saxophone"></i>
              <code class="mr-2">f609</code>
              <span>mdi-saxophone</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-scale"></i>
              <code class="mr-2">f472</code>
              <span>mdi-scale</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-scale-balance"></i>
              <code class="mr-2">f5d1</code>
              <span>mdi-scale-balance</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-scale-bathroom"></i>
              <code class="mr-2">f473</code>
              <span>mdi-scale-bathroom</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-scanner"></i>
              <code class="mr-2">f6aa</code>
              <span>mdi-scanner</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-school"></i>
              <code class="mr-2">f474</code>
              <span>mdi-school</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-screen-rotation"></i>
              <code class="mr-2">f475</code>
              <span>mdi-screen-rotation</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-screen-rotation-lock"></i>
              <code class="mr-2">f476</code>
              <span>mdi-screen-rotation-lock</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-screwdriver"></i>
              <code class="mr-2">f477</code>
              <span>mdi-screwdriver</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-script"></i>
              <code class="mr-2">f478</code>
              <span>mdi-script</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-sd"></i>
              <code class="mr-2">f479</code>
              <span>mdi-sd</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-seal"></i>
              <code class="mr-2">f47a</code>
              <span>mdi-seal</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-search-web"></i>
              <code class="mr-2">f70e</code>
              <span>mdi-search-web</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-seat-flat"></i>
              <code class="mr-2">f47b</code>
              <span>mdi-seat-flat</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-seat-flat-angled"></i>
              <code class="mr-2">f47c</code>
              <span>mdi-seat-flat-angled</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-seat-individual-suite"></i>
              <code class="mr-2">f47d</code>
              <span>mdi-seat-individual-suite</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-seat-legroom-extra"></i>
              <code class="mr-2">f47e</code>
              <span>mdi-seat-legroom-extra</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-seat-legroom-normal"></i>
              <code class="mr-2">f47f</code>
              <span>mdi-seat-legroom-normal</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-seat-legroom-reduced"></i>
              <code class="mr-2">f480</code>
              <span>mdi-seat-legroom-reduced</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-seat-recline-extra"></i>
              <code class="mr-2">f481</code>
              <span>mdi-seat-recline-extra</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-seat-recline-normal"></i>
              <code class="mr-2">f482</code>
              <span>mdi-seat-recline-normal</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-security"></i>
              <code class="mr-2">f483</code>
              <span>mdi-security</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-security-home"></i>
              <code class="mr-2">f689</code>
              <span>mdi-security-home</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-security-network"></i>
              <code class="mr-2">f484</code>
              <span>mdi-security-network</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-select"></i>
              <code class="mr-2">f485</code>
              <span>mdi-select</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-select-all"></i>
              <code class="mr-2">f486</code>
              <span>mdi-select-all</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-select-inverse"></i>
              <code class="mr-2">f487</code>
              <span>mdi-select-inverse</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-select-off"></i>
              <code class="mr-2">f488</code>
              <span>mdi-select-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-selection"></i>
              <code class="mr-2">f489</code>
              <span>mdi-selection</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-send"></i>
              <code class="mr-2">f48a</code>
              <span>mdi-send</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-serial-port"></i>
              <code class="mr-2">f65c</code>
              <span>mdi-serial-port</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-server"></i>
              <code class="mr-2">f48b</code>
              <span>mdi-server</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-server-minus"></i>
              <code class="mr-2">f48c</code>
              <span>mdi-server-minus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-server-network"></i>
              <code class="mr-2">f48d</code>
              <span>mdi-server-network</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-server-network-off"></i>
              <code class="mr-2">f48e</code>
              <span>mdi-server-network-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-server-off"></i>
              <code class="mr-2">f48f</code>
              <span>mdi-server-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-server-plus"></i>
              <code class="mr-2">f490</code>
              <span>mdi-server-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-server-remove"></i>
              <code class="mr-2">f491</code>
              <span>mdi-server-remove</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-server-security"></i>
              <code class="mr-2">f492</code>
              <span>mdi-server-security</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-settings"></i>
              <code class="mr-2">f493</code>
              <span>mdi-settings</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-settings-box"></i>
              <code class="mr-2">f494</code>
              <span>mdi-settings-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-shape-circle-plus"></i>
              <code class="mr-2">f65d</code>
              <span>mdi-shape-circle-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-shape-plus"></i>
              <code class="mr-2">f495</code>
              <span>mdi-shape-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-shape-polygon-plus"></i>
              <code class="mr-2">f65e</code>
              <span>mdi-shape-polygon-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-shape-rectangle-plus"></i>
              <code class="mr-2">f65f</code>
              <span>mdi-shape-rectangle-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-shape-square-plus"></i>
              <code class="mr-2">f660</code>
              <span>mdi-shape-square-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-share"></i>
              <code class="mr-2">f496</code>
              <span>mdi-share</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-share-variant"></i>
              <code class="mr-2">f497</code>
              <span>mdi-share-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-shield"></i>
              <code class="mr-2">f498</code>
              <span>mdi-shield</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-shield-outline"></i>
              <code class="mr-2">f499</code>
              <span>mdi-shield-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-shopping"></i>
              <code class="mr-2">f49a</code>
              <span>mdi-shopping</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-shopping-music"></i>
              <code class="mr-2">f49b</code>
              <span>mdi-shopping-music</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-shovel"></i>
              <code class="mr-2">f70f</code>
              <span>mdi-shovel</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-shovel-off"></i>
              <code class="mr-2">f710</code>
              <span>mdi-shovel-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-shredder"></i>
              <code class="mr-2">f49c</code>
              <span>mdi-shredder</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-shuffle"></i>
              <code class="mr-2">f49d</code>
              <span>mdi-shuffle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-shuffle-disabled"></i>
              <code class="mr-2">f49e</code>
              <span>mdi-shuffle-disabled</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-shuffle-variant"></i>
              <code class="mr-2">f49f</code>
              <span>mdi-shuffle-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-sigma"></i>
              <code class="mr-2">f4a0</code>
              <span>mdi-sigma</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-sigma-lower"></i>
              <code class="mr-2">f62b</code>
              <span>mdi-sigma-lower</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-sign-caution"></i>
              <code class="mr-2">f4a1</code>
              <span>mdi-sign-caution</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-signal"></i>
              <code class="mr-2">f4a2</code>
              <span>mdi-signal</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-signal-2g"></i>
              <code class="mr-2">f711</code>
              <span>mdi-signal-2g</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-signal-3g"></i>
              <code class="mr-2">f712</code>
              <span>mdi-signal-3g</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-signal-4g"></i>
              <code class="mr-2">f713</code>
              <span>mdi-signal-4g</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-signal-hspa"></i>
              <code class="mr-2">f714</code>
              <span>mdi-signal-hspa</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-signal-hspa-plus"></i>
              <code class="mr-2">f715</code>
              <span>mdi-signal-hspa-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-signal-variant"></i>
              <code class="mr-2">f60a</code>
              <span>mdi-signal-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-silverware"></i>
              <code class="mr-2">f4a3</code>
              <span>mdi-silverware</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-silverware-fork"></i>
              <code class="mr-2">f4a4</code>
              <span>mdi-silverware-fork</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-silverware-spoon"></i>
              <code class="mr-2">f4a5</code>
              <span>mdi-silverware-spoon</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-silverware-variant"></i>
              <code class="mr-2">f4a6</code>
              <span>mdi-silverware-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-sim"></i>
              <code class="mr-2">f4a7</code>
              <span>mdi-sim</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-sim-alert"></i>
              <code class="mr-2">f4a8</code>
              <span>mdi-sim-alert</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-sim-off"></i>
              <code class="mr-2">f4a9</code>
              <span>mdi-sim-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-sitemap"></i>
              <code class="mr-2">f4aa</code>
              <span>mdi-sitemap</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-skip-backward"></i>
              <code class="mr-2">f4ab</code>
              <span>mdi-skip-backward</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-skip-forward"></i>
              <code class="mr-2">f4ac</code>
              <span>mdi-skip-forward</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-skip-next"></i>
              <code class="mr-2">f4ad</code>
              <span>mdi-skip-next</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-skip-next-circle"></i>
              <code class="mr-2">f661</code>
              <span>mdi-skip-next-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-skip-next-circle-outline"></i>
              <code class="mr-2">f662</code>
              <span>mdi-skip-next-circle-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-skip-previous"></i>
              <code class="mr-2">f4ae</code>
              <span>mdi-skip-previous</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-skip-previous-circle"></i>
              <code class="mr-2">f663</code>
              <span>mdi-skip-previous-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-skip-previous-circle-outline"></i>
              <code class="mr-2">f664</code>
              <span>mdi-skip-previous-circle-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-skull"></i>
              <code class="mr-2">f68b</code>
              <span>mdi-skull</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-skype"></i>
              <code class="mr-2">f4af</code>
              <span>mdi-skype</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-skype-business"></i>
              <code class="mr-2">f4b0</code>
              <span>mdi-skype-business</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-slack"></i>
              <code class="mr-2">f4b1</code>
              <span>mdi-slack</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-sleep"></i>
              <code class="mr-2">f4b2</code>
              <span>mdi-sleep</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-sleep-off"></i>
              <code class="mr-2">f4b3</code>
              <span>mdi-sleep-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-smoking"></i>
              <code class="mr-2">f4b4</code>
              <span>mdi-smoking</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-smoking-off"></i>
              <code class="mr-2">f4b5</code>
              <span>mdi-smoking-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-snapchat"></i>
              <code class="mr-2">f4b6</code>
              <span>mdi-snapchat</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-snowflake"></i>
              <code class="mr-2">f716</code>
              <span>mdi-snowflake</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-snowman"></i>
              <code class="mr-2">f4b7</code>
              <span>mdi-snowman</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-soccer"></i>
              <code class="mr-2">f4b8</code>
              <span>mdi-soccer</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-sofa"></i>
              <code class="mr-2">f4b9</code>
              <span>mdi-sofa</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-solid"></i>
              <code class="mr-2">f68c</code>
              <span>mdi-solid</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-sort"></i>
              <code class="mr-2">f4ba</code>
              <span>mdi-sort</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-sort-alphabetical"></i>
              <code class="mr-2">f4bb</code>
              <span>mdi-sort-alphabetical</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-sort-ascending"></i>
              <code class="mr-2">f4bc</code>
              <span>mdi-sort-ascending</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-sort-descending"></i>
              <code class="mr-2">f4bd</code>
              <span>mdi-sort-descending</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-sort-numeric"></i>
              <code class="mr-2">f4be</code>
              <span>mdi-sort-numeric</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-sort-variant"></i>
              <code class="mr-2">f4bf</code>
              <span>mdi-sort-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-soundcloud"></i>
              <code class="mr-2">f4c0</code>
              <span>mdi-soundcloud</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-source-branch"></i>
              <code class="mr-2">f62c</code>
              <span>mdi-source-branch</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-source-commit"></i>
              <code class="mr-2">f717</code>
              <span>mdi-source-commit</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-source-commit-end"></i>
              <code class="mr-2">f718</code>
              <span>mdi-source-commit-end</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-source-commit-end-local"></i>
              <code class="mr-2">f719</code>
              <span>mdi-source-commit-end-local</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-source-commit-local"></i>
              <code class="mr-2">f71a</code>
              <span>mdi-source-commit-local</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-source-commit-next-local"></i>
              <code class="mr-2">f71b</code>
              <span>mdi-source-commit-next-local</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-source-commit-start"></i>
              <code class="mr-2">f71c</code>
              <span>mdi-source-commit-start</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-source-commit-start-next-local"></i>
              <code class="mr-2">f71d</code>
              <span>mdi-source-commit-start-next-local</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-source-fork"></i>
              <code class="mr-2">f4c1</code>
              <span>mdi-source-fork</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-source-merge"></i>
              <code class="mr-2">f62d</code>
              <span>mdi-source-merge</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-source-pull"></i>
              <code class="mr-2">f4c2</code>
              <span>mdi-source-pull</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-speaker"></i>
              <code class="mr-2">f4c3</code>
              <span>mdi-speaker</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-speaker-off"></i>
              <code class="mr-2">f4c4</code>
              <span>mdi-speaker-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-speaker-wireless"></i>
              <code class="mr-2">f71e</code>
              <span>mdi-speaker-wireless</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-speedometer"></i>
              <code class="mr-2">f4c5</code>
              <span>mdi-speedometer</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-spellcheck"></i>
              <code class="mr-2">f4c6</code>
              <span>mdi-spellcheck</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-spotify"></i>
              <code class="mr-2">f4c7</code>
              <span>mdi-spotify</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-spotlight"></i>
              <code class="mr-2">f4c8</code>
              <span>mdi-spotlight</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-spotlight-beam"></i>
              <code class="mr-2">f4c9</code>
              <span>mdi-spotlight-beam</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-spray"></i>
              <code class="mr-2">f665</code>
              <span>mdi-spray</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-square-inc"></i>
              <code class="mr-2">f4ca</code>
              <span>mdi-square-inc</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-square-inc-cash"></i>
              <code class="mr-2">f4cb</code>
              <span>mdi-square-inc-cash</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-stackexchange"></i>
              <code class="mr-2">f60b</code>
              <span>mdi-stackexchange</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-stackoverflow"></i>
              <code class="mr-2">f4cc</code>
              <span>mdi-stackoverflow</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-stadium"></i>
              <code class="mr-2">f71f</code>
              <span>mdi-stadium</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-stairs"></i>
              <code class="mr-2">f4cd</code>
              <span>mdi-stairs</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-star"></i>
              <code class="mr-2">f4ce</code>
              <span>mdi-star</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-star-circle"></i>
              <code class="mr-2">f4cf</code>
              <span>mdi-star-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-star-half"></i>
              <code class="mr-2">f4d0</code>
              <span>mdi-star-half</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-star-off"></i>
              <code class="mr-2">f4d1</code>
              <span>mdi-star-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-star-outline"></i>
              <code class="mr-2">f4d2</code>
              <span>mdi-star-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-steam"></i>
              <code class="mr-2">f4d3</code>
              <span>mdi-steam</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-steering"></i>
              <code class="mr-2">f4d4</code>
              <span>mdi-steering</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-step-backward"></i>
              <code class="mr-2">f4d5</code>
              <span>mdi-step-backward</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-step-backward-2"></i>
              <code class="mr-2">f4d6</code>
              <span>mdi-step-backward-2</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-step-forward"></i>
              <code class="mr-2">f4d7</code>
              <span>mdi-step-forward</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-step-forward-2"></i>
              <code class="mr-2">f4d8</code>
              <span>mdi-step-forward-2</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-stethoscope"></i>
              <code class="mr-2">f4d9</code>
              <span>mdi-stethoscope</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-sticker"></i>
              <code class="mr-2">f5d0</code>
              <span>mdi-sticker</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-stocking"></i>
              <code class="mr-2">f4da</code>
              <span>mdi-stocking</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-stop"></i>
              <code class="mr-2">f4db</code>
              <span>mdi-stop</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-stop-circle"></i>
              <code class="mr-2">f666</code>
              <span>mdi-stop-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-stop-circle-outline"></i>
              <code class="mr-2">f667</code>
              <span>mdi-stop-circle-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-store"></i>
              <code class="mr-2">f4dc</code>
              <span>mdi-store</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-store-24-hour"></i>
              <code class="mr-2">f4dd</code>
              <span>mdi-store-24-hour</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-stove"></i>
              <code class="mr-2">f4de</code>
              <span>mdi-stove</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-subdirectory-arrow-left"></i>
              <code class="mr-2">f60c</code>
              <span>mdi-subdirectory-arrow-left</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-subdirectory-arrow-right"></i>
              <code class="mr-2">f60d</code>
              <span>mdi-subdirectory-arrow-right</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-subway"></i>
              <code class="mr-2">f6ab</code>
              <span>mdi-subway</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-subway-variant"></i>
              <code class="mr-2">f4df</code>
              <span>mdi-subway-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-sunglasses"></i>
              <code class="mr-2">f4e0</code>
              <span>mdi-sunglasses</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-surround-sound"></i>
              <code class="mr-2">f5c5</code>
              <span>mdi-surround-sound</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-svg"></i>
              <code class="mr-2">f720</code>
              <span>mdi-svg</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-swap-horizontal"></i>
              <code class="mr-2">f4e1</code>
              <span>mdi-swap-horizontal</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-swap-vertical"></i>
              <code class="mr-2">f4e2</code>
              <span>mdi-swap-vertical</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-swim"></i>
              <code class="mr-2">f4e3</code>
              <span>mdi-swim</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-switch"></i>
              <code class="mr-2">f4e4</code>
              <span>mdi-switch</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-sword"></i>
              <code class="mr-2">f4e5</code>
              <span>mdi-sword</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-sync"></i>
              <code class="mr-2">f4e6</code>
              <span>mdi-sync</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-sync-alert"></i>
              <code class="mr-2">f4e7</code>
              <span>mdi-sync-alert</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-sync-off"></i>
              <code class="mr-2">f4e8</code>
              <span>mdi-sync-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tab"></i>
              <code class="mr-2">f4e9</code>
              <span>mdi-tab</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tab-unselected"></i>
              <code class="mr-2">f4ea</code>
              <span>mdi-tab-unselected</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-table"></i>
              <code class="mr-2">f4eb</code>
              <span>mdi-table</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-table-column-plus-after"></i>
              <code class="mr-2">f4ec</code>
              <span>mdi-table-column-plus-after</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-table-column-plus-before"></i>
              <code class="mr-2">f4ed</code>
              <span>mdi-table-column-plus-before</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-table-column-remove"></i>
              <code class="mr-2">f4ee</code>
              <span>mdi-table-column-remove</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-table-column-width"></i>
              <code class="mr-2">f4ef</code>
              <span>mdi-table-column-width</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-table-edit"></i>
              <code class="mr-2">f4f0</code>
              <span>mdi-table-edit</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-table-large"></i>
              <code class="mr-2">f4f1</code>
              <span>mdi-table-large</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-table-row-height"></i>
              <code class="mr-2">f4f2</code>
              <span>mdi-table-row-height</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-table-row-plus-after"></i>
              <code class="mr-2">f4f3</code>
              <span>mdi-table-row-plus-after</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-table-row-plus-before"></i>
              <code class="mr-2">f4f4</code>
              <span>mdi-table-row-plus-before</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-table-row-remove"></i>
              <code class="mr-2">f4f5</code>
              <span>mdi-table-row-remove</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tablet"></i>
              <code class="mr-2">f4f6</code>
              <span>mdi-tablet</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tablet-android"></i>
              <code class="mr-2">f4f7</code>
              <span>mdi-tablet-android</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tablet-ipad"></i>
              <code class="mr-2">f4f8</code>
              <span>mdi-tablet-ipad</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tag"></i>
              <code class="mr-2">f4f9</code>
              <span>mdi-tag</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tag-faces"></i>
              <code class="mr-2">f4fa</code>
              <span>mdi-tag-faces</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tag-heart"></i>
              <code class="mr-2">f68a</code>
              <span>mdi-tag-heart</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tag-multiple"></i>
              <code class="mr-2">f4fb</code>
              <span>mdi-tag-multiple</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tag-outline"></i>
              <code class="mr-2">f4fc</code>
              <span>mdi-tag-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tag-plus"></i>
              <code class="mr-2">f721</code>
              <span>mdi-tag-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tag-remove"></i>
              <code class="mr-2">f722</code>
              <span>mdi-tag-remove</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tag-text-outline"></i>
              <code class="mr-2">f4fd</code>
              <span>mdi-tag-text-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-target"></i>
              <code class="mr-2">f4fe</code>
              <span>mdi-target</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-taxi"></i>
              <code class="mr-2">f4ff</code>
              <span>mdi-taxi</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-teamviewer"></i>
              <code class="mr-2">f500</code>
              <span>mdi-teamviewer</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-telegram"></i>
              <code class="mr-2">f501</code>
              <span>mdi-telegram</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-television"></i>
              <code class="mr-2">f502</code>
              <span>mdi-television</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-television-guide"></i>
              <code class="mr-2">f503</code>
              <span>mdi-television-guide</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-temperature-celsius"></i>
              <code class="mr-2">f504</code>
              <span>mdi-temperature-celsius</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-temperature-fahrenheit"></i>
              <code class="mr-2">f505</code>
              <span>mdi-temperature-fahrenheit</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-temperature-kelvin"></i>
              <code class="mr-2">f506</code>
              <span>mdi-temperature-kelvin</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tennis"></i>
              <code class="mr-2">f507</code>
              <span>mdi-tennis</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tent"></i>
              <code class="mr-2">f508</code>
              <span>mdi-tent</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-terrain"></i>
              <code class="mr-2">f509</code>
              <span>mdi-terrain</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-test-tube"></i>
              <code class="mr-2">f668</code>
              <span>mdi-test-tube</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-text-shadow"></i>
              <code class="mr-2">f669</code>
              <span>mdi-text-shadow</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-text-to-speech"></i>
              <code class="mr-2">f50a</code>
              <span>mdi-text-to-speech</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-text-to-speech-off"></i>
              <code class="mr-2">f50b</code>
              <span>mdi-text-to-speech-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-textbox"></i>
              <code class="mr-2">f60e</code>
              <span>mdi-textbox</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-texture"></i>
              <code class="mr-2">f50c</code>
              <span>mdi-texture</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-theater"></i>
              <code class="mr-2">f50d</code>
              <span>mdi-theater</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-theme-light-dark"></i>
              <code class="mr-2">f50e</code>
              <span>mdi-theme-light-dark</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-thermometer"></i>
              <code class="mr-2">f50f</code>
              <span>mdi-thermometer</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-thermometer-lines"></i>
              <code class="mr-2">f510</code>
              <span>mdi-thermometer-lines</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-thumb-down"></i>
              <code class="mr-2">f511</code>
              <span>mdi-thumb-down</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-thumb-down-outline"></i>
              <code class="mr-2">f512</code>
              <span>mdi-thumb-down-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-thumb-up"></i>
              <code class="mr-2">f513</code>
              <span>mdi-thumb-up</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-thumb-up-outline"></i>
              <code class="mr-2">f514</code>
              <span>mdi-thumb-up-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-thumbs-up-down"></i>
              <code class="mr-2">f515</code>
              <span>mdi-thumbs-up-down</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-ticket"></i>
              <code class="mr-2">f516</code>
              <span>mdi-ticket</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-ticket-account"></i>
              <code class="mr-2">f517</code>
              <span>mdi-ticket-account</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-ticket-confirmation"></i>
              <code class="mr-2">f518</code>
              <span>mdi-ticket-confirmation</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-ticket-percent"></i>
              <code class="mr-2">f723</code>
              <span>mdi-ticket-percent</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tie"></i>
              <code class="mr-2">f519</code>
              <span>mdi-tie</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tilde"></i>
              <code class="mr-2">f724</code>
              <span>mdi-tilde</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-timelapse"></i>
              <code class="mr-2">f51a</code>
              <span>mdi-timelapse</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-timer"></i>
              <code class="mr-2">f51b</code>
              <span>mdi-timer</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-timer-10"></i>
              <code class="mr-2">f51c</code>
              <span>mdi-timer-10</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-timer-3"></i>
              <code class="mr-2">f51d</code>
              <span>mdi-timer-3</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-timer-off"></i>
              <code class="mr-2">f51e</code>
              <span>mdi-timer-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-timer-sand"></i>
              <code class="mr-2">f51f</code>
              <span>mdi-timer-sand</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-timer-sand-empty"></i>
              <code class="mr-2">f6ac</code>
              <span>mdi-timer-sand-empty</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-timetable"></i>
              <code class="mr-2">f520</code>
              <span>mdi-timetable</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-toggle-switch"></i>
              <code class="mr-2">f521</code>
              <span>mdi-toggle-switch</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-toggle-switch-off"></i>
              <code class="mr-2">f522</code>
              <span>mdi-toggle-switch-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tooltip"></i>
              <code class="mr-2">f523</code>
              <span>mdi-tooltip</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tooltip-edit"></i>
              <code class="mr-2">f524</code>
              <span>mdi-tooltip-edit</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tooltip-image"></i>
              <code class="mr-2">f525</code>
              <span>mdi-tooltip-image</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tooltip-outline"></i>
              <code class="mr-2">f526</code>
              <span>mdi-tooltip-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tooltip-outline-plus"></i>
              <code class="mr-2">f527</code>
              <span>mdi-tooltip-outline-plus</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tooltip-text"></i>
              <code class="mr-2">f528</code>
              <span>mdi-tooltip-text</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tooth"></i>
              <code class="mr-2">f529</code>
              <span>mdi-tooth</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tor"></i>
              <code class="mr-2">f52a</code>
              <span>mdi-tor</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tower-beach"></i>
              <code class="mr-2">f680</code>
              <span>mdi-tower-beach</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tower-fire"></i>
              <code class="mr-2">f681</code>
              <span>mdi-tower-fire</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-traffic-light"></i>
              <code class="mr-2">f52b</code>
              <span>mdi-traffic-light</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-train"></i>
              <code class="mr-2">f52c</code>
              <span>mdi-train</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tram"></i>
              <code class="mr-2">f52d</code>
              <span>mdi-tram</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-transcribe"></i>
              <code class="mr-2">f52e</code>
              <span>mdi-transcribe</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-transcribe-close"></i>
              <code class="mr-2">f52f</code>
              <span>mdi-transcribe-close</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-transfer"></i>
              <code class="mr-2">f530</code>
              <span>mdi-transfer</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-transit-transfer"></i>
              <code class="mr-2">f6ad</code>
              <span>mdi-transit-transfer</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-translate"></i>
              <code class="mr-2">f5ca</code>
              <span>mdi-translate</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-treasure-chest"></i>
              <code class="mr-2">f725</code>
              <span>mdi-treasure-chest</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tree"></i>
              <code class="mr-2">f531</code>
              <span>mdi-tree</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-trello"></i>
              <code class="mr-2">f532</code>
              <span>mdi-trello</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-trending-down"></i>
              <code class="mr-2">f533</code>
              <span>mdi-trending-down</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-trending-neutral"></i>
              <code class="mr-2">f534</code>
              <span>mdi-trending-neutral</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-trending-up"></i>
              <code class="mr-2">f535</code>
              <span>mdi-trending-up</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-triangle"></i>
              <code class="mr-2">f536</code>
              <span>mdi-triangle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-triangle-outline"></i>
              <code class="mr-2">f537</code>
              <span>mdi-triangle-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-trophy"></i>
              <code class="mr-2">f538</code>
              <span>mdi-trophy</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-trophy-award"></i>
              <code class="mr-2">f539</code>
              <span>mdi-trophy-award</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-trophy-outline"></i>
              <code class="mr-2">f53a</code>
              <span>mdi-trophy-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-trophy-variant"></i>
              <code class="mr-2">f53b</code>
              <span>mdi-trophy-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-trophy-variant-outline"></i>
              <code class="mr-2">f53c</code>
              <span>mdi-trophy-variant-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-truck"></i>
              <code class="mr-2">f53d</code>
              <span>mdi-truck</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-truck-delivery"></i>
              <code class="mr-2">f53e</code>
              <span>mdi-truck-delivery</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-truck-trailer"></i>
              <code class="mr-2">f726</code>
              <span>mdi-truck-trailer</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tshirt-crew"></i>
              <code class="mr-2">f53f</code>
              <span>mdi-tshirt-crew</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tshirt-v"></i>
              <code class="mr-2">f540</code>
              <span>mdi-tshirt-v</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tumblr"></i>
              <code class="mr-2">f541</code>
              <span>mdi-tumblr</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tumblr-reblog"></i>
              <code class="mr-2">f542</code>
              <span>mdi-tumblr-reblog</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tune"></i>
              <code class="mr-2">f62e</code>
              <span>mdi-tune</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-tune-vertical"></i>
              <code class="mr-2">f66a</code>
              <span>mdi-tune-vertical</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-twitch"></i>
              <code class="mr-2">f543</code>
              <span>mdi-twitch</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-twitter"></i>
              <code class="mr-2">f544</code>
              <span>mdi-twitter</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-twitter-box"></i>
              <code class="mr-2">f545</code>
              <span>mdi-twitter-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-twitter-circle"></i>
              <code class="mr-2">f546</code>
              <span>mdi-twitter-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-twitter-retweet"></i>
              <code class="mr-2">f547</code>
              <span>mdi-twitter-retweet</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-ubuntu"></i>
              <code class="mr-2">f548</code>
              <span>mdi-ubuntu</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-umbraco"></i>
              <code class="mr-2">f549</code>
              <span>mdi-umbraco</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-umbrella"></i>
              <code class="mr-2">f54a</code>
              <span>mdi-umbrella</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-umbrella-outline"></i>
              <code class="mr-2">f54b</code>
              <span>mdi-umbrella-outline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-undo"></i>
              <code class="mr-2">f54c</code>
              <span>mdi-undo</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-undo-variant"></i>
              <code class="mr-2">f54d</code>
              <span>mdi-undo-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-unfold-less"></i>
              <code class="mr-2">f54e</code>
              <span>mdi-unfold-less</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-unfold-more"></i>
              <code class="mr-2">f54f</code>
              <span>mdi-unfold-more</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-ungroup"></i>
              <code class="mr-2">f550</code>
              <span>mdi-ungroup</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-unity"></i>
              <code class="mr-2">f6ae</code>
              <span>mdi-unity</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-untappd"></i>
              <code class="mr-2">f551</code>
              <span>mdi-untappd</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-update"></i>
              <code class="mr-2">f6af</code>
              <span>mdi-update</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-upload"></i>
              <code class="mr-2">f552</code>
              <span>mdi-upload</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-usb"></i>
              <code class="mr-2">f553</code>
              <span>mdi-usb</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-vector-arrange-above"></i>
              <code class="mr-2">f554</code>
              <span>mdi-vector-arrange-above</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-vector-arrange-below"></i>
              <code class="mr-2">f555</code>
              <span>mdi-vector-arrange-below</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-vector-circle"></i>
              <code class="mr-2">f556</code>
              <span>mdi-vector-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-vector-circle-variant"></i>
              <code class="mr-2">f557</code>
              <span>mdi-vector-circle-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-vector-combine"></i>
              <code class="mr-2">f558</code>
              <span>mdi-vector-combine</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-vector-curve"></i>
              <code class="mr-2">f559</code>
              <span>mdi-vector-curve</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-vector-difference"></i>
              <code class="mr-2">f55a</code>
              <span>mdi-vector-difference</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-vector-difference-ab"></i>
              <code class="mr-2">f55b</code>
              <span>mdi-vector-difference-ab</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-vector-difference-ba"></i>
              <code class="mr-2">f55c</code>
              <span>mdi-vector-difference-ba</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-vector-intersection"></i>
              <code class="mr-2">f55d</code>
              <span>mdi-vector-intersection</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-vector-line"></i>
              <code class="mr-2">f55e</code>
              <span>mdi-vector-line</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-vector-point"></i>
              <code class="mr-2">f55f</code>
              <span>mdi-vector-point</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-vector-polygon"></i>
              <code class="mr-2">f560</code>
              <span>mdi-vector-polygon</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-vector-polyline"></i>
              <code class="mr-2">f561</code>
              <span>mdi-vector-polyline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-vector-rectangle"></i>
              <code class="mr-2">f5c6</code>
              <span>mdi-vector-rectangle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-vector-selection"></i>
              <code class="mr-2">f562</code>
              <span>mdi-vector-selection</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-vector-square"></i>
              <code class="mr-2">f001</code>
              <span>mdi-vector-square</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-vector-triangle"></i>
              <code class="mr-2">f563</code>
              <span>mdi-vector-triangle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-vector-union"></i>
              <code class="mr-2">f564</code>
              <span>mdi-vector-union</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-verified"></i>
              <code class="mr-2">f565</code>
              <span>mdi-verified</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-vibrate"></i>
              <code class="mr-2">f566</code>
              <span>mdi-vibrate</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-video"></i>
              <code class="mr-2">f567</code>
              <span>mdi-video</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-video-off"></i>
              <code class="mr-2">f568</code>
              <span>mdi-video-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-video-switch"></i>
              <code class="mr-2">f569</code>
              <span>mdi-video-switch</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-view-agenda"></i>
              <code class="mr-2">f56a</code>
              <span>mdi-view-agenda</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-view-array"></i>
              <code class="mr-2">f56b</code>
              <span>mdi-view-array</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-view-carousel"></i>
              <code class="mr-2">f56c</code>
              <span>mdi-view-carousel</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-view-column"></i>
              <code class="mr-2">f56d</code>
              <span>mdi-view-column</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-view-dashboard"></i>
              <code class="mr-2">f56e</code>
              <span>mdi-view-dashboard</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-view-day"></i>
              <code class="mr-2">f56f</code>
              <span>mdi-view-day</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-view-grid"></i>
              <code class="mr-2">f570</code>
              <span>mdi-view-grid</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-view-headline"></i>
              <code class="mr-2">f571</code>
              <span>mdi-view-headline</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-view-list"></i>
              <code class="mr-2">f572</code>
              <span>mdi-view-list</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-view-module"></i>
              <code class="mr-2">f573</code>
              <span>mdi-view-module</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-view-parallel"></i>
              <code class="mr-2">f727</code>
              <span>mdi-view-parallel</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-view-quilt"></i>
              <code class="mr-2">f574</code>
              <span>mdi-view-quilt</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-view-sequential"></i>
              <code class="mr-2">f728</code>
              <span>mdi-view-sequential</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-view-stream"></i>
              <code class="mr-2">f575</code>
              <span>mdi-view-stream</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-view-week"></i>
              <code class="mr-2">f576</code>
              <span>mdi-view-week</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-vimeo"></i>
              <code class="mr-2">f577</code>
              <span>mdi-vimeo</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-vine"></i>
              <code class="mr-2">f578</code>
              <span>mdi-vine</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-violin"></i>
              <code class="mr-2">f60f</code>
              <span>mdi-violin</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-visualstudio"></i>
              <code class="mr-2">f610</code>
              <span>mdi-visualstudio</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-vk"></i>
              <code class="mr-2">f579</code>
              <span>mdi-vk</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-vk-box"></i>
              <code class="mr-2">f57a</code>
              <span>mdi-vk-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-vk-circle"></i>
              <code class="mr-2">f57b</code>
              <span>mdi-vk-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-vlc"></i>
              <code class="mr-2">f57c</code>
              <span>mdi-vlc</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-voice"></i>
              <code class="mr-2">f5cb</code>
              <span>mdi-voice</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-voicemail"></i>
              <code class="mr-2">f57d</code>
              <span>mdi-voicemail</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-volume-high"></i>
              <code class="mr-2">f57e</code>
              <span>mdi-volume-high</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-volume-low"></i>
              <code class="mr-2">f57f</code>
              <span>mdi-volume-low</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-volume-medium"></i>
              <code class="mr-2">f580</code>
              <span>mdi-volume-medium</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-volume-off"></i>
              <code class="mr-2">f581</code>
              <span>mdi-volume-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-vpn"></i>
              <code class="mr-2">f582</code>
              <span>mdi-vpn</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-walk"></i>
              <code class="mr-2">f583</code>
              <span>mdi-walk</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-wallet"></i>
              <code class="mr-2">f584</code>
              <span>mdi-wallet</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-wallet-giftcard"></i>
              <code class="mr-2">f585</code>
              <span>mdi-wallet-giftcard</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-wallet-membership"></i>
              <code class="mr-2">f586</code>
              <span>mdi-wallet-membership</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-wallet-travel"></i>
              <code class="mr-2">f587</code>
              <span>mdi-wallet-travel</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-wan"></i>
              <code class="mr-2">f588</code>
              <span>mdi-wan</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-washing-machine"></i>
              <code class="mr-2">f729</code>
              <span>mdi-washing-machine</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-watch"></i>
              <code class="mr-2">f589</code>
              <span>mdi-watch</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-watch-export"></i>
              <code class="mr-2">f58a</code>
              <span>mdi-watch-export</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-watch-import"></i>
              <code class="mr-2">f58b</code>
              <span>mdi-watch-import</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-watch-vibrate"></i>
              <code class="mr-2">f6b0</code>
              <span>mdi-watch-vibrate</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-water"></i>
              <code class="mr-2">f58c</code>
              <span>mdi-water</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-water-off"></i>
              <code class="mr-2">f58d</code>
              <span>mdi-water-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-water-percent"></i>
              <code class="mr-2">f58e</code>
              <span>mdi-water-percent</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-water-pump"></i>
              <code class="mr-2">f58f</code>
              <span>mdi-water-pump</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-watermark"></i>
              <code class="mr-2">f612</code>
              <span>mdi-watermark</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-weather-cloudy"></i>
              <code class="mr-2">f590</code>
              <span>mdi-weather-cloudy</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-weather-fog"></i>
              <code class="mr-2">f591</code>
              <span>mdi-weather-fog</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-weather-hail"></i>
              <code class="mr-2">f592</code>
              <span>mdi-weather-hail</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-weather-lightning"></i>
              <code class="mr-2">f593</code>
              <span>mdi-weather-lightning</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-weather-lightning-rainy"></i>
              <code class="mr-2">f67d</code>
              <span>mdi-weather-lightning-rainy</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-weather-night"></i>
              <code class="mr-2">f594</code>
              <span>mdi-weather-night</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-weather-partlycloudy"></i>
              <code class="mr-2">f595</code>
              <span>mdi-weather-partlycloudy</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-weather-pouring"></i>
              <code class="mr-2">f596</code>
              <span>mdi-weather-pouring</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-weather-rainy"></i>
              <code class="mr-2">f597</code>
              <span>mdi-weather-rainy</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-weather-snowy"></i>
              <code class="mr-2">f598</code>
              <span>mdi-weather-snowy</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-weather-snowy-rainy"></i>
              <code class="mr-2">f67e</code>
              <span>mdi-weather-snowy-rainy</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-weather-sunny"></i>
              <code class="mr-2">f599</code>
              <span>mdi-weather-sunny</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-weather-sunset"></i>
              <code class="mr-2">f59a</code>
              <span>mdi-weather-sunset</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-weather-sunset-down"></i>
              <code class="mr-2">f59b</code>
              <span>mdi-weather-sunset-down</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-weather-sunset-up"></i>
              <code class="mr-2">f59c</code>
              <span>mdi-weather-sunset-up</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-weather-windy"></i>
              <code class="mr-2">f59d</code>
              <span>mdi-weather-windy</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-weather-windy-variant"></i>
              <code class="mr-2">f59e</code>
              <span>mdi-weather-windy-variant</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-web"></i>
              <code class="mr-2">f59f</code>
              <span>mdi-web</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-webcam"></i>
              <code class="mr-2">f5a0</code>
              <span>mdi-webcam</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-webhook"></i>
              <code class="mr-2">f62f</code>
              <span>mdi-webhook</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-webpack"></i>
              <code class="mr-2">f72a</code>
              <span>mdi-webpack</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-wechat"></i>
              <code class="mr-2">f611</code>
              <span>mdi-wechat</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-weight"></i>
              <code class="mr-2">f5a1</code>
              <span>mdi-weight</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-weight-kilogram"></i>
              <code class="mr-2">f5a2</code>
              <span>mdi-weight-kilogram</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-whatsapp"></i>
              <code class="mr-2">f5a3</code>
              <span>mdi-whatsapp</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-wheelchair-accessibility"></i>
              <code class="mr-2">f5a4</code>
              <span>mdi-wheelchair-accessibility</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-white-balance-auto"></i>
              <code class="mr-2">f5a5</code>
              <span>mdi-white-balance-auto</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-white-balance-incandescent"></i>
              <code class="mr-2">f5a6</code>
              <span>mdi-white-balance-incandescent</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-white-balance-iridescent"></i>
              <code class="mr-2">f5a7</code>
              <span>mdi-white-balance-iridescent</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-white-balance-sunny"></i>
              <code class="mr-2">f5a8</code>
              <span>mdi-white-balance-sunny</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-widgets"></i>
              <code class="mr-2">f72b</code>
              <span>mdi-widgets</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-wifi"></i>
              <code class="mr-2">f5a9</code>
              <span>mdi-wifi</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-wifi-off"></i>
              <code class="mr-2">f5aa</code>
              <span>mdi-wifi-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-wii"></i>
              <code class="mr-2">f5ab</code>
              <span>mdi-wii</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-wiiu"></i>
              <code class="mr-2">f72c</code>
              <span>mdi-wiiu</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-wikipedia"></i>
              <code class="mr-2">f5ac</code>
              <span>mdi-wikipedia</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-window-close"></i>
              <code class="mr-2">f5ad</code>
              <span>mdi-window-close</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-window-closed"></i>
              <code class="mr-2">f5ae</code>
              <span>mdi-window-closed</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-window-maximize"></i>
              <code class="mr-2">f5af</code>
              <span>mdi-window-maximize</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-window-minimize"></i>
              <code class="mr-2">f5b0</code>
              <span>mdi-window-minimize</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-window-open"></i>
              <code class="mr-2">f5b1</code>
              <span>mdi-window-open</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-window-restore"></i>
              <code class="mr-2">f5b2</code>
              <span>mdi-window-restore</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-windows"></i>
              <code class="mr-2">f5b3</code>
              <span>mdi-windows</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-wordpress"></i>
              <code class="mr-2">f5b4</code>
              <span>mdi-wordpress</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-worker"></i>
              <code class="mr-2">f5b5</code>
              <span>mdi-worker</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-wrap"></i>
              <code class="mr-2">f5b6</code>
              <span>mdi-wrap</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-wrench"></i>
              <code class="mr-2">f5b7</code>
              <span>mdi-wrench</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-wunderlist"></i>
              <code class="mr-2">f5b8</code>
              <span>mdi-wunderlist</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-xaml"></i>
              <code class="mr-2">f673</code>
              <span>mdi-xaml</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-xbox"></i>
              <code class="mr-2">f5b9</code>
              <span>mdi-xbox</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-xbox-controller"></i>
              <code class="mr-2">f5ba</code>
              <span>mdi-xbox-controller</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-xbox-controller-off"></i>
              <code class="mr-2">f5bb</code>
              <span>mdi-xbox-controller-off</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-xda"></i>
              <code class="mr-2">f5bc</code>
              <span>mdi-xda</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-xing"></i>
              <code class="mr-2">f5bd</code>
              <span>mdi-xing</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-xing-box"></i>
              <code class="mr-2">f5be</code>
              <span>mdi-xing-box</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-xing-circle"></i>
              <code class="mr-2">f5bf</code>
              <span>mdi-xing-circle</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-xml"></i>
              <code class="mr-2">f5c0</code>
              <span>mdi-xml</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-yeast"></i>
              <code class="mr-2">f5c1</code>
              <span>mdi-yeast</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-yelp"></i>
              <code class="mr-2">f5c2</code>
              <span>mdi-yelp</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-yin-yang"></i>
              <code class="mr-2">f67f</code>
              <span>mdi-yin-yang</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-youtube-play"></i>
              <code class="mr-2">f5c3</code>
              <span>mdi-youtube-play</span>
            </v-col>
            <v-col cols="12" sm="4" class="my-2">
              <i class="mr-2 mdi text-h5 mdi-zip-box"></i>
              <code class="mr-2">f5c4</code>
              <span>mdi-zip-box</span>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
