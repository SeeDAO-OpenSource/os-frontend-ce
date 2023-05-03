<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- TimePickerSettingPickerWidth -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        You can specify allowed the picker's width or make it full width.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-row align="center">
                <v-time-picker
                v-model="time"
                type="month"
                width="290"
                class="ml-4"
                ></v-time-picker>
                <v-col class="pa-0 mx-4 mt-4 mt-sm-0">
                <v-time-picker
                    v-model="time"
                    :landscape="$vuetify.breakpoint.mdAndUp"
                    full-width
                    type="month"
                ></v-time-picker>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
  name: "TimePickerSettingPickerWidth",

  data: () => ({
      time: '11:15',
  })
};
</script>