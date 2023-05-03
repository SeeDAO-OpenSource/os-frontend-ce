<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- ListsAvatarTitleAction -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <v-list-item-subtitle class="text-wrap">
      Lists also contain slots for a more explicit approach. If you choose this
      approach, remember you must provide additional props for correct spacing.
      In this example, we have a tile with an avatar, so we must provide an
      <code>avatar</code> property.
    </v-list-item-subtitle>
    <div class="mt-4">
      <v-toolbar color="primary" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Inbox</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" @click.stop>
          <v-list-item-icon>
            <v-icon v-if="item.icon" color="warning">mdi-star</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListsAvatarTitleAction",

  data: () => ({
    items: [
      {
        icon: true,
        title: "Jason Oner",
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
      },
      {
        title: "Travis Howard",
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
      },
      {
        title: "Ali Connors",
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      },
      {
        title: "Cindy Baker",
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
      },
    ],
  }),
};
</script>