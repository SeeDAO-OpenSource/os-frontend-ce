<script setup lang="ts"></script>
<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TextareasBackgroundColor -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      The <code>background-color</code> and <code>color</code> props give you
      more control over styling <code>v-textarea</code>'s.
    </p>
    <div class="mt-4">
     <v-textarea
      bg-color="light-blue"
      color="black"
      label="Label"
    ></v-textarea>

    <v-textarea
      bg-color="grey-lighten-2"
      color="cyan"
      label="Label"
    ></v-textarea>

    <v-textarea
      bg-color="amber-lighten-4"
      color="orange orange-darken-4"
      label="Label"
    ></v-textarea>
    </div>
  </div>
</template>
