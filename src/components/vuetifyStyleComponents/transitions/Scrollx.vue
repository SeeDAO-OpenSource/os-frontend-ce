<script setup lang="ts">
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Scrollx -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1 mb-6">
    Scroll X transitions continue along the horizontal axis.
  </p>
  <v-row
    justify="center"
  >
    <v-menu transition="scroll-x-transition">
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          class="ma-2"
          v-bind="props"
        >
          Scroll X Transition
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="n in 5"
          :key="n"
          link
        >
          <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <div class="mx-4 hidden-sm-and-down"></div>

    <v-menu transition="scroll-x-reverse-transition">
      <template v-slot:activator="{ props }">
        <v-btn
          color="secondary"
          class="ma-2"
          v-bind="props"
        >
          Scroll X Reverse Transition
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="n in 5"
          :key="n"
          link
        >
          <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-row>
</template>
