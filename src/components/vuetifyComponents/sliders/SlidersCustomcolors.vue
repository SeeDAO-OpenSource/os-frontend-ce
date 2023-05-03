<script setup lang="ts">
import {ref} from "vue";

 const ex1 = ref({ label: 'color', val: 25, color: 'orange darken-3' });
 const ex2 = ref({ label: 'track-color', val: 75, color: 'green lighten-1' });
 const ex3 = ref({ label: 'thumb-color', val: 50, color: 'red' });
</script>


<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- SlidersCustomcolors -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <p class="text-subtitle-1 text-grey-darken-1">
           You can set the colors of the slider using the props <code>color</code>, <code>track-color</code> and <code>thumb-color</code>.
        </p>
        <div class="mt-4">
            <v-slider
            v-model="ex1.val"
            :color="ex1.color"
            :label="ex1.label"
            ></v-slider>

            <v-slider
            v-model="ex2.val"
            :label="ex2.label"
            :track-color="ex2.color"
            ></v-slider>

            <v-slider
            v-model="ex3.val"
            :label="ex3.label"
            :thumb-color="ex3.color"
            thumb-label="always"
            ></v-slider>
        </div>
    </div>
</template>
