<script setup lang="ts">
import { ref } from "vue";

const selection = ref([]);
const items = ref(["Foo", "Bar", "Fizz", "Buzz"]);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Contextual -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      It is possible to update the appearance of a toolbar in response to
      changes in app state. In this example, the color and content of the
      toolbar changes in response to user selections in the v-select.
    </p>
    <div class="mt-6">
      <v-card max-width="500" class="mx-auto">
        <v-toolbar
          :color="selection.length ? 'grey darken-4' : 'secondary'"
          dark
        >
          <v-app-bar-nav-icon v-if="!selection.length" color="inherit"></v-app-bar-nav-icon>
          <v-btn v-else icon color="inherit" @click="selection = []">
            <v-icon>mdi-close</v-icon>
          </v-btn>

          <v-toolbar-title>
            {{ selection.length ? `${selection.length} selected` : "Photos" }}
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-scale-transition>
            <v-btn color="inherit" v-if="selection.length" key="export" icon>
              <v-icon>mdi-export-variant</v-icon>
            </v-btn>
          </v-scale-transition>
          <v-scale-transition>
            <v-btn color="inherit" v-if="selection.length" key="delete" icon>
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-scale-transition>

          <v-btn color="inherit" icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>

        <v-card-text>
          <v-select
            v-model="selection"
            :items="items"
            multiple
            label="Select an option"
            hide-details
          ></v-select>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

