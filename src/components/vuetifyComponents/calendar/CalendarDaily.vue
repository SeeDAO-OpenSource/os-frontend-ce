<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Daily -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <v-list-item-subtitle class="text-wrap">
      This is an example of calendar with content in each interval slot and a
      type of <code>day</code>.
    </v-list-item-subtitle>
    <div class="mt-4">
      <v-sheet height="400">
        <v-calendar color="primary" type="day">
          <template v-slot:day-header="{ present }">
            <template v-if="present" class="text-center"> Today </template>
          </template>

          <template v-slot:interval="{ hour }">
            <div class="text-center">{{ hour }} o'clock</div>
          </template>
        </v-calendar>
      </v-sheet>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarDaily",

  data: () => ({}),
};
</script>