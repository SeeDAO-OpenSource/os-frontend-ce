<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Rounded -->
  <!-- ----------------------------------------------------------------------------- -->
  <div class="d-flex flex-wrap gap-2">
      
      <div>
        <v-btn color="primary">Normal Button</v-btn>
      </div>
      <div>
        <v-btn color="secondary" rounded="lg">Rounded Button</v-btn>
      </div>
      <div>
        <v-btn color="error" :rounded="0">Tile Button</v-btn>
      </div>
      <div>
        <v-btn color="warning" rounded="pill">Pill Button</v-btn>
      </div>
  </div>
</template>
