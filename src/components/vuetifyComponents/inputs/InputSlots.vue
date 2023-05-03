<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Slots -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      <code>v-input</code> has <code>append</code> and
      <code>prepend</code> slots. You can place custom icons in them.
    </p>
    <div class="mt-4">
      <v-text-field>
        <template v-slot:append>
          <v-icon color="red"> mdi-plus </v-icon>
        </template>
        <template v-slot:prepend>
          <v-icon color="green"> mdi-minus </v-icon>
        </template>
      </v-text-field>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
