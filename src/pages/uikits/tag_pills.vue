<template>
    <div>
        <Breadcrumbs main="UI Kits" title="Tag & Pills"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">

                <div class="col-sm-12 col-xl-6">
                    <div class="card">
                      <div class="card-header">
                        <h5>Contextual variations</h5>
                      </div>
                      <div class="card-body">
                        <b-badge variant="primary">Primary</b-badge>
                        <b-badge variant="secondary">Secondary</b-badge>
                        <b-badge variant="success">Success</b-badge>
                        <b-badge variant="info">Info</b-badge>
                        <b-badge variant="warning">Warning</b-badge>
                        <b-badge variant="danger">Danger</b-badge>
                        <b-badge variant="light">Light</b-badge>
                        <b-badge variant="dark">Dark</b-badge>
                      </div>
                    </div>
                </div>

                <div class="col-sm-12 col-xl-6">
                    <div class="card">
                      <div class="card-header">
                        <h5>Contextual variations</h5>
                      </div>
                      <div class="card-body">
                        <b-badge pill variant="primary">Primary</b-badge>
                        <b-badge pill variant="secondary">Secondary</b-badge>
                        <b-badge pill variant="success">Success</b-badge>
                        <b-badge pill variant="info">Info</b-badge>
                        <b-badge pill variant="warning">Warning</b-badge>
                        <b-badge pill variant="danger">Danger</b-badge>
                        <b-badge pill variant="light">Light</b-badge>
                        <b-badge pill variant="dark">Dark</b-badge>
                      </div>
                    </div>
                </div>

                <div class="col-sm-12 col-xl-6">
                    <div class="card">
                      <div class="card-header">
                        <h5>Tags with number</h5>
                      </div>
                      <div class="card-body digits">
                        <b-badge variant="primary">1</b-badge>
                        <b-badge variant="secondary">2</b-badge>
                        <b-badge variant="success">3</b-badge>
                        <b-badge variant="info">4</b-badge>
                        <b-badge variant="warning">5</b-badge>
                        <b-badge variant="danger">6</b-badge>
                        <b-badge variant="light">7</b-badge>
                        <b-badge variant="dark">8</b-badge>
                      </div>
                    </div>
                </div>

                <div class="col-sm-12 col-xl-6">
                    <div class="card">
                      <div class="card-header">
                        <h5>Pills with number</h5>
                      </div>
                      <div class="card-body digits">
                        <b-badge pill variant="primary">1</b-badge>
                        <b-badge pill variant="secondary">2</b-badge>
                        <b-badge pill variant="success">3</b-badge>
                        <b-badge pill variant="info">4</b-badge>
                        <b-badge pill variant="warning">5</b-badge>
                        <b-badge pill variant="danger">6</b-badge>
                        <b-badge pill variant="light">7</b-badge>
                        <b-badge pill variant="dark">8</b-badge>
                      </div>
                    </div>
                </div>

                <div class="col-sm-12 col-xl-6">
                    <div class="card">
                      <div class="card-header">
                        <h5>Tags With icon</h5>
                      </div>
                      <div class="card-body">
                        <b-badge href="#" variant="primary"><feather type="dollar-sign"></feather></b-badge>
                        <b-badge href="#" variant="secondary"><feather type="headphones"></feather></b-badge>
                        <b-badge href="#" variant="success"><feather type="link"></feather></b-badge>
                        <b-badge href="#" variant="info"><feather type="github"></feather></b-badge>
                        <b-badge href="#" variant="warning"><feather type="award"></feather></b-badge>
                        <b-badge href="#" variant="danger"><feather type="activity"></feather></b-badge>
                        <b-badge href="#" variant="light"><feather type="heart"></feather></b-badge>
                        <b-badge href="#" variant="dark"><feather type="mail"></feather></b-badge>
                      </div>
                    </div>
                </div>

                <div class="col-sm-12 col-xl-6">
                    <div class="card">
                      <div class="card-header">
                        <h5>Pills with Icon</h5>
                      </div>
                      <div class="card-body">
                        <b-badge href="#" pill variant="primary"><feather type="dollar-sign"></feather></b-badge>
                        <b-badge href="#" pill variant="secondary"><feather type="headphones"></feather></b-badge>
                        <b-badge href="#" pill variant="success"><feather type="link"></feather></b-badge>
                        <b-badge href="#" pill variant="info"><feather type="github"></feather></b-badge>
                        <b-badge href="#" pill variant="warning"><feather type="award"></feather></b-badge>
                        <b-badge href="#" pill variant="danger"><feather type="activity"></feather></b-badge>
                        <b-badge href="#" pill variant="light"><feather type="heart"></feather></b-badge>
                        <b-badge href="#" pill variant="dark"><feather type="mail"></feather></b-badge>
                      </div>
                    </div>
                </div>

                <div class="col-sm-12 col-xl-6">
                    <div class="card height-equal">
                      <div class="card-header">
                        <h5>Badges Example</h5>
                      </div>
                      <div class="card-body">
                        <h1>heading <b-badge variant="primary" >New</b-badge> </h1>
                        <h2>heading <b-badge variant="primary" >New</b-badge> </h2>
                        <h3>heading <b-badge variant="primary" >New</b-badge> </h3>
                        <h4>heading <b-badge variant="primary" >New</b-badge> </h4>
                        <h5>heading <b-badge variant="primary" >New</b-badge> </h5>
                        <h6>heading <b-badge variant="primary" >New</b-badge> </h6>
                      </div>
                    </div>
                </div>

                <div class="col-sm-12 col-xl-6">
                    <div class="card height-equal">
                      <div class="card-header">
                        <h5>Badges as part buttons</h5>
                      </div>
                      <div class="card-body">
                        
                        <div class="mb-3">
                            <b-button variant="primary">
                                Messages <b-badge pill variant="light"><feather type="mail"></feather></b-badge>
                            </b-button>
                        </div>

                        <div class="mb-3">
                            <b-button variant="secondary">
                                Notifications <b-badge pill variant="light"><feather type="bell"></feather></b-badge>
                            </b-button>
                        </div>

                        <div class="mb-3">
                            <b-button variant="success">
                                Update available <b-badge pill variant="light"><feather type="settings"></feather></b-badge>
                            </b-button>
                        </div>

                        <div class="mb-3">
                            <b-button variant="info">
                                Playing Now <b-badge pill variant="light"><feather type="music"></feather></b-badge>
                            </b-button>
                        </div>

                        <div class="mb-3">
                            <b-button variant="warning" class="txt-dark">
                                1.2 GB Used <b-badge pill variant="light"><feather type="alert-triangle"></feather></b-badge>
                            </b-button>
                        </div>

                        <div class="mb-3">
                            <b-button variant="danger">
                                Alert <b-badge pill variant="light"><feather type="alert-circle"></feather></b-badge>
                            </b-button>
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
  export default {
  };
</script>