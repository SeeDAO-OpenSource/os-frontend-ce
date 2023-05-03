<script setup lang="ts"></script>

<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- SlidersDisabled -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <p class="text-subtitle-1 text-grey-darken-1">
           You cannot interact with <code>disabled</code> sliders.
        </p>
        <div class="mt-4">
            <v-slider
            disabled
            label="Disabled"
            value="30"
            ></v-slider>
        </div>
    </div>
</template>
