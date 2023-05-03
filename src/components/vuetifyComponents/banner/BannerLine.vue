<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Line -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      The prop lines can be used to specify how the displayed text should be
      handled based on its length.
    </p>
    <div class="mt-6">
      <v-banner
        lines="one"
        icon="mdi-lock"
        color="primary"
        class="my-3"
      >
        <v-banner-text> Banner with one line of text. </v-banner-text>

        <template v-slot:actions>
          <v-btn>Action</v-btn>
        </template>
      </v-banner>

      <v-banner
        lines="two"
        icon="mdi-weather-hurricane"
        color="secondary"
        class="my-3"
      >
        <v-banner-text>
          Banner with two lines of text. If the text is too long to fit on two
          lines then an ellipsis will be used to hide the remaining content. So
          this next line will be hidden.
        </v-banner-text>

        <template v-slot:actions>
          <v-btn color="secondary">Action</v-btn>
        </template>
      </v-banner>

      <v-banner lines="three" icon="$warning" color="warning" class="my-3">
        <v-banner-text>
          Banner with three lines of text. One or two lines is preferable. Three
          lines should be considered the absolute maximum length on desktop in
          order to keep messages short and actionable.
        </v-banner-text>

        <template v-slot:actions>
          <v-btn color="warning">Action</v-btn>
        </template>
      </v-banner>
    </div>
  </div>
</template>
