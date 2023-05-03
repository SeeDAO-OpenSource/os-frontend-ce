<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- TimePickerScrollable -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        You can edit time picker's value using mouse wheel.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-row justify="space-around" align="center">
                <v-time-picker v-model="picker" scrollable></v-time-picker>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
  name: "TimePickerScrollable",

  data: () => ({
      picker: null,
  })
};
</script>