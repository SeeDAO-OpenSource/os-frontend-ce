<script setup lang="ts">
import { ref, computed } from "vue";
import ContactData from "./ContactData";
const valid = ref(true);
const dialog = ref(false);
const search = ref("");
const rolesbg = ref([
  "teal lighten-3",
  "green lighten-3",
  "cyan lighten-3",
  "light-blue lighten-3",
  "deep-purple lighten-2",
]);
const desserts = ref(ContactData);
const editedIndex = ref(-1);
const editedItem = ref({
  id: "",
  avatar: "1.jpg",
  userinfo: "",
  usermail: "",
  phone: "",
  jdate: "",
  role: "",
  rolestatus: "",
});
const defaultItem = ref({
  id: "",
  avatar: "1.jpg",
  userinfo: "",
  usermail: "",
  phone: "",
  jdate: "",
  role: "",
  rolestatus: "",
});
//OnMounted

//Methods
const filteredList = computed(() => {
  return desserts.value.filter((user: any) => {
    return user.userinfo.toLowerCase().includes(search.value.toLowerCase());
  });
});

function editItem(item: any) {
  editedIndex.value = desserts.value.indexOf(item);
  editedItem.value = Object.assign({}, item);
  dialog.value = true;
}
function deleteItem(item: any) {
  const index = desserts.value.indexOf(item);
  confirm("Are you sure you want to delete this item?") &&
    desserts.value.splice(index, 1);
}

function close() {
  dialog.value = false;
  setTimeout(() => {
    editedItem.value = Object.assign({}, defaultItem.value);
    editedIndex.value = -1;
  }, 300);
}
function save() {
  if (editedIndex.value > -1) {
    Object.assign(desserts.value[editedIndex.value], editedItem.value);
  } else {
    desserts.value.push(editedItem.value);
  }
  close();
}

//Computed Property
const formTitle = computed(() => {
  return editedIndex.value === -1 ? "New Contact" : "Edit Contact";
});
</script>

<template>
  <v-card>
    <v-card-text class="pa-5">
      <v-row>
        <v-col cols="12" lg="4" md="6">
          <v-text-field
            density="compact"
            v-model="search"
            label="Search Contacts"
            hide-details
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="8" md="6" class="text-right">
          <v-dialog v-model="dialog">
            <template v-slot:activator="{ props }">
              <v-btn color="primary" v-bind="props" class="ml-auto">
                <v-icon class="mr-2">mdi-account-multiple-plus</v-icon>Add
                Contact
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="pa-4 bg-secondary">
                <span class="title text-white">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          variant="outlined"
                          hide-details
                          v-model="editedItem.id"
                          label="Id"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          variant="outlined"
                          hide-details
                          v-model="editedItem.userinfo"
                          label="User info"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          variant="outlined"
                          hide-details
                          v-model="editedItem.usermail"
                          label="User email"
                          type="email"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          variant="outlined"
                          hide-details
                          v-model="editedItem.phone"
                          label="Phone"
                          type="phone"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          variant="outlined"
                          hide-details
                          v-model="editedItem.jdate"
                          label="Joining Date"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          variant="outlined"
                          hide-details
                          v-model="editedItem.role"
                          label="Role"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12">
                        <v-select
                          variant="outlined"
                          hide-details
                          :items="rolesbg"
                          v-model="editedItem.rolestatus"
                          label="Role Background"
                        ></v-select>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-container>
              </v-card-text>

              <v-card-actions class="pa-4">
                <v-spacer></v-spacer>
                <v-btn color="error" @click="close">Cancel</v-btn>
                <v-btn
                  color="secondary"
                  :disabled="
                    editedItem.userinfo == '' || editedItem.usermail == ''
                  "
                  variant="flat"
                  @click="save"
                  >Save</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
      <v-table class="mt-5">
        <thead>
          <tr>
            <th>Id</th>
            <th>UserInfo</th>
            <th>Phone</th>
            <th>Joining Date</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filteredList" :key="item.id">
            <td>{{ item.id }}</td>
            <td>
              <div class="d-flex align-center py-4">
                <div>
                  <v-img
                    :src="`/assets/images/users/${item.avatar}`"
                    width="45px"
                    class="rounded-circle img-fluid"
                  ></v-img>
                </div>

                <div class="ml-5">
                  <h4>{{ item.userinfo }}</h4>
                  <span class="subtitle-2 d-block font-weight-regular">{{
                    item.usermail
                  }}</span>
                </div>
              </div>
            </td>
            <td>{{ item.phone }}</td>
            <td>{{ item.jdate }}</td>
            <td>
              <v-chip :color="item.rolestatus" label>{{ item.role }}</v-chip>
            </td>
            <td>
              <v-icon
                small
                class="mr-2 text-info cursor-pointer"
                @click="editItem(item)"
                title="Edit"
                >mdi-pencil</v-icon
              >
              <v-icon
                small
                class="text-error cursor-pointer"
                title="Delete"
                @click="deleteItem(item)"
                >mdi-delete</v-icon
              >
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>
