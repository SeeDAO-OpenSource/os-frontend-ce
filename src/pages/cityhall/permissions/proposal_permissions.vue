<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid" style="padding-top: 40px">
      <div class="row">
        <div class="col-md-12">
          <px-card :actions="false">
            <div slot="headerCustom">
              <h5>
                <b>{{ $t("Proposal-Permissions") }}</b>
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
                                <p>提案管理员</p>
                              </h6>
                              <p>市政厅-治理负责人</p>
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
                                  <span>白鱼</span>
                                  <span>有效期至2023/6/31</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <span>List of ticket opend by customers</span> -->
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
            <div style="margin-top: 30px" slot="with-padding">
              <h5>提案参数</h5>
              <div class="media" xl="6">
                <div class="media-body text-right" style="margin-bottom: 10px">
                  <b-button class="btn-air-primary" variant="primary"
                    >编辑</b-button
                  >
                </div>
              </div>
              <table class="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>P1 提案</th>
                    <th>P2 提案</th>
                    <th>P3 提案</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>预算上限</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>SCR</td>
                    <td>20K</td>
                    <td>50K</td>
                    <td>不超过当季预算</td>
                  </tr>
                  <tr>
                    <td>USDT</td>
                    <td></td>
                    <td>1,000</td>
                    <td>100,000</td>
                  </tr>

                  <tr>
                    <td>提交提案后</td>
                    <td>3天公示</td>
                    <td>5天公示</td>
                    <td>10天公示</td>
                  </tr>
                  <tr>
                    <td>通过条件</td>
                    <td>市政厅不否决</td>
                    <td>
                      1.30个SGN参与投票<br />
                      2.同意票超过50%<br />
                      3.市政厅不否决<br />
                    </td>
                    <td>
                      1.25%当季节点参与投票<br />
                      2.同意票超过50%<br />
                      3.市政厅不否决<br />
                    </td>
                  </tr>
                  <tr>
                    <td>首付上限</td>
                    <td>50%</td>
                    <td>50%</td>
                    <td>50%</td>
                  </tr>
                  <tr>
                    <td>提案完结</td>
                    <td>
                      1.提交结项报告<br />
                      2.P1小额委员会评估<br />
                    </td>
                    <td>
                      1.提交结项报告<br />
                      2.30个SGN参与投票，决定按照0%，30%，80%，100%，120%五档评价<br />
                      3.市政厅不否决<br />
                    </td>
                    <td>
                      1.提交结项报告<br />
                      2.25%当季节点参与投票，决定按照0%，30%，80%，100%，120%五档评价<br />
                      3.市政厅不否决<br />
                    </td>
                  </tr>
                </tbody>
              </table>
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
          { key: "sbt", label: "SBT 身分验证" },
          { key: "permission", label: "权限" },
          { key: "members", label: "成员" },
          { key: "operator", label: "操作" },
        ],
        items: [
          {
            id: 1,
            sbt: "治理工程师",
            permission: "治理参数调整",
            members: "Demian",
          },
          {
            id: 2,
            sbt: "P1 小额委员会",
            permission: "P1 提案 Review",
            members: "白鱼、唐晗、Shawn",
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
          { key: "sbt", label: "角色" },
          { key: "permission", label: "权限" },
          { key: "operator", label: "操作" },
        ],
        items: [
          {
            id: 1,
            sbt: "活动管理员",
            permission: "全部权限",
          },
          {
            id: 2,
            sbt: "活动发起人",
            permission: "编辑活动、删除活动",
          },
          {
            id: 3,
            sbt: "活动参与者",
            permission: "评价活动",
          },
        ],
        filter: null,
        totalRows: 1,
        currentPage: 1,
        perPage: 10,
        pageOptions: [5, 10, 15],
      },
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