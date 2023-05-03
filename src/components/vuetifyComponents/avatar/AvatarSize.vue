<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Size -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      The <code>size</code> prop allows you to define the height and width of
      <code>v-avatar</code>. This prop scales both evenly with an aspect ratio
      of 1. <code>height</code> and <code>width</code> props will override this
      prop.
    </p>
    <div class="mt-6">
      <v-row justify="space-around">
        <v-avatar color="primary" size="x-small"> 32 </v-avatar>

        <v-avatar color="secondary"> 48 </v-avatar>

        <v-avatar color="success" size="x-large"> 64 </v-avatar>
      </v-row>
    </div>
  </div>
</template>
