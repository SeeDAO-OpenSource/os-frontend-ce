<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- TimePickerDisabled -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        You can't interact with disabled picker.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-row
                justify="space-around"
                align="center"
            >
                <v-time-picker
                v-model="picker"
                disabled
                ></v-time-picker>
                <v-time-picker
                v-model="picker"
                :landscape="$vuetify.breakpoint.smAndUp"
                disabled
                ></v-time-picker>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
  name: "TimePickerDisabled",

  data: () => ({
      picker: null
  })
};
</script>