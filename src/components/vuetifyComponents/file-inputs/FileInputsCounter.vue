<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- FileInputs Counter -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      When using the
      <span class="font-weight-bold">show-size</span>
      property along with
      <span class="font-weight-bold">counter</span>, the total number of files
      and size will be displayed under the input.
    </p>
    <div class="mt-4">
      <v-file-input
        show-size
        counter
        multiple
        label="File input"
      ></v-file-input>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
