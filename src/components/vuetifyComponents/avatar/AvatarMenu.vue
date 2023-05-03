<script setup lang="ts">
import { ref } from "vue";
const user = ref({
  initials: "JD",
  fullName: "John Doe",
  email: "john.doe@doe.com",
});
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Menu -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <div class="mt-6 text-center">
      <v-menu bottom min-width="200px" rounded offset-y>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-avatar color="info" size="large">
              <span class="text-white text-h5">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <div class="mx-auto text-center">
              <v-avatar color="info">
                <span class="text-white text-h5">{{ user.initials }}</span>
              </v-avatar>
              <h3>{{ user.fullName }}</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn color="info" rounded variant="text"> Edit Account </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn color="info" rounded variant="text"> Disconnect </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
    </div>
  </div>
</template>

