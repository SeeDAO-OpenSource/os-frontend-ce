<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- FileInputs Size -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      The displayed size of the selected file(s) can be configured with the
      <span class="grey--text text--darken-4 font-weight-bold">show-size</span>
      property. Display sizes can be either 1024 (the default used when
      providing true) or 1000.
    </p>
    <div class="mt-4">
      <v-file-input show-size label="File input"></v-file-input>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
