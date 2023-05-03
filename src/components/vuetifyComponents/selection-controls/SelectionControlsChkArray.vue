<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- SelectionControlsChkArray -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <div>
      <div class="d-flex align-items-center">
        <div>
          <v-checkbox v-model="selected" label="John" value="John"></v-checkbox>
          <v-checkbox
            v-model="selected"
            label="Jacob"
            value="Jacob"
          ></v-checkbox>
        </div>

        <div class="ml-auto">
          <p>{{ selected }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
const selected = ref(["John"]);
</script>
