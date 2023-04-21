<template>
    <div>
        <Breadcrumbs main="UI Kits" title="Progress"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">

                    <div class="card">
                      <div class="card-header">
                        <h5>Basic Progress Bars</h5><span>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</span>
                      </div>
                      <div class="card-body progress-showcase row">
                        <div class="col">
                        
                          <b-progress :value="0" :max="100"></b-progress>

                          <b-progress :value="25" :max="100" variant="primary" ></b-progress>

                          <b-progress :value="50" :max="100" variant="secondary" ></b-progress>

                          <b-progress :value="75" :max="100" variant="success" ></b-progress>

                          <b-progress :value="100" :max="100" variant="info" ></b-progress>

                        </div>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-header">
                        <h5>Small Progress Bars</h5><span>Use <code> .sm-progress-bar</code>class to change progress size to small:</span>
                      </div>
                      <div class="card-body progress-showcase row">
                        <div class="col">
                          
                          <b-progress class="sm-progress-bar" :value="25" :max="100" variant="primary" ></b-progress>

                          <b-progress class="sm-progress-bar" :value="50" :max="100" variant="secondary" ></b-progress>

                          <b-progress class="sm-progress-bar" :value="75" :max="100" variant="success" ></b-progress>

                          <b-progress class="sm-progress-bar" :value="100" :max="100" variant="info" ></b-progress>

                        </div>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-header">
                        <h5>Large Progress Bars</h5><span>Use <code> .lg-progress-bar</code>class to change progress size to small:</span>
                      </div>
                      <div class="card-body progress-showcase row">
                        <div class="col">

                          <b-progress class="lg-progress-bar" :value="25" :max="100" variant="primary" ></b-progress>

                          <b-progress class="lg-progress-bar" :value="50" :max="100" variant="secondary" ></b-progress>

                          <b-progress class="lg-progress-bar" :value="75" :max="100" variant="success" ></b-progress>

                          <b-progress class="lg-progress-bar" :value="100" :max="100" variant="info" ></b-progress>

                        </div>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-header">
                        <h5>Custom Height Progress Bars</h5><span>Set a height value on the <code>.progress-bar</code>, so if you change that value the outer <code>.progress </code> will automatically resize accordingly.</span>
                      </div>
                      <div class="card-body progress-showcase row">
                        <div class="col">

                          <b-progress height="1px" :value="25" :max="100" variant="primary" ></b-progress>

                          <b-progress height="5px" :value="50" :max="100" variant="secondary" ></b-progress>

                          <b-progress height="11px" :value="75" :max="100" variant="success" ></b-progress>

                          <b-progress height="19px" :value="100" :max="100" variant="info" ></b-progress>

                        </div>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-header">
                        <h5>Progress Bars states</h5><span>Use state utility classes to change the appearance of individual progress bars.</span>
                      </div>
                      <div class="card-body progress-showcase row">
                        <div class="col">

                          <b-progress :value="25" :max="100" variant="primary" ></b-progress>

                          <b-progress :value="50" :max="100" variant="secondary" ></b-progress>

                          <b-progress :value="75" :max="100" variant="success" ></b-progress>

                          <b-progress :value="100" :max="100" variant="info" ></b-progress>

                        </div>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-header">
                        <h5>Multiple bars</h5><span>Include multiple progress bars in a progress component if you need.</span>
                      </div>
                      <div class="card-body progress-showcase row">
                        <div class="col">
                          
                          <b-progress :max="100">
                              <b-progress-bar :value="30" variant="primary"></b-progress-bar>
                              <b-progress-bar :value="20" variant="secondary"></b-progress-bar>
                              <b-progress-bar :value="15" variant="success"></b-progress-bar>
                          </b-progress>

                          <b-progress :max="150">
                              <b-progress-bar :value="15" variant="primary"></b-progress-bar>
                              <b-progress-bar :value="15" variant="secondary"></b-progress-bar>
                              <b-progress-bar :value="15" variant="success"></b-progress-bar>
                              <b-progress-bar :value="15" variant="info"></b-progress-bar>
                              <b-progress-bar :value="15" variant="warning"></b-progress-bar>
                              <b-progress-bar :value="15" variant="danger"></b-progress-bar>
                              <b-progress-bar :value="15" variant="primary"></b-progress-bar>
                              <b-progress-bar :value="15" variant="light"></b-progress-bar>
                          </b-progress>

                        </div>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-header">
                        <h5>Progress Bars Striped</h5><span>Add <code>.progress-bar-striped</code> to any <code>.progress-bar</code> to apply a stripe via CSS gradient over the progress bar’s background color.</span>
                      </div>
                      <div class="card-body progress-showcase row">
                        <div class="col">

                          <b-progress :value="10" striped :max="100" variant="primary" ></b-progress>

                          <b-progress :value="25" striped :max="100" variant="secondary" ></b-progress>

                          <b-progress :value="50" striped :max="100" variant="success" ></b-progress>

                          <b-progress :value="75" striped :max="100" variant="info" ></b-progress>

                        </div>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-header">
                        <h5>Progress Bars animated</h5><span>The striped gradient can also be animated. Add <code>.progress-bar-animated</code> to <code>.progress-bar </code> to animate the stripes right to left via CSS3 animations.</span>
                      </div>
                      <div class="card-body progress-showcase row">
                        <div class="col">

                          <b-progress :value="10" striped animated :max="100" variant="primary" ></b-progress>

                          <b-progress :value="25" striped animated :max="100" variant="secondary" ></b-progress>

                          <b-progress :value="50" striped animated :max="100" variant="success" ></b-progress>

                          <b-progress :value="75" striped animated :max="100" variant="info" ></b-progress>

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