<template>
  <div>
    <Breadcrumbs main="Project" title="Projects List" />
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 project-list">
          <div class="card">
            <div class="row m-0">
              <div class="col-sm-12 p-0">
                <b-tabs content-class="mt-3">
                  <b-tab active>
                    <template v-slot:title>
                      <feather type="target"></feather> All
                    </template>
                    <b-card-text>
                      <div class="col-sm-12 p-0">
                        <div class="card">
                          <div class="card-body">
                            <div class="row">
                              <div class="col-xl-4 col-lg-6" v-for="(project,index) in allprojects" :key="index" :class="index < 3 ? 'mb-4' : ''">
                                <div class="project-box">
                                  <span class="badge" :class="'badge-'+project.type">{{ project.badge }}</span>
                                  <h6>{{ project.title }}</h6>
                                  <div class="media">
                                    <img class="img-20 mr-1 rounded-circle" :src='getImgUrl(project.img)' alt="" title="">
                                    <div class="media-body">
                                      <p>{{ project.sites }}</p>
                                    </div>
                                  </div>
                                  <p>{{ project.desc }}</p>
                                  <div class="row details">
                                    <div class="col-6">
                                      <span>Issues </span>
                                    </div>
                                    <div class="col-6 text-primary" :class="'text-'+project.type">{{ project.issue }}</div>
                                    <div class="col-6">
                                      <span>Resolved</span>
                                    </div>
                                    <div class="col-6 text-primary" :class="'text-'+project.type">{{ project.resolved }}</div>
                                    <div class="col-6">
                                      <span>Comment</span>
                                    </div>
                                    <div class="col-6 text-primary" :class="'text-'+project.type">{{ project.comment }}</div>
                                  </div>
                                  <div class="customers">
                                    <ul>
                                      <li class="d-inline-block">
                                        <img class="img-30 rounded-circle" :src='getImgUrl(project.customers_img1)' alt="" title=""></li>
                                      <li class="d-inline-block">
                                        <img class="img-30 rounded-circle" :src='getImgUrl(project.customers_img2)' alt="" title=""></li>
                                      <li class="d-inline-block">
                                        <img class="img-30 rounded-circle" :src='getImgUrl(project.customers_img3)' alt="" title=""></li>
                                      <li class="d-inline-block ml-2">
                                        <p class="f-12">+10 More</p>
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="project-status mt-4">
                                    <div class="media mb-0">
                                      <p>{{project.progress}}%</p>
                                      <div class="media-body text-right">
                                        <span>Done</span>
                                      </div>
                                    </div>
                                    <div class="progress" style="height: 5px">
                                      <div
                                        class="progress-bar-animated progress-bar-striped"
                                        :class="'bg-'+project.type"
                                        role="progressbar"
                                        :style= "{'width': project.progress + '%'}"
                                        aria-valuenow="10"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-card-text>
                  </b-tab>
                  <b-tab>
                    <template v-slot:title>
                      <feather type="info"></feather> Doing
                    </template>  
                    <b-card-text>
                      <div class="col-sm-12 p-0">
                        <div class="card">
                          <div class="card-body">
                            <div class="row">
                              <div class="col-xl-4 col-lg-6" v-for="(project,index) in doingprojects" :key="index" :class="index < 3 ? 'mb-4' : ''">
                                <div class="project-box">
                                  <span class="badge" :class="'badge-'+project.type">{{ project.badge }}</span>
                                  <h6>{{ project.title }}</h6>
                                  <div class="media">
                                    <img class="img-20 mr-1 rounded-circle" :src='getImgUrl(project.img)' alt="" title="">
                                    <div class="media-body">
                                      <p>{{ project.sites }}</p>
                                    </div>
                                  </div>
                                  <p>{{ project.desc }}</p>
                                  <div class="row details">
                                    <div class="col-6">
                                      <span>Issues </span>
                                    </div>
                                    <div class="col-6 text-primary" :class="'text-'+project.type">{{ project.issue }}</div>
                                    <div class="col-6">
                                      <span>Resolved</span>
                                    </div>
                                    <div class="col-6 text-primary" :class="'text-'+project.type">{{ project.resolved }}</div>
                                    <div class="col-6">
                                      <span>Comment</span>
                                    </div>
                                    <div class="col-6 text-primary" :class="'text-'+project.type">{{ project.comment }}</div>
                                  </div>
                                  <div class="customers">
                                    <ul>
                                      <li class="d-inline-block">
                                        <img class="img-30 rounded-circle" :src='getImgUrl(project.customers_img1)' alt="" title=""></li>
                                      <li class="d-inline-block">
                                        <img class="img-30 rounded-circle" :src='getImgUrl(project.customers_img2)' alt="" title=""></li>
                                      <li class="d-inline-block">
                                        <img class="img-30 rounded-circle" :src='getImgUrl(project.customers_img3)' alt="" title=""></li>
                                      <li class="d-inline-block ml-2">
                                        <p class="f-12">+10 More</p>
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="project-status mt-4">
                                    <div class="media mb-0">
                                      <p>{{project.progress}}%</p>
                                      <div class="media-body text-right">
                                        <span>Done</span>
                                      </div>
                                    </div>
                                    <div class="progress" style="height: 5px">
                                      <div
                                        class="progress-bar-animated progress-bar-striped"
                                        :class="'bg-'+project.type"
                                        role="progressbar"
                                        :style= "{'width': project.progress + '%'}"
                                        aria-valuenow="10"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-card-text>
                  </b-tab>
                  <b-tab>
                    <template v-slot:title>
                      <feather type="check-circle"></feather> Done
                    </template> 
                    <b-card-text>
                      <div class="col-sm-12 p-0">
                        <div class="card">
                          <div class="card-body">
                            <div class="row">
                              <div class="col-xl-4 col-lg-6" v-for="(project,index) in doneprojects" :key="index" :class="index < 3 ? 'mb-4' : ''">
                                <div class="project-box">
                                  <span class="badge" :class="'badge-'+project.type">{{ project.badge }}</span>
                                  <h6>{{ project.title }}</h6>
                                  <div class="media">
                                    <img class="img-20 mr-1 rounded-circle" :src='getImgUrl(project.img)' alt="" title="">
                                    <div class="media-body">
                                      <p>{{ project.sites }}</p>
                                    </div>
                                  </div>
                                  <p>{{ project.desc }}</p>
                                  <div class="row details">
                                    <div class="col-6">
                                      <span>Issues </span>
                                    </div>
                                    <div class="col-6 text-primary" :class="'text-'+project.type">{{ project.issue }}</div>
                                    <div class="col-6">
                                      <span>Resolved</span>
                                    </div>
                                    <div class="col-6 text-primary" :class="'text-'+project.type">{{ project.resolved }}</div>
                                    <div class="col-6">
                                      <span>Comment</span>
                                    </div>
                                    <div class="col-6 text-primary" :class="'text-'+project.type">{{ project.comment }}</div>
                                  </div>
                                  <div class="customers">
                                    <ul>
                                      <li class="d-inline-block">
                                        <img class="img-30 rounded-circle" :src='getImgUrl(project.customers_img1)' alt="" title=""></li>
                                      <li class="d-inline-block">
                                        <img class="img-30 rounded-circle" :src='getImgUrl(project.customers_img2)' alt="" title=""></li>
                                      <li class="d-inline-block">
                                        <img class="img-30 rounded-circle" :src='getImgUrl(project.customers_img3)' alt="" title=""></li>
                                      <li class="d-inline-block ml-2">
                                        <p class="f-12">+10 More</p>
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="project-status mt-4">
                                    <div class="media mb-0">
                                      <p>{{project.progress}}%</p>
                                      <div class="media-body text-right">
                                        <span>Done</span>
                                      </div>
                                    </div>
                                    <div class="progress" style="height: 5px">
                                      <div
                                        class="progress-bar-animated progress-bar-striped"
                                        :class="'bg-'+project.type"
                                        role="progressbar"
                                        :style= "{'width': project.progress + '%'}"
                                        aria-valuenow="10"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-card-text>
                  </b-tab>
                </b-tabs>
              </div>
              <div class="col-sm-6 create-project-btn">
                <div class="text-right">
                  <div class="form-group mb-0 mr-0"></div>
                  <!-- <a class="btn btn-primary" href="">
                    <i data-feather="plus-square"> </i>Create New Project</a
                  > -->
                  <router-link to="create-project"><a class="btn btn-primary" href="">
                    <i data-feather="plus-square"> </i>Create New Project</a
                  ></router-link>
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
  import { mapState } from 'vuex';
  
  export default {
    data(){
      return {
      };
    },
    computed: {
      ...mapState({
        allprojects: state => state.common.allprojects,
        doingprojects: state => state.common.doingprojects,
        doneprojects: state => state.common.doneprojects
      })
    },
    methods:{
      getImgUrl(path) {
        return require('@/assets/images/'+path);
      },
    }
  };
</script>
