<script setup lang="ts"></script>
<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TextareasAutoGrow -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      When using the <code>auto-grow</code> prop, textarea's will automatically
      increase in size when the contained text exceeds its size.
    </p>
    <div class="mt-4">
     <v-textarea
      name="input-7-1"
      variant="filled"
      label="Label"
      auto-grow
      model-value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
    ></v-textarea>
    </div>
  </div>
</template>
