<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";

const page = ref({ title: "Feather" });
const breadcrumbs = ref([
  {
    text: "Icons",
    disabled: false,
    href: "#",
  },
  {
    text: "Feather",
    disabled: true,
    href: "#",
  },
]);

const icons = ref([
  {
    title: "activity",
  },
  {
    title: "airplay",
  },
  {
    title: "alert-circle",
  },
  {
    title: "alert-octagon",
  },
  {
    title: "alert-triangle",
  },
  {
    title: "align-center",
  },
  {
    title: "align-justify",
  },
  {
    title: "align-left",
  },
  {
    title: "align-right",
  },
  {
    title: "anchor",
  },
  {
    title: "aperture",
  },
  {
    title: "archive",
  },
  {
    title: "arrow-down",
  },
  {
    title: "arrow-down-circle",
  },
  {
    title: "arrow-down-left",
  },
  {
    title: "arrow-down-right",
  },
  {
    title: "arrow-left",
  },
  {
    title: "arrow-left-circle",
  },
  {
    title: "arrow-right",
  },
  {
    title: "arrow-right-circle",
  },
  {
    title: "arrow-up",
  },
  {
    title: "arrow-up-circle",
  },
  {
    title: "arrow-up-left",
  },
  {
    title: "arrow-up-right",
  },
  {
    title: "at-sign",
  },
  {
    title: "award",
  },
  {
    title: "bar-chart",
  },
  {
    title: "bar-chart-2",
  },
  {
    title: "battery",
  },
  {
    title: "battery-charging",
  },
  {
    title: "bell",
  },
  {
    title: "bell-off",
  },
  {
    title: "bluetooth",
  },
  {
    title: "bold",
  },
  {
    title: "book",
  },
  {
    title: "book-open",
  },
  {
    title: "bookmark",
  },
  {
    title: "box",
  },
  {
    title: "briefcase",
  },
  {
    title: "calendar",
  },
  {
    title: "camera",
  },
  {
    title: "camera-off",
  },
  {
    title: "cast",
  },
  {
    title: "check",
  },
  {
    title: "check-circle",
  },
  {
    title: "check-square",
  },
  {
    title: "chevron-down",
  },
  {
    title: "chevron-left",
  },
  {
    title: "chevron-right",
  },
  {
    title: "chevron-up",
  },
  {
    title: "chevrons-down",
  },
  {
    title: "chevrons-left",
  },
  {
    title: "chevrons-right",
  },
  {
    title: "chevrons-up",
  },
  {
    title: "chrome",
  },
  {
    title: "circle",
  },
  {
    title: "clipboard",
  },
  {
    title: "clock",
  },
  {
    title: "cloud",
  },
  {
    title: "cloud-drizzle",
  },
  {
    title: "cloud-lightning",
  },
  {
    title: "cloud-off",
  },
  {
    title: "cloud-rain",
  },
  {
    title: "cloud-snow",
  },
  {
    title: "code",
  },
  {
    title: "codepen",
  },
  {
    title: "command",
  },
  {
    title: "compass",
  },
  {
    title: "copy",
  },
  {
    title: "corner-down-left",
  },
  {
    title: "corner-down-right",
  },
  {
    title: "corner-left-down",
  },
  {
    title: "corner-left-up",
  },
  {
    title: "corner-right-down",
  },
  {
    title: "corner-right-up",
  },
  {
    title: "corner-up-left",
  },
  {
    title: "corner-up-right",
  },
  {
    title: "cpu",
  },
  {
    title: "credit-card",
  },
  {
    title: "crop",
  },
  {
    title: "crosshair",
  },
  {
    title: "database",
  },
  {
    title: "delete",
  },
  {
    title: "disc",
  },
  {
    title: "dollar-sign",
  },
  {
    title: "download",
  },
  {
    title: "download-cloud",
  },
  {
    title: "droplet",
  },
  {
    title: "edit",
  },
  {
    title: "edit-2",
  },
  {
    title: "edit-3",
  },
  {
    title: "external-link",
  },
  {
    title: "eye",
  },
  {
    title: "eye-off",
  },
  {
    title: "facebook",
  },
  {
    title: "fast-forward",
  },
  {
    title: "feather",
  },
  {
    title: "file",
  },
  {
    title: "file-minus",
  },
  {
    title: "file-plus",
  },
  {
    title: "file-text",
  },
  {
    title: "film",
  },
  {
    title: "filter",
  },
  {
    title: "flag",
  },
  {
    title: "folder",
  },
  {
    title: "folder-minus",
  },
  {
    title: "folder-plus",
  },
  {
    title: "gift",
  },
  {
    title: "git-branch",
  },
  {
    title: "git-commit",
  },
  {
    title: "git-merge",
  },
  {
    title: "git-pull-request",
  },
  {
    title: "github",
  },
  {
    title: "gitlab",
  },
  {
    title: "globe",
  },
  {
    title: "grid",
  },
  {
    title: "hard-drive",
  },
  {
    title: "hash",
  },
  {
    title: "headphones",
  },
  {
    title: "heart",
  },
  {
    title: "help-circle",
  },
  {
    title: "home",
  },
  {
    title: "image",
  },
  {
    title: "inbox",
  },
  {
    title: "info",
  },
  {
    title: "instagram",
  },
  {
    title: "italic",
  },
  {
    title: "layers",
  },
  {
    title: "layout",
  },
  {
    title: "life-buoy",
  },
  {
    title: "link",
  },
  {
    title: "link-2",
  },
  {
    title: "linkedin",
  },
  {
    title: "list",
  },
  {
    title: "loader",
  },
  {
    title: "lock",
  },
  {
    title: "log-in",
  },
  {
    title: "log-out",
  },
  {
    title: "mail",
  },
  {
    title: "map",
  },
  {
    title: "map-pin",
  },
  {
    title: "maximize",
  },
  {
    title: "maximize-2",
  },
  {
    title: "menu",
  },
  {
    title: "message-circle",
  },
  {
    title: "message-square",
  },
  {
    title: "mic",
  },
  {
    title: "mic-off",
  },
  {
    title: "minimize",
  },
  {
    title: "minimize-2",
  },
  {
    title: "minus",
  },
  {
    title: "minus-circle",
  },
  {
    title: "minus-square",
  },
  {
    title: "monitor",
  },
  {
    title: "moon",
  },
  {
    title: "more-horizontal",
  },
  {
    title: "more-vertical",
  },
  {
    title: "move",
  },
  {
    title: "music",
  },
  {
    title: "navigation",
  },
  {
    title: "navigation-2",
  },
  {
    title: "octagon",
  },
  {
    title: "package",
  },
  {
    title: "paperclip",
  },
  {
    title: "pause",
  },
  {
    title: "pause-circle",
  },
  {
    title: "percent",
  },
  {
    title: "phone",
  },
  {
    title: "phone-call",
  },
  {
    title: "phone-forwarded",
  },
  {
    title: "phone-incoming",
  },
  {
    title: "phone-missed",
  },
  {
    title: "phone-off",
  },
  {
    title: "phone-outgoing",
  },
  {
    title: "pie-chart",
  },
  {
    title: "play",
  },
  {
    title: "play-circle",
  },
  {
    title: "plus",
  },
  {
    title: "plus-circle",
  },
  {
    title: "plus-square",
  },
  {
    title: "pocket",
  },
  {
    title: "power",
  },
  {
    title: "printer",
  },
  {
    title: "radio",
  },
  {
    title: "refresh-ccw",
  },
  {
    title: "refresh-cw",
  },
  {
    title: "repeat",
  },
  {
    title: "rewind",
  },
  {
    title: "rotate-ccw",
  },
  {
    title: "rotate-cw",
  },
  {
    title: "rss",
  },
  {
    title: "save",
  },
  {
    title: "scissors",
  },
  {
    title: "search",
  },
  {
    title: "send",
  },
  {
    title: "server",
  },
  {
    title: "settings",
  },
  {
    title: "share",
  },
  {
    title: "share-2",
  },
  {
    title: "shield",
  },
  {
    title: "shield-off",
  },
  {
    title: "shopping-bag",
  },
  {
    title: "shopping-cart",
  },
  {
    title: "shuffle",
  },
  {
    title: "sidebar",
  },
  {
    title: "skip-back",
  },
  {
    title: "skip-forward",
  },
  {
    title: "slack",
  },
  {
    title: "slash",
  },
  {
    title: "sliders",
  },
  {
    title: "smartphone",
  },
  {
    title: "speaker",
  },
  {
    title: "square",
  },
  {
    title: "star",
  },
  {
    title: "stop-circle",
  },
  {
    title: "sun",
  },
  {
    title: "sunrise",
  },
  {
    title: "sunset",
  },
  {
    title: "tablet",
  },
  {
    title: "tag",
  },
  {
    title: "target",
  },
  {
    title: "terminal",
  },
  {
    title: "thermometer",
  },
  {
    title: "thumbs-down",
  },
  {
    title: "thumbs-up",
  },
  {
    title: "toggle-left",
  },
  {
    title: "toggle-right",
  },
  {
    title: "trash",
  },
  {
    title: "trash-2",
  },
  {
    title: "trending-down",
  },
  {
    title: "trending-up",
  },
  {
    title: "triangle",
  },
  {
    title: "truck",
  },
  {
    title: "tv",
  },
  {
    title: "twitter",
  },
  {
    title: "type",
  },
  {
    title: "umbrella",
  },
  {
    title: "underline",
  },
  {
    title: "unlock",
  },
  {
    title: "upload",
  },
  {
    title: "upload-cloud",
  },
  {
    title: "user",
  },
  {
    title: "user-check",
  },
  {
    title: "user-minus",
  },
  {
    title: "user-plus",
  },
  {
    title: "user-x",
  },
  {
    title: "users",
  },
  {
    title: "video",
  },
  {
    title: "video-off",
  },
  {
    title: "voicemail",
  },
  {
    title: "volume",
  },
  {
    title: "volume-1",
  },
  {
    title: "volume-2",
  },
  {
    title: "volume-x",
  },
  {
    title: "watch",
  },
  {
    title: "wifi",
  },
  {
    title: "wifi-off",
  },
  {
    title: "wind",
  },
  {
    title: "x",
  },
  {
    title: "x-circle",
  },
  {
    title: "x-square",
  },
  {
    title: "youtube",
  },
  {
    title: "zap",
  },
  {
    title: "zap-off",
  },
  {
    title: "zoom-in",
  },
  {
    title: "zoom-out",
  },
]);
</script>
<template>
  <BaseBreadcrumb
    :title="page.title"
    :breadcrumbs="breadcrumbs"
  ></BaseBreadcrumb>
  <v-row vs-justify="center">
    <v-col lg="2" md="4" v-for="(item, i) in icons" :key="i">
      <v-card>
        <v-card-text class="pa-5 text-center">
          <vue-feather :type="item.title" class="mt-4"></vue-feather>
          <p class="text-subtitle-1 text-no-wrap text-truncate text-grey-darken-1 mb-4">
            {{ item.title }}
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
