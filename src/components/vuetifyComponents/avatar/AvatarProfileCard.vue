<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Profile Card -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      Using the <span class="font-weight-bold">tile</span> prop, we can create a
      sleek hard-lined profile card.
    </p>
    <div class="mt-4">
       <v-card
    class="mx-auto"
    max-width="434"
    tile
  >
    <v-img
      height="100%"
      cover
      src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
    >
      <v-avatar
        color="grey"
        size="150"
        rounded="0"
      >
        <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
      </v-avatar>
      <v-list-item
        class="text-white"
        title="Marcus Obrien"
        subtitle="Network Engineer"
      ></v-list-item>
    </v-img>
  </v-card>
    </div>
  </div>
</template>
