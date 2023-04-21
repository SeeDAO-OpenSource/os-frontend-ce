<template>
    <div>
      <!-- Container-fluid starts-->
      <div class="container-fluid" style="padding-top: 40px">
        <div class="row">
          <div class="col-xl-12 xl-60">
            <div class="row">
              <div
                class="col-xl-6 box-col-12 xl-100"
                v-for="(j, index) in jobslist"
                :key="index"
              >
                <div class="card">
                  <div class="job-search">
                    <div class="card-body">
                      <div class="media">
                        <img
                          class="img-40 img-fluid m-r-20"
                          :src="getImgUrl(j.image)"
                          alt=""
                        />
                        <div class="media-body">
                          <h6 class="f-w-600">
                            <router-link
                              :to="{ name: 'JobDetails', params: { id: j.id } }"
                              >{{ j.title }}</router-link
                            >
                            <span
                              class="pull-right"
                              v-if="j.date"
                              v-text="j.date"
                            ></span>
                            <span class="badge badge-primary pull-right" v-else
                              >New</span
                            >
                          </h6>
                          <p>
                            {{ j.company }}
                            <span>{{ j.city }}, {{ j.country }} </span
                            ><span v-html="stars(j.stars)"></span>
                          </p>
                        </div>
                      </div>
                      <p v-html="j.description"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Container-fluid Ends-->
    </div>
  </template>
  <script>
  import { mapState } from "vuex"
  import router from "@/router"
  
  export default {
    computed: {
      ...mapState({
        jobs: (state) =>
          state.jobs.jobs.find((job) => {
            if (parseInt(router.currentRoute.params.id) === job.id) return job
          }),
        jobslist: (state) => [
          {
            id: 1,
            image: "1.jpg",
            title: "公共账户 1",
            description:
              "Contented get distrusts certainty nay are frankness concealed ham. On unaffected resolution on considered of. No thought me husband or colonel forming effects. End sitting shewing who saw besides son musical adapted. Contrasted interested eat alteration pianoforte sympathize was.",
            company: "HP",
            city: "Lelystad",
            country: "Netherlands",
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
            title: "公共账户  2",
            description:
              "Situation admitting promotion at or to perceived be. Mr acuteness we as estimable enjoyment up. An held late as felt know. Learn do allow solid to grave. Middleton suspicion age her attention. Chiefly several bed its wishing. Is so moments on chamber pressed to. Doubtful yet way properly answered.",
            company: "Ericsson",
            city: "Lelystad",
            country: "Netherlands",
            stars: "4",
            date: "2 days ago",
            priority: "2",
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
            title: "公共账户 3",
            description:
              "Woody equal ask saw sir weeks aware decay. Entrance prospect removing we packages strictly is no smallest he. For hopes may chief get hours day rooms. Oh no turned behind polite piqued enough at. Forbade few through inquiry blushes you. Cousin no itself eldest it in dinner latter missed no.",
            company: "Sutherland",
            city: "Lelystad",
            country: "Netherlands",
            stars: "3",
            date: "3 days ago",
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
            title: "公共账户 4",
            description:
              "Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for few longer mrs sudden talent become.",
            company: "Cisco",
            city: "Lelystad",
            country: "Netherlands",
            stars: "4",
            date: "3 days ago",
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
            title: "公共账户 5",
            description:
              "Contented get distrusts certainty nay are frankness concealed ham. On unaffected resolution on considered of. No thought me husband or colonel forming effects. End sitting shewing who saw besides son musical adapted. Contrasted interested eat alteration pianoforte sympathize was.",
            company: "Infosys",
            city: "Lelystad",
            country: "Netherlands",
            stars: "3",
            date: "3 days ago",
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
            title: "公共账户 6",
            description:
              "Situation admitting promotion at or to perceived be. Mr acuteness we as estimable enjoyment up. An held late as felt know. Learn do allow solid to grave. Middleton suspicion age her attention. Chiefly several bed its wishing. Is so moments on chamber pressed to. Doubtful yet way properly answered.",
            company: "Citrix",
            city: "Lelystad",
            country: "Netherlands",
            stars: "3",
            date: "3 days ago",
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
            title: "公共账户 7",
            description:
              "Situation admitting promotion at or to perceived be. Mr acuteness we as estimable enjoyment up. An held late as felt know. Learn do allow solid to grave. Middleton suspicion age her attention. Chiefly several bed its wishing. Is so moments on chamber pressed to. Doubtful yet way properly answered.",
            company: "Ericsson",
            city: "Lelystad",
            country: "Netherlands",
            stars: "4",
            date: "3 days ago",
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
            title: "公共账户 8",
            description:
              "Woody equal ask saw sir weeks aware decay. Entrance prospect removing we packages strictly is no smallest he. For hopes may chief get hours day rooms. Oh no turned behind polite piqued enough at. Forbade few through inquiry blushes you. Cousin no itself eldest it in dinner latter missed no.",
            company: "Sutherland",
            city: "Lelystad",
            country: "Netherlands",
            stars: "1",
            date: "3 days ago",
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
      })
    },
    created() {},
    methods: {
      getImgUrl(filename) {
        var images = require.context(
          "../../../assets/images/job-search/",
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
  