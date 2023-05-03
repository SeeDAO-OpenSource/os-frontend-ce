<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- GrpListItemDeemphasizedSelections -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
           You can easily disable the default highlighting of selected <code>v-list-item</code>s. This creates a lower profile for a user's choices.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-list flat>
                <v-list-item-group v-model="model" color="info">
                    <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    >
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
                </v-list>
        </div>
    </div>
</template>

<script>
export default {
  name: "GrpListItemDeemphasizedSelections",

  data: () => ({
    items: [
        {
          icon: 'mdi-wifi',
          text: 'Wifi',
        },
        {
          icon: 'mdi-bluetooth',
          text: 'Bluetooth',
        },
        {
          icon: 'mdi-chart-donut',
          text: 'Data Usage',
        },
      ],
      model: 1,
  })
};
</script>