<script setup lang="ts">
import { ref, computed } from "vue";

const bpm = ref(40);
const interval = ref(null);
const isPlaying = ref(false);

//Computed Property
const color = computed(() => {
  if (bpm.value < 100) return "indigo";
  if (bpm.value < 125) return "teal";
  if (bpm.value < 140) return "green";
  if (bpm.value < 175) return "orange";
  return "red";
});

const animationDuration = computed(() => {
  return `${60 / bpm.value}s`;
});

// methods
function decrement() {
  bpm.value--;
}
function increment() {
  bpm.value++;
}
function toggle() {
  isPlaying.value = !isPlaying.value;
}
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- SlidersSlots -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      Use slots such as <code>prepend</code> and <code>append</code> to easily
      customize the <code>v-slider</code> to fit any situation.
    </p>
    <v-card class="mt-4" max-width="600">
      <v-toolbar flat dense>
        <v-toolbar-title>
          <span class="text-subheading">METRONOME</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn variant="text" icon="mdi-share-variant"></v-btn>
      </v-toolbar>

      <v-row class="mb-4 mt-4" justify="space-between">
        <v-col class="text-left">
          <span class="text-h2 font-weight-light" v-text="bpm"></span>
          <span class="subheading font-weight-light mr-1">BPM</span>
          <v-fade-transition>
            <v-avatar
              v-if="isPlaying"
              :color="color"
              :style="{
                animationDuration: animationDuration,
              }"
              class="mb-1 v-avatar--metronome"
              size="12"
            ></v-avatar>
          </v-fade-transition>
        </v-col>
        <v-col class="text-right">
          <v-btn :color="color" theme="dark" icon elevation="0" @click="toggle">
            <v-icon
              size="large"
              :icon="isPlaying ? 'mdi-pause' : 'mdi-play'"
            ></v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <v-slider
        v-model="bpm"
        :color="color"
        track-color="grey"
        min="40"
        max="218"
        :step="1"
      >
        <template v-slot:prepend>
          <v-btn
            size="small"
            variant="text"
            icon="mdi-minus"
            :color="color"
            @click="decrement"
          ></v-btn>
        </template>

        <template v-slot:append>
          <v-btn
            size="small"
            variant="text"
            icon="mdi-plus"
            :color="color"
            @click="increment"
          ></v-btn>
        </template>
      </v-slider>
    </v-card>
  </div>
</template>

<style>
@keyframes metronome-example {
  from {
    transform: scale(0.5);
  }

  to {
    transform: scale(1);
  }
}

.v-avatar--metronome {
  animation-name: metronome-example;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
</style>
