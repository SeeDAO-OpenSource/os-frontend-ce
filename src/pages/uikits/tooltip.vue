<template>
    <div>
        <Breadcrumbs main="UI Kits" title="Tooltip"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">
                
                <div class="col-sm-12">
                    <div class="card">
                      <div class="card-header">
                        <h5>Basic Tooltip</h5>
                      </div>
                      <div class="card-body btn-showcase">

                        <b-button v-b-tooltip.hover title="Popover title" variant="primary" >Hover Me</b-button>

                      </div>
                    </div>
                </div>

                <div class="col-sm-12">
                    <div class="card">
                      <div class="card-header">
                        <h5>Directions</h5>
                      </div>
                      <div class="card-body btn-showcase">

                        <b-button id="direction-tooltip-top" variant="primary">Tooltip on top</b-button>
                        <b-tooltip target="direction-tooltip-top" triggers="hover" placement="top">Tooltip on top</b-tooltip>

                        <b-button id="direction-tooltip-right" variant="primary">Tooltip on right</b-button>
                        <b-tooltip target="direction-tooltip-right" triggers="hover" placement="right">Tooltip on right</b-tooltip>

                        <b-button id="direction-tooltip-bottom" variant="primary">Tooltip on bottom</b-button>
                        <b-tooltip target="direction-tooltip-bottom" triggers="hover" placement="bottom">Tooltip on bottom</b-tooltip>

                        <b-button id="direction-tooltip-left" variant="primary">Tooltip on left</b-button>
                        <b-tooltip target="direction-tooltip-left" triggers="hover" placement="left">Tooltip on left</b-tooltip>

                      </div>
                    </div>
                </div>

                <div class="col-sm-12">
                    <div class="card">
                      <div class="card-header">
                        <h5>HTML elements</h5>
                      </div>
                      <div class="card-body btn-showcase">

                        <b-button id="html-tooltip-top" variant="primary">Click me</b-button>
                        <b-tooltip target="html-tooltip-top" triggers="hover" placement="top">
                            Tooltip <b>with</b><code>HTML</code>
                        </b-tooltip>

                        <b-button id="html-tooltip-right" variant="primary">Click me</b-button>
                        <b-tooltip target="html-tooltip-right" triggers="hover" placement="right">
                            Tooltip <b>with</b><code>HTML</code>
                        </b-tooltip>

                        <b-button id="html-tooltip-bottom" variant="primary">Click me</b-button>
                        <b-tooltip target="html-tooltip-bottom" triggers="hover" placement="bottom">
                            Tooltip <b>with</b><code>HTML</code>
                        </b-tooltip>

                        <b-button id="html-tooltip-left" variant="primary">Click me</b-button>
                        <b-tooltip target="html-tooltip-left" triggers="hover" placement="left">
                            Tooltip <b>with</b><code>HTML</code>
                        </b-tooltip>

                      </div>
                    </div>
                </div>

                <div class="col-sm-12">
                    <div class="card">
                      <div class="card-header">
                        <h5>Offset</h5>
                      </div>
                      <div class="card-body btn-showcase">
                        
                        <b-button id="offset-tooltip-top-right" variant="primary">0px 20px</b-button>
                        <b-tooltip target="offset-tooltip-top-right" triggers="hover" placement="topleft" offset-top="20">Tooltip title</b-tooltip>

                        <b-button id="offset-tooltip-top-left" variant="primary">20px 0px</b-button>
                        <b-tooltip target="offset-tooltip-top-left" triggers="hover" placement="topright" offset-top="20">Tooltip title</b-tooltip>

                        <b-button id="offset-tooltip-top-left-30" variant="primary">-30px -30px</b-button>
                        <b-tooltip target="offset-tooltip-top-left-30" triggers="hover" placement="topleft" offset-top="30">Tooltip title</b-tooltip>

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