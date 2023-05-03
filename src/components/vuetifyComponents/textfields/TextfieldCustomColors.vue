<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TextfieldCustomColors -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      You can optionally change a text field into any color in the Material
      design palette. Below is an example implementation of a custom form with
      validation.
    </p>
    <div class="mt-4">
      <v-snackbar v-model="snackbar" absolute top right color="success">
        <span>Registration successful!</span>
        <v-icon dark>mdi-checkbox-marked-circle</v-icon>
      </v-snackbar>
      <v-form ref="form" @submit.prevent="submit">
        <v-container fluid>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="form.first"
                :rules="rules.name"
                color="purple darken-2"
                label="First name"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="form.last"
                :rules="rules.name"
                color="blue darken-2"
                label="Last name"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea v-model="form.bio" color="teal">
                <template v-slot:label>
                  <div>Bio <small>(optional)</small></div>
                </template>
              </v-textarea>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                v-model="form.favoriteAnimal"
                :items="animals"
                :rules="rules.animal"
                color="pink"
                label="Favorite animal"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-slider
                v-model="form.age"
                :rules="rules.age"
                color="orange"
                label="Age"
                hint="Be honest"
                min="1"
                max="100"
                thumb-label
              ></v-slider>
            </v-col>
            <v-col cols="12">
              <v-checkbox v-model="form.terms" color="green">
                <template v-slot:label>
                  <div @click.stop="">
                    Do you accept the
                    <a href="javascript:;" @click.stop="terms = true">terms</a>
                    and
                    <a href="javascript:;" @click.stop="conditions = true"
                      >conditions?</a
                    >
                  </div>
                </template>
              </v-checkbox>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn text @click="resetForm">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn :disabled="!formIsValid" text color="primary" type="submit"
            >Register</v-btn
          >
        </v-card-actions>
      </v-form>
      <v-dialog v-model="terms" width="70%">
        <v-card>
          <v-card-title class="title">Terms</v-card-title>
          <v-card-text v-for="n in 5" :key="n">
            {{ content }}
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="purple" @click="terms = false">Ok</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="conditions" width="70%">
        <v-card>
          <v-card-title class="title">Conditions</v-card-title>
          <v-card-text v-for="n in 5" :key="n">
            {{ content }}
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="purple" @click="conditions = false">Ok</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { ref } from "vue";
const defaultForm = Object.freeze({
  first: "",
  last: "",
  bio: "",
  favoriteAnimal: "",
  age: "",
  terms: false,
});

const form = ref(Object.assign({}, defaultForm));
const rules = ref({
  age: [(val: number) => val < 10 || `I don't believe you!`],
  animal: [(val: any) => (val || "").length > 0 || "This field is required"],
  name: [(val: any) => (val || "").length > 0 || "This field is required"],
});
const animals = ref(["Dog", "Cat", "Rabbit", "Turtle", "Snake"]);
const conditions = ref(false);
const content = ref(
  `Lorem sum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.`
);
const snackbar = ref(false);
const terms = ref(false);

const formIsValid = computed(() => {
  return (
    form.value.first &&
    form.value.last &&
    form.value.favoriteAnimal &&
    form.value.terms
  );
});
function resetForm() {
  form.value = Object.assign({}, defaultForm);
}
function submit() {
  snackbar.value = true;
  resetForm();
}
</script>
