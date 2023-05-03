<script setup lang="ts">
import { ref } from "vue";

const reveal = ref(false);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Reveal -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-card>
    <v-card-text>
      <div>Word of the Day</div>
      <p class="text-h4 text--primary">el·ee·mos·y·nar·y</p>
      <p>adjective</p>
      <div class="text--primary">
        relating to or dependent on charity; charitable.<br />
        "an eleemosynary educational institution."
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn variant="text" color="teal-accent-4" @click="reveal = true">
        Learn More
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%"
      >
        <v-card-text>
          <p class="text-h4 text--primary">Origin</p>
          <p>
            late 16th century (as a noun denoting a place where alms were
            distributed): from medieval Latin eleemosynarius, from late Latin
            eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn variant="text" color="teal-accent-4" @click="reveal = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>