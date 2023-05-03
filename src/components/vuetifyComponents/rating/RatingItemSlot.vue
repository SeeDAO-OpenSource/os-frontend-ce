<script setup lang="ts">
import { ref } from "vue";

const colors = ref(["green", "purple", "orange", "indigo", "red"]);
const rating = ref(4.5);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Item Slot -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    Slots enable advanced customization possibilities and provide you with more
    freedom in how you display the rating.
  </p>
  <div class="mt-6">
    <v-rating v-model="rating">
      <template v-slot:item="props">
        <v-icon
          :color="props.isFilled ? colors[props.index] : 'grey-lighten-1'"
          large
        >
          {{ props.isFilled ? "mdi-star-circle" : "mdi-star-circle-outline" }}
        </v-icon>
      </template>
    </v-rating>
  </div>
</template>
