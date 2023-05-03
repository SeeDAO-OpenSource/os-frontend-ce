<script setup lang="ts"></script>


<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Outlined -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      The
      <span class="font-weight-bold">outlined</span>
      prop inverts the style of an alert, inheriting the currently applied
      <span class="font-weight-bold">color</span>, applying it to the text and
      border, and making its background transparent.
    </p>
    <div class="mt-4">
      <v-alert class="mb-3" color="success" variant="outlined">
        <template v-slot:title> Outlined Alert </template>

        Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi.
      </v-alert>

      <v-alert class="mb-3" color="error" variant="outlined">
        Praesent venenatis metus at tortor pulvinar varius.
      </v-alert>

      <v-alert variant="outlined" type="warning" prominent border="top">
        Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis.
      </v-alert>
    </div>
  </div>
</template>
