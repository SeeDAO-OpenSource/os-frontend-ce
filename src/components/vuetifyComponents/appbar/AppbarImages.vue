<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Images -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      v-app-bar can contain background images. You can set source via the src
      prop. If you need to customize the v-img properties, the app-bar provides
      you with an img slot.
    </p>
    <div class="mt-6">
      <v-card max-width="448" class="mx-auto" color="grey-lighten-3">
        <v-layout>
          <v-app-bar
            color="teal-darken-4"
            image="https://picsum.photos/1920/1080?random"
          >
            <template v-slot:image>
              <v-img
                gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
              ></v-img>
            </template>

            <template v-slot:prepend>
              <v-app-bar-nav-icon color="inherit"></v-app-bar-nav-icon>
            </template>

            <v-toolbar-title>Title</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon color="inherit">
              <v-icon >mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon color="inherit">
              <v-icon >mdi-heart</v-icon>
            </v-btn>

            <v-btn icon color="inherit">
              <v-icon >mdi-dots-vertical</v-icon>
            </v-btn>
          </v-app-bar>

          <v-main>
            <v-container fluid>
              <v-row dense>
                <v-col v-for="n in 4" :key="n" cols="12">
                  <v-card
                    :title="`Content ${n}`"
                    :subtitle="`Subtitle for Content ${n}`"
                    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.?"
                  ></v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-main>
        </v-layout>
      </v-card>
    </div>
  </div>
</template>
