<template>
    <div>
        <Breadcrumbs main="UI Kits" title="Accordion"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">
                
                <div class="col-sm-12 col-xl-6">
                    <div class="card">
                      <div class="card-header">
                        <h5>Basic Accordion</h5><span>Using the <a href="#">card</a> component, you can extend the default collapse behavior to create an accordion.</span>
                      </div>
                      <div class="card-body">
                        <div class="default-according">
                          <b-card no-body class="mb-1">
                            <b-card-header header-tag="div" role="tab">
                              <h5 class="mb-0">
                                <b-button v-b-toggle.simpleaccordion-1 variant="default">Collapsible Group Item #<span class="digits">1</span></b-button>
                              </h5>
                            </b-card-header>
                            <b-collapse id="simpleaccordion-1" visible accordion="myaccordion" role="tabpanel">
                              <b-card-body>
                                <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</b-card-text>
                              </b-card-body>
                            </b-collapse>
                          </b-card>

                          <b-card no-body class="mb-1">
                            <b-card-header header-tag="div" role="tab">
                              <h5 class="mb-0">
                                <b-button v-b-toggle.simpleaccordion-2 variant="default">Collapsible Group Item #<span class="digits">2</span></b-button>
                              </h5>
                            </b-card-header>
                            <b-collapse id="simpleaccordion-2" accordion="myaccordion" role="tabpanel">
                              <b-card-body>
                                <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</b-card-text>
                              </b-card-body>
                            </b-collapse>
                          </b-card>

                          <b-card no-body class="mb-1">
                            <b-card-header header-tag="div" role="tab">
                              <h5 class="mb-0">
                                <b-button v-b-toggle.simpleaccordion-3 variant="default">Collapsible Group Item #<span class="digits">3</span></b-button>
                              </h5>
                            </b-card-header>
                            <b-collapse id="simpleaccordion-3" accordion="myaccordion" role="tabpanel">
                              <b-card-body>
                                <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</b-card-text>
                              </b-card-body>
                            </b-collapse>
                          </b-card>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div class="col-sm-12 col-xl-6">
                    <div class="card">
                      <div class="card-header">
                        <h5>All Close Accordion</h5><span>Using the <a href="#">card</a> component, you can extend the default collapse behavior to create an accordion.</span>
                      </div>
                      <div class="card-body">

                        <div class="default-according">

                          <b-card no-body class="mb-1">
                            <b-card-header header-tag="div" role="tab">
                              <h5 class="mb-0">
                                <b-button v-b-toggle.accordion-4 variant="default">Collapsible Group Item #<span class="digits">1</span></b-button>
                              </h5>
                            </b-card-header>
                            <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                              <b-card-body>
                                <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</b-card-text>
                              </b-card-body>
                            </b-collapse>
                          </b-card>

                          <b-card no-body class="mb-1">
                            <b-card-header header-tag="div" role="tab">
                              <h5 class="mb-0">
                                <b-button v-b-toggle.accordion-5 variant="default">Collapsible Group Item #<span class="digits">2</span></b-button>
                              </h5>
                            </b-card-header>
                            <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                              <b-card-body>
                                <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</b-card-text>
                              </b-card-body>
                            </b-collapse>
                          </b-card>

                          <b-card no-body class="mb-1">
                            <b-card-header header-tag="div" role="tab">
                              <h5 class="mb-0">
                                <b-button v-b-toggle.accordion-6 variant="default">Collapsible Group Item #<span class="digits">3</span></b-button>
                              </h5>
                            </b-card-header>
                            <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
                              <b-card-body>
                                <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</b-card-text>
                              </b-card-body>
                            </b-collapse>
                          </b-card>

                          <b-card no-body class="mb-1">
                            <b-card-header header-tag="div" role="tab">
                              <h5 class="mb-0">
                                <b-button v-b-toggle.accordion-7 variant="default">Collapsible Group Item #<span class="digits">4</span></b-button>
                              </h5>
                            </b-card-header>
                            <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
                              <b-card-body>
                                <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</b-card-text>
                              </b-card-body>
                            </b-collapse>
                          </b-card>

                          <b-card no-body class="mb-1">
                            <b-card-header header-tag="div" role="tab">
                              <h5 class="mb-0">
                                <b-button v-b-toggle.accordion-8 variant="default">Collapsible Group Item #<span class="digits">5</span></b-button>
                              </h5>
                            </b-card-header>
                            <b-collapse id="accordion-8" accordion="my-accordion" role="tabpanel">
                              <b-card-body>
                                <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</b-card-text>
                              </b-card-body>
                            </b-collapse>
                          </b-card>

                        </div>

                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-xl-6">
                    <div class="card">
                      <div class="card-header">
                        <h5>Color Accordion</h5><span>Add <code>.bg-*</code> class to add background color with card-header.</span>
                      </div>
                      <div class="card-body default-according">

                       <b-card no-body class="mb-1">
                          <b-card-header header-tag="div" class="bg-primary">
                            <h5 class="mb-0">
                                <b-button v-b-toggle.primary_1>Collapsible Group Item #<span class="digits">1</span></b-button>
                            </h5>
                          </b-card-header>
                          <b-collapse id="primary_1" visible accordion="my-accordion-primary" role="tabpanel">
                            <b-card-body>
                              <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</b-card-text>
                            </b-card-body>
                          </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                          <b-card-header header-tag="div" class="bg-primary">
                            <h5 class="mb-0">
                                <b-button v-b-toggle.primary_2 >Collapsible Group Item #<span class="digits">2</span></b-button>
                            </h5>
                          </b-card-header>
                          <b-collapse id="primary_2" accordion="my-accordion-primary" role="tabpanel">
                            <b-card-body>
                              <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</b-card-text>
                            </b-card-body>
                          </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                          <b-card-header header-tag="div" class="bg-primary">
                            <h5 class="mb-0">
                                <b-button v-b-toggle.primary_3 >Collapsible Group Item #<span class="digits">3</span></b-button>
                            </h5>
                          </b-card-header>
                          <b-collapse id="primary_3" accordion="my-accordion-primary" role="tabpanel">
                            <b-card-body>
                              <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</b-card-text>
                            </b-card-body>
                          </b-collapse>
                        </b-card>

                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-xl-6">
                    <div class="card">
                      <div class="card-header">
                        <h5>Color Accordion</h5><span>Add <code>.bg-*</code> class to add background color with card-header.</span>
                      </div>
                      <div class="card-body default-according">

                       <b-card no-body class="mb-1">
                          <b-card-header header-tag="div" class="bg-secondary">
                            <h5 class="mb-0">
                                <b-button v-b-toggle.secondary_1 >Collapsible Group Item #<span class="digits">1</span></b-button>
                            </h5>
                          </b-card-header>
                          <b-collapse id="secondary_1" visible accordion="my-accordion-secondary" role="tabpanel">
                            <b-card-body>
                              <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</b-card-text>
                            </b-card-body>
                          </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                          <b-card-header header-tag="div" class="bg-secondary">
                            <h5 class="mb-0">
                                <b-button v-b-toggle.secondary_2 >Collapsible Group Item #<span class="digits">2</span></b-button>
                            </h5>
                          </b-card-header>
                          <b-collapse id="secondary_2" accordion="my-accordion-secondary" role="tabpanel">
                            <b-card-body>
                              <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</b-card-text>
                            </b-card-body>
                          </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                          <b-card-header header-tag="div" class="bg-secondary">
                            <h5 class="mb-0">
                                <b-button v-b-toggle.secondary_3 >Collapsible Group Item #<span class="digits">3</span></b-button>
                            </h5>
                          </b-card-header>
                          <b-collapse id="secondary_3" accordion="my-accordion-secondary" role="tabpanel">
                            <b-card-body>
                              <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</b-card-text>
                            </b-card-body>
                          </b-collapse>
                        </b-card>

                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-xl-6">
                    <div class="card">
                      <div class="card-header">
                        <h5>Accordion With Icon on Title</h5><span>Add <code>&lt;i&gt;&lt;/i&gt;</code> tag Along with icon class before title text.</span>
                      </div>
                      <div class="card-body default-according">
                        
                        <b-card no-body class="mb-1">
                          <b-card-header header-tag="div" class="bg-primary">
                            <h5 class="mb-0">
                                <b-button v-b-toggle.primary_icon_1 ><i class="fa fa-briefcase"></i> Collapsible Group Item #<span class="digits">1</span></b-button>
                            </h5>
                          </b-card-header>
                          <b-collapse id="primary_icon_1" visible accordion="my-accordion-icon-primary" role="tabpanel">
                            <b-card-body>
                              <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</b-card-text>
                            </b-card-body>
                          </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                          <b-card-header header-tag="div" class="bg-primary">
                            <h5 class="mb-0">
                                <b-button v-b-toggle.primary_icon_2 ><i class="fa fa-support"></i> Collapsible Group Item #<span class="digits">2</span></b-button>
                            </h5>
                          </b-card-header>
                          <b-collapse id="primary_icon_2" accordion="my-accordion-icon-primary" role="tabpanel">
                            <b-card-body>
                              <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</b-card-text>
                            </b-card-body>
                          </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                          <b-card-header header-tag="div" class="bg-primary">
                            <h5 class="mb-0">
                                <b-button v-b-toggle.primary_icon_3 ><i class="fa fa-tasks"></i> Collapsible Group Item #<span class="digits">3</span></b-button>
                            </h5>
                          </b-card-header>
                          <b-collapse id="primary_icon_3" accordion="my-accordion-icon-primary" role="tabpanel">
                            <b-card-body>
                              <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</b-card-text>
                            </b-card-body>
                          </b-collapse>
                        </b-card>

                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-xl-6">
                    <div class="card">
                      <div class="card-header">
                        <h5>Accordion open close icon</h5><span>Add <code>&lt;i&gt;&lt;/i&gt;</code> tag Along with icon class before title text.</span>
                      </div>
                      <div class="card-body default-according style-1">
                        
                        <b-card no-body class="mb-1">
                          <b-card-header header-tag="div" class="bg-primary">
                            <h5 class="mb-0">
                                <b-button v-b-toggle.primary_icon_open_close_1 ><i class="fa fa-briefcase"></i> Collapsible Group Item #<span class="digits">1</span></b-button>
                            </h5>
                          </b-card-header>
                          <b-collapse id="primary_icon_open_close_1" visible accordion="my-accordion-icon-open-close" role="tabpanel">
                            <b-card-body>
                              <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</b-card-text>
                            </b-card-body>
                          </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                          <b-card-header header-tag="div" class="bg-primary">
                            <h5 class="mb-0">
                                <b-button v-b-toggle.primary_icon_open_close_2 ><i class="fa fa-support"></i> Collapsible Group Item #<span class="digits">2</span></b-button>
                            </h5>
                          </b-card-header>
                          <b-collapse id="primary_icon_open_close_2" accordion="my-accordion-icon-open-close" role="tabpanel">
                            <b-card-body>
                              <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</b-card-text>
                            </b-card-body>
                          </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                          <b-card-header header-tag="div" class="bg-primary">
                            <h5 class="mb-0">
                                <b-button v-b-toggle.primary_icon_open_close_3 ><i class="fa fa-tasks"></i> Collapsible Group Item #<span class="digits">3</span></b-button>
                            </h5>
                          </b-card-header>
                          <b-collapse id="primary_icon_open_close_3" accordion="my-accordion-icon-open-close" role="tabpanel">
                            <b-card-body>
                              <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</b-card-text>
                            </b-card-body>
                          </b-collapse>
                        </b-card>
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