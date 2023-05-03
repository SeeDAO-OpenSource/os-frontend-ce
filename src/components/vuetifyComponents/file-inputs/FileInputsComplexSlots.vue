<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- FileInputs Complex Slots -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      The flexibility of the selection slot allows you accomodate complex
      use-cases. In this example we show the first 2 selections as chips while
      adding a number indicator for the remaining amount.
    </p>
    <div class="mt-4">
      <v-file-input
        v-model="files"
        color="secondary"
        counter
        label="File input"
        multiple
        placeholder="Select your files"
        prepend-icon="mdi-paperclip"
        variant="outlined"
        :show-size="1000"
      >
        <template v-slot:selection="{ fileNames }">
          <template v-for="(fileName, index) in fileNames" :key="fileName">
            <v-chip
              v-if="index < 2"
              color="secondary"
              label
              size="small"
              class="mr-2"
            >
              {{ fileName }}
            </v-chip>

            <span
              v-else-if="index === 2"
              class="text-overline text-secondary mx-2"
            >
              +{{ files.length - 2 }} File(s)
            </span>
          </template>
        </template>
      </v-file-input>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const files = ref([]);
</script>
