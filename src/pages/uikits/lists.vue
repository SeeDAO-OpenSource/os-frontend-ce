<template>
    <div>
        <Breadcrumbs main="UI Kits" title="lists"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">
                
                <div class="col-sm-12 col-xl-12">
                    <div class="card">
                      <div class="card-header">
                        <h5>Default list</h5>
                      </div>
                      <div class="card-body">
                        <b-list-group tag="ul">
                          <b-list-group-item tag="li">Cras justo odio</b-list-group-item>
                          <b-list-group-item tag="li">Dapibus ac facilisis in</b-list-group-item>
                          <b-list-group-item tag="li">Morbi leo risus</b-list-group-item>
                          <b-list-group-item tag="li">Porta ac consectetur ac</b-list-group-item>
                          <b-list-group-item tag="li">Vestibulum at eros</b-list-group-item>
                        </b-list-group>
                      </div>
                    </div>
                </div>

                <div class="col-sm-12 col-xl-12">
                    <div class="card">
                      <div class="card-header">
                        <h5>Links and buttons</h5>
                      </div>
                      <div class="card-body">
                        <b-list-group>
                          <b-list-group-item tag="a" href="#" active>Cras justo odio</b-list-group-item>
                          <b-list-group-item tag="a" href="#">Dapibus ac facilisis in</b-list-group-item>
                          <b-list-group-item tag="a" href="#">Morbi leo risus</b-list-group-item>
                          <b-list-group-item tag="a" href="#">Porta ac consectetur ac</b-list-group-item>
                          <b-list-group-item tag="a" href="#" disabled>Vestibulum at eros</b-list-group-item>
                        </b-list-group>
                      </div>
                    </div>
                </div>

                <div class="col-sm-12 col-xl-12">
                    <div class="card">
                      <div class="card-header">
                        <h5>Flush Style</h5>
                      </div>
                      <div class="card-body">
                        <b-list-group tag="ul" flush>
                          <b-list-group-item tag="li">Cras justo odio</b-list-group-item>
                          <b-list-group-item tag="li">Dapibus ac facilisis in</b-list-group-item>
                          <b-list-group-item tag="li">Morbi leo risus</b-list-group-item>
                          <b-list-group-item tag="li">Porta ac consectetur ac</b-list-group-item>
                          <b-list-group-item tag="li">Vestibulum at eros</b-list-group-item>
                          <b-list-group-item tag="li">Cras justo odio</b-list-group-item>
                          <b-list-group-item tag="li">Dapibus ac facilisis in</b-list-group-item>
                          <b-list-group-item tag="li">Dapibus ac facilisis in</b-list-group-item>
                          <b-list-group-item tag="li">Dapibus ac facilisis in</b-list-group-item>
                        </b-list-group>
                      </div>
                    </div>
                </div>

                <div class="col-sm-12 col-xl-12">
                    <div class="card">
                      <div class="card-header">
                        <h5>Contextual classes</h5>
                      </div>
                      <div class="card-body">
                        <b-list-group tag="ul">
                          <b-list-group-item tag="li">Dapibus ac facilisis in</b-list-group-item>
                          <b-list-group-item tag="li" variant="primary" >This is a primary list group item</b-list-group-item>
                          <b-list-group-item tag="li" variant="secondary" >This is a secondary list group item</b-list-group-item>
                          <b-list-group-item tag="li" variant="success" >This is a success list group item</b-list-group-item>
                          <b-list-group-item tag="li" variant="danger" >This is a danger list group item</b-list-group-item>
                          <b-list-group-item tag="li" variant="warning" >This is a warning list group item</b-list-group-item>
                          <b-list-group-item tag="li" variant="info" >This is a info list group item</b-list-group-item>
                          <b-list-group-item tag="li" variant="light" >This is a light list group item</b-list-group-item>
                          <b-list-group-item tag="li" variant="dark" >This is a dark list group item</b-list-group-item>
                        </b-list-group>
                      </div>
                    </div>
                </div>

                <div class="col-sm-12 col-xl-12">
                    <div class="card">
                      <div class="card-header">
                        <h5>With badges</h5>
                      </div>
                      <div class="card-body">
                        <b-list-group tag="ul">
                            <b-list-group-item tag="li" class="d-flex justify-content-between align-items-center">Cras justo odio <b-badge variant="primary" class="counter digits">14</b-badge> </b-list-group-item>

                            <b-list-group-item tag="li" class="d-flex justify-content-between align-items-center">Dapibus ac facilisis in <b-badge variant="secondary" class="counter digits">2</b-badge> </b-list-group-item>

                            <b-list-group-item tag="li" class="d-flex justify-content-between align-items-center">Morbi leo risus <b-badge pill variant="success" class="counter digits">1</b-badge> </b-list-group-item>

                            <b-list-group-item tag="li" class="d-flex justify-content-between align-items-center">Dapibus ac facilisis in <b-badge pill variant="info" class="counter digits">100%</b-badge> </b-list-group-item>

                            <b-list-group-item tag="li" class="d-flex justify-content-between align-items-center">Dapibus ac facilisis in <b-badge variant="warning" class="counter digits">2</b-badge> </b-list-group-item>

                            <b-list-group-item tag="li" class="d-flex justify-content-between align-items-center">Morbi leo risus <b-badge variant="danger" class="counter digits">safe</b-badge> </b-list-group-item>

                            <b-list-group-item tag="li" class="d-flex justify-content-between align-items-center">Cras justo odio <b-badge variant="light" class="counter digits">14</b-badge> </b-list-group-item>
                        </b-list-group>
                      </div>
                    </div>
                </div>

                <div class="col-sm-12 col-xl-12">
                    <div class="card">
                      <div class="card-header">
                        <h5>Custom content</h5>
                      </div>
                      <div class="card-body">
                        
                        <b-list-group>

                            <b-list-group-item tag="a" href="#" class="flex-column align-items-start" active>
                                <div class="d-flex w-100 justify-content-between">
                                  <h5 class="mb-1">List group item heading</h5><small>3 days ago</small>
                                </div>
                                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p><small>Donec id elit non mi porta.</small>
                            </b-list-group-item>

                            <b-list-group-item tag="a" href="#" class="flex-column align-items-start">
                                <div class="d-flex w-100 justify-content-between">
                                  <h5 class="mb-1">List group item heading</h5><small>3 days ago</small>
                                </div>
                                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p><small>Donec id elit non mi porta.</small>
                            </b-list-group-item>

                            <b-list-group-item tag="a" href="#" class="flex-column align-items-start">
                                <div class="d-flex w-100 justify-content-between">
                                  <h5 class="mb-1">List group item heading</h5><small>3 days ago</small>
                                </div>
                                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p><small>Donec id elit non mi porta.</small>
                            </b-list-group-item>

                        </b-list-group>

                      </div>
                    </div>
                </div>

                <div class="col-sm-12 col-xl-12">
                    <div class="card">
                      <div class="card-header">
                        <h5>JavaScript behavior</h5>
                      </div>
                      <div class="card-body">
                        <div class="row">
                            <div class="col-sm-4">
                                <b-list-group>
                                  <b-list-group-item tag="a" v-on:click="show_panel('home')" :class="[ tab_panel == 'home' ? 'active' : '']">Home</b-list-group-item>
                                  <b-list-group-item tag="a" v-on:click="show_panel('profile')" :class="[ tab_panel == 'profile' ? 'show active' : '']">Profile</b-list-group-item>
                                  <b-list-group-item tag="a" v-on:click="show_panel('messages')" :class="[ tab_panel == 'messages' ? 'show active' : '']">Messages</b-list-group-item>
                                  <b-list-group-item tag="a" v-on:click="show_panel('settings')" :class="[ tab_panel == 'settings' ? 'show active' : '']">Settings</b-list-group-item>
                                </b-list-group>
                            </div>

                            <div class="col-sm-8">
                                <div class="tab-content" id="nav-tabContent">
                                  <div class="tab-pane fade" :class="[ tab_panel == 'home' ? 'show active' : '']">
                                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                  </div>
                                  <div class="tab-pane fade" :class="[ tab_panel == 'profile' ? 'show active' : '']">
                                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                                  </div>
                                  <div class="tab-pane fade" :class="[ tab_panel == 'messages' ? 'show active' : '']">
                                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                  </div>
                                  <div class="tab-pane fade" :class="[ tab_panel == 'settings' ? 'show active' : '']">
                                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                                  </div>
                                </div>
                            </div>

                        </div>
                      </div>
                    </div>
                </div>

                <div class="col-sm-12 col-xl-12">
                    <div class="card">
                      <div class="card-header">
                        <h5>With Icon</h5>
                      </div>
                      <div class="card-body">
                        <b-list-group>
                          <b-list-group-item tag="a" href="#"><i class="icon-save-alt"></i>Cras justo odio</b-list-group-item>
                          <b-list-group-item tag="a" href="#"><i class="icon-target"></i>Dapibus ac facilisis in</b-list-group-item>
                          <b-list-group-item tag="a" href="#"><i class="icon-mobile"></i>Morbi leo risus</b-list-group-item>
                          <b-list-group-item tag="a" href="#" disabled><i class="icon-shopping-cart-full"></i>Vestibulum at eros</b-list-group-item>
                        </b-list-group>
                      </div>
                    </div>
                </div>

                <div class="col-sm-12 col-xl-12">
                    <div class="card">
                      <div class="card-header">
                        <h5>With Images</h5>
                      </div>
                      <div class="card-body">
                        <b-list-group>
                          <b-list-group-item tag="a" href="#"><img :src='"../../assets/images/user/1.jpg"' alt="">Cras justo odio</b-list-group-item>
                          <b-list-group-item tag="a" href="#"><img :src='"../../assets/images/user/1.jpg"' alt="">Dapibus ac facilisis in</b-list-group-item>
                          <b-list-group-item tag="a" href="#"><img :src='"../../assets/images/user/1.jpg"' alt="">Morbi leo risus</b-list-group-item>
                          <b-list-group-item tag="a" href="#" disabled><img :src='"../../assets/images/user/1.jpg"' alt="">Vestibulum at eros</b-list-group-item>
                        </b-list-group>
                      </div>
                    </div>
                </div>

                <div class="col-sm-12 col-xl-12">
                    <div class="card">
                      <div class="card-header">
                        <h5>With Image Rounded</h5>
                      </div>
                      <div class="card-body">
                        <b-list-group>
                          <b-list-group-item tag="a" href="#"><img class="rounded-circle" :src='"../../assets/images/user/1.jpg"' alt="">Cras justo odio</b-list-group-item>
                          <b-list-group-item tag="a" href="#"><img class="rounded-circle" :src='"../../assets/images/user/1.jpg"' alt="">Dapibus ac facilisis in</b-list-group-item>
                          <b-list-group-item tag="a" href="#"><img class="rounded-circle" :src='"../../assets/images/user/1.jpg"' alt="">Morbi leo risus</b-list-group-item>
                          <b-list-group-item tag="a" href="#" disabled><img class="rounded-circle" :src='"../../assets/images/user/1.jpg"' alt="">Vestibulum at eros</b-list-group-item>
                        </b-list-group>
                      </div>
                    </div>
                </div>

            </div>
        </div>
        <!-- Container-fluid Ends-->
    </div>
</template>

<script>
  export default {
    data(){
      return{
        tab_panel:'home'
      };
    },
    methods:{
      show_panel:function(tab_pane){

        this.tab_panel = tab_pane;
      }
    }
  };
</script>