<script setup lang="ts">
import { ref } from "vue";

const dialog = ref(false);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Activator -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">In addition using the activator slot, we can instead use the activator prop to activate a dialog. By placing the dialog component inside the button, and setting the activator prop value to “parent” we can designate the parent (button) as the activator.</p>
  <div class="text-center">
    <v-btn color="primary">
      Open Dialog

      <v-dialog v-model="dialog" activator="parent">
        <v-card>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false"
              >Close Dialog</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-btn>
  </div>
</template>
