<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- GrpListItemSelectionControls -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
           Using the default slot, you can access an items internal state and toggle it. Since the active property is a boolean, we use the true-value prop on the checkbox to link its state to the <code>v-list-item</code>.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-list shaped>
                <v-list-item-group
                    v-model="model"
                    multiple
                >
                    <template v-for="(item, i) in items">
                    <v-divider
                        v-if="!item"
                        :key="`divider-${i}`"
                    ></v-divider>

                    <v-list-item
                        v-else
                        :key="`item-${i}`"
                        :value="item"
                        active-class="info--text text--accent-4"
                    >
                        <template v-slot:default="{ active, toggle }">
                        <v-list-item-content>
                            <v-list-item-title v-text="item"></v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-checkbox
                            :input-value="active"
                            :true-value="item"
                            color="info accent-4"
                            @click="toggle"
                            ></v-checkbox>
                        </v-list-item-action>
                        </template>
                    </v-list-item>
                    </template>
                </v-list-item-group>
                </v-list>
        </div>
    </div>
</template>

<script>
export default {
  name: "GrpListItemSelectionControls",

  data: () => ({
      items: [
        'Dog Photos',
        'Cat Photos',
        '',
        'Potatoes',
        'Carrots',
      ],
      model: ['Carrots'],
  })
};
</script>