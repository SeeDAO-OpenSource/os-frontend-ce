<script setup lang="ts">
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Multiple -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    Item groups can have multiple items selected.
  </p>
  <v-item-group multiple class="mt-6">
    <v-container>
      <v-row>
        <v-col v-for="n in 3" :key="n" cols="12" md="4">
          <v-item v-slot="{ isSelected, toggle }">
            <v-card
              :color="isSelected ? 'primary' : ''"
              class="d-flex align-center"
              dark
              height="90"
              @click="toggle"
            >
              <v-scroll-y-transition>
                <div class="text-h6 flex-grow-1 text-center">
                  {{ isSelected ? "Selected" : "Click Me!" }}
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

