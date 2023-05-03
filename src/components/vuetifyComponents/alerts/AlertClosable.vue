<script setup lang="ts">
import { ref } from "vue";

const alert = ref(true);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Closable -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      The closable prop adds a close button to the end of the alert component.
      Clicking this button will set its value to false and effectively hide the
      alert
    </p>
    <div class="mt-4">
      <v-alert
        v-model="alert"
        border="start"
        variant="tonal"
        closable
        close-label="Close Alert"
        color="secondary"
        title="Closable Alert"
      >
        Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut neque.
      </v-alert>

      <div v-if="!alert" class="text-center">
        <v-btn
        color="primary"
        @click="alert = true"
      >
        Reset
      </v-btn>
      </div>
    </div>
  </div>
</template>
