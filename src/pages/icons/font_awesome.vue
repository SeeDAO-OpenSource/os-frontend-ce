<template>
    <div>
        <Breadcrumbs main="Icons" title="Font Awesome"/>

        <div class="container-fluid">
         <div class="row">

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0"><span class="digits">20</span> Icons</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(ico,index) in icons" :key="index" v-on:click="icon_bar(ico.name)">
                                <i class="" :class="'fa fa-'+ico.name"></i>{{ ico.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Currency Icons</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(cur,index) in currencyicons" :key="index" v-on:click="icon_bar(cur.name)">
                                <i class="" :class="'fa fa-'+cur.name"></i>{{ cur.name }}
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

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(webi,index) in webicons" :key="index" v-on:click="icon_bar(webi.name)">
                                <i class="" :class="'fa fa-'+webi.name"></i>{{ webi.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Spinner Icons</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(spi,index) in spinner" :key="index" v-on:click="icon_bar(spi.name)">
                                <i class="" :class="'fa fa-'+spi.name"></i>{{ spi.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Form Control Icons</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(form,index) in formicons" :key="index" v-on:click="icon_bar(form.name)">
                                <i class="" :class="'fa fa-'+form.name"></i>{{ form.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Text Editor Icons</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(texteditor,index) in texteditoricons" :key="index" v-on:click="icon_bar(texteditor.name)">
                                <i class="" :class="'fa fa-'+texteditor.name"></i>{{ texteditor.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Directional Icons</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(dire,index) in directionalicons" :key="index" v-on:click="icon_bar(dire.name)">
                                <i class="" :class="'fa fa-'+dire.name"></i>{{ dire.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Video Player Icons</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(video,index) in videoicons" :key="index" v-on:click="icon_bar(video.name)">
                                <i class="" :class="'fa fa-'+video.name"></i>{{ video.name }}
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

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(brand,index) in branddicons" :key="index" v-on:click="icon_bar(brand.name)">
                                <i class="" :class="'fa fa-'+brand.name"></i>{{ brand.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Medical Icons</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(medica,index) in medicalicons" :key="index" v-on:click="icon_bar(medica.name)">
                                <i class="" :class="'fa fa-'+medica.name"></i>{{ medica.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

         </div>
        </div>

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
  export default {
    data(){
      return{

        icon_bar_status:false,

        select_icon:{
          class:'',
          tag:''
        },

        icons:[{ name:'bluetooth' },{ name:'bluetooth-b' },{ name:'codiepie' },{ name:'credit-card-alt' },{ name:'edge' },{ name:'fort-awesome' },{ name:'hashtag' },{ name:'mixcloud' },{ name:'modx' },{ name:'pause-circle' },{ name:'pause-circle-o' },{ name:'percent' },{ name:'product-hunt' },{ name:'reddit-alien' },{ name:'scribd' },{ name:'shopping-bag' },{ name:'shopping-basket' },{ name:'stop-circle' },{ name:'stop-circle-o' },{ name:'usb' }],

        currencyicons:[{ name:'bitcoin' },{ name:'btc' },{ name:'cny' },{ name:'dollar' },{ name:'eur' },{ name:'euro' },{ name:'gbp' },{ name:'inr' },{ name:'jpy' },{ name:'krw' },{ name:'money' },{ name:'rmb' },{ name:'rouble' },{ name:'rub' },{ name:'ruble' },{ name:'rupee' },{ name:'try' },{ name:'turkish-lira' },{ name:'usd' },{ name:'won' },{ name:'yen' }],

        webicons:[{ name:'adjust' },{ name:'anchor' },{ name:'archive' },{ name:'arrows' },{ name:'arrows-h' },{ name:'arrows-v' },{ name:'asterisk' },{ name:'automobile' },{ name:'ban' },{ name:'bank' },{ name:'bar-chart-o' },{ name:'barcode' },{ name:'bars' },{ name:'beer' },{ name:'bell' },{ name:'bell-o' },{ name:'bolt' },{ name:'bomb' },{ name:'book' },{ name:'bookmark' },{ name:'bookmark-o' },{ name:'briefcase' },{ name:'bug' },{ name:'building' },{ name:'building-o' },{ name:'bullhorn' },{ name:'bullseye' },{ name:'cab' },{ name:'calendar' },{ name:'calendar-o' },{ name:'camera' },{ name:'camera-retro' },{ name:'car' },{ name:'caret-square-o-down' },{ name:'caret-square-o-left' },{ name:'caret-square-o-right' },{ name:'caret-square-o-up' },{ name:'certificate' },{ name:'check' },{ name:'check-circle' },{ name:'check-circle-o' },{ name:'check-square' },{ name:'check-square-o' },{ name:'child' },{ name:'circle' },{ name:'circle-o' },{ name:'circle-o-notch' },{ name:'circle-thin' },{ name:'clock-o' },{ name:'cloud' },{ name:'cloud-download' },{ name:'cloud-upload' },{ name:'code' },{ name:'code-fork' },{ name:'coffee' },{ name:'cog' },{ name:'cogs' },{ name:'comment' },{ name:'comment-o' },{ name:'comments' },{ name:'comments-o' },{ name:'compass' },{ name:'credit-card' },{ name:'crop' },{ name:'crosshairs' },{ name:'cube' },{ name:'cubes' },{ name:'cutlery' },{ name:'dashboard' },{ name:'database' },{ name:'desktop' },{ name:'dot-circle-o' },{ name:'download' },{ name:'edit' },{ name:'ellipsis-h' },{ name:'ellipsis-v' },{ name:'envelope' },{ name:'envelope-o' },{ name:'envelope-square' },{ name:'eraser' },{ name:'exchange' },{ name:'exclamation' },{ name:'exclamation-circle' },{ name:'exclamation-triangle' },{ name:'external-link' },{ name:'external-link-square' },{ name:'eye' },{ name:'eye-slash' },{ name:'fax' },{ name:'female' },{ name:'fighter-jet' },{ name:'file-archive-o' },{ name:'file-audio-o' },{ name:'file-code-o' },{ name:'file-excel-o' },{ name:'file-image-o' },{ name:'file-movie-o' },{ name:'file-pdf-o' },{ name:'file-photo-o' },{ name:'file-picture-o' },{ name:'file-powerpoint-o' },{ name:'file-sound-o' },{ name:'file-video-o' },{ name:'file-word-o' },{ name:'file-zip-o' },{ name:'film' },{ name:'filter' },{ name:'fire' },{ name:'fire-extinguisher' },{ name:'flag' },{ name:'flag-checkered' },{ name:'flag-o' },{ name:'flash' },{ name:'flask' },{ name:'folder' },{ name:'folder-o' },{ name:'folder-open' },{ name:'folder-open-o' },{ name:'frown-o' },{ name:'gamepad' },{ name:'gavel' },{ name:'gear' },{ name:'gears' },{ name:'gift' },{ name:'glass' },{ name:'globe' },{ name:'graduation-cap' },{ name:'group' },{ name:'hdd-o' },{ name:'headphones' },{ name:'heart' },{ name:'heart-o' },{ name:'history' },{ name:'home' },{ name:'image' },{ name:'inbox' },{ name:'info' },{ name:'info-circle' },{ name:'institution' },{ name:'key' },{ name:'keyboard-o' },{ name:'language' },{ name:'laptop' },{ name:'leaf' },{ name:'legal' },{ name:'lemon-o' },{ name:'level-down' },{ name:'level-up' },{ name:'life-bouy' },{ name:'life-ring' },{ name:'life-saver' },{ name:'lightbulb-o' },{ name:'location-arrow' },{ name:'lock' },{ name:'magic' },{ name:'magnet' },{ name:'mail-forward' },{ name:'mail-reply' },{ name:'mail-reply-all' },{ name:'male' },{ name:'map-marker' },{ name:'meh-o' },{ name:'microphone' },{ name:'microphone-slash' },{ name:'minus' },{ name:'minus-circle' },{ name:'minus-square' },{ name:'minus-square-o' },{ name:'mobile' },{ name:'mobile-phone' },{ name:'money' },{ name:'moon-o' },{ name:'mortar-board' },{ name:'music' },{ name:'navicon' },{ name:'paper-plane' },{ name:'paper-plane-o' },{ name:'paw' },{ name:'pencil' },{ name:'pencil-square' },{ name:'pencil-square-o' },{ name:'phone' },{ name:'phone-square' },{ name:'photo' },{ name:'picture-o' },{ name:'plane' },{ name:'plus' },{ name:'plus-circle' },{ name:'plus-square' },{ name:'plus-square-o' },{ name:'power-off' },{ name:'print' },{ name:'puzzle-piece' },{ name:'qrcode' },{ name:'question' },{ name:'question-circle' },{ name:'quote-left' },{ name:'quote-right' },{ name:'random' },{ name:'recycle' },{ name:'refresh' },{ name:'reorder' },{ name:'reply' },{ name:'reply-all' },{ name:'retweet' },{ name:'road' },{ name:'rocket' },{ name:'rss' },{ name:'rss-square' },{ name:'search' },{ name:'search-minus' },{ name:'search-plus' },{ name:'send' },{ name:'send-o' },{ name:'share' },{ name:'share-alt' },{ name:'share-alt-square' },{ name:'share-square' },{ name:'share-square-o' },{ name:'shield' },{ name:'shopping-cart' },{ name:'sign-in' },{ name:'sign-out' },{ name:'signal' },{ name:'sitemap' },{ name:'sliders' },{ name:'smile-o' },{ name:'sort' },{ name:'sort-alpha-asc' },{ name:'sort-alpha-desc' },{ name:'sort-amount-asc' },{ name:'sort-amount-desc' },{ name:'sort-asc' },{ name:'sort-desc' },{ name:'sort-down' },{ name:'sort-numeric-asc' },{ name:'sort-numeric-desc' },{ name:'sort-up' },{ name:'space-shuttle' },{ name:'spinner' },{ name:'spoon' },{ name:'square' },{ name:'square-o' },{ name:'star' },{ name:'star-half' },{ name:'star-half-empty' },{ name:'star-half-full' },{ name:'star-half-o' },{ name:'star-o' },{ name:'suitcase' },{ name:'sun-o' },{ name:'support' },{ name:'tablet' },{ name:'tachometer' },{ name:'tag' },{ name:'tags' },{ name:'tasks' },{ name:'taxi' },{ name:'terminal' },{ name:'thumb-tack' },{ name:'thumbs-down' },{ name:'thumbs-o-down' },{ name:'thumbs-o-up' },{ name:'thumbs-up' },{ name:'ticket' },{ name:'times' },{ name:'times-circle' },{ name:'times-circle-o' },{ name:'tint' },{ name:'toggle-down' },{ name:'toggle-left' },{ name:'toggle-right' },{ name:'toggle-up' },{ name:'trash-o' },{ name:'tree' },{ name:'trophy' },{ name:'truck' },{ name:'umbrella' },{ name:'university' },{ name:'unlock' },{ name:'unlock-alt' },{ name:'unsorted' },{ name:'upload' },{ name:'user' },{ name:'users' },{ name:'video-camera' },{ name:'volume-down' },{ name:'volume-off' },{ name:'volume-up' },{ name:'warning' },{ name:'wheelchair' },{ name:'wrench' }],

        spinner : [{ name:'circle-o-notch' }, { name:'cog' }, { name:'gear' }, { name:'refresh' }, { name:'spinner' }],

        formicons:[{ name:'check-square' }, { name:'check-square-o' }, { name:'circle' }, { name:'circle-o' }, { name:'dot-circle-o' }, { name:'minus-square' }, { name:'minus-square-o' }, { name:'plus-square' }, { name:'plus-square-o' }, { name:'square' }, { name:'square-o' }],

        texteditoricons:[{ name:'align-center' },{ name:'align-justify' },{ name:'align-left' },{ name:'align-right' },{ name:'bold' },{ name:'chain' },{ name:'chain-broken' },{ name:'clipboard' },{ name:'columns' },{ name:'copy' },{ name:'cut' },{ name:'dedent' },{ name:'eraser' },{ name:'file' },{ name:'file-o' },{ name:'file-text' },{ name:'file-text-o' },{ name:'files-o' },{ name:'floppy-o' },{ name:'font' },{ name:'header' },{ name:'indent' },{ name:'italic' },{ name:'link' },{ name:'list' },{ name:'list-alt' },{ name:'list-ol' },{ name:'list-ul' },{ name:'outdent' },{ name:'paperclip' },{ name:'paragraph' },{ name:'paste' },{ name:'repeat' },{ name:'rotate-left' },{ name:'rotate-right' },{ name:'save' },{ name:'scissors' },{ name:'strikethrough' },{ name:'subscript' },{ name:'superscript' },{ name:'table' },{ name:'text-height' },{ name:'text-width' },{ name:'th' },{ name:'th-large' },{ name:'th-list' },{ name:'underline' },{ name:'undo' },{ name:'unlink' }],

        directionalicons:[{ name:'angle-double-down' },{ name:'angle-double-left' },{ name:'angle-double-right' },{ name:'angle-double-up' },{ name:'angle-down' },{ name:'angle-left' },{ name:'angle-right' },{ name:'angle-up' },{ name:'arrow-circle-down' },{ name:'arrow-circle-left' },{ name:'arrow-circle-o-down' },{ name:'arrow-circle-o-left' },{ name:'arrow-circle-o-right' },{ name:'arrow-circle-o-up' },{ name:'arrow-circle-right' },{ name:'arrow-circle-up' },{ name:'arrow-down' },{ name:'arrow-left' },{ name:'arrow-right' },{ name:'arrow-up' },{ name:'arrows' },{ name:'arrows-alt' },{ name:'arrows-h' },{ name:'arrows-v' },{ name:'caret-down' },{ name:'caret-left' },{ name:'caret-right' },{ name:'caret-up' },{ name:'caret-square-o-left' },{ name:'caret-square-o-right' },{ name:'caret-square-o-up' },{ name:'caret-square-o-down' },{ name:'chevron-circle-down' },{ name:'chevron-circle-left' },{ name:'chevron-circle-right' },{ name:'chevron-circle-up' },{ name:'chevron-down' },{ name:'chevron-left' },{ name:'chevron-right' },{ name:'chevron-up' },{ name:'hand-o-down' },{ name:'hand-o-left' },{ name:'hand-o-right' },{ name:'hand-o-up' },{ name:'long-arrow-down' },{ name:'long-arrow-left' },{ name:'long-arrow-right' },{ name:'long-arrow-up' },{ name:'toggle-down' },{ name:'toggle-left' },{ name:'toggle-right' },{ name:'toggle-up' }],

        videoicons:[{ name:'arrows-alt' },{ name:'backward' },{ name:'compress' },{ name:'eject' },{ name:'expand' },{ name:'fast-backward' },{ name:'fast-forward' },{ name:'forward' },{ name:'pause' },{ name:'play' },{ name:'play-circle' },{ name:'play-circle-o' },{ name:'step-backward' },{ name:'step-forward' },{ name:'stop' },{ name:'youtube-play' }],

        branddicons:[{ name:'adn' },{ name:'android' },{ name:'apple' },{ name:'behance' },{ name:'behance-square' },{ name:'bitbucket' },{ name:'bitbucket-square' },{ name:'bitcoin' },{ name:'btc' },{ name:'codepen' },{ name:'css3' },{ name:'delicious' },{ name:'deviantart' },{ name:'digg' },{ name:'dribbble' },{ name:'dropbox' },{ name:'drupal' },{ name:'empire' },{ name:'facebook' },{ name:'facebook-square' },{ name:'flickr' },{ name:'foursquare' },{ name:'ge' },{ name:'git' },{ name:'git-square' },{ name:'github' },{ name:'github-alt' },{ name:'github-square' },{ name:'gittip' },{ name:'google' },{ name:'google-plus' },{ name:'google-plus-square' },{ name:'hacker-news' },{ name:'html5' },{ name:'instagram' },{ name:'joomla' },{ name:'jsfiddle' },{ name:'linkedin' },{ name:'linkedin-square' },{ name:'linux' },{ name:'maxcdn' },{ name:'openid' },{ name:'pagelines' },{ name:'pied-piper' },{ name:'pied-piper-alt' },{ name:'pinterest' },{ name:'pinterest-square' },{ name:'qq' },{ name:'ra' },{ name:'rebel' },{ name:'reddit' },{ name:'reddit-square' },{ name:'renren' },{ name:'share-alt' },{ name:'share-alt-square' },{ name:'skype' },{ name:'slack' },{ name:'soundcloud' },{ name:'spotify' },{ name:'stack-exchange' },{ name:'stack-overflow' },{ name:'steam' },{ name:'steam-square' },{ name:'stumbleupon' },{ name:'stumbleupon-circle' },{ name:'tencent-weibo' },{ name:'trello' },{ name:'tumblr' },{ name:'tumblr-square' },{ name:'twitter' },{ name:'twitter-square' },{ name:'vimeo-square' },{ name:'vine' },{ name:'vk' },{ name:'wechat' },{ name:'weibo' },{ name:'weixin' },{ name:'windows' },{ name:'wordpress' },{ name:'xing' },{ name:'xing-square' },{ name:'yahoo' },{ name:'youtube' },{ name:'youtube-play' },{ name:'youtube-square' }],

        medicalicons:[{ name:'ambulance' }, { name:'h-square' }, { name:'hospital-o' }, { name:'medkit' }, { name:'plus-square' }, { name:'stethoscope' }, { name:'user-md' }, { name:'wheelchair' }]
      };
    },
    methods:{
      icon_bar(icon){

        this.select_icon.class = 'fa fa-'+icon;
        this.select_icon.tag = '<i class="fa fa-'+icon+'"></i>';

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