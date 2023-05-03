<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- ListsSubheadingsDividers -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <v-list-item-subtitle class="text-wrap">
      Lists can contain multiple subheaders and dividers.
    </v-list-item-subtitle>
    <div class="mt-4">
      <v-toolbar color="primary" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Settings</v-toolbar-title>
      </v-toolbar>

      <v-list two-line subheader>
        <v-subheader>General</v-subheader>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Profile photo</v-list-item-title>
            <v-list-item-subtitle
              >Change your Google+ profile photo</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Show your status</v-list-item-title>
            <v-list-item-subtitle
              >Your status is visible to everyone</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list subheader two-line flat>
        <v-subheader>Hangout notifications</v-subheader>

        <v-list-item-group v-model="settings" multiple>
          <v-list-item>
            <template v-slot:default="{ active, toggle }">
              <v-list-item-action>
                <v-checkbox
                  v-model="notifications"
                  color="primary"
                  @click="toggle"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content @click="notifications = !notifications">
                <v-list-item-title>Notifications</v-list-item-title>
                <v-list-item-subtitle>Allow notifications</v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-list-item>

          <v-list-item>
            <template v-slot:default="{ active, toggle }">
              <v-list-item-action>
                <v-checkbox
                  v-model="sound"
                  color="primary"
                  @click="toggle"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content @click="sound = !sound">
                <v-list-item-title>Sound</v-list-item-title>
                <v-list-item-subtitle>Hangouts message</v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-list-item>

          <v-list-item>
            <template v-slot:default="{ active, toggle }">
              <v-list-item-action>
                <v-checkbox
                  v-model="video"
                  color="primary"
                  @click="toggle"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content @click="video = !video">
                <v-list-item-title>Video sounds</v-list-item-title>
                <v-list-item-subtitle>Hangouts video call</v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-list-item>

          <v-list-item>
            <template v-slot:default="{ active, toggle }">
              <v-list-item-action>
                <v-checkbox
                  v-model="invites"
                  color="primary"
                  @click="toggle"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content @click="invites = !invites">
                <v-list-item-title>Invites</v-list-item-title>
                <v-list-item-subtitle
                  >Notify when receiving invites</v-list-item-subtitle
                >
              </v-list-item-content>
            </template>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListsSubheadingsDividers",

  data: () => ({
    notifications: false,
    sound: true,
    video: false,
    invites: false,
  }),
};
</script>