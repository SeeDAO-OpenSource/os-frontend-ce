<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- TimePickerColors -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        Time picker colors can be set using the <code>color</code> and <code>header-color</code> props. If <code>header-color</code> prop is not provided header will use the <code>color</code> prop value.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-row justify="space-around">
                <v-time-picker v-model="e4" color="success"></v-time-picker>
                <v-time-picker v-model="e4" color="success" header-color="primary"></v-time-picker>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
  name: "TimePickerColors",

  data: () => ({
      e4: null,
  })
};
</script>