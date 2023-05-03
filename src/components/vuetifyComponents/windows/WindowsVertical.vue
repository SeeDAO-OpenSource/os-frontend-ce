<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- WindowsVertical -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
           <code>v-window</code> can be vertical. Vertical windows have Y axis transition instead of X axis transition.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-window v-model="onboarding" vertical>
                <v-window-item
                    v-for="n in length"
                    :key="`card-${n}`"
                >
                    <v-card
                    color="grey"
                    height="200"
                    >
                    <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                        tag="v-card-text"
                    >
                        <h1 style="font-size: 5rem;" class="white--text">Slide {{ n }}</h1>
                    </v-row>
                    </v-card>
                </v-window-item>
                </v-window>

                <v-card-actions class="justify-space-between">
                <v-btn
                    text
                    @click="prev"
                >
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-item-group
                    v-model="onboarding"
                    class="text-center"
                    mandatory
                >
                    <v-item
                    v-for="n in length"
                    :key="`btn-${n}`"
                    v-slot:default="{ active, toggle }"
                    >
                    <v-btn
                        :input-value="active"
                        icon
                        @click="toggle"
                    >
                        <v-icon>mdi-record</v-icon>
                    </v-btn>
                    </v-item>
                </v-item-group>
                <v-btn
                    text
                    @click="next"
                >
                    <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
                </v-card-actions>
        </div>
    </div>
</template>

<script>
export default {
  name: "WindowsVertical",

  data: () => ({
      length: 3,
      onboarding: 0,
  }),
   methods: {
      next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
      },
    },
};
</script>