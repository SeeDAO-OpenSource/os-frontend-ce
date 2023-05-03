<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- ListsIcon2lineAction -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <v-list-item-subtitle class="text-wrap">
      Lists can contain subheaders, dividers, and can contain 1 or more lines.
      The subtitle will overflow with ellipsis if it extends past one line.
    </v-list-item-subtitle>
    <div class="mt-4">
      <v-toolbar color="primary" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>My files</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-view-module</v-icon>
        </v-btn>
      </v-toolbar>

      <v-list two-line subheader>
        <v-subheader inset>Folders</v-subheader>

        <v-list-item v-for="item in items" :key="item.title" @click.stop>
          <v-list-item-avatar>
            <v-icon :class="[item.iconClass]" v-text="item.icon"></v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon>
              <v-icon color="grey lighten-1">mdi-information</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-subheader inset>Files</v-subheader>

        <v-list-item v-for="item in items2" :key="item.title" @click.stop>
          <v-list-item-avatar>
            <v-icon :class="[item.iconClass]" v-text="item.icon"></v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon>
              <v-icon color="grey lighten-1">mdi-information</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListsIcon2lineAction",

  data: () => ({
    items: [
      {
        icon: "mdi-folder",
        iconClass: "grey lighten-1 white--text",
        title: "Photos",
        subtitle: "Jan 9, 2014",
      },
      {
        icon: "mdi-folder",
        iconClass: "grey lighten-1 white--text",
        title: "Recipes",
        subtitle: "Jan 17, 2014",
      },
      {
        icon: "mdi-folder",
        iconClass: "grey lighten-1 white--text",
        title: "Work",
        subtitle: "Jan 28, 2014",
      },
    ],
    items2: [
      {
        icon: "mdi-format-page-break",
        iconClass: "blue white--text",
        title: "Vacation itinerary",
        subtitle: "Jan 20, 2014",
      },
      {
        icon: "mdi-format-rotate-90",
        iconClass: "amber white--text",
        title: "Kitchen remodel",
        subtitle: "Jan 10, 2014",
      },
    ],
  }),
};
</script>