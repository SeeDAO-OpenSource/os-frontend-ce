<template>
    <div>
        <Breadcrumbs main="Icons" title="Feather Icons"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
           <div class="row">

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Feather Icons</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists feather-icons">

                            <div class="col-12 col-sm-6 col-xl-4" v-for="(icon,index) in feather_icons" :key="index" v-on:click="icon_bar(icon.abbrivation)">
                                <div class="media">
                                    <feather :type="icon.abbrivation"></feather>
                                    <div class="media-body align-self-center">
                                        <h6 class="mt-0" v-text="icon.name"></h6>
                                    </div>
                                </div>
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
              <div class="icon-first">
                  <feather class="fa-2x" :type="select_icon.class"></feather>
                  <!-- <i class="fa-2x" :class="[ select_icon.class ]" ></i> -->
            </div>
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
  export default {
    data(){
      return{
        icon_bar_status:false,

        select_icon:{
          class:'home',
          tag:'home'
        },

        feather_icons:[
          { abbrivation: 'activity', name: 'activity' },
          { abbrivation: 'airplay', name: 'airplay' },
          { abbrivation: 'alert-circle', name: 'alert-circle' },
          { abbrivation: 'alert-octagon', name: 'alert-octagon' },
          { abbrivation: 'alert-triangle', name: 'alert-triangle' },
          { abbrivation: 'align-center', name: 'align-center' },
          { abbrivation: 'align-justify', name: 'align-justify' },
          { abbrivation: 'align-left', name: 'align-left' },
          { abbrivation: 'align-right', name: 'align-right' },
          { abbrivation: 'anchor', name: 'anchor' },
          { abbrivation: 'aperture', name: 'aperture' },
          { abbrivation: 'archive', name: 'archive' },
          { abbrivation: 'arrow-down-circle', name: 'arrow-down-circle' },
          { abbrivation: 'arrow-down-left', name: 'arrow-down-left' },
          { abbrivation: 'arrow-down-right', name: 'arrow-down-right' },
          { abbrivation: 'arrow-down', name: 'arrow-down' },
          { abbrivation: 'arrow-left-circle', name: 'arrow-left-circle' },
          { abbrivation: 'arrow-left', name: 'arrow-left' },
          { abbrivation: 'arrow-right-circle', name: 'arrow-right-circle' },
          { abbrivation: 'arrow-right', name: 'arrow-right' },
          { abbrivation: 'arrow-up-circle', name: 'arrow-up-circle' },
          { abbrivation: 'arrow-up-left', name: 'arrow-up-left' },
          { abbrivation: 'arrow-up-right', name: 'arrow-up-right' },
          { abbrivation: 'arrow-up', name: 'arrow-up' },
          { abbrivation: 'at-sign', name: 'at-sign' },
          { abbrivation: 'award', name: 'award' },
          { abbrivation: 'bar-chart-2', name: 'bar-chart-2' },
          { abbrivation: 'bar-chart', name: 'bar-chart' },
          { abbrivation: 'battery-charging', name: 'battery-charging' },
          { abbrivation: 'battery', name: 'battery' },
          { abbrivation: 'bell-off', name: 'bell-off' },
          { abbrivation: 'bell', name: 'bell' },
          { abbrivation: 'bluetooth', name: 'bluetooth' },
          { abbrivation: 'bold', name: 'bold' },
          { abbrivation: 'book-open', name: 'book-open' },
          { abbrivation: 'book', name: 'book' },
          { abbrivation: 'bookmark', name: 'bookmark' },
          { abbrivation: 'box', name: 'box' },
          { abbrivation: 'briefcase', name: 'briefcase' },
          { abbrivation: 'calendar', name: 'calendar' },
          { abbrivation: 'camera-off', name: 'camera-off' },
          { abbrivation: 'camera', name: 'camera' },
          { abbrivation: 'cast', name: 'cast' },
          { abbrivation: 'check-circle', name: 'check-circle' },
          { abbrivation: 'check-square', name: 'check-square' },
          { abbrivation: 'check', name: 'check' },
          { abbrivation: 'chevron-down', name: 'chevron-down' },
          { abbrivation: 'chevron-left', name: 'chevron-left' },
          { abbrivation: 'chevron-right', name: 'chevron-right' },
          { abbrivation: 'chevron-up', name: 'chevron-up' },
          { abbrivation: 'chevrons-down', name: 'chevrons-down' },
          { abbrivation: 'chevrons-left', name: 'chevrons-left' },
          { abbrivation: 'chevrons-right', name: 'chevrons-right' },
          { abbrivation: 'chevrons-up', name: 'chevrons-up' },
          { abbrivation: 'chrome', name: 'chrome' },
          { abbrivation: 'circle', name: 'circle' },
          { abbrivation: 'clipboard', name: 'clipboard' },
          { abbrivation: 'clock', name: 'clock' },
          { abbrivation: 'cloud-drizzle', name: 'cloud-drizzle' },
          { abbrivation: 'cloud-lightning', name: 'cloud-lightning' },
          { abbrivation: 'cloud-off', name: 'cloud-off' },
          { abbrivation: 'cloud-rain', name: 'cloud-rain' },
          { abbrivation: 'cloud-snow', name: 'cloud-snow' },
          { abbrivation: 'cloud', name: 'cloud' },
          { abbrivation: 'code', name: 'code' },
          { abbrivation: 'codepen', name: 'codepen' },
          { abbrivation: 'coffee', name: 'coffee' },
          { abbrivation: 'command', name: 'command' },
          { abbrivation: 'compass', name: 'compass' },
          { abbrivation: 'copy', name: 'copy' },
          { abbrivation: 'corner-down-left', name: 'corner-down-left' },
          { abbrivation: 'corner-down-right', name: 'corner-down-right' },
          { abbrivation: 'corner-left-down', name: 'corner-left-down' },
          { abbrivation: 'corner-left-up', name: 'corner-left-up' },
          { abbrivation: 'corner-right-down', name: 'corner-right-down' },
          { abbrivation: 'corner-right-up', name: 'corner-right-up' },
          { abbrivation: 'corner-up-left', name: 'corner-up-left' },
          { abbrivation: 'corner-up-right', name: 'corner-up-right' },
          { abbrivation: 'cpu', name: 'cpu' },
          { abbrivation: 'credit-card', name: 'credit-card' },
          { abbrivation: 'crop', name: 'crop' },
          { abbrivation: 'crosshair', name: 'crosshair' },
          { abbrivation: 'database', name: 'database' },
          { abbrivation: 'delete', name: 'delete' },
          { abbrivation: 'disc', name: 'disc' },
          { abbrivation: 'dollar-sign', name: 'dollar-sign' },
          { abbrivation: 'download-cloud', name: 'download-cloud' },
          { abbrivation: 'download', name: 'download' },
          { abbrivation: 'droplet', name: 'droplet' },
          { abbrivation: 'edit-2', name: 'edit-2' },
          { abbrivation: 'edit-3', name: 'edit-3' },
          { abbrivation: 'edit', name: 'edit' },
          { abbrivation: 'external-link', name: 'external-link' },
          { abbrivation: 'eye-off', name: 'eye-off' },
          { abbrivation: 'eye', name: 'eye' },
          { abbrivation: 'facebook', name: 'facebook' },
          { abbrivation: 'fast-forward', name: 'fast-forward' },
          { abbrivation: 'feather', name: 'feather' },
          { abbrivation: 'file-minus', name: 'file-minus' },
          { abbrivation: 'file-plus', name: 'file-plus' },
          { abbrivation: 'file-text', name: 'file-text' },
          { abbrivation: 'file', name: 'file' },
          { abbrivation: 'film', name: 'film' },
          { abbrivation: 'filter', name: 'filter' },
          { abbrivation: 'flag', name: 'flag' },
          { abbrivation: 'folder-minus', name: 'folder-minus' },
          { abbrivation: 'folder-plus', name: 'folder-plus' },
          { abbrivation: 'folder', name: 'folder' },
          { abbrivation: 'gift', name: 'gift' },
          { abbrivation: 'git-branch', name: 'git-branch' },
          { abbrivation: 'git-commit', name: 'git-commit' },
          { abbrivation: 'git-merge', name: 'git-merge' },
          { abbrivation: 'git-pull-request', name: 'git-pull-request' },
          { abbrivation: 'github', name: 'github' },
          { abbrivation: 'gitlab', name: 'gitlab' },
          { abbrivation: 'globe', name: 'globe' },
          { abbrivation: 'grid', name: 'grid' },
          { abbrivation: 'hard-drive', name: 'hard-drive' },
          { abbrivation: 'hash', name: 'hash' },
          { abbrivation: 'headphones', name: 'headphones' },
          { abbrivation: 'heart', name: 'heart' },
          { abbrivation: 'help-circle', name: 'help-circle' },
          { abbrivation: 'home', name: 'home' },
          { abbrivation: 'image', name: 'image' },
          { abbrivation: 'inbox', name: 'inbox' },
          { abbrivation: 'info', name: 'info' },
          { abbrivation: 'instagram', name: 'instagram' },
          { abbrivation: 'italic', name: 'italic' },
          { abbrivation: 'layers', name: 'layers' },
          { abbrivation: 'layout', name: 'layout' },
          { abbrivation: 'life-buoy', name: 'life-buoy' },
          { abbrivation: 'link-2', name: 'link-2' },
          { abbrivation: 'link', name: 'link' },
          { abbrivation: 'linkedin', name: 'linkedin' },
          { abbrivation: 'list', name: 'list' },
          { abbrivation: 'loader', name: 'loader' },
          { abbrivation: 'lock', name: 'lock' },
          { abbrivation: 'log-in', name: 'log-in' },
          { abbrivation: 'log-out', name: 'log-out' },
          { abbrivation: 'mail', name: 'mail' },
          { abbrivation: 'map-pin', name: 'map-pin' },
          { abbrivation: 'map', name: 'map' },
          { abbrivation: 'maximize-2', name: 'maximize-2' },
          { abbrivation: 'maximize', name: 'maximize' },
          { abbrivation: 'menu', name: 'menu' },
          { abbrivation: 'message-circle', name: 'message-circle' },
          { abbrivation: 'message-square', name: 'message-square' },
          { abbrivation: 'mic-off', name: 'mic-off' },
          { abbrivation: 'mic', name: 'mic' },
          { abbrivation: 'minimize-2', name: 'minimize-2' },
          { abbrivation: 'minimize', name: 'minimize' },
          { abbrivation: 'minus-circle', name: 'minus-circle' },
          { abbrivation: 'minus-square', name: 'minus-square' },
          { abbrivation: 'minus', name: 'minus' },
          { abbrivation: 'monitor', name: 'monitor' },
          { abbrivation: 'moon', name: 'moon' },
          { abbrivation: 'more-horizontal', name: 'more-horizontal' },
          { abbrivation: 'more-vertical', name: 'more-vertical' },
          { abbrivation: 'move', name: 'move' },
          { abbrivation: 'music', name: 'music' },
          { abbrivation: 'navigation-2', name: 'navigation-2' },
          { abbrivation: 'navigation', name: 'navigation' },
          { abbrivation: 'octagon', name: 'octagon' },
          { abbrivation: 'package', name: 'package' },
          { abbrivation: 'paperclip', name: 'paperclip' },
          { abbrivation: 'pause-circle', name: 'pause-circle' },
          { abbrivation: 'pause', name: 'pause' },
          { abbrivation: 'percent', name: 'percent' },
          { abbrivation: 'phone-call', name: 'phone-call' },
          { abbrivation: 'phone-forwarded', name: 'phone-forwarded' },
          { abbrivation: 'phone-incoming', name: 'phone-incoming' },
          { abbrivation: 'phone-missed', name: 'phone-missed' },
          { abbrivation: 'phone-off', name: 'phone-off' },
          { abbrivation: 'phone-outgoing', name: 'phone-outgoing' },
          { abbrivation: 'phone', name: 'phone' },
          { abbrivation: 'pie-chart', name: 'pie-chart' },
          { abbrivation: 'play-circle', name: 'play-circle' },
          { abbrivation: 'play', name: 'play' },
          { abbrivation: 'plus-circle', name: 'plus-circle' },
          { abbrivation: 'plus-square', name: 'plus-square' },
          { abbrivation: 'plus', name: 'plus' },
          { abbrivation: 'pocket', name: 'pocket' },
          { abbrivation: 'power', name: 'power' },
          { abbrivation: 'printer', name: 'printer' },
          { abbrivation: 'radio', name: 'radio' },
          { abbrivation: 'refresh-ccw', name: 'refresh-ccw' },
          { abbrivation: 'refresh-cw', name: 'refresh-cw' },
          { abbrivation: 'repeat', name: 'repeat' },
          { abbrivation: 'rewind', name: 'rewind' },
          { abbrivation: 'rotate-ccw', name: 'rotate-ccw' },
          { abbrivation: 'rotate-cw', name: 'rotate-cw' },
          { abbrivation: 'rss', name: 'rss' },
          { abbrivation: 'save', name: 'save' },
          { abbrivation: 'scissors', name: 'scissors' },
          { abbrivation: 'search', name: 'search' },
          { abbrivation: 'send', name: 'send' },
          { abbrivation: 'server', name: 'server' },
          { abbrivation: 'settings', name: 'settings' },
          { abbrivation: 'share-2', name: 'share-2' },
          { abbrivation: 'share', name: 'share' },
          { abbrivation: 'shield-off', name: 'shield-off' },
          { abbrivation: 'shield', name: 'shield' },
          { abbrivation: 'shopping-bag', name: 'shopping-bag' },
          { abbrivation: 'shopping-cart', name: 'shopping-cart' },
          { abbrivation: 'shuffle', name: 'shuffle' },
          { abbrivation: 'sidebar', name: 'sidebar' },
          { abbrivation: 'skip-back', name: 'skip-back' },
          { abbrivation: 'skip-forward', name: 'skip-forward' },
          { abbrivation: 'slack', name: 'slack' },
          { abbrivation: 'slash', name: 'slash' },
          { abbrivation: 'sliders', name: 'sliders' },
          { abbrivation: 'smartphone', name: 'smartphone' },
          { abbrivation: 'speaker', name: 'speaker' },
          { abbrivation: 'square', name: 'square' },
          { abbrivation: 'star', name: 'star' },
          { abbrivation: 'stop-circle', name: 'stop-circle' },
          { abbrivation: 'sun', name: 'sun' },
          { abbrivation: 'sunrise', name: 'sunrise' },
          { abbrivation: 'sunset', name: 'sunset' },
          { abbrivation: 'tablet', name: 'tablet' },
          { abbrivation: 'tag', name: 'tag' },
          { abbrivation: 'target', name: 'target' },
          { abbrivation: 'terminal', name: 'terminal' },
          { abbrivation: 'thermometer', name: 'thermometer' },
          { abbrivation: 'thumbs-down', name: 'thumbs-down' },
          { abbrivation: 'thumbs-up', name: 'thumbs-up' },
          { abbrivation: 'toggle-left', name: 'toggle-left' },
          { abbrivation: 'toggle-right', name: 'toggle-right' },
          { abbrivation: 'trash-2', name: 'trash-2' },
          { abbrivation: 'trash', name: 'trash' },
          { abbrivation: 'trending-down', name: 'trending-down' },
          { abbrivation: 'trending-up', name: 'trending-up' },
          { abbrivation: 'triangle', name: 'triangle' },
          { abbrivation: 'truck', name: 'truck' },
          { abbrivation: 'tv', name: 'tv' },
          { abbrivation: 'twitter', name: 'twitter' },
          { abbrivation: 'type', name: 'type' },
          { abbrivation: 'umbrella', name: 'umbrella' },
          { abbrivation: 'underline', name: 'underline' },
          { abbrivation: 'unlock', name: 'unlock' },
          { abbrivation: 'upload-cloud', name: 'upload-cloud' },
          { abbrivation: 'upload', name: 'upload' },
          { abbrivation: 'user-check', name: 'user-check' },
          { abbrivation: 'user-minus', name: 'user-minus' },
          { abbrivation: 'user-plus', name: 'user-plus' },
          { abbrivation: 'user-x', name: 'user-x' },
          { abbrivation: 'user', name: 'user' },
          { abbrivation: 'users', name: 'users' },
          { abbrivation: 'video-off', name: 'video-off' },
          { abbrivation: 'video', name: 'video' },
          { abbrivation: 'voicemail', name: 'voicemail' },
          { abbrivation: 'volume-1', name: 'volume-1' },
          { abbrivation: 'volume-2', name: 'volume-2' },
          { abbrivation: 'volume-x', name: 'volume-x' },
          { abbrivation: 'volume', name: 'volume' },
          { abbrivation: 'watch', name: 'watch' },
          { abbrivation: 'wifi-off', name: 'wifi-off' },
          { abbrivation: 'wifi', name: 'wifi' },
          { abbrivation: 'wind', name: 'wind' },
          { abbrivation: 'x-circle', name: 'x-circle' },
          { abbrivation: 'x-square', name: 'x-square' },
          { abbrivation: 'x', name: 'x' },
          { abbrivation: 'youtube', name: 'youtube' },
          { abbrivation: 'zap-off', name: 'zap-off' },
          { abbrivation: 'zap', name: 'zap' },
          { abbrivation: 'zoom-in', name: 'zoom-in' },
          { abbrivation: 'zoom-out', name: 'zoom-out' },
        ]
      };
    },
    methods:{
      icon_bar(icon){

        this.select_icon.class = icon;
        this.select_icon.tag = '<feather type="'+icon+'"></feather>';

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