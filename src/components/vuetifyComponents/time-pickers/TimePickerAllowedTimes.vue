<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- TimePickerAllowedTimes -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        You can specify allowed times using arrays, objects, and functions. You can also specify time step/precision/interval - e.g. 10 minutes.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-row justify="space-around">
                <v-time-picker
                v-model="time"
                :allowed-hours="allowedHours"
                :allowed-minutes="allowedMinutes"
                class="mt-4"
                format="24hr"
                scrollable
                min="9:30"
                max="22:15"
                ></v-time-picker>
                <v-time-picker
                v-model="timeStep"
                :allowed-minutes="allowedStep"
                class="mt-4"
                format="24hr"
                ></v-time-picker>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
  name: "TimePickerAllowedTimes",

  data: () => ({
      time: '11:15',
        timeStep: '10:10',
  }),
  methods: {
      allowedHours: v => v % 2,
      allowedMinutes: v => v >= 10 && v <= 50,
      allowedStep: m => m % 10 === 0,
    },
};
</script>