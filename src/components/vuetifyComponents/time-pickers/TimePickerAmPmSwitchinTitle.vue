<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- TimePickerAmPmSwitchinTitle -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        You can move AM/PM switch to picker's title.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-row
                justify="space-around"
                align="center"
            >
                <v-time-picker
                v-model="picker"
                ampm-in-title
                ></v-time-picker>
                <v-time-picker
                v-model="picker"
                :landscape="$vuetify.breakpoint.smAndUp"
                ampm-in-title
                ></v-time-picker>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
  name: "TimePickerAmPmSwitchinTitle",

  data: () => ({
       picker: null,
  })
};
</script>