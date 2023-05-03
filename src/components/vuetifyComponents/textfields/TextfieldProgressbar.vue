<script setup lang="ts">
import { ref, computed } from "vue";

const value = ref(1);
const custom = ref(true);

//Computed Property
const progress = computed(() => {
  return Math.min(100, value.value * 10);
});

const color = computed(() => {
  return ["error", "warning", "success"][Math.floor(progress.value / 40)];
});
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TextfieldProgressbar -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      You can display a progress bar instead of the bottom line. You can use the
      default indeterminate progress having same color as the text field or
      designate a custom one using the <code>progress</code> slot
    </p>
    <div class="mt-4">
      <v-checkbox-btn
      v-model="custom"
      label="Loading"
    ></v-checkbox-btn>

    <v-text-field
      v-model="value"
      label="Type characters to change the loader color"
      loading
      placeholder="Start typing..."
    >
      <template v-slot:loader>
        <v-progress-linear
          :active="custom"
          :model-value="progress"
          :color="color"
          absolute
          height="7"
          indeterminate
        ></v-progress-linear>
      </template>
    </v-text-field>
    </div>
  </div>
</template>
