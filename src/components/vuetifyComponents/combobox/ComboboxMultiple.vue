<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Multiple Options -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      Previously known as tags - user is allowed to enter more than 1 value
    </p>
    <div class="mt-4">
      <v-row>
      <v-col cols="12">
        <v-combobox
          v-model="select"
          :items="items"
          label="Select a favorite activity or create a new one"
          multiple
        ></v-combobox>
      </v-col>
      <v-col cols="12">
        <v-combobox
          v-model="select"
          :items="items"
          label="I use chips"
          multiple
          chips
        ></v-combobox>
      </v-col>
      <v-col cols="12">
        <v-combobox
          v-model="select"
          :items="items"
          label="I use a scoped slot"
          multiple
        >
          <template v-slot:selection="data">
            <v-chip
              :key="JSON.stringify(data.item)"
              v-bind="data.attrs"
              :model-value="data.selected"
              :disabled="data.disabled"
              size="small"
              @click:close="data.parent.selectItem(data.item)"
            >
              <template v-slot:prepend>
                <v-avatar
                  class="bg-accent text-uppercase"
                  start
                >{{ data.item.title.slice(0, 1) }}</v-avatar>
              </template>
              {{ data.item.title }}
            </v-chip>
          </template>
        </v-combobox>
      </v-col>
      <v-col cols="12">
        <v-combobox
          v-model="select"
          label="I'm readonly"
          chips
          multiple
          readonly
        ></v-combobox>
      </v-col>
    </v-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const select = ref(["Vuetify", "Programming"]);
const items = ref(["Programming", "Design", "Vue", "Vuetify"]);
</script>
