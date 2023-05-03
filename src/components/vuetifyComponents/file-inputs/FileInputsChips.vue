<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- FileInputs Chips -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      TA selected file can be displayed as a chip. When using the
      <span class="grey--text text--darken-4 font-weight-bold">chips</span> and
      <span class="grey--text text--darken-4 font-weight-bold">multiple</span>
      props, each chip will be displayed (as opposed to the file count).
    </p>
    <div class="mt-4">
      <div>
        <v-file-input chips multiple label="File input w/ chips"></v-file-input>
        <v-file-input
          small-chips
          multiple
          label="File input w/ small chips"
        ></v-file-input>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
