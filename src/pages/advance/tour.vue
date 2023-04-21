<template>
    <div>
        <Breadcrumbs main="Bonus UI" title="tour"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="user-profile">
                <div class="row">  
                    <div class="col-sm-12">
                      <div class="card hovercard text-center">
                        <div class="cardheader" :style="{ backgroundImage: 'url('+ require('../../assets/images/other-images/bg-profile.png') +')' }"></div>
                        <div class="user-image">
                          <div class="avatar" id="profile-tour"><img alt="" src="../../assets/images/user/7.jpg" data-intro="This is Profile image"></div>
                          <div class="icon-wrapper" id="update-profile-tour"><i class="icofont icofont-pencil-alt-5" data-intro="Change Profile image here"></i></div>
                        </div>
                        <div class="info">
                          <div class="row" data-intro="This is the your details" id="info-bar-tour">
                            <div class="col-sm-6 col-lg-4 order-sm-1 order-xl-0">
                              <div class="row">
                                <div class="col-md-6">
                                  <div class="ttl-info text-left">
                                    <h6><i class="fa fa-envelope mr-2"></i>Email</h6><span>Marekjecno@yahoo.com</span>
                                  </div>
                                </div>
                                <div class="col-md-6">
                                  <div class="ttl-info text-left ttl-sm-mb-0">
                                    <h6><i class="fa fa-calendar mr-2"></i>BOD</h6><span>02 January 1988</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-12 col-lg-4 order-sm-0 order-xl-1">
                              <div class="user-designation">
                                <div class="title"><a target="_blank" href="">Mark jecno</a></div>
                                <div class="desc mt-2">designer</div>
                              </div>
                            </div>
                            <div class="col-sm-6 col-lg-4 order-sm-2 order-xl-2">
                              <div class="row">
                                <div class="col-md-6">
                                  <div class="ttl-info text-left ttl-xs-mt">
                                    <h6><i class="fa fa-phone mr-2"></i>Contact Us</h6><span>India +91 123-456-7890</span>
                                  </div>
                                </div>
                                <div class="col-md-6">
                                  <div class="ttl-info text-left ttl-sm-mb-0">
                                    <h6><i class="fa fa-location-arrow mr-2"></i>Location</h6><span>B69 Near Schoool Demo Home</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr>
                          <div class="social-media" data-intro="This is your Social details" id="social-bar-tour">
                            <ul class="list-inline">
                              <li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
                              <li class="list-inline-item"><a href="#"><i class="fa fa-google-plus"></i></a></li>
                              <li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
                              <li class="list-inline-item"><a href="#"><i class="fa fa-instagram"></i></a></li>
                              <li class="list-inline-item"><a href="#"><i class="fa fa-rss"></i></a></li>
                            </ul>
                          </div>
                          <div class="follow">
                            <div class="row">
                              <div class="col-6 border-right">
                                <div class="follow-num counter">25869</div><span>Follower</span>
                              </div>
                              <div class="col-6">
                                <div class="follow-num counter">659887</div><span>Following</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-sm-12" data-intro="This is the your first Post" >
                      <div id="first-post-tour"></div>
                      <div class="card">
                        <div class="profile-img-style">
                          <div class="row">
                            <div class="col-sm-8">
                              <div class="media"><img class="img-thumbnail rounded-circle mr-3" src="../../assets/images/user/7.jpg" alt="Generic placeholder image">
                                <div class="media-body align-self-center">
                                  <h5 class="mt-0 user-name">JOHAN DIO</h5>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-4 align-self-center">
                              <div class="float-sm-right"><small>10 Hours ago</small></div>
                            </div>
                          </div>
                          <hr>
                          <p>you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                          <div class="img-container">
                            <div id="aniimated-thumbnials"><a href="#"><img class="img-fluid rounded" src="../../assets/images/other-images/profile-style-img3.png" alt="gallery"></a></div>
                          </div>
                          <div class="like-comment mt-4">
                            <ul class="list-inline">
                              <li class="list-inline-item border-right pr-3">
                                <label class="m-0"><a href="#"><i class="fa fa-heart mr-2"></i></a>Like</label><span class="ml-2 counter">2659</span>
                              </li>
                              <li class="list-inline-item ml-2">
                                <label class="m-0"><a href="#"><i class="fa fa-comment mr-2"></i></a>Comment</label><span class="ml-2 counter">569</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-sm-12">
                      <div class="card">
                        <div class="profile-img-style">
                          <div class="row">
                            <div class="col-sm-8">
                              <div class="media"><img class="img-thumbnail rounded-circle mr-3" src="../../assets/images/user/7.jpg" alt="Generic placeholder image">
                                <div class="media-body align-self-center">
                                  <h5 class="mt-0 user-name">JOHAN DIO</h5>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-4 align-self-center">
                              <div class="float-sm-right"><small>10 Hours ago</small></div>
                            </div>
                          </div>
                          <hr>
                          <p>you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                          <div class="row mt-4 pictures" id="aniimated-thumbnials-2">
                            <a class="col-sm-6" href="#">
                              <img class="img-fluid rounded" src="../../assets/images/other-images/profile-style-img.png" alt="gallery">
                            </a>
                            <a class="col-sm-6" href="#">
                              <img class="img-fluid rounded" src="../../assets/images/other-images/profile-style-img.png" alt="gallery">
                            </a>
                          </div>
                          <div class="like-comment mt-4">
                            <ul class="list-inline">
                              <li class="list-inline-item border-right pr-3">
                                <label class="m-0"><a href="#"><i class="fa fa-heart mr-2"></i></a>Like</label><span class="ml-2 counter">2659</span>
                              </li>
                              <li class="list-inline-item ml-2">
                                <label class="m-0"><a href="#"><i class="fa fa-comment mr-2"></i></a>Comment</label><span class="ml-2 counter">569</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <v-tour name="myTour" :steps="steps" :options="tourOptions"></v-tour>
                </div>
            </div>
        </div>
        <!-- Container-fluid Ends-->
    </div>
</template>

<script>
  export default {
    data () {
      return {
        tourOptions: {
          useKeyboardNavigation: true,
          labels: {
            buttonSkip: 'Skip',
            buttonPrevious: 'Back',
            buttonNext: 'Next',
            buttonStop: 'Done'
          }
        },
        steps: [
          {
            target: '#profile-tour',  // We're using document.querySelector() under the hood
            content: 'This is Profile image'
          },
          {
            target: '#update-profile-tour',  // We're using document.querySelector() under the hood
            content: 'Change Profile image here'
          },
          {
            target: '#info-bar-tour',  // We're using document.querySelector() under the hood
            content: 'This is the your details'
          },
          {
            target: '#social-bar-tour',  // We're using document.querySelector() under the hood
            content: 'This is your Social details'
          },
          {
            target: '#first-post-tour',  // We're using document.querySelector() under the hood
            content: 'This is the your first Post',
            params: {
              placement: 'top'
            }
          },
        ]
      };
    },
    mounted: function () {
      this.$tours['myTour'].start();
    }
  };
</script>

<style lang="scss">
  // .v-tour {
  //   &:after {
  //     content: "";
  //     position: fixed;
  //     width: 100vw;
  //     height: 100vh;
  //     background-color: rgba(0, 0, 0, 0.6);
  //     left: 0;
  //     top: 0;
  //     z-index: 1000;
  //   }
  //   .v-step {
  //     z-index: 1075;
  //   }
  // }
  // [data-intro="*"] {
  //   z-index: 1075;
  // }
</style>
