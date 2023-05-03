<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Content -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      For simple text, use the content property to display a value on the badge.
    </p>
    <div class="mt-6">
      <v-toolbar color="blue-grey-darken-3">
        <v-spacer></v-spacer>

        <v-btn color="inherit" stacked>
          <v-badge dot color="success">
            <v-icon>mdi-home-outline</v-icon>
          </v-badge>
        </v-btn>

        <v-btn color="inherit" stacked>
          <v-icon>mdi-account-multiple-outline</v-icon>
        </v-btn>

        <v-btn color="inherit" stacked>
          <v-badge content="9+" color="error">
            <v-icon>mdi-store-outline</v-icon>
          </v-badge>
        </v-btn>

        <v-btn color="inherit" stacked>
          <v-badge content="2" color="error">
            <v-icon>mdi-bell-outline</v-icon>
          </v-badge>
        </v-btn>

        <v-btn color="inherit" stacked>
          <v-icon>mdi-menu</v-icon>
        </v-btn>

        <v-spacer></v-spacer>
      </v-toolbar>
    </div>
  </div>
</template>

