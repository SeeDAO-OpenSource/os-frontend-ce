<script setup lang="ts">
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Selected -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    The selected-class prop allows you to designate a CSS class applied to selected items.
  </p>
  <v-item-group selected-class="bg-primary" class="mt-6">
    <v-container>
      <v-row>
        <v-col
          v-for="n in 3"
          :key="n"
          cols="12"
          md="4"
        >
          <v-item v-slot="{ isSelected, selectedClass, toggle }">
            <v-card
              :class="['d-flex align-center', selectedClass]"
              dark
              height="90"
              @click="toggle"
            >
              <div
                class="text-h6 flex-grow-1 text-center"
              >
                {{ isSelected ? 'Selected' : 'Click Me!' }}
              </div>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

