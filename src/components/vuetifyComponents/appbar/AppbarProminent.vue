<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Prominent -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      An v-app-bar with the prominent prop can opt to have its height shrunk as
      the user scrolls down. This provides a smooth transition to taking up less
      visual space when the user is scrolling through content. Shrink height has
      2 possible options, dense (48px) and short (56px) sizes.
    </p>
    <div class="mt-6">
      <v-card max-width="448" class="mx-auto">
        <v-layout>
          <v-app-bar color="secondary" density="prominent">
            <template v-slot:prepend>
              <v-app-bar-nav-icon color="inherit"></v-app-bar-nav-icon>
            </template>

            <v-toolbar-title>My Recent Trips</v-toolbar-title>

            <template v-slot:append>
              <v-btn icon color="inherit">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
          </v-app-bar>

          <v-main>
            <v-container fluid>
              <v-card
                class="mb-2"
                density="compact"
                prepend-avatar="https://randomuser.me/api/portraits/women/10.jpg"
                subtitle="Salsa, merengue, y cumbia"
                title="Cuba"
                variant="text"
              >
                <v-img
                  src="https://picsum.photos/512/128?image=660"
                  height="128"
                  cover
                ></v-img>

                <v-card-text>
                  During my last trip to South America, I spent 2 weeks
                  traveling through Patagonia in Chile.
                </v-card-text>

                <template v-slot:actions>
                  <v-btn color="primary" variant="flat">View More</v-btn>

                  <v-btn color="primary" variant="flat">See in Map</v-btn>
                </template>
              </v-card>

              <v-card
                border
                density="comfortable"
                prepend-avatar="https://randomuser.me/api/portraits/women/17.jpg"
                subtitle="Salsa, merengue, y cumbia"
                title="Florida"
                variant="text"
              >
                <v-img
                  src="https://picsum.photos/512/128?random"
                  height="128"
                  cover
                ></v-img>

                <v-card-text>
                  During my last trip to Florida, I spent 2 weeks traveling
                  through the Everglades.
                </v-card-text>

                <template v-slot:actions>
                  <v-btn color="primary" variant="flat">View More</v-btn>

                  <v-btn color="primary" variant="flat">See in Map</v-btn>
                </template>
              </v-card>
            </v-container>
          </v-main>
        </v-layout>
      </v-card>
    </div>
  </div>
</template>
