<template>
  <v-row>
    <v-col cols="12" sm="12">
      <v-card>
        <!---/Main Box chat list -->
        <BaseLeftRightPartVue>
          <!---/Left chat list -->
          <template v-slot:leftpart>
            <div class="pa-5 border-bottom">
              <v-text-field
                label="Search contact"
                variant="outlined"
                density="compact"
                hide-details
                v-model="handleSearchInput"
              ></v-text-field>
            </div>
            <v-list lines="two">
              <!---/chat list -->
              <v-list-item
                v-for="(conversation, i) in filteredList"
                :key="i"
                class="mb-2"
                :class="isActive ? 'active' : 's'"
                :value="conversation"
                @click="() => openMessages(conversation)"
                two-line
              >
                <!---/Icon -->
                <template v-slot:prepend>
                    <v-avatar size="45">
                      <v-img
                        :src="`/assets/images/users/${conversation.image}`"
                        :alt="conversation.image"
                        width="45"
                      ></v-img>
                    </v-avatar>
                </template>
                <!---/Icon -->
                <v-list-item-header>
                  <!---/Title -->
                  <v-list-item-title class="font-weight-medium">
                    {{ conversation.name }}
                  </v-list-item-title>
                  <!---/Subtitle -->
                  <v-list-item-subtitle class="text-truncate d-block">
                    {{ conversation.lastMessage }}
                  </v-list-item-subtitle>
                  <!---/Title -->
                </v-list-item-header>
              </v-list-item>
            </v-list>
          </template>
          <!---/Right chat list -->
          <template v-slot:rightpart>
            <template v-if="conversation">
              <!---conversation header-->
              <div class="d-flex pa-4 align-center">
                <v-avatar size="45" class="mr-3"
                  ><img
                    :src="`/assets/images/users/${conversation.image}`"
                    width="45"
                /></v-avatar>
                <div class="user-about">
                  <h4>{{ conversation.name }}</h4>
                </div>
              </div>
              <v-divider></v-divider>
              <!---conversation Room-->
              <div class="chat-room pa-4">
                <perfect-scrollbar class="chat-room-box-height">
                  <div
                    class="d-flex align-center mb-4"
                    light
                    v-for="message in conversation.messages"
                    :key="message.id"
                    :class="{ fromMe: message.fromMe, messageItem: true }"
                  >
                    <div class="thumb">
                      <v-avatar size="35" class="mx-2" v-if="message.fromMe">
                        <img
                          src="@/assets/images/users/6.jpg"
                          width="35"
                          alt="..."
                        />
                      </v-avatar>
                      <v-avatar size="35" class="mx-2" v-else>
                        <img
                          :src="`/assets/images/users/${conversation.image}`"
                          alt="..."
                          width="35"
                        />
                      </v-avatar>
                    </div>
                    <v-chip :color="message.fromMe ? 'primary' : ''">
                      {{ message.text }}
                    </v-chip>
                  </div>
                </perfect-scrollbar>
              </div>

              <!---Send Message Footer-->
              <div class="pa-4">
                <v-textarea
                  name="input-4-1"
                  rows="2"
                  variant="outlined"
                  hide-details
                  no-resize
                  @keydown="addMessage"
                  label="Type and hit Enter"
                ></v-textarea>
              </div>
            </template>
            <template v-else>
              <div class="d-flex justify-center h-100 align-center">
                <h4>Start conversation</h4>
              </div>
            </template>
          </template>
        </BaseLeftRightPartVue>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import BaseLeftRightPartVue from "@/components/BaseLeftRightPart.vue";
import userslist from "./userslist";

const handleSearchInput = ref("");
const allUsers = ref(userslist);
const isActive = ref(false);
const conversation = ref();

//Methods

function openMessages(con: any) {
  conversation.value = con;
}

function addMessage(e: any) {
  if (e.key === "Enter" && e.target.value) {
    const value = {
      text: e.target.value,
      fromMe: true,
    };
    Object.assign(conversation.value, {
      messages: [...conversation.value.messages, value],
    });
    e.target.value = "";
    console.log(conversation.value.messages);
  }
}

//Computed Property
const filteredList = computed(() => {
  return allUsers.value.filter((user: any) => {
    return user.name
      .toLowerCase()
      .includes(handleSearchInput.value.toLowerCase());
  });
});
</script>
<style lang="scss">
.fromMe {
  flex-direction: row-reverse;
}
.chat-room-box-height {
  height: calc(100vh - 440px);
}
</style>
