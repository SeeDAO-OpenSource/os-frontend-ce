<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Multiple Errors -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      You can add multiple errors to <code>v-input</code> using
      <code>error-count</code> property.
    </p>
    <div class="mt-4">
      <v-input
        error-count="2"
        :error-messages="['Fatal error', 'Another error']"
        error
        disabled
        >Input</v-input
      >
    </div>
  </div>
</template>

<script setup lang="ts"></script>
