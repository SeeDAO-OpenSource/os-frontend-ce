<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Vertical Inset -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <v-list-item-subtitle class="text-wrap">
      Vertical dividers can also be paired with the <code>inset</code> prop for
      even more options.
    </v-list-item-subtitle>
    <div class="mt-4">
      <v-toolbar color="primary" dark>
        <v-toolbar-title>Title</v-toolbar-title>

        <v-divider class="mx-4" inset vertical></v-divider>

        <span class="subheading">My Home</span>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text> News </v-btn>

          <v-divider inset vertical></v-divider>

          <v-btn text> Blog </v-btn>

          <v-divider inset vertical></v-divider>

          <v-btn text> Music </v-btn>

          <v-divider inset vertical></v-divider>
        </v-toolbar-items>

        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </v-toolbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "DividerVerticalInset",

  data: () => ({}),
};
</script>