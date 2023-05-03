<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Rounded -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      The rounded prop will add or remove border-radius to the alert. Similar to
      other styled props, rounded can be combined with other props like density,
      prominent, and variant to create a unique and customized component.
    </p>
    <div class="mt-4">
      <v-alert rounded="0" type="info" title="Info">
        I'm an alert with no rounded borders. Lorem ipsum dolor sit.
      </v-alert>

      <br />

      <v-alert rounded="xl" variant="outlined" title="Success" type="success">
        I'm an alert with no rounded borders. Lorem ipsum dolor sit.
      </v-alert>

      <br />

      <v-alert title="Warning" rounded="pill" type="warning" prominent>
        I'm an alert with no rounded borders. Lorem ipsum dolor sit.
      </v-alert>

      <br />

      <v-alert title="Error" prominent rounded="t-xl b-lg" type="error">
        I'm an alert with no rounded borders. Lorem ipsum dolor sit.
      </v-alert>
    </div>
  </div>
</template>
