<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid" style="padding-top: 40px">
      <div class="row">
        <div class="col-md-12">
          <px-card :actions="false">
            <div slot="headerCustom">
              <h5>
                <b>{{ $t("City-Liaisons") }}</b>
              </h5>
              <div class="row" style="margin-top: 20px">
                <div class="col-xl-12 xl-60">
                  <div class="row">
                    <div class="col-xl-6 box-col-12 xl-100">
                      <div class="card">
                        <div class="card-body">
                          <div class="media">
                            <div class="media-body">
                              <h6 class="f-w-600">
                                <p>城市联络人管理员</p>
                              </h6>
                              <p>城市联络人签头人</p>
                              <div class="d-flex">
                                <ul style="padding-right: 10px">
                                  <li class="d-inline-block">
                                    <img
                                      class="img-60 rounded-circle"
                                      :src="getImgUrl('user/1.jpg')"
                                      alt=""
                                      title=""
                                    />
                                  </li>
                                </ul>
                                <p>
                                  <span>Grace</span>
                                  <span>有效期至2023/6/31</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-2 col-md-6 box-col-6 xl-50">
                      <div class="card ecommerce-widget">
                        <div class="p-4 support-ticket-font">
                          <div class="row">
                            <div class="col-12">
                              <h6>线下据点</h6>
                              <h5 class="total-num counter">35</h5>
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
                              <h6>联络人数量</h6>
                              <h5 class="total-num counter">200</h5>
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
                              <h6>影响力</h6>
                              <h5 class="total-num counter">130 k</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                        <div v-for="stage in stages" :slot="stage" :key="stage">
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
            <div slot="with-padding">
              <div class="media" xl="6">
                <div class="media-body text-right" style="margin-bottom: 10px">
                  <b-button class="btn-air-primary" variant="primary"
                    >新增</b-button
                  >
                </div>
              </div>
              <div class="table-responsive datatable-vue">
                <b-table
                  show-empty
                  :items="table1.items"
                  :fields="table1.tablefields"
                  :filter="table1.filter"
                  :current-page="table1.currentPage"
                  :per-page="table1.perPage"
                >
                  <template slot="thead-top">
                    <tr>
                      <th colspan="3">线下据点列表</th>
                    </tr>
                  </template>
                  <template v-slot:cell(operator)="data">
                    {{ data.itme }}
                    <a href="#">编辑</a>
                  </template>
                </b-table>
              </div>
              <b-col md="6" class="p-0">
                <b-pagination
                  v-model="table1.currentPage"
                  :total-rows="table1.totalRows"
                  :per-page="table1.perPage"
                  class="my-0"
                ></b-pagination>
              </b-col>
            </div>

            <!--- -->
            <div slot="with-padding">
              <div class="media" xl="6">
                <div class="media-body text-right" style="margin-bottom: 10px">
                  <b-button class="btn-air-primary" variant="primary"
                    >新增</b-button
                  >
                </div>
              </div>
              <div class="table-responsive datatable-vue">
                <b-table
                  show-empty
                  :items="table2.items"
                  :fields="table2.tablefields"
                  :filter="table2.filter"
                  :current-page="table2.currentPage"
                  :per-page="table2.perPage"
                >
                  <template slot="thead-top">
                    <tr>
                      <th colspan="3">联络人列表</th>
                    </tr>
                  </template>
                  <template v-slot:cell(operator)="data">
                    {{ data.itme }}
                    <a href="#">编辑</a>
                  </template>
                </b-table>
              </div>
              <b-col md="6" class="p-0">
                <b-pagination
                  v-model="table2.currentPage"
                  :total-rows="table2.totalRows"
                  :per-page="table2.perPage"
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
import { mapState } from "vuex";
import router from "@/router";

export default {
  computed: {
    ...mapState({
      jobs: (state) =>
        state.jobs.jobs.find((job) => {
          if (parseInt(router.currentRoute.params.id) === job.id) return job;
        }),
    }),
  },
  data() {
    return {
      table1: {
        tablefields: [
          { key: "siteName", label: "据点名称" },
          { key: "siteCreateDay", label: "据点成立时间" },
          { key: "actionCount", label: "活动数量" },
          { key: "actionPople", label: "当前联络人" },
          { key: "lastTime", label: "最后一次活动时间" },
          { key: "operator", label: "操作" },
        ],
        items: [
          {
            id: 1,
            siteName: "北京",
            siteCreateDay: "2023/3",
            actionCount: "3",
            actionPople: "xxx",
            lastTime: "2023/3/12",
          },
          {
            id: 2,
            siteName: "深圳",
            siteCreateDay: "2023/1",
            actionCount: "2",
            actionPople: "xxx",
            lastTime: "2023/3/12",
          },
          {
            id: 3,
            siteName: "香港",
            siteCreateDay: "2023/1",
            actionCount: "2",
            actionPople: "xxx",
            lastTime: "2023/3/12",
          },
          {
            id: 4,
            siteName: "xxx",
            siteCreateDay: "2023/1",
            actionCount: "231",
            actionPople: "xxx",
            lastTime: "2023/3/12",
          },
          {
            id: 5,
            siteName: "xxx",
            siteCreateDay: "2023/1",
            actionCount: "231",
            actionPople: "xxx",
            lastTime: "2023/3/12",
          },
        ],
        filter: null,
        totalRows: 1,
        currentPage: 1,
        perPage: 10,
        pageOptions: [5, 10, 15],
      },
      table2: {
        tablefields: [
          { key: "member", label: "成员" },
          { key: "site", label: "据点" },
          { key: "timeline", label: "任期" },
          { key: "operator", label: "操作" },
        ],
        items: [
          {
            id: 1,
            member: "xxx",
            site: "深圳",
            timeline: "2023/3-2023/5",
          },
          {
            id: 2,
            member: "xxx",
            site: "香港",
            timeline: "2023/3-2023/5",
          },
          {
            id: 3,
            member: "xxx",
            site: "北京",
            timeline: "2023/3-2023/5",
          },
          {
            id: 4,
            member: "xxx",
            site: "台湾",
            timeline: "2023/3-2023/5",
          },
          {
            id: 5,
            member: "xxx",
            site: "... ...",
            timeline: "2023/3-2023/5",
          },
        ],
        filter: null,
        totalRows: 1,
        currentPage: 1,
        perPage: 10,
        pageOptions: [5, 10, 15],
      },
      stages: ["待办", "处理中", "已完成"],
      blocks: [
        {
          id: 1,
          status: "待办",
          title: "迪拜线下活动筹备中",
          date: "24/7/20",
          badge: "Argent",
          badgetype: "badge-danger",
          location: "Themeforest, australia",
        },
        {
          id: 2,
          status: "待办",
          title: "DAO Hongkong 活动筹备",
          date: "20/9/20",
          badge: "medium",
          badgetype: "badge-primary",
          location: "Pixelstrap, New york",
        },
        {
          id: 3,
          status: "待办",
          title: "一年一度线下聚会",
          date: "10/11/20",
          badge: "low",
          badgetype: "badge-success",
          location: "Pixelstrap, New york",
        },
        {
          id: 4,
          status: "待办",
          title: "See u in Beijing",
          date: "03/09/20",
          badge: "Argent",
          badgetype: "badge-danger",
          location: "Themeforest, australia",
        },
        {
          id: 5,
          status: "待办",
          title: "城市联络人招募",
          date: "24/12/20",
          badge: "medium",
          badgetype: "badge-primary",
          location: "Themeforest, australia",
        },
        {
          id: 6,
          status: "done",
          title: "Test Sidebar",
          date: "31/11/20",
          badge: "Argent",
          badgetype: "badge-danger",
          location: "Pixelstrap, New york",
        },
      ],
    };
  },
  created() {},
  methods: {
    getImgUrl(filename) {
      return require("@/assets/images/" + filename);
    },
  },
};
</script>