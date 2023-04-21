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
              <h5>
                <b>{{ $t("Onboarding-News") }}</b>
              </h5>
              <div class="row" style="padding-top: 20px">
                <div class="col-xl-2 col-md-6 box-col-6 xl-50">
                  <div class="card ecommerce-widget">
                    <div class="p-4 support-ticket-font">
                      <div class="row">
                        <div class="col-12">
                          <h6>报名人数</h6>
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
                          <h6>出营人数</h6>
                          <h5 class="total-num counter">400</h5>
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
                          <h6>推荐度</h6>
                          <h5 class="total-num counter">95%</h5>
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
                  <h6>新手村数据概览</h6>
                  <table class="table table-bordered table-striped">
                    <tbody>
                      <tr>
                        <td class="item">
                          <h6 class="p-2 mb-0">期数</h6>
                        </td>
                        <td class="Hours">
                          <h6 class="p-2 mb-0">开营时间</h6>
                        </td>
                        <td>
                          <h6 class="p-2 mb-0">导师</h6>
                        </td>
                        <td class="Rate">
                          <h6 class="p-2 mb-0">报名人数</h6>
                        </td>
                        <td class="subtotal">
                          <h6 class="p-2 mb-0">出营人数</h6>
                        </td>
                        <td class="subtotal">
                          <h6 class="p-2 mb-0">推荐度</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>第0期</label>
                        </td>
                        <td>
                          <p class="itemtext digits">2023/3/5</p>
                        </td>
                        <td>
                          <p class="itemtext digits">定慧</p>
                        </td>
                        <td>
                          <p class="itemtext digits">5%</p>
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
                          <label>第1期</label>
                        </td>
                        <td>
                          <p class="itemtext digits">2023/3/19</p>
                        </td>
                        <td>
                          <p class="itemtext digits">定慧</p>
                        </td>
                        <td>
                          <p class="itemtext digits">10%</p>
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
                          <label>第2期</label>
                        </td>
                        <td>
                          <p class="itemtext digits">2023/3/4</p>
                        </td>
                        <td>
                          <p class="itemtext digits">Vincent</p>
                        </td>
                        <td>
                          <p class="itemtext digits">5%</p>
                        </td>
                        <td>
                          <p class="itemtext digits">5%</p>
                        </td>
                        <td>
                          <p class="itemtext digits">70%</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <div>
                  <b-card no-body>
                    <b-card-header header-tag="header" role="tab" class="p-2">
                      <b-button
                        size="lg"
                        v-b-toggle.simpleaccordion-1
                        variant="default"
                      >
                        <i class="fa fa-caret-square-o-down"></i>
                        代办事项
                      </b-button>
                    </b-card-header>
                    <b-collapse
                      id="simpleaccordion-1"
                      accordion="myaccordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <kanban-board :stages="stages" :blocks="blocks">
                          <div
                            v-for="stage in stages"
                            :slot="stage"
                            :key="stage"
                          >
                            <div class="kanban-title-board">{{ stage }}</div>
                          </div>
                          <div
                            v-for="block in blocks"
                            :slot="block.id"
                            :key="block.id"
                          >
                            <a class="kanban-box" href="#">
                              <h6>{{ block.title }}</h6>
                            </a>
                          </div>
                        </kanban-board>
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                  <div></div>
                </div>
              </div>
              <b-row>
                <div class="form-group col-md-2">
                  <div class="form-inline">
                    <div class="form-group mb-0">
                      <label>期数：</label>
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
                      <label>最后活跃日期：</label>
                      <b-form-select
                        v-model="SourceSelected"
                        :options="SourceOptions"
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
                      placeholder="输入昵称/钱包地址进行检索"
                    ></b-form-input>
                    <b-input-group-append>
                      <b-button :disabled="!filter" @click="filter = ''"
                        >Search</b-button
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
                    <a href="#">发布任务</a>
                    <br />
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
export default {
  components: {},
  data() {
    return {
      levelSelected: 1,
      levelOptions: [
        { value: 0, text: "第0期" },
        { value: 1, text: "第1期" },
        { value: 2, text: "第2期" },
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
        { key: "name", label: "昵称", sortable: true },
        { key: "level", label: "期数", sortable: true },
        { key: "salary", label: "完成任务", sortable: true },
        { key: "office", label: "积分数", sortable: true },
        { key: "extn", label: "最后活跃日期", sortable: true },
        { key: "status", label: "状态", sortable: true },
        { key: "operator", label: "操作" },
      ],

      items: [
        {
          id: 1,
          profile: "user/1.jpg",
          name: "Tiger Nixon",
          level: "",
          salary: "",
          office: "",
          skill: "",
          extn: "",
          status: "",
        },
        {
          id: 2,
          profile: "user/2.png",
          name: "Garrett Winters",
          level: "",
          salary: "",
          office: "",
          skill: "",
          extn: "",
          status: "",
        },
        {
          id: 3,
          profile: "user/3.png",
          name: "Ashton Cox",
          level: "",
          salary: "",
          office: "",
          skill: "",
          extn: "",
          status: "",
        },
        {
          id: 4,
          profile: "user/4.jpg",
          name: "Cedric Kelly",
          level: "",
          salary: "",
          office: "",
          skill: "",
          extn: "",
          status: "",
        },
        {
          id: 5,
          profile: "user/5.jpg",
          name: "Airi Satou",
          level: "",
          salary: "",
          office: "",
          skill: "",
          extn: "",
          status: "",
        },
        {
          id: 6,
          profile: "user/6.jpg",
          name: "Brielle Williamson",
          level: "",
          salary: "",
          office: "",
          skill: "",
          extn: "",
          status: "",
        },
        {
          id: 7,
          profile: "user/7.jpg",
          name: "Herrod Chandler",
          level: "",
          salary: "",
          office: "",
          skill: "",
          extn: "",
          status: "",
        },
        {
          id: 8,
          profile: "user/8.jpg",
          name: "Rhona Davidson",
          level: "",
          salary: "",
          office: "",
          skill: "",
          extn: "",
          status: "",
        },
        {
          id: 9,
          profile: "user/9.jpg",
          name: "Colleen Hurst",
          level: "",
          salary: "",
          office: "",
          skill: "",
          extn: "",
          status: "",
        },
        {
          id: 10,
          profile: "user/10.jpg",
          name: "Sonya Frost",
          level: "",
          salary: "",
          office: "",
          skill: "",
          extn: "",
          status: "",
        },
        {
          id: 11,
          profile: "user/11.png",
          name: "Jena Gaines",
          level: "",
          salary: "",
          office: "",
          skill: "",
          extn: "",
          status: "",
        },
        {
          id: 12,
          profile: "user/12.png",
          level: "",
          salary: "",
          office: "",
          skill: "",
          extn: "",
          status: "",
        },
        {
          id: 13,
          profile: "user/1.jpg",
          name: "Charde Marshall",
          level: "",
          salary: "",
          office: "",
          skill: "",
          extn: "",
          status: "",
        },
        {
          id: 14,
          profile: "user/2.png",
          name: "Haley Kennedy",
          level: "",
          salary: "",
          office: "",
          skill: "",
          extn: "",
          status: "",
        },
        {
          id: 15,
          profile: "user/3.png",
          name: "Tatyana Fitzpatrick",
          level: "",
          salary: "",
          office: "",
          skill: "",
          extn: "",
          status: "",
        },
        {
          id: 16,
          profile: "user/4.jpg",
          name: "Michael Silva",
          level: "",
          salary: "",
          office: "",
          skill: "",
          extn: "",
          status: "",
        },
        {
          id: 17,
          profile: "user/5.jpg",
          name: "Paul Byrd",
          level: "",
          salary: "",
          office: "",
          skill: "",
          extn: "",
          status: "",
        },
        {
          id: 18,
          profile: "user/6.jpg",
          name: "Gloria Little",
          level: "",
          salary: "",
          office: "",
          skill: "",
          extn: "",
          status: "",
        },
        {
          id: 19,
          profile: "user/7.jpg",
          name: "Bradley Greer",
          level: "",
          salary: "",
          office: "",
          skill: "",
          extn: "",
          status: "",
        },
        {
          id: 20,
          profile: "user/8.jpg",
          name: "Dai Rios",
          level: "",
          salary: "",
          office: "",
          skill: "",
          extn: "",
          status: "",
        },
        {
          id: 21,
          profile: "user/9.jpg",
          name: "Jenette Caldwell",
          level: "",
          salary: "",
          office: "",
          skill: "",
          extn: "",
          status: "",
        },
        {
          id: 22,
          profile: "user/10.jpg",
          name: "Yuri Berry",
          level: "",
          salary: "",
          office: "",
          skill: "",
          extn: "",
          status: "",
        },
        {
          id: 23,
          profile: "user/11.png",
          name: "Caesar Vance",
          level: "",
          salary: "",
          office: "",
          skill: "",
          extn: "",
          status: "",
        },
      ],

      filter: null,
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [5, 10, 15],
      stages: ["待办", "处理中", "已完成"],
      blocks: [
        {
          id: 1,
          status: "待办",
          title: "xxx 已完成 第1阶段任务，期待进一步的互相互动",
          date: "24/7/20",
          badge: "Argent",
          badgetype: "badge-danger",
          location: "Themeforest, australia",
        },
        {
          id: 2,
          status: "待办",
          title: "xxx 已完成 第3阶段任务，期待进一步的互相互动",
          date: "20/9/20",
          badge: "medium",
          badgetype: "badge-primary",
          location: "Pixelstrap, New york",
        },
        {
          id: 3,
          status: "待办",
          title: "xxx 已完成 第2阶段任务，期待进一步的互相互动",
          date: "10/11/20",
          badge: "low",
          badgetype: "badge-success",
          location: "Pixelstrap, New york",
        },
        {
          id: 4,
          status: "待办",
          title: "xxx 已完成 第1阶段任务，期待进一步的互相互动",
          date: "03/09/20",
          badge: "Argent",
          badgetype: "badge-danger",
          location: "Themeforest, australia",
        },
        {
          id: 5,
          status: "待办",
          title: "xxx 已完成 第1阶段任务，期待进一步的互相互动",
          date: "24/12/20",
          badge: "medium",
          badgetype: "badge-primary",
          location: "Themeforest, australia",
        },
        {
          id: 6,
          status: "待办",
          title: "xxx 已完成 第1阶段任务，期待进一步的互相互动",
          date: "31/11/20",
          badge: "Argent",
          badgetype: "badge-danger",
          location: "Pixelstrap, New york",
        },
      ],
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