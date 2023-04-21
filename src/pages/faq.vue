<template>
  <div>
    <Breadcrumbs main="" title="FAQ" />
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="faq-wrap">
        <div class="row">
          <div class="col-xl-4 xl-100">
            <div class="card bg-primary">
              <div class="card-body">
                <div class="media faq-widgets">
                  <div class="media-body">
                    <h5>Articles</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </p>
                  </div>
                  <feather type="file-text"></feather>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 xl-50 col-sm-6">
            <div class="card bg-primary">
              <div class="card-body">
                <div class="media faq-widgets">
                  <div class="media-body">
                    <h5>Knowledgebase</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </p>
                  </div>
                  <feather type="book-open"></feather>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 xl-50 col-sm-6">
            <div class="card bg-primary">
              <div class="card-body">
                <div class="media faq-widgets">
                  <div class="media-body">
                    <h5>Support</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </p>
                  </div>
                  <feather type="aperture"></feather>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="header-faq">
              <h5 class="mb-0">Quick Questions are answered</h5>
            </div>
            <div
              class="row default-according style-1 faq-accordion"
              id="accordionoc"
            >
              <div class="col-xl-8 xl-60 col-lg-6 col-md-7">
                <b-card no-body>
                  <b-card-header header-tag="header" role="tab">
                    <h5 class="mb-0">
                      <b-button
                        v-b-toggle.collapseicon1
                        class="btn btn-link collapsed"
                      >
                        <feather type="help-circle"></feather> Integrating
                        WordPress with Your Website?
                      </b-button>
                    </h5>
                  </b-card-header>
                  <b-collapse
                    id="collapseicon1"
                    accordion="accordion-1"
                    role="tabpanel"
                  >
                    <b-card-body
                      >Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.</b-card-body
                    >
                  </b-collapse>
                </b-card>

                <b-card no-body>
                  <b-card-header header-tag="header" role="tab">
                    <h5 class="mb-0">
                      <b-button
                        v-b-toggle.collapseicon2
                        class="btn btn-link collapsed"
                      >
                        <feather type="help-circle"></feather> WordPress Site
                        Maintenance ?
                      </b-button>
                    </h5>
                  </b-card-header>
                  <b-collapse
                    id="collapseicon2"
                    role="tabpanel"
                    accordion="accordion-1"
                  >
                    <b-card-body
                      >Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.</b-card-body
                    >
                  </b-collapse>
                </b-card>

                <b-card no-body>
                  <b-card-header header-tag="header" role="tab">
                    <h5 class="mb-0">
                      <b-button
                        v-b-toggle.collapseicon3
                        class="btn btn-link collapsed"
                      >
                        <feather type="help-circle"></feather> Meta Tags in
                        WordPress ?
                      </b-button>
                    </h5>
                  </b-card-header>
                  <b-collapse
                    id="collapseicon3"
                    role="tabpanel"
                    accordion="accordion-1"
                  >
                    <b-card-body
                      >Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.</b-card-body
                    >
                  </b-collapse>
                </b-card>

                <b-card no-body>
                  <b-card-header header-tag="header" role="tab">
                    <h5 class="mb-0">
                      <b-button
                        v-b-toggle.collapseicon4
                        class="btn btn-link collapsed"
                      >
                        <feather type="help-circle"></feather> WordPress in Your
                        Language ?
                      </b-button>
                    </h5>
                  </b-card-header>
                  <b-collapse
                    id="collapseicon4"
                    role="tabpanel"
                    accordion="accordion-1"
                  >
                    <b-card-body
                      >Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.</b-card-body
                    >
                  </b-collapse>
                </b-card>

                <div class="faq-title">
                  <h6>Intellectual Property</h6>
                </div>

                <b-card no-body>
                  <b-card-header header-tag="header" role="tab">
                    <h5 class="mb-0">
                      <b-button
                        v-b-toggle.collapseicon5
                        class="btn btn-link collapsed"
                      >
                        <feather type="help-circle"></feather> WordPress Site
                        Maintenance ?
                      </b-button>
                    </h5>
                  </b-card-header>
                  <b-collapse
                    id="collapseicon5"
                    role="tabpanel"
                    accordion="accordion-2"
                  >
                    <b-card-body
                      >Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.</b-card-body
                    >
                  </b-collapse>
                </b-card>

                <b-card no-body>
                  <b-card-header header-tag="header" role="tab">
                    <h5 class="mb-0">
                      <b-button
                        v-b-toggle.collapseicon6
                        class="btn btn-link collapsed"
                      >
                        <feather type="help-circle"></feather> WordPress in Your
                        Language ?
                      </b-button>
                    </h5>
                  </b-card-header>
                  <b-collapse
                    id="collapseicon6"
                    role="tabpanel"
                    accordion="accordion-2"
                  >
                    <b-card-body
                      >Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.</b-card-body
                    >
                  </b-collapse>
                </b-card>

                <b-card no-body>
                  <b-card-header header-tag="header" role="tab">
                    <h5 class="mb-0">
                      <b-button
                        v-b-toggle.collapseicon7
                        class="btn btn-link collapsed"
                      >
                        <feather type="help-circle"></feather> Integrating
                        WordPress with Your Website ?
                      </b-button>
                    </h5>
                  </b-card-header>
                  <b-collapse
                    id="collapseicon7"
                    role="tabpanel"
                    accordion="accordion-2"
                  >
                    <b-card-body
                      >Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.</b-card-body
                    >
                  </b-collapse>
                </b-card>

                <div class="faq-title">
                  <h6>Selling And Buying</h6>
                </div>

                <b-card no-body>
                  <b-card-header header-tag="header" role="tab">
                    <h5 class="mb-0">
                      <b-button
                        v-b-toggle.collapseicon8
                        class="btn btn-link collapsed"
                      >
                        <feather type="help-circle"></feather> WordPress Site
                        Maintenance ?
                      </b-button>
                    </h5>
                  </b-card-header>
                  <b-collapse
                    id="collapseicon8"
                    role="tabpanel"
                    accordion="accordion-3"
                  >
                    <b-card-body
                      >Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.</b-card-body
                    >
                  </b-collapse>
                </b-card>

                <b-card no-body>
                  <b-card-header header-tag="header" role="tab">
                    <h5 class="mb-0">
                      <b-button
                        v-b-toggle.collapseicon9
                        class="btn btn-link collapsed"
                      >
                        <feather type="help-circle"></feather> Meta Tags in
                        WordPress ?
                      </b-button>
                    </h5>
                  </b-card-header>
                  <b-collapse
                    id="collapseicon9"
                    role="tabpanel"
                    accordion="accordion-3"
                  >
                    <b-card-body
                      >Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.</b-card-body
                    >
                  </b-collapse>
                </b-card>

                <b-card no-body>
                  <b-card-header header-tag="header" role="tab">
                    <h5 class="mb-0">
                      <b-button
                        v-b-toggle.collapseicon10
                        class="btn btn-link collapsed"
                      >
                        <feather type="help-circle"></feather> Validating a
                        Website ?
                      </b-button>
                    </h5>
                  </b-card-header>
                  <b-collapse
                    id="collapseicon10"
                    role="tabpanel"
                    accordion="accordion-3"
                  >
                    <b-card-body
                      >Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.</b-card-body
                    >
                  </b-collapse>
                </b-card>

                <b-card no-body>
                  <b-card-header header-tag="header" role="tab">
                    <h5 class="mb-0">
                      <b-button
                        v-b-toggle.collapseicon11
                        class="btn btn-link collapsed"
                      >
                        <feather type="help-circle"></feather> Know Your Sources
                        ?
                      </b-button>
                    </h5>
                  </b-card-header>
                  <b-collapse
                    id="collapseicon11"
                    role="tabpanel"
                    accordion="accordion-3"
                  >
                    <b-card-body
                      >Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.</b-card-body
                    >
                  </b-collapse>
                </b-card>

                <div class="faq-title">
                  <h6>User Accounts</h6>
                </div>

                <b-card no-body>
                  <b-card-header header-tag="header" role="tab">
                    <h5 class="mb-0">
                      <b-button
                        v-b-toggle.collapseicon12
                        class="btn btn-link collapsed"
                      >
                        <feather type="help-circle"></feather> Integrating
                        WordPress with Your Website ?
                      </b-button>
                    </h5>
                  </b-card-header>
                  <b-collapse
                    id="collapseicon12"
                    role="tabpanel"
                    accordion="accordion-4"
                  >
                    <b-card-body
                      >Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.</b-card-body
                    >
                  </b-collapse>
                </b-card>

                <b-card no-body>
                  <b-card-header header-tag="header" role="tab">
                    <h5 class="mb-0">
                      <b-button
                        v-b-toggle.collapseicon13
                        class="btn btn-link collapsed"
                      >
                        <feather type="help-circle"></feather> WordPress Site
                        Maintenance ?
                      </b-button>
                    </h5>
                  </b-card-header>
                  <b-collapse
                    id="collapseicon13"
                    role="tabpanel"
                    accordion="accordion-4"
                  >
                    <b-card-body
                      >Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.</b-card-body
                    >
                  </b-collapse>
                </b-card>

                <b-card no-body>
                  <b-card-header header-tag="header" role="tab">
                    <h5 class="mb-0">
                      <b-button
                        v-b-toggle.collapseicon14
                        class="btn btn-link collapsed"
                      >
                        <feather type="help-circle"></feather> WordPress in Your
                        Language ?
                      </b-button>
                    </h5>
                  </b-card-header>
                  <b-collapse
                    id="collapseicon14"
                    role="tabpanel"
                    accordion="accordion-4"
                  >
                    <b-card-body
                      >Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.</b-card-body
                    >
                  </b-collapse>
                </b-card>

                <b-card no-body>
                  <b-card-header header-tag="header" role="tab">
                    <h5 class="mb-0">
                      <b-button
                        v-b-toggle.collapseicon15
                        class="btn btn-link collapsed"
                      >
                        <feather type="help-circle"></feather> Validating a
                        Website ?
                      </b-button>
                    </h5>
                  </b-card-header>
                  <b-collapse
                    id="collapseicon15"
                    role="tabpanel"
                    accordion="accordion-4"
                  >
                    <b-card-body
                      >Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.</b-card-body
                    >
                  </b-collapse>
                </b-card>

                <b-card no-body>
                  <b-card-header header-tag="header" role="tab">
                    <h5 class="mb-0">
                      <b-button
                        v-b-toggle.collapseicon16
                        class="btn btn-link collapsed"
                      >
                        <feather type="help-circle"></feather> Meta Tags in
                        WordPress ?
                      </b-button>
                    </h5>
                  </b-card-header>
                  <b-collapse
                    id="collapseicon16"
                    role="tabpanel"
                    accordion="accordion-4"
                  >
                    <b-card-body
                      >Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.</b-card-body
                    >
                  </b-collapse>
                </b-card>
              </div>
              <div class="col-xl-4 xl-40 col-lg-6 col-md-5">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="card card-mb-faq xs-mt-search">
                      <div class="card-header faq-header">
                        <h5>Search articles</h5>
                        <feather type="help-circle"></feather>
                      </div>
                      <div class="card-body faq-body">
                        <div class="faq-form">
                          <input
                            class="form-control"
                            type="text"
                            placeholder="Search.."
                          /><feather
                            class="search-icon"
                            type="search"
                          ></feather>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="card card-mb-faq">
                      <div class="card-header faq-header">
                        <h5>Navigation</h5>
                        <feather type="settings"></feather>
                      </div>
                      <div class="card-body faq-body">
                        <div class="navigation-btn">
                          <a class="btn btn-primary" href="#"
                            ><feather
                              class="m-r-10"
                              type="message-square"
                            ></feather
                            >Ask Question</a
                          >
                        </div>
                        <div class="navigation-option">
                          <ul>
                            <li>
                              <a href="#"
                                ><feather type="edit"></feather>Tutorials</a
                              >
                            </li>
                            <li>
                              <a href="#"
                                ><feather type="globe"></feather>Help center</a
                              >
                            </li>
                            <li>
                              <a href="#"
                                ><feather type="book-open"></feather
                                >Knowledgebase</a
                              >
                            </li>
                            <li>
                              <a href="#"
                                ><feather type="file-text"></feather>Articles</a
                              ><span
                                class="badge badge-primary badge-pill pull-right"
                                >42</span
                              >
                            </li>
                            <li>
                              <a href="#"
                                ><feather type="youtube"></feather>Video
                                Tutorials</a
                              ><span
                                class="badge badge-primary badge-pill pull-right"
                                >648</span
                              >
                            </li>
                            <li>
                              <a href="#"
                                ><feather type="message-circle"></feather>Ask
                                our community</a
                              >
                            </li>
                            <li>
                              <a href="#"
                                ><feather type="mail"></feather>Contact us</a
                              >
                            </li>
                          </ul>
                          <hr />
                          <ul>
                            <li>
                              <a href="#"
                                ><feather type="message-circle"></feather>Ask
                                our community</a
                              >
                            </li>
                            <li>
                              <a href="#"
                                ><feather type="mail"></feather>Contact us</a
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="card">
                      <div class="card-header faq-header">
                        <h5 class="d-inline-block">Latest Updates</h5>
                        <span class="pull-right d-inline-block">See All</span>
                      </div>
                      <div class="card-body faq-body">
                        <div class="media updates-faq-main">
                          <div class="updates-faq">
                            <feather
                              type="rotate-cw"
                              class="font-primary"
                            ></feather>
                          </div>
                          <div class="media-body updates-bottom-time">
                            <p>
                              <a href="#">David Linner </a>requested money back
                              for a double debit card charge
                            </p>
                            <p>10 minutes ago</p>
                          </div>
                        </div>
                        <div class="media updates-faq-main">
                          <div class="updates-faq">
                            <feather
                              type="dollar-sign"
                              class="font-primary"
                            ></feather>
                          </div>
                          <div class="media-body updates-bottom-time">
                            <p>All sellers have received monthly payouts</p>
                            <p>2 hours ago</p>
                          </div>
                        </div>
                        <div class="media updates-faq-main">
                          <div class="updates-faq">
                            <feather type="link" class="font-primary"></feather>
                          </div>
                          <div class="media-body updates-bottom-time">
                            <p>
                              User Christopher <a href="#">Wallace</a> is on
                              hold and awaiting for staff reply
                            </p>
                            <p>45 minutes ago</p>
                          </div>
                        </div>
                        <div class="media updates-faq-main">
                          <div class="updates-faq">
                            <feather
                              type="check"
                              class="font-primary"
                            ></feather>
                          </div>
                          <div class="media-body updates-bottom-time">
                            <p>
                              Ticket #43683 has been closed by
                              <a href="#">Victoria Wilson</a>
                            </p>
                            <p>Dec 7, 11:48</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="header-faq">
              <h5 class="mb-0">Featured Tutorials</h5>
            </div>
            <div class="row">
              <div class="col-xl-3 xl-50 col-md-6 box-col-6">
                <px-card :actions="false" class="features-faq product-box">
                  <div slot="headerCustom">
                    <div class="faq-image product-img">
                      <img
                        class="img-fluid"
                        src="../assets/images/faq/1.jpg"
                        alt=""
                      />
                      <div class="product-hover">
                        <ul>
                          <li><i class="icon-link"></i></li>
                          <li><i class="icon-import"></i></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div slot="with-padding">
                    <h6>Web Design</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </p>
                  </div>
                  <div slot="footer">
                    <span>Dec 15, 2019</span
                    ><span class="pull-right"
                      ><i class="fa fa-star font-primary"></i
                      ><i class="fa fa-star font-primary"></i
                      ><i class="fa fa-star font-primary"></i
                      ><i class="fa fa-star font-primary"></i
                      ><i class="fa fa-star font-primary"></i
                    ></span>
                  </div>
                </px-card>
              </div>
              <div class="col-xl-3 xl-50 col-md-6 box-col-6">
                <px-card :actions="false" class="features-faq product-box">
                  <div slot="headerCustom">
                    <div class="faq-image product-img">
                      <img
                        class="img-fluid"
                        src="../assets/images/faq/2.jpg"
                        alt=""
                      />
                      <div class="product-hover">
                        <ul>
                          <li><i class="icon-link"></i></li>
                          <li><i class="icon-import"></i></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div slot="with-padding">
                    <h6>Web Development</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </p>
                  </div>
                  <div slot="footer">
                    <span>Dec 15, 2019</span
                    ><span class="pull-right"
                      ><i class="fa fa-star font-primary"></i
                      ><i class="fa fa-star font-primary"></i
                      ><i class="fa fa-star font-primary"></i
                      ><i class="fa fa-star font-primary"></i
                      ><i class="fa fa-star font-primary"></i
                    ></span>
                  </div>
                </px-card>
              </div>
              <div class="col-xl-3 xl-50 col-md-6 box-col-6">
                <px-card :actions="false" class="features-faq product-box">
                  <div slot="headerCustom">
                    <div class="faq-image product-img">
                      <img
                        class="img-fluid"
                        src="../assets/images/faq/3.jpg"
                        alt=""
                      />
                      <div class="product-hover">
                        <ul>
                          <li><i class="icon-link"></i></li>
                          <li><i class="icon-import"></i></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div slot="with-padding">
                    <h6>UI Design</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </p>
                  </div>
                  <div slot="footer">
                    <span>Dec 15, 2019</span
                    ><span class="pull-right"
                      ><i class="fa fa-star font-primary"></i
                      ><i class="fa fa-star font-primary"></i
                      ><i class="fa fa-star font-primary"></i
                      ><i class="fa fa-star font-primary"></i
                      ><i class="fa fa-star font-primary"></i
                    ></span>
                  </div>
                </px-card>
              </div>
              <div class="col-xl-3 xl-50 col-md-6 box-col-6">
                <px-card :actions="false" class="features-faq product-box">
                  <div slot="headerCustom">
                    <div class="faq-image product-img">
                      <img
                        class="img-fluid"
                        src="../assets/images/faq/4.jpg"
                        alt=""
                      />
                      <div class="product-hover">
                        <ul>
                          <li><i class="icon-link"></i></li>
                          <li><i class="icon-import"></i></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div slot="with-padding">
                    <h6>UX Design</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </p>
                  </div>
                  <div slot="footer">
                    <span>Dec 15, 2019</span
                    ><span class="pull-right"
                      ><i class="fa fa-star font-primary"></i
                      ><i class="fa fa-star font-primary"></i
                      ><i class="fa fa-star font-primary"></i
                      ><i class="fa fa-star font-primary"></i
                      ><i class="fa fa-star font-primary"></i
                    ></span>
                  </div>
                </px-card>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="header-faq">
              <h5 class="mb-0">Latest articles and videos</h5>
            </div>
            <div class="row">
              <div class="col-xl-4 col-md-6">
                <div class="row">
                  <div class="col-sm-12">
                    <px-card :actions="false">
                      <div slot="with-padding">
                        <div class="media">
                          <feather type="codepen" class="m-r-30"></feather>
                          <div class="media-body">
                            <h6 class="f-w-600">Using Video</h6>
                            <p>
                              Cras dapibus. Vivamus elementum semper nisi.
                              Aenean vulputate eleifend tellus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </px-card>
                  </div>
                  <div class="col-sm-12">
                    <px-card :actions="false">
                      <div slot="with-padding">
                        <div class="media">
                          <feather type="codepen" class="m-r-30"></feather>
                          <div class="media-body">
                            <h6 class="f-w-600">Vel illum qu</h6>
                            <p>
                              Cras dapibus. Vivamus elementum semper nisi.
                              Aenean vulputate eleifend tellus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </px-card>
                  </div>
                  <div class="col-sm-12">
                    <px-card :actions="false">
                      <div slot="with-padding">
                        <div class="media">
                          <feather type="codepen" class="m-r-30"></feather>
                          <div class="media-body">
                            <h6 class="f-w-600">Cum sociis natoqu</h6>
                            <p>
                              Cras dapibus. Vivamus elementum semper nisi.
                              Aenean vulputate eleifend tellus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </px-card>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-6">
                <div class="row">
                  <div class="col-sm-12">
                    <px-card :actions="false">
                      <div slot="with-padding">
                        <div class="media">
                          <feather type="file-text" class="m-r-30"></feather>
                          <div class="media-body">
                            <h6 class="f-w-600">Donec pede justo</h6>
                            <p>
                              Cras dapibus. Vivamus elementum semper nisi.
                              Aenean vulputate eleifend tellus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </px-card>
                  </div>
                  <div class="col-sm-12">
                    <px-card :actions="false">
                      <div slot="with-padding">
                        <div class="media">
                          <feather type="file-text" class="m-r-30"></feather>
                          <div class="media-body">
                            <h6 class="f-w-600">Nam quam nunc</h6>
                            <p>
                              Cras dapibus. Vivamus elementum semper nisi.
                              Aenean vulputate eleifend tellus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </px-card>
                  </div>
                  <div class="col-sm-12">
                    <px-card :actions="false">
                      <div slot="with-padding">
                        <div class="media">
                          <feather type="file-text" class="m-r-30"></feather>
                          <div class="media-body">
                            <h6 class="f-w-600">Using Video</h6>
                            <p>
                              Cras dapibus. Vivamus elementum semper nisi.
                              Aenean vulputate eleifend tellus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </px-card>
                  </div>
                </div>
              </div>
              <div class="col-xl-4">
                <div class="row">
                  <div class="col-xl-12 col-md-6">
                    <px-card :actions="false">
                      <div slot="with-padding">
                        <div class="media">
                          <feather type="youtube" class="m-r-30"></feather>
                          <div class="media-body">
                            <h6 class="f-w-600">Vel illum qu</h6>
                            <p>
                              Cras dapibus. Vivamus elementum semper nisi.
                              Aenean vulputate eleifend tellus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </px-card>
                  </div>
                  <div class="col-xl-12 col-md-6">
                    <px-card :actions="false">
                      <div slot="with-padding">
                        <div class="media">
                          <feather type="youtube" class="m-r-30"></feather>
                          <div class="media-body">
                            <h6 class="f-w-600">Cum sociis natoqu</h6>
                            <p>
                              Cras dapibus. Vivamus elementum semper nisi.
                              Aenean vulputate eleifend tellus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </px-card>
                  </div>
                  <div class="col-xl-12">
                    <px-card :actions="false">
                      <div slot="with-padding">
                        <div class="media">
                          <feather type="youtube" class="m-r-30"></feather>
                          <div class="media-body">
                            <h6 class="f-w-600">Donec pede justo</h6>
                            <p>
                              Cras dapibus. Vivamus elementum semper nisi.
                              Aenean vulputate eleifend tellus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </px-card>
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
<script></script>
