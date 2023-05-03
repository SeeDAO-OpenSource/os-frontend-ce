<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- ListsDisabled -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
           You cannot interact with disabled <code>v-list</code>.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-list disabled>
            <v-subheader>REPORTS</v-subheader>
            <v-list-item-group v-model="item" color="primary">
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
  name: "ListsDisabled",

  data: () => ({
      item: 1,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
  })
};
</script>