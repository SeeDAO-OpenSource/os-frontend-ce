<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Prepand -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      The prepend slot allows you to to explicitly control the content and
      functionality within it. Icons also help to emphasize a banner’s message.
    </p>
    <div class="mt-6">
      <v-banner lines="two" color="secondary" icon="mdi-account-filter">
        <!-- <template v-slot:prepend>
          <v-avatar
            color="deep-purple-accent-4"
            
          ></v-avatar>
        </template> -->

        <v-banner-text>
          Banner with two lines of text. If the text is too long to fit on two
          lines then an ellipsis will be used to hide the remaining content. So
          this next line will be hidden.
        </v-banner-text>

        <v-banner-actions>
          <v-btn variant="text" color="secondary">Action</v-btn>

          <v-btn variant="text" color="secondary">Action</v-btn>
        </v-banner-actions>
      </v-banner>
    </div>
  </div>
</template>
