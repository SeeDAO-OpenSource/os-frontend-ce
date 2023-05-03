<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Hint -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      <code>v-input</code> can have <code>hint</code> which can tell user how to
      use the input. <code>persistent-hint</code> prop makes the hint visible
      always if no messages are displayed.
    </p>
    <div class="mt-4">
      <v-row>
        <v-switch v-model="showMessages" label="Show messages"></v-switch>
        <v-input hint="I am hint" persistent-hint :messages="messages"
          >Input</v-input
        >
      </v-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const showMessages = ref(false);
const messages = computed(() => {
  return showMessages.value ? ["Message"] : undefined;
});
</script>
