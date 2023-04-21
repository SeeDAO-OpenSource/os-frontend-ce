<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid" style="padding-top: 40px">
      <div class="row">
        <div class="col-md-12">
          <px-card :actions="false">
            <div slot="headerCustom">
              <h5>
                <b>{{ $t("Score-Permissions") }}</b>
              </h5>
              <div style="margin-top: 20px">
                <px-card class="earning-card">
                  <div class="row m-0">
                    <div class="col-xl-12 p-0">
                      <div class="chart-right">
                        <div class="row m-0 p-tb">
                          <div class="col-xl-8 col-md-8 col-sm-8 col-12 p-0">
                            <div class="inner-top-left">
                              <ul class="d-flex list-unstyled">
                                <li>{{ $t("This-Season") }}</li>
                                <li>{{ $t("This-Week") }}</li>
                                <li>{{ $t("This-Month") }}</li>
                                <li class="active">{{ $t("All") }}</li>
                              </ul>
                            </div>
                          </div>
                          <div
                            class="col-xl-4 col-md-4 col-sm-4 col-12 p-0 justify-content-end"
                          >
                            <div class="inner-top-right">
                              <ul
                                class="d-flex list-unstyled justify-content-end"
                              >
                                <li>积分发放数量</li>
                                <li>积分获得人数</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-xl-12">
                            <div class="card-body p-0">
                              <div class="current-sale-container">
                                <div id="chart-currently">
                                  <apexchart
                                    height="290"
                                    type="area"
                                    :options="apexDashboard.options"
                                    :series="apexDashboard.series"
                                  ></apexchart>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row border-top m-0">
                        <div class="col-xl-4 pl-0 col-md-6 col-sm-6">
                          <div class="media p-0">
                            <div class="media-left">
                              <i class="icofont icofont-crown"></i>
                            </div>
                            <div class="media-body">
                              <h6>
                                <b>积分上限</b>
                              </h6>
                              <p>50,000,000</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-4 col-md-12 pr-0">
                          <div class="media p-0">
                            <div class="media-left">
                              <i class="icofont icofont-cur-dollar"></i>
                            </div>
                            <div class="media-body">
                              <h6>
                                <b>积分发行数量</b>
                              </h6>
                              <p>352,123,321</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-4 col-md-6 col-sm-6">
                          <div class="media p-0">
                            <div class="media-left bg-secondary">
                              <i class="icofont icofont-heart-alt"></i>
                            </div>
                            <div class="media-body">
                              <h6>
                                <b>积分获得人数</b>
                              </h6>
                              <p>1,123,321</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </px-card>
              </div>
              <div class="row" style="margin-top: 20px">
                <div class="col-xl-12 xl-60">
                  <div class="row">
                    <div class="col-xl-4 col-md-6 box-col-6 xl-50">
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
                    <div class="col-xl-4 col-md-6 box-col-6 xl-50">
                      <div class="card">
                        <div class="card-body">
                          <div class="media">
                            <div class="media-body">
                              <h6 class="f-w-600">
                                <p>组织数</p>
                              </h6>
                              <p>SeeDAO 相关组织</p>
                              <div class="d-flex" style="margin-top: 50px">
                                <h5>5</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4 col-md-6 box-col-6 xl-50">
                      <div class="card">
                        <div class="card-body">
                          <div class="media">
                            <div class="media-body">
                              <h6 class="f-w-600">
                                <p>组织管理员数</p>
                              </h6>
                              <p>个组织管理管理员 SBT 持有者</p>
                              <div class="d-flex" style="margin-top: 50px">
                                <h5>25 人</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                      <th colspan="3">SBT 权限列表</th>
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
                      <th colspan="3">积分审核流程</th>
                    </tr>
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
var primary = localStorage.getItem("primary_color") || "#7366ff";
var secondary = localStorage.getItem("secondary_color") || "#f73164";
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
      apexDashboard: {
        options: {
          chart: {
            width: 685,
            height: 240,
            type: "area",
            toolbar: {
              show: false,
            },
          },
          colors: [primary, secondary],
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
          },
          xaxis: {
            type: "category",
            low: 0,
            offsetX: 0,
            offsetY: 0,
            show: false,
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
              "Jan",
            ],
            labels: {
              low: 0,
              offsetX: 0,
              show: false,
            },
            axisBorder: {
              low: 0,
              offsetX: 0,
              show: false,
            },
          },
          yaxis: {
            low: 0,
            offsetX: 0,
            offsetY: 0,
            show: false,
            labels: {
              low: 0,
              offsetX: 0,
              show: false,
            },
            axisBorder: {
              low: 0,
              offsetX: 0,
              show: false,
            },
          },
          markers: {
            strokeWidth: 3,
            colors: "#ffffff",
            strokeColors: [primary, secondary],
            hover: {
              size: 6,
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.5,
              stops: [0, 80, 100],
            },
          },
          legend: {
            show: false,
          },
          tooltip: {
            x: {
              format: "MM",
            },
          },
          grid: {
            show: false,
            padding: {
              left: 0,
              right: 0,
              bottom: -15,
              top: -40,
            },
          },
        },
        series: [
          {
            name: this.$t("Score-Total-abbr"),
            data: [
              400,
              400 + 900,
              400 + 900,
              400 + 900 + 800,
              400 + 900 + 800 + 1000 + 700,
              400 + 900 + 800 + 1000 + 700 + 1200,
              400 + 900 + 800 + 1000 + 700 + 1200 + 300,
            ],
          },
          {
            name: this.$t("Effective-Score-abbr"),
            data: [
              1000,
              1000 + 500,
              1000 + 500 + 600,
              1000 + 500 + 400,
              1000 + 500 + 600 + 400 + 700,
              1000 + 500 + 600 + 400 + 700,
              1000 + 500 + 600 + 400 + 700 + 200 + 1100,
            ],
          },
        ],
      },
      apexMarketValue: {
        options: {
          chart: {
            width: 505,
            height: 380,
            type: "radar",
            toolbar: {
              show: false,
            },
          },
          colors: [primary],
          dataLabels: {
            enabled: false,
          },
          labels: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          stroke: {
            width: 3,
            curve: "smooth",
          },
          plotOptions: {
            radar: {
              size: 140,
              polygons: {
                fill: {
                  colors: ["#fcf8ff", "#f7eeff"],
                },
              },
            },
          },
          markers: {
            size: 6,
            colors: ["#fff"],
            strokeColor: [primary],
            strokeWidth: 3,
          },
          yaxis: {
            tickAmount: 7,
            labels: {
              formatter: function (val, i) {
                if (i % 2 === 0) {
                  return val;
                } else {
                  return "";
                }
              },
            },
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val;
              },
            },
          },
        },
        series: [
          {
            name: "Market value",
            data: [20, 100, 40, 30, 50, 80, 33],
          },
        ],
      },
      table1: {
        tablefields: [
          { key: "gri", label: "发起组织" },
          { key: "ntegralBudget", label: "积分预算" },
          { key: "creditIssued", label: "已发放积分" },
          { key: "sbtmember", label: "管理员 SBT" },
          { key: "member", label: "管理员" },
          { key: "operator", label: "操作" },
        ],
        items: [
          {
            id: 1,
            gri: "市政厅",
            ntegralBudget: "5m",
            creditIssued: "3000",
            sbtmember: "市政厅-财务官",
            member: "栗子",
          },
          {
            id: 2,
            gri: "孵化器",
            ntegralBudget: "40",
            creditIssued: "1000",
            sbtmember: "孵化器负责人",
            member: "白鱼、唐晗、Shawn",
          },
          {
            id: 3,
            gri: "翻译公会",
            ntegralBudget: "50",
            creditIssued: "500",
            sbtmember: "翻译公会协调小组",
            member: "白鱼、唐晗、Shawn",
          },
          {
            id: 4,
            gri: "投研公会",
            ntegralBudget: "60",
            creditIssued: "200",
            sbtmember: "投研公会协调小组",
            member: "白鱼、唐晗、Shawn",
          },
          {
            id: 5,
            gri: "研发公会",
            ntegralBudget: "90",
            creditIssued: "10",
            sbtmember: "研发公会协调小组",
            member: "白鱼、唐晗、Shawn",
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
          { key: "initiator", label: "提案发起人" },
          { key: "record", label: "提交积分登记记录" },
          { key: "officerAudit", label: "财务官审核" },
          { key: "getApproved", label: "通过审核" },
          { key: "operator", label: "登记" },
        ],
        items: [
          {
            id: 1,
            initiator: "持有对应组织管理员 SBT",
            record: "",
            officerAudit: "",
            getApproved: "未通过审核",
            operator: "不登记",
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