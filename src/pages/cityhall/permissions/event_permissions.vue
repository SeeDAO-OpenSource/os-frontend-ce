<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid" style="padding-top: 40px">
      <div class="row">
        <div class="col-md-12">
          <px-card :actions="false">
            <div slot="headerCustom">
              <h5>
                <b>{{ $t("Event-Permissions") }}</b>
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
                                <p>活动管理员</p>
                              </h6>
                              <p>市政厅-品牌负责人</p>
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
                                  <span>唐晗</span>
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
                      <th colspan="3">系统权限列表</th>
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
          { key: "sbt", label: "SBT 身分验证" },
          { key: "permission", label: "权限" },
          { key: "members", label: "成员" },
          { key: "operator", label: "操作" },
        ],
        items: [
          {
            id: 1,
            sbt: "媒体中心",
            permission: "置顶活动、设置展示区域",
            members: "Demian",
          },
          {
            id: 2,
            sbt: "社区拓展",
            permission: "置顶活动、设置展示区域",
            members: "白鱼、唐晗、Shawn",
          },
          {
            id: 3,
            sbt: "城市联络签头人",
            permission: "发起线下活动",
            members: "Grace",
          },
          {
            id: 4,
            sbt: "城市联络人",
            permission: "发起线下活动",
            members: "...10位成员",
          },
          {
            id: 5,
            sbt: "SeeDAO 成员",
            permission: "发起线上活动、关注活动",
            members: "99+位成员",
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