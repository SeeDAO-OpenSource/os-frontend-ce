<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid" style="padding-top: 40px">
      <div class="email-wrap bookmark-wrap">
        <div class="row">
          <div class="col-xl-3 xl-40">
            <div class="email-left-aside">
              <div class="card">
                <div class="card-body">
                  <div class="email-app-sidebar left-bookmark">
                    <div class="media">
                      <div class="media-body ml-1">
                        <h6 class="f-w-600 mb-4">处理中的治理建议</h6>
                        <h3>3 件</h3>
                        <small
                          >市政厅若收到越多治理建议，可能需要等待越久才会得到正式答复</small
                        >
                      </div>
                    </div>
                    <ul class="nav main-menu mt-4" role="tablist">
                      <li class="nav-item">
                        <div>
                          <b-modal
                            id="bv-modal-example"
                            centered
                            size="lg"
                            hide-footer
                          >
                            <template #modal-title
                              >透过提案，来建立新活动</template
                            >
                            <div class="modal-body">
                              <form
                                class="form-bookmark needs-validation"
                                id="bookmark-form"
                                novalidate=""
                              >
                                <div class="form-row">
                                  <div class="form-group col-md-12">
                                    <label for="bm-weburl">Web Url</label>
                                    <input
                                      class="form-control"
                                      id="bm-weburl"
                                      type="text"
                                      required=""
                                      autocomplete="off"
                                    />
                                  </div>
                                  <div class="form-group col-md-12">
                                    <label for="bm-title">Title</label>
                                    <input
                                      class="form-control"
                                      id="bm-title"
                                      type="text"
                                      required=""
                                      autocomplete="off"
                                    />
                                  </div>
                                  <div class="form-group col-md-12">
                                    <label>Description</label>
                                    <textarea
                                      class="form-control"
                                      id="bm-desc"
                                      required=""
                                      autocomplete="off"
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-md-6 mb-0">
                                    <label>Group</label>
                                    <select
                                      class="js-example-basic-single"
                                      id="bm-group"
                                    >
                                      <option value="bookmark">My 活动s</option>
                                    </select>
                                  </div>
                                  <div class="form-group col-md-6 mb-0">
                                    <label>Collection</label>
                                    <select
                                      class="js-example-disabled-results"
                                      id="bm-collection"
                                    >
                                      <option value="general">General</option>
                                      <option value="fs">fs</option>
                                    </select>
                                  </div>
                                </div>
                                <input id="index_var" type="hidden" value="6" />
                                <button
                                  class="btn btn-secondary"
                                  id="Bookmark"
                                  onclick="submitBookMark()"
                                  type="submit"
                                >
                                  Save
                                </button>
                                <button
                                  class="btn btn-primary ml-2"
                                  type="button"
                                  data-dismiss="modal"
                                  @click="$bvModal.hide('bv-modal-example')"
                                >
                                  Cancel
                                </button>
                              </form>
                            </div>
                          </b-modal>
                        </div>
                        <!-- <button class="badge-light-primary btn-block btn-mail" type="button" data-toggle="modal" data-target="#exampleModal"><i class="mr-2" data-feather="bookmark"></i> New Bookmark</button>
    <div class="modal fade modal-bookmark" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
  <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">Add Bookmark</h5>
    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
  </div>
  <div class="modal-body">
    <form class="form-bookmark needs-validation" id="bookmark-form" novalidate="">
  <div class="form-row">
    <div class="form-group col-md-12">
  <label for="bm-weburl">Web Url</label>
  <input class="form-control" id="bm-weburl" type="text" required="" autocomplete="off">
    </div>
    <div class="form-group col-md-12">
  <label for="bm-title">Title</label>
  <input class="form-control" id="bm-title" type="text" required="" autocomplete="off">
    </div>
    <div class="form-group col-md-12">
  <label>Description</label>
  <textarea class="form-control" id="bm-desc" required="" autocomplete="off"></textarea>
    </div>
    <div class="form-group col-md-6 mb-0">
  <label>Group</label>
  <select class="js-example-basic-single" id="bm-group">
    <option value="bookmark">My 活动s</option>
  </select>
    </div>
    <div class="form-group col-md-6 mb-0">
  <label>Collection</label>
  <select class="js-example-disabled-results" id="bm-collection">
    <option value="general">General</option>
    <option value="fs">fs</option>
  </select>
    </div>
  </div>
  <input id="index_var" type="hidden" value="6">
  <button class="btn btn-secondary" id="Bookmark" onclick="submitBookMark()" type="submit">Save</button>
  <button class="btn btn-primary" type="button" data-dismiss="modal">Cancel</button>
    </form>
  </div>
    </div>
  </div>
    </div> -->
                      </li>
                      <li class="nav-item">
                        <span class="main-title"><b>二级治理参数</b></span>
                      </li>
                      <li>
                        <a
                          id="pills-created-tab"
                          data-toggle="pill"
                          href="javascript:void(0)"
                          role="tab"
                          aria-controls="pills-created"
                          aria-selected="true"
                          ><span
                            class="title"
                            v-on:click="say('pills_created')"
                          >
                            有效积分计算方式</span
                          ></a
                        >
                      </li>
                      <li>
                        <a
                          class="show"
                          id="pills-favourites-tab"
                          data-toggle="pill"
                          href="javascript:void(0)"
                          role="tab"
                          aria-controls="pills-favourites"
                          aria-selected="false"
                          ><span
                            class="title"
                            v-on:click="say('pills_favourites')"
                          >
                            活跃积分门槛值</span
                          ></a
                        >
                      </li>
                      <li>
                        <a
                          class="show"
                          id="pills-shared-tab"
                          data-toggle="pill"
                          href="javascript:void(0)"
                          role="tab"
                          aria-controls="pills-shared"
                          aria-selected="false"
                          ><span class="title" v-on:click="say('pills_shared')">
                            每季预算总额</span
                          ></a
                        >
                      </li>
                      <li>
                        <a
                          class="show"
                          id="pills-bookmark-tab"
                          data-toggle="pill"
                          href="javascript:void(0)"
                          role="tab"
                          aria-controls="pills-bookmark"
                          aria-selected="false"
                          ><span
                            class="title"
                            v-on:click="say('pills_bookmark')"
                          >
                            主要项目预算比例</span
                          ></a
                        >
                      </li>
                      <li>
                        <hr />
                      </li>
                      <li>
                        <span class="main-title"> <b>三级治理参数</b></span>
                      </li>
                      <li>
                        <a
                          class="show"
                          id="pills-notification-tab"
                          data-toggle="pill"
                          href="javascript:void(0)"
                          role="tab"
                          aria-controls="pills-notification"
                          aria-selected="false"
                          ><span
                            class="title"
                            @click="say('pills_notification')"
                          >
                            P1 提案资格</span
                          ></a
                        >
                      </li>
                      <li>
                        <a
                          class="show"
                          id="pills-newsletter-tab"
                          data-toggle="pill"
                          href="javascript:void(0)"
                          role="tab"
                          aria-controls="pills-newsletter"
                          aria-selected="false"
                          ><span class="title" @click="say('pills_newsletter')">
                            P2 提案资格</span
                          ></a
                        >
                      </li>
                      <li>
                        <a
                          class="show"
                          id="pills-business-tab"
                          data-toggle="pill"
                          href="javascript:void(0)"
                          role="tab"
                          aria-controls="pills-business-tab"
                          aria-selected="false"
                          ><span
                            class="title"
                            @click="say('pills_business_tab')"
                          >
                          </span
                        ></a>
                      </li>
                      <li>
                        <a
                          class="show"
                          id="pills-holidays-tab"
                          data-toggle="pill"
                          href="javascript:void(0)"
                          role="tab"
                          aria-controls="pills-holidays-tab"
                          aria-selected="false"
                          ><span
                            class="title"
                            @click="say('pills_holidays_tab')"
                          >
                          </span
                        ></a>
                      </li>
                      <li>
                        <a
                          class="show"
                          id="pills-important-tab"
                          data-toggle="pill"
                          href="javascript:void(0)"
                          role="tab"
                          aria-controls="pills-important-tab"
                          aria-selected="false"
                          ><span
                            class="title"
                            @click="say('pills_important_tab')"
                          >
                          </span
                        ></a>
                      </li>
                      <li>
                        <a
                          class="show"
                          id="pills-orgenization-tab"
                          data-toggle="pill"
                          href="javascript:void(0)"
                          role="tab"
                          aria-controls="pills-orgenization-tab"
                          aria-selected="false"
                          ><span
                            class="title"
                            @click="say('pills_orgenization_tab')"
                          >
                          </span
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-9 xl-60">
            <div class="card">
              <div class="job-search">
                <div class="card-body pb-0">
                  <div class="media">
                    <img
                      class="img-40 img-fluid m-r-20"
                      :src="getImgUrl(jobs.image)"
                      alt=""
                    />
                    <div class="media-body">
                      <h6 class="f-w-600">
                        <router-link
                          :to="{ name: 'JobDetails', params: { id: jobs.id } }"
                          >{{ jobs.title }}</router-link
                        >
                        <span class="pull-right"
                          ><button class="btn btn-primary" type="button">
                            <span><i class="fa fa-check text-white"></i></span>
                            Save this job
                          </button></span
                        >
                      </h6>
                      <p>
                        {{ jobs.company }}
                        <span>{{ jobs.city }}, {{ jobs.country }} </span
                        ><span v-html="stars(jobs.stars)"></span>
                      </p>
                    </div>
                  </div>

                  <div class="job-description">
                    <h6 class="mb-0">Personal Details</h6>
                    <form class="form theme-form">
                      <div class="row">
                        <div class="col">
                          <div class="form-group">
                            <label for="exampleFormControlInput1"
                              >First Name:<span class="font-danger"
                                >*</span
                              ></label
                            >
                            <input
                              class="form-control"
                              id="exampleFormControlInput1"
                              type="email"
                              placeholder="Enter first name"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="form-group">
                            <label for="exampleFormControlInput2"
                              >Last Name:<span class="font-danger"
                                >*</span
                              ></label
                            >
                            <input
                              class="form-control"
                              id="exampleFormControlInput2"
                              type="email"
                              placeholder="Enter last name"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="form-group">
                            <label for="exampleFormControlInput3"
                              >Email:<span class="font-danger">*</span></label
                            >
                            <input
                              class="form-control"
                              id="exampleFormControlInput3"
                              type="email"
                              placeholder="Enter email"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="form-group">
                            <label for="exampleFormControlpassword"
                              >Password:<span class="font-danger"
                                >*</span
                              ></label
                            >
                            <input
                              class="form-control"
                              id="exampleFormControlpassword"
                              type="password"
                              placeholder="Enter password"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="form-group">
                            <label for="exampleFormControlpassword1"
                              >Repeat Password:<span class="font-danger"
                                >*</span
                              ></label
                            >
                            <input
                              class="form-control"
                              id="exampleFormControlpassword1"
                              type="password"
                              placeholder="Repeat password"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="form-group">
                            <label for="exampleFormControlInput4"
                              >Phone Number:</label
                            >
                            <input
                              class="form-control"
                              id="exampleFormControlInput4"
                              type="email"
                              placeholder="Enter Phone no."
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row birthday-select">
                        <div class="col-sm-4 form-group">
                          <div class="col-form-label pt-0">Birth Date</div>
                          <select class="js-example-basic-single col-sm-12">
                            <optgroup label="Month">
                              <option value="Jan">January</option>
                              <option value="Feb">February</option>
                              <option value="Mar">March</option>
                              <option value="Apr">April</option>
                              <option value="May">May</option>
                              <option value="Jun">June</option>
                              <option value="Jul">July</option>
                              <option value="Aug">August</option>
                              <option value="Sep">September</option>
                              <option value="Oct">October</option>
                              <option value="Nov">November</option>
                              <option value="Dec">December</option>
                            </optgroup>
                          </select>
                        </div>
                        <div class="col-sm-4 form-group">
                          <div class="col-form-label none-label"></div>
                          <select class="js-example-basic-single col-sm-12">
                            <optgroup label="Day">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                              <option value="11">11</option>
                              <option value="12">12</option>
                              <option value="13">13</option>
                              <option value="14">14</option>
                              <option value="15">15</option>
                              <option value="16">16</option>
                              <option value="17">17</option>
                              <option value="18">18</option>
                              <option value="19">19</option>
                              <option value="20">20</option>
                              <option value="21">21</option>
                              <option value="22">22</option>
                              <option value="23">23</option>
                              <option value="24">24</option>
                              <option value="25">25</option>
                              <option value="26">26</option>
                              <option value="27">27</option>
                              <option value="28">28</option>
                              <option value="29">29</option>
                              <option value="30">30</option>
                              <option value="31">31</option>
                            </optgroup>
                          </select>
                        </div>
                        <div class="col-sm-4 form-group">
                          <div class="col-form-label none-label"></div>
                          <select class="js-example-basic-single col-sm-12">
                            <optgroup label="Year">
                              <option value="1985">1985</option>
                              <option value="1986">1986</option>
                              <option value="1987">1987</option>
                              <option value="1988">1988</option>
                              <option value="1989">1989</option>
                              <option value="1990">1990</option>
                              <option value="1991">1991</option>
                              <option value="1992">1992</option>
                              <option value="1993">1993</option>
                              <option value="1994">1994</option>
                              <option value="1995">1995</option>
                              <option value="1996">1996</option>
                              <option value="1997">1997</option>
                              <option value="1998">1998</option>
                              <option value="1999">1999</option>
                              <option value="2000">2000</option>
                              <option value="2001">2001</option>
                              <option value="2002">2002</option>
                              <option value="2003">2003</option>
                              <option value="2004">2004</option>
                              <option value="2005">2005</option>
                              <option value="2006">2006</option>
                              <option value="2007">2007</option>
                              <option value="2008">2008</option>
                              <option value="2009">2009</option>
                              <option value="2010">2010</option>
                              <option value="2011">2011</option>
                              <option value="2012">2012</option>
                              <option value="2013">2013</option>
                              <option value="2014">2014</option>
                              <option value="2015">2015</option>
                            </optgroup>
                          </select>
                        </div>
                      </div>
                    </form>
                    <h6 class="mb-0">Your Education</h6>
                    <form class="form theme-form">
                      <div class="row">
                        <div class="col-xl-6 xl-100">
                          <div class="form-group">
                            <label for="exampleFormControlInput5"
                              >College Name:<span class="font-danger"
                                >*</span
                              ></label
                            >
                            <input
                              class="form-control"
                              id="exampleFormControlInput5"
                              type="email"
                              placeholder="Enter college name"
                            />
                          </div>
                        </div>
                        <div class="col-xl-6 xl-100">
                          <label class="col-form-label text-right pt-0"
                            >Period:<span class="font-danger">*</span></label
                          >
                          <div class="row">
                            <div class="col-sm-6">
                              <div class="input-group form-group">
                                <datepicker
                                  input-class="datepicker-here form-control digits"
                                  :format="format"
                                  placeholder="Start Date"
                                ></datepicker>
                              </div>
                            </div>
                            <div class="col-sm-6 xs-mt-period">
                              <div class="input-group form-group">
                                <datepicker
                                  input-class="datepicker-here form-control digits"
                                  :format="format"
                                  placeholder="End Date"
                                ></datepicker>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 xl-mt-job">
                          <div class="col-form-label pt-0">
                            Degree Level:<span class="font-danger">*</span>
                          </div>
                          <select
                            class="js-example-basic-single col-sm-12 job-select2 mt-0"
                          >
                            <optgroup label="Choose a Option">
                              <option value="student">Student</option>
                              <option value="Bachelor">Bachelor</option>
                              <option value="Master">Master</option>
                              <option value="Associate">Associate</option>
                            </optgroup>
                          </select>
                        </div>
                        <div class="col-md-6 xl-mt-job">
                          <div class="form-group">
                            <label
                              for="exampleFormControlInput6"
                              class="col-form-label pt-0"
                              >Specialization:<span class="font-danger"
                                >*</span
                              ></label
                            >
                            <input
                              class="form-control"
                              id="exampleFormControlInput6"
                              type="email"
                              placeholder="Enter specialization"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                    <h6 class="mb-0">Your Experience</h6>
                    <form class="form theme-form">
                      <div class="row">
                        <div class="col-xl-6 xl-100">
                          <div class="form-group">
                            <label for="exampleFormControlInput7"
                              >Location:<span class="font-danger"
                                >*</span
                              ></label
                            >
                            <input
                              class="form-control"
                              id="exampleFormControlInput7"
                              type="email"
                              placeholder="Enter Location"
                            />
                          </div>
                        </div>
                        <div class="col-xl-6 xl-100">
                          <label class="col-form-label text-right pt-0"
                            >Period:<span class="font-danger">*</span></label
                          >
                          <div class="row">
                            <div class="col-sm-6">
                              <div class="input-group form-group">
                                <datepicker
                                  input-class="datepicker-here form-control digits"
                                  :format="format"
                                  placeholder="Start Date"
                                ></datepicker>
                              </div>
                            </div>
                            <div class="col-sm-6 xs-mt-period">
                              <div class="input-group form-group">
                                <datepicker
                                  input-class="datepicker-here form-control digits"
                                  :format="format"
                                  placeholder="End Date"
                                ></datepicker>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 xl-mt-job">
                          <div class="col-form-label pt-0">
                            Position:<span class="font-danger">*</span>
                          </div>
                          <select
                            class="js-example-basic-single col-sm-12 job-select2 mt-0"
                          >
                            <optgroup label="Enter Position">
                              <option value="position">Choose a option</option>
                              <option value="Web designer">Web Designer</option>
                              <option value="Graphic designer">
                                Graphic Designer
                              </option>
                              <option value="UI designer">UI Designer</option>
                              <option value="UI/UX designer">
                                UI/UX Designer
                              </option>
                            </optgroup>
                          </select>
                        </div>
                        <div class="col-md-6 xl-mt-job">
                          <div class="form-group">
                            <label
                              for="exampleFormControlInput8"
                              class="col-form-label pt-0"
                              >Company Name:<span class="font-danger"
                                >*</span
                              ></label
                            >
                            <input
                              class="form-control"
                              id="exampleFormControlInput8"
                              type="email"
                              placeholder="Enter Company Name"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                    <h6 class="mb-0">Upload Your Files</h6>
                    <form class="form theme-form">
                      <div class="row">
                        <div class="col">
                          <div class="form-group">
                            <label class="col-form-label pt-0"
                              >Upload Your CV:<span class="font-danger"
                                >*</span
                              ></label
                            >
                            <input class="form-control" type="file" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="form-group">
                            <label class="col-form-label pt-0"
                              >Upload Cover Letter:<span class="font-danger"
                                >*</span
                              ></label
                            >
                            <input class="form-control" type="file" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="form-group mb-0">
                            <label class="col-form-label pt-0"
                              >Upload Recommendations:</label
                            >
                            <input class="form-control" type="file" />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="card-footer">
                  <button class="btn btn-primary mr-1" type="submit">
                    Submit
                  </button>
                  <router-link
                    class="btn btn-light"
                    :to="{ name: 'JobDetails', params: { id: jobs.id } }"
                    >Cancel</router-link
                  >
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
import Datepicker from "vuejs-datepicker"

export default {
  components: {
    Datepicker
  },
  data() {
    return {
      format: "MM/dd/yyyy"
    }
  },
  computed: {
    ...mapState({
      jobs: (state) =>
        state.jobs.jobs.find((job) => {
          if (1 === job.id) return job
        })
    })
  },
  methods: {
    getImgUrl(filename) {
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
