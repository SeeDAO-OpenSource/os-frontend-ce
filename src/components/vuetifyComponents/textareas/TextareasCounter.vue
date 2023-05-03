<script setup lang="ts">
import { ref } from "vue";
const value = ref("Hello!");
const rules = ref([
  (v: string | any[]) => v.length <= 25 || "Max 25 characters",
]);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TextareasCounter -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      The <code>counter</code> prop informs the user of a character limit for
      the <code>v-textarea</code>.
    </p>
    <div class="mt-4">
      <v-textarea
        counter
      label="Text"
      :rules="rules"
      :model-value="value"
      ></v-textarea>
    </div>
  </div>
</template>
