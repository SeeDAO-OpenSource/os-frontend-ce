<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TextfieldDense -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      You can reduces the text field height with <code>dense</code> prop.
    </p>
    <div class="mt-4">
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                label="Regular"
                placeholder="Placeholder"
                density="compact"
                
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-text-field
                label="Solo"
                variant="solo"
                placeholder="Placeholder"
                density="compact"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-text-field
                label="Filled"
                placeholder="Placeholder"
                variant="filled"
                density="compact"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-text-field
                label="Outlined"
                placeholder="Placeholder"
                variant="outlined"
                density="compact"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-text-field
                label="Plain"
                placeholder="Placeholder"
                variant="plain"
                density="compact"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-text-field
                label="Underlined"
                placeholder="Placeholder"
                variant="underlined"
                density="compact"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
  </div>
</template>
