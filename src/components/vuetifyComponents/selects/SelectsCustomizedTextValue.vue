<script setup lang="ts">
import { ref } from "vue";

const select = ref(["Florida", "FL"]);
const items = ref([
  "Florida",
  "FL",
  "Georgia",
  "GA",
  "Nebraska",
  "NE",
  "California",
  "CA",
  "New York",
  "NY",
]);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- error -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      You can specify the specific properties within your items array correspond
      to the text and value fields. By default, this is text and value. In this
      example we also use the <code>return-object</code> prop which will return
      the entire object of the selected item on selection.
    </p>
    <div class="mt-4">
      <v-row>
        <v-col cols="6">
          <v-subheader>Custom items</v-subheader>
        </v-col>

        <v-col cols="6">
          <v-select
            
            :items="items"
            item-text="state"
            item-value="abbr"
            label="Select"
            persistent-hint
            return-object
            single-line
          ></v-select>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
