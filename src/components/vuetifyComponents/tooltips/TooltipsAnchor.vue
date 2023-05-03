<script setup lang="ts">
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Anchor -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    Use the anchor prop to specify on which side of the element the tooltip
    should show.
  </p>
  <div class="d-flex align-center flex-wrap gap-2 mt-4">
    <v-btn color="primary">
      Start
      <v-tooltip activator="parent" location="start">Tooltip</v-tooltip>
    </v-btn>

    <v-btn color="secondary">
      End
      <v-tooltip activator="parent" location="end">Tooltip</v-tooltip>
    </v-btn>

    <v-btn color="warning">
      Top
      <v-tooltip activator="parent" location="top">Tooltip</v-tooltip>
    </v-btn>

    <v-btn color="error">
      Bottom
      <v-tooltip activator="parent" location="bottom">Tooltip</v-tooltip>
    </v-btn>
  </div>
</template>

