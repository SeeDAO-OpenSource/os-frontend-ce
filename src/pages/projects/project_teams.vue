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
              <h5><b>项目成员</b></h5>
              <span>List of ticket opend by customers</span>
            </div>
            <div slot="with-padding">
                <h5><b>成员招募</b></h5><br/>
              <div class="row">
                <kanban-board :stages="stages" :blocks="blocks">
                  <div v-for="stage in stages" :slot="stage" :key="stage">
                    <div class="kanban-title-board">{{ stage }}</div>
                  </div>
                  <div v-for="block in blocks" :slot="block.id" :key="block.id">
                    <a class="kanban-box" href="#">
                      <span class="date">{{ block.date }} </span>
                      <span class="badge f-right" :class="block.badgetype">{{
                        block.badge
                      }}</span>
                      <h6>{{ block.title }}</h6>
                      <div class="media">
                        <img
                          class="img-20 mr-1 rounded-circle"
                          src="../../assets/images/user/3.jpg"
                          alt=""
                          data-original-title=""
                          title=""
                        />
                        <div class="media-body">
                          <p>{{ block.location }}</p>
                        </div>
                      </div>
                      <div class="d-flex mt-3">
                        <ul class="list">
                          <li><i class="fa fa-comments-o"></i>2</li>
                          <li><i class="fa fa-paperclip"></i>2</li>
                          <li><i class="fa fa-eye"></i></li>
                        </ul>
                        <div class="customers">
                          <ul>
                            <li class="d-inline-block mr-3">
                              <p class="f-12">+5</p>
                            </li>
                            <li class="d-inline-block">
                              <img
                                class="img-20 rounded-circle"
                                src="../../assets/images/user/3.jpg"
                                alt=""
                                data-original-title=""
                                title=""
                              />
                            </li>
                            <li class="d-inline-block">
                              <img
                                class="img-20 rounded-circle"
                                src="../../assets/images/user/1.jpg"
                                alt=""
                                data-original-title=""
                                title=""
                              />
                            </li>
                            <li class="d-inline-block">
                              <img
                                class="img-20 rounded-circle"
                                src="../../assets/images/user/5.jpg"
                                alt=""
                                data-original-title=""
                                title=""
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </a>
                  </div>
                </kanban-board>
              </div>
              <hr class="mt-5"/>
              <div class="row mt-5">
                <div class="col-xl-4 col-sm-12">
                  <label for="inputState"><b>选择项目</b></label>
                  <select class="form-control" id="inputState">
                    <option selected>选择...</option>
                    <option>项目 A</option>
                    <option>项目 B</option>
                    <option>项目 C</option>
                  </select>
                </div>
              </div>
              <b-row class="mt-5">
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
                      <th colspan="3">HR Information</th>
                      <th colspan="5">Contact</th>
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
  data() {
    return {
      stages: ["岗位职缺", "报名者", "已面试"],
      blocks: [
        {
          id: 1,
          status: "岗位职缺",
          title: "Test Sidebar",
          date: "24/7/20",
          badge: "Argent",
          badgetype: "badge-danger",
          location: "Themeforest, australia"
        },
        {
          id: 2,
          status: "岗位职缺",
          title: "Design Dashboard",
          date: "20/9/20",
          badge: "medium",
          badgetype: "badge-primary",
          location: "Pixelstrap, New york"
        },
        {
          id: 3,
          status: "报名者",
          title: "Test card",
          date: "10/11/20",
          badge: "low",
          badgetype: "badge-success",
          location: "Pixelstrap, New york"
        },
        {
          id: 4,
          status: "报名者",
          title: "Dashboard issues",
          date: "03/09/20",
          badge: "Argent",
          badgetype: "badge-danger",
          location: "Themeforest, australia"
        },
        {
          id: 5,
          status: "已面试",
          title: "Design Dashboard",
          date: "24/12/20",
          badge: "medium",
          badgetype: "badge-primary",
          location: "Themeforest, australia"
        },
        {
          id: 6,
          status: "已面试",
          title: "Test Sidebar",
          date: "31/11/20",
          badge: "Argent",
          badgetype: "badge-danger",
          location: "Pixelstrap, New york"
        }
      ],
      maxskill: 100,
      tablefields: [
        { key: "profile", label: "" },
        { key: "name", label: "Name", sortable: true },
        { key: "position", label: "Position", sortable: true },
        { key: "salary", label: "Salary", sortable: true },
        { key: "office", label: "Office", sortable: true },
        { key: "skill", label: "Skill", sortable: true },
        { key: "extn", label: "Extn.", sortable: true },
        { key: "email", label: "E-mail", sortable: true }
      ],

      items: [
        {
          profile: "user/1.jpg",
          name: "Tiger Nixon",
          position: "System Architect",
          salary: "$320,800",
          office: "Edinburgh",
          skill: 100,
          extn: "5421",
          email: "t.nixon@datatables.net"
        },
        {
          profile: "user/2.png",
          name: "Garrett Winters",
          position: "Accountant",
          salary: "$170,750",
          office: "Tokyo",
          skill: 90,
          extn: "8422",
          email: "g.winters@datatables.net"
        },
        {
          profile: "user/3.png",
          name: "Ashton Cox",
          position: "Junior Technical Author",
          salary: "$86,000",
          office: "San Francisco",
          skill: 80,
          extn: "1562",
          email: "a.cox@datatables.net"
        },
        {
          profile: "user/4.jpg",
          name: "Cedric Kelly",
          position: "Senior Javascript Developer",
          salary: "$433,060",
          office: "Edinburgh",
          skill: 70,
          extn: "6224",
          email: "c.kelly@datatables.net"
        },
        {
          profile: "user/5.jpg",
          name: "Airi Satou",
          position: "Accountant",
          salary: "$162,700",
          office: "Tokyo",
          skill: 60,
          extn: "5407",
          email: "a.satou@datatables.net"
        },
        {
          profile: "user/6.jpg",
          name: "Brielle Williamson",
          position: "Integration Specialist",
          salary: "$372,000",
          office: "New York",
          skill: 50,
          extn: "4804",
          email: "b.williamson@datatables.net"
        },
        {
          profile: "user/7.jpg",
          name: "Herrod Chandler",
          position: "Sales Assistant",
          salary: "$137,500",
          office: "San Francisco",
          skill: 100,
          extn: "9608",
          email: "h.chandler@datatables.net"
        },
        {
          profile: "user/8.jpg",
          name: "Rhona Davidson",
          position: "Integration Specialist",
          salary: "$327,900",
          office: "Tokyo",
          skill: 100,
          extn: "6200",
          email: "r.davidson@datatables.net"
        },
        {
          profile: "user/9.jpg",
          name: "Colleen Hurst",
          position: "Javascript Developer",
          salary: "$205,500",
          office: "San Francisco",
          skill: 90,
          extn: "2360",
          email: "c.hurst@datatables.net"
        },
        {
          profile: "user/10.jpg",
          name: "Sonya Frost",
          position: "Software Engineer",
          salary: "$103,600",
          office: "Edinburgh",
          skill: 80,
          extn: "1667",
          email: "s.frost@datatables.net"
        },
        {
          profile: "user/11.png",
          name: "Jena Gaines",
          position: "office Manager",
          salary: "$90,560",
          office: "London",
          skill: 70,
          extn: "3814",
          email: "j.gaines@datatables.net"
        },
        {
          profile: "user/12.png",
          name: "Quinn Flynn",
          position: "Support Lead",
          salary: "$342,000",
          office: "Edinburgh",
          skill: 60,
          extn: "9497",
          email: "q.flynn@datatables.net"
        },
        {
          profile: "user/1.jpg",
          name: "Charde Marshall",
          position: "Regional Director",
          salary: "$470,600",
          office: "San Francisco",
          skill: 50,
          extn: "6741",
          email: "c.marshall@datatables.net"
        },
        {
          profile: "user/2.png",
          name: "Haley Kennedy",
          position: "Senior Marketing Designer",
          salary: "$313,500",
          office: "London",
          skill: 100,
          extn: "3597",
          email: "h.kennedy@datatables.net"
        },
        {
          profile: "user/3.png",
          name: "Tatyana Fitzpatrick",
          position: "Regional Director",
          salary: "$385,750",
          office: "London",
          skill: 90,
          extn: "1965",
          email: "t.fitzpatrick@datatables.net"
        },
        {
          profile: "user/4.jpg",
          name: "Michael Silva",
          position: "Marketing Designer",
          salary: "$198,500",
          office: "London",
          skill: 80,
          extn: "1581",
          email: "m.silva@datatables.net"
        },
        {
          profile: "user/5.jpg",
          name: "Paul Byrd",
          position: "Chief Financial officer (CFO)",
          salary: "$725,000",
          office: "New York",
          skill: 70,
          extn: "3059",
          email: "p.byrd@datatables.net"
        },
        {
          profile: "user/6.jpg",
          name: "Gloria Little",
          position: "Systems Administrator",
          salary: "$237,500",
          office: "New York",
          skill: 60,
          extn: "1721",
          email: "g.little@datatables.net"
        },
        {
          profile: "user/7.jpg",
          name: "Bradley Greer",
          position: "Software Engineer",
          salary: "$132,000",
          office: "London",
          skill: 50,
          extn: "2558",
          email: "b.greer@datatables.net"
        },
        {
          profile: "user/8.jpg",
          name: "Dai Rios",
          position: "Personnel Lead",
          salary: "$217,500",
          office: "Edinburgh",
          skill: 100,
          extn: "2290",
          email: "d.rios@datatables.net"
        },
        {
          profile: "user/9.jpg",
          name: "Jenette Caldwell",
          position: "Development Lead",
          salary: "$345,000",
          office: "New York",
          skill: 90,
          extn: "1937",
          email: "j.caldwell@datatables.net"
        },
        {
          profile: "user/10.jpg",
          name: "Yuri Berry",
          position: "Chief Marketing officer (CMO)",
          salary: "$675,000",
          office: "New York",
          skill: 80,
          extn: "6154",
          email: "y.berry@datatables.net"
        },
        {
          profile: "user/11.png",
          name: "Caesar Vance",
          position: "Pre-Sales Support",
          salary: "$106,450",
          office: "New York",
          skill: 70,
          extn: "8330",
          email: "c.vance@datatables.net"
        }
      ],

      filter: null,
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [5, 10, 15]
    }
  },
  computed: {
    sortOptions() {
      return this.tablefields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key }
        })
    }
  },
  mounted() {
    this.totalRows = this.items.length
  },
  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    getImgUrl(path) {
      return require("../../assets/images/" + path)
    }
  }
}
</script>
