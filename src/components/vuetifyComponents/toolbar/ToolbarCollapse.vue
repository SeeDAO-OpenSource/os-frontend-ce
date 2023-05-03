<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Collapse -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      Toolbars can be collapsed to save screen space.
    </p>
    <div class="mt-6">
      <v-card color="grey lighten-1" flat height="111px" tile>
        <v-toolbar collapse>
          <v-btn icon color="inherit">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon color="inherit">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>
      </v-card>
    </div>
  </div>
</template>

