<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid" style="padding-top: 40px">
      <div class="row">
        <div class="col-md-12">
          <px-card :actions="false">
            <div slot="headerCustom">
              <h5>
                <b>{{ $t("Media-Center") }}</b>
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
                                <p>媒体中心管理员</p>
                              </h6>
                              <p>市政厅-媒体中心</p>
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
                                  <span>酸奶</span>
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
                              <h6>媒体渠道</h6>
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
                              <h6>协作成员</h6>
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
                      <th colspan="3">媒体渠道列表</th>
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
                      <th colspan="3">协作成员</th>
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
          { key: "name", label: "名称" },
          { key: "attention", label: "粉丝数/关注数" },
          { key: "accumulativeTotal", label: "累计发文" },
          { key: "lastpush", label: "最后一次推送" },
          { key: "operator", label: "操作" },
        ],
        items: [
          {
            id: 1,
            name: "推特 SeeDAO",
            attention: "1,200,000",
            accumulativeTotal: "325",
            lastpush: "2023/3/12",
          },
          {
            id: 2,
            name: "微信公众号 The SeeDAO",
            attention: "1,200,000",
            accumulativeTotal: "233",
            lastpush: "2023/3/12",
          },
          {
            id: 3,
            name: "Discord SeeDAO",
            attention: "200,000",
            accumulativeTotal: "123",
            lastpush: "2023/3/12",
          },
          {
            id: 4,
            name: "Mirro",
            attention: "200,000",
            accumulativeTotal: "231",
            lastpush: "2023/3/12",
          },
          {
            id: 5,
            name: "小红书",
            attention: "... ...",
            accumulativeTotal: "231",
            lastpush: "2023/3/12",
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
          { key: "name", label: "名称" },
          { key: "actionmedium", label: "活跃媒介" },
          { key: "dispatch", label: "累积发文" },
          { key: "lastaction", label: "最后一次活跃" },
          { key: "operator", label: "操作" },
        ],
        items: [
          {
            id: 1,
            name: "小白",
            actionmedium: "推特、微信公众号",
            dispatch: "325",
            lastaction: "2023/3/12",
          },
          {
            id: 2,
            name: "xxx",
            actionmedium: "推特、微信公众号",
            dispatch: "233",
            lastaction: "2023/3/12",
          },
          {
            id: 3,
            name: "xxx",
            actionmedium: "小红书、Mirro",
            dispatch: "123",
            lastaction: "2023/3/12",
          },
          {
            id: 4,
            name: "xxx",
            actionmedium: "小红书、Mirro",
            dispatch: "231",
            lastaction: "2023/3/12",
          },
          {
            id: 5,
            name: "xxx",
            actionmedium: "小红书、Mirro",
            dispatch: "231",
            lastaction: "2023/3/12",
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