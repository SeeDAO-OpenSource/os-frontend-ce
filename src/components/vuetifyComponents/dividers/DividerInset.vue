<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Inset -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      Inset dividers are moved 72px to the right. This will cause them to line
      up with list items
    </p>
    <div class="mt-6">
     <v-row>
    <v-col
      cols="12">
      <v-card>
        <v-list lines="two">
          <v-list-subheader>Today</v-list-subheader>

          <v-list-item
            prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg"
            title="Brunch this weekend?"
          >
            <template v-slot:subtitle>
              <span class="font-weight-bold">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?
            </template>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item
            prepend-avatar="https://cdn.vuetifyjs.com/images/lists/2.jpg"
          >
            <template v-slot:title>
              Summer BBQ <span class="text-grey-lighten-1">4</span>
            </template>
            <template v-slot:subtitle>
              <span class="font-weight-bold">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.
            </template>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item
            prepend-avatar="https://cdn.vuetifyjs.com/images/lists/3.jpg"
            title="Oui oui"
          >
            <template v-slot:subtitle>
              <span class="font-weight-bold">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?
            </template>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
    </div>
  </div>
</template>
