<script setup lang="ts">
import { ref } from "vue";

const dialog = ref(false);
const dialog2 = ref(false);
const dialog3 = ref(false);
const notifications = ref(false);
const sound = ref(true);
const widgets = ref(false);
const items = ref([
  {
    title: "Click Me",
  },
  {
    title: "Click Me",
  },
  {
    title: "Click Me",
  },
  {
    title: "Click Me 2",
  },
]);
const select = ref([
  { text: "State 1" },
  { text: "State 2" },
  { text: "State 3" },
  { text: "State 4" },
  { text: "State 5" },
  { text: "State 6" },
  { text: "State 7" },
]);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Nested -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    Dialogs can be nested: you can open one dialog from another.
  </p>
  <div class="text-center">
    <v-btn color="secondary" class="ma-2" @click="dialog = true">
      Open Dialog 1
    </v-btn>
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title> Dialog 1 </v-card-title>
        <v-card-text>
          <v-btn color="primary" class="ma-2" @click="dialog2 = true">
            Open Dialog 2
          </v-btn>
        </v-card-text>
        <v-card-actions>
          <v-btn color="error" text @click="dialog = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog2">
      <v-card>
        <v-card-title> Dialog 2 </v-card-title>
        <v-card-text>
          <v-btn color="secondary" @click="dialog3 = !dialog3">
            Open Dialog 3
          </v-btn>
        </v-card-text>
        <v-card-actions>
          <v-btn color="error" text @click="dialog2 = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog3">
      <v-card>
        <v-card-title>
          <span>Dialog 3</span>
        </v-card-title>
        <v-card-actions>
          <v-btn color="error" text @click="dialog3 = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
