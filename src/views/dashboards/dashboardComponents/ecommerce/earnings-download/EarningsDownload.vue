<script setup lang="ts"></script>

<template>
  <v-card class="overflow-hidden">
    <v-img
      src="@/assets/images/background/welcome-bg-2x-svg.svg"
      class="bg-img-2"
    />
    <v-card-text>
      <div class="d-flex justify-space-between">
        <div>
          <h4 class="text-body-1 text-grey-darken-1 font-weight-medium">
            Earnings
          </h4>
          <h3 class="text-h5 title font-weight-medium">$63,438.39</h3>
        </div>
        <v-btn color="primary" class="btn-custom-sm" icon>
          <vue-feather type="dollar-sign"></vue-feather>
        </v-btn>
      </div>
      <v-btn color="secondary" class="mt-8"> Download </v-btn>
    </v-card-text>
  </v-card>
</template>
