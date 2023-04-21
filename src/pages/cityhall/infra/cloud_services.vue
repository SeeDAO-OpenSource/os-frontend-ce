<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid" style="padding-top: 40px">
      <div class="row">
        <div class="col-md-12">
          <px-card :actions="false">
            <div slot="headerCustom">
              <h5>
                <b>{{ $t("Server-Management") }}</b>
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
                                <p>云服务管理员</p>
                              </h6>
                              <p>市政厅-技术负责人</p>
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
                                  <span>Ricky</span>
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
                      <th colspan="3">云服务列表</th>
                      <!-- <th colspan="5">Contact</th> -->
                    </tr>
                  </template>

                  <!-- <template v-slot:cell(profile)="data">
                    <img
                      :src="getImgUrl(data.item.profile)"
                      class="rounded-circle img-30 mr-3"
                      :alt="data.item.profile"
                    />
                  </template> -->
                  <template v-slot:cell(operator)="data">
                    {{ data.itme }}
                    <a href="#">操作</a>
                  </template>
                  <!-- <template v-slot:cell(skill)="row">
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
                  </template> -->

                  <!-- <template v-slot:cell(operator)="data">
                    <QueryContact :id="data.item.id" />

                    <a href="#">寄送 email</a>
                  </template> -->
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
        { key: "serviceName", label: "服务名称" },
        { key: "sbtMange", label: "管理员 SBT" },
        { key: "manger", label: "管理员" },
        { key: "ssbtMange", label: "次级管理员 SBT" },
        { key: "smanger", label: "次级管理员" },
        { key: "operator", label: "操作" },
      ],
      items: [
        {
          id: 1,
          serviceName: "官网",
          sbtMange: "技术负责人",
          manger: "Ricky",
          ssbtMange: "维护工程师",
          smanger: "Alex",
          do: "",
        },
        {
          id: 2,
          serviceName: "APP",
          sbtMange: "技术负责人",
          manger: "Ricky",
          ssbtMange: "维护工程师",
          smanger: "Alex",
          do: "",
        },
        {
          id: 3,
          serviceName: "操作系统",
          sbtMange: "技术负责人",
          manger: "Ricky",
          ssbtMange: "维护工程师",
          smanger: "Alex",
          do: "",
        },
        {
          id: 4,
          serviceName: "节点共识大会",
          sbtMange: "技术负责人",
          manger: "Ricky",
          ssbtMange: "维护工程师",
          smanger: "Alex",
          do: "",
        },
        {
          id: 5,
          serviceName: "孵化器网站",
          sbtMange: "技术负责人",
          manger: "Ricky",
          ssbtMange: "维护工程师",
          smanger: "Alex",
          do: "",
        },
        {
          id: 6,
          serviceName: "Discord 机器人",
          sbtMange: "技术负责人",
          manger: "Ricky",
          ssbtMange: "维护工程师",
          smanger: "Alex",
          do: "",
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
  