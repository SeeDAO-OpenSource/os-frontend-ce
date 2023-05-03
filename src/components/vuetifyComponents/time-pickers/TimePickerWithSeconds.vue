<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- TimePickerWithSeconds -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        Time picker can have seconds input.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-row
                justify="space-around"
                align="center"
            >
                <v-time-picker
                v-model="picker"
                use-seconds
                ></v-time-picker>
                <v-time-picker
                v-model="picker"
                :landscape="$vuetify.breakpoint.smAndUp"
                use-seconds
                ></v-time-picker>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
  name: "TimePickerWithSeconds",

  data: () => ({
      picker: null,
  })
};
</script>