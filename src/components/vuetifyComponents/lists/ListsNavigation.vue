<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- ListsNavigation -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
           Lists can receive an alternative nav styling that reduces the width <code>v-list-item</code> takes up as well as adding a border radius.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-card
                class="mx-auto"
                width="256"
                tile
            >
                <v-navigation-drawer permanent>
                <v-system-bar></v-system-bar>
                <v-list>
                    <v-list-item>
                    <v-list-item-avatar>
                        <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                    </v-list-item-avatar>
                    </v-list-item>

                    <v-list-item link>
                    <v-list-item-content>
                        <v-list-item-title class="title">John Leider</v-list-item-title>
                        <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                        <v-icon>mdi-menu-down</v-icon>
                    </v-list-item-action>
                    </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list
                    nav
                    dense
                >
                    <v-list-item-group v-model="item" color="primary">
                    <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                    >
                        <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    </v-list-item-group>
                </v-list>
                </v-navigation-drawer>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
  name: "ListsNavigation",

  data: () => ({
      item: 0,
      items: [
        { text: 'My Files', icon: 'mdi-folder' },
        { text: 'Shared with me', icon: 'mdi-account-multiple' },
        { text: 'Starred', icon: 'mdi-star' },
        { text: 'Recent', icon: 'mdi-history' },
        { text: 'Offline', icon: 'mdi-check-circle' },
        { text: 'Uploads', icon: 'mdi-upload' },
        { text: 'Backups', icon: 'mdi-cloud-upload' },
      ],
  })
};
</script>