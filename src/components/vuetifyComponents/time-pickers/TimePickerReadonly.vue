<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- TimePickerReadonly -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        Read-only picker behaves same as disabled one, but looks like default one.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-row
                justify="space-around"
                align="center"
            >
                <v-time-picker
                v-model="picker"
                readonly
                ></v-time-picker>
                <v-time-picker
                v-model="picker"
                :landscape="$vuetify.breakpoint.smAndUp"
                readonly
                ></v-time-picker>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
  name: "TimePickerReadonly",

  data: () => ({
      picker: null,
  })
};
</script>