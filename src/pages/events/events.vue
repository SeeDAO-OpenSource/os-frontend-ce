<template>
  <div>
    <!-- Container-fluid starts-->

    <div
      :class="
        filtered
          ? 'container-fluid product-wrapper sidebaron'
          : 'container-fluid product-wrapper'
      "
      style="padding-top: 40px"
    >
      <div class="row">
        <div class="col-md-12 project-list">
          <div class="card">
            <div class="row m-0">
              <div class="col-sm-12 p-0">
                <b-tabs content-class="mt-3">
                  <b-tab active>
                    <template v-slot:title>
                      <feather type="target"></feather
                      >{{ $t("Incoming-Events") }}
                    </template>
                    <div class="product-grid">
                      <div class="feature-products">
                        <div class="row">
                          <div class="col-md-6 products-total">
                            <div class="square-product-setting d-inline-block">
                              <a
                                class="icon-grid grid-layout-view"
                                @click="gridView()"
                              >
                                <feather type="grid"></feather>
                              </a>
                            </div>
                            <div class="square-product-setting d-inline-block">
                              <a
                                class="icon-grid m-0 list-layout-view"
                                @click="listView()"
                              >
                                <feather type="list"></feather>
                              </a>
                            </div>
                            <span
                              class="d-none-productlist filter-toggle"
                              @click="collapseFilter()"
                            >
                              <h6>
                                {{ $t("Filters") }}
                                <span class="ml-2">
                                  <feather
                                    type="chevron-down"
                                    class="middle"
                                  ></feather>
                                </span>
                              </h6>
                            </span>
                            <div class="grid-options d-inline-block">
                              <ul>
                                <li @click="grid2()">
                                  <a class="product-2-layout-view">
                                    <span
                                      class="line-grid line-grid-1 bg-primary"
                                    ></span>
                                    <span
                                      class="line-grid line-grid-2 bg-primary"
                                    ></span>
                                  </a>
                                </li>
                                <li @click="grid3()">
                                  <a href="#" class="product-3-layout-view">
                                    <span
                                      class="line-grid line-grid-3 bg-primary"
                                    ></span>
                                    <span
                                      class="line-grid line-grid-4 bg-primary"
                                    ></span>
                                    <span
                                      class="line-grid line-grid-5 bg-primary"
                                    ></span>
                                  </a>
                                </li>
                                <li @click="grid4()">
                                  <a href="#" class="product-4-layout-view">
                                    <span
                                      class="line-grid line-grid-6 bg-primary"
                                    ></span>
                                    <span
                                      class="line-grid line-grid-7 bg-primary"
                                    ></span>
                                    <span
                                      class="line-grid line-grid-8 bg-primary"
                                    ></span>
                                    <span
                                      class="line-grid line-grid-9 bg-primary"
                                    ></span>
                                  </a>
                                </li>
                                <!-- <li @click="grid6()">
                      <a href="#" class="product-6-layout-view">
                        <span class="line-grid line-grid-10 bg-primary"></span>
                        <span class="line-grid line-grid-11 bg-primary"></span>
                        <span class="line-grid line-grid-12 bg-primary"></span>
                        <span class="line-grid line-grid-13 bg-primary"></span>
                        <span class="line-grid line-grid-14 bg-primary"></span>
                        <span class="line-grid line-grid-15 bg-primary"></span>
                      </a>
                    </li> -->
                              </ul>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="pull-right text-right">
                              <span
                                class="f-w-500 mr-2"
                                v-if="getNotclosedEvent.length > 0"
                                >{{ $t("Show-Events") }} 1 -
                                {{ getNotclosedEvent.length }}
                                {{ $t("Results") }}</span
                              ><span class="f-w-500 mr-2" v-else
                                >{{ $t("Show-Events") }} 0
                                {{ $t("Results") }}</span
                              >
                              <div
                                class="select2-drpdwn-product select-options d-inline-block"
                              >
                                <select
                                  class="form-control btn-square"
                                  name="select"
                                  @change="onChangeSort($event)"
                                >
                                  <option>{{ $t("Order-Event-By") }}</option>
                                  <option value="low">
                                    {{ $t("Attendees-High-to-Low") }}
                                  </option>
                                  <option value="high">
                                    {{ $t("Attendees-Low-to-High") }}
                                  </option>
                                  <option value="a-z">
                                    {{ $t("Datetime-New-to-Old") }}
                                  </option>
                                  <option value="z-a">
                                    {{ $t("Datetime-Old-to-New") }}
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-3">
                            <div
                              class="product-sidebar"
                              :class="filtered ? 'open' : ''"
                            >
                              <div class="filter-section">
                                <div class="card">
                                  <div class="card-header">
                                    <h6 class="mb-0 f-w-600">
                                      {{ $t("Filters") }}
                                      <span
                                        class="pull-right"
                                        @click="collapseFilter()"
                                      >
                                        <i
                                          class="fa fa-chevron-down toggle-data"
                                        ></i>
                                      </span>
                                    </h6>
                                  </div>
                                  <Slider
                                    @allFilters="allfilter"
                                    @priceVal="pricefilterArray"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-xl-9 col-sm-12">
                            <form>
                              <div class="form-group m-0">
                                <input
                                  class="form-control"
                                  type="text"
                                  :placeholder="$t('Search') + ' ...'"
                                />
                                <i class="fa fa-search"></i>
                              </div>
                            </form>
                            <div class="col-sm-12">
                              <div v-if="getNotclosedEvent.length === 0">
                                <div class="search-not-found text-center">
                                  <img
                                    :src="getImgUrl('empty-search.png')"
                                    alt
                                    class="second-search"
                                  />
                                  <p>
                                    {{ $t("No-Results-For-This-Search") }}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="product-wrapper-grid"
                        :class="listViewEnable ? 'list-view' : ''"
                      >
                        <div class="row">
                          <div
                            :class="[
                              col2
                                ? 'col-md-6'
                                : col3
                                ? 'col-lg-4 col-md-6'
                                : col4
                                ? 'col-xl-3 col-md-6'
                                : col6
                                ? 'col-xl-2 col-lg-4 col-md-6'
                                : list
                                ? 'col-xl-12'
                                : 'col-xl-3 col-md-6'
                            ]"
                            v-for="(event, index) in getNotclosedEvent"
                            :key="index"
                          >
                            <div class="card">
                              <div class="product-box">
                                <div class="product-img">
                                  <div
                                    class="ribbon ribbon-primary"
                                    v-if="event.sale"
                                  >
                                    {{ $t("Attendees-Full") }}
                                  </div>
                                  <img
                                    class="img-fluid"
                                    :src="
                                      event.image !== '' &&
                                      event.image !== undefined
                                        ? event.image
                                        : getImgUrl('defaultEvent.png')
                                    "
                                  />
                                </div>

                                <div class="product-details">
                                  <!-- <div class="rating">
                                    <i class="fa fa-star"></i
                                    ><i class="fa fa-star"></i
                                    ><i class="fa fa-star"></i
                                    ><i class="fa fa-star"></i
                                    ><i class="fa fa-star"></i>
                                  </div> -->
                                  <router-link :to="'/events/' + event['_id']">
                                    <h4>{{ event.title }}</h4>
                                  </router-link>
                                  <p class="mt-3">
                                    <b>{{
                                      getEventTimeString(
                                        event.start,
                                        event.duration / 60000
                                      )
                                    }}</b>
                                  </p>
                                  <p>
                                    <b v-if="event.where === 'local'">{{
                                      $t("Local-Event")
                                    }}</b>
                                    <b v-else>{{ $t("Online-Event") }}</b>
                                  </p>
                                  <div class="product-price text-center">
                                    {{
                                      event.interested
                                        ? event.interested.length
                                        : 0
                                    }}
                                    &nbsp;<small>&nbsp;{{ $t("人") }}</small>
                                  </div>
                                  <div class="text-center mt-4 mb-2" v-if="!isEventOver(event)">
                                    <b-button
                                      variant="outline-primary"
                                      class="btn-pill"
                                      disabled
                                      size="lg"
                                      v-if="
                                        event.interested &&
                                        event.interested.find(
                                          (m) => m.wallet === currUser.wallet
                                        )
                                      "
                                      >✔️ {{ $t("Event-Followed") }}</b-button
                                    >
                                    <b-button
                                      id="default-lg-primary"
                                      variant="primary"
                                      class="btn-pill"
                                      size="lg"
                                      @click="followEvent(event)"
                                      v-else
                                      >{{ $t("Follow-Event") }}</b-button
                                    >
                                  </div>
                                  <div class="text-center mt-4 mb-2" v-else>
                                    <b-button
                                      id="default-lg-primary"
                                      variant="outline-info"
                                      class="btn-pill"
                                      size="lg"
                                      disabled
                                      >{{ $t("Event-is-Over") }}</b-button
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </b-tab>
                  <b-tab>
                    <template v-slot:title>
                      <feather type="target"></feather>{{ $t("Now-Events") }}
                    </template>
                    <div class="product-grid">
                      <div class="feature-products">
                        <div class="row">
                          <div class="col-md-6 products-total">
                            <div class="square-product-setting d-inline-block">
                              <a
                                class="icon-grid grid-layout-view"
                                @click="gridView()"
                              >
                                <feather type="grid"></feather>
                              </a>
                            </div>
                            <div class="square-product-setting d-inline-block">
                              <a
                                class="icon-grid m-0 list-layout-view"
                                @click="listView()"
                              >
                                <feather type="list"></feather>
                              </a>
                            </div>
                            <span
                              class="d-none-productlist filter-toggle"
                              @click="collapseFilter()"
                            >
                              <h6>
                                {{ $t("Filters") }}
                                <span class="ml-2">
                                  <feather
                                    type="chevron-down"
                                    class="middle"
                                  ></feather>
                                </span>
                              </h6>
                            </span>
                            <div class="grid-options d-inline-block">
                              <ul>
                                <li @click="grid2()">
                                  <a class="product-2-layout-view">
                                    <span
                                      class="line-grid line-grid-1 bg-primary"
                                    ></span>
                                    <span
                                      class="line-grid line-grid-2 bg-primary"
                                    ></span>
                                  </a>
                                </li>
                                <li @click="grid3()">
                                  <a href="#" class="product-3-layout-view">
                                    <span
                                      class="line-grid line-grid-3 bg-primary"
                                    ></span>
                                    <span
                                      class="line-grid line-grid-4 bg-primary"
                                    ></span>
                                    <span
                                      class="line-grid line-grid-5 bg-primary"
                                    ></span>
                                  </a>
                                </li>
                                <li @click="grid4()">
                                  <a href="#" class="product-4-layout-view">
                                    <span
                                      class="line-grid line-grid-6 bg-primary"
                                    ></span>
                                    <span
                                      class="line-grid line-grid-7 bg-primary"
                                    ></span>
                                    <span
                                      class="line-grid line-grid-8 bg-primary"
                                    ></span>
                                    <span
                                      class="line-grid line-grid-9 bg-primary"
                                    ></span>
                                  </a>
                                </li>
                                <!-- <li @click="grid6()">
                      <a href="#" class="product-6-layout-view">
                        <span class="line-grid line-grid-10 bg-primary"></span>
                        <span class="line-grid line-grid-11 bg-primary"></span>
                        <span class="line-grid line-grid-12 bg-primary"></span>
                        <span class="line-grid line-grid-13 bg-primary"></span>
                        <span class="line-grid line-grid-14 bg-primary"></span>
                        <span class="line-grid line-grid-15 bg-primary"></span>
                      </a>
                    </li> -->
                              </ul>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="pull-right text-right">
                              <span
                                class="f-w-500 mr-2"
                                v-if="getOngoingEvent.length > 0"
                                >{{ $t("Show-Events") }} 1 -
                                {{ getOngoingEvent.length }}
                                {{ $t("Results") }}</span
                              ><span class="f-w-500 mr-2" v-else
                                >{{ $t("Show-Events") }} 0
                                {{ $t("Results") }}</span
                              >
                              <div
                                class="select2-drpdwn-product select-options d-inline-block"
                              >
                                <select
                                  class="form-control btn-square"
                                  name="select"
                                  @change="onChangeSort($event)"
                                >
                                  <option>{{ $t("Order-Event-By") }}</option>
                                  <option value="low">
                                    {{ $t("Attendees-High-to-Low") }}
                                  </option>
                                  <option value="high">
                                    {{ $t("Attendees-Low-to-High") }}
                                  </option>
                                  <option value="a-z">
                                    {{ $t("Datetime-New-to-Old") }}
                                  </option>
                                  <option value="z-a">
                                    {{ $t("Datetime-Old-to-New") }}
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-3">
                            <div
                              class="product-sidebar"
                              :class="filtered ? 'open' : ''"
                            >
                              <div class="filter-section">
                                <div class="card">
                                  <div class="card-header">
                                    <h6 class="mb-0 f-w-600">
                                      {{ $t("Filters") }}
                                      <span
                                        class="pull-right"
                                        @click="collapseFilter()"
                                      >
                                        <i
                                          class="fa fa-chevron-down toggle-data"
                                        ></i>
                                      </span>
                                    </h6>
                                  </div>
                                  <Slider
                                    @allFilters="allfilter"
                                    @priceVal="pricefilterArray"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-xl-9 col-sm-12">
                            <form>
                              <div class="form-group m-0">
                                <input
                                  class="form-control"
                                  type="text"
                                  :placeholder="$t('Search') + ' ...'"
                                />
                                <i class="fa fa-search"></i>
                              </div>
                            </form>
                            <div class="col-sm-12">
                              <div v-if="getOngoingEvent.length == 0">
                                <div class="search-not-found text-center">
                                  <img
                                    :src="getImgUrl('empty-search.png')"
                                    alt
                                    class="second-search"
                                  />
                                  <p>
                                    {{ $t("No-Results-For-This-Search") }}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="product-wrapper-grid"
                        :class="listViewEnable ? 'list-view' : ''"
                      >
                        <div class="row">
                          <div
                            :class="[
                              col2
                                ? 'col-md-6'
                                : col3
                                ? 'col-lg-4 col-md-6'
                                : col4
                                ? 'col-xl-3 col-md-6'
                                : col6
                                ? 'col-xl-2 col-lg-4 col-md-6'
                                : list
                                ? 'col-xl-12'
                                : 'col-xl-3 col-md-6'
                            ]"
                            v-for="(event, index) in getOngoingEvent"
                            :key="index"
                          >
                            <div class="card">
                              <div class="product-box">
                                <div class="product-img">
                                  <div
                                    class="ribbon ribbon-primary"
                                    v-if="event.sale"
                                  >
                                    {{ $t("Attendees-Full") }}
                                  </div>
                                  <img
                                    class="img-fluid"
                                    :src="
                                      event.image !== '' &&
                                      event.image !== undefined
                                        ? event.image
                                        : getImgUrl('defaultEvent.png')
                                    "
                                  />
                                </div>

                                <div class="product-details">
                                  <!-- <div class="rating">
                                    <i class="fa fa-star"></i
                                    ><i class="fa fa-star"></i
                                    ><i class="fa fa-star"></i
                                    ><i class="fa fa-star"></i
                                    ><i class="fa fa-star"></i>
                                  </div> -->
                                  <router-link :to="'/events/' + event['_id']">
                                    <h4>{{ event.title }}</h4>
                                  </router-link>
                                  <p class="mt-3">
                                    <b>{{
                                      getEventTimeString(
                                        event.start,
                                        event.duration / 60000
                                      )
                                    }}</b>
                                  </p>
                                  <p>
                                    <b v-if="event.where === 'local'">{{
                                      $t("Local-Event")
                                    }}</b>
                                    <b v-else>{{ $t("Online-Event") }}</b>
                                  </p>
                                  <div class="product-price text-center">
                                    {{
                                      event.interested
                                        ? event.interested.length
                                        : 0
                                    }} &nbsp;<small>&nbsp;{{ $t("人") }}</small>
                                  </div>
                                  <div class="text-center mt-4 mb-2">
                                    <b-button
                                      variant="outline-primary"
                                      class="btn-pill"
                                      disabled
                                      size="lg"
                                      v-if="
                                        event.interested &&
                                        event.interested.find(
                                          (m) => m.wallet === currUser.wallet
                                        )
                                      "
                                      >✔️ {{ $t("Event-Followed") }}</b-button
                                    >
                                    <b-button
                                      id="default-lg-primary"
                                      variant="primary"
                                      class="btn-pill"
                                      size="lg"
                                      @click="followEvent(event)"
                                      v-else
                                      >{{ $t("Follow-Event") }}</b-button
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </b-tab>
                  <b-tab>
                    <template v-slot:title>
                      <feather type="target"></feather>{{ $t("All-Events") }}
                    </template>
                    <div class="product-grid">
                      <div class="feature-products">
                        <div class="row">
                          <div class="col-md-6 products-total">
                            <div class="square-product-setting d-inline-block">
                              <a
                                class="icon-grid grid-layout-view"
                                @click="gridView()"
                              >
                                <feather type="grid"></feather>
                              </a>
                            </div>
                            <div class="square-product-setting d-inline-block">
                              <a
                                class="icon-grid m-0 list-layout-view"
                                @click="listView()"
                              >
                                <feather type="list"></feather>
                              </a>
                            </div>
                            <span
                              class="d-none-productlist filter-toggle"
                              @click="collapseFilter()"
                            >
                              <h6>
                                {{ $t("Filters") }}
                                <span class="ml-2">
                                  <feather
                                    type="chevron-down"
                                    class="middle"
                                  ></feather>
                                </span>
                              </h6>
                            </span>
                            <div class="grid-options d-inline-block">
                              <ul>
                                <li @click="grid2()">
                                  <a class="product-2-layout-view">
                                    <span
                                      class="line-grid line-grid-1 bg-primary"
                                    ></span>
                                    <span
                                      class="line-grid line-grid-2 bg-primary"
                                    ></span>
                                  </a>
                                </li>
                                <li @click="grid3()">
                                  <a href="#" class="product-3-layout-view">
                                    <span
                                      class="line-grid line-grid-3 bg-primary"
                                    ></span>
                                    <span
                                      class="line-grid line-grid-4 bg-primary"
                                    ></span>
                                    <span
                                      class="line-grid line-grid-5 bg-primary"
                                    ></span>
                                  </a>
                                </li>
                                <li @click="grid4()">
                                  <a href="#" class="product-4-layout-view">
                                    <span
                                      class="line-grid line-grid-6 bg-primary"
                                    ></span>
                                    <span
                                      class="line-grid line-grid-7 bg-primary"
                                    ></span>
                                    <span
                                      class="line-grid line-grid-8 bg-primary"
                                    ></span>
                                    <span
                                      class="line-grid line-grid-9 bg-primary"
                                    ></span>
                                  </a>
                                </li>
                                <!-- <li @click="grid6()">
                      <a href="#" class="product-6-layout-view">
                        <span class="line-grid line-grid-10 bg-primary"></span>
                        <span class="line-grid line-grid-11 bg-primary"></span>
                        <span class="line-grid line-grid-12 bg-primary"></span>
                        <span class="line-grid line-grid-13 bg-primary"></span>
                        <span class="line-grid line-grid-14 bg-primary"></span>
                        <span class="line-grid line-grid-15 bg-primary"></span>
                      </a>
                    </li> -->
                              </ul>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="pull-right text-right">
                              <span
                                class="f-w-500 mr-2"
                                v-if="getAllEvent.length > 0"
                                >{{ $t("Show-Events") }} 1 -
                                {{ getAllEvent.length }}
                                {{ $t("Results") }}</span
                              ><span class="f-w-500 mr-2" v-else
                                >{{ $t("Show-Events") }} 0
                                {{ $t("Results") }}</span
                              >
                              <div
                                class="select2-drpdwn-product select-options d-inline-block"
                              >
                                <select
                                  class="form-control btn-square"
                                  name="select"
                                  @change="onChangeSort($event)"
                                >
                                  <option>{{ $t("Order-Event-By") }}</option>
                                  <option value="low">
                                    {{ $t("Attendees-High-to-Low") }}
                                  </option>
                                  <option value="high">
                                    {{ $t("Attendees-Low-to-High") }}
                                  </option>
                                  <option value="a-z">
                                    {{ $t("Datetime-New-to-Old") }}
                                  </option>
                                  <option value="z-a">
                                    {{ $t("Datetime-Old-to-New") }}
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-3">
                            <div
                              class="product-sidebar"
                              :class="filtered ? 'open' : ''"
                            >
                              <div class="filter-section">
                                <div class="card">
                                  <div class="card-header">
                                    <h6 class="mb-0 f-w-600">
                                      {{ $t("Filters") }}
                                      <span
                                        class="pull-right"
                                        @click="collapseFilter()"
                                      >
                                        <i
                                          class="fa fa-chevron-down toggle-data"
                                        ></i>
                                      </span>
                                    </h6>
                                  </div>
                                  <Slider
                                    @allFilters="allfilter"
                                    @priceVal="pricefilterArray"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-xl-9 col-sm-12">
                            <form>
                              <div class="form-group m-0">
                                <input
                                  class="form-control"
                                  type="text"
                                  :placeholder="$t('Search') + ' ...'"
                                />
                                <i class="fa fa-search"></i>
                              </div>
                            </form>
                            <div class="col-sm-12">
                              <div v-if="getAllEvent.length == 0">
                                <div class="search-not-found text-center">
                                  <img
                                    :src="getImgUrl('empty-search.png')"
                                    alt
                                    class="second-search"
                                  />
                                  <p>
                                    {{ $t("No-Results-For-This-Search") }}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="product-wrapper-grid"
                        :class="listViewEnable ? 'list-view' : ''"
                      >
                        <div class="row">
                          <div
                            :class="[
                              col2
                                ? 'col-md-6'
                                : col3
                                ? 'col-lg-4 col-md-6'
                                : col4
                                ? 'col-xl-3 col-md-6'
                                : col6
                                ? 'col-xl-2 col-lg-4 col-md-6'
                                : list
                                ? 'col-xl-12'
                                : 'col-xl-3 col-md-6'
                            ]"
                            v-for="(event, index) in getAllEvent"
                            :key="index"
                          >
                            <div class="card">
                              <div class="product-box">
                                <div class="product-img">
                                  <div
                                    class="ribbon ribbon-primary"
                                    v-if="event.sale"
                                  >
                                    {{ $t("Attendees-Full") }}
                                  </div>
                                  <img
                                    class="img-fluid"
                                    :src="
                                      event.image !== '' &&
                                      event.image !== undefined
                                        ? event.image
                                        : getImgUrl('defaultEvent.png')
                                    "
                                  />
                                </div>

                                <div class="product-details">
                                  <!-- <div class="rating">
                                    <i class="fa fa-star"></i
                                    ><i class="fa fa-star"></i
                                    ><i class="fa fa-star"></i
                                    ><i class="fa fa-star"></i
                                    ><i class="fa fa-star"></i>
                                  </div> -->
                                  <router-link :to="'/events/' + event['_id']">
                                    <h4>{{ event.title }}</h4>
                                  </router-link>
                                  <p class="mt-3">
                                    <b>{{
                                      getEventTimeString(
                                        event.start,
                                        event.duration / 60000
                                      )
                                    }}</b>
                                  </p>
                                  <p>
                                    <b v-if="event.where === 'local'">{{
                                      $t("Local-Event")
                                    }}</b>
                                    <b v-else>{{ $t("Online-Event") }}</b>
                                  </p>
                                  <div class="product-price text-center">
                                    {{
                                      event.interested
                                        ? event.interested.length
                                        : 0
                                    }} &nbsp;<small>&nbsp;{{ $t("人") }}</small>
                                  </div>
                                  <div class="text-center mt-4 mb-2" v-if="!isEventOver(event)">
                                    <b-button
                                      variant="outline-primary"
                                      class="btn-pill"
                                      disabled
                                      size="lg"
                                      v-if="
                                        event.interested &&
                                        event.interested.find(
                                          (m) => m.wallet === currUser.wallet
                                        )
                                      "
                                      >✔️ {{ $t("Event-Followed") }}</b-button
                                    >
                                    <b-button
                                      id="default-lg-primary"
                                      variant="primary"
                                      class="btn-pill"
                                      size="lg"
                                      @click="followEvent(event)"
                                      v-else
                                      >{{ $t("Follow-Event") }}</b-button
                                    >
                                  </div>
                                  <div class="text-center mt-4 mb-2" v-else>
                                    <b-button
                                      id="default-lg-primary"
                                      variant="outline-info"
                                      class="btn-pill"
                                      size="lg"
                                      disabled
                                      >{{ $t("Event-is-Over") }}</b-button
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </b-tab>
                </b-tabs>
              </div>
              <div class="col-sm-6 create-project-btn">
                <div class="text-right">
                  <div class="form-group mb-0 mr-0"></div>
                  <!-- <a class="btn btn-primary" href="">
                    <i data-feather="plus-square"> </i>Create New Project</a
                  > -->
                  <router-link class="btn btn-primary" to="/events/create">
                    <i data-feather="plus-square"> </i
                    >{{ $t("Create-Event") }}</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- QuickView Modal -->
    <b-modal size="lg" centered v-model="modalShow" hide-footer hide-header>
      <button
        class="close"
        type="button"
        v-on:click="quickViewClose(modalShow)"
      >
        <span>×</span>
      </button>
      <div class="product-box quickview row">
        <div class="product-details col-lg-6 text-left">
          <h4>{{ quickViewProduct.name }}</h4>
          <div class="product-price">
            {{ quickViewProduct.price | currency }}
            <del>{{ quickViewProduct.salePrice | currency }}</del>
          </div>
          <div class="product-view">
            <h6 class="f-w-600">Product Details</h6>
            <p class="mb-0">
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo.
            </p>
          </div>
          <div class="product-size">
            <ul>
              <li>
                <button class="btn btn-outline-light" type="button">M</button>
              </li>
              <li>
                <button class="btn btn-outline-light" type="button">L</button>
              </li>
              <li>
                <button class="btn btn-outline-light" type="button">Xl</button>
              </li>
            </ul>
          </div>
          <div class="product-qnty">
            <h6 class="f-w-600">Quantity</h6>
            <div class="qty-box1">
              <div class="input-group">
                <i class="fa fa-minus btnGtr1" @click="decrement()"></i>
                <input
                  class="touchspin1 text-center"
                  v-model="counter"
                  name="quantity"
                  type="text"
                />
                <i class="fa fa-plus btnLess1" @click="increment()"></i>
              </div>
            </div>
            <div class="addcart-btn mt-3">
              <router-link :to="'/ecommerce/cart'">
                <button
                  class="btn btn-primary m-r-10"
                  type="button"
                  data-original-title="btn btn-info-gradien"
                  title
                  @click="addToCart(quickViewProduct, counter)"
                >
                  Add To Cart
                </button>
              </router-link>
              <router-link
                :to="'/ecommerce/checkout'"
                class="btn btn-primary cart-btn-transform"
                >Buy Now</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import Slider from "./event_filter"

import { mapGetters, mapActions } from "vuex"
import {
  FETCH_NOTCLOSED_EVENT,
  FETCH_ONGOING_EVENT,
  GET_ONGOING_EVENT,
  FETCH_ALL_EVENT,
  GET_ALL_EVENT,
  REGISTER_EVENT,
  GET_NOTCLOSED_EVENT
} from "@/store/modules/event"
import { FETCH_WALLET_USER } from "@/store/modules/user"

export default {
  name: "ListEvents",
  components: {
    Slider
  },
  data() {
    return {
      isRegistering: -1,
      currUser: null,
      fileds: [
        "title",
        "where",
        "start",
        "duration",
        "image",
        "type",
        { interested: ["wallet"] }
      ],
      events: {
        notclosed: []
      },
      modalShow: false,
      quickViewProduct: [],
      counter: 1,
      priceArray: [],
      allfilters: [],
      items: [],
      filtered: false,
      col2: false,
      col3: false,
      col4: true,
      col6: false,
      listViewEnable: false,
      list: false
    }
  },
  mounted() {
    this.$store.dispatch(FETCH_WALLET_USER).then((user) => {
      this.currUser = user
      this.fetchAllEvents()
    })
  },
  computed: {
    ...mapGetters([GET_NOTCLOSED_EVENT, GET_ONGOING_EVENT, GET_ALL_EVENT]),
    ...mapActions([
      FETCH_NOTCLOSED_EVENT,
      FETCH_ONGOING_EVENT,
      FETCH_ALL_EVENT,
      REGISTER_EVENT,
      FETCH_WALLET_USER
    ])
  },
  methods: {
    isEventOver(event) {
      const now = new Date()
      const endtime = this.getEndtime(event.start, event.duration/ 60000)
      if (now > endtime) return true
      else return false
    },
    async fetchAllEvents() {
      await this.$store.dispatch(FETCH_NOTCLOSED_EVENT, this.fileds)
      await this.$store.dispatch(FETCH_ONGOING_EVENT, this.fileds)
      await this.$store.dispatch(FETCH_ALL_EVENT, this.fileds)
    },
    followEvent(event) {
      this.isRegistering = event["_id"]
      this.$store
        .dispatch(REGISTER_EVENT, {
          eventId: event["_id"],
          userId: this.currUser["_id"]
        })
        .then((result) => {
          this.fetchAllEvents().then(() => {
            this.isRegistering = -1
            console.log("followed!! result::", result)
          })
        })
        .catch((error) => {
          this.isRegistering = -1
          console.error(error)
        })
    },
    getImgUrl(path) {
      return require("@/assets/images/" + path)
    },
    getDatetimeString(datetime) {
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

    getEventTimeString(start, duration) {
      if (start === null || start === undefined) {
        return ""
      } else if (start === "" || start === 0) {
        return "待定"
      } else if (!duration) {
        return this.getDatetimeString(new Date(start))
      } else {
        const starttime = new Date(start)
        const endtime = new Date(Number(start) + Number(duration) * 60000)
        return (
          this.getDatetimeString(starttime) +
          " - " +
          this.getTimeString(endtime, starttime)
        )
      }
    },

    getEndtime(start, duration) {
      if (start && duration)
        return new Date(new Date(start).getTime() + Number(duration) * 60000)
      else if (start) return new Date(new Date(start).getTime() + 60 * 60000)
      else return new Date(new Date() + 60 * 60000)
    },

    // For Order By
    onChangeSort(event) {
      this.$store.dispatch("products/sortProducts", event.target.value)
    },

    //Filter by Category, Brand, Color
    allfilter(selectedVal) {
      this.allfilters = selectedVal
      this.$store.dispatch("products/setTags", selectedVal)
    },

    collapseFilter() {
      this.filtered = !this.filtered
    },

    //Price Filter
    pricefilterArray(item) {
      this.$store.dispatch("products/priceFilter", item)
    },

    //Add to cart
    addToCart: function (product, qty) {
      event.quantity = qty ? qty : 1
      this.$store.dispatch("products/addToCart", product)
    },

    //Quick View
    quickView: function (product) {
      this.modalShow = true
      return (this.quickViewProduct = product)
    },
    quickViewClose: function () {
      this.modalShow = false
    },

    //Quantity increment Decrement
    increment() {
      if (this.counter < this.quickViewProduct.stock) this.counter++
    },

    decrement() {
      if (this.counter > 1) this.counter--
    },

    //Grid changes
    grid2() {
      this.col2 = true
      this.col3 = false
      this.col4 = false
      this.col6 = false
      this.listViewEnable = false
    },
    grid3() {
      this.col2 = false
      this.col3 = true
      this.col4 = false
      this.col6 = false
      this.listViewEnable = false
    },
    grid4() {
      this.col2 = false
      this.col3 = false
      this.col4 = true
      this.col6 = false
      this.listViewEnable = false
    },
    grid6() {
      this.col2 = false
      this.col3 = false
      this.col4 = false
      this.col6 = true
      this.listViewEnable = false
    },
    listView() {
      this.listViewEnable = true
      this.list = true
      this.col2 = false
      this.col3 = false
      this.col4 = false
      this.col6 = false
    },
    gridView() {
      this.listViewEnable = false
      this.col4 = true
    }
  }
}
</script>
