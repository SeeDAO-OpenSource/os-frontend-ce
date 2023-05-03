<script setup lang="ts">
</script>

<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- TextfieldLabelSlots -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <p class="text-subtitle-1 text-grey-darken-1">
           Text field label can be defined in <code>label</code> slot - that will allow to use HTML content
        </p>
        <div class="mt-4">
            <v-form>
                <v-container>
                <v-text-field>
                    <template v-slot:label>
                    What about <strong>icon</strong> here? <v-icon style="vertical-align: middle">mdi-file-find</v-icon>
                    </template>
                </v-text-field>
                </v-container>
            </v-form>
        </div>
    </div>
</template>
