<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Slots -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      The icon slot allows you to to explicitly control the content and
      functionality within it.
    </p>
    <div class="mt-6">
      <v-banner lines="one" color="secondary" icon="mdi-account-box">

        <v-banner-text>
          Banner with two lines of text. If the text is too long to fit on two
          lines then an ellipsis will be used to hide the remaining content. So
          this next line will be hidden.
        </v-banner-text>

        <v-banner-actions>
          <v-btn color="secondary">Action Button</v-btn>
        </v-banner-actions>
      </v-banner>
    </div>
  </div>
</template>
