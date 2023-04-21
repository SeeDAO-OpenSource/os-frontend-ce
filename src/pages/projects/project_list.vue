<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid search-page" style="padding-top: 40px">
      <div class="row">
        <div class="col-sm-12">
          <px-card :actions="false">
            <div slot="headerCustom">
              <form class="theme-form">
                <div class="input-group m-0">
                  <input
                    class="form-control-plaintext"
                    type="search"
                    placeholder="搜寻项目 .."
                  />
                  <div class="input-group-append">
                    <span class="btn btn-primary mt-0">搜寻</span>
                  </div>
                </div>
              </form>
            </div>
            <div slot="with-padding">
              <b-tabs content-class="mt-3" class="search-list">
                <b-tab active>
                  <template #title>
                    <i class="icon-target"></i> <strong>所有项目</strong>
                  </template>
                  <div
                    class="search-links tab-pane fade show active"
                    id="all-links"
                    role="tabpanel"
                    aria-labelledby="all-link"
                  >
                    <div class="row">
                      <div class="col-lg-12 col-md-12 box-col-12">
                        <div class="info-block">
                          <h5><b>城市联络人计划</b></h5>
                          <p>
                            通过城市联络人计划 (SIP-41) ，来实现
                            SeeDAO在物理世界的全球连接。这种连接不是基于一个个物理空间，而是基于空间里的人。SeeDAO的城市联络人在哪里，
                            SeeDAO的线下据点就在哪里。
                          </p>
                          <div class="star-ratings">
                            <ul class="search-info">
                              <li>签头人</li>
                              <li>成员</li>
                            </ul>
                          </div>
                          <div class="customers d-flex">
                            <ul>
                              <li class="d-inline-block">
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>

                            <ul class="col-md-6">
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/2.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/3.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>
                          </div>
                          <div class="d-flex mt-3">
                            <ul
                              class="col-md-12"
                              style="padding-right: 0px; padding-left: 0px"
                            >
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-heart-o"></i> 50
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-chain"></i> 3
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-bullhorn"></i> 12
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-dollar"></i> 800k
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-check-square-o"></i>

                                21
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="info-block">
                          <h5><b>SeeDAO新手村</b></h5>
                          <p>
                            根据公共教育与新手村计划提案(SIP-58) ，，引导取得
                            SeeDAO 身份 SBT 成员，逐步取得积分达到 L1
                            级别贡献者，并且有自主能力能持续在社区进行贡献，往
                            L2, 3, 4 更高级别前进。
                          </p>
                          <div class="star-ratings">
                            <ul class="search-info">
                              <li>签头人</li>
                              <li>成员</li>
                            </ul>
                          </div>
                          <div class="customers d-flex">
                            <ul>
                              <li class="d-inline-block">
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>

                            <ul class="col-md-6">
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/2.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/3.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>
                          </div>
                          <div class="d-flex mt-3">
                            <ul
                              class="col-md-12"
                              style="padding-right: 0px; padding-left: 0px"
                            >
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-heart-o"></i> 50
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-chain"></i> 3
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-bullhorn"></i> 12
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-dollar"></i> 800k
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-check-square-o"></i>

                                21
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="info-block">
                          <h5><b>SeeDAO OS 项目组</b></h5>
                          <p>
                            根据SeeDAO 操作系统立项(SIP-40) ，为提升 DAO
                            内协作效率，帮助 SeeDAO 成员走出Discord
                            去协作，汇集多个媒介流量 ( 微信、小红书等
                            )，提供成员 Onboarding 的清晰管道。
                          </p>
                          <div class="star-ratings">
                            <ul class="search-info">
                              <li>签头人</li>
                              <li>成员</li>
                            </ul>
                          </div>
                          <div class="customers d-flex">
                            <ul>
                              <li class="d-inline-block">
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>

                            <ul class="col-md-6">
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/2.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/3.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>
                          </div>
                          <div class="d-flex mt-3">
                            <ul
                              class="col-md-12"
                              style="padding-right: 0px; padding-left: 0px"
                            >
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-heart-o"></i> 50
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-chain"></i> 3
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-bullhorn"></i> 12
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-dollar"></i> 800k
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-check-square-o"></i>

                                21
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div class="col-12 m-t-30">
                        <nav aria-label="...">
                          <ul class="pagination pagination-primary">
                            <li class="page-item disabled">
                              <a class="page-link" href="#" tabindex="-1"
                                >Previous</a
                              >
                            </li>
                            <li class="page-item active">
                              <a class="page-link" href="#">1</a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#"
                                >2<span class="sr-only">(current)</span></a
                              >
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">3</a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">Next</a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </b-tab>
                <b-tab>
                  <template #title>
                    <i class="icon-image"></i> <strong>软件项目</strong>
                  </template>
                  <div
                    class="search-links tab-pane fade show active"
                    id="all-links"
                    role="tabpanel"
                    aria-labelledby="all-link"
                  >
                    <div class="row">
                      <div class="col-lg-12 col-md-12 box-col-12">
                        <div class="info-block">
                          <h5><b>城市联络人计划</b></h5>
                          <p>
                            通过城市联络人计划 (SIP-41) ，来实现
                            SeeDAO在物理世界的全球连接。这种连接不是基于一个个物理空间，而是基于空间里的人。SeeDAO的城市联络人在哪里，
                            SeeDAO的线下据点就在哪里。
                          </p>
                          <div class="star-ratings">
                            <ul class="search-info">
                              <li>签头人</li>
                              <li>成员</li>
                            </ul>
                          </div>
                          <div class="customers d-flex">
                            <ul>
                              <li class="d-inline-block">
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>

                            <ul class="col-md-6">
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/2.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/3.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>
                          </div>
                          <div class="d-flex mt-3">
                            <ul
                              class="col-md-12"
                              style="padding-right: 0px; padding-left: 0px"
                            >
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-heart-o"></i> 50
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-chain"></i> 3
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-bullhorn"></i> 12
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-dollar"></i> 800k
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-check-square-o"></i>

                                21
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="info-block">
                          <h5><b>SeeDAO新手村</b></h5>
                          <p>
                            根据公共教育与新手村计划提案(SIP-58) ，，引导取得
                            SeeDAO 身份 SBT 成员，逐步取得积分达到 L1
                            级别贡献者，并且有自主能力能持续在社区进行贡献，往
                            L2, 3, 4 更高级别前进。
                          </p>
                          <div class="star-ratings">
                            <ul class="search-info">
                              <li>签头人</li>
                              <li>成员</li>
                            </ul>
                          </div>
                          <div class="customers d-flex">
                            <ul>
                              <li class="d-inline-block">
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>

                            <ul class="col-md-6">
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/2.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/3.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>
                          </div>
                          <div class="d-flex mt-3">
                            <ul
                              class="col-md-12"
                              style="padding-right: 0px; padding-left: 0px"
                            >
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-heart-o"></i> 50
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-chain"></i> 3
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-bullhorn"></i> 12
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-dollar"></i> 800k
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-check-square-o"></i>

                                21
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="info-block">
                          <h5><b>SeeDAO OS 项目组</b></h5>
                          <p>
                            根据SeeDAO 操作系统立项(SIP-40) ，为提升 DAO
                            内协作效率，帮助 SeeDAO 成员走出Discord
                            去协作，汇集多个媒介流量 ( 微信、小红书等
                            )，提供成员 Onboarding 的清晰管道。
                          </p>
                          <div class="star-ratings">
                            <ul class="search-info">
                              <li>签头人</li>
                              <li>成员</li>
                            </ul>
                          </div>
                          <div class="customers d-flex">
                            <ul>
                              <li class="d-inline-block">
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>

                            <ul class="col-md-6">
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/2.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/3.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>
                          </div>
                          <div class="d-flex mt-3">
                            <ul
                              class="col-md-12"
                              style="padding-right: 0px; padding-left: 0px"
                            >
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-heart-o"></i> 50
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-chain"></i> 3
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-bullhorn"></i> 12
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-dollar"></i> 800k
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-check-square-o"></i>

                                21
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div class="col-12 m-t-30">
                        <nav aria-label="...">
                          <ul class="pagination pagination-primary">
                            <li class="page-item disabled">
                              <a class="page-link" href="#" tabindex="-1"
                                >Previous</a
                              >
                            </li>
                            <li class="page-item active">
                              <a class="page-link" href="#">1</a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#"
                                >2<span class="sr-only">(current)</span></a
                              >
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">3</a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">Next</a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </b-tab>
                <b-tab>
                  <template #title>
                    <i class="icon-video-clapper"></i> <strong>内容项目</strong>
                  </template>
                  <div
                    class="search-links tab-pane fade show active"
                    id="all-links"
                    role="tabpanel"
                    aria-labelledby="all-link"
                  >
                    <div class="row">
                      <div class="col-lg-12 col-md-12 box-col-12">
                        <div class="info-block">
                          <h5><b>城市联络人计划</b></h5>
                          <p>
                            通过城市联络人计划 (SIP-41) ，来实现
                            SeeDAO在物理世界的全球连接。这种连接不是基于一个个物理空间，而是基于空间里的人。SeeDAO的城市联络人在哪里，
                            SeeDAO的线下据点就在哪里。
                          </p>
                          <div class="star-ratings">
                            <ul class="search-info">
                              <li>签头人</li>
                              <li>成员</li>
                            </ul>
                          </div>
                          <div class="customers d-flex">
                            <ul>
                              <li class="d-inline-block">
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>

                            <ul class="col-md-6">
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/2.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/3.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>
                          </div>
                          <div class="d-flex mt-3">
                            <ul
                              class="col-md-12"
                              style="padding-right: 0px; padding-left: 0px"
                            >
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-heart-o"></i> 50
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-chain"></i> 3
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-bullhorn"></i> 12
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-dollar"></i> 800k
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-check-square-o"></i>

                                21
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="info-block">
                          <h5><b>SeeDAO新手村</b></h5>
                          <p>
                            根据公共教育与新手村计划提案(SIP-58) ，，引导取得
                            SeeDAO 身份 SBT 成员，逐步取得积分达到 L1
                            级别贡献者，并且有自主能力能持续在社区进行贡献，往
                            L2, 3, 4 更高级别前进。
                          </p>
                          <div class="star-ratings">
                            <ul class="search-info">
                              <li>签头人</li>
                              <li>成员</li>
                            </ul>
                          </div>
                          <div class="customers d-flex">
                            <ul>
                              <li class="d-inline-block">
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>

                            <ul class="col-md-6">
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/2.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/3.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>
                          </div>
                          <div class="d-flex mt-3">
                            <ul
                              class="col-md-12"
                              style="padding-right: 0px; padding-left: 0px"
                            >
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-heart-o"></i> 50
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-chain"></i> 3
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-bullhorn"></i> 12
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-dollar"></i> 800k
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-check-square-o"></i>

                                21
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="info-block">
                          <h5><b>SeeDAO OS 项目组</b></h5>
                          <p>
                            根据SeeDAO 操作系统立项(SIP-40) ，为提升 DAO
                            内协作效率，帮助 SeeDAO 成员走出Discord
                            去协作，汇集多个媒介流量 ( 微信、小红书等
                            )，提供成员 Onboarding 的清晰管道。
                          </p>
                          <div class="star-ratings">
                            <ul class="search-info">
                              <li>签头人</li>
                              <li>成员</li>
                            </ul>
                          </div>
                          <div class="customers d-flex">
                            <ul>
                              <li class="d-inline-block">
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>

                            <ul class="col-md-6">
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/2.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/3.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>
                          </div>
                          <div class="d-flex mt-3">
                            <ul
                              class="col-md-12"
                              style="padding-right: 0px; padding-left: 0px"
                            >
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-heart-o"></i> 50
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-chain"></i> 3
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-bullhorn"></i> 12
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-dollar"></i> 800k
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-check-square-o"></i>

                                21
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div class="col-12 m-t-30">
                        <nav aria-label="...">
                          <ul class="pagination pagination-primary">
                            <li class="page-item disabled">
                              <a class="page-link" href="#" tabindex="-1"
                                >Previous</a
                              >
                            </li>
                            <li class="page-item active">
                              <a class="page-link" href="#">1</a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#"
                                >2<span class="sr-only">(current)</span></a
                              >
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">3</a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">Next</a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </b-tab>
                <b-tab>
                  <template #title>
                    <i class="icon-map-alt"></i> <strong>研究项目</strong>
                  </template>
                  <div
                    class="search-links tab-pane fade show active"
                    id="all-links"
                    role="tabpanel"
                    aria-labelledby="all-link"
                  >
                    <div class="row">
                      <div class="col-lg-12 col-md-12 box-col-12">
                        <div class="info-block">
                          <h5><b>城市联络人计划</b></h5>
                          <p>
                            通过城市联络人计划 (SIP-41) ，来实现
                            SeeDAO在物理世界的全球连接。这种连接不是基于一个个物理空间，而是基于空间里的人。SeeDAO的城市联络人在哪里，
                            SeeDAO的线下据点就在哪里。
                          </p>
                          <div class="star-ratings">
                            <ul class="search-info">
                              <li>签头人</li>
                              <li>成员</li>
                            </ul>
                          </div>
                          <div class="customers d-flex">
                            <ul>
                              <li class="d-inline-block">
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>

                            <ul class="col-md-6">
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/2.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/3.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>
                          </div>
                          <div class="d-flex mt-3">
                            <ul
                              class="col-md-12"
                              style="padding-right: 0px; padding-left: 0px"
                            >
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-heart-o"></i> 50
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-chain"></i> 3
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-bullhorn"></i> 12
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-dollar"></i> 800k
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-check-square-o"></i>

                                21
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="info-block">
                          <h5><b>SeeDAO新手村</b></h5>
                          <p>
                            根据公共教育与新手村计划提案(SIP-58) ，，引导取得
                            SeeDAO 身份 SBT 成员，逐步取得积分达到 L1
                            级别贡献者，并且有自主能力能持续在社区进行贡献，往
                            L2, 3, 4 更高级别前进。
                          </p>
                          <div class="star-ratings">
                            <ul class="search-info">
                              <li>签头人</li>
                              <li>成员</li>
                            </ul>
                          </div>
                          <div class="customers d-flex">
                            <ul>
                              <li class="d-inline-block">
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>

                            <ul class="col-md-6">
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/2.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/3.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>
                          </div>
                          <div class="d-flex mt-3">
                            <ul
                              class="col-md-12"
                              style="padding-right: 0px; padding-left: 0px"
                            >
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-heart-o"></i> 50
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-chain"></i> 3
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-bullhorn"></i> 12
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-dollar"></i> 800k
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-check-square-o"></i>

                                21
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="info-block">
                          <h5><b>SeeDAO OS 项目组</b></h5>
                          <p>
                            根据SeeDAO 操作系统立项(SIP-40) ，为提升 DAO
                            内协作效率，帮助 SeeDAO 成员走出Discord
                            去协作，汇集多个媒介流量 ( 微信、小红书等
                            )，提供成员 Onboarding 的清晰管道。
                          </p>
                          <div class="star-ratings">
                            <ul class="search-info">
                              <li>签头人</li>
                              <li>成员</li>
                            </ul>
                          </div>
                          <div class="customers d-flex">
                            <ul>
                              <li class="d-inline-block">
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>

                            <ul class="col-md-6">
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/2.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/3.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>
                          </div>
                          <div class="d-flex mt-3">
                            <ul
                              class="col-md-12"
                              style="padding-right: 0px; padding-left: 0px"
                            >
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-heart-o"></i> 50
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-chain"></i> 3
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-bullhorn"></i> 12
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-dollar"></i> 800k
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-check-square-o"></i>

                                21
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div class="col-12 m-t-30">
                        <nav aria-label="...">
                          <ul class="pagination pagination-primary">
                            <li class="page-item disabled">
                              <a class="page-link" href="#" tabindex="-1"
                                >Previous</a
                              >
                            </li>
                            <li class="page-item active">
                              <a class="page-link" href="#">1</a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#"
                                >2<span class="sr-only">(current)</span></a
                              >
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">3</a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">Next</a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </b-tab>
                <b-tab>
                  <template #title>
                    <strong>社交项目</strong>
                  </template>
                  <div
                    class="search-links tab-pane fade show active"
                    id="all-links"
                    role="tabpanel"
                    aria-labelledby="all-link"
                  >
                    <div class="row">
                      <div class="col-lg-12 col-md-12 box-col-12">
                        <div class="info-block">
                          <h5><b>城市联络人计划</b></h5>
                          <p>
                            通过城市联络人计划 (SIP-41) ，来实现
                            SeeDAO在物理世界的全球连接。这种连接不是基于一个个物理空间，而是基于空间里的人。SeeDAO的城市联络人在哪里，
                            SeeDAO的线下据点就在哪里。
                          </p>
                          <div class="star-ratings">
                            <ul class="search-info">
                              <li>签头人</li>
                              <li>成员</li>
                            </ul>
                          </div>
                          <div class="customers d-flex">
                            <ul>
                              <li class="d-inline-block">
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>

                            <ul class="col-md-6">
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/2.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/3.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>
                          </div>
                          <div class="d-flex mt-3">
                            <ul
                              class="col-md-12"
                              style="padding-right: 0px; padding-left: 0px"
                            >
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-heart-o"></i> 50
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-chain"></i> 3
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-bullhorn"></i> 12
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-dollar"></i> 800k
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-check-square-o"></i>

                                21
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="info-block">
                          <h5><b>SeeDAO新手村</b></h5>
                          <p>
                            根据公共教育与新手村计划提案(SIP-58) ，，引导取得
                            SeeDAO 身份 SBT 成员，逐步取得积分达到 L1
                            级别贡献者，并且有自主能力能持续在社区进行贡献，往
                            L2, 3, 4 更高级别前进。
                          </p>
                          <div class="star-ratings">
                            <ul class="search-info">
                              <li>签头人</li>
                              <li>成员</li>
                            </ul>
                          </div>
                          <div class="customers d-flex">
                            <ul>
                              <li class="d-inline-block">
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>

                            <ul class="col-md-6">
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/2.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/3.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>
                          </div>
                          <div class="d-flex mt-3">
                            <ul
                              class="col-md-12"
                              style="padding-right: 0px; padding-left: 0px"
                            >
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-heart-o"></i> 50
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-chain"></i> 3
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-bullhorn"></i> 12
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-dollar"></i> 800k
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-check-square-o"></i>

                                21
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="info-block">
                          <h5><b>SeeDAO OS 项目组</b></h5>
                          <p>
                            根据SeeDAO 操作系统立项(SIP-40) ，为提升 DAO
                            内协作效率，帮助 SeeDAO 成员走出Discord
                            去协作，汇集多个媒介流量 ( 微信、小红书等
                            )，提供成员 Onboarding 的清晰管道。
                          </p>
                          <div class="star-ratings">
                            <ul class="search-info">
                              <li>签头人</li>
                              <li>成员</li>
                            </ul>
                          </div>
                          <div class="customers d-flex">
                            <ul>
                              <li class="d-inline-block">
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>

                            <ul class="col-md-6">
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/2.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/3.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>
                          </div>
                          <div class="d-flex mt-3">
                            <ul
                              class="col-md-12"
                              style="padding-right: 0px; padding-left: 0px"
                            >
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-heart-o"></i> 50
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-chain"></i> 3
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-bullhorn"></i> 12
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-dollar"></i> 800k
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-check-square-o"></i>

                                21
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div class="col-12 m-t-30">
                        <nav aria-label="...">
                          <ul class="pagination pagination-primary">
                            <li class="page-item disabled">
                              <a class="page-link" href="#" tabindex="-1"
                                >Previous</a
                              >
                            </li>
                            <li class="page-item active">
                              <a class="page-link" href="#">1</a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#"
                                >2<span class="sr-only">(current)</span></a
                              >
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">3</a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">Next</a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </b-tab>
                <b-tab>
                  <template #title>
                    <strong>其他项目</strong>
                  </template>
                  <div
                    class="search-links tab-pane fade show active"
                    id="all-links"
                    role="tabpanel"
                    aria-labelledby="all-link"
                  >
                    <div class="row">
                      <div class="col-lg-12 col-md-12 box-col-12">
                        <div class="info-block">
                          <h5><b>城市联络人计划</b></h5>
                          <p>
                            通过城市联络人计划 (SIP-41) ，来实现
                            SeeDAO在物理世界的全球连接。这种连接不是基于一个个物理空间，而是基于空间里的人。SeeDAO的城市联络人在哪里，
                            SeeDAO的线下据点就在哪里。
                          </p>
                          <div class="star-ratings">
                            <ul class="search-info">
                              <li>签头人</li>
                              <li>成员</li>
                            </ul>
                          </div>
                          <div class="customers d-flex">
                            <ul>
                              <li class="d-inline-block">
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>

                            <ul class="col-md-6">
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/2.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/3.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>
                          </div>
                          <div class="d-flex mt-3">
                            <ul
                              class="col-md-12"
                              style="padding-right: 0px; padding-left: 0px"
                            >
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-heart-o"></i> 50
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-chain"></i> 3
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-bullhorn"></i> 12
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-dollar"></i> 800k
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-check-square-o"></i>

                                21
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="info-block">
                          <h5><b>SeeDAO新手村</b></h5>
                          <p>
                            根据公共教育与新手村计划提案(SIP-58) ，，引导取得
                            SeeDAO 身份 SBT 成员，逐步取得积分达到 L1
                            级别贡献者，并且有自主能力能持续在社区进行贡献，往
                            L2, 3, 4 更高级别前进。
                          </p>
                          <div class="star-ratings">
                            <ul class="search-info">
                              <li>签头人</li>
                              <li>成员</li>
                            </ul>
                          </div>
                          <div class="customers d-flex">
                            <ul>
                              <li class="d-inline-block">
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>

                            <ul class="col-md-6">
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/2.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/3.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>
                          </div>
                          <div class="d-flex mt-3">
                            <ul
                              class="col-md-12"
                              style="padding-right: 0px; padding-left: 0px"
                            >
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-heart-o"></i> 50
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-chain"></i> 3
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-bullhorn"></i> 12
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-dollar"></i> 800k
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-check-square-o"></i>

                                21
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="info-block">
                          <h5><b>SeeDAO OS 项目组</b></h5>
                          <p>
                            根据SeeDAO 操作系统立项(SIP-40) ，为提升 DAO
                            内协作效率，帮助 SeeDAO 成员走出Discord
                            去协作，汇集多个媒介流量 ( 微信、小红书等
                            )，提供成员 Onboarding 的清晰管道。
                          </p>
                          <div class="star-ratings">
                            <ul class="search-info">
                              <li>签头人</li>
                              <li>成员</li>
                            </ul>
                          </div>
                          <div class="customers d-flex">
                            <ul>
                              <li class="d-inline-block">
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>

                            <ul class="col-md-6">
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/1.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/2.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <img
                                  class="img-50 rounded-circle"
                                  :src="getImgUrl('user/3.jpg')"
                                  alt=""
                                  title=""
                                />
                              </li>
                            </ul>
                          </div>
                          <div class="d-flex mt-3">
                            <ul
                              class="col-md-12"
                              style="padding-right: 0px; padding-left: 0px"
                            >
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-heart-o"></i> 50
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-chain"></i> 3
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-bullhorn"></i> 12
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-dollar"></i> 800k
                              </li>
                              <li
                                class="d-inline-block"
                                style="margin-left: 1%"
                              >
                                <i class="fa fa-check-square-o"></i>

                                21
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div class="col-12 m-t-30">
                        <nav aria-label="...">
                          <ul class="pagination pagination-primary">
                            <li class="page-item disabled">
                              <a class="page-link" href="#" tabindex="-1"
                                >Previous</a
                              >
                            </li>
                            <li class="page-item active">
                              <a class="page-link" href="#">1</a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#"
                                >2<span class="sr-only">(current)</span></a
                              >
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">3</a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">Next</a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </b-tab>
              </b-tabs>
            </div>
          </px-card>
        </div>
      </div>
    </div>
    <!-- Container-fluid Ends-->
    <Bot :title="$t('Projects')" />
  </div>
</template>
<script>
import VueGallery from "vue-gallery";
import Bot from "../../components/bot/main.vue";

export default {
  components: {
    VueGallery,
    Bot,
  },
  data() {
    return {
      gindex: null,
      lightgallery: [
        {
          image: "01.jpg",
          title: "Portfolio Title",
          description:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
        },
        {
          image: "02.jpg",
          title: "Portfolio Title",
          description:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
        },
        {
          image: "03.jpg",
          title: "Portfolio Title",
          description:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
        },
        {
          image: "04.jpg",
          title: "Portfolio Title",
          description:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
        },
        {
          image: "05.jpg",
          title: "Portfolio Title",
          description:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
        },
        {
          image: "06.jpg",
          title: "Portfolio Title",
          description:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
        },
        {
          image: "07.jpg",
          title: "Portfolio Title",
          description:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
        },
        {
          image: "08.jpg",
          title: "Portfolio Title",
          description:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
        },
      ],
      biglightgallery: [
        "01.jpg",
        "02.jpg",
        "03.jpg",
        "04.jpg",
        "05.jpg",
        "06.jpg",
        "07.jpg",
        "08.jpg",
      ],
      galleryoptions: {
        prevClass: "prev",
        nextClass: "next",
      },
    };
  },
  mounted() {
    this.setimagesparth();
  },
  methods: {
    getImgUrl(path) {
      return require("@/assets/images/" + path);
    },
    setimagesparth() {
      for (var i = 0; i < this.biglightgallery.length; i++) {
        this.biglightgallery[i] = this.getbigimgpath(this.biglightgallery[i]);
      }
    },
    getpath(filename) {
      return require("@/assets/images/lightgallry/" + filename);
    },
    getbigimgpath(filename) {
      return require("@/assets/images/big-lightgallry/" + filename);
    },
  },
};
</script>
