<script setup lang="ts">
import { ref, computed } from "vue";

const password = ref("Password");
const show = ref(false);
const message = ref("Hey!");
const marker = ref(true);
const iconIndex = ref(0);
const icons = ref([
  "mdi-emoticon",
  "mdi-emoticon-cool",
  "mdi-emoticon-dead",
  "mdi-emoticon-excited",
  "mdi-emoticon-happy",
  "mdi-emoticon-neutral",
  "mdi-emoticon-sad",
  "mdi-emoticon-tongue",
]);

// methods
function toggleMarker() {
  marker.value = !marker.value;
}
function sendMessage() {
  resetIcon();
  clearMessage();
}
function clearMessage() {
  message.value = "";
}
function resetIcon() {
  iconIndex.value = 0;
}
function changeIcon() {
  iconIndex.value === icons.value.length - 1
    ? (iconIndex.value = 0)
    : iconIndex.value++;
}

//Computed Property
const icon = computed(() => {
  return icons.value[iconIndex.value];
});
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TextfieldIconEvents -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      <code>click:prepend</code>, <code>click:append</code>,
      <code>click:append-outer</code>, and <code>click:clear</code> will be
      emitted when you click on the respective icon. Note that these events will
      not be fired if the slot is used instead.
    </p>
    <div class="mt-4">
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="message"
                :append-icon="marker ? 'mdi-map-marker' : 'mdi-map-marker-off'"
                :append-outer-icon="message ? 'mdi-send' : 'mdi-microphone'"
                :prepend-icon="icon"
                filled
                clear-icon="mdi-close-circle"
                clearable
                label="Message"
                type="text"
                @click:append="toggleMarker"
                @click:append-outer="sendMessage"
                @click:prepend="changeIcon"
                @click:clear="clearMessage"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
  </div>
</template>