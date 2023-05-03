<script setup lang="ts">
import { ref } from "vue";

const items = ref([
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me 2" },
]);
</script>

<template>
  <v-card class="w-100">
    <v-card-text>
      <div class="d-flex align-center mb-1">
        <h2 class="title text-h6 font-weight-medium">Daily Activities</h2>
        <v-spacer></v-spacer>
        <div class="ml-auto text-no-wrap">
          <v-menu bottom left>
            <template v-slot:activator="{ props }">
              <v-btn icon color="inherit" v-bind="props">
                <vue-feather type="more-horizontal" size="20"></vue-feather>
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
      <!-- timeline -->
      <v-timeline
        class="theme-timeline"
        density="compact"
        side="end"
        truncate-line="both"
      >
        <v-timeline-item class="mb-4" dot-color="success" fill-dot size="small">
          <div class="d-flex justify-space-between">
            <div class="h5 font-weight-medium">Meeting with John</div>
            <span class="text-grey-darken-1 h6 ml-auto text-no-wrap">04.05 AM</span>
          </div>
        </v-timeline-item>

        <v-timeline-item class="mb-4" dot-color="primary" fill-dot size="small">
          <div class="d-flex justify-space-between">
            <div class="h5 font-weight-medium">Payment received of $385.90</div>
            <span class="text-grey-darken-1 h6 ml-auto text-no-wrap">04.25 AM</span>
          </div>
        </v-timeline-item>

        <v-timeline-item
          class="mb-4"
          dot-color="secondary"
          fill-dot
          size="small"
        >
          <div class="d-flex justify-space-between">
            <div class="h5 font-weight-medium">Project Meeting</div>
            <span class="text-grey-darken-1 h6 ml-auto text-no-wrap">05.26 AM</span>
          </div>
        </v-timeline-item>

        <v-timeline-item class="mb-4" dot-color="warning" fill-dot size="small">
          <div class="d-flex justify-space-between">
            <div class="h5 font-weight-medium">New Sale recorded #ML-3467</div>
            <span class="text-grey-darken-1 h6 ml-auto text-no-wrap">05.12 AM</span>
          </div>
        </v-timeline-item>

        <v-timeline-item class="mb-4" dot-color="error" fill-dot size="small">
          <div class="d-flex justify-space-between">
            <div class="h5 font-weight-medium">Payment was made to Michael</div>
            <span class="text-grey-darken-1 h6 ml-auto text-no-wrap">06.23 AM</span>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>
