<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TextfieldPrefixesSuffixes -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      The <code>prefix</code> and <code>suffix</code> properties allows you to
      prepend and append inline non-modifiable text next to the text field.
    </p>
    <div class="mt-4">
      <v-row>
        <v-col cols="4">
          <v-list-subheader>Prefix for dollar currency</v-list-subheader>
        </v-col>

        <v-col cols="8">
          <v-text-field
            label="Amount"
            model-value="10.00"
            prefix="$"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4">
          <v-list-subheader>Suffix for weight</v-list-subheader>
        </v-col>

        <v-col cols="8">
          <v-text-field
            label="Weight"
            model-value="28.00"
            suffix="lbs"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4">
          <v-list-subheader>Suffix for email domain</v-list-subheader>
        </v-col>

        <v-col cols="8">
          <v-text-field
            label="Email address"
            model-value="example"
            suffix="@gmail.com"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4">
          <v-list-subheader>Suffix for time zone</v-list-subheader>
        </v-col>

        <v-col cols="8">
          <v-text-field
            label="Label Text"
            model-value="12:30:00"
            type="time"
            suffix="PST"
          ></v-text-field>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
