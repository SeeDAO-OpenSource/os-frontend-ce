<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Light Dark -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      Toolbars come in 2 variants, light and dark. Light toolbars have dark
      tinted buttons and dark text whereas dark toolbars have white tinted
      buttons and white text.
    </p>
    <div class="mt-6">
      <v-card flat>
        <v-container fluid>
          <v-row class="child-flex">
            <div>
              <v-toolbar>
                <v-btn icon color="inherit" class="hidden-xs-only">
                  <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-toolbar-title>Title</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon color="inherit" class="hidden-xs-only">
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-toolbar>
            </div>

            <div style="flex-basis: 10%">
              <v-toolbar dark>
                <v-spacer></v-spacer>

                <v-btn icon color="inherit">
                  <v-icon>mdi-reply</v-icon>
                </v-btn>

                <v-btn icon color="inherit">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </v-toolbar>
            </div>
          </v-row>
        </v-container>
      </v-card>
    </div>
  </div>
</template>

