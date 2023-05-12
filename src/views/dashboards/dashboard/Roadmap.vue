<script setup lang="ts">
import { ref } from "vue"

const messages = ref([
    {
        time: "10:42am",
        realse: "deep-purple lighten-1",
        color: "deep-purple lighten-1",
    },
])
</script>

<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- Content Wrap -->
    <!-- ----------------------------------------------------------------------------- -->

        <v-card>

            <v-card-text>
                <v-btn color="secondary" class="mt-5">{{ $t("Welcome-Call-To-Action") }}</v-btn>
                <div class="font-weight-bold ml-1 mb-2">
                    
                    <br/>{{ $t("Roadmap") }}
                    
                </div>

                <v-timeline density="compact" align="start">
                    <v-timeline-item v-for="message in messages" :key="message.time" :dot-color="message.color"
                        size="x-small">
                        <div class="mb-4">
                            <div class="font-weight-normal">
                            </div>
                        </div>
                    </v-timeline-item>
                </v-timeline>
            </v-card-text>
        </v-card>
</template>
