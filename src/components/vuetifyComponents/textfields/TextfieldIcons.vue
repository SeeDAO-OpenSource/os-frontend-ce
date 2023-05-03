<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TextfieldIcons -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      You can add icons to the text field with <code>prepend-icon</code>,
      <code>append-icon</code> and <code>append-outer-icon</code> props.
    </p>
    <div class="mt-4">
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Prepend"
                prepend-icon="mdi-map-marker"
              ></v-text-field>

              <v-text-field
                label="Prepend inner"
                prepend-inner-icon="mdi-map-marker"
              ></v-text-field>

              <v-text-field
                label="Append"
                append-icon="mdi-map-marker"
              ></v-text-field>

              <v-text-field
                label="Append inner"
                append-inner-icon="mdi-map-marker"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                label="Prepend"
                prepend-icon="mdi-map-marker"
                variant="solo"
              ></v-text-field>

              <v-text-field
                label="Prepend inner"
                prepend-inner-icon="mdi-map-marker"
                variant="solo"
              ></v-text-field>

              <v-text-field
                label="Append"
                append-icon="mdi-map-marker"
                variant="solo"
              ></v-text-field>

              <v-text-field
                label="Append inner"
                append-inner-icon="mdi-map-marker"
                variant="solo"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                label="Prepend"
                prepend-icon="mdi-map-marker"
                variant="outlined"
              ></v-text-field>

              <v-text-field
                label="Prepend inner"
                prepend-inner-icon="mdi-map-marker"
                variant="outlined"
              ></v-text-field>

              <v-text-field
                label="Append"
                append-icon="mdi-map-marker"
                variant="outlined"
              ></v-text-field>

              <v-text-field
                label="Append inner"
                append-inner-icon="mdi-map-marker"
                variant="outlined"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                variant="underlined"
                label="Prepend"
                prepend-icon="mdi-map-marker"
              ></v-text-field>

              <v-text-field
                variant="underlined"
                label="Prepend inner"
                prepend-inner-icon="mdi-map-marker"
              ></v-text-field>

              <v-text-field
                variant="underlined"
                label="Append"
                append-icon="mdi-map-marker"
              ></v-text-field>

              <v-text-field
                variant="underlined"
                label="Append inner"
                append-inner-icon="mdi-map-marker"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
  </div>
</template>
