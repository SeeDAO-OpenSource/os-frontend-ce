<script setup lang="ts">
import { ref } from "vue";

const seasons = ref(["Winter", "Spring", "Summer", "Fall"]);
const icons = ref(["mdi-snowflake", "mdi-leaf", "mdi-fire", "mdi-water"]);

function season(val:any) {
  return icons.value[val];
}
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- SlidersCustomRange -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      Using the <code>tick-labels</code> prop along with slots, you can create a
      very customized solution.
    </p>
    <div class="mt-4">
      <v-range-slider
        :tick-labels="seasons"
        :value="[0, 1]"
        min="0"
        max="3"
        ticks="always"
        tick-size="4"
      >
        <template v-slot:thumb-label="props">
          <v-icon dark>
            {{ season(props.value) }}
          </v-icon>
        </template>
      </v-range-slider>
    </div>
  </div>
</template>
