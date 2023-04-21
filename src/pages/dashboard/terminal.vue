<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid" style="padding-top: 40px">
      <div class="row">
        <div class="col call-chat-sidebar col-sm-12">
          <div class="card">
            <div class="card-body chat-body">
              <div class="chat-box">
                <!-- Chat left side Start-->
                <div class="chat-left-aside">
                  <div class="media">
                    <div class="about">
                      <h5>
                        <b>{{ $t("Terminal") }}</b
                        >&nbsp;<small
                          ><i
                            class="icofont icofont-question-circle"
                            style="color: #d3d3d3"
                            v-b-tooltip.hover
                            :title="$t('What-is-Terminal')"
                        /></small>
                      </h5>
                    </div>
                  </div>
                  <div
                    class="people-list custom-scrollbar mt-3"
                    id="people-list"
                  >
                    <div class="search">
                      <form class="theme-form">
                        <div class="form-group">
                          <input
                            v-model="search"
                            v-on:keyup="setSerchUsers"
                            class="form-control"
                            type="text"
                            :placeholder="$t('Search') + ' ...'"
                          /><i class="fa fa-search"></i>
                        </div>
                      </form>
                    </div>
                    <ul class="list" v-if="search == ''">
                      <li
                        class="clearfix"
                        v-for="(task, index) in activeTasks()"
                        :key="index"
                        @click="setActiveTask(task.id)"
                      >
                        <img
                          class="rounded-circle user-image"
                          :src="task.thumb ? getImgUrl(task.thumb) : ''"
                          alt=""
                        />
                        <div class="status-circle bg-danger"></div>
                        <div class="about">
                          <a href="#" class="name">{{
                            task && task.name ? task.name : ""
                          }}</a>
                          <div class="status">
                            {{ task.subject ? task.subject : "" }}
                          </div>
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
                <div class="col pr-0 chat-right-aside">
                  <!-- chat start-->
                  <div class="chat">
                    <!-- chat-header start-->
                    <div class="chat-header clearfix">
                      <img
                        class="rounded-circle"
                        v-if="currentTask && currentTask.thumb"
                        :src="getImgUrl(currentTask.thumb)"
                        alt=""
                      />
                      <div class="about">
                        <div class="name">
                          {{ currentTask && currentTask.name ? currentTask.name : ""
                          }}<!--<span class="font-primary f-12">Typing...</span>-->
                        </div>
                        <div class="status digits">
                          {{ currentTask && currentTask.subject ? currentTask.subject : "" }}
                        </div>
                      </div>
                      <ul
                        class="list-inline float-left float-sm-right chat-menu-icons"
                      >
                        <li class="list-inline-item">
                          <a href="#"><i class="icon-plus"></i></a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#"><i class="icon-user"></i></a>
                        </li>
                      </ul>
                    </div>
                    <!-- chat-header end-->
                    <div class="chat-history chat-msg-box custom-scrollbar">
                      <ul v-if="currentTask && currentTask.messages">
                        <li
                          v-for="(chat, index) in currentTask.messages"
                          :key="index"
                          v-bind:class="{ clearfix: chat.sender == 0 }"
                        >
                          <div
                            class="message"
                            v-bind:class="{
                              'other-message pull-right': chat.sender == 0,
                              'my-message': chat.sender != 0
                            }"
                          >
                            <div
                              class="message-data"
                              v-bind:class="{ 'text-right': chat.sender == 0 }"
                            >
                              <span class="message-data-time">{{
                                chat.time
                              }}</span>
                            </div>
                            <p v-html="chat.text"></p>
                          </div>
                          <div
                            class="mb-5"
                            v-if="chat.options && chat.options.length > 0"
                          >
                            <div
                              class="mt-2"
                              v-for="(option, index) in chat.options"
                              :key="'chat-' + index"
                            >
                              <b-button
                                variant="primary"
                                class="btn"
                                size="sm"
                                @click="addChat(option.text)"
                                >{{ option.text }}</b-button
                              >
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <!-- end chat-history-->
                    <div class="chat-message clearfix">
                      <div class="row">
                        <div class="col-xl-12 d-flex">
                          <div class="input-group text-box">
                            <input
                              class="form-control input-txt-bx"
                              id="message-to-send"
                              type="text"
                              name="message-to-send"
                              :placeholder="$t('Unlock-Free-Chat')"
                              disabled
                            />
                            <div class="input-group-append">
                              <button
                                @click="addChat()"
                                class="btn btn-primary"
                                type="button"
                                disabled
                              >
                                {{ $t("Send") }}
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
                    <b-tab active>
                      <template #title>
                        <p>{{ $t("Task-Records") }}</p>
                      </template>
                      <div class="people-list">
                        <ul class="list digits custom-scrollbar">
                          <li
                            class="clearfix"
                            v-for="(task, index) in myTasks"
                            :key="'MyTask-' + index"
                          >
                            <div class="about">
                              <div class="name">
                                <b>{{ task.subject }}</b>
                              </div>
                              <div class="status">
                                <i class="fa fa-play font-primary mr-1"></i
                                >&nbsp;{{ task.status }}
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </b-tab>
                    <b-tab class="material-border">
                      <template #title>
                        <p>🔥{{ $t("Task-Countdown") }}</p>
                      </template>
                      <div>
                        <div class="status">
                          <div>
                            <div class="countdown">
                              <h5><Timer :endTime="endTime"></Timer></h5>
                            </div>
                            <a href="#" class="font-dark mt-2"
                              ><p>与社区成员一同共创 NFT</p></a
                            >
                            <p>
                              <i
                                class="icofont icofont-money font-primary f-10"
                              />
                              100 $SCR
                            </p>
                            <hr />
                          </div>
                        </div>
                      </div>
                    </b-tab>
                    <b-tab class="material-border">
                      <template #title>
                        <p>{{ $t("Task-Powers") }}</p>
                      </template>
                      <div>
                        <div class="people-list">
                          <div class="search">
                            <form class="theme-form">
                              <div class="form-group">
                                <input
                                  class="form-control"
                                  type="text"
                                  :placeholder="$t('Search') + ' SBT ...'"
                                /><i class="fa fa-pencil"></i>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div class="status">
                          <h6>积分额外奖励: 最高 +8%</h6>
                          <div
                            v-for="(power, index) in sbtpowers"
                            :key="'Power-' + index"
                          >
                            <hr />
                            <b-badge variant="primary" class="mb-2">{{
                              power.sbt
                            }}</b-badge
                            ><br />
                            <span
                              class="font-dark"
                              v-for="(func, findex) in power.functions"
                              :key="'Power-' + index + '-Func-' + findex"
                            >
                              {{ func.subject }}<br />
                            </span>
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
// import SendingMeService from "../../services/sendingme.service"

import { mapState } from "vuex"
import Timer from "./timer"
import EthersService from '../../services/ether.service'

export default {
  name: "NPCTerminal",
  components: {
    Timer
  },
  data() {
    return {
      // sendingme: null,
      show: false,
      show_html_top: false,
      endTime: "Apr 29, 2023 00:00:00",
      text: "",
      search: "",
      chatmenutoogle: false,
      sbtpowers: [
        {
          sbt: "SeeDAO 成员",
          functions: [
            {
              subject: "可以承接 NPC 任务"
            }
          ]
        },
        {
          sbt: "研发公会成员",
          functions: [
            {
              subject: "开发类任务积分报酬 +1%"
            }
          ]
        },
        {
          sbt: "市政厅校友",
          functions: [
            {
              subject: "治理类任务积分报酬 +1%"
            }
          ]
        },
        {
          sbt: "3 天获得 5000 积分",
          functions: [
            {
              subject: "治理类任务积分报酬 +1%"
            }
          ]
        },
        {
          sbt: "参加了 10 场活动",
          functions: [
            {
              subject: "任何任务积分报酬 +5%"
            }
          ]
        }
      ],
      task: {},
      currentTask: {},
      myTasks: [],
      tasks: [
        {
          id: 0,
          name: this.$t("NPC-Atlas"),
          subject: this.$t("NPC-Subject-Onboarding"),
          thumb: "npc/Atlas.png",
          mode: "selection", // chat
          rewards: {
            scr: 500,
            u: 300
          },
          messages: [
            {
              sender: 1,
              time: "10:12 am",
              text: "嗨，我是新⼿村村长阿特拉斯，很高兴在 SeeDAO 遇见你，你是第 10801 位 SeeDAO 新成员。",
              options: []
            },
            {
              sender: 1,
              time: "10:13 am",
              text: "在新手村，你可以了解到 Web3 必备常识、获得你的第⼀个钱包与 NFT 头像、初步体验远程协作、窥探数字游⺠的⽇常⽣活。",
              options: []
            },
            {
              sender: 1,
              time: "10:14 am",
              text: "那么你打算怎么开始你的 Web3 旅程呢？",
              options: [
                {
                  text: "进行新人测评，给我个性化推荐",
                  value: "submit_ticket",
                  action: "postback"
                },
                {
                  text: "希望有一个老手带我了解 SeeDAO",
                  value: "submit_ticket",
                  action: "postback"
                },
                {
                  text: "我喜欢独自研究，我会开始自学之旅",
                  value: "submit_ticket",
                  action: "postback"
                }
              ]
            }
          ],
          status: "Out is my favorite",
          active: "active"
        },
        {
          id: 1,
          name: this.$t("NPC-Lee"),
          subject: this.$t("NPC-Subject-Points"),
          thumb: "npc/Lee.png",
          mode: "selection", // chat
          rewards: {
            scr: 500,
            u: 300
          },
          messages: [
            {
              sender: 1,
              time: "10:12 am",
              text: "嗨，我是 SeeDAO 数字城邦的大使，李靖，很高兴你在社区升级到 Level 1，我相信你的贡献整个社区都看在眼里。",
              options: []
            },
            {
              sender: 1,
              time: "10:13 am",
              text: "积分不但是你在社区的贡献度，也代表你在社区的声望，也是社区代币的期权。"
            },
            {
              sender: 1,
              time: "10:14 am",
              text: "关于积分的部份，你有什麽问题吗？",
              options: [
                {
                  text: "我想查询我的积分",
                  value: "submit_ticket",
                  action: "postback"
                },
                {
                  text: "如何知道其他人的积分",
                  value: "submit_ticket",
                  action: "postback"
                },
                {
                  text: "积分有什么权益",
                  value: "submit_ticket",
                  action: "postback"
                }
              ]
            }
          ],
          status: "白鱼, 黄鱼, 红鱼",
          active: "active"
        },
        {
          id: 2,
          name: this.$t("NPC-Lyra"),
          subject: this.$t("NPC-Subject-Task"),
          thumb: "npc/Lyra.png",
          mode: "selection", // chat
          rewards: {
            scr: 500,
            u: 300
          },
          messages: [
            {
              sender: 1,
              time: "10:12 am",
              text: "嗨，我是任务精灵莱拉，我会协助你在社区去选择和完成适合你的任务。",
              options: []
            },
            {
              sender: 1,
              time: "10:13 am",
              text: "为了帮您更好的推荐到合适的任务，需要您回答⼏个问题"
            },
            {
              sender: 1,
              time: "10:14 am",
              text: "你最近 2-3 周，能投入多少时间在 SeeDAO 中做贡献呢？",
              options: [
                {
                  text: "每天 2~4 小时",
                  value: "submit_ticket",
                  action: "postback"
                },
                {
                  text: "每周 2~10 小时",
                  value: "submit_ticket",
                  action: "postback"
                },
                {
                  text: "每月 2~10 小时",
                  value: "submit_ticket",
                  action: "postback"
                }
              ]
            }
          ],
          status: "唐晗, John, Andy",
          active: "active"
        },
        {
          id: 3,
          name: this.$t("NPC-Drakon"),
          subject: this.$t("NPC-Subject-Event"),
          thumb: "npc/Drakon.png",
          status: "Ricky, Ricky, Ricky",
          active: "active"
        },
        {
          id: 4,
          name: this.$t("NPC-Helios"),
          subject: this.$t("NPC-Subject-Bounty"),
          thumb: "npc/Helios.png",
          status: "Ricky, Ricky, Ricky.",
          active: "active"
        },
        {
          id: 5,
          name: this.$t("NPC-Kaida"),
          subject: this.$t("NPC-Subject-Governance"),
          thumb: "npc/Kaida.png",
          status: "Ricky, Ricky, Ricky.",
          active: "active"
        },
        {
          id: 6,
          name: this.$t("NPC-Nova"),
          subject: this.$t("NPC-Subject-Project"),
          thumb: "npc/Nova.png",
          status: "Change for anyone.",
          active: "active"
        },
        {
          id: 7,
          name: this.$t("NPC-Lazarus"),
          subject: this.$t("NPC-Subject-Guild"),
          thumb: "npc/Lazarus.png",
          status: "first bun like a sun.",
          active: "deactive"
        }
      ]
    }
  },
  computed: {
    ...mapState({
      activeuser: (state) => state.chat.activeuser,
      users: (state) =>
        state.chat.users.filter(function (user) {
          if (user.id !== 0) return user
        }),
      serchUser: (state) => state.chat.serchUser,
      activeusers: (state) =>
        state.chat.users.filter(function (user) {
          if (user.active === "active" && user.id !== 0) return user
        }),
      chats: (state) =>
        state.chat.chats.find(function (chat) {
          if (chat.id === state.chat.activeuser) {
            return chat
          }
        }),
      currentChat() {
        return (this.currentTask = this.$store.getters["chat/currentChat"])
      }
    })
  },
  mounted() {
    // SendingMeService.login(EthersService.walletAddress()).then((did)=>{
    //   // SendingMeService.sendText().then((res)=>{
    //   //   console.log('res::',res)
    //   // })
    // })
    var container = this.$el.querySelector(".chat-history")
    container.scrollTop = container.scrollHeight
    const tasks = this.activeTasks()
    this.setActiveTask(tasks[0])
  },
  methods: {
    activeTasks() {
      return this.tasks.filter(function (task) {
        if (task.active === "active") return task
      })
    },
    getImgUrl(path) {
      return require("../../assets/images/" + path)
    },
    addChat(text) {
      this.currentTask.messages.push({
        sender: 0,
        time: "10:12 am",
        text: text,
        options: []
      })
      var container = this.$el.querySelector(".chat-history")
      setTimeout(function () {
        container.scrollBy({ top: 2000, behavior: "smooth" })
      }, 210)
      setTimeout(() => {
        this.addChatResponse(text)
      }, 1010)
    },
    addChatResponse(text) {
      this.currentTask.messages.push({
        sender: 1,
        time: "10:12 am",
        text: this.getResponseText(text),
        options: []
      })
      if (this.getTaskName(text) !== "") {
        this.myTasks.push({
          subject: this.getTaskName(text),
          status: this.getStatus(text)
        })
      }
      var container = this.$el.querySelector(".chat-history")
      setTimeout(function () {
        container.scrollBy({ top: 2000, behavior: "smooth" })
      }, 210)
    },
    getResponseText(text) {
      if (text === "进行新人测评，给我个性化推荐") {
        return '好的，我们推荐新人可以在此进行新人测评：<a href="https://google.com" target="_blank">https://google.com</a>'
      } else if (text === "希望有一个老手带我了解 SeeDAO") {
        return '好的，现在线上的老手有 17 人，其中愿意协助新手的有 3 人，我推荐你可以与 Ricky 聊聊: <br/><a href="#">👋 与 Ricky 打招呼</a>'
      } else if (text === "我想查询我的积分") {
        return '你目前有 xxxx 积分，关于你的积分，更多可以见: <br/><a href="/scores/my">我的积分</a>'
      } else {
        return "系统烦忙中，请稍后再试"
      }
    },
    getTaskName(text) {
      if (text === "进行新人测评，给我个性化推荐") {
        return "完成新人测评"
      } else if (text === "希望有一个老手带我了解 SeeDAO") {
        return "与老手打招呼"
      } else {
        return ""
      }
    },
    getStatus(text) {
      if (text === "进行新人测评，给我个性化推荐") {
        return "0 / 1 新人测评"
      } else if (text === "希望有一个老手带我了解 SeeDAO") {
        return "0 / 1 打招呼"
      } else {
        return "未知"
      }
    },
    setActiveTask(id) {
      this.currentTask = this.tasks.find((t) => t.id === id)
      var container = this.$el.querySelector(".chat-history")
      setTimeout(function () {
        container.scrollBy({ top: 200, behavior: "smooth" })
      }, 310)
    },
    setActiveuser: function (id) {
      this.$store.dispatch("chat/setActiveuser", id)
    },
    setActiveuserSerch: function (id) {
      this.$store.dispatch("chat/setActiveuser", id)
      this.search = ""
    },
    setSerchUsers: function () {}
  }
}
</script>
