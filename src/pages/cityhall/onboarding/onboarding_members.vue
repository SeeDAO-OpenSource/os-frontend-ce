<template>
  <div>
    <!-- Container-fluid starts-->
    <div
      class="container-fluid support-ticket-section"
      style="padding-top: 40px"
    >
      <div class="row">
        <div class="col-md-12">
          <px-card :actions="false">
            <div slot="headerCustom">
              <h5><b>贡献者列表</b></h5>
              <div class="row" style="padding-top: 20px">
                <div class="col-xl-2 col-md-6 box-col-6 xl-50">
                  <div class="card ecommerce-widget">
                    <div class="p-4 support-ticket-font">
                      <div class="row">
                        <div class="col-12">
                          <h6>连接钱包数</h6>
                          <h5 class="total-num counter">96,490</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-2 col-md-6 box-col-6 xl-50">
                  <div class="card ecommerce-widget">
                    <div class="p-4 support-ticket-font">
                      <div class="row">
                        <div class="col-12">
                          <h6>SeeDAO 成员数</h6>
                          <h5 class="total-num counter">66,490</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-2 col-md-6 box-col-6 xl-50">
                  <div class="card ecommerce-widget">
                    <div class="p-4 support-ticket-font">
                      <div class="row">
                        <div class="col-12">
                          <h6>贡献者总数</h6>
                          <h5 class="total-num counter">25,490</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div slot="with-padding">
              <div class="row" style="margin-bottom: 20px">
                <div class="table-responsive invoice-table" id="table">
                  <h6>贡献者数据概览</h6>
                  <table class="table table-bordered table-striped">
                    <tbody>
                      <tr>
                        <td class="item">
                          <h6 class="p-2 mb-0">等级</h6>
                        </td>
                        <td class="Hours">
                          <h6 class="p-2 mb-0">标准</h6>
                        </td>
                        <td class="Rate">
                          <h6 class="p-2 mb-0">人数</h6>
                        </td>
                        <td class="subtotal">
                          <h6 class="p-2 mb-0">活跃度</h6>
                        </td>
                        <td class="subtotal">
                          <h6 class="p-2 mb-0">推荐度</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>SeeDAO 新人</label>
                        </td>
                        <td>
                          <p class="itemtext digits">0 - 5k</p>
                        </td>
                        <td>
                          <p class="itemtext digits">5000</p>
                        </td>
                        <td>
                          <p class="itemtext digits">5%</p>
                        </td>
                        <td>
                          <p class="itemtext digits">90%</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>L1 贡献者</label>
                        </td>
                        <td>
                          <p class="itemtext digits">5k - 20k</p>
                        </td>
                        <td>
                          <p class="itemtext digits">3000</p>
                        </td>
                        <td>
                          <p class="itemtext digits">10%</p>
                        </td>
                        <td>
                          <p class="itemtext digits">80%</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>L2 贡献者</label>
                        </td>
                        <td>
                          <p class="itemtext digits">20k - 100k</p>
                        </td>
                        <td>
                          <p class="itemtext digits">1000</p>
                        </td>
                        <td>
                          <p class="itemtext digits">5%</p>
                        </td>
                        <td>
                          <p class="itemtext digits">70%</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>L3 贡献者</label>
                        </td>
                        <td>
                          <p class="itemtext digits">100k - 300k</p>
                        </td>
                        <td>
                          <p class="itemtext digits">500</p>
                        </td>
                        <td>
                          <p class="itemtext digits">5%</p>
                        </td>
                        <td>
                          <p class="itemtext digits">80%</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>L4 贡献者</label>
                        </td>
                        <td>
                          <p class="itemtext digits">300k - 1m</p>
                        </td>
                        <td>
                          <p class="itemtext digits">200</p>
                        </td>
                        <td>
                          <p class="itemtext digits">10%</p>
                        </td>
                        <td>
                          <p class="itemtext digits">90%</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>L5 贡献者</label>
                        </td>
                        <td>
                          <p class="itemtext digits">1m +</p>
                        </td>
                        <td>
                          <p class="itemtext digits">10</p>
                        </td>
                        <td>
                          <p class="itemtext digits">50%</p>
                        </td>
                        <td>
                          <p class="itemtext digits">60%</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>SeeDAO 新人</label>
                        </td>
                        <td>
                          <p class="itemtext digits">0 - 5k</p>
                        </td>
                        <td>
                          <p class="itemtext digits">5000</p>
                        </td>
                        <td>
                          <p class="itemtext digits">5%</p>
                        </td>
                        <td>
                          <p class="itemtext digits">90%</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <b-row>
                <div class="form-group col-md-2">
                  <div class="form-inline">
                    <div class="form-group mb-0">
                      <label>等级：</label>
                      <b-form-select
                        v-model="levelSelected"
                        :options="levelOptions"
                      ></b-form-select>
                    </div>
                  </div>
                </div>
                <div class="form-group col-md-3">
                  <div class="form-inline">
                    <div class="form-group mb-0">
                      <label>最后积分记录：</label>
                      <b-form-select
                        v-model="SourceSelected"
                        :options="SourceOptions"
                      ></b-form-select>
                    </div>
                  </div>
                </div>
                <div class="form-group col-md-3">
                  <div class="form-inline">
                    <div class="form-group mb-0">
                      <label>推存度：</label>
                      <b-form-select
                        v-model="RecommendSelected"
                        :options="RecommendOptions"
                      ></b-form-select>
                    </div>
                  </div>
                </div>
              </b-row>
              <b-row>
                <b-col xl="6">
                  <b-input-group class="datatable-btn">
                    <b-form-input
                      v-model="filter"
                      placeholder="Type to Search"
                    ></b-form-input>
                    <b-input-group-append>
                      <b-button :disabled="!filter" @click="filter = ''"
                        >Clear</b-button
                      >
                    </b-input-group-append>
                  </b-input-group>
                </b-col>
                <b-col xl="6">
                  <b-form-group
                    label-cols="2"
                    label="Per Page"
                    class="mb-0 datatable-select"
                  >
                    <b-form-select
                      v-model="perPage"
                      :options="pageOptions"
                    ></b-form-select>
                  </b-form-group>
                </b-col>
              </b-row>
              <div class="table-responsive datatable-vue">
                <b-table
                  show-empty
                  :items="items"
                  :fields="tablefields"
                  :filter="filter"
                  :current-page="currentPage"
                  :per-page="perPage"
                  @filtered="onFiltered"
                >
                  <template slot="thead-top">
                    <tr>
                      <th colspan="3">贡献者列表</th>
                    </tr>
                  </template>

                  <template v-slot:cell(profile)="data">
                    <img
                      :src="getImgUrl(data.item.profile)"
                      class="rounded-circle img-30 mr-3"
                      :alt="data.item.profile"
                    />
                  </template>

                  <template v-slot:cell(skill)="row">
                    <b-progress
                      class="sm-progress-bar"
                      :value="row.item.skill"
                      :max="maxskill"
                      variant="success"
                      v-if="row.item.skill == 100"
                    ></b-progress>
                    <b-progress
                      class="sm-progress-bar"
                      :value="row.item.skill"
                      :max="maxskill"
                      variant="info"
                      v-if="row.item.skill == 90"
                    ></b-progress>
                    <b-progress
                      class="sm-progress-bar"
                      :value="row.item.skill"
                      :max="maxskill"
                      variant="primary"
                      v-if="row.item.skill == 80"
                    ></b-progress>
                    <b-progress
                      class="sm-progress-bar"
                      :value="row.item.skill"
                      :max="maxskill"
                      variant="warning"
                      v-if="row.item.skill == 70"
                    ></b-progress>
                    <b-progress
                      class="sm-progress-bar"
                      :value="row.item.skill"
                      :max="maxskill"
                      variant="danger"
                      v-if="row.item.skill == 60"
                    ></b-progress>
                    <b-progress
                      class="sm-progress-bar"
                      :value="row.item.skill"
                      :max="maxskill"
                      variant="dark"
                      v-if="row.item.skill == 50"
                    ></b-progress>
                  </template>

                  <template v-slot:cell(operator)="data">
                    <QueryContact :id="data.item.id" />

                    <a href="#">寄送 email</a>
                  </template>
                </b-table>
              </div>

              <b-col md="6" class="p-0">
                <b-pagination
                  v-model="currentPage"
                  :total-rows="totalRows"
                  :per-page="perPage"
                  class="my-0"
                ></b-pagination>
              </b-col>
            </div>
          </px-card>
        </div>
      </div>
    </div>
    <!-- Container-fluid Ends-->
  </div>
</template>
  
  <script>
import NewComerReachRate from "./components/Newcomer_reach_rate.vue";
import L1CompletionRate from "./components/L1_completion_rate.vue";
import L2CompletionRate from "./components/L2_completion_rate.vue";
import L3CompletionRate from "./components/L3_completion_rate.vue";
import L1ProposalRate from "./components/L1_proposal_rate.vue";
import L2ProposalRate from "./components/L2_proposal_rate.vue";
import QueryContact from "./components/Query_contact.vue";
export default {
  components: {
    NewComerReachRate,
    L1CompletionRate,
    L2CompletionRate,
    L3CompletionRate,
    L1ProposalRate,
    L2ProposalRate,
    QueryContact,
  },
  data() {
    return {
      levelSelected: 1,
      levelOptions: [
        { value: 1, text: "level 1" },
        { value: 2, text: "level 2" },
        { value: 3, text: "level 3" },
      ],
      SourceSelected: 1,
      SourceOptions: [
        { value: 1, text: "1 周内" },
        { value: 2, text: "2 周内" },
        { value: 3, text: "1 个月内" },
        { value: 4, text: "3 个月内" },
        { value: 5, text: "6 个月内" },
        { value: 6, text: "1 年内" },
        { value: 3, text: "1 年以上" },
      ],
      RecommendSelected: 1,
      RecommendOptions: [{ value: 1, text: "90%+" }],
      maxskill: 100,
      tablefields: [
        { key: "profile", label: "" },
        { key: "name", label: "姓名", sortable: true },
        { key: "level", label: "等级", sortable: true },
        { key: "salary", label: "积分数", sortable: true },
        { key: "office", label: "最后获得积分日期", sortable: true },
        { key: "extn", label: "任务完成数", sortable: true },
        { key: "operator", label: "操作" },
        // { key: "email", label: "E-mail", sortable: true },
        // { key: "skill", label: "任务完成数", sortable: true },
      ],

      items: [
        {
          id: 1,
          profile: "user/1.jpg",
          name: "Tiger Nixon",
          level: "Level 1",
          salary: "320,800",
          office: "2023/3/15",
          skill: 100,
          extn: "5421",
          email: "t.nixon@datatables.net",
        },
        {
          id: 2,
          profile: "user/2.png",
          name: "Garrett Winters",
          level: "Level 1",
          salary: "170,750",
          office: "2023/3/15",
          skill: 90,
          extn: "8422",
          email: "g.winters@datatables.net",
        },
        {
          id: 3,
          profile: "user/3.png",
          name: "Ashton Cox",
          level: "Level 1",
          salary: "86,000",
          office: "2023/3/15",
          skill: 80,
          extn: "1562",
          email: "a.cox@datatables.net",
        },
        {
          id: 4,
          profile: "user/4.jpg",
          name: "Cedric Kelly",
          level: "Level 1",
          salary: "433,060",
          office: "2023/3/15",
          skill: 70,
          extn: "6224",
          email: "c.kelly@datatables.net",
        },
        {
          id: 5,
          profile: "user/5.jpg",
          name: "Airi Satou",
          level: "Level 1",
          salary: "162,700",
          office: "2023/3/15",
          skill: 60,
          extn: "5407",
          email: "a.satou@datatables.net",
        },
        {
          id: 6,
          profile: "user/6.jpg",
          name: "Brielle Williamson",
          level: "Level 1",
          salary: "372,000",
          office: "New York",
          skill: 50,
          extn: "4804",
          email: "b.williamson@datatables.net",
        },
        {
          id: 7,
          profile: "user/7.jpg",
          name: "Herrod Chandler",
          level: "Level 1",
          salary: "137,500",
          office: "2023/3/15",
          skill: 100,
          extn: "9608",
          email: "h.chandler@datatables.net",
        },
        {
          id: 8,
          profile: "user/8.jpg",
          name: "Rhona Davidson",
          level: "Level 1",
          salary: "327,900",
          office: "2023/3/15",
          skill: 100,
          extn: "6200",
          email: "r.davidson@datatables.net",
        },
        {
          id: 9,
          profile: "user/9.jpg",
          name: "Colleen Hurst",
          level: "Level 1",
          salary: "205,500",
          office: "2023/3/15",
          skill: 90,
          extn: "2360",
          email: "c.hurst@datatables.net",
        },
        {
          id: 10,
          profile: "user/10.jpg",
          name: "Sonya Frost",
          level: "Level 1",
          salary: "103,600",
          office: "2023/3/15",
          skill: 80,
          extn: "1667",
          email: "s.frost@datatables.net",
        },
        {
          id: 11,
          profile: "user/11.png",
          name: "Jena Gaines",
          level: "Level 1",
          salary: "90,560",
          office: "2023/3/15",
          skill: 70,
          extn: "3814",
          email: "j.gaines@datatables.net",
        },
        {
          id: 12,
          profile: "user/12.png",
          name: "Quinn Flynn",
          level: "Level 1",
          salary: "342,000",
          office: "2023/3/15",
          skill: 60,
          extn: "9497",
          email: "q.flynn@datatables.net",
        },
        {
          id: 13,
          profile: "user/1.jpg",
          name: "Charde Marshall",
          level: "Level 1",
          salary: "470,600",
          office: "2023/3/15",
          skill: 50,
          extn: "6741",
          email: "c.marshall@datatables.net",
        },
        {
          id: 14,
          profile: "user/2.png",
          name: "Haley Kennedy",
          level: "Level 1",
          salary: "313,500",
          office: "2023/3/15",
          skill: 100,
          extn: "3597",
          email: "h.kennedy@datatables.net",
        },
        {
          id: 15,
          profile: "user/3.png",
          name: "Tatyana Fitzpatrick",
          level: "Level 1",
          salary: "385,750",
          office: "2023/3/15",
          skill: 90,
          extn: "1965",
          email: "t.fitzpatrick@datatables.net",
        },
        {
          id: 16,
          profile: "user/4.jpg",
          name: "Michael Silva",
          level: "Level 1",
          salary: "198,500",
          office: "2023/3/15",
          skill: 80,
          extn: "1581",
          email: "m.silva@datatables.net",
        },
        {
          id: 17,
          profile: "user/5.jpg",
          name: "Paul Byrd",
          level: "Level 1",
          salary: "725,000",
          office: "2023/3/15",
          skill: 70,
          extn: "3059",
          email: "p.byrd@datatables.net",
        },
        {
          id: 18,
          profile: "user/6.jpg",
          name: "Gloria Little",
          level: "Level 1",
          salary: "237,500",
          office: "2023/3/15",
          skill: 60,
          extn: "1721",
          email: "g.little@datatables.net",
        },
        {
          id: 19,
          profile: "user/7.jpg",
          name: "Bradley Greer",
          level: "Level 1",
          salary: "132,000",
          office: "2023/3/15",
          skill: 50,
          extn: "2558",
          email: "b.greer@datatables.net",
        },
        {
          id: 20,
          profile: "user/8.jpg",
          name: "Dai Rios",
          level: "Level 1",
          salary: "217,500",
          office: "2023/3/15",
          skill: 100,
          extn: "2290",
          email: "d.rios@datatables.net",
        },
        {
          id: 21,
          profile: "user/9.jpg",
          name: "Jenette Caldwell",
          level: "Level 1",
          salary: "345,000",
          office: "2023/3/15",
          skill: 90,
          extn: "1937",
          email: "j.caldwell@datatables.net",
        },
        {
          id: 22,
          profile: "user/10.jpg",
          name: "Yuri Berry",
          level: "Level 1",
          salary: "675,000",
          office: "2023/3/15",
          skill: 80,
          extn: "6154",
          email: "y.berry@datatables.net",
        },
        {
          id: 23,
          profile: "user/11.png",
          name: "Caesar Vance",
          level: "Level 1",
          salary: "106,450",
          office: "2023/3/15",
          skill: 70,
          extn: "8330",
          email: "c.vance@datatables.net",
        },
      ],

      filter: null,
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [5, 10, 15],
    };
  },
  computed: {
    sortOptions() {
      return this.tablefields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
  },
  mounted() {
    this.totalRows = this.items.length;
  },
  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    getImgUrl(path) {
      return require("../../../assets/images/" + path);
    },
  },
};
</script>