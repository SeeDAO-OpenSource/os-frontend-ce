<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TextfieldHintText -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      The <code>hint</code> property on text fields adds the provided string
      beneath the text field. Using <code>persistent-hint</code> keeps the hint
      visible when the text field is not focused. Hint prop is not supported in
      solo mode.
    </p>
    <div class="mt-4">
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Your product or service"
                model-value="Grocery delivery"
                hint="For example, flowers or used cars"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                label="Your landing page"
                hint="www.example.com/page"
                persistent-hint
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                label="Your product or service"
                model-value="Grocery delivery"
                hint="For example, flowers or used cars"
                variant="solo"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                label="Your landing page"
                hint="www.example.com/page"
                persistent-hint
                variant="solo"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                label="Your product or service"
                model-value="Grocery delivery"
                hint="For example, flowers or used cars"
                variant="outlined"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                label="Your landing page"
                hint="www.example.com/page"
                persistent-hint
                variant="outlined"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
  </div>
</template>
