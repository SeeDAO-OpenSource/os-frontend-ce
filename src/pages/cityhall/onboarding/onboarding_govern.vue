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
                <b>{{ $t("Onboarding-Govern") }}</b>
              </h5>
              <div class="row" style="padding-top: 20px">
                <div class="col-xl-2 col-md-6 box-col-6 xl-50">
                  <div class="card ecommerce-widget">
                    <div class="p-4 support-ticket-font">
                      <div class="row">
                        <div class="col-12">
                          <h6>三层提案的提案数</h6>
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
                          <h6>参与治理成员数</h6>
                          <h5 class="total-num counter">58</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-6 box-col-6 xl-50">
                  <div class="card ecommerce-widget">
                    <div class="p-4 support-ticket-font">
                      <div class="row">
                        <div class="col-12">
                          <h6>消耗资源数(U/SCR)</h6>
                          <h5 class="total-num counter">
                            5,000 U / 234,000 SCR
                          </h5>
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
                  <h6>三层提案数据概览</h6>
                  <table class="table table-bordered table-striped">
                    <tbody>
                      <tr>
                        <td class="item">
                          <h6 class="p-2 mb-0">层级</h6>
                        </td>
                        <td class="Hours">
                          <h6 class="p-2 mb-0">发起提案数</h6>
                        </td>
                        <td class="Rate">
                          <h6 class="p-2 mb-0">通过提案数</h6>
                        </td>
                        <td class="subtotal">
                          <h6 class="p-2 mb-0">投票人数</h6>
                        </td>
                        <td class="subtotal">
                          <h6 class="p-2 mb-0">消耗资源数</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>P1 提案</label>
                        </td>
                        <td>
                          <p class="itemtext digits">50</p>
                        </td>
                        <td>
                          <p class="itemtext digits">48(95%)</p>
                        </td>
                        <td>
                          <p class="itemtext digits">/</p>
                        </td>
                        <td>
                          <p class="itemtext digits">125,000 SCR</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>P2 提案</label>
                        </td>
                        <td>
                          <p class="itemtext digits">20</p>
                        </td>
                        <td>
                          <p class="itemtext digits">16(80%)</p>
                        </td>
                        <td>
                          <p class="itemtext digits">120</p>
                        </td>
                        <td>
                          <p class="itemtext digits">2000U 230,000 SCR</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>P3 提案</label>
                        </td>
                        <td>
                          <p class="itemtext digits">10</p>
                        </td>
                        <td>
                          <p class="itemtext digits">5(50%)</p>
                        </td>
                        <td>
                          <p class="itemtext digits">30</p>
                        </td>
                        <td>
                          <p class="itemtext digits">10000U 500,000 SCR</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <b-row>
                <div class="form-group col-md-2">
                  <div class="form-inline">
                    <div class="form-group mb-0">
                      <label>身份：</label>
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
                    <a href="#">邀请投票</a>
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
      levelOptions: [{ value: 1, text: "SGN" }],
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
        { key: "level", label: "身份", sortable: true },
        { key: "salary", label: "最后投票时间", sortable: true },
        { key: "office", label: "投票P2提案数", sortable: true },
        { key: "extn", label: "投票P3提案数", sortable: true },
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
        },
        {
          id: 12,
          profile: "user/12.png",
          level: "",
          salary: "",
          office: "",
          skill: "",
          extn: "",
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
        },
      ],

      filter: null,
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [5, 10, 15],
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