<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TextfieldDisabledReadonly -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      Text fields can be <code>disabled</code> or <code>readonly</code>.
    </p>
    <div class="mt-4">
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                model-value="John Doe"
                label="Regular"
                disabled
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                model-value="John Doe"
                label="Regular"
                readonly
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                model-value="John Doe"
                label="Solo"
                variant="solo"
                disabled
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                model-value="John Doe"
                label="Solo"
                variant="solo"
                readonly
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                model-value="John Doe"
                label="Outlined"
                variant="outlined"
                disabled
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                model-value="John Doe"
                label="Outlined"
                variant="outlined"
                readonly
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                model-value="John Doe"
                label="underlined"
                variant="underlined"
                disabled
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                model-value="John Doe"
                label="underlined"
                variant="underlined"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
  </div>
</template>
