<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid" style="padding-top: 40px">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5>Metaoforo API 测试台</h5>
              <span></span><br />
              <b-button
                id="default-outline-primary-lg"
                variant="outline-primary"
                size="lg"
                class="btn btn-pill btn-primary btn-air-primary btn-lg"
                @click="findMetaforoUsers()"
                ><font color="white"
                  ><b>Step1. 取得使用者信息</b></font
                ></b-button
              >&nbsp;&nbsp;&nbsp;
              <b-button
                id="default-outline-primary-lg"
                variant="outline-primary"
                size="lg"
                class="btn btn-pill btn-primary btn-air-primary btn-lg"
                @click="uploadProposals()"
                ><font color="white"><b>Step2. 上传到 DB</b></font></b-button
              ><br />
              <br />{{ this.proposal }} <br />{{ metaforoUsers }}
              <br />
              <p v-for="(user, index) in users" :key="'user-' + index">
                {{ user.id }}:
                {{
                  user.user
                    ? user.user.nickname
                      ? user.user.nickname
                      : ""
                    : ""
                }}
                ({{
                  user.user ? (user.user.wallet ? user.user.wallet : "") : ""
                }}) [{{
                  user.user ? (user.user["_id"] ? user.user["_id"] : "") : ""
                }}]
              </p>
            </div>
            <template v-if="isFetchProposalsFinished">
              <div
                class="card-body"
                v-for="(mp, index) in metaforoProposals"
                :key="'proposal-' + index"
              >
                <template v-if="mp">
                  <h3>{{ mp.title ? mp.title : "" }}</h3>
                  <!-- {{ Object.keys(mp) }}
                  <p>title: {{ mp.title ? mp.title : "" }}</p>
                  <p>id: {{ mp.id ? mp.id : "" }}</p>
                  <p>
                    updated_at:
                    {{ mp.updated_at ? new Date(mp.updated_at).getTime() : "" }}
                  </p>
                  <p>user_id: {{ mp.user_id ? mp.user_id : "" }}</p>
                  <p>slug: {{ mp.slug ? mp.slug : "" }}</p>
                  <p>poll_status: {{ mp.poll_status ? mp.poll_status : "" }}</p>
                  <p>tags: {{ mp.tags ? mp.tags : "" }}</p>
                  <p>user: {{ mp.user ? mp.user : "" }}</p> -->
                  <!-- <span v-html="quillGetHTML(mp.first_post.content)" /> -->
                  <!-- <span v-html="mp.content" /> -->
                  <hr />
                </template>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <!-- Container-fluid Ends-->
  </div>
</template>

<script>
import Quill from "quill"

import { mapGetters, mapActions } from "vuex"
import {
  FETCH_METAFORO_PROPOSALS,
  FIND_PROPOSALS_BY_TITLE,
  GET_METAFORO_PROPOSALS,
  FIND_USER_BY_METAFORO_USER_ID,
  CREATE_PROPOSALS,
  GET_PROPOSAL
} from "@/store/modules/proposal"

export default {
  data() {
    return {
      isFetchProposalsFinished: false,
      metaforoProposals: [],
      proposal: {
        status: "Finished", // finished
        type: "Discussion", // Application, Discussion, Voting
        category: "P3-Proposal", // P1-Proposal, P2-Proposal, P3-Proposal
        categoryId: 20 // Guild:20, P1:14, P2:9, P3:12, 3levels:19
      },
      metaforoUsers: [],
      users: []
    }
  },
  mounted() {
    this.$store
      .dispatch(FETCH_METAFORO_PROPOSALS, this.proposal.categoryId)
      .then((proposals) => {
        // this.metaforoProposals = proposals
        for (let i = 0; i < proposals.length; i++) {
          let p = proposals[i]
          this.metaforoUsers.push(p.user_id)
          if (
            p.title.indexOf("SIP36-") === 0 ||
            p.title.indexOf("SIP-") === 0
          ) {
            console.log("sgn proposal!! ", p.title)
          } else {
            let content = this.quillGetHTML(p.first_post.content)
            this.metaforoProposals.push({
              content,
              ...p
            })
          }
        }
        // this.metaforoProposals.sort((a, b) =>
        //   a.sip > b.sip ? 1 : b.sip > a.sip ? -1 : 0
        // )
        this.metaforoUsers = [...new Set(this.metaforoUsers)]
        this.isFetchProposalsFinished = true
      })
  },
  watch: {
    users: {
      handler: function () {}
    },
    metaforoProposals: {
      handler: function () {}
    }
  },
  methods: {
    async findMetaforoUsers() {
      for (let i = 0; i < this.metaforoUsers.length; i++) {
        const id = this.metaforoUsers[i]
        const user = await this.$store.dispatch(
          FIND_USER_BY_METAFORO_USER_ID,
          id
        )
        this.users.push({ id, user })
        await new Promise((r) => setTimeout(r, 100))
      }
    },
    async uploadProposals() {
      for (let i = 0; i < this.metaforoProposals.length; i++) {
        const thisProposal = this.metaforoProposals[i]
        const proposer = this.users.find((u) => u.id === thisProposal.user_id)
        if (proposer !== null && proposer.user !== null && proposer.user["_id"]) {
          const data = {
            status: this.proposal.status,
            type: this.proposal.type,
            category: this.proposal.category,
            links: [
              {
                title: "Post",
                url: `https://forum.seedao.xyz/thread/${thisProposal.id}`
              }
            ],
            // sip: thisProposal.sip,
            datetime: new Date(thisProposal.updated_at).getTime(),
            title: thisProposal.title,
            // .replace("：", ": ")
            // .replace("  ", " ")
            // .replace("  ", " "),
            content: thisProposal.content,
            tags: thisProposal.tags.map((t) => t.name),
            proposer: proposer.user["_id"]
          }
          const proposals = await this.$store.dispatch(
            FIND_PROPOSALS_BY_TITLE,
            data.title
          )
          console.log(
            `${i + 1}/${this.metaforoProposals.length}${
              thisProposal.sip ? " (" + thisProposal.sip + ")" : ""
            }`
          )
          if (
            !proposals ||
            (Array.isArray(proposals) && proposals.length === 0)
          ) {
            await this.$store.dispatch(CREATE_PROPOSALS, [data])
            await new Promise((r) => setTimeout(r, 5000))
          }
        }else{
          console.log('miss user::', proposer,', ',thisProposal.title)
        }
      }
      // link  https://forum.seedao.xyz/thread/id
      // datetime
      // proposer
      // title
      // content  quillGetHTML(mp.first_post.content)
      // tags
      // 8, 36, 46,47,48,49,50,51,52,53,60,61,62,63,64,65,66
      //
    },
    quillGetHTML(inputDelta) {
      let content = JSON.parse('{"data": ' + inputDelta + "}")
      let finalContent = []
      for (let i = 0; i < content.data.length; i++) {
        let line = content.data[i]
        if (line) {
          if (line.attributes && line.attributes.background) {
            delete line.attributes["background"]
          }
          if (line.attributes && line.attributes.color) {
            delete line.attributes["color"]
          }
          if (line.insert && line.insert.emoji) {
            delete line.insert["emoji"]
          }
          if (line.insert && line.insert.mention) {
            line.insert = line.insert.mention.value
          } else {
            finalContent.push(line)
          }
        }
      }
      var tempCont = document.createElement("div")

      new Quill(tempCont).setContents(finalContent)
      return tempCont.getElementsByClassName("ql-editor")[0].innerHTML
    }
  },
  computed: {
    ...mapGetters([GET_METAFORO_PROPOSALS, GET_PROPOSAL]),
    ...mapActions([
      FETCH_METAFORO_PROPOSALS,
      CREATE_PROPOSALS,
      FIND_PROPOSALS_BY_TITLE,
      FIND_USER_BY_METAFORO_USER_ID
    ])
  }
}
</script>
