<template>
    <div>  
      <div class="container-fluid knowledgebase-page" style="padding-top: 40px;">
        <div class="row">
          <div class="col-12">
            <div class="knowledgebase-bg">
              <img
                class="bg-img-cover bg-center img-fluid"
                src="../../assets/images/knowledgebase/bg_1.jpg"
                alt="looginpage"
              />
            </div>
            <div class="knowledgebase-search">
              <div>
                <h3><b>SeeDAO 治理手册</b></h3>
                <form class="form-inline" action="#" method="get">
                  <div class="form-group w-100">
                    <feather type="search"></feather>
                    <input
                      class="form-control-plaintext w-100"
                      type="text"
                      placeholder="关键字搜寻..."
                      title=""
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-12">
            
            <div class="header-faq">
              <h3 class="mb-0">重要 SIP</h3>
            </div>
            <div class="row">
              <div class="col-xl-4 col-md-6">
                <div class="row">
                  <div class="col-sm-12">
                    <px-card :actions="false" >
                      <div slot="with-padding">
                        <div class="media">
                          <feather type="codepen" class="m-r-30"></feather>
                          <div class="media-body">
                            <h4 class="f-w-600"><b>元规则</b></h4>
                            <p>
                              Cras dapibus. Vivamus elementum semper nisi. Aenean
                              vulputate eleifend tellus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </px-card>
                  </div>
                  <div class="col-sm-12">
                    <px-card :actions="false" >
                      <div slot="with-padding">
                        <div class="media">
                          <feather type="codepen" class="m-r-30"></feather>
                          <div class="media-body">
                            <h4 class="f-w-600"><b>治理手册</b></h4>
                            <p>
                              Cras dapibus. Vivamus elementum semper nisi. Aenean
                              vulputate eleifend tellus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </px-card>
                  </div>
                  <div class="col-sm-12">
                    <px-card :actions="false" >
                      <div slot="with-padding">
                        <div class="media">
                          <feather type="codepen" class="m-r-30"></feather>
                          <div class="media-body">
                            <h4 class="f-w-600"><b>节点共识大会规则</b></h4>
                            <p>
                              Cras dapibus. Vivamus elementum semper nisi. Aenean
                              vulputate eleifend tellus.
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
                    <px-card :actions="false" >
                      <div slot="with-padding">
                        <div class="media">
                          <feather type="file-text" class="m-r-30"></feather>
                          <div class="media-body">
                            <h4 class="f-w-600"><b>三层治理体系</b></h4>
                            <p>
                              Cras dapibus. Vivamus elementum semper nisi. Aenean
                              vulputate eleifend tellus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </px-card>
                  </div>
                  <div class="col-sm-12">
                    <px-card :actions="false" >
                      <div slot="with-padding">
                        <div class="media">
                          <feather type="file-text" class="m-r-30"></feather>
                          <div class="media-body">
                            <h6 class="f-w-600"><h4 class="f-w-600"><b>SBT 管理发放规则</b></h4></h6>
                            <p>
                              Cras dapibus. Vivamus elementum semper nisi. Aenean
                              vulputate eleifend tellus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </px-card>
                  </div>
                  <div class="col-sm-12">
                    <px-card :actions="false" >
                      <div slot="with-padding">
                        <div class="media">
                          <feather type="file-text" class="m-r-30"></feather>
                          <div class="media-body">
                            <h4 class="f-w-600"><b>城市联络人计划</b></h4>
                            <p>
                              Cras dapibus. Vivamus elementum semper nisi. Aenean
                              vulputate eleifend tellus.
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
                    <px-card :actions="false" >
                      <div slot="with-padding">
                        <div class="media">
                          <feather type="youtube" class="m-r-30"></feather>
                          <div class="media-body">
                            <h4 class="f-w-600"><b>公共教育与新手村计划</b></h4>
                            <p>
                              Cras dapibus. Vivamus elementum semper nisi. Aenean
                              vulputate eleifend tellus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </px-card>
                  </div>
                  <div class="col-xl-12 col-md-6">
                    <px-card :actions="false" >
                      <div slot="with-padding">
                        <div class="media">
                          <feather type="youtube" class="m-r-30"></feather>
                          <div class="media-body">
                            <h4 class="f-w-600"><b>SeeDAO 操作系统</b></h4>
                            <p>
                              Cras dapibus. Vivamus elementum semper nisi. Aenean
                              vulputate eleifend tellus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </px-card>
                  </div>
                  <div class="col-xl-12">
                    <px-card :actions="false" >
                      <div slot="with-padding">
                        <div class="media">
                          <feather type="youtube" class="m-r-30"></feather>
                          <div class="media-body">
                            <h4 class="f-w-600"><b>市政厅伙伴计划</b></h4>
                            <p>
                              Cras dapibus. Vivamus elementum semper nisi. Aenean
                              vulputate eleifend tellus.
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
          <div class="col-sm-12">
            <div class="row">
              <div class="col-sm-12">
                <px-card title="SeeDAO III 级规则" :actions="false">
                  <div slot="with-padding">
                    <div class="row browse">
                      <div
                        class="col-xl-4 xl-50 col-md-6"
                        v-for="(item, index) in knowledgebasedata"
                        :key="index"
                      >
                        <div class="browse-articles">
                          <h6>
                            <span><feather type="archive"></feather></span
                            >{{ item.title }}
                          </h6>
                          <ul>
                            <li>
                              <a href="#"
                                ><span><feather type="file-text"></feather> </span
                                ><span> {{ item.text1 }} </span></a
                              >
                            </li>
                            <li>
                              <a href="#"
                                ><span><feather type="file-text"></feather> </span
                                ><span> {{ item.text2 }} </span>
                                <span
                                  class="badge badge-primary pull-right"
                                  v-if="item.text2_badge"
                                >
                                  {{ item.text2_badge }}
                                </span></a
                              >
                            </li>
                            <li>
                              <a href="#"
                                ><span><feather type="file-text"></feather> </span
                                ><span> {{ item.text3 }} </span></a
                              >
                            </li>
                            <li>
                              <a href="#"
                                ><span><feather type="file-text"></feather> </span
                                ><span> {{ item.text4 }} </span></a
                              >
                            </li>
                            <li>
                              <a href="#"
                                ><span
                                  ><feather type="arrow-right"></feather> </span
                                ><span> {{ item.text5 }} </span></a
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </px-card>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="header-faq">
              <h5 class="mb-0">治理规则讲座</h5>
            </div>
            <div class="row">
              <div class="col-xl-3 xl-50 col-md-6 box-col-6">
                <px-card :actions="false" class="features-faq product-box">
                  <div slot="headerCustom">
                    <div class="faq-image product-img">
                    <img
                      class="img-fluid"
                      src="../../assets/images/faq/1.jpg"
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
                      natoque penatibus et magnis dis parturient montes, nascetur
                      ridiculus mus.
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
                      src="../../assets/images/faq/2.jpg"
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
                      natoque penatibus et magnis dis parturient montes, nascetur
                      ridiculus mus.
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
                      src="../../assets/images/faq/3.jpg"
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
                      natoque penatibus et magnis dis parturient montes, nascetur
                      ridiculus mus.
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
                      src="../../assets/images/faq/4.jpg"
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
                      natoque penatibus et magnis dis parturient montes, nascetur
                      ridiculus mus.
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
        </div>
      </div>
    </div>
  </template>
  
  <script>
    import { mapState } from 'vuex';
    
    export default {
      data() {
        return {};
      },
      computed: {
        ...mapState({
          knowledgebasedata: (state) => state.common.knowledgebasedata,
        }),
      },
    };
  </script>
  
  <style>
  .search-form.search-knowledge .form-group {
    position: relative;
  }
  .search-form.search-knowledge .form-group:after {
    position: absolute;
    content: "\F002";
    font-family: FontAwesome;
    top: 10px;
    left: 30px;
  }
  </style>
  