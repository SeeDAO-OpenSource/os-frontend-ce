<script setup lang="ts">
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Disabled -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    Pagination items can be manually deactivated using the disabled prop.
  </p>
  <div class="text-center mt-6">
    <v-pagination :length="3" disabled></v-pagination>
  </div>
</template>

