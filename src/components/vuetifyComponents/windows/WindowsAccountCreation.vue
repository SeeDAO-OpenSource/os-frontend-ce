<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- WindowsAccountCreation -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
           Create rich forms with smooth animations. <code>v-window</code> automatically tracks the current selection index to automatically change the transition direction. This can be manually controlled with the <code>reverse</code> prop.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-card
                class="mx-auto"
                max-width="500"
            >
                <v-card-title class="title font-weight-regular justify-space-between">
                <span>{{ currentTitle }}</span>
                <v-avatar
                    color="primary lighten-2"
                    class="subheading white--text"
                    size="24"
                    v-text="step"
                ></v-avatar>
                </v-card-title>

                <v-window v-model="step">
                <v-window-item :value="1">
                    <v-card-text>
                    <v-text-field
                        label="Email"
                        value="john@vuetifyjs.com"
                    ></v-text-field>
                    <span class="caption grey--text text--darken-1">
                        This is the email you will use to login to your Vuetify account
                    </span>
                    </v-card-text>
                </v-window-item>

                <v-window-item :value="2">
                    <v-card-text>
                    <v-text-field
                        label="Password"
                        type="password"
                    ></v-text-field>
                    <v-text-field
                        label="Confirm Password"
                        type="password"
                    ></v-text-field>
                    <span class="caption grey--text text--darken-1">
                        Please enter a password for your account
                    </span>
                    </v-card-text>
                </v-window-item>

                <v-window-item :value="3">
                    <div class="pa-4 text-center">
                    <v-img
                        class="mb-4"
                        contain
                        height="128"
                        src="https://cdn.vuetifyjs.com/images/logos/v.svg"
                    ></v-img>
                    <h3 class="title font-weight-light mb-2">Welcome to Vuetify</h3>
                    <span class="caption grey--text">Thanks for signing up!</span>
                    </div>
                </v-window-item>
                </v-window>

                <v-divider></v-divider>

                <v-card-actions>
                <v-btn
                    :disabled="step === 1"
                    text
                    @click="step--"
                >
                    Back
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    :disabled="step === 3"
                    color="primary"
                    depressed
                    @click="step++"
                >
                    Next
                </v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
  name: "WindowsAccountCreation",

  data: () => ({
      step: 1,
  }),
  computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Sign-up'
          case 2: return 'Create a password'
          default: return 'Account created'
        }
      },
    },
};
</script>