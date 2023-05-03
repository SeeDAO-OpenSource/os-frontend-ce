<script setup lang="ts">
import { ref } from "vue";

const messages = ref([
  {
    avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
    name: "John Leider",
    title: "Welcome to Vuetify!",
    excerpt: "Thank you for joining our community...",
  },
  {
    color: "red",
    icon: "mdi-account-multiple",
    name: "Social",
    new: 1,
    total: 3,
    title: "Twitter",
  },
  {
    color: "teal",
    icon: "mdi-tag",
    name: "Promos",
    new: 2,
    total: 4,
    title: "Shop your way",
    exceprt: "New deals available, Join Today",
  },
]);

const lorem = ref(
  "Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos."
);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Advanced Usage -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <v-list-item-subtitle class="text-wrap">
      Combining an avatar with other components allows you to build beautiful
      user interfaces right out of the box.
    </v-list-item-subtitle>
    <div class="mt-4">
      <v-expansion-panels variant="popout" class="pa-4">
        <v-expansion-panel
          v-for="(message, i) in messages"
          :key="i"
          hide-actions
        >
          <v-expansion-panel-title>
            <v-row align="center" class="spacer" no-gutters>
              <v-col cols="4" sm="2" md="1">
                <v-avatar size="36px">
                  <v-img
                    v-if="message.avatar"
                    alt="Avatar"
                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                  ></v-img>
                  <v-icon
                    v-else
                    :color="message.color"
                    :icon="message.icon"
                  ></v-icon>
                </v-avatar>
              </v-col>

              <v-col class="hidden-xs-only text-left ml-2" sm="5" md="3">
                <strong v-html="message.name"></strong>
                <span v-if="message.total" class="text-grey">
                  &nbsp;({{ message.total }})
                </span>
              </v-col>

              <v-col class="text-no-wrap text-left" cols="5" sm="3">
                <v-chip
                  v-if="message.new"
                  :color="`${message.color}-lighten-1`"
                  class="ml-0 mr-2 text-black"
                  label
                  small
                >
                  {{ message.new }} new
                </v-chip>
                <strong v-html="message.title"></strong>
              </v-col>

              <v-col
                v-if="message.excerpt"
                class="text-grey text-truncate hidden-sm-and-down"
              >
                &mdash;
                {{ message.excerpt }}
              </v-col>
            </v-row>
          </v-expansion-panel-title>

          <v-expansion-panel-text>
            <v-card-text class="text-subtitle-1" v-text="lorem"></v-card-text>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>