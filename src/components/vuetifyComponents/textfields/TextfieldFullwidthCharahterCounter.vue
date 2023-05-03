<script setup lang="ts">
import { ref } from "vue";

const selected = ref(["Trevor Handsen"]);
const items = ref(["Trevor Handsen", "Alex Nelson"]);
const title = ref(
  "Hi,\nI just wanted to check in and see if you had any plans the upcoming weekend. We are thinking of heading up to Napa"
);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TextfieldFullwidthCharahterCounter -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      Full width text fields allow you to create boundless inputs. In this
      example, we use a <code>v-divider</code> to separate the fields.
    </p>
    <div class="mt-4">
      <v-form>
        <v-autocomplete
          v-model="selected"
          :items="['Trevor Handsen', 'Alex Nelson']"
          chips
          label="To"
          full-width
          hide-details
          hide-no-data
          hide-selected
          multiple
          single-line
        ></v-autocomplete>
        <v-divider></v-divider>
        <v-text-field
          label="Subject"
          value="Plans for the weekend"
          single-line
          full-width
          hide-details
        ></v-text-field>
        <v-divider></v-divider>
        <v-textarea
          v-model="title"
          label="Message"
          counter
          maxlength="120"
          full-width
          single-line
        ></v-textarea>
      </v-form>
    </div>
  </div>
</template>