<template>
  <div>
    <VueBotUI
      :messages="botData"
      :options="botOptions"
      :bot-typing="botTyping"
      :input-disable="inputDisable"
      @msg-send="messageSendHandler"
    />
  </div>
</template>

<script>
import { Questions } from "../../constants/chatgpt/default"
import config from "../../config/chatgpt"
import { VueBotUI } from "vue-bot-ui"
import EasyGPT from "easygpt"
const logo = require("../../assets/images/logo/logo.png")
const gpt = new EasyGPT()

gpt.setApiKey(config.API_KEY)
export default {
  name: "GPTBot",
  components: {
    VueBotUI
  },
  props: ["title", "data", "user", "path"],
  data() {
    return {
      question: { path: "/" },
      firstAsk: true,
      layout: null,
      botTyping: false,
      inputDisable: false,
      defaultAsk: "",
      botData: [
        // {
        //   agent: "bot", // Required. 'bot' or 'user'
        //   type: "text", // Required. Bubble message component type: 'text' / 'button'
        //   text: "Hello. How can I help you", // Required. The message
        //   disableInput: false, // Disable message input or not
        // },
        // {
        //   agent: "user",
        //   type: "text", // always
        //   text: "I need a new laptop",
        // },
      ], // See Data example below
      botOptions: {
        botTitle: this.getBotTitle(),
        colorScheme: "#7366FF",
        // See the list of options below
        botAvatarImg: logo,
        boardContentBg: "#f9f9f9"
        // msgBubbleBgBot: '#fff',
        // inputPlaceholder: 'Type hereeee...',
        // inputDisableBg: '#fff',
        // inputDisablePlaceholder: 'Hit the buttons above to respond'
      }
    }
  },
  mounted() {
    this.question = Questions.find((q) => q.path === this.path)
    // this.preAskRecurr(100)

    this.botData.push({
      agent: "bot",
      type: "button",
      disableInput: true,
      text: this.$t(this.question.text),
      options: this.question.options
    })
  },
  methods: {
    getBotTitle() {
      return this.title.length > 25
        ? this.$t("About") + " " + this.title
        : `${this.$t("Chat-Bot")} - ${this.$t("About")} '${this.title}'`
    },
    preAskRecurr(time) {
      setTimeout(() => {
        if (this.data && this.user && this.user.wallet) {
          this.preAsk(this.data, this.user, this.question.path)
        } else {
          this.preAskRecurr(time)
        }
      }, time)
    },
    async preAsk(data, user) {
      let s = this.getIntroduction(data, user, this.question.path)
      if (s !== "") {
        console.log("introduction::", s)
        await gpt.addMessage(s)
        let response = await gpt.ask()
        console.log("response :", response.content)
      }
      this.firstAsk = false
    },
    async delay(milliseconds) {
      return new Promise((resolve) => {
        setTimeout(resolve, milliseconds)
      })
    },

    async messageSendHandler(v) {
      //console.log(v);
      this.botData.push(v)
      await this.getResponse(v)
    },
    async getResponse(v) {
      //console.log(v);
      this.botTyping = true
      this.inputDisable = true
      if (this.firstAsk) {
        await this.preAsk(this.data, this.user)
      }
      let s = "你好, 这是我的个人基本信息:\n"
      s =
        s +
        (this.user.nickname ? "我的名字是" + this.user.nickname + "，" : s + "")
      s =
        s +
        (this.user.wallet ? "我的钱包地址是" + this.user.wallet + "\n" : s + "")
      await gpt.addMessage(
        s +
          "\n我的问题是:\n" +
          v.text +
          "\n你只需要总结性地简要回答我就好，不需要重复信息内容。"
      )
      let response = await gpt.ask()
      //console.log(response);
      this.botTyping = false
      this.inputDisable = false
      this.botData.push({
        agent: "bot",
        type: "buble",
        text: response.content,
        disableInput: true
      })
    },
    getIntroduction(data, user, path) {
      let s = ""
      if (path === "/scores/search") {
        s = "为了让你更好理解我后面要给你的数据，我在此进行解释:\n"
        s =
          s +
          "你将会获得多笔的登记积分记录, 他意味着有许多人得到了积分，这些积分得从预算提案而来，而预算来自于某一个通过的提案，由于提案中记载了预算，因此提案通过后就有了预算可以发放积分。然而这个积分不会马上发放，而是要有相应的人来登记积分，经过审核无误之后才会做发放，所以登记的积分会有状态。每一笔登记积分都有登记人和获得人，当我们在讲谁的积分时，指的是他做为获得人获得的积分，而当我们在讲我登记的积分时，是指我作为发放登记人登记的积分，而登记积分的事件日期就是登记的日期，怎么判断登记积分记录与我的关系，是透过我的钱包地址来判断。\n"
        s =
          s +
          `\n接下来我的所有问题, 请基于下面 ${data.length} 笔的搜寻结果进行回答:\n`
        for (let i = 0; i < data.length; i++) {
          const obj = `第 ${i + 1} 笔的登记积分`
          const proposal = data[i]
          s =
            s +
            `${obj}的预算来源于某个提案，该提案的标题为'${this.$t(
              proposal.budget.subject
            )}'`
          s = s + `，登记时间为${new Date(proposal.datetime).toISOString()}`
          s = s + `，登记的积分数额为 ${proposal.value_claim}`
          s = s + `，登记的积分目前的状态是${this.$t(proposal.status)}`
          s =
            s +
            `，积分的${this.$t("Score-Beneficiary")}的钱包地址为 ${
              proposal.beneficiary.wallet
            }`
          if (proposal.beneficiary.nickname)
            s = s + `，且他的名字是 ${proposal.beneficiary.nickname}`
          s =
            s +
            `。积分的${this.$t("Score-Register-Applicant")}的钱包地址为 ${
              proposal.creator.wallet
            }`
          if (proposal.creator.nickname)
            s = s + `，且他的名字是${proposal.creator.nickname}。` + "\n"
        }
      } else if (path === "/proposals/:id") {
        console.log("data::", data)
        console.log("user::", user)
        s =
          "你现在要阅读一份提案，这份提案涉及到预算与产出物，提案如果通过，申请人就会得到预算，并且在时限内交付产出物。\n"
        s =
          "提案的分类包含 P1 提案, P2 提案与 P3 提案，P1 提案只能申请最高 20000 积分，P2 提案能申请美元和积分，但是美元上限为 1000 元而积分上限为 50000 分，标题如果有 SIP 的提案是最重要的一类提案。\n"
        s = "在提案内容中，美元可能以 U 的方式呈现。\n"
        s = s + `以下开始说明提案内容:\n`
        if (data.proposer.nickname)
          s = s + `提案的发起人为 ${data.proposer.nickname}\n`
        s = s + `提案的发起人钱包地址为 ${data.proposer.wallet}\n`
        s = s + `提案的标题为 ${data.title}\n`
        s = s + `提案的分类为 ${this.$t(data.category)}\n`
        s = s + `提案的状态为 ${this.$t(data.status)}\n`
        if (data.sip) s = s + `提案的 SIP 编号为 ${this.$t(data.sip)}\n`
        s = s + "而提案内容为：\n"
        s = s + data.content + "\n"
        s = s + "提案内容说明结束，以上。\n"
      }
      s = s + `\n你不需要回答我，只需要理解前面的内容来回答后续的问题就可以。`
      return s
    }
  }
}
</script>
