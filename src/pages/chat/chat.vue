<template>
  <div>
    <Breadcrumbs main="" title="Chat" />
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="row">
        <div class="col call-chat-sidebar col-sm-12">
          <div class="card">
            <div class="card-body chat-body">
              <div class="chat-box">
                <!-- Chat left side Start-->
                <div class="chat-left-aside">
                  <div class="media">
                    <img
                      class="rounded-circle user-image"
                      src="../../assets/images/user/1.jpg"
                      alt=""
                    />
                    <div class="about">
                      <div class="name f-w-600">Elana Jecno</div>
                      <div class="status">Status...</div>
                    </div>
                  </div>
                  <div class="people-list custom-scrollbar" id="people-list">
                    <div class="search">
                      <form class="theme-form">
                        <div class="form-group">
                          <input
                            v-model="search"
                            v-on:keyup="setSerchUsers"
                            class="form-control"
                            type="text"
                            placeholder="search"
                          /><i class="fa fa-search"></i>
                        </div>
                      </form>
                    </div>
                    <ul class="list" v-if="search == ''">
                      <li
                        class="clearfix"
                        v-for="(user, index) in activeusers"
                        :key="index"
                        @click="setActiveuser(user.id)"
                      >
                        <img
                          class="rounded-circle user-image"
                          :src="getImgUrl(user.thumb)"
                          alt=""
                        />
                        <div class="status-circle away"></div>
                        <div class="about">
                          <div class="name">{{ user.name }}</div>
                          <div class="status">{{ user.status }}</div>
                        </div>
                      </li>
                    </ul>
                    <ul class="list" v-if="search != ''">
                      <li
                        class="clearfix"
                        v-for="(user, index) in serchUser"
                        :key="index"
                        @click="setActiveuserSerch(user.id)"
                      >
                        <img
                          class="rounded-circle user-image"
                          :src="getImgUrl(user.thumb)"
                          alt=""
                        />
                        <div class="status-circle away"></div>
                        <div class="about">
                          <div class="name">{{ user.name }}</div>
                          <div class="status">{{ user.status }}</div>
                        </div>
                      </li>
                      <div v-if="!serchUser.length">
                        <div class="search-not-found chat-search text-center">
                          <div>
                            <!-- <img src="../../assets/images/search-not-found.png" alt="" class="second-search"> -->
                            <p>
                              Sorry, We didn't find any results matching this
                              search
                            </p>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
                <!-- Chat left side Ends-->
              </div>
            </div>
          </div>
        </div>
        <div class="col call-chat-body">
          <div class="card">
            <div class="card-body p-0">
              <div class="row chat-box">
                <!-- Chat right side start-->
                <div class="col pr-0 chat-right-aside">
                  <!-- chat start-->
                  <div class="chat">
                    <!-- chat-header start-->
                    <div class="chat-header clearfix">
                      <img
                        class="rounded-circle"
                        v-if="currentchat.thumb"
                        :src="getImgUrl(currentchat.thumb)"
                        alt=""
                      />
                      <div class="about">
                        <div class="name">
                          {{ currentchat.name
                          }}<!--<span class="font-primary f-12">Typing...</span>-->
                        </div>
                        <div class="status digits">
                          {{ currentchat.lastSeenDate }}
                        </div>
                      </div>
                      <ul
                        class="list-inline float-left float-sm-right chat-menu-icons"
                      >
                        <li class="list-inline-item">
                          <a href="#"><i class="icon-search"></i></a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#"><i class="icon-clip"></i></a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#"><i class="icon-headphone-alt"></i></a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#"><i class="icon-video-camera"></i></a>
                        </li>
                        <li
                          class="list-inline-item toogle-bar"
                          v-on:click="chatmenutoogle = !chatmenutoogle"
                        >
                          <a href="#"><i class="icon-menu"></i></a>
                        </li>
                      </ul>
                    </div>
                    <!-- chat-header end-->
                    <div class="chat-history chat-msg-box custom-scrollbar">
                      <ul>
                        <li
                          v-for="(chat, index) in currentChat.chat.messages"
                          :key="index"
                          v-bind:class="{ clearfix: chat.sender == 0 }"
                        >
                          <div
                            class="message"
                            v-bind:class="{
                              'other-message pull-right': chat.sender == 0,
                              'my-message': chat.sender != 0,
                            }"
                          >
                            <img
                              class="rounded-circle float-left chat-user-img img-30"
                              alt=""
                              v-if="currentchat.thumb && chat.sender != 0"
                              v-bind:src="getImgUrl(currentchat.thumb)"
                            />
                            <img
                              class="rounded-circle float-right chat-user-img img-30"
                              alt=""
                              v-if="chat.sender == 0"
                              v-bind:src="getImgUrl('user/1.jpg')"
                            />
                            <div
                              class="message-data"
                              v-bind:class="{ 'text-right': chat.sender == 0 }"
                            >
                              <span class="message-data-time">{{
                                chat.time
                              }}</span>
                            </div>
                            {{ chat.text }}
                          </div>
                        </li>
                        <div v-if="!currentChat.chat.messages.length">
                          <div class="image-not-found">
                            <div class="d-block start-conversion">
                              <!-- <img src="../../assets/images/start-conversion.jpg" class="img-fluid"> -->
                            </div>
                          </div>
                        </div>
                      </ul>
                    </div>
                    <!-- end chat-history-->
                    <div class="chat-message clearfix">
                      <div class="row">
                        <div class="col-xl-12 d-flex">
                          <div class="smiley-box bg-primary">
                            <div class="picker">
                              <img
                                src="../../assets/images/smiley.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="input-group text-box">
                            <input
                              class="form-control input-txt-bx"
                              id="message-to-send"
                              v-model="text"
                              v-on:keyup.enter="addChat()"
                              type="text"
                              name="message-to-send"
                              placeholder="Type a message......"
                            />
                            <div class="input-group-append">
                              <button
                                @click="addChat()"
                                class="btn btn-primary"
                                type="button"
                              >
                                SEND
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- end chat-message-->
                    <!-- chat end-->
                    <!-- Chat right side ends-->
                  </div>
                </div>
                <div
                  class="col pl-0 chat-menu custom-scrollbar"
                  :class="{ show: chatmenutoogle }"
                >
                  <b-tabs
                    nav-class="tabbed-card border-tab border-tab-primary custom-scrollbar"
                  >
                    <b-tab title="CALL" active>
                      <div class="people-list">
                        <ul class="list digits custom-scrollbar">
                          <li
                            class="clearfix"
                            v-for="(user, index) in users"
                            :key="index"
                            @click="setActiveuser(user.id)"
                          >
                            <img
                              class="rounded-circle user-image"
                              :src="getImgUrl(user.thumb)"
                              alt=""
                            />
                            <div class="about">
                              <div class="name">{{ user.name }}</div>
                              <div class="status">
                                <i class="fa fa-share font-success mr-1"></i
                                >{{ user.lastSeenDate }}
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </b-tab>
                    <b-tab class="material-border" title="STATUS">
                      <div>
                        <div class="people-list">
                          <div class="search">
                            <form class="theme-form">
                              <div class="form-group">
                                <input
                                  class="form-control"
                                  type="text"
                                  placeholder="Write Status...00"
                                /><i class="fa fa-pencil"></i>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div class="status">
                          <p class="font-dark">Active</p>
                          <hr />
                          <p>
                            Established fact that a reader will be distracted
                            <i
                              class="icofont icofont-emo-heart-eyes font-danger f-20"
                            ></i
                            ><i
                              class="icofont icofont-emo-heart-eyes font-danger f-20 m-l-5"
                            ></i>
                          </p>
                          <hr />
                          <p>
                            Dolore magna aliqua
                            <i
                              class="icofont icofont-emo-rolling-eyes font-success f-20"
                            ></i>
                          </p>
                        </div>
                      </div>
                    </b-tab>
                    <b-tab class="material-border" title="PROFILE">
                      <div>
                        <div class="user-profile">
                          <div class="image">
                            <div class="avatar text-center">
                              <img
                                alt=""
                                src="../../assets/images/user/2.png"
                              />
                            </div>
                            <div class="icon-wrapper">
                              <i class="icofont icofont-pencil-alt-5"></i>
                            </div>
                          </div>
                          <div class="user-content text-center">
                            <h5 class="text-uppercase">Elana Jecno</h5>
                            <div class="social-media">
                              <ul class="list-inline">
                                <li class="list-inline-item">
                                  <a href="#"><i class="fa fa-facebook"></i></a>
                                </li>
                                <li class="list-inline-item">
                                  <a href="#"
                                    ><i class="fa fa-google-plus"></i
                                  ></a>
                                </li>
                                <li class="list-inline-item">
                                  <a href="#"><i class="fa fa-twitter"></i></a>
                                </li>
                                <li class="list-inline-item">
                                  <a href="#"
                                    ><i class="fa fa-instagram"></i
                                  ></a>
                                </li>
                                <li class="list-inline-item">
                                  <a href="#"><i class="fa fa-rss"></i></a>
                                </li>
                              </ul>
                            </div>
                            <hr />
                            <div class="follow text-center">
                              <div class="row">
                                <div class="col border-right">
                                  <span>Following</span>
                                  <div class="follow-num">236k</div>
                                </div>
                                <div class="col">
                                  <span>Follower</span>
                                  <div class="follow-num">3691k</div>
                                </div>
                              </div>
                            </div>
                            <hr />
                            <div class="text-center digits">
                              <p class="mb-0">Mark.jecno23@gmail.com</p>
                              <p class="mb-0">+91 365 - 658 - 1236</p>
                              <p class="mb-0">Fax: 123-4560</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-tab>
                  </b-tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Container-fluid Ends-->
  </div>
</template>
<script>
  import { mapState } from 'vuex';
  
  export default {
    name: 'Chat',
    components: {},
    data() {
      return {
        text: '',
        search: '',
        currentchat: [],
        chatmenutoogle: false,
      };
    },
    computed: {
      ...mapState({
        activeuser: (state) => state.chat.activeuser,
        users: (state) =>
          state.chat.users.filter(function (user) {
            if (user.id !== 0) return user;
          }),
        serchUser: (state) => state.chat.serchUser,
        activeusers: (state) =>
          state.chat.users.filter(function (user) {
            if (user.active === 'active' && user.id !== 0) return user;
          }),
        chats: (state) =>
          state.chat.chats.find(function (chat) {
            if (chat.id === state.chat.activeuser) {
              return chat;
            }
          }),
        currentChat() {
          return (this.currentchat = this.$store.getters['chat/currentChat']);
        },
      }),
    },
    mounted() {
      var container = this.$el.querySelector('.chat-history');
      container.scrollTop = container.scrollHeight;
    },
    methods: {
      getImgUrl(path) {
        return require('../../assets/images/' + path);
      },
      addChat: function () {
        if (this.text !== '') {
          this.$store.dispatch('chat/addChat', this.text);
          this.text = '';
          var container = this.$el.querySelector('.chat-history');
          setTimeout(function () {
            container.scrollBy({ top: 200, behavior: 'smooth' });
          }, 310);
          setTimeout(function () {
            container.scrollBy({ top: 200, behavior: 'smooth' });
          }, 1100);
        }
      },
      setActiveuser: function (id) {
        this.$store.dispatch('chat/setActiveuser', id);
      },
      setActiveuserSerch: function (id) {
        this.$store.dispatch('chat/setActiveuser', id);
        this.search = '';
      },
      setSerchUsers: function () {
        if (this.search !== '')
          this.$store.dispatch('chat/setSerchUsers', this.search);
      },
    },
  };
</script>
