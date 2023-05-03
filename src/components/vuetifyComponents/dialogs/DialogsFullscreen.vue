<script setup lang="ts">
import { ref } from "vue";

const dialog = ref(false);
const notifications = ref(false);
const sound = ref(true);
const widgets = ref(false);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Fullscreen -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    Due to limited space, full-screen dialogs may be more appropriate for mobile
    devices than dialogs used on devices with larger screens.
  </p>
  <div class="text-center mt-6">
    <v-dialog
      v-model="dialog"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn color="primary" dark v-bind="props"> Open Dialog </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary" style="flex: unset">
          <v-btn icon color="inherit" @click="dialog = false">
            <vue-feather type="x" class="feather-sm"></vue-feather>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false"> Save </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-item>
        <v-list lines="two" subheader>
          <v-subheader>User Controls</v-subheader>
          <v-list-item
            title="Content filtering"
            subtitle="Set the content filtering level to restrict apps that can be downloaded"
          ></v-list-item>
          <v-list-item
            title="Password"
            subtitle="Require password for purchase or use password to restrict purchase"
          ></v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list lines="two" subheader>
          <v-subheader>General</v-subheader>
          <v-list-item
            title="Notifications"
            subtitle="Notify me about updates to apps or games that I downloaded"
          >
            <template v-slot:prepend>
              <v-checkbox v-model="notifications"></v-checkbox>
            </template>
          </v-list-item>
          <v-list-item
            title="Sound"
            subtitle="Auto-update apps at any time. Data charges may apply"
          >
            <template v-slot:prepend>
              <v-checkbox v-model="sound"></v-checkbox>
            </template>
          </v-list-item>
          <v-list-item
            title="Auto-add widgets"
            subtitle="Automatically add home screen widgets"
          >
            <template v-slot:prepend>
              <v-checkbox v-model="widgets"></v-checkbox>
            </template>
          </v-list-item>
        </v-list>
        </v-card-item>
      </v-card>
    </v-dialog>
  </div>
</template>
