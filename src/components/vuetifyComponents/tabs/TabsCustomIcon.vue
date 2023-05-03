<script setup lang="ts">
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Custom Icon -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      prev-icon and next-icon can be used for applying custom pagination icons.
    </p>
    <div class="mt-6">
      <v-sheet elevation="6">
        <v-tabs
          background-color="secondary"
          next-icon="mdi-arrow-right-bold-box-outline"
          prev-icon="mdi-arrow-left-bold-box-outline"
          show-arrows class="d-flex align-center"
        >
          <v-tab v-for="i in 30" :key="i"> Item {{ i }} </v-tab>
        </v-tabs>
      </v-sheet>
    </div>
  </div>
</template>

