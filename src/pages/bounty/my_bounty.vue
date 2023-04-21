<template>
    <div>
      <div class="container-fluid" style="padding-top: 40px">
        <div class="email-wrap bookmark-wrap">
          <div class="row">
            <div class="col-xl-3 box-col-6">
              <div class="email-left-aside">
                <div class="card">
                  <div class="card-body">
                    <div class="email-app-sidebar left-bookmark">
                      <div class="media">
                        <div class="media-body ml-1">
                          <h6 class="f-w-600">我的悬赏评价</h6>
                          <star-rating class="mt-2" :max-rating="5" :star-size="30" :increment="0.1" v-model="rating" :read-only="true"></star-rating>
                        </div>
                      </div>
                      <ul class="nav main-menu" role="tablist">
                        <li class="nav-item">
                          <div>
                            <button
                              id="show-btn"
                              class="badge-light-primary btn-block btn-mail"
                              type="button"
                              @click="$bvModal.show('bv-modal-example')"
                            >
                              <feather class="mr-2" type="user-plus"></feather>
                              招募组员，组队完成悬赏
                            </button>
                            <b-modal
                              id="bv-modal-example"
                              centered
                              size="lg"
                              hide-footer
                            >
                              <template #modal-title
                                >透过提案，来建立新悬赏</template
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
                                        <option value="bookmark">
                                          My Projects
                                        </option>
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
    <option value="bookmark">My Projects</option>
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
                          <span class="main-title"><b>我的悬赏</b></span>
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
                              我主持的悬赏 (1)</span
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
                              我参与的悬赏 (3)</span
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
                              悬赏的组队邀请</span
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
                              我的历史悬赏</span
                            ></a
                          >
                        </li>
                        <li>
                          <hr />
                        </li>
                        <li>
                          <span class="main-title"> <b>悬赏分类</b></span>
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
                              软件类</span
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
                              研究类</span
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
            <div class="col-xl-9 col-md-12 box-col-12">
              <div class="email-right-aside bookmark-tabcontent">
                <div class="card email-body radius-left">
                  <div class="pl-0">
                    <div class="tab-content">
                      <div
                        class="tab-pane fade"
                        v-bind:class="
                          activeclass === 'pills_created' ? 'active show' : ''
                        "
                        id="pills-created"
                        role="tabpanel"
                        aria-labelledby="pills-created-tab"
                      >
                        <div class="card mb-0">
                          <div class="card-header d-flex">
                            <h6 class="mb-0">我主持的悬赏</h6>
                            <ul>
                              <li>
                                <a
                                  class="grid-bookmark-view"
                                  href="javascript:void(0);"
                                  ><feather
                                    type="grid"
                                    @click="liststyle = !liststyle"
                                  ></feather
                                ></a>
                              </li>
                              <li>
                                <a
                                  class="list-layout-view"
                                  href="javascript:void(0);"
                                  ><feather
                                    type="list"
                                    @click="liststyle = !liststyle"
                                  ></feather
                                ></a>
                              </li>
                            </ul>
                          </div>
                          <div class="card-body pb-0">
                            <div
                              class="details-bookmark text-center"
                              v-bind:class="{ 'list-bookmark': liststyle }"
                            >
                              <div class="row" id="bookmarkData">
                                <div
                                  class="col-xl-3 col-md-4 xl-50"
                                  v-for="(item, index) in bookmark"
                                  :key="index"
                                >
                                  <div
                                    class="card card-with-border bookmark-card o-hidden"
                                  >
                                    <div class="details-website">
                                      <img
                                        class="img-fluid"
                                        :src="getImgUrl(item.image)"
                                        alt=""
                                      />
                                      <div
                                        class="favourite-icon favourite_0"
                                        :class="
                                          getActive(item.id) ? 'favourite' : ''
                                        "
                                        @click="setFavourite(item)"
                                      >
                                        <a href="javascript:void(0)"
                                          ><i class="fa fa-star"></i
                                        ></a>
                                      </div>
                                      <div class="desciption-data">
                                        <div class="title-bookmark">
                                          <h6 class="title_0">
                                            {{ item.title }}
                                          </h6>
                                          <p class="weburl_0">
                                            {{ item.website_url }}
                                          </p>
                                          <div class="hover-block">
                                            <ul>
                                              <li>
                                                <a
                                                  href="#"
                                                  data-toggle="modal"
                                                  data-target="#edit-bookmark"
                                                  ><feather
                                                    type="edit-2"
                                                    @click="
                                                      $bvModal.show(
                                                        'edit-modal-example'
                                                      )
                                                    "
                                                  ></feather
                                                ></a>
                                              </li>
                                              <li>
                                                <a href="#"
                                                  ><feather type="link"></feather
                                                ></a>
                                              </li>
                                              <li>
                                                <a href="#"
                                                  ><feather
                                                    type="share-2"
                                                  ></feather
                                                ></a>
                                              </li>
                                              <li>
                                                <a href="#"
                                                  ><feather
                                                    type="trash-2"
                                                  ></feather
                                                ></a>
                                              </li>
                                              <li class="pull-right text-right">
                                                <feather type="tag"></feather>
                                              </li>
                                            </ul>
                                          </div>
                                          <div class="content-general">
                                            <p class="desc_0">{{ item.desc }}</p>
                                            <span class="collection_0"
                                              >General</span
                                            >
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="fade tab-pane"
                        v-bind:class="
                          activeclass === 'pills_favourites' ? 'active show' : ''
                        "
                        id="pills-favourites"
                        role="tabpanel"
                        aria-labelledby="pills-favourites-tab"
                      >
                        <div class="card mb-0">
                          <div class="card-header d-flex">
                            <h6 class="mb-0">我参与的悬赏</h6>
                            <ul>
                              <li>
                                <a class="grid-bookmark-view" href="#"
                                  ><i data-feather="grid"></i
                                ></a>
                              </li>
                              <li>
                                <a class="list-layout-view" href="#"
                                  ><i data-feather="list"></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                          <div class="card-body pb-0" v-if="favourite.length">
                            <div
                              class="details-bookmark text-center"
                              v-bind:class="{ 'list-bookmark': liststyle }"
                            >
                              <div class="row" id="bookmarkData">
                                <div
                                  class="col-xl-3 col-md-4 xl-50"
                                  v-for="(item, index) in favourite"
                                  :key="index"
                                >
                                  <div
                                    class="card card-with-border bookmark-card o-hidden"
                                  >
                                    <div class="details-website">
                                      <img
                                        class="img-fluid"
                                        :src="getImgUrl(item.image)"
                                        alt=""
                                      />
                                      <div
                                        class="favourite-icon favourite_0 favourite"
                                        @click="setFavourite(item)"
                                      >
                                        <a href="#"><i class="fa fa-star"></i></a>
                                      </div>
                                      <div class="desciption-data">
                                        <div class="title-bookmark">
                                          <h6 class="title_0">
                                            {{ item.title }}
                                          </h6>
                                          <p class="weburl_0">
                                            {{ item.website_url }}
                                          </p>
                                          <div class="hover-block">
                                            <ul>
                                              <li>
                                                <a
                                                  href="#"
                                                  data-toggle="modal"
                                                  data-target="#edit-bookmark"
                                                  ><feather
                                                    type="edit-2"
                                                    @click="
                                                      $bvModal.show(
                                                        'edit-modal-example'
                                                      )
                                                    "
                                                  ></feather
                                                ></a>
                                              </li>
                                              <li>
                                                <a href="#"
                                                  ><feather type="link"></feather
                                                ></a>
                                              </li>
                                              <li>
                                                <a href="#"
                                                  ><feather
                                                    type="share-2"
                                                  ></feather
                                                ></a>
                                              </li>
                                              <li>
                                                <a href="#"
                                                  ><feather
                                                    type="trash-2"
                                                  ></feather
                                                ></a>
                                              </li>
                                              <li class="pull-right text-right">
                                                <feather type="tag"></feather>
                                              </li>
                                            </ul>
                                          </div>
                                          <div class="content-general">
                                            <p class="desc_0">{{ item.desc }}</p>
                                            <span class="collection_0"
                                              >General</span
                                            >
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="card-body" v-else>
                            <div class="details-bookmark text-center">
                              <div class="row" id="favouriteData"></div>
                              <div class="no-favourite">
                                <span>没有任何悬赏.</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="fade tab-pane"
                        v-bind:class="
                          activeclass === 'pills_shared' ? 'active show' : ''
                        "
                        id="pills-shared"
                        role="tabpanel"
                        aria-labelledby="pills-shared-tab"
                      >
                        <div class="card mb-0">
                          <div class="card-header d-flex">
                            <h6 class="mb-0">悬赏的邀请</h6>
                            <ul>
                              <li>
                                <a class="grid-bookmark-view" href="#"
                                  ><i data-feather="grid"></i
                                ></a>
                              </li>
                              <li>
                                <a class="list-layout-view" href="#"
                                  ><i data-feather="list"></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                          <div class="card-body">
                            <div class="details-bookmark text-center">
                              <span>没有任何悬赏.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="fade tab-pane"
                        v-bind:class="
                          activeclass === 'pills_bookmark' ? 'active show' : ''
                        "
                        id="pills-bookmark"
                        role="tabpanel"
                        aria-labelledby="pills-bookmark-tab"
                      >
                        <div class="card mb-0">
                          <div class="card-header d-flex">
                            <h6 class="mb-0">我的历史悬赏</h6>
                            <ul>
                              <li>
                                <a class="grid-bookmark-view" href="#"
                                  ><i data-feather="grid"></i
                                ></a>
                              </li>
                              <li>
                                <a class="list-layout-view" href="#"
                                  ><i data-feather="list"></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                          <div class="card-body">
                            <div class="details-bookmark text-center">
                              <div class="row" id="bookmarkData1">
                                <div class="col-xl-3 col-md-4 xl-50">
                                  <div
                                    class="card card-with-border bookmark-card o-hidden"
                                  >
                                    <div class="details-website">
                                      <img
                                        class="img-fluid"
                                        src="../../assets/images/lightgallry/07.jpg"
                                        alt=""
                                      />
                                      <div
                                        class="favourite-icon favourite_0"
                                        onclick="setFavourite(0)"
                                      >
                                        <a href="#"><i class="fa fa-star"></i></a>
                                      </div>
                                      <div class="desciption-data">
                                        <div class="title-bookmark">
                                          <h6 class="title_0">Project 123</h6>
                                          <p class="weburl_0">
                                            http://admin.pixelstrap.com/SeeDAO/ltr/landing-page.html
                                          </p>
                                          <div class="hover-block">
                                            <ul>
                                              <li>
                                                <a
                                                  href=""
                                                  onclick="editBookmark(0)"
                                                  data-toggle="modal"
                                                  data-target="#edit-bookmark"
                                                  ><i data-feather="edit-2"></i
                                                ></a>
                                              </li>
                                              <li>
                                                <a href="#"
                                                  ><i data-feather="link"></i
                                                ></a>
                                              </li>
                                              <li>
                                                <a href="#"
                                                  ><i data-feather="share-2"></i
                                                ></a>
                                              </li>
                                              <li>
                                                <a href="#"
                                                  ><i data-feather="trash-2"></i
                                                ></a>
                                              </li>
                                              <li class="pull-right text-right">
                                                <a href="#"
                                                  ><i data-feather="tag"></i
                                                ></a>
                                              </li>
                                            </ul>
                                          </div>
                                          <div class="content-general">
                                            <p class="desc_0">
                                              SeeDAO is beautifully crafted, clean
                                              and modern designed admin theme with
                                              6 different demos and light - dark
                                              versions.
                                            </p>
                                            <span class="collection_0"
                                              >General</span
                                            >
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-xl-3 col-md-4 xl-50">
                                  <div
                                    class="card card-with-border bookmark-card o-hidden"
                                  >
                                    <div class="details-website">
                                      <img
                                        class="img-fluid"
                                        src="../../assets/images/lightgallry/07.jpg"
                                        alt=""
                                      />
                                      <div
                                        class="favourite-icon favourite_1"
                                        onclick="setFavourite(1)"
                                      >
                                        <a href="#"><i class="fa fa-star"></i></a>
                                      </div>
                                      <div class="desciption-data">
                                        <div class="title-bookmark">
                                          <h6 class="title_1">Project 2</h6>
                                          <p class="weburl_1">
                                            https://angular.pixelstrap.com/universal/landing
                                          </p>
                                          <div class="hover-block">
                                            <ul>
                                              <li>
                                                <a
                                                  href=""
                                                  onclick="editBookmark(1)"
                                                  data-toggle="modal"
                                                  data-target="#edit-bookmark"
                                                  ><i data-feather="edit-2"></i
                                                ></a>
                                              </li>
                                              <li>
                                                <a href="#"
                                                  ><i data-feather="link"></i
                                                ></a>
                                              </li>
                                              <li>
                                                <a href="#"
                                                  ><i data-feather="share-2"></i
                                                ></a>
                                              </li>
                                              <li>
                                                <a href="#"
                                                  ><i data-feather="trash-2"></i
                                                ></a>
                                              </li>
                                              <li class="pull-right text-right">
                                                <a href="#"
                                                  ><i data-feather="tag"></i
                                                ></a>
                                              </li>
                                            </ul>
                                          </div>
                                          <div class="content-general">
                                            <p class="desc_1">
                                              Universal is beautifully crafted,
                                              clean and modern designed admin
                                              theme
                                            </p>
                                            <span class="collection_1"
                                              >General</span
                                            >
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-xl-3 col-md-4 xl-50">
                                  <div
                                    class="card card-with-border bookmark-card o-hidden"
                                  >
                                    <div class="details-website">
                                      <img
                                        class="img-fluid"
                                        src="../../assets/images/lightgallry/07.jpg"
                                        alt=""
                                      />
                                      <div
                                        class="favourite-icon favourite_2"
                                        onclick="setFavourite(2)"
                                      >
                                        <a href="#"><i class="fa fa-star"></i></a>
                                      </div>
                                      <div class="desciption-data">
                                        <div class="title-bookmark">
                                          <h6 class="title_2">Project 3</h6>
                                          <p class="weburl_2">
                                            https://angular.pixelstrap.com/cuba/landing
                                          </p>
                                          <div class="hover-block">
                                            <ul>
                                              <li>
                                                <a
                                                  href=""
                                                  onclick="editBookmark(2)"
                                                  data-toggle="modal"
                                                  data-target="#edit-bookmark"
                                                  ><i data-feather="edit-2"></i
                                                ></a>
                                              </li>
                                              <li>
                                                <a href="#"
                                                  ><i data-feather="link"></i
                                                ></a>
                                              </li>
                                              <li>
                                                <a href="#"
                                                  ><i data-feather="share-2"></i
                                                ></a>
                                              </li>
                                              <li>
                                                <a href="#"
                                                  ><i data-feather="trash-2"></i
                                                ></a>
                                              </li>
                                              <li class="pull-right text-right">
                                                <a href="#"
                                                  ><i data-feather="tag"></i
                                                ></a>
                                              </li>
                                            </ul>
                                          </div>
                                          <div class="content-general">
                                            <p class="desc_2">
                                              SeeDAO is beautifully crafted, clean
                                              and modern designed admin theme
                                            </p>
                                            <span class="collection_2">Fs</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-xl-3 col-md-4 xl-50">
                                  <div
                                    class="card card-with-border bookmark-card o-hidden"
                                  >
                                    <div class="details-website">
                                      <img
                                        class="img-fluid"
                                        src="../../assets/images/lightgallry/07.jpg"
                                        alt=""
                                      />
                                      <div
                                        class="favourite-icon favourite_3"
                                        onclick="setFavourite(3)"
                                      >
                                        <a href="#"><i class="fa fa-star"></i></a>
                                      </div>
                                      <div class="desciption-data">
                                        <div class="title-bookmark">
                                          <h6 class="title_3">Multikart Admin</h6>
                                          <p class="weburl_3">
                                            http://themes.pixelstrap.com/multikart/back-end/index.html
                                          </p>
                                          <div class="hover-block">
                                            <ul>
                                              <li>
                                                <a
                                                  href=""
                                                  onclick="editBookmark(3)"
                                                  data-toggle="modal"
                                                  data-target="#edit-bookmark"
                                                  ><i data-feather="edit-2"></i
                                                ></a>
                                              </li>
                                              <li>
                                                <a href="#"
                                                  ><i data-feather="link"></i
                                                ></a>
                                              </li>
                                              <li>
                                                <a href="#"
                                                  ><i data-feather="share-2"></i
                                                ></a>
                                              </li>
                                              <li>
                                                <a href="#"
                                                  ><i data-feather="trash-2"></i
                                                ></a>
                                              </li>
                                              <li class="pull-right text-right">
                                                <a href="#"
                                                  ><i data-feather="tag"></i
                                                ></a>
                                              </li>
                                            </ul>
                                          </div>
                                          <div class="content-general">
                                            <p class="desc_3">
                                              Multikart Admin is modern designed
                                              admin theme
                                            </p>
                                            <span class="collection_3"
                                              >General</span
                                            >
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-xl-3 col-md-4 xl-50">
                                  <div
                                    class="card card-with-border bookmark-card o-hidden"
                                  >
                                    <div class="details-website">
                                      <img
                                        class="img-fluid"
                                        src="../../assets/images/lightgallry/07.jpg"
                                        alt=""
                                      />
                                      <div
                                        class="favourite-icon favourite_4"
                                        onclick="setFavourite(4)"
                                      >
                                        <a href="#"><i class="fa fa-star"></i></a>
                                      </div>
                                      <div class="desciption-data">
                                        <div class="title-bookmark">
                                          <h6 class="title_4">
                                            Ecommerece theme
                                          </h6>
                                          <p class="weburl_4">
                                            http://themes.pixelstrap.com/multikart
                                          </p>
                                          <div class="hover-block">
                                            <ul>
                                              <li>
                                                <a
                                                  href=""
                                                  onclick="editBookmark(4)"
                                                  data-toggle="modal"
                                                  data-target="#edit-bookmark"
                                                  ><i data-feather="edit-2"></i
                                                ></a>
                                              </li>
                                              <li>
                                                <a href="#"
                                                  ><i data-feather="link"></i
                                                ></a>
                                              </li>
                                              <li>
                                                <a href="#"
                                                  ><i data-feather="share-2"></i
                                                ></a>
                                              </li>
                                              <li>
                                                <a href="#"
                                                  ><i data-feather="trash-2"></i
                                                ></a>
                                              </li>
                                              <li class="pull-right text-right">
                                                <a href="#"
                                                  ><i data-feather="tag"></i
                                                ></a>
                                              </li>
                                            </ul>
                                          </div>
                                          <div class="content-general">
                                            <p class="desc_4">
                                              Multikart HTML template is an
                                              apparently simple but highly
                                              functional tempalate designed for
                                              creating a flourisahing online
                                              business.
                                            </p>
                                            <span class="collection_4"
                                              >General
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-xl-3 col-md-4 xl-50">
                                  <div
                                    class="card card-with-border bookmark-card o-hidden"
                                  >
                                    <div class="details-website">
                                      <img
                                        class="img-fluid"
                                        src="../../assets/images/lightgallry/07.jpg"
                                        alt=""
                                      />
                                      <div
                                        class="favourite-icon favourite_5"
                                        onclick="setFavourite(5)"
                                      >
                                        <a href="#"><i class="fa fa-star"></i></a>
                                      </div>
                                      <div class="desciption-data">
                                        <div class="title-bookmark">
                                          <h6 class="title_5">
                                            Tovo app landing page
                                          </h6>
                                          <p class="weburl_5">
                                            http://vue.pixelstrap.com/tovo/home-one
                                          </p>
                                          <div class="hover-block">
                                            <ul>
                                              <li>
                                                <a
                                                  href=""
                                                  onclick="editBookmark(5)"
                                                  data-toggle="modal"
                                                  data-target="#edit-bookmark"
                                                  ><i data-feather="edit-2"></i
                                                ></a>
                                              </li>
                                              <li>
                                                <a href="#"
                                                  ><i data-feather="link"></i
                                                ></a>
                                              </li>
                                              <li>
                                                <a href="#"
                                                  ><i data-feather="share-2"></i
                                                ></a>
                                              </li>
                                              <li>
                                                <a href="#"
                                                  ><i data-feather="trash-2"></i
                                                ></a>
                                              </li>
                                              <li class="pull-right text-right">
                                                <a href="#"
                                                  ><i data-feather="tag"></i
                                                ></a>
                                              </li>
                                            </ul>
                                          </div>
                                          <div class="content-general">
                                            <p class="desc_5">
                                              Amazing Landing Page With Easy
                                              Customization
                                            </p>
                                            <span class="collection_5">Fs </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="fade tab-pane"
                        v-bind:class="
                          activeclass === 'pills_notification'
                            ? 'active show'
                            : ''
                        "
                        id="pills-notification"
                        role="tabpanel"
                        aria-labelledby="pills-notification-tab"
                      >
                        <div class="card mb-0">
                          <div class="card-header d-flex">
                            <h6 class="mb-0">软件类悬赏</h6>
                            <ul>
                              <li>
                                <a class="grid-bookmark-view" href="#"
                                  ><i data-feather="grid"></i
                                ></a>
                              </li>
                              <li>
                                <a class="list-layout-view" href="#"
                                  ><i data-feather="list"></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                          <div class="card-body">
                            <div class="details-bookmark text-center">
                              <span>没有任何悬赏.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="fade tab-pane"
                        v-bind:class="
                          activeclass === 'pills_newsletter' ? 'active show' : ''
                        "
                        id="pills-newsletter"
                        role="tabpanel"
                        aria-labelledby="pills-newsletter-tab"
                      >
                        <div class="card mb-0">
                          <div class="card-header d-flex">
                            <h6 class="mb-0">研究类悬赏</h6>
                            <ul>
                              <li>
                                <a class="grid-bookmark-view" href="#"
                                  ><i data-feather="grid"></i
                                ></a>
                              </li>
                              <li>
                                <a class="list-layout-view" href="#"
                                  ><i data-feather="list"></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                          <div class="card-body">
                            <div class="details-bookmark text-center">
                              <span>没有任何悬赏.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="fade tab-pane"
                        v-bind:class="
                          activeclass === 'pills_business_tab'
                            ? 'active show'
                            : ''
                        "
                        id="pills-business"
                        role="tabpanel"
                        aria-labelledby="pills-business-tab"
                      >
                        <div class="card mb-0">
                          <div class="card-header d-flex">
                            <h6 class="mb-0">Business</h6>
                            <ul>
                              <li>
                                <a class="grid-bookmark-view" href="#"
                                  ><i data-feather="grid"></i
                                ></a>
                              </li>
                              <li>
                                <a class="list-layout-view" href="#"
                                  ><i data-feather="list"></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                          <div class="card-body">
                            <div class="details-bookmark text-center">
                              <span>没有任何悬赏.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="fade tab-pane"
                        v-bind:class="
                          activeclass === 'pills_holidays_tab'
                            ? 'active show'
                            : ''
                        "
                        id="pills-holidays"
                        role="tabpanel"
                        aria-labelledby="pills-holidays-tab"
                      >
                        <div class="card mb-0">
                          <div class="card-header d-flex">
                            <h6 class="mb-0">Holidays</h6>
                            <ul>
                              <li>
                                <a class="grid-bookmark-view" href="#"
                                  ><i data-feather="grid"></i
                                ></a>
                              </li>
                              <li>
                                <a class="list-layout-view" href="#"
                                  ><i data-feather="list"></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                          <div class="card-body">
                            <div class="details-bookmark text-center">
                              <span>没有任何悬赏.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="fade tab-pane"
                        v-bind:class="
                          activeclass === 'pills_important_tab'
                            ? 'active show'
                            : ''
                        "
                        id="pills-important"
                        role="tabpanel"
                        aria-labelledby="pills-important-tab"
                      >
                        <div class="card mb-0">
                          <div class="card-header d-flex">
                            <h6 class="mb-0">Important</h6>
                            <ul>
                              <li>
                                <a class="grid-bookmark-view" href="#"
                                  ><i data-feather="grid"></i
                                ></a>
                              </li>
                              <li>
                                <a class="list-layout-view" href="#"
                                  ><i data-feather="list"></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                          <div class="card-body">
                            <div class="details-bookmark text-center">
                              <span>没有任何悬赏.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="fade tab-pane"
                        v-bind:class="
                          activeclass === 'pills_orgenization_tab'
                            ? 'active show'
                            : ''
                        "
                        id="pills-orgenization"
                        role="tabpanel"
                        aria-labelledby="pills-orgenization-tab"
                      >
                        <div class="card mb-0">
                          <div class="card-header d-flex">
                            <h6 class="mb-0">Orgenization</h6>
                            <ul>
                              <li>
                                <a class="grid-bookmark-view" href="#"
                                  ><i data-feather="grid"></i
                                ></a>
                              </li>
                              <li>
                                <a class="list-layout-view" href="#"
                                  ><i data-feather="list"></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                          <div class="card-body">
                            <div class="details-bookmark text-center">
                              <span>没有任何悬赏.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <b-modal id="edit-modal-example" size="lg" hide-footer>
                        <template #modal-title> Edit Bookmark </template>
                        <div class="modal-body">
                          <form
                            class="form-bookmark needs-validation"
                            novalidate=""
                          >
                            <div class="form-row">
                              <div class="form-group col-md-12">
                                <label>Web Url</label>
                                <input
                                  class="form-control"
                                  id="editurl"
                                  type="text"
                                  required=""
                                  autocomplete="off"
                                  value="http://admin.pixelstrap.com/SeeDAO/ltr/landing-page.html"
                                />
                              </div>
                              <div class="form-group col-md-12">
                                <label>Title</label>
                                <input
                                  class="form-control"
                                  id="edittitle"
                                  type="text"
                                  required=""
                                  autocomplete="off"
                                  value="Project 123"
                                />
                              </div>
                              <div class="form-group col-md-12">
                                <label>Description</label>
                                <textarea
                                  class="form-control"
                                  id="editdesc"
                                  required=""
                                  autocomplete="off"
                                >
    SeeDAO is beautifully crafted, clean and modern designed admin theme with 6 different demos and light - dark versions.</textarea
                                >
                              </div>
                              <div class="form-group col-md-6 mb-0">
                                <label>Group</label>
                                <select class="js-example-basic-single">
                                  <option value="AL">My Projects</option>
                                </select>
                              </div>
                              <div class="form-group col-md-6 mb-0">
                                <label>Collection</label>
                                <select class="js-example-disabled-results">
                                  <option value="general">General</option>
                                  <option value="fs">fs</option>
                                </select>
                              </div>
                            </div>
                            <button class="btn btn-secondary" type="button">
                              Save
                            </button>
                            <button
                              class="btn btn-primary ml-2"
                              type="button"
                              data-dismiss="modal"
                              @click="$bvModal.hide('edit-modal-example')"
                            >
                              Cancel
                            </button>
                          </form>
                        </div>
                      </b-modal>
                      <!-- <div class="modal fade modal-bookmark" id="edit-bookmark" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
  <div class="modal-header">
    <h5 class="modal-title">Edit Bookmark</h5>
    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
  </div>
  <div class="modal-body">
    <form class="form-bookmark needs-validation" novalidate="">
  <div class="form-row">
    <div class="form-group col-md-12">
  <label>Web Url</label>
  <input class="form-control" id="editurl" type="text" required="" autocomplete="off" value="http://admin.pixelstrap.com/SeeDAO/ltr/landing-page.html">
    </div>
    <div class="form-group col-md-12">
  <label>Title</label>
  <input class="form-control" id="edittitle" type="text" required="" autocomplete="off" value="Project 123">
    </div>
    <div class="form-group col-md-12">
  <label>Description</label>
  <textarea class="form-control" id="editdesc" required="" autocomplete="off">SeeDAO is beautifully crafted, clean and modern designed admin theme with 6 different demos and light - dark versions.</textarea>
    </div>
    <div class="form-group col-md-6 mb-0">
  <label>Group</label>
  <select class="js-example-basic-single">
    <option value="AL">My Projects</option>
  </select>
    </div>
    <div class="form-group col-md-6 mb-0">
  <label>Collection</label>
  <select class="js-example-disabled-results">
    <option value="general">General</option>
    <option value="fs">fs</option>
  </select>
    </div>
  </div>
  <button class="btn btn-secondary" type="button">Save</button>
  <button class="btn btn-primary" type="button" data-dismiss="modal">Cancel   </button>
    </form>
  </div>
    </div>
  </div>
    </div> -->
                      <b-modal id="tag-modal-example" size="lg" hide-footer>
                        <template #modal-title> Create Tag </template>
                        <div class="modal-body">
                          <form
                            class="form-bookmark needs-validation"
                            novalidate=""
                          >
                            <div class="form-row">
                              <div class="form-group col-md-12">
                                <label>Tag Name</label>
                                <input
                                  class="form-control"
                                  type="text"
                                  required=""
                                  autocomplete="off"
                                />
                              </div>
                              <div class="form-group col-md-12 mb-0">
                                <label>Tag color</label>
                                <input
                                  class="form-control"
                                  type="color"
                                  value="#563d7c"
                                />
                              </div>
                            </div>
                            <button class="btn btn-secondary" type="button">
                              Save
                            </button>
                            <button
                              class="btn btn-primary ml-2"
                              type="button"
                              data-dismiss="modal"
                              @click="$bvModal.hide('tag-modal-example')"
                            >
                              Cancel
                            </button>
                          </form>
                        </div>
                      </b-modal>
                      <!-- <div class="modal fade modal-bookmark" id="createtag" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
  <div class="modal-header">
    <h5 class="modal-title">Create Tag</h5>
    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
  </div>
  <div class="modal-body">
    <form class="form-bookmark needs-validation" novalidate="">
  <div class="form-row">
    <div class="form-group col-md-12">
  <label>Tag Name</label>
  <input class="form-control" type="text" required="" autocomplete="off">
    </div>
    <div class="form-group col-md-12 mb-0">
  <label>Tag color</label>
  <input class="form-control" type="color" value="#563d7c">
    </div>
  </div>
  <button class="btn btn-secondary" type="button">Save</button>
  <button class="btn btn-primary" type="button" data-dismiss="modal">Cancel</button>
    </form>
  </div>
    </div>
  </div>
    </div> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
   import StarRating from 'vue-star-rating';
  import { mapState } from "vuex"
  import { avatarService } from "../../services/avatar.service"
  import EtherService from "../../services/ether.service"
  
  export default {
    name: "bookmark",
    components: {
        StarRating,
      },
    data() {
      return {
          rating: 4.5,
        liststyle: false,
        data: [],
        activeclass: "pills_created",
        favourite: []
      }
    },
    computed: {
      ...mapState({
        bookmark: (state) => state.common.bookmark
      })
    },
    methods: {
      getWalletAddressAvatarLink() {
        return avatarService.getAvatar(EtherService.walletAddress(), 50)
      },
      getImgUrl(path) {
        return require("@/assets/images/" + path)
      },
      say: function (message) {
        this.activeclass = message
      },
      setFavourite(item) {
        let objIndex = this.favourite.findIndex((obj) => obj.id === item.id)
        if (objIndex > -1) {
          this.favourite.splice(objIndex, 1)
        } else {
          this.favourite.push(item)
        }
      },
      getActive(itemId) {
        let objIndex = this.favourite.findIndex((obj) => obj.id === itemId)
        if (objIndex > -1) {
          return true
        } else {
          return false
        }
      }
    }
  }
  </script>
  