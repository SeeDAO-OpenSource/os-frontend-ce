<template>
  <main>
    <button @click="counter.decrement()">-</button>
    {{ counter.counter }}
    <button @click="counter.increment()">+</button> =>
    <button>2x = {{ counter.doubleCount }}</button>

    <v-row align="center" justify="space-around">
      <v-btn color="primary"> Primary </v-btn>
      <v-btn color="secondary"> secondary </v-btn>
      <v-btn color="error"> Error </v-btn>
      <v-btn disabled> Disabled </v-btn>
    </v-row>
  </main>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
const counter = useCounterStore();
</script>
