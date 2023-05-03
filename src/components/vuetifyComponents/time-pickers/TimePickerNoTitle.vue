<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- TimePickerNoTitle -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        You can remove picker's title.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-row
            justify="space-around"
        >
            <v-time-picker
            v-model="picker"
            no-title
            ></v-time-picker>
            <v-time-picker
            v-model="picker"
            :landscape="$vuetify.breakpoint.smAndUp"
            no-title
            ></v-time-picker>
        </v-row>
        </div>
    </div>
</template>

<script>
export default {
  name: "TimePickerNoTitle",

  data: () => ({
      picker: null,
  })
};
</script>