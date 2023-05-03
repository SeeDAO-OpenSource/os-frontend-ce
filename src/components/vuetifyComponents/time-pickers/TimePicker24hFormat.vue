<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- TimePicker24hFormat -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        A time picker can be switched to 24hr format. Note that the <code>format</code> prop defines only the way the picker is displayed, picker's value (model) is always in 24hr format.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-row justify="space-around">
                <v-col class="lg-offset8" md="12" lg="4">
                <v-time-picker v-model="e7" format="24hr"></v-time-picker>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
  name: "TimePicker24hFormat",

  data: () => ({
      e7: null,
  })
};
</script>