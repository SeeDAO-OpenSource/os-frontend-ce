<template>
    <div>
        <Breadcrumbs main="Icons" title="Themify Icon"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
           <div class="row">

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Arrows & Direction Icons</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(di,index) in directional" :key="index" v-on:click="icon_bar(di.name)">
                                <i class="" :class="di.name"></i>{{ di.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Web App Icons</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(web,index) in webapp" :key="index" v-on:click="icon_bar(web.name)">
                                <i class="" :class="web.name"></i>{{ web.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Control Icons</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(con,index) in control" :key="index" v-on:click="icon_bar(con.name)">
                                <i class="" :class="con.name"></i>{{ con.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Text Editor</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(texte,index) in texteditor" :key="index" v-on:click="icon_bar(texte.name)">
                                <i class="" :class="texte.name"></i>{{ texte.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Brand Icons</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(br,index) in brand" :key="index" v-on:click="icon_bar(br.name)">
                                <i class="" :class="br.name"></i>{{ br.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!-- Container-fluid Ends-->

    <div class="icon-hover-bottom p-fixed fa-fa-icon-show-div" :class="{ 'opecity-0' : !icon_bar_status }" :style="[icon_bar_status ? {'display':'block'} : { 'display':'none'} ]">
        <div class="container-fluid">
          <div class="row">
            <div class="icon-popup">
              <div class="close-icon" v-on:click="close_icon_bar"><i class="icofont icofont-close"></i></div>
              <div class="icon-first"><i class="fa-2x" :class="[ select_icon.class ]" ></i></div>
              <div class="icon-class">
                <label class="icon-title">Class</label><span v-text="select_icon.class">icon-drupal</span>
              </div>
              <div class="icon-last icon-last">
                <label class="icon-title">Markup</label>
                <div class="form-inline">
                  <div class="form-group">
                    <input class="inp-val form-control m-r-10" type="text" ref="text" :value="select_icon.tag" readonly="readonly">
                    <button class="btn btn-primary notification" v-on:click="copy_icon">Copy text</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

</div>
</template>

<script>
  export default{
    data(){
      return{

        icon_bar_status:false,

        select_icon:{
          class:'',
          tag:''
        },

        directional:[{ name:'icon-arrow-up' },{ name:'icon-arrow-right' },{ name:'icon-arrow-left' },{ name:'icon-arrow-down' },{ name:'icon-arrows-vertical' },{ name:'icon-arrows-horizontal' },{ name:'icon-angle-up' },{ name:'icon-angle-right' },{ name:'icon-angle-left' },{ name:'icon-angle-down' },{ name:'icon-angle-double-up' },{ name:'icon-angle-double-right' },{ name:'icon-angle-double-left' },{ name:'icon-angle-double-down' },{ name:'icon-move' },{ name:'icon-fullscreen' },{ name:'icon-arrow-top-right' },{ name:'icon-arrow-top-left' },{ name:'icon-arrow-circle-up' },{ name:'icon-arrow-circle-right' },{ name:'icon-arrow-circle-left' },{ name:'icon-arrow-circle-down' },{ name:'icon-arrows-corner' },{ name:'icon-split-v' },{ name:'icon-split-v-alt' },{ name:'icon-split-h' },{ name:'icon-hand-point-up' },{ name:'icon-hand-point-right' },{ name:'icon-hand-point-left' },{ name:'icon-hand-point-down' },{ name:'icon-back-right' },{ name:'icon-back-left' },{ name:'icon-exchange-vertical' }],

        webapp:[{ name:'icon-wand' },{ name:'icon-save' },{ name:'icon-save-alt' },{ name:'icon-direction' },{ name:'icon-direction-alt' },{ name:'icon-user' },{ name:'icon-link' },{ name:'icon-unlink' },{ name:'icon-trash' },{ name:'icon-target' },{ name:'icon-tag' },{ name:'icon-desktop' },{ name:'icon-tablet' },{ name:'icon-mobile' },{ name:'icon-email' },{ name:'icon-star' },{ name:'icon-spray' },{ name:'icon-signal' },{ name:'icon-shopping-cart' },{ name:'icon-shopping-cart-full' },{ name:'icon-settings' },{ name:'icon-search' },{ name:'icon-zoom-in' },{ name:'icon-zoom-out' },{ name:'icon-cut' },{ name:'icon-ruler' },{ name:'icon-ruler-alt-2' },{ name:'icon-ruler-pencil' },{ name:'icon-ruler-alt' },{ name:'icon-bookmark' },{ name:'icon-bookmark-alt' },{ name:'icon-reload' },{ name:'icon-plus' },{ name:'icon-minus' },{ name:'icon-close' },{ name:'icon-pin' },{ name:'icon-pencil' },{ name:'icon-pencil-alt' },{ name:'icon-paint-roller' },{ name:'icon-paint-bucket' },{ name:'icon-na' },{ name:'icon-medall' },{ name:'icon-medall-alt' },{ name:'icon-marker' },{ name:'icon-marker-alt' },{ name:'icon-lock' },{ name:'icon-unlock' },{ name:'icon-location-arrow' },{ name:'icon-layout' },{ name:'icon-layers' },{ name:'icon-layers-alt' },{ name:'icon-key' },{ name:'icon-image' },{ name:'icon-heart' },{ name:'icon-heart-broken' },{ name:'icon-hand-stop' },{ name:'icon-hand-open' },{ name:'icon-hand-drag' },{ name:'icon-flag' },{ name:'icon-flag-alt' },{ name:'icon-flag-alt-2' },{ name:'icon-eye' },{ name:'icon-import' },{ name:'icon-export' },{ name:'icon-cup' },{ name:'icon-crown' },{ name:'icon-comments' },{ name:'icon-comment' },{ name:'icon-comment-alt' },{ name:'icon-thought' },{ name:'icon-clip' },{ name:'icon-check' },{ name:'icon-check-box' },{ name:'icon-camera' },{ name:'icon-announcement' },{ name:'icon-brush' },{ name:'icon-brush-alt' },{ name:'icon-palette' },{ name:'icon-briefcase' },{ name:'icon-bolt' },{ name:'icon-bolt-alt' },{ name:'icon-blackboard' },{ name:'icon-bag' },{ name:'icon-world' },{ name:'icon-wheelchair' },{ name:'icon-car' },{ name:'icon-truck' },{ name:'icon-timer' },{ name:'icon-ticket' },{ name:'icon-thumb-up' },{ name:'icon-thumb-down' },{ name:'icon-stats-up' },{ name:'icon-stats-down' },{ name:'icon-shine' },{ name:'icon-shift-right' },{ name:'icon-shift-left' },{ name:'icon-shift-right-alt' },{ name:'icon-shift-left-alt' },{ name:'icon-shield' },{ name:'icon-notepad' },{ name:'icon-server' },{ name:'icon-pulse' },{ name:'icon-printer' },{ name:'icon-power-off' },{ name:'icon-plug' },{ name:'icon-pie-chart' },{ name:'icon-panel' },{ name:'icon-package' },{ name:'icon-music' },{ name:'icon-music-alt' },{ name:'icon-mouse' },{ name:'icon-mouse-alt' },{ name:'icon-money' },{ name:'icon-microphone' },{ name:'icon-menu' },{ name:'icon-menu-alt' },{ name:'icon-map' },{ name:'icon-map-alt' },{ name:'icon-location-pin' },{ name:'icon-light-bulb' },{ name:'icon-info' },{ name:'icon-infinite' },{ name:'icon-id-badge' },{ name:'icon-hummer' },{ name:'icon-home' },{ name:'icon-help' },{ name:'icon-headphone' },{ name:'icon-harddrives' },{ name:'icon-harddrive' },{ name:'icon-gift' },{ name:'icon-game' },{ name:'icon-filter' },{ name:'icon-files' },{ name:'icon-file' },{ name:'icon-zip' },{ name:'icon-folder' },{ name:'icon-envelope' },{ name:'icon-dashboard' },{ name:'icon-cloud' },{ name:'icon-cloud-up' },{ name:'icon-cloud-down' },{ name:'icon-clipboard' },{ name:'icon-calendar' },{ name:'icon-book' },{ name:'icon-bell' },{ name:'icon-basketball' },{ name:'icon-bar-chart' },{ name:'icon-bar-chart-alt' },{ name:'icon-archive' },{ name:'icon-anchor' },{ name:'icon-alert' },{ name:'icon-alarm-clock' },{ name:'icon-agenda' },{ name:'icon-write' },{ name:'icon-wallet' },{ name:'icon-video-clapper' },{ name:'icon-video-camera' },{ name:'icon-vector' },{ name:'icon-support' },{ name:'icon-stamp' },{ name:'icon-slice' },{ name:'icon-shortcode' },{ name:'icon-receipt' },{ name:'icon-pin2' },{ name:'icon-pin-alt' },{ name:'icon-pencil-alt2' },{ name:'icon-eraser' },{ name:'icon-more' },{ name:'icon-more-alt' },{ name:'icon-microphone-alt' },{ name:'icon-magnet' },{ name:'icon-line-double' },{ name:'icon-line-dotted' },{ name:'icon-line-dashed' },{ name:'icon-ink-pen' },{ name:'icon-info-alt' },{ name:'icon-help-alt' },{ name:'icon-headphone-alt' },{ name:'icon-gallery' },{ name:'icon-face-smile' },{ name:'icon-face-sad' },{ name:'icon-credit-card' },{ name:'icon-comments-smiley' },{ name:'icon-time' },{ name:'icon-share' },{ name:'icon-share-alt' },{ name:'icon-rocket' },{ name:'icon-new-window' },{ name:'icon-rss' },{ name:'icon-rss-alt' }],

        control:[{ name:'icon-control-stop' },{ name:'icon-control-shuffle' },{ name:'icon-control-play' },{ name:'icon-control-pause' },{ name:'icon-control-forward' },{ name:'icon-control-backward' },{ name:'icon-volume' },{ name:'icon-control-skip-forward' },{ name:'icon-control-skip-backward' },{ name:'icon-control-record' },{ name:'icon-control-eject' }],

        texteditor:[{ name:'icon-paragraph' },{ name:'icon-uppercase' },{ name:'icon-underline' },{ name:'icon-text' },{ name:'icon-Italic' },{ name:'icon-smallcap' },{ name:'icon-list' },{ name:'icon-list-ol' },{ name:'icon-align-right' },{ name:'icon-align-left' },{ name:'icon-align-justify' },{ name:'icon-align-center' },{ name:'icon-quote-right' },{ name:'icon-quote-left' }],

        brand:[{ name:'icon-flickr' },{ name:'icon-flickr-alt' },{ name:'icon-instagram' },{ name:'icon-google' },{ name:'icon-github' },{ name:'icon-facebook' },{ name:'icon-dropbox' },{ name:'icon-dropbox-alt' },{ name:'icon-dribbble' },{ name:'icon-apple' },{ name:'icon-android' },{ name:'icon-yahoo' },{ name:'icon-trello' },{ name:'icon-stack-overflow' },{ name:'icon-soundcloud' },{ name:'icon-sharethis' },{ name:'icon-sharethis-alt' },{ name:'icon-reddit' },{ name:'icon-microsoft' },{ name:'icon-microsoft-alt' },{ name:'icon-linux' },{ name:'icon-jsfiddle' },{ name:'icon-joomla' },{ name:'icon-html5' },{ name:'icon-css3' },{ name:'icon-drupal' },{ name:'icon-wordpress' },{ name:'icon-tumblr' },{ name:'icon-tumblr-alt' },{ name:'icon-skype' },{ name:'icon-youtube' },{ name:'icon-vimeo' },{ name:'icon-vimeo-alt' },{ name:'icon-twitter' },{ name:'icon-twitter-alt' },{ name:'icon-linkedin' },{ name:'icon-pinterest' },{ name:'icon-pinterest-alt' },{ name:'icon-themify-logo' },{ name:'icon-themify-favicon' },{ name:'icon-themify-favicon-alt' }]
      };
    },
    methods:{
      icon_bar(icon){

        this.select_icon.class = icon;
        this.select_icon.tag = '<i class="'+icon+'"></i>';

        this.icon_bar_status = true;
      },
      close_icon_bar() {
        this.icon_bar_status = false;
      },
      copy_icon(){
        this.$refs.text.select();
        document.execCommand('copy');
        this.$toasted.show('Code Copied to Clipboard', { theme: 'outline',position: 'bottom-right', closeOnSwipe: true, type: 'default', duration: 2000, className:'alert-copy', action : {
          icon : 'times',
          onClick : (e, toastObject) => {
            toastObject.goAway(0);
          }
        } });
      }
    }
  };
</script>