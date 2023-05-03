<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- No data chips -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      In this example we utilize a custom no-data slot to provide context to the
      user when searching / creating items.
    </p>
    <div class="mt-4">
      <v-combobox
        v-model="model"
        :items="items"
        :search-input.sync="search"
        hide-selected
        hint="Maximum of 5 tags"
        label="Add some tags"
        multiple
        persistent-hint
        small-chips
      >
        <template v-slot:no-data>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                No results matching "<strong>{{ search }}</strong
                >". Press <kbd>enter</kbd> to create a new one
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-combobox>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const model = ref(["Vuetify"]);
const search = ref(null);
const items = ref(["Programming", "Design", "Vue", "Vuetify"]);
</script>
