<template>
    <div>
        <Breadcrumbs main="UI Kits" title="popover"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">

                <div class="col-sm-12">
                    <div class="card">
                      <div class="card-header">
                        <h5>Basic Examples</h5><span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                      </div>
                      <div class="card-body btn-showcase">

                        <b-button id="popover-button-sync" v-b-tooltip.hover title="Popover title" variant="primary">Click to toggle popover</b-button>

                        <b-popover :show.sync="show" target="popover-button-sync" title="Popover title">
                            <p>And here's some amazing content. It's very engaging. Right?</p>
                        </b-popover>

                        <b-button id="dismissible-popover-button-sync" v-b-tooltip.focus title="Popover title" variant="primary">Dismissible popover</b-button>

                        <b-popover target="dismissible-popover-button-sync" triggers="focus" title="Popover title">
                            <p>And here's some amazing content. It's very engaging. Right?</p>
                        </b-popover>

                        <b-button id="onhover-popover-button-sync" variant="primary">On Hover Tooltip</b-button>

                        <b-tooltip target="onhover-popover-button-sync" placement="bottom" triggers="hover" title="Popover title"></b-tooltip>

                        <b-popover target="onhover-popover-button-sync" placement="bottom" triggers="hover" title="Popover title">
                            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</p>
                        </b-popover>

                      </div>
                    </div>
                </div>

                <div class="col-sm-12">
                    <div class="card">
                      <div class="card-header">
                        <h5>Direction</h5><span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                      </div>
                      <div class="card-body btn-showcase">

                        <b-button id="popover-top-sync" v-b-tooltip.hover title="Popover title" variant="primary">Popover on top</b-button>

                        <b-popover :show.sync="show_top" target="popover-top-sync" placement="top" title="Popover title">
                            <p>And here's some amazing content. It's very engaging. Right?</p>
                        </b-popover>

                        <b-button id="popover-right-sync" variant="primary">Popover on right</b-button>

                        <b-popover :show.sync="show_right" target="popover-right-sync" placement="right">
                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                        </b-popover>

                        <b-button id="popover-bottom-sync" variant="primary">Popover on bottom</b-button>

                        <b-popover :show.sync="show_bottom" target="popover-bottom-sync" placement="bottom">
                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                        </b-popover>

                        <b-button id="popover-left-sync" variant="primary">Popover on left</b-button>

                        <b-popover :show.sync="show_left" target="popover-left-sync" placement="left">
                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                        </b-popover>

                      </div>
                    </div>
                </div>

                <div class="col-sm-12">
                    <div class="card">
                      <div class="card-header">
                        <h5>HTML Content</h5><span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                      </div>
                      <div class="card-body btn-showcase">

                        <b-button id="popover-html-top-sync" v-b-tooltip.hover title="Popover title" variant="primary">Popover HTML on top</b-button>

                        <b-popover :show.sync="show_html_top" target="popover-html-top-sync" placement="top" title="Popover title">
                            <p>Just add <code>data-html='true'</code> attribute and you can purse <b>html</b> code</p>
                        </b-popover>

                        <b-button id="popover-html-right-sync" variant="primary">Popover HTML on right</b-button>

                        <b-popover :show.sync="show_html_right" target="popover-html-right-sync" placement="right">
                            Just add <code>data-html='true'</code> attribute and you can purse <b>html</b> code
                        </b-popover>

                        <b-button id="popover-html-bottom-sync" variant="primary">Popover HTML on bottom</b-button>

                        <b-popover :show.sync="show_html_bottom" target="popover-html-bottom-sync" placement="bottom">
                            Just add <code>data-html='true'</code> attribute and you can purse <b>html</b> code
                        </b-popover>

                        <b-button id="popover-html-left-sync" variant="primary">Popover HTML on left</b-button>

                        <b-popover :show.sync="show_html_left" target="popover-html-left-sync" placement="left">
                            Just add <code>data-html='true'</code> attribute and you can purse <b>html</b> code
                        </b-popover>

                      </div>
                    </div>
                </div>

                <!-- <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Offset to Tooltip</h5><span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                  </div>
                  <div class="card-body btn-showcase">
                        <b-button id="popover-offset-sync-one" title="Popover title" variant="primary">20px 20px</b-button>

                        <b-popover :show.sync="show_offset_one" target="popover-offset-sync-one" placement="top" offset="'20px'" title="Popover title">
                            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</p>
                        </b-popover>

                        <b-button id="popover-offset-sync-two" title="Popover title" variant="primary">0px</b-button>

                        <b-popover :show.sync="show_offset_two" target="popover-offset-sync-two" placement="top" offset="20px" title="Popover title">
                            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</p>
                        </b-popover>

                        <b-button id="popover-offset-hover-sync" title="Popover title" variant="primary">20px 20px On Hover</b-button>

                        <b-popover :show.sync="show_offset_three" target="popover-offset-hover-sync" placement="top" triggers="hover" offset="20px" title="Popover title">
                            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</p>
                        </b-popover>

                        <b-button id="popover-offset-sync" title="Popover title" variant="primary">0px On Hover</b-button>

                        <b-popover :show.sync="show_offset_four" target="popover-offset-sync" placement="top" triggers="hover" offset="'-30px'" title="Popover title">
                            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</p>
                        </b-popover>
                  </div>
                </div>
              </div> -->
                
            </div>
        </div>
        <!-- Container-fluid Ends-->
    </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        show_top: false,
        show_right:false,
        show_bottom:false,
        show_left:false,
        show_html_top:false,
        show_html_right:false,
        show_html_bottom:false,
        show_html_left:false,
        show_offset_one:false,
        show_offset_two:false,
        show_offset_three:false,
        show_offset_four:false,
      };
    }
  };
</script>