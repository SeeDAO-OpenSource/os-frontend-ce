<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- FileInputs Accept Formats -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      <code>v-file-input</code> component can accept only specific media
      formats/file types if you want. For more information, checkout the
      documentation on the accept attribute.
    </p>
    <div class="mt-4">
      <v-file-input accept="image/*" label="File input"></v-file-input>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
