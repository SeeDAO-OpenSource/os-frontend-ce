<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Success -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      As any validatable Vuetify component, <code>v-input</code> can be set to
      success state using <code>success</code> prop, you can add message to it
      using <code>success-messages</code> prop.
    </p>
    <div class="mt-4">
      <v-input :success-messages="['Success']" success disabled>Input</v-input>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
