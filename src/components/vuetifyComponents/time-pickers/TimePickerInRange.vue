<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- TimePickerInRange -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        This is an example of joining pickers together using <code>min</code> and <code>max</code> prop.
        </v-list-item-subtitle>
        <div class="mt-4">
            <h4>Plan your event:</h4>
            <v-row justify="space-around" align="center">
            <v-col style="width: 290px; flex: 0 1 auto;">
                <h2>Start:</h2>
                <v-time-picker v-model="start" :max="end"></v-time-picker>
            </v-col>
            <v-col style="width: 290px; flex: 0 1 auto;">
                <h2>End:</h2>
                <v-time-picker v-model="end" :min="start"></v-time-picker>
            </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
  name: "TimePickerInRange",

  data: () => ({
  })
};
</script>