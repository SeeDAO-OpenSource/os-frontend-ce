<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid" style="padding-top: 40px">
      <div class="row">
        <div class="col-md-12">
          <px-card :actions="false">
            <div slot="headerCustom">
              <h5>
                <b>{{ $t("Onchain-Contracts") }}</b>
              </h5>
              <div class="row" style="margin-top: 20px">
                <div class="col-xl-12 xl-60">
                  <div class="row">
                    <div class="col-xl-6 box-col-12 xl-100">
                      <div class="card">
                        <div class="card-body">
                          <div class="media">
                            <!-- <img
                                class="img-40 img-fluid m-r-20"
                                :src="getImgUrl(j.image)"
                                alt=""
                              /> -->
                            <div class="media-body">
                              <h6 class="f-w-600">
                                <p>链上合约管理员</p>
                              </h6>
                              <p>市政厅-维护工程师</p>
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
                                  <span>Alex</span>
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
              <!-- <b-row>
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
              </b-row> -->
              <div class="table-responsive datatable-vue">
                <b-table
                  show-empty
                  :items="items"
                  :fields="tablefields"
                  :filter="filter"
                  :current-page="currentPage"
                  :per-page="perPage"
                >
                  <template slot="thead-top">
                    <tr>
                      <th colspan="3">链上合约列表</th>
                    </tr>
                  </template>
                  <template v-slot:cell(operator)="data">
                    <!-- {{ data.itme }} -->
                    <a href="#" style="padding-right: 10px">复制链结</a>

                    <a href="#">查看</a>
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
      tablefields: [
        { key: "contracts", label: "合约名称" },
        { key: "sbtMange", label: "管理员 SBT" },
        { key: "manger", label: "管理员" },
        { key: "creater", label: "创建者" },
        { key: "describe", label: "描述" },
        { key: "operator", label: "操作" },
      ],
      items: [
        {
          id: 1,
          contracts: "积分合约",
          sbtMange: "维护工程师",
          manger: "Alex",
          creater: "Alex",
          describe: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
        },
        {
          id: 2,
          contracts: "node 合约",
          sbtMange: "维护工程师",
          manger: "Alex",
          creater: "Alex",
          describe: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
        },
        {
          id: 3,
          contracts: "SGN 合约",
          sbtMange: "维护工程师",
          manger: "Alex",
          creater: "Alex",
          describe: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
        },
        {
          id: 4,
          contracts: "POAP 合约",
          sbtMange: "维护工程师",
          manger: "Alex",
          creater: "Alex",
          describe: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
        },
        {
          id: 5,
          contracts: "SBT 合约",
          sbtMange: "维护工程师",
          manger: "Alex",
          creater: "Alex",
          describe: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
        },
      ],
      filter: null,
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [5, 10, 15],
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
  