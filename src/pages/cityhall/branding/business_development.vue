<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid" style="padding-top: 40px">
      <div class="row">
        <div class="col-md-12">
          <px-card :actions="false">
            <div slot="headerCustom">
              <h5>
                <b>{{ $t("Business-Development") }}</b>
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
                                <p>商务拓展管理员</p>
                              </h6>
                              <p>市政厅-社区拓展</p>
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
                                  <span>Hal</span>
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
                  :items="items"
                  :fields="tablefields"
                  :filter="filter"
                  :current-page="currentPage"
                  :per-page="perPage"
                >
                  <template slot="thead-top">
                    <tr>
                      <th colspan="3">合作活动列表</th>
                    </tr>
                  </template>
                  <template v-slot:cell(operator)="data">
                    <!-- {{ data.itme }} -->
                    <a href="#" style="padding-right: 10px">编辑</a>
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
        { key: "actionTitle", label: "活动标题" },
        { key: "brand", label: "合作品牌方" },
        { key: "attention", label: "关注成员" },
        { key: "actionInfluence", label: "活动影响力" },
        { key: "operator", label: "操作" },
      ],
      items: [
        {
          id: 1,
          actionTitle: "推特 Space AIGC",
          brand: "DeSchool",
          attention: "43 人",
          actionInfluence: "200,000",
        },
        {
          id: 2,
          actionTitle: "推特 Space AIGC",
          brand: "DAOLINK",
          attention: "xx 人",
          actionInfluence: "200,000",
        },
        {
          id: 3,
          actionTitle: "推特 Space AIGC",
          brand: "-- --",
          attention: "xx 人",
          actionInfluence: "200,000",
        },
        {
          id: 4,
          actionTitle: "推特 Space AIGC",
          brand: "-- --",
          attention: "xx 人",
          actionInfluence: "200,000",
        },
        {
          id: 5,
          actionTitle: "推特 Space AIGC",
          brand: "-- --",
          attention: "xx 人",
          actionInfluence: "200,000",
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
  