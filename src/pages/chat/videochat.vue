<template>
  <div>
    <Breadcrumbs main="" title="Video Chat" />
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="row">
        <div class="col call-chat-sidebar">
          <div class="card">
            <div class="card-body chat-body">
              <div class="chat-box">
                <!-- Chat left side Start-->
                <div class="chat-left-aside">
                  <div class="media">
                    <img
                      class="rounded-circle user-image"
                      src="../../assets/images/user/12.png"
                      alt=""
                    />
                    <div class="about">
                      <div class="name f-w-600">Mark Jecno</div>
                      <div class="status">Status...</div>
                    </div>
                  </div>
                  <div class="people-list" id="people-list">
                    <div class="search">
                      <form class="theme-form">
                        <div class="form-group">
                          <input
                            class="form-control"
                            type="text"
                            placeholder="search"
                          /><i class="fa fa-search"></i>
                        </div>
                      </form>
                    </div>
                    <ul class="list">
                      <li class="clearfix">
                        <img
                          class="rounded-circle user-image"
                          src="../../assets/images/user/1.jpg"
                          alt=""
                        />
                        <div class="status-circle away"></div>
                        <div class="about">
                          <div class="name">Vincent Porter</div>
                          <div class="status">Hello Name</div>
                        </div>
                      </li>
                      <li class="clearfix">
                        <img
                          class="rounded-circle user-image"
                          src="../../assets/images/user/2.png"
                          alt=""
                        />
                        <div class="status-circle online"></div>
                        <div class="about">
                          <div class="name">Aiden Chavez</div>
                          <div class="status">Out is my favorite.</div>
                        </div>
                      </li>
                      <li class="clearfix">
                        <img
                          class="rounded-circle user-image"
                          src="../../assets/images/user/8.jpg"
                          alt=""
                        />
                        <div class="status-circle online"></div>
                        <div class="about">
                          <div class="name">Prasanth Anand</div>
                          <div class="status">Change for anyone.</div>
                        </div>
                      </li>
                      <li class="clearfix">
                        <img
                          class="rounded-circle user-image"
                          src="../../assets/images/user/4.jpg"
                          alt=""
                        />
                        <div class="status-circle offline"></div>
                        <div class="about">
                          <div class="name">Venkata Satyamu</div>
                          <div class="status">First bun like a sun.</div>
                        </div>
                      </li>
                      <li class="clearfix">
                        <img
                          class="rounded-circle user-image"
                          src="../../assets/images/user/5.jpg"
                          alt=""
                        />
                        <div class="status-circle online"></div>
                        <div class="about">
                          <div class="name">Ginger Johnston</div>
                          <div class="status">it's my life. Mind it.</div>
                        </div>
                      </li>
                      <li class="clearfix">
                        <img
                          class="rounded-circle user-image"
                          src="../../assets/images/user/8.jpg"
                          alt=""
                        />
                        <div class="status-circle offline"></div>
                        <div class="about">
                          <div class="name">Kori Thomas</div>
                          <div class="status">Change for anyone.</div>
                        </div>
                      </li>
                      <li class="clearfix">
                        <img
                          class="rounded-circle user-image"
                          src="../../assets/images/user/1.jpg"
                          alt=""
                        />
                        <div class="status-circle online"></div>
                        <div class="about">
                          <div class="name">Vincent Porter</div>
                          <div class="status">Hello Name</div>
                        </div>
                      </li>
                      <li class="clearfix">
                        <img
                          class="rounded-circle user-image"
                          src="../../assets/images/user/8.jpg"
                          alt=""
                        />
                        <div class="status-circle online"></div>
                        <div class="about">
                          <div class="name">Kori Thomas</div>
                          <div class="status">Change for anyone.</div>
                        </div>
                      </li>
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
                <div class="col pr-xl-0 chat-right-aside">
                  <!-- chat start-->
                  <div class="chat">
                    <!-- chat-header start-->
                    <div class="chat-header clearfix">
                      <img
                        class="rounded-circle"
                        src="../../assets/images/user/8.jpg"
                        alt=""
                      />
                      <div class="about">
                        <div class="name">
                          Kori Thomas<span class="font-primary f-12"
                            >Typing...</span
                          >
                        </div>
                        <div class="status">Last Seen 3:55 PM</div>
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
                          @click="chatmenutoogle = !chatmenutoogle"
                        >
                          <a href="#"><i class="icon-menu"></i></a>
                        </li>
                      </ul>
                    </div>
                    <!-- chat-header end-->
                    <!-- chat-history start-->
                    <div class="chat-history">
                      <div class="row">
                        <div class="col text-center pr-0 call-content">
                          <div>
                            <div class="total-time">
                              <h2>36 : 56</h2>
                            </div>
                            <div class="call-icons">
                              <ul class="list-inline">
                                <li class="list-inline-item">
                                  <a href="#"
                                    ><i class="icon-video-camera"></i
                                  ></a>
                                </li>
                                <li class="list-inline-item">
                                  <a href="#"><i class="icon-volume"></i></a>
                                </li>
                                <li class="list-inline-item">
                                  <a href="#"><i class="icon-user"></i></a>
                                </li>
                              </ul>
                            </div>
                            <button
                              class="btn btn-danger-gradien btn-block btn-lg"
                            >
                              END CALL
                            </button>
                            <div class="receiver-img">
                              <img
                                src="../../assets/images/other-images/receiver-img.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-7 pl-0 caller-img">
                          <img
                            class="img-fluid"
                            src="../../assets/images/other-images/caller.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <!-- chat-history ends-->
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
                            v-for="(user, index) in users.splice(0,8)"
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
