<template>
    <div>
        <Breadcrumbs main="UI Kits" title="Modal"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">

                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <h5>Static Example</h5>
                        </div>
                        <div class="card-body">


                            <div class="modal-dialog modal-lg mt-0 mb-0" id="example" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog mt-0 mb-0" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">New message</h5>
                                            <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                        </div>
                                        <div class="modal-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                                            <button class="btn btn-primary" type="button">Send message</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div class="col-sm-12">
                    <div class="card">
                      <div class="card-header">
                        <h5>Basic Modal</h5>
                      </div>
                      <div class="card-body btn-showcase">
                        <!-- Simple demo-->
                        <b-button v-b-modal.modal-1 variant="primary">Simple</b-button>

                        <!-- Scrolling long content-->
                        <b-button v-b-modal.modal-2 variant="primary">Scrolling long content</b-button>

                        <!-- Vertically centered modal-->
                        <b-button v-b-modal.modal-3 variant="primary">Vertically centered</b-button>

                        <!-- Tooltips and popovers modal-->
                        <b-button v-b-modal.modal-4 variant="primary">Tooltips and popovers</b-button>

                        <!-- Using the grid modal-->
                        <b-button v-b-modal.modal-5 variant="primary">Using the grid</b-button>


                          <!-- Simple Modal Component -->
                          <b-modal id="modal-1" title="Modal Title" ok-title="Save Changes" class="theme-modal">
                            <p>....</p>
                          </b-modal>

                          <!-- Scrolling long Modal Component -->
                          <b-modal id="modal-2" title="Modal Title" ok-title="Save Changes" class="theme-modal">
                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                          </b-modal>

                          <!-- Vertically centered Modal Component -->
                          <b-modal id="modal-3" centered title="Modal Title" ok-title="Save Changes" class="theme-modal">
                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                          </b-modal>

                          <!-- Tooltips Modal Component -->
                          <b-modal id="modal-4" centered title="Modal Title" ok-title="Save Changes" class="theme-modal">
                            <h5>Popover in a modal</h5>
                            <p>This <b-button class="m-0">Button</b-button> triggers a popover on click.</p>
                            <hr>
                            <h5>Tooltips in a modal</h5>
                            <p><a class="tooltip-test" href="#" title="" data-container="#exampleModalPopovers" data-original-title="Tooltip">This link</a> and <a class="tooltip-test" href="#" title="" data-container="#exampleModalPopovers" data-original-title="Tooltip">that link</a> have tooltips on hover.</p>
                          </b-modal>

                          <!-- grid Modal Component -->
                          <b-modal id="modal-5" centered title="Modal Title" ok-title="Save Changes" class="theme-modal">
                            <div class="container-fluid bd-example-row grid-showcase">
                              <div class="row">
                                <div class="col-md-4"><span>.col-md-4</span></div>
                                <div class="col-md-4 ml-auto"><span>.col-md-4 .ml-auto</span></div>
                              </div>
                              <div class="row">
                                <div class="col-md-3 ml-auto"><span>.col-md-3 .ml-auto</span></div>
                                <div class="col-md-2 ml-auto"><span>.col-md-2 .ml-auto</span></div>
                              </div>
                              <div class="row">
                                <div class="col-md-6 ml-auto"><span>.col-md-6 .ml-auto</span></div>
                              </div>
                              <div class="row">
                                <div class="col-sm-9"><span>Level 1: .col-sm-9</span>
                                  <div class="row">
                                    <div class="col-8 col-sm-6"><span>Level 2: .col-8 .col-sm-6</span></div>
                                    <div class="col-4 col-sm-6"><span>Level 2: .col-4 .col-sm-6</span></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </b-modal>

                      </div>
                    </div>
                </div>

                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <h5>Varying modal content</h5>
                        </div>
                        <div class="card-body btn-showcase">
                            <!-- Varying First demo-->
                            <b-button v-b-modal.modal-6 variant="primary">Open modal for @mdo</b-button>
                            
                            <!-- Varying Second demo-->
                            <b-button v-b-modal.modal-7 variant="primary">Open modal for @fat</b-button>

                            <!-- Varying Third demo-->
                            <b-button v-b-modal.modal-8 variant="primary">Open modal for @getbootstrap</b-button>

                            <!-- Varying First Modal Component -->
                            <b-modal id="modal-6" title="New Message" ok-title="Send message" class="theme-modal">
                                <form @submit.stop.prevent="handleSubmit">
                                    <label class="col-form-label" for="recipient-name">Recipient:</label>
                                    <b-form-input v-model="name"  placeholder="@fat"></b-form-input>

                                    <label class="col-form-label" for="message-text">Message:</label>
                                    <b-form-textarea
                                      id="textarea"
                                      v-model="text"
                                      rows="3"
                                      max-rows="6"
                                    ></b-form-textarea>
                                </form>
                            </b-modal>

                            <!-- Varying Second Modal Component -->
                            <b-modal id="modal-7" title="New Message" ok-title="Send message" class="theme-modal">
                                <form @submit.stop.prevent="handleSubmit">
                                    <label class="col-form-label" for="recipient-name">Recipient:</label>
                                    <b-form-input v-model="name" placeholder="@mat"></b-form-input>

                                    <label class="col-form-label" for="message-text">Message:</label>
                                    <b-form-textarea
                                      id="textarea"
                                      v-model="text"
                                      rows="3"
                                    ></b-form-textarea>
                                </form>
                            </b-modal>

                            <!-- Varying Third Modal Component -->
                            <b-modal id="modal-8" title="New Message" ok-title="Send message" class="theme-modal">
                                <form @submit.stop.prevent="handleSubmit">
                                    <label class="col-form-label" for="recipient-name">Recipient:</label>
                                    <b-form-input v-model="name" placeholder="@getbootstrap"></b-form-input>

                                    <label class="col-form-label" for="message-text">Message:</label>
                                    <b-form-textarea
                                      id="textarea"
                                      v-model="text"
                                      rows="3"
                                    ></b-form-textarea>
                                </form>
                            </b-modal>

                        </div>
                    </div>
                </div>

                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <h5>Sizes modal</h5>
                        </div>
                        <div class="card-body btn-showcase">
                            <!-- Large Modal-->
                            <b-button v-b-modal.modal-lg variant="primary">large modal</b-button>

                            <!-- Small Modal-->
                            <b-button v-b-modal.modal-sm variant="primary">small modal</b-button>

                            <!-- Large Modal Component -->
                            <b-modal id="modal-lg" size="lg" title="Large Modal" class="theme-modal">...</b-modal>

                            <!-- Small Modal Component -->
                            <b-modal id="modal-sm" size="sm" title="Small Modal" class="theme-modal">...</b-modal>
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
        name:'',
        text:'',
      };
    }
  };
</script>