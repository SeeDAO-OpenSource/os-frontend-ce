<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- ListsExpansion -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <v-list-item-subtitle class="text-wrap">
      A list can contain a group of items which will display on click. Expansion
      lists are also used within the v-navigation-drawer component.
    </v-list-item-subtitle>
    <div class="mt-4">
      <v-toolbar color="primary" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Topics</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>

      <v-list>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="subItem in item.items"
            :key="subItem.title"
            @click.stop
          >
            <v-list-item-content>
              <v-list-item-title v-text="subItem.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListsExpansion",

  data: () => ({
    items: [
      {
        action: "mdi-pharmacy",
        title: "Attractions",
        items: [{ title: "List Item" }],
      },
      {
        action: "mdi-gift",
        title: "Dining",
        active: true,
        items: [
          { title: "Breakfast & brunch" },
          { title: "New American" },
          { title: "Sushi" },
        ],
      },
      {
        action: "mdi-library-books",
        title: "Education",
        items: [{ title: "List Item" }],
      },
      {
        action: "mdi-account-multiple-outline",
        title: "Family",
        items: [{ title: "List Item" }],
      },
      {
        action: "mdi-hospital-building",
        title: "Health",
        items: [{ title: "List Item" }],
      },
      {
        action: "mdi-image-album",
        title: "Office",
        items: [{ title: "List Item" }],
      },
      {
        action: "mdi-image-filter-center-focus-weak",
        title: "Promotions",
        items: [{ title: "List Item" }],
      },
    ],
  }),
};
</script>