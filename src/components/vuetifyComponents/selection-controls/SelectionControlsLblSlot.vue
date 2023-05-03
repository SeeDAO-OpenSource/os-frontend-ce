<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- SelectionControlsLblSlot -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      Selection controls' labels can be defined in <code>label</code> slot -
      that will allow to use HTML content
    </p>
    <div class="mt-4">
      <v-checkbox v-model="checkbox">
        <template v-slot:label>
          <div>
            I agree that
            <v-tooltip bottom>
              <template v-slot:activator="{ props }">
                <a
                  target="_blank"
                  href="http://vuetifyjs.com"
                  @click.stop
                  v-bind="props"
                >
                  Vuetify
                </a>
              </template>
              Opens in new window
            </v-tooltip>
            is awesome
          </div>
        </template>
      </v-checkbox>

      <v-radio-group v-model="radios">
        <template v-slot:label>
          <div>Your favourite <strong>search engine</strong></div>
        </template>
        <v-radio value="Google">
          <template v-slot:label>
            <div>
              Of course it's <strong class="success--text">Google</strong>
            </div>
          </template>
        </v-radio>
        <v-radio value="Duckduckgo">
          <template v-slot:label>
            <div>
              Definitely <strong class="primary--text">Duckduckgo</strong>
            </div>
          </template>
        </v-radio>
      </v-radio-group>

      <v-switch v-model="switchMe">
        <template v-slot:label>
          Turn on the progress:
          <v-progress-circular
            :indeterminate="switchMe"
            :value="0"
            size="24"
            class="ml-2"
          ></v-progress-circular>
        </template>
      </v-switch>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const checkbox = ref(false);
const switchMe = ref(false);
const radios = ref("Duckduckgo");
</script>
