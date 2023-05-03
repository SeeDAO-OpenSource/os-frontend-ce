<script setup lang="ts">
</script>

<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- TextfieldSingleline -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <p class="text-subtitle-1 text-grey-darken-1">
           Single line text fields do not float their label on focus or with data.
        </p>
        <div class="mt-4">
           <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <v-text-field
            label="Regular"
            placeholder="Placeholder"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <v-text-field
            label="Solo"
            variant="solo"
            placeholder="Placeholder"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <v-text-field
            label="Filled"
            placeholder="Placeholder"
            variant="filled"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <v-text-field
            label="Outlined"
            placeholder="Placeholder"
            variant="outlined"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <v-text-field
            label="Plain"
            placeholder="Placeholder"
            variant="plain"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <v-text-field
            label="Underlined"
            placeholder="Placeholder"
            variant="underlined"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
        </div>
    </div>
</template>
