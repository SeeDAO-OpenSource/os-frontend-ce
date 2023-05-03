<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- FileInputs Custom Icon -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      The <code>v-file-input</code> has a default prepended icon that can be set
      on the component or adjusted globally. More information on changing global
      components can be found on the customizing icons page.
    </p>
    <div class="mt-4">
      <v-file-input
        label="File input"
        filled
        prepend-icon="mdi-camera"
      ></v-file-input>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
