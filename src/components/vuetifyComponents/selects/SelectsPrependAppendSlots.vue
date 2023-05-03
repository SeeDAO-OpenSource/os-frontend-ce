<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- error -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      The <code>v-select</code> components can be optionally expanded with
      prepended and appended items. This is perfect for customized select-all
      functionality.
    </p>
    <div class="mt-4">
      <v-select
        v-model="selectedFruits"
        :items="fruits"
        label="Favorite Fruits"
        multiple
      >
        <template v-slot:prepend-item>
          <v-list-item ripple @click="toggle">
            <v-list-item-action>
              <v-icon
                :color="selectedFruits.length > 0 ? 'indigo darken-4' : ''"
                >{{ icon }}</v-icon
              >
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Select All</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="mt-2"></v-divider>
        </template>
        <template v-slot:append-item>
          <v-divider class="mb-2"></v-divider>
          <v-list-item disabled>
            <v-list-item-avatar color="grey lighten-3">
              <v-icon>mdi-food-apple</v-icon>
            </v-list-item-avatar>

            <v-list-item-content v-if="likesAllFruit">
              <v-list-item-title
                >Holy smokes, someone call the fruit police!</v-list-item-title
              >
            </v-list-item-content>

            <v-list-item-content v-else-if="likesSomeFruit">
              <v-list-item-title>Fruit Count</v-list-item-title>
              <v-list-item-subtitle>{{
                selectedFruits.length
              }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-content v-else>
              <v-list-item-title>
                How could you not like fruit?
              </v-list-item-title>
              <v-list-item-subtitle>
                Go ahead, make a selection above!
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-select>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
const fruits = ref([
  "Apples",
  "Apricots",
  "Avocado",
  "Bananas",
  "Blueberries",
  "Blackberries",
  "Boysenberries",
  "Bread fruit",
  "Cantaloupes (cantalope)",
  "Cherries",
  "Cranberries",
  "Cucumbers",
  "Currants",
  "Dates",
  "Eggplant",
  "Figs",
  "Grapes",
  "Grapefruit",
  "Guava",
  "Honeydew melons",
  "Huckleberries",
  "Kiwis",
  "Kumquat",
  "Lemons",
  "Limes",
  "Mangos",
  "Mulberries",
  "Muskmelon",
  "Nectarines",
  "Olives",
  "Oranges",
  "Papaya",
  "Peaches",
  "Pears",
  "Persimmon",
  "Pineapple",
  "Plums",
  "Pomegranate",
  "Raspberries",
  "Rose Apple",
  "Starfruit",
  "Strawberries",
  "Tangerines",
  "Tomatoes",
  "Watermelons",
  "Zucchini",
]);

const selectedFruits = ref();
const likesAllFruit = computed(() => {
  return selectedFruits.value.length === fruits.value.length;
});
const likesSomeFruit = computed(() => {
  return selectedFruits.value.length > 0 && !likesAllFruit.value;
});
const icon = computed(() => {
  if (likesAllFruit.value) return "mdi-close-box";
  if (likesSomeFruit.value) return "mdi-minus-box";
  return "mdi-checkbox";
});
function toggle() {
  setTimeout(() => {
    if (likesAllFruit.value) {
      selectedFruits.value = [];
    } else {
      selectedFruits.value = fruits.value.slice();
    }
  }, 0);
}
</script>
