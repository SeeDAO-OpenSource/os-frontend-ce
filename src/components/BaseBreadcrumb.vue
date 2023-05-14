<script setup lang="ts">
const props = defineProps({
  title: String,
  breadcrumbs: Array as any,
  icon: String,
})
</script>

<template>
  <v-row class="page-breadcrumb mb-4">
    <v-col cols="12" sm="12">
      <v-toolbar flat class="pa-0">
        <div>
          <h2 class="pa-0">{{ $t(`${title}`) }}</h2>
        </div>
        <slot></slot>
        <v-spacer></v-spacer>
      </v-toolbar>
    </v-col>
  </v-row>
</template>

<style lang="scss">
.page-breadcrumb {
  .v-toolbar {
    background: transparent;
  }
}
</style>
