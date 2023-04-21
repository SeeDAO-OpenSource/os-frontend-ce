<template>
    <div>
        <Breadcrumbs main="UI Kits" title="Dropdown"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">
                
                <div class="col-sm-12 col-xl-12">
                    <div class="card">
                      <div class="card-header">
                        <h5>Basic Dropdown</h5>
                      </div>
                      
                      <div class="card-body dropdown-basic">
                        <b-dropdown text="Dropdown Button" variant="primary" >
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another Action</b-dropdown-item>
                            <b-dropdown-item>Something Else Here</b-dropdown-item>
                        </b-dropdown>
                      </div>

                    </div>
                </div>

                <div class="col-sm-12 col-xl-12">
                    <div class="card">
                      <div class="card-header">
                        <h5>Basic Color Dropdown</h5>
                      </div>
                      <div class="card-body dropdown-basic">

                        <b-dropdown text="Action" variant="primary">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another Action</b-dropdown-item>
                            <b-dropdown-item>Something Else Here</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item>Separated Link</b-dropdown-item>
                        </b-dropdown>

                        <b-dropdown text="Action" variant="secondary">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another Action</b-dropdown-item>
                            <b-dropdown-item>Something Else Here</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item>Separated Link</b-dropdown-item>
                        </b-dropdown>

                        <b-dropdown text="Action" variant="success">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another Action</b-dropdown-item>
                            <b-dropdown-item>Something Else Here</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item>Separated Link</b-dropdown-item>
                        </b-dropdown>

                        <b-dropdown text="Action" variant="info">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another Action</b-dropdown-item>
                            <b-dropdown-item>Something Else Here</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item>Separated Link</b-dropdown-item>
                        </b-dropdown>

                        <b-dropdown text="Action" variant="warning">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another Action</b-dropdown-item>
                            <b-dropdown-item>Something Else Here</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item>Separated Link</b-dropdown-item>
                        </b-dropdown>

                        <b-dropdown text="Action" variant="danger">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another Action</b-dropdown-item>
                            <b-dropdown-item>Something Else Here</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item>Separated Link</b-dropdown-item>
                        </b-dropdown>

                      </div>
                    </div>
                </div>

                <div class="col-sm-12 col-xl-12">
                    <div class="card">
                      <div class="card-header">
                        <h5>Dropdown Split Button</h5>
                      </div>
                      <div class="card-body dropdown-basic">

                        <b-dropdown split text="Primary Button" variant="primary">
                            <b-dropdown-item>Link 1</b-dropdown-item>
                            <b-dropdown-item>Link 2</b-dropdown-item>
                            <b-dropdown-item>Link 3</b-dropdown-item>
                        </b-dropdown>

                        <b-dropdown split text="Primary Button" variant="secondary">
                            <b-dropdown-item>Link 1</b-dropdown-item>
                            <b-dropdown-item>Link 2</b-dropdown-item>
                            <b-dropdown-item>Link 3</b-dropdown-item>
                        </b-dropdown>

                        <b-dropdown split text="Primary Button" variant="success">
                            <b-dropdown-item>Link 1</b-dropdown-item>
                            <b-dropdown-item>Link 2</b-dropdown-item>
                            <b-dropdown-item>Link 3</b-dropdown-item>
                        </b-dropdown>

                        <b-dropdown split text="Primary Button" variant="info">
                            <b-dropdown-item>Link 1</b-dropdown-item>
                            <b-dropdown-item>Link 2</b-dropdown-item>
                            <b-dropdown-item>Link 3</b-dropdown-item>
                        </b-dropdown>

                        <b-dropdown split text="Primary Button" variant="warning">
                            <b-dropdown-item>Link 1</b-dropdown-item>
                            <b-dropdown-item>Link 2</b-dropdown-item>
                            <b-dropdown-item>Link 3</b-dropdown-item>
                        </b-dropdown>

                        <b-dropdown split text="Primary Button" variant="danger">
                            <b-dropdown-item>Link 1</b-dropdown-item>
                            <b-dropdown-item>Link 2</b-dropdown-item>
                            <b-dropdown-item>Link 3</b-dropdown-item>
                        </b-dropdown>

                      </div>
                    </div>
                </div>

                <div class="col-sm-12 col-xl-12">
                    <div class="card">
                      <div class="card-header">
                        <h5>Rounded Dropdown</h5>
                      </div>
                      <div class="card-body dropdown-basic">

                        <b-dropdown text="Primary Button" :class="'btn-round'" variant="primary">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another Action</b-dropdown-item>
                            <b-dropdown-item>Something Else Here</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item>Separated Link</b-dropdown-item>
                        </b-dropdown>

                        <b-dropdown text="Primary Button" :class="'btn-round'" variant="secondary">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another Action</b-dropdown-item>
                            <b-dropdown-item>Something Else Here</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item>Separated Link</b-dropdown-item>
                        </b-dropdown>

                        <b-dropdown text="Primary Button" :class="'btn-round'" variant="success">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another Action</b-dropdown-item>
                            <b-dropdown-item>Something Else Here</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item>Separated Link</b-dropdown-item>
                        </b-dropdown>

                        <b-dropdown text="Primary Button" :class="'btn-round'" variant="info">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another Action</b-dropdown-item>
                            <b-dropdown-item>Something Else Here</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item>Separated Link</b-dropdown-item>
                        </b-dropdown>

                        <b-dropdown text="Primary Button" :class="'btn-round'" variant="warning">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another Action</b-dropdown-item>
                            <b-dropdown-item>Something Else Here</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item>Separated Link</b-dropdown-item>
                        </b-dropdown>

                        <b-dropdown text="Primary Button" :class="'btn-round'" variant="danger">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another Action</b-dropdown-item>
                            <b-dropdown-item>Something Else Here</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item>Separated Link</b-dropdown-item>
                        </b-dropdown>

                      </div>
                    </div>
                </div>

                <div class="col-sm-12 col-xl-6">
                    <div class="card">
                      <div class="card-header">
                        <h5>Dropdown With Divider</h5><span>Use a class <code>.dropdown-divider</code></span>
                      </div>
                      <div class="card-body dropdown-basic">

                        <b-dropdown text="Dropdown Button" variant="primary">
                            <b-dropdown-item>Link 1</b-dropdown-item>
                            <b-dropdown-item>Link 2</b-dropdown-item>
                            <b-dropdown-item>Link 3</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item>Separated Link</b-dropdown-item>
                        </b-dropdown>

                      </div>
                    </div>
                </div>

                <div class="col-sm-12 col-xl-6">
                    <div class="card">
                      <div class="card-header">
                        <h5>Dropdown With Header</h5><span>Use a class <code>.dropdown-header</code></span>
                      </div>
                      <div class="card-body dropdown-basic">
 
                        <b-dropdown text="Dropdown Button" variant="primary">
                            <b-dropdown-header id="dropdown-header-label">
                                Dropdown header
                            </b-dropdown-header>
                            <b-dropdown-item>Link 1</b-dropdown-item>
                            <b-dropdown-item>Link 2</b-dropdown-item>
                            <b-dropdown-header id="dropdown-header-label1">
                                Dropdown header
                            </b-dropdown-header>
                            <b-dropdown-item>Another Link</b-dropdown-item>
                        </b-dropdown>

                      </div>
                    </div>
                </div>

                <div class="col-sm-12 col-xl-6">
                    <div class="card">
                      <div class="card-header">
                        <h5>Dropdown With Disable</h5><span>Use a class <code>.dropdown-disabled</code></span>
                      </div>
                      <div class="card-body dropup-basic">
                        <b-dropdown text="Dropdown Button" dropup variant="primary">
                            <b-dropdown-item>Normal</b-dropdown-item>
                            <b-dropdown-item active>Active</b-dropdown-item>
                            <b-dropdown-item disabled>Disabled</b-dropdown-item>
                        </b-dropdown>
                      </div>
                    </div>
                </div>

                <div class="col-sm-12 col-xl-6">
                    <div class="card">
                      <div class="card-header">
                        <h5>Dropdown With Disable</h5><span>Use a class <code>.drop-up</code></span>
                      </div>
                      <div class="card-body dropup-basic">
                        <b-dropdown text="Dropdown Button" dropup variant="primary">
                            <b-dropdown-item>Link 1</b-dropdown-item>
                            <b-dropdown-item>Link 2</b-dropdown-item>
                        </b-dropdown>
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