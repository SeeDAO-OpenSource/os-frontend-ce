<script setup lang="ts">
</script>


<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Icon -->
  <!-- ----------------------------------------------------------------------------- -->
  <div class="d-flex flex-wrap gap-2">
    <v-chip color="primary" text-color="white" prepend-icon="mdi-account-circle">
      Mike
    </v-chip>

    <v-chip color="secondary" text-color="white" append-icon="mdi-star">
      Premium
    </v-chip>

    <v-chip color="warning" text-color="white" append-icon="mdi-cake-variant">
      1 Year
    </v-chip>

    <v-chip color="success" text-color="white" prepend->
      <template v-slot:prepend>
        <v-avatar class="green-darken-4"> 1 </v-avatar>
      </template>
      Years
    </v-chip>

    <v-chip
      closable
      color="error"
      text-color="white"
      prepend-icon="mdi-checkbox-marked-circle"
      :model-value="true"
    >
      Confirmed
    </v-chip>

    <v-chip
      closable
      color="teal"
      text-color="white"
      close-icon="mdi-delete"
      prepend-icon="mdi-checkbox-marked-circle"
      :model-value="true"
    >
      Confirmed
    </v-chip>
  </div>
</template>
