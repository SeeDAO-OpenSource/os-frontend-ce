<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid" style="padding-top: 40px">
      <div class="row">
        <div class="col-md-12">
          <px-card :actions="false">
            <div slot="headerCustom">
              <h5>
                <b>{{ $t("OS-Permissions") }}</b>
              </h5>
              <span
                >OS权限管理会设置一个最高管理员，由他来mint其他市政厅成员及相应SBT的发放。</span
              >
              <div class="row" style="margin-top: 20px">
                <div class="col-xl-12">
                  <div class="row">
                    <div class="col-xl-6 box-col-6 xl-40">
                      <div class="card" style="height: 100%">
                        <div class="card-body">
                          <div class="media">
                            <div class="media-body">
                              <h6 class="f-w-600">
                                <p>OS 最高管理员</p>
                              </h6>
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
                    <div class="col-xl-6 box-col-6 xl-40">
                      <div class="card ecommerce-widget" style="height: 100%">
                        <div class="p-4 support-ticket-font">
                          <div class="row">
                            <div class="col-12">
                              <h6>子管理员数</h6>
                              <h5 class="total-num counter">56</h5>
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
              <div class="table-responsive datatable-vue">
                <b-table
                  show-empty
                  :items="table1.items"
                  :fields="table1.tablefields"
                  :filter="table1.filter"
                  :current-page="table1.currentPage"
                  :per-page="table1.perPage"
                >
                  <template v-slot:cell(operator)="data">
                    <QueryContact :id="data.item.id" :item="data.item" />
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
import QueryContact from "./components/Query_contact.vue";

export default {
  components: {
    QueryContact,
  },
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
          { key: "model", label: "功能模块" },
          { key: "sbtpermissions", label: "管理员权限 SBT" },
          { key: "ownerpermissions", label: "拥有权限" },
          { key: "smembercount", label: "子管理员数" },
          { key: "operator", label: "操作" },
        ],
        items: [
          {
            id: 1,
            model: "任务",
            sbtpermissions: "OS 最高管理员",
            ownerpermissions: "全部权限",
            smembercount: "5",
          },
          {
            id: 2,
            model: "积分",
            sbtpermissions: "OS 最高管理员",
            ownerpermissions: "全部权限",
            smembercount: "25",
          },
          {
            id: 3,
            model: "活动",
            sbtpermissions: "OS 最高管理员",
            ownerpermissions: "全部权限",
            smembercount: "2",
          },
          {
            id: 4,
            model: "悬赏",
            sbtpermissions: "OS 最高管理员",
            ownerpermissions: "全部权限",
            smembercount: "4",
          },
          {
            id: 5,
            model: "提案",
            sbtpermissions: "OS 最高管理员",
            ownerpermissions: "全部权限",
            smembercount: "2",
          },
          {
            id: 6,
            model: "社区治理",
            sbtpermissions: "OS 最高管理员",
            ownerpermissions: "全部权限",
            smembercount: "4",
          },
          {
            id: 7,
            model: "公共教育",
            sbtpermissions: "OS 最高管理员",
            ownerpermissions: "全部权限",
            smembercount: "5",
          },
          {
            id: 8,
            model: "资源下载",
            sbtpermissions: "OS 最高管理员",
            ownerpermissions: "全部权限",
            smembercount: "2",
          },
          {
            id: 9,
            model: "公会",
            sbtpermissions: "OS 最高管理员",
            ownerpermissions: "全部权限",
            smembercount: "3",
          },
          {
            id: 10,
            model: "市政厅",
            sbtpermissions: "OS 最高管理员",
            ownerpermissions: "全部权限",
            smembercount: "4",
          },
          {
            id: 11,
            model: "外联合作数据库",
            sbtpermissions: "OS 最高管理员",
            ownerpermissions: "全部权限",
            smembercount: "5",
          },
          {
            id: 12,
            model: "商务拓展",
            sbtpermissions: "OS 最高管理员",
            ownerpermissions: "全部权限",
            smembercount: "5",
          },
          {
            id: 13,
            model: "媒体中心",
            sbtpermissions: "OS 最高管理员",
            ownerpermissions: "全部权限",
            smembercount: "5",
          },
          {
            id: 14,
            model: "城市联络人",
            sbtpermissions: "OS 最高管理员",
            ownerpermissions: "全部权限",
            smembercount: "5",
          },
          {
            id: 15,
            model: "协作工具",
            sbtpermissions: "OS 最高管理员",
            ownerpermissions: "全部权限",
            smembercount: "5",
          },
          {
            id: 16,
            model: "链上合约",
            sbtpermissions: "OS 最高管理员",
            ownerpermissions: "全部权限",
            smembercount: "5",
          },
          {
            id: 17,
            model: "云服务",
            sbtpermissions: "OS 最高管理员",
            ownerpermissions: "全部权限",
            smembercount: "6",
          },
          {
            id: 18,
            model: "SBT",
            sbtpermissions: "OS 最高管理员",
            ownerpermissions: "全部权限",
            smembercount: "25",
          },
        ],
        filter: null,
        totalRows: 1,
        currentPage: 1,
        perPage: 20,
        pageOptions: [10, 20, 30],
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