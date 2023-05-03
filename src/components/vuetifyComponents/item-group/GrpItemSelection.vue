<script setup lang="ts">
import { ref } from "vue";

const items = ref([
  {
    src: "backgrounds/bg.jpg",
  },
  {
    src: "backgrounds/md.jpg",
  },
]);

const selection = ref([]);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- selection -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-card>
    <v-container class="pa-1">
      <v-item-group v-model="selection" multiple>
        <v-row>
          <v-col v-for="(item, i) in items" :key="i" cols="12" md="6">
            <v-item v-slot="{ isSelected, toggle }">
              <v-img
                :src="`https://cdn.vuetifyjs.com/images/${item.src}`"
                height="150"
                class="text-right pa-2"
                @click="toggle"
              >
                <v-btn
                  :icon="isSelected ? 'mdi-heart' : 'mdi-heart-outline'"
                ></v-btn>
              </v-img>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
    </v-container>
  </v-card>
</template>

