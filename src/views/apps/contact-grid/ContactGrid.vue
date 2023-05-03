<template>
  <v-card class="mb-7">
    <v-card-text class="pa-5">
      <v-row justify="space-between">
        <v-col cols="12" lg="4">
          <v-text-field
            v-model="search"
            prepend-inner-icon="mdi-magnify"
            label="Search Contacts"
            variant="outlined"
            size="compact"
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="4" class="justify-end align-center d-flex">
          <v-dialog v-model="dialog" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
              <v-btn color="secondary" v-bind="props">New Contact</v-btn>
            </template>
            <v-card>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-card-title class="pa-4 bg-secondary">
                  <span class="title text-white">New Contact</span>
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="12" sm="6" lg="6">
                      <v-text-field
                        label="Full name"
                        :rules="fnameRules"
                        v-model="contactname"
                        variant="outlined"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" lg="6">
                      <v-text-field
                        type="tel"
                        label="Contact no"
                        :rules="contactRules"
                        :counter="10"
                        v-model="phone"
                        variant="outlined"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" lg="6">
                      <v-text-field
                        label="Role"
                        :rules="roleRules"
                        v-model="role"
                        variant="outlined"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" lg="6">
                      <v-text-field
                        type="number"
                        label="Twitter Followers"
                        v-model="twitterfollowers"
                        :rules="tfRules"
                        :counter="5"
                        variant="outlined"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" lg="6">
                      <v-text-field
                        type="number"
                        label="Instagram Followers"
                        v-model="instafollowers"
                        :rules="ifRules"
                        :counter="5"
                        variant="outlined"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" lg="6">
                      <v-text-field
                        type="number"
                        label="Facebook Followers"
                        v-model="fbfollowers"
                        :rules="fbRules"
                        :counter="5"
                        variant="outlined"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        label="Address"
                        rows="3"
                        :rules="addressRules"
                        :counter="300"
                        v-model="address"
                        variant="outlined"
                        required
                      ></v-textarea>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-actions class="pa-4 pt-0">
                  <v-spacer></v-spacer>
                  <v-btn color="error" @click="dialog = false">Close</v-btn>
                  <v-btn
                    color="success"
                    :disabled="address == ''"
                    @click="addContact"
                    variant="flat"
                    >Save</v-btn
                  >
                </v-card-actions>
              </v-form>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>

  <v-row justify="center">
    <v-col
      cols="12"
      sm="6"
      lg="4"
      v-for="(contactgrid, index) in contactgrids"
      :key="index"
    >
      <v-card>
        <v-card-text class="pa-5 text-center">
          <div class="d-flex justify-center">
            <v-avatar size="90">
              <v-img
                :src="'/assets/images/users' + contactgrid.img"
                alt="user"
                class="rounded-circle"
              ></v-img>
            </v-avatar>
          </div>
          <h4 class="title h4 mt-3 mb-0">{{ contactgrid.contactname }}</h4>
          <small class="">{{ contactgrid.role }}</small>
          <div class="mt-3">
            <v-btn depressed small color="primary" class="mr-2">Chat</v-btn>
            <v-btn depressed small color="secondary">Follow</v-btn>
          </div>
          <div class="mt-3 pt-3">
            <address class="subtitle-2">
              {{ contactgrid.address }}
            </address>
          </div>
        </v-card-text>

        <div
          class="
            pa-3
            blue
            lighten-4
            text-center
            d-flex
            align-center
            justify-center
          "
        >
          <vue-feather class="mr-2" type="phone"></vue-feather>
          {{ contactgrid.phone }}
        </div>
        <v-card-text class="px-4 py-3">
          <v-row>
            <v-col cols="4" class="text-left">
              <v-chip class="ma-2" close color="info" label text-color="white">
                <v-icon start icon="mdi-twitter" class="mr-2"></v-icon>
                {{ contactgrid.twitterfollowers }}
              </v-chip>
            </v-col>
            <v-col cols="4" class="text-center">
              <v-chip class="ma-2" close color="error" label text-color="white">
                <v-icon start icon="mdi-instagram" class="mr-2"></v-icon>
                {{ contactgrid.instafollowers }}
              </v-chip>
            </v-col>
            <v-col cols="4" class="text-right">
              <v-chip class="ma-2" close color="blue" label text-color="white">
                <v-icon start icon="mdi-facebook" class="mr-2"></v-icon>
                {{ contactgrid.fbfollowers }}
              </v-chip>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
const valid = ref(true);
const dialog = ref(false);
const search = ref("");
const contactname = ref("");
const phone = ref("");
const role = ref("");
const img = ref("/1.jpg");
const address = ref("");
const twitterfollowers = ref("");
const instafollowers = ref("");
const fbfollowers = ref("");
const fnameRules = ref([(v: any) => !!v || "Name is required"]);
const addressRules = ref([
  (v: any) => !!v || "Address is required",
  (v: string | any[]) =>
    (v && v.length <= 300) || "Address must be less than 10 characters",
]);
const ifRules = ref([
  (v: any) => !!v || "Please fill this field",
  (v: string | any[]) =>
    (v && v.length <= 5) || "This must be less than 5 characters",
]);
const tfRules = ref([
  (v: any) => !!v || "Please fill this field",
  (v: string | any[]) =>
    (v && v.length <= 5) || "This must be less than 10 characters",
]);
const fbRules = ref([
  (v: any) => !!v || "Please fill this field",
  (v: string | any[]) =>
    (v && v.length <= 5) || "This must be less than 10 characters",
]);
const roleRules = ref([(v: any) => !!v || "Role is required"]);
const contactRules = ref([
  (v: any) => !!v || "Contact is required",
  (v: string | any[]) => (v && v.length == 10) || "Contact must be 10 digits",
]);
const contactfilter = ref([
  {
    phone: "(123) 456 789",
    img: "/1.jpg",
    contactname: "Hanna Gover",
    role: "Designer",
    address: " 2289 5th Ave, Suite 600 San Francisco New York ",
    instafollowers: "12",
    twitterfollowers: "20",
    fbfollowers: "21",
  },
  {
    phone: "(234) 456 789",
    img: "/2.jpg",
    contactname: "Daniel Kristeen",
    role: "Developer",
    address: " 55 E 11th St #1OTH, Suite 600 New York ",
    instafollowers: "12",
    twitterfollowers: "20",
    fbfollowers: "21",
  },
  {
    phone: "(345) 456 789",
    img: "/3.jpg",
    contactname: "Julian Josephs",
    role: "Accountant",
    address: " 36 W 138th St, San Francisco New York, NY, 10037 ",
    instafollowers: "12",
    twitterfollowers: "20",
    fbfollowers: "21",
  },
  {
    phone: "(456) 456 789",
    img: "/4.jpg",
    contactname: "Jan Petrovic",
    role: "Designer",
    address: " 2289 5th Ave, Suite 600 San Francisco New York ",
    instafollowers: "12",
    twitterfollowers: "20",
    fbfollowers: "21",
  },
  {
    phone: "(567) 456 789",
    img: "/5.jpg",
    contactname: "Leanne Graham",
    role: "HR",
    address: " 425 5th Ave, San Francisco New York, NY, 10016 ",
    instafollowers: "12",
    twitterfollowers: "20",
    fbfollowers: "21",
  },
  {
    phone: "(678) 456 789",
    img: "/6.jpg",
    contactname: "Mrs. Dennis Schulist",
    role: "Designer",
    address: " 17 Stuyvesant Walk, Suite 600 New York, NY, 10009 ",
    instafollowers: "12",
    twitterfollowers: "20",
    fbfollowers: "21",
  },
  {
    phone: "(123) 456 789",
    img: "/1.jpg",
    contactname: "Kurtis Weissnat",
    role: "Manager",
    address: " 2289 5th Ave, Suite 600 San Francisco New York ",
    instafollowers: "12",
    twitterfollowers: "20",
    fbfollowers: "21",
  },
  {
    phone: "(234) 456 789",
    img: "/2.jpg",
    contactname: "Nicholas Runolfsdottir V",
    role: "Chairman",
    address: " 425 5th Ave, San Francisco New York, NY, 10016 ",
    instafollowers: "12",
    twitterfollowers: "20",
    fbfollowers: "21",
  },
  {
    phone: "(345) 456 789",
    img: "/3.jpg",
    contactname: "Glenna Reichert",
    role: "Designer",
    address: " 2289 5th Ave, Suite 600 San Francisco New York",
    instafollowers: "12",
    twitterfollowers: "20",
    fbfollowers: "21",
  },
  {
    phone: "(456) 456 789",
    img: "/4.jpg",
    contactname: "Clementina DuBuque",
    role: "Developer",
    address: " 55 E 11th St #1OTH, Suite 600 New York, NY, 10003 ",
    instafollowers: "12",
    twitterfollowers: "20",
    fbfollowers: "21",
  },
]);
const form = ref();

//methods
function addContact() {
  form.value.validate();
  if (form.value.validate(true)) {
    const contact = {
      contactname: contactname.value,
      phone: phone.value,
      role: role.value,
      img: img.value,
      address: address.value,
      twitterfollowers: twitterfollowers.value,
      instafollowers: instafollowers.value,
      fbfollowers: fbfollowers.value,
    };
    contactfilter.value.unshift(contact);
    phone.value = "";
    contactname.value = "";
    role.value = "";
    img.value = "";
    address.value = "";
    twitterfollowers.value = "";
    instafollowers.value = "";
    fbfollowers.value = "";
  }
}

// Computed

const validName = computed(() => {
  return contactname.value.length > 0;
});
const contactgrids = computed(() => {
  return contactfilter.value.filter(
    (contactgrid) =>
      contactgrid.contactname
        .toLowerCase()
        .includes(search.value.toLowerCase()) ||
      contactgrid.role.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>
