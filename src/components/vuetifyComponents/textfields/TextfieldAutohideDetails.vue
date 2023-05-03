<script setup lang="ts">
import { ref } from "vue";

const rules = ref([
  (value: string) => !!value || "Required.",
  (value: string) => (value && value.length >= 3) || "Min 3 characters",
]);
</script>


<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TextfieldAutohideDetails -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      When <code>hide-details</code> is set to <code>auto</code> messages will
      be rendered only if there's a message (hint, error message, counter value
      etc) to display.
    </p>
    <div class="mt-4">
      <div>
        <v-text-field
          label="Main input"
          :rules="rules"
          hide-details="auto"
        ></v-text-field>
        <v-text-field label="Another input"></v-text-field>
      </div>
    </div>
  </div>
</template>
