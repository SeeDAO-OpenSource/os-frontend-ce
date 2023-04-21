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
                        <h6 class="f-w-600">举办活动的评价</h6>
                        <star-rating
                          class="mt-2"
                          :max-rating="5"
                          :star-size="30"
                          :increment="0.1"
                          v-model="rating"
                          :read-only="true"
                        ></star-rating>
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
                            <feather class="mr-2" type="star"></feather>
                            给参加的活动评分
                          </button>
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
                        <span class="main-title"><b>我的活动</b></span>
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
                            {{ $t("Ongoing-Event") }}
                            <span v-if="interestedEvents.ongoing.length > 0"
                              >({{ interestedEvents.ongoing.length }})</span
                            ></span
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
                            {{ $t("Incoming-Event") }}
                            <span v-if="interestedEvents.incoming.length > 0"
                              >({{ interestedEvents.incoming.length }})</span
                            ></span
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
                            {{ $t("Event-History") }}
                            <span v-if="interestedEvents.history.length > 0"
                              >({{ interestedEvents.history.length }})</span
                            ></span
                          ></a
                        >
                      </li>
                      <li>
                        <hr />
                      </li>
                      <li>
                        <span class="main-title">
                          <b>{{ $t("Event-History") }}</b></span
                        >
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
                          <h6 class="mb-0">{{ $t("Ongoing-Event") }}</h6>
                        </div>
                        <div
                          class="card-body pb-0"
                          v-if="interestedEvents.ongoing.length"
                        >
                          <div
                            class="details-bookmark text-center"
                            v-bind:class="{ 'list-bookmark': liststyle }"
                          >
                            <div class="row" id="bookmarkData">
                              <div
                                class="col-xl-3 col-md-4 xl-50"
                                v-for="(
                                  event, index
                                ) in interestedEvents.ongoing"
                                :key="'ongoing-' + index"
                              >
                                <div
                                  class="card card-with-border bookmark-card o-hidden"
                                >
                                  <div class="details-website">
                                    <img
                                      class="img-fluid"
                                      :src=" event.image !== '' &&
                                      event.image !== undefined
                                        ? event.image
                                        : getImgUrl('defaultEvent.png')"
                                        @click="goToEvent(event)"
                                      :alt="event.title"
                                    />
                                    <div
                                      class="favourite-icon favourite_0"
                                      :class="
                                        getActive(event.id) ? 'favourite' : ''
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
                                          <router-link :to="`/events/${event['_id']}`">
                                          {{ event.title }}
                                        </router-link>
                                        </h6>
                                        <p class="weburl_0">
                                          {{ getDatetimeString(event.start) }}
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
                                          <p class="desc_0">{{ event.desc }}</p>
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
                              <span
                                >{{ $t("No-Any")
                                }}{{ $t("Ongoing-Event") }}.</span
                              >
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
                          <h6 class="mb-0">{{ $t("Incoming-Event") }}</h6>
                        </div>
                        <div
                          class="card-body pb-0"
                          v-if="interestedEvents.incoming.length"
                        >
                          <div
                            class="details-bookmark text-center"
                            v-bind:class="{ 'list-bookmark': liststyle }"
                          >
                            <div class="row" id="bookmarkData">
                              <div
                                class="col-xl-3 col-md-4 xl-50"
                                v-for="(
                                  event, index
                                ) in interestedEvents.incoming"
                                :key="'incoming-' + index"
                              >
                                <div
                                  class="card card-with-border bookmark-card o-hidden"
                                >
                                  <div class="details-website">
                                    <img
                                      class="img-fluid"
                                      :src=" event.image !== '' &&
                                      event.image !== undefined
                                        ? event.image
                                        : getImgUrl('defaultEvent.png')"
                                        @click="goToEvent(event)"
                                      :alt="event.title"
                                    />
                                    <div class="desciption-data">
                                      <div class="title-bookmark">
                                        <h6 class="title_0">
                                         <router-link :to="`/events/${event['_id']}`">
                                          {{ event.title }}
                                        </router-link>
                                        </h6>
                                        <p class="weburl_0">
                                          {{ getDatetimeString(event.start) }}
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
                                          <p class="desc_0">{{ event.desc }}</p>
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
                              <span
                                >{{ $t("No-Any")
                                }}{{ $t("Incoming-Event") }}.</span
                              >
                            </div>
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
                      <div
                        class="card mb-0"
                        v-if="interestedEvents.history.length"
                      >
                        <div class="card-header d-flex">
                          <h6 class="mb-0">{{ $t("Event-History") }}</h6>
                        </div>
                        <div class="card-body">
                          <div class="details-bookmark text-center">
                            <div class="row" id="bookmarkData1">
                              <div
                                class="col-xl-3 col-md-4 xl-50"
                                v-for="(
                                  event, index
                                ) in interestedEvents.history"
                                :key="'history-' + index"
                              >
                                <div
                                  class="card card-with-border bookmark-card o-hidden"
                                >
                                  <div class="details-website">
                                    <img
                                      class="img-fluid"
                                      :src="event.image !== '' &&
                                      event.image !== undefined
                                        ? event.image
                                        : getImgUrl('defaultEvent.png')"
                                        @click="goToEvent(event)"
                                      :alt="event.title"
                                    />
                                    <div class="desciption-data">
                                      <div class="title-bookmark">
                                        <h6 class="title_0">
                                          <router-link :to="`/events/${event['_id']}`">
                                          {{ event.title }}
                                        </router-link>
                                        </h6>
                                        <p class="weburl_0">
                                          {{ getDatetimeString(event.start) }}
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
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card-body" v-else>
                        <div class="details-bookmark text-center">
                          <div class="row" id="favouriteData"></div>
                          <div class="no-favourite">
                            <span
                              >{{ $t("No-Any")
                              }}{{ $t("Event-History") }}.</span
                            >
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
                          <h6 class="mb-0">软件类活动</h6>
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
                            <span>没有任何活动.</span>
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
                          <h6 class="mb-0">研究类活动</h6>
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
                            <span>没有任何活动.</span>
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
                            <span>没有任何活动.</span>
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
                            <span>没有任何活动.</span>
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
                            <span>没有任何活动.</span>
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
                            <span>没有任何活动.</span>
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
                                value="活动 123"
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
                                <option value="AL">My 活动s</option>
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
  <input class="form-control" id="edittitle" type="text" required="" autocomplete="off" value="活动 123">
    </div>
    <div class="form-group col-md-12">
  <label>Description</label>
  <textarea class="form-control" id="editdesc" required="" autocomplete="off">SeeDAO is beautifully crafted, clean and modern designed admin theme with 6 different demos and light - dark versions.</textarea>
    </div>
    <div class="form-group col-md-6 mb-0">
  <label>Group</label>
  <select class="js-example-basic-single">
    <option value="AL">My 活动s</option>
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
import StarRating from "vue-star-rating"
import { mapState } from "vuex"
import { avatarService } from "../../services/avatar.service"
import EtherService from "../../services/ether.service"

import { mapGetters, mapActions } from "vuex"
import { FETCH_INTERESTED_EVENTS } from "@/store/modules/event"
import { FETCH_WALLET_USER } from "@/store/modules/user"

export default {
  name: "MyEvent",
  components: {
    StarRating
  },
  data() {
    return {
      interestedEvents: {
        incoming: [],
        ongoing: [],
        history: []
      },
      currUser: null,
      rating: 4.5,
      liststyle: false,
      data: [],
      activeclass: "pills_created",
      favourite: []
    }
  },
  mounted() {
    this.$store.dispatch(FETCH_WALLET_USER).then((user) => {
      this.currUser = user
      this.$store
        .dispatch(FETCH_INTERESTED_EVENTS, user["_id"])
        .then((events) => {
          events.forEach((e) => {
            if (this.isEventNotStarted(e)) {
              this.interestedEvents.incoming.push(e)
            } else if (this.isEventOngoing(e)) {
              this.interestedEvents.ongoing.push(e)
            } else {
              this.interestedEvents.history.push(e)
            }
          })
          this.interestedEvents.incoming.sort((a, b) =>
            a.start > b.start ? 1 : b.start > a.start ? -1 : 0
          )
          this.interestedEvents.ongoing.sort((a, b) =>
            a.start < b.start ? 1 : b.start < a.start ? -1 : 0
          )
          this.interestedEvents.history.sort((a, b) =>
            a.start < b.start ? 1 : b.start < a.start ? -1 : 0
          )
          console.log("interestedEvents::", this.interestedEvents)
        })
    })
  },
  computed: {
    ...mapGetters([]),
    ...mapActions([FETCH_INTERESTED_EVENTS, FETCH_WALLET_USER]),
    ...mapState({
      bookmark: (state) => [
        {
          id: 1,
          fillstar: false,
          image: "lightgallry/01.jpg",
          title: "活动 1",
          website_url: "blah blah blah blah blah ",
          desc: "Xolo is beautifully crafted, clean and modern designed admin theme with 6 different demos and light - dark versions.",
          collection: "General"
        },
        {
          id: 2,
          fillstar: true,
          image: "lightgallry/02.jpg",
          title: "活动 2",
          website_url: "blah blah blah blah blah ",
          desc: "Universal is beautifully crafted, clean and modern designed admin theme",
          collection: "General"
        },
        {
          id: 3,
          fillstar: false,
          image: "lightgallry/03.jpg",
          title: "活动 3",
          website_url: "blah blah blah blah blah ",
          desc: "Xolo is beautifully crafted, clean and modern designed admin theme",
          collection: "Fs"
        },
        {
          id: 4,
          fillstar: false,
          image: "lightgallry/04.jpg",
          title: "活动 4",
          website_url: "blah blah blah blah blah ",
          desc: "Multikart Admin is modern designed admin theme",
          collection: "General"
        },
        {
          id: 5,
          fillstar: false,
          image: "lightgallry/05.jpg",
          title: "活动 5",
          website_url: "blah blah blah blah blah ",
          desc: "Multikart HTML template is an apparently simple but highly functional tempalate designed for creating a flourisahing online business.",
          collection: "General"
        },
        {
          id: 6,
          fillstar: false,
          image: "lightgallry/06.jpg",
          title: "活动 6",
          website_url: "blah blah blah blah blah ",
          desc: "Amazing Landing Page With Easy Customization",
          collection: "Fs"
        }
      ]
    })
  },
  methods: {
    getDatetimeString(dtnum) {
      const datetime = new Date(dtnum)
      return `${datetime.toLocaleDateString("zh-CN")} (${this.getDayList(
        datetime.getDay()
      )}) ${datetime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      })}`
    },
    getTimeString(datetime, start = null) {
      let s = start
      if (!start) s = datetime
      if (
        datetime.toLocaleDateString("zh-CN") !== s.toLocaleDateString("zh-CN")
      ) {
        return this.getDatetimeString(datetime)
      } else {
        return datetime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        })
      }
    },

    getDayList(num) {
      const daylist = ["日", "一", "二", "三", "四", "五", "六"]
      return daylist[num]
    },
    isEventOngoing(event) {
      return !this.isEventNotStarted(event) && !this.isEventOver(event)
    },
    isEventNotStarted(event) {
      const now = new Date()
      const start = new Date(event.start)
      if (now < start) return true
      else return false
    },
    isEventOver(event) {
      const now = new Date()
      const endtime = this.getEndtime(event.start, event.duration / 60000)
      if (now > endtime) return true
      else return false
    },
    getEndtime(start, duration) {
      if (start && duration)
        return new Date(new Date(start).getTime() + Number(duration) * 60000)
      else if (start) return new Date(new Date(start).getTime() + 60 * 60000)
      else return new Date(new Date() + 60 * 60000)
    },
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
      let objIndex = this.favourite.findIndex((obj) => obj.id === event.id)
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
    },
    goToEvent(event){
      this.$router.push(`/events/${event['_id']}`)
    }
  }
}
</script>
