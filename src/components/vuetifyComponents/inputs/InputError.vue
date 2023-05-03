<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- error -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      As any validatable Vuetify component, <code>v-input</code> can be set to
      error state using <code>error</code> prop, messages can be added using
      <code>error-messages</code> prop. You can determine error messages count
      to show using <code>error-count</code> property.
    </p>
    <div class="mt-4">
      <v-input :error-messages="['Fatal error']" error disabled>Input</v-input>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
