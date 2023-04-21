<template>
  <div>
    <div class="container-fluid" style="padding-top: 40px">
      <div class="row">
        <div class="col-xl-9 xl-60">
          <div class="row">
            <div
              class="card"
              v-for="(job, index) in jobslist"
              :key="index"
              :class="{ 'ribbon-vertical-left-wrapper': job.priority == 1 }"
            >
              <div
                v-if="job.priority == 1"
                class="ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary"
              >
                <i :id="'fire-' + index" class="icofont icofont-fire"></i>
                <b-tooltip :target="'fire-' + index" placement="right"
                  >最近 30 天<br />有 1000 人认领任务</b-tooltip
                >
              </div>
              <div class="job-search">
                <div class="card-body">
                  <div class="media">
                    <!-- <img
                      class="img-40 img-fluid m-r-20"
                      :src="getJobsImgUrl(job.image)"
                      alt=""
                    /> -->
                    <div class="media-body">
                      <h6 class="f-w-600">
                        <router-link to="#"
                          ><h4>
                            <b>{{ job.title }}</b>
                          </h4></router-link
                        >
                        <span
                          class="pull-right"
                          v-if="job.date"
                          v-text="job.date"
                        ></span>
                        <span class="badge badge-primary pull-right" v-else>{{
                          $t("Novice-Task")
                        }}</span>
                      </h6>
                      <p>
                        {{ $t("Task-Issuer") }}：{{ job.company }}
                        <span
                          >, {{ job.city }}&nbsp;&nbsp;|&nbsp;&nbsp;截止日期：
                          {{ job.country }} </span
                        >&nbsp;&nbsp;|&nbsp;&nbsp;建议等级：<span
                          :id="'recommended-level-' + index"
                          v-html="stars(job.stars)"
                        ></span>
                      </p>
                      <b-tooltip
                        :target="'recommended-level-' + index"
                        placement="top"
                        >L{{ job.stars }} 贡献者</b-tooltip
                      >
                    </div>
                  </div>
                  <p v-text="job.description"></p>
                </div>
              </div>
            </div>

            <div class="job-pagination">
              <nav aria-label="Page navigation example">
                <ul class="pagination pagination-primary">
                  <li class="page-item disabled">
                    <a class="page-link" href="#">Previous</a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="#">1</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div class="col-xl-3 xl-40">
          <div
            class="default-according style-1 faq-accordion job-accordion"
            id="accordionoc"
          >
            <div class="row">
              <div class="col-xl-12">
                <b-card no-body>
                  <b-card-header header-tag="div" role="tab">
                    <h5 class="mb-0">
                      <b-button
                        class="btn btn-link pl-0"
                        block
                        v-b-toggle.collapseicon
                        ><h3>任务搜寻</h3></b-button
                      >
                    </h5>
                  </b-card-header>
                  <b-collapse id="collapseicon" visible role="tabpanel">
                    <b-card-body class="filter-cards-view animate-chk">
                      <div class="job-filter">
                        <div class="faq-form">
                          <input
                            class="form-control"
                            type="text"
                            placeholder="标题..."
                          /><feather
                            class="search-icon"
                            type="search"
                          ></feather>
                        </div>
                      </div>
                      <div class="checkbox-animated">
                        <div class="learning-header">
                          <span class="f-w-600"><b>任务分类</b></span>
                        </div>
                        <label class="d-block" for="chk-ani">
                          <input
                            class="checkbox_animated"
                            id="chk-ani"
                            type="checkbox"
                          />Accounting
                        </label>
                        <label class="d-block" for="chk-ani0">
                          <input
                            class="checkbox_animated"
                            id="chk-ani0"
                            type="checkbox"
                          />Design
                        </label>
                        <label class="d-block" for="chk-ani1">
                          <input
                            class="checkbox_animated"
                            id="chk-ani1"
                            type="checkbox"
                          />Development
                        </label>
                        <label class="d-block" for="chk-ani2">
                          <input
                            class="checkbox_animated"
                            id="chk-ani2"
                            type="checkbox"
                          />Management
                        </label>
                      </div>
                      <div class="checkbox-animated mt-0">
                        <div class="learning-header">
                          <span class="f-w-600">截止期限</span>
                        </div>
                        <label class="d-block" for="chk-ani6">
                          <input
                            class="checkbox_animated"
                            id="chk-ani6"
                            type="checkbox"
                          />0-50 hours
                        </label>
                        <label class="d-block" for="chk-ani7">
                          <input
                            class="checkbox_animated"
                            id="chk-ani7"
                            type="checkbox"
                          />50-100 hours
                        </label>
                        <label class="d-block" for="chk-ani8">
                          <input
                            class="checkbox_animated"
                            id="chk-ani8"
                            type="checkbox"
                          />100+ hours
                        </label>
                      </div>
                      <div class="checkbox-animated mt-0">
                        <div class="learning-header">
                          <span class="f-w-600">建议等级</span>
                        </div>
                        <label class="d-block" for="edo-ani">
                          <input
                            class="radio_animated"
                            id="edo-ani"
                            type="radio"
                            name="rdo-ani"
                            checked=""
                          />All Courses
                        </label>
                        <label class="d-block" for="edo-ani1">
                          <input
                            class="radio_animated"
                            id="edo-ani1"
                            type="radio"
                            name="rdo-ani"
                            checked=""
                          />Paid Courses
                        </label>
                        <label class="d-block" for="edo-ani2">
                          <input
                            class="radio_animated"
                            id="edo-ani2"
                            type="radio"
                            name="rdo-ani"
                            checked=""
                          />Free Courses
                        </label>
                      </div>
                      <div class="checkbox-animated mt-0">
                        <div class="learning-header">
                          <span class="f-w-600">发布来源</span>
                        </div>
                        <label class="d-block" for="chk-ani3">
                          <input
                            class="checkbox_animated"
                            id="chk-ani3"
                            type="checkbox"
                          />Registration
                        </label>
                        <label class="d-block" for="chk-ani4">
                          <input
                            class="checkbox_animated"
                            id="chk-ani4"
                            type="checkbox"
                          />Progress
                        </label>
                        <label class="d-block" for="chk-ani5">
                          <input
                            class="checkbox_animated"
                            id="chk-ani5"
                            type="checkbox"
                          />Completed
                        </label>
                      </div>

                      <button class="btn btn-primary text-center" type="button">
                        过滤
                      </button>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>

              <div class="col-xl-12">
                <b-card no-body>
                  <b-card-header header-tag="div" role="tab">
                    <h5 class="mb-0">
                      <b-button
                        class="btn btn-link pl-0"
                        block
                        v-b-toggle.collapseicon1
                        ><h4>任务分类</h4></b-button
                      >
                    </h5>
                  </b-card-header>
                  <b-collapse id="collapseicon1" visible role="tabpanel">
                    <div class="categories">
                      <div class="learning-header">
                        <span class="f-w-600">艺术设计</span>
                      </div>
                      <ul>
                        <li>
                          <a href="#">UI Design </a
                          ><span class="badge badge-primary pull-right"
                            >28</span
                          >
                        </li>
                        <li>
                          <a href="#">UX Design </a
                          ><span class="badge badge-primary pull-right"
                            >35</span
                          >
                        </li>
                        <li>
                          <a href="#">Interface Design </a
                          ><span class="badge badge-primary pull-right"
                            >17</span
                          >
                        </li>
                        <li>
                          <a href="#">User Experience </a
                          ><span class="badge badge-primary pull-right"
                            >26</span
                          >
                        </li>
                      </ul>
                    </div>
                    <div class="categories pt-0">
                      <div class="learning-header">
                        <span class="f-w-600">软件开发</span>
                      </div>
                      <ul>
                        <li>
                          <a href="#">Frontend Development</a
                          ><span class="badge badge-primary pull-right"
                            >48</span
                          >
                        </li>
                        <li>
                          <a href="#">Backend Development</a
                          ><span class="badge badge-primary pull-right"
                            >19</span
                          >
                        </li>
                      </ul>
                    </div>
                  </b-collapse>
                </b-card>
              </div>

              <div class="col-xl-12">
                <b-card no-body>
                  <b-card-header header-tag="div" role="tab">
                    <h5 class="mb-0">
                      <b-button
                        class="btn btn-link pl-0"
                        block
                        v-b-toggle.collapseicon2
                        ><h3>热门任务</h3></b-button
                      >
                    </h5>
                  </b-card-header>
                  <b-collapse id="collapseicon2" visible role="tabpanel">
                    <div class="upcoming-course card-body">
                      <div class="media">
                        <div class="media-body">
                          <span class="f-w-600">{{ $t("Task") }} 5</span
                          ><span class="d-block">{{$t("Task-Issuer")}}：Ricky , {{ $t("City-Hall") }}</span
                          ><span class="d-block"
                            ><i class="fa fa-star font-warning"></i
                            ><i class="fa fa-star font-warning"></i
                            ><i class="fa fa-star font-warning"></i
                            ><i class="fa fa-star font-warning"></i
                            ><i class="fa fa-star-half-o font-warning"></i
                          ></span>
                        </div>
                        <div>
                          <span class="d-block text-center">完成数</span>
                          <h5 class="mb-0 font-primary text-center">36</h5>
                        </div>
                      </div>
                      <div class="media">
                        <div class="media-body">
                          <span class="f-w-600">{{ $t("Task") }}  4</span
                          ><span class="d-block"
                            >Course By <a href="#">Lorem ipsum </a></span
                          ><span class="d-block"
                            ><i class="fa fa-star font-warning"></i
                            ><i class="fa fa-star font-warning"></i
                            ><i class="fa fa-star font-warning"></i
                            ><i class="fa fa-star font-warning"></i
                            ><i class="fa fa-star font-warning"></i
                          ></span>
                        </div>
                        <div>
                          <span class="d-block text-center">完成数</span>
                          <h5 class="mb-0 font-primary text-center">17</h5>
                        </div>
                      </div>
                      <div class="media">
                        <div class="media-body">
                          <span class="f-w-600">{{ $t("Task") }}  8</span
                          ><span class="d-block"
                            >Course By <a href="#">Lorem ipsum </a></span
                          ><span class="d-block"
                            ><i class="fa fa-star font-warning"></i
                            ><i class="fa fa-star font-warning"></i
                            ><i class="fa fa-star font-warning"></i
                            ><i class="fa fa-star font-warning"></i
                            ><i class="fa fa-star-o font-warning"></i
                          ></span>
                        </div>
                        <div>
                          <span class="d-block text-center">完成数</span>
                          <h5 class="mb-0 font-primary text-center">15</h5>
                        </div>
                      </div>
                    </div>
                  </b-collapse>
                </b-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex"
import tooltip from "../uikits/tooltip.vue"

export default {
  components: { tooltip },
  name: "TaskList",
  computed: {
    ...mapGetters({
      specialcourses: "courses/specialcourses",
      normalcourses: "courses/normalcourses"
    }),
    ...mapState({
      jobslist: (state) => [
        {
          id: 1,
          image: "1.jpg",
          title: "任务 1",
          description:
            "Contented get distrusts certainty nay are frankness concealed ham. On unaffected resolution on considered of. No thought me husband or colonel forming effects. End sitting shewing who saw besides son musical adapted. Contrasted interested eat alteration pianoforte sympathize was.",
          company: "Ricky",
          city: "市政厅",
          country: "2023/2/24",
          stars: "5",
          date: "",
          priority: "1",
          resp: [
            { title: "Develop new user-facing features" },
            { title: "Build reusable code and libraries for future use" },
            { title: "Ensure the technical feasibility of UI/UX designs" },
            { title: "Optimize application for maximum speed and scalability" },
            {
              title:
                "Assure that all user input is validated before submitting to back-end"
            },
            { title: "Collaborate with other team members and stakeholders" }
          ],
          reqs: [
            {
              title:
                "Excellent knowledge of browser troubleshooting and debugging practices and techniques"
            },
            {
              title:
                "Knowledge of graphics software such as Adobe Suite, Photoshop etc."
            },
            {
              title:
                "Sense of ownership and pride in your performance and its impact on company’s success"
            },
            { title: "Critical thinker and problem-solving skills" },
            { title: "Good time-management skills" },
            { title: "Great interpersonal and communication skills" },
            { title: "BA in Computer Science or similar relevant field" }
          ],
          skills: [
            {
              title:
                "Proficient understanding of web markup, including HTML5, CSS3"
            },
            {
              title:
                "The ability to work effectively as part of a team is important, since front-end web designers may work closely with marketing staff as well as other web developers"
            },
            {
              title:
                "Basic understanding of server-side CSS pre-processing platforms, such as LESS and SASS"
            },
            {
              title:
                "Basic knowledge of image authoring tools, to be able to crop, resize, or perform small adjustments on an image"
            },
            {
              title:
                "Proficient understanding of cross-browser compatibility issues and ways to work around them"
            }
          ]
        },
        {
          id: 2,
          image: "2.jpg",
          title: "任务 2",
          description:
            "Situation admitting promotion at or to perceived be. Mr acuteness we as estimable enjoyment up. An held late as felt know. Learn do allow solid to grave. Middleton suspicion age her attention. Chiefly several bed its wishing. Is so moments on chamber pressed to. Doubtful yet way properly answered.",
          company: "Ericsson",
          city: "翻译公会",
          country: "2023/3/5",
          stars: "4",
          date: "2 天前",
          priority: "1",
          resp: [
            { title: "Develop new user-facing features" },
            { title: "Build reusable code and libraries for future use" },
            { title: "Ensure the technical feasibility of UI/UX designs" },
            { title: "Optimize application for maximum speed and scalability" },
            {
              title:
                "Assure that all user input is validated before submitting to back-end"
            },
            { title: "Collaborate with other team members and stakeholders" }
          ],
          reqs: [
            {
              title:
                "Excellent knowledge of browser troubleshooting and debugging practices and techniques"
            },
            {
              title:
                "Knowledge of graphics software such as Adobe Suite, Photoshop etc."
            },
            {
              title:
                "Sense of ownership and pride in your performance and its impact on company’s success"
            },
            { title: "Critical thinker and problem-solving skills" },
            { title: "Good time-management skills" },
            { title: "Great interpersonal and communication skills" },
            { title: "BA in Computer Science or similar relevant field" }
          ],
          skills: [
            {
              title:
                "Proficient understanding of web markup, including HTML5, CSS3"
            },
            {
              title:
                "The ability to work effectively as part of a team is important, since front-end web designers may work closely with marketing staff as well as other web developers"
            },
            {
              title:
                "Basic understanding of server-side CSS pre-processing platforms, such as LESS and SASS"
            },
            {
              title:
                "Basic knowledge of image authoring tools, to be able to crop, resize, or perform small adjustments on an image"
            },
            {
              title:
                "Proficient understanding of cross-browser compatibility issues and ways to work around them"
            }
          ]
        },
        {
          id: 3,
          image: "3.jpg",
          title: "任务 3",
          description:
            "Woody equal ask saw sir weeks aware decay. Entrance prospect removing we packages strictly is no smallest he. For hopes may chief get hours day rooms. Oh no turned behind polite piqued enough at. Forbade few through inquiry blushes you. Cousin no itself eldest it in dinner latter missed no.",
          company: "John Doe",
          city: "翻译公会",
          country: "2023/3/5",
          stars: "3",
          date: "3 天前",
          priority: "3",
          resp: [
            { title: "Develop new user-facing features" },
            { title: "Build reusable code and libraries for future use" },
            { title: "Ensure the technical feasibility of UI/UX designs" },
            { title: "Optimize application for maximum speed and scalability" },
            {
              title:
                "Assure that all user input is validated before submitting to back-end"
            },
            { title: "Collaborate with other team members and stakeholders" }
          ],
          reqs: [
            {
              title:
                "Excellent knowledge of browser troubleshooting and debugging practices and techniques"
            },
            {
              title:
                "Knowledge of graphics software such as Adobe Suite, Photoshop etc."
            },
            {
              title:
                "Sense of ownership and pride in your performance and its impact on company’s success"
            },
            { title: "Critical thinker and problem-solving skills" },
            { title: "Good time-management skills" },
            { title: "Great interpersonal and communication skills" },
            { title: "BA in Computer Science or similar relevant field" }
          ],
          skills: [
            {
              title:
                "Proficient understanding of web markup, including HTML5, CSS3"
            },
            {
              title:
                "The ability to work effectively as part of a team is important, since front-end web designers may work closely with marketing staff as well as other web developers"
            },
            {
              title:
                "Basic understanding of server-side CSS pre-processing platforms, such as LESS and SASS"
            },
            {
              title:
                "Basic knowledge of image authoring tools, to be able to crop, resize, or perform small adjustments on an image"
            },
            {
              title:
                "Proficient understanding of cross-browser compatibility issues and ways to work around them"
            }
          ]
        },
        {
          id: 4,
          image: "4.jpg",
          title: "任务 4",
          description:
            "Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for few longer mrs sudden talent become.",
          company: "Cisco",
          city: "翻译公会",
          country: "2023/3/5",
          stars: "4",
          date: "3 天前",
          priority: "4",
          resp: [
            { title: "Develop new user-facing features" },
            { title: "Build reusable code and libraries for future use" },
            { title: "Ensure the technical feasibility of UI/UX designs" },
            { title: "Optimize application for maximum speed and scalability" },
            {
              title:
                "Assure that all user input is validated before submitting to back-end"
            },
            { title: "Collaborate with other team members and stakeholders" }
          ],
          reqs: [
            {
              title:
                "Excellent knowledge of browser troubleshooting and debugging practices and techniques"
            },
            {
              title:
                "Knowledge of graphics software such as Adobe Suite, Photoshop etc."
            },
            {
              title:
                "Sense of ownership and pride in your performance and its impact on company’s success"
            },
            { title: "Critical thinker and problem-solving skills" },
            { title: "Good time-management skills" },
            { title: "Great interpersonal and communication skills" },
            { title: "BA in Computer Science or similar relevant field" }
          ],
          skills: [
            {
              title:
                "Proficient understanding of web markup, including HTML5, CSS3"
            },
            {
              title:
                "The ability to work effectively as part of a team is important, since front-end web designers may work closely with marketing staff as well as other web developers"
            },
            {
              title:
                "Basic understanding of server-side CSS pre-processing platforms, such as LESS and SASS"
            },
            {
              title:
                "Basic knowledge of image authoring tools, to be able to crop, resize, or perform small adjustments on an image"
            },
            {
              title:
                "Proficient understanding of cross-browser compatibility issues and ways to work around them"
            }
          ]
        },
        {
          id: 5,
          image: "5.jpg",
          title: "任务 5",
          description:
            "Contented get distrusts certainty nay are frankness concealed ham. On unaffected resolution on considered of. No thought me husband or colonel forming effects. End sitting shewing who saw besides son musical adapted. Contrasted interested eat alteration pianoforte sympathize was.",
          company: "Infosys",
          city: "翻译公会",
          country: "2023/3/5",
          stars: "3",
          date: "3 天前",
          priority: "5",
          resp: [
            { title: "Develop new user-facing features" },
            { title: "Build reusable code and libraries for future use" },
            { title: "Ensure the technical feasibility of UI/UX designs" },
            { title: "Optimize application for maximum speed and scalability" },
            {
              title:
                "Assure that all user input is validated before submitting to back-end"
            },
            { title: "Collaborate with other team members and stakeholders" }
          ],
          reqs: [
            {
              title:
                "Excellent knowledge of browser troubleshooting and debugging practices and techniques"
            },
            {
              title:
                "Knowledge of graphics software such as Adobe Suite, Photoshop etc."
            },
            {
              title:
                "Sense of ownership and pride in your performance and its impact on company’s success"
            },
            { title: "Critical thinker and problem-solving skills" },
            { title: "Good time-management skills" },
            { title: "Great interpersonal and communication skills" },
            { title: "BA in Computer Science or similar relevant field" }
          ],
          skills: [
            {
              title:
                "Proficient understanding of web markup, including HTML5, CSS3"
            },
            {
              title:
                "The ability to work effectively as part of a team is important, since front-end web designers may work closely with marketing staff as well as other web developers"
            },
            {
              title:
                "Basic understanding of server-side CSS pre-processing platforms, such as LESS and SASS"
            },
            {
              title:
                "Basic knowledge of image authoring tools, to be able to crop, resize, or perform small adjustments on an image"
            },
            {
              title:
                "Proficient understanding of cross-browser compatibility issues and ways to work around them"
            }
          ]
        },
        {
          id: 6,
          image: "6.jpg",
          title: "任务 6",
          description:
            "Situation admitting promotion at or to perceived be. Mr acuteness we as estimable enjoyment up. An held late as felt know. Learn do allow solid to grave. Middleton suspicion age her attention. Chiefly several bed its wishing. Is so moments on chamber pressed to. Doubtful yet way properly answered.",
          company: "Citrix",
          city: "翻译公会",
          country: "2023/3/5",
          stars: "3",
          date: "3 天前",
          priority: "6",
          resp: [
            { title: "Develop new user-facing features" },
            { title: "Build reusable code and libraries for future use" },
            { title: "Ensure the technical feasibility of UI/UX designs" },
            { title: "Optimize application for maximum speed and scalability" },
            {
              title:
                "Assure that all user input is validated before submitting to back-end"
            },
            { title: "Collaborate with other team members and stakeholders" }
          ],
          reqs: [
            {
              title:
                "Excellent knowledge of browser troubleshooting and debugging practices and techniques"
            },
            {
              title:
                "Knowledge of graphics software such as Adobe Suite, Photoshop etc."
            },
            {
              title:
                "Sense of ownership and pride in your performance and its impact on company’s success"
            },
            { title: "Critical thinker and problem-solving skills" },
            { title: "Good time-management skills" },
            { title: "Great interpersonal and communication skills" },
            { title: "BA in Computer Science or similar relevant field" }
          ],
          skills: [
            {
              title:
                "Proficient understanding of web markup, including HTML5, CSS3"
            },
            {
              title:
                "The ability to work effectively as part of a team is important, since front-end web designers may work closely with marketing staff as well as other web developers"
            },
            {
              title:
                "Basic understanding of server-side CSS pre-processing platforms, such as LESS and SASS"
            },
            {
              title:
                "Basic knowledge of image authoring tools, to be able to crop, resize, or perform small adjustments on an image"
            },
            {
              title:
                "Proficient understanding of cross-browser compatibility issues and ways to work around them"
            }
          ]
        },
        {
          id: 7,
          image: "2.jpg",
          title: "任务 7",
          description:
            "Situation admitting promotion at or to perceived be. Mr acuteness we as estimable enjoyment up. An held late as felt know. Learn do allow solid to grave. Middleton suspicion age her attention. Chiefly several bed its wishing. Is so moments on chamber pressed to. Doubtful yet way properly answered.",
          company: "Ericsson",
          city: "翻译公会",
          country: "2023/3/5",
          stars: "4",
          date: "3 天前",
          priority: "7",
          resp: [
            { title: "Develop new user-facing features" },
            { title: "Build reusable code and libraries for future use" },
            { title: "Ensure the technical feasibility of UI/UX designs" },
            { title: "Optimize application for maximum speed and scalability" },
            {
              title:
                "Assure that all user input is validated before submitting to back-end"
            },
            { title: "Collaborate with other team members and stakeholders" }
          ],
          reqs: [
            {
              title:
                "Excellent knowledge of browser troubleshooting and debugging practices and techniques"
            },
            {
              title:
                "Knowledge of graphics software such as Adobe Suite, Photoshop etc."
            },
            {
              title:
                "Sense of ownership and pride in your performance and its impact on company’s success"
            },
            { title: "Critical thinker and problem-solving skills" },
            { title: "Good time-management skills" },
            { title: "Great interpersonal and communication skills" },
            { title: "BA in Computer Science or similar relevant field" }
          ],
          skills: [
            {
              title:
                "Proficient understanding of web markup, including HTML5, CSS3"
            },
            {
              title:
                "The ability to work effectively as part of a team is important, since front-end web designers may work closely with marketing staff as well as other web developers"
            },
            {
              title:
                "Basic understanding of server-side CSS pre-processing platforms, such as LESS and SASS"
            },
            {
              title:
                "Basic knowledge of image authoring tools, to be able to crop, resize, or perform small adjustments on an image"
            },
            {
              title:
                "Proficient understanding of cross-browser compatibility issues and ways to work around them"
            }
          ]
        },
        {
          id: 8,
          image: "2.jpg",
          title: "任务 8",
          description:
            "Woody equal ask saw sir weeks aware decay. Entrance prospect removing we packages strictly is no smallest he. For hopes may chief get hours day rooms. Oh no turned behind polite piqued enough at. Forbade few through inquiry blushes you. Cousin no itself eldest it in dinner latter missed no.",
          company: "John Doe",
          city: "翻译公会",
          country: "2023/3/5",
          stars: "1",
          date: "3 天前",
          priority: "8",
          resp: [
            { title: "Develop new user-facing features" },
            { title: "Build reusable code and libraries for future use" },
            { title: "Ensure the technical feasibility of UI/UX designs" },
            { title: "Optimize application for maximum speed and scalability" },
            {
              title:
                "Assure that all user input is validated before submitting to back-end"
            },
            { title: "Collaborate with other team members and stakeholders" }
          ],
          reqs: [
            {
              title:
                "Excellent knowledge of browser troubleshooting and debugging practices and techniques"
            },
            {
              title:
                "Knowledge of graphics software such as Adobe Suite, Photoshop etc."
            },
            {
              title:
                "Sense of ownership and pride in your performance and its impact on company’s success"
            },
            { title: "Critical thinker and problem-solving skills" },
            { title: "Good time-management skills" },
            { title: "Great interpersonal and communication skills" },
            { title: "BA in Computer Science or similar relevant field" }
          ],
          skills: [
            {
              title:
                "Proficient understanding of web markup, including HTML5, CSS3"
            },
            {
              title:
                "The ability to work effectively as part of a team is important, since front-end web designers may work closely with marketing staff as well as other web developers"
            },
            {
              title:
                "Basic understanding of server-side CSS pre-processing platforms, such as LESS and SASS"
            },
            {
              title:
                "Basic knowledge of image authoring tools, to be able to crop, resize, or perform small adjustments on an image"
            },
            {
              title:
                "Proficient understanding of cross-browser compatibility issues and ways to work around them"
            }
          ]
        }
      ]
      //state.jobs.jobs
    })
  },
  methods: {
    getImgUrl(filename) {
      var images = require.context("../../assets/images/faq/", false, /\.jpg$/)
      return images("./" + filename)
    },

    getJobsImgUrl(filename) {
      var images = require.context(
        "../../assets/images/job-search/",
        false,
        /\.jpg$/
      )
      return images("./" + filename)
    },
    stars(count) {
      var stars = ""

      for (var i = 0; i < 5; i++) {
        if (count > i) {
          stars = stars + '<i class="fa fa-star font-warning"></i>'
        } else {
          stars = stars + '<i class="fa fa-star font-warning-o"></i>'
        }
      }

      return stars
    }
  }
}
</script>
