<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Dense -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      You can use <code>dense</code> prop to reduce combobox height and lower
      max height of list items.
    </p>
    <v-card>
    
      <v-row>
        <v-col cols="12">
          <v-combobox
            v-model="values"
            :items="items"
            label="Default"
          ></v-combobox>
        </v-col>
        <v-col cols="12">
          <v-combobox
            v-model="values"
            :items="items"
            density="comfortable"
            label="Comfortable"
          ></v-combobox>
        </v-col>
        <v-col cols="12">
          <v-combobox
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-combobox>
        </v-col>
      </v-row>
 
  </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const values = ref('foo');
const items = ref(["Programming", "Design", "Vue", "Vuetify"]);
</script>
