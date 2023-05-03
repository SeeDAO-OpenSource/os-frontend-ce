<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Icon -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      The
      <span class="font-weight-bold">icon</span> prop allows you to add an icon
      to the beginning of the alert component. If a
      <span class="font-weight-bold">type</span> is provided, this will override
      the default type icon. Additionally setting the
      <span class="font-weight-bold">icon</span> prop to false will remove the
      icon altogether.
    </p>
    <div class="mt-4">
      <v-alert color="primary" theme="dark" icon="mdi-vuetify" prominent>
        Praesent congue erat at massa. Nullam vel sem. Aliquam lorem ante,
        dapibus in.
      </v-alert>
    </div>
  </div>
</template>

