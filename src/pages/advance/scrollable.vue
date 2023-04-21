<template>
    <div>
        <Breadcrumbs main="Bonus UI" title="scrollable"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">
                
                <div class="col-sm-6">
                    <div class="card">
                      <div class="card-header">
                        <h5>Click and Drag</h5>
                      </div>
                      <div class="card-body">
                        <div class="scroll-bar-wrap">
                            <VuePerfectScrollbar class="scroll-area" v-once :settings="settings">
                              <img src="../../assets/images/banner/2.jpg" alt="" width="800" height="600">
                            </VuePerfectScrollbar>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-header">
                      <h5>Small Size Scroll</h5>
                    </div>
                    <div class="card-body">
                      <div class="scroll-bar-wrap">
                        <div class="scrollbar-margins large-margin scroll-demo p-0">
                            <VuePerfectScrollbar class="scroll-area" v-once :settings="settings2">
                              <img src="../../assets/images/banner/3.jpg" alt="girl" width="800" height="600">
                            </VuePerfectScrollbar>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-header">
                      <h5>Both Side Scroll</h5>
                    </div>
                    <div class="card-body">
                      <div class="scroll-bar-wrap">
                          <VuePerfectScrollbar class="scroll-area" v-once :settings="settings3">
                            <div class="both-side-scroll scroll-demo p-0"><img src="../../assets/images/banner/1.jpg" alt="girl" width="800" height="600"></div>
                          </VuePerfectScrollbar>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-header">
                      <h5>Horizontal Scroll</h5>
                    </div>
                    <div class="card-body">
                      <div class="scroll-bar-wrap">
                        <VuePerfectScrollbar class="scroll-area" v-once :settings="settings4">
                        <div class="horizontal-scroll scroll-demo">
                          <div class="horz-scroll-content" style="width: 1600px;">
                            <div class="row">
                                <div class="col-sm-3">
                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                </div>
                                <div class="col-sm-3">
                                  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                                <div class="col-sm-3">
                                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                                <div class="col-sm-3">
                                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </div>
                          </div>
                        </div>
                        </VuePerfectScrollbar>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-header">
                      <h5>Always Visible Scroll</h5>
                    </div>
                    <div class="card-body">
                      <div class="scroll-bar-wrap always-visible">
                        <VuePerfectScrollbar class="scroll-area" v-once :settings="settings5">
                        <div class="scroll-demo">
                          <div class="horz-scroll-content">
                            <div class="row">
                              <div class="col-sm-6">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words</p>
                              </div>
                              <div class="col-sm-6">
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words</p>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors.</p>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                              </div>
                              <div class="col-sm-6">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words</p>
                              </div>
                              <div class="col-sm-6">
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words</p>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors.</p>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        </VuePerfectScrollbar>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-header">
                      <h5>Vertical Scroll</h5>
                    </div>
                    <div class="card-body">
                        <div class="scroll-bar-wrap">
                            <VuePerfectScrollbar class="scroll-area" v-once :settings="settings6">
                                <div class="vertical-scroll scroll-demo">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words</p>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors.</p>
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                                </div>
                            </VuePerfectScrollbar>
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
  import VuePerfectScrollbar from 'vue-perfect-scrollbar';
  
  export default {
    components: {
      VuePerfectScrollbar
    },
    data() {
      return {
        settings: {
          maxScrollbarLength: 60
        },
        settings2: {
          maxScrollbarLength: 60
        },
        settings3: {
          maxScrollbarLength: 200
        },
        settings4: {
          maxScrollbarLength: 60,
          suppressScrollY:true
        },
        settings5: {
          maxScrollbarLength: 60,
        },
        settings6: {
          maxScrollbarLength: 60,
        }
      };
    },
  };
</script>

<style>
.scroll-bar-wrap {
    overflow: hidden;
}
.scroll-area {
    margin: auto;
    width: 720px;
    height: 300px;
}

</style>
