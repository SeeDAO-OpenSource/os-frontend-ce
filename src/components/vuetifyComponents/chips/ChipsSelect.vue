<script setup lang="ts">
import { ref } from "vue";

const chips = ref([
  "Programming",
  "Playing video games",
  "Watching movies",
  "Sleeping",
]);
const items = ref(["Streaming", "Eating"]);

function remove(item: any) {
  chips.value.splice(chips.value.indexOf(item), 1);
  chips.value = [...chips.value];
}
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Select -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-combobox
    v-model="chips"
    :items="items"
    chips
    clearable
    label="Your favorite hobbies"
    multiple
    prepend-icon="mdi-filter-variant"
    solo
  >
    <template v-slot:activator="{ attrs, item, select, selected }">
      <v-chip
        v-bind="attrs"
        :input-value="selected"
        close
        @click="select"
        @click:close="remove(item)"
      >
        <strong>{{ item }}</strong
        >&nbsp;
        <span>(interest)</span>
      </v-chip>
    </template>
  </v-combobox>
</template>
