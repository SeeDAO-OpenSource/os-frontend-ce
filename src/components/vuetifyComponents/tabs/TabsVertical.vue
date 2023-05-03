<script setup lang="ts">
import { ref } from "vue";

const tab = ref("option-1");
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Vertical -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      The vertical prop allows for v-tab components to stack vertically.
    </p>
    <div class="mt-6">
      <v-card>
        <v-toolbar color="primary">
          <v-toolbar-title>User Profile</v-toolbar-title>
        </v-toolbar>
        <div class="d-flex flex-row">
          <v-tabs v-model="tab" direction="vertical" color="primary">
            <v-tab value="option-1">
              <v-icon start> mdi-account </v-icon>
              Option 1
            </v-tab>
            <v-tab value="option-2">
              <v-icon start> mdi-lock </v-icon>
              Option 2
            </v-tab>
            <v-tab value="option-3">
              <v-icon start> mdi-access-point </v-icon>
              Option 3
            </v-tab>
          </v-tabs>
          <v-window v-model="tab">
            <v-window-item value="option-1">
              <v-card flat>
                <v-card-text>
                  <p class="text-subtitle-1 text-grey-darken-1">
                    Sed aliquam ultrices mauris. Donec posuere vulputate arcu.
                    Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
                  </p>
                </v-card-text>
              </v-card>
            </v-window-item>
            <v-window-item value="option-2">
              <v-card flat>
                <v-card-text>
                  <p class="text-subtitle-1 text-grey-darken-1">
                    Morbi nec metus. Suspendisse faucibus, nunc et pellentesque
                    egestas.
                  </p>
                </v-card-text>
              </v-card>
            </v-window-item>
            <v-window-item value="option-3">
              <v-card flat>
                <v-card-text>
                  <p class="text-subtitle-1 text-grey-darken-1">
                    Fusce a quam. Phasellus nec sem in justo pellentesque
                    facilisis.
                  </p>
                </v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
        </div>
      </v-card>
    </div>
  </div>
</template>

