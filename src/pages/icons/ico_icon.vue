<template>
    <div>
        <Breadcrumbs main="Icons" title="Ico Icon"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
           <div class="row">

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Abstract</h5><span>New</span>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(ab,index) in abstract" :key="index" v-on:click="icon_bar(ab.name)">
                                <i class="icofont" :class="'icofont-'+ab.name"></i>{{ ab.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Animal</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(an,index) in animal" :key="index" v-on:click="icon_bar(an.name)">
                                <i class="icofont" :class="'icofont-'+an.name"></i>{{ an.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Brand</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(br,index) in brand" :key="index" v-on:click="icon_bar(br.name)">
                                <i class="icofont" :class="'icofont-'+br.name"></i>{{ br.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Business</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(bu,index) in business" :key="index" v-on:click="icon_bar(bu.name)">
                                <i class="icofont" :class="'icofont-'+bu.name"></i>{{ bu.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Chart</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(ch,index) in chart" :key="index" v-on:click="icon_bar(ch.name)">
                                <i class="icofont" :class="'icofont-'+ch.name"></i>{{ ch.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Construction</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(con,index) in construction" :key="index" v-on:click="icon_bar(con.name)">
                                <i class="icofont" :class="'icofont-'+con.name"></i>{{ con.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Currency</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(cur,index) in currency" :key="index" v-on:click="icon_bar(cur.name)">
                                <i class="icofont" :class="'icofont-'+cur.name"></i>{{ cur.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Device</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(devi,index) in device" :key="index" v-on:click="icon_bar(devi.name)">
                                <i class="icofont" :class="'icofont-'+devi.name"></i>{{ devi.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Directional</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(dire,index) in directional" :key="index" v-on:click="icon_bar(dire.name)">
                                <i class="icofont" :class="'icofont-'+dire.name"></i>{{ dire.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Education</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(edu,index) in eduction" :key="index" v-on:click="icon_bar(edu.name)">
                                <i class="icofont" :class="'icofont-'+edu.name"></i>{{ edu.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Emoticon</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(emo,index) in emotion" :key="index" v-on:click="icon_bar(emo.name)">
                                <i class="icofont" :class="'icofont-'+emo.name"></i>{{ emo.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">File Type</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(file,index) in file" :key="index" v-on:click="icon_bar(file.name)">
                                <i class="icofont" :class="'icofont-'+file.name"></i>{{ file.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Food</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(food,index) in food" :key="index" v-on:click="icon_bar(food.name)">
                                <i class="icofont" :class="'icofont-'+food.name"></i>{{ food.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Kids & Toys</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(kids,index) in kids" :key="index" v-on:click="icon_bar(kids.name)">
                                <i class="icofont" :class="'icofont-'+kids.name"></i>{{ kids.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Law</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(law,index) in law" :key="index" v-on:click="icon_bar(law.name)">
                                <i class="icofont" :class="'icofont-'+law.name"></i>{{ law.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Mathematical</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(math,index) in mathematical" :key="index" v-on:click="icon_bar(math.name)">
                                <i class="icofont" :class="'icofont-'+math.name"></i>{{ math.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Medical</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(medi,index) in medical" :key="index" v-on:click="icon_bar(medi.name)">
                                <i class="icofont" :class="'icofont-'+medi.name"></i>{{ medi.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Mobile UI</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(mobi,index) in mobileui" :key="index" v-on:click="icon_bar(mobi.name)">
                                <i class="icofont" :class="'icofont-'+mobi.name"></i>{{ mobi.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Multimedia</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(mm,index) in multimedia" :key="index" v-on:click="icon_bar(mm.name)">
                                <i class="icofont" :class="'icofont-'+mm.name"></i>{{ mm.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Payment</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(pay,index) in payment" :key="index" v-on:click="icon_bar(pay.name)">
                                <i class="icofont" :class="'icofont-'+pay.name"></i>{{ pay.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Person</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(per,index) in person" :key="index" v-on:click="icon_bar(per.name)">
                                <i class="icofont" :class="'icofont-'+per.name"></i>{{ per.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Search</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(sear,index) in search" :key="index" v-on:click="icon_bar(sear.name)">
                                <i class="icofont" :class="'icofont-'+sear.name"></i>{{ sear.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Social</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(soci,index) in social" :key="index" v-on:click="icon_bar(soci.name)">
                                <i class="icofont" :class="'icofont-'+soci.name"></i>{{ soci.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Sport</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(spor,index) in sport" :key="index" v-on:click="icon_bar(spor.name)">
                                <i class="icofont" :class="'icofont-'+spor.name"></i>{{ spor.name }}
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

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(te,index) in texteditor" :key="index" v-on:click="icon_bar(te.name)">
                                <i class="icofont" :class="'icofont-'+te.name"></i>{{ te.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Transport</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(tran,index) in transport" :key="index" v-on:click="icon_bar(tran.name)">
                                <i class="icofont" :class="'icofont-'+tran.name"></i>{{ tran.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Travel</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(trav,index) in travel" :key="index" v-on:click="icon_bar(trav.name)">
                                <i class="icofont" :class="'icofont-'+trav.name"></i>{{ trav.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Weather</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(wea,index) in weather" :key="index" v-on:click="icon_bar(wea.name)">
                                <i class="icofont" :class="'icofont-'+wea.name"></i>{{ wea.name }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-b-0">Web Application</h5>
                    </div>
                    <div class="card-body">
                        <div class="row icon-lists">

                            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(web,index) in webapplication" :key="index" v-on:click="icon_bar(web.name)">
                                <i class="icofont" :class="'icofont-'+web.name"></i>{{ web.name }}
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
  export default {
    data(){
      return{

        icon_bar_status:false,

        select_icon:{
          class:'',
          tag:''
        },

        abstract:[{ name:'angry-monster' },{ name:'bathtub' },{ name:'bird-wings' },{ name:'bow' },{ name:'brain-alt' },{ name:'butterfly-alt' },{ name:'castle' },{ name:'circuit' },{ name:'dart' },{ name:'dice-alt' },{ name:'disability-race' },{ name:'diving-goggle' },{ name:'fire-alt' },{ name:'flame-torch' },{ name:'flora' },{ name:'flora-flower' },{ name:'gift-box' },{ name:'halloween-pumpkin' },{ name:'hand-power' },{ name:'hand-thunder' },{ name:'king-crown' },{ name:'king-monster' },{ name:'love' },{ name:'magician-hat' },{ name:'native-american' },{ name:'open-eye' },{ name:'owl-look' },{ name:'phoenix' },{ name:'queen-crown' },{ name:'robot-face' },{ name:'sand-clock' },{ name:'shield-alt' },{ name:'ship-wheel' },{ name:'skull-danger' },{ name:'skull-face' },{ name:'snail' },{ name:'snow-alt' },{ name:'snow-flake' },{ name:'snowmobile' },{ name:'space-shuttle' },{ name:'star-shape' },{ name:'swirl' },{ name:'tattoo-wing' },{ name:'throne' },{ name:'touch' },{ name:'tree-alt' },{ name:'triangle' },{ name:'unity-hand' },{ name:'weed' },{ name:'woman-bird' }],

        animal:[{ name:'animal-bat' }, { name:'animal-bear' }, { name:'animal-bear-tracks' }, { name:'animal-bird' }, { name:'animal-bird-alt' }, { name:'animal-bone' }, { name:'animal-bull' }, { name:'animal-camel' }, { name:'animal-camel-alt' }, { name:'animal-camel-head' }, { name:'animal-cat' }, { name:'animal-cat-alt-1' }, { name:'animal-cat-alt-2' }, { name:'animal-cat-alt-3' }, { name:'animal-cat-alt-4' }, { name:'animal-cat-with-dog' }, { name:'animal-cow' }, { name:'animal-cow-head' }, { name:'animal-crab' }, { name:'animal-crocodile' }, { name:'animal-deer-head' }, { name:'animal-dog' }, { name:'animal-dog-alt' }, { name:'animal-dolphin' }, { name:'animal-duck-tracks' }, { name:'animal-eagle-head' }, { name:'animal-eaten-fish' }, { name:'animal-elephant' }, { name:'animal-elephant-alt' }, { name:'animal-elephant-head' }, { name:'animal-elephant-head-alt' }, { name:'animal-elk' }, { name:'animal-fish' }, { name:'animal-fish-alt-1' }, { name:'animal-fish-alt-2' }, { name:'animal-fish-alt-3' }, { name:'animal-fish-alt-4' }, { name:'animal-fox' }, { name:'animal-fox-alt' }, { name:'animal-frog' }, { name:'animal-frog-tracks' }, { name:'animal-froggy' }, { name:'animal-giraffe' }, { name:'animal-giraffe-alt' }, { name:'animal-goat-head' }, { name:'animal-goat-head-alt-1' }, { name:'animal-goat-head-alt-2' }, { name:'animal-gorilla' }, { name:'animal-hen-tracks' }, { name:'animal-horse-head' }, { name:'animal-horse-head-alt-1' }, { name:'animal-horse-head-alt-2' }, { name:'animal-horse-tracks' }, { name:'animal-jellyfish' }, { name:'animal-kangaroo' }, { name:'animal-lemur' }, { name:'animal-lion' }, { name:'animal-lion-alt' }, { name:'animal-lion-head' }, { name:'animal-lion-head-alt' }, { name:'animal-monkey' }, { name:'animal-monkey-alt-1' }, { name:'animal-monkey-alt-2' }, { name:'animal-monkey-alt-3' }, { name:'animal-octopus' }, { name:'animal-octopus-alt' }, { name:'animal-owl' }, { name:'animal-panda' }, { name:'animal-panda-alt' }, { name:'animal-panther' }, { name:'animal-parrot' }, { name:'animal-parrot-lip' }, { name:'animal-paw' }, { name:'animal-pelican' }, { name:'animal-penguin' }, { name:'animal-pig' }, { name:'animal-pig-alt' }, { name:'animal-pigeon' }, { name:'animal-pigeon-alt' }, { name:'animal-pigeons' }, { name:'animal-rabbit-running' }, { name:'animal-rat-alt' }, { name:'animal-rhino' }, { name:'animal-rhino-head' }, { name:'animal-rooster' }, { name:'animal-seahorse' }, { name:'animal-seal' }, { name:'animal-shrimp' }, { name:'animal-snail' }, { name:'animal-snail-alt-1' }, { name:'animal-snail-alt-2' }, { name:'animal-snake' }, { name:'animal-squid' }, { name:'animal-squirrel' }, { name:'animal-tiger' }, { name:'animal-tiger-alt' }, { name:'animal-turtle' }, { name:'animal-whale' }, { name:'animal-woodpecker' }, { name:'animal-zebra' }],

        brand:[{ name:'brand-acer' }, { name:'brand-adidas' }, { name:'brand-adobe' }, { name:'brand-air-new-zealand' }, { name:'brand-airbnb' }, { name:'brand-aircell' }, { name:'brand-airtel' }, { name:'brand-alcatel' }, { name:'brand-alibaba' }, { name:'brand-aliexpress' }, { name:'brand-alipay' }, { name:'brand-amazon' }, { name:'brand-amd' }, { name:'brand-american-airlines' }, { name:'brand-android' }, { name:'brand-android-robot' }, { name:'brand-aol' }, { name:'brand-apple' }, { name:'brand-appstore' }, { name:'brand-asus' }, { name:'brand-ati' }, { name:'brand-att' }, { name:'brand-audi' }, { name:'brand-axiata' }, { name:'brand-bada' }, { name:'brand-bbc' }, { name:'brand-bing' }, { name:'brand-blackberry' }, { name:'brand-bmw' }, { name:'brand-box' }, { name:'brand-burger-king' }, { name:'brand-business-insider' }, { name:'brand-buzzfeed' }, { name:'brand-cannon' }, { name:'brand-casio' }, { name:'brand-china-mobile' }, { name:'brand-china-telecom' }, { name:'brand-china-unicom' }, { name:'brand-cisco' }, { name:'brand-citibank' }, { name:'brand-cnet' }, { name:'brand-cnn' }, { name:'brand-cocal-cola' }, { name:'brand-compaq' }, { name:'brand-copy' }, { name:'brand-debian' }, { name:'brand-delicious' }, { name:'brand-dell' }, { name:'brand-designbump' }, { name:'brand-designfloat' }, { name:'brand-disney' }, { name:'brand-dodge' }, { name:'brand-dove' }, { name:'brand-ebay' }, { name:'brand-eleven' }, { name:'brand-emirates' }, { name:'brand-espn' }, { name:'brand-etihad-airways' }, { name:'brand-etisalat' }, { name:'brand-etsy' }, { name:'brand-facebook' }, { name:'brand-fastrack' }, { name:'brand-fedex' }, { name:'brand-ferrari' }, { name:'brand-fitbit' }, { name:'brand-flikr' }, { name:'brand-forbes' }, { name:'brand-foursquare' }, { name:'brand-fox' }, { name:'brand-foxconn' }, { name:'brand-fujitsu' }, { name:'brand-general-electric' }, { name:'brand-gillette' }, { name:'brand-gizmodo' }, { name:'brand-gnome' }, { name:'brand-google' }, { name:'brand-gopro' }, { name:'brand-gucci' }, { name:'brand-hallmark' }, { name:'brand-hi5' }, { name:'brand-honda' }, { name:'brand-hp' }, { name:'brand-hsbc' }, { name:'brand-htc' }, { name:'brand-huawei' }, { name:'brand-hulu' }, { name:'brand-hyundai' }, { name:'brand-ibm' }, { name:'brand-icofont' }, { name:'brand-icq' }, { name:'brand-ikea' }, { name:'brand-imdb' }, { name:'brand-indiegogo' }, { name:'brand-intel' }, { name:'brand-ipair' }, { name:'brand-jaguar' }, { name:'brand-java' }, { name:'brand-joomla' }, { name:'brand-joomshaper' }, { name:'brand-kickstarter' }, { name:'brand-kik' }, { name:'brand-lastfm' }, { name:'brand-lego' }, { name:'brand-lenovo' }, { name:'brand-levis' }, { name:'brand-lexus' }, { name:'brand-lg' }, { name:'brand-life-hacker' }, { name:'brand-line-messenger' }, { name:'brand-linkedin' }, { name:'brand-linux' }, { name:'brand-linux-mint' }, { name:'brand-lionix' }, { name:'brand-live-messenger' }, { name:'brand-loreal' }, { name:'brand-louis-vuitton' }, { name:'brand-mac-os' }, { name:'brand-marvel-app' }, { name:'brand-mashable' }, { name:'brand-mazda' }, { name:'brand-mcdonals' }, { name:'brand-mercedes' }, { name:'brand-micromax' }, { name:'brand-microsoft' }, { name:'brand-mobileme' }, { name:'brand-mobily' }, { name:'brand-motorola' }, { name:'brand-msi' }, { name:'brand-mts' }, { name:'brand-myspace' }, { name:'brand-mytv' }, { name:'brand-nasa' }, { name:'brand-natgeo' }, { name:'brand-nbc' }, { name:'brand-nescafe' }, { name:'brand-nestle' }, { name:'brand-netflix' }, { name:'brand-nexus' }, { name:'brand-nike' }, { name:'brand-nokia' }, { name:'brand-nvidia' }, { name:'brand-omega' }, { name:'brand-opensuse' }, { name:'brand-oracle' }, { name:'brand-panasonic' }, { name:'brand-paypal' }, { name:'brand-pepsi' }, { name:'brand-philips' }, { name:'brand-pizza-hut' }, { name:'brand-playstation' }, { name:'brand-puma' }, { name:'brand-qatar-air' }, { name:'brand-qvc' }, { name:'brand-readernaut' }, { name:'brand-redbull' }, { name:'brand-reebok' }, { name:'brand-reuters' }, { name:'brand-samsung' }, { name:'brand-sap' }, { name:'brand-saudia-airlines' }, { name:'brand-scribd' }, { name:'brand-shell' }, { name:'brand-siemens' }, { name:'brand-sk-telecom' }, { name:'brand-slideshare' }, { name:'brand-smashing-magazine' }, { name:'brand-snapchat' }, { name:'brand-sony' }, { name:'brand-sony-ericsson' }, { name:'brand-soundcloud' }, { name:'brand-sprint' }, { name:'brand-squidoo' }, { name:'brand-starbucks' }, { name:'brand-stc' }, { name:'brand-steam' }, { name:'brand-suzuki' }, { name:'brand-symbian' }, { name:'brand-t-mobile' }, { name:'brand-tango' }, { name:'brand-target' }, { name:'brand-tata-indicom' }, { name:'brand-techcrunch' }, { name:'brand-telenor' }, { name:'brand-teliasonera' }, { name:'brand-tesla' }, { name:'brand-the-verge' }, { name:'brand-thenextweb' }, { name:'brand-toshiba' }, { name:'brand-toyota' }, { name:'brand-tribenet' }, { name:'brand-ubuntu' }, { name:'brand-unilever' }, { name:'brand-vaio' }, { name:'brand-verizon' }, { name:'brand-viber' }, { name:'brand-vodafone' }, { name:'brand-volkswagen' }, { name:'brand-walmart' }, { name:'brand-warnerbros' }, { name:'brand-whatsapp' }, { name:'brand-wikipedia' }, { name:'brand-windows' }, { name:'brand-wire' }, { name:'brand-wordpress' }, { name:'brand-xiaomi' }, { name:'brand-yahoobuzz' }, { name:'brand-yamaha' }, { name:'brand-youtube' }, { name:'brand-zain' }, { name:'social-envato' }],

        business:[{ name:'bank-alt' }, { name:'barcode' }, { name:'basket' }, { name:'bill-alt' }, { name:'billboard' }, { name:'briefcase-alt-1' }, { name:'briefcase-alt-2' }, { name:'building-alt' }, { name:'businessman' }, { name:'businesswoman' }, { name:'cart-alt' }, { name:'chair' }, { name:'clip' }, { name:'coins' }, { name:'company' }, { name:'contact-add' }, { name:'deal' }, { name:'files' }, { name:'growth' }, { name:'id-card' }, { name:'idea' }, { name:'list' }, { name:'meeting-add' }, { name:'money-bag' }, { name:'people' }, { name:'pie-chart' }, { name:'presentation-alt' }, { name:'stamp' }, { name:'stock-mobile' }, { name:'support' }, { name:'tasks-alt' }, { name:'wheel' }],

        chart:[{ name:'chart-arrows-axis' }, { name:'chart-bar-graph' }, { name:'chart-flow' }, { name:'chart-flow-alt-1' }, { name:'chart-flow-alt-2' }, { name:'chart-histogram' }, { name:'chart-histogram-alt' }, { name:'chart-line' }, { name:'chart-line-alt' }, { name:'chart-pie' }, { name:'chart-pie-alt' }, { name:'chart-radar-graph' }],

        construction:[{ name:'architecture' }, { name:'architecture-alt' }, { name:'barricade' }, { name:'bricks' }, { name:'calculations' }, { name:'cement-mix' }, { name:'cement-mixer' }, { name:'danger-zone' }, { name:'drill' }, { name:'eco-energy' }, { name:'eco-environmen' }, { name:'energy-air' }, { name:'energy-oil' }, { name:'energy-savings' }, { name:'energy-solar' }, { name:'energy-water' }, { name:'engineer' }, { name:'fire-extinguisher-alt' }, { name:'fix-tools' }, { name:'glue-oil' }, { name:'hammer-alt' }, { name:'help-robot' }, { name:'industries' }, { name:'industries-alt-1' }, { name:'industries-alt-2' }, { name:'industries-alt-3' }, { name:'industries-alt-4' }, { name:'industries-alt-5' }, { name:'labour' }, { name:'mining' }, { name:'paint-brush' }, { name:'pollution' }, { name:'power-zone' }, { name:'radio-active' }, { name:'recycle-alt' }, { name:'recycling-man' }, { name:'safety-hat' }, { name:'safety-hat-light' }, { name:'saw' }, { name:'screw-driver' }, { name:'settings-alt' }, { name:'tools-alt-1' }, { name:'tools-alt-2' }, { name:'tools-bag' }, { name:'trolley' }, { name:'trowel' }, { name:'under-construction' }, { name:'under-construction-alt' }, { name:'vehicle-cement' }, { name:'vehicle-crane' }, { name:'vehicle-delivery-van' }, { name:'vehicle-dozer' }, { name:'vehicle-excavator' }, { name:'vehicle-trucktor' }, { name:'vehicle-wrecking' }, { name:'worker' }, { name:'worker-group' }, { name:'wrench' }],


        currency:[{ name:'cur-afghani' }, { name:'cur-afghani-false' }, { name:'cur-afghani-minus' }, { name:'cur-afghani-plus' }, { name:'cur-afghani-true' }, { name:'cur-baht' }, { name:'cur-baht-false' }, { name:'cur-baht-minus' }, { name:'cur-baht-plus' }, { name:'cur-baht-true' }, { name:'cur-bitcoin' }, { name:'cur-bitcoin-false' }, { name:'cur-bitcoin-minus' }, { name:'cur-bitcoin-plus' }, { name:'cur-bitcoin-true' }, { name:'cur-dollar' }, { name:'cur-dollar-flase' }, { name:'cur-dollar-minus' }, { name:'cur-dollar-plus' }, { name:'cur-dollar-true' }, { name:'cur-dong' }, { name:'cur-dong-false' },{ name:'cur-dong-minus' }, { name:'cur-dong-plus' }, { name:'cur-dong-true' }, { name:'cur-euro' }, { name:'cur-euro-false' }, { name:'cur-euro-minus' }, { name:'cur-euro-plus' }, { name:'cur-euro-true' }, { name:'cur-frank' }, { name:'cur-frank-false' }, { name:'cur-frank-minus' }, { name:'cur-frank-plus' }, { name:'cur-frank-true' }, { name:'cur-hryvnia' }, { name:'cur-hryvnia-false' }, { name:'cur-hryvnia-minus' }, { name:'cur-hryvnia-plus' }, { name:'cur-hryvnia-true' }, { name:'cur-lira' }, { name:'cur-lira-false' }, { name:'cur-lira-minus' }, { name:'cur-lira-plus' }, { name:'cur-lira-true' }, { name:'cur-peseta' }, { name:'cur-peseta-false' }, { name:'cur-peseta-minus' }, { name:'cur-peseta-plus' }, { name:'cur-peseta-true' }, { name:'cur-peso' }, { name:'cur-peso-false' }, { name:'cur-peso-minus' }, { name:'cur-peso-plus' }, { name:'cur-peso-true' }, { name:'cur-pound' }, { name:'cur-pound-false' }, { name:'cur-pound-minus' }, { name:'cur-pound-plus' }, { name:'cur-pound-true' }, { name:'cur-renminbi' }, { name:'cur-renminbi-false' }, { name:'cur-renminbi-minus' }, { name:'cur-renminbi-plus' }, { name:'cur-renminbi-true' }, { name:'cur-riyal' }, { name:'cur-riyal-false' }, { name:'cur-riyal-minus' }, { name:'cur-riyal-plus' }, { name:'cur-riyal-true' }, { name:'cur-rouble' }, { name:'cur-rouble-false' }, { name:'cur-rouble-minus' }, { name:'cur-rouble-plus' }, { name:'cur-rouble-true' }, { name:'cur-rupee' }, { name:'cur-rupee-false' },{ name:'cur-rupee-minus' }, { name:'cur-rupee-plus' }, { name:'cur-rupee-true' }, { name:'cur-taka' }, { name:'cur-taka-false' }, { name:'cur-taka-minus' }, { name:'cur-taka-plus' }, { name:'cur-taka-true' }, { name:'cur-turkish-lira' }, { name:'cur-turkish-lira-false' }, { name:'cur-turkish-lira-minus' }, { name:'cur-turkish-lira-plus' }, { name:'cur-turkish-lira-true' }, { name:'cur-won' }, { name:'cur-won-false' }, { name:'cur-won-minus' }, { name:'cur-won-plus' }, { name:'cur-won-true' }, { name:'cur-yen' }, { name:'cur-yen-false' }, { name:'cur-yen-minus' }, { name:'cur-yen-plus' }, { name:'cur-yen-true' }],

        device:[{ name:'android-nexus' }, { name:'android-tablet' }, { name:'apple-watch' }, { name:'drwaing-tablet' }, { name:'earphone' }, { name:'flash-drive' }, { name:'game-control' }, { name:'headphone-alt' }, { name:'htc-one' }, { name:'imac' }, { name:'ipad-touch' }, { name:'iphone' }, { name:'ipod-nano' }, { name:'ipod-touch' }, { name:'keyboard-alt' }, { name:'keyboard-wireless' }, { name:'laptop-alt' }, { name:'macbook' }, { name:'magic-mouse' }, { name:'microphone-alt' }, { name:'monitor' }, { name:'mouse' }, { name:'nintendo' }, { name:'playstation' }, { name:'psvita' }, { name:'radio-mic' }, { name:'refrigerator' }, { name:'samsung-galaxy' }, { name:'surface-tablet' }, { name:'washing-machine' }, { name:'wifi-router' }, { name:'wii-u' }, { name:'windows-lumia' }, { name:'wireless-mouse' }, { name:'xbox-360' }],

        directional:[{ name:'arrow-down' }, { name:'arrow-left' }, { name:'arrow-right' }, { name:'arrow-up' }, { name:'block-down' }, { name:'block-left' }, { name:'block-right' }, { name:'block-up' }, { name:'bubble-down' }, { name:'bubble-left' }, { name:'bubble-right' }, { name:'bubble-up' }, { name:'caret-down' }, { name:'caret-left' }, { name:'caret-right' }, { name:'caret-up' }, { name:'circled-down' }, { name:'circled-left' }, { name:'circled-right' }, { name:'circled-up' }, { name:'collapse' }, { name:'cursor-drag' }, { name:'curved-double-left' }, { name:'curved-double-right' }, { name:'curved-down' }, { name:'curved-left' }, { name:'curved-right' }, { name:'curved-up' }, { name:'dotted-down' }, { name:'dotted-left' }, { name:'dotted-right' }, { name:'dotted-up' }, { name:'double-left' }, { name:'double-right' }, { name:'drag' }, { name:'drag1' }, { name:'drag2' }, { name:'drag3' }, { name:'expand-alt' }, { name:'hand-down' }, { name:'hand-drag' }, { name:'hand-drag1' }, { name:'hand-drag2' }, { name:'hand-drawn-alt-down' }, { name:'hand-drawn-alt-left' }, { name:'hand-drawn-alt-right' }, { name:'hand-drawn-alt-up' }, { name:'hand-drawn-down' }, { name:'hand-drawn-left' }, { name:'hand-drawn-right' }, { name:'hand-drawn-up' }, { name:'hand-left' }, { name:'hand-right' }, { name:'hand-up' }, { name:'line-block-down' }, { name:'line-block-left' }, { name:'line-block-right' }, { name:'line-block-up' }, { name:'long-arrow-down' }, { name:'long-arrow-left' }, { name:'long-arrow-right' }, { name:'long-arrow-up' }, { name:'rounded-collapse' }, { name:'rounded-double-left' }, { name:'rounded-double-right' }, { name:'rounded-down' }, { name:'rounded-expand' }, { name:'rounded-left' }, { name:'rounded-left-down' }, { name:'rounded-left-up' }, { name:'rounded-right' }, { name:'rounded-right-down' }, { name:'rounded-right-up' }, { name:'rounded-up' }, { name:'scroll-bubble-down' }, { name:'scroll-bubble-left' }, { name:'scroll-bubble-right' }, { name:'scroll-bubble-up' }, { name:'scroll-double-down' }, { name:'scroll-double-left' }, { name:'scroll-double-right' }, { name:'scroll-double-up' }, { name:'scroll-down' }, { name:'scroll-left' }, { name:'scroll-long-down' }, { name:'scroll-long-left' }, { name:'scroll-long-right' }, { name:'scroll-long-up' }, { name:'scroll-right' }, { name:'scroll-up' }, { name:'simple-down' }, { name:'simple-left' }, { name:'simple-left-down' }, { name:'simple-left-up' }, { name:'simple-right' }, { name:'simple-right-down' }, { name:'simple-right-up' }, { name:'simple-up' }, { name:'square-down' }, { name:'square-left' }, { name:'square-right' }, { name:'square-up' }, { name:'stylish-down' }, { name:'stylish-left' }, { name:'stylish-right' }, { name:'stylish-up' }, { name:'swoosh-down' }, { name:'swoosh-left' }, { name:'swoosh-right' }, { name:'swoosh-up' }, { name:'thin-double-left' }, { name:'thin-double-right' }, { name:'thin-down' }, { name:'thin-left' }, { name:'thin-right' }, { name:'thin-up' }],

        eduction:[{ name:'atom' }, { name:'award' }, { name:'bell-alt' }, { name:'book-alt' }, { name:'brainstorming' }, { name:'certificate-alt-1' }, { name:'certificate-alt-2' }, { name:'dna-alt-2' }, { name:'education' }, { name:'electron' }, { name:'fountain-pen' }, { name:'globe-alt' }, { name:'graduate-alt' }, { name:'group-students' }, { name:'hat' }, { name:'hat-alt' }, { name:'instrument' }, { name:'lamp-light' }, { name:'microscope-alt' }, { name:'paper' }, { name:'pen-alt-4' }, { name:'pen-nib' }, { name:'pencil-alt-5' }, { name:'quill-pen' }, { name:'read-book' }, { name:'read-book-alt' }, { name:'school-bag' }, { name:'school-bus' }, { name:'student' }, { name:'student-alt' }, { name:'teacher' }, { name:'test-bulb' }, { name:'test-tube-alt' }, { name:'university' }],

        emotion:[{ name:'emo-angry' }, { name:'emo-astonished' }, { name:'emo-confounded' }, { name:'emo-confused' }, { name:'emo-crying' }, { name:'emo-dizzy' }, { name:'emo-expressionless' }, { name:'emo-heart-eyes' }, { name:'emo-laughing' }, { name:'emo-nerd-smile' }, { name:'emo-open-mouth' }, { name:'emo-rage' }, { name:'emo-rolling-eyes' }, { name:'emo-sad' }, { name:'emo-simple-smile' }, { name:'emo-slightly-smile' }, { name:'emo-smirk' }, { name:'emo-stuck-out-tongue' }, { name:'emo-wink-smile' }, { name:'emo-worried' }],

        file:[{ name:'file-audio' }, { name:'file-avi-mp4' }, { name:'file-bmp' }, { name:'file-code' }, { name:'file-css' }, { name:'file-document' }, { name:'file-eps' }, { name:'file-excel' }, { name:'file-exe' }, { name:'file-file' }, { name:'file-flv' }, { name:'file-gif' }, { name:'file-html5' }, { name:'file-image' }, { name:'file-iso' }, { name:'file-java' }, { name:'file-javascript' }, { name:'file-jpg' }, { name:'file-midi' }, { name:'file-mov' }, { name:'file-mp3' }, { name:'file-pdf' }, { name:'file-php' }, { name:'file-png' }, { name:'file-powerpoint' }, { name:'file-presentation' }, { name:'file-psb' }, { name:'file-psd' }, { name:'file-python' }, { name:'file-ruby' }, { name:'file-spreadsheet' }, { name:'file-sql' }, { name:'file-svg' }, { name:'file-text' }, { name:'file-tiff' }, { name:'file-video' }, { name:'file-wave' }, { name:'file-wmv' }, { name:'file-word' }, { name:'file-zip' }],

        food:[{ name:'apple' }, { name:'arabian-coffee' }, { name:'artichoke' }, { name:'asparagus' }, { name:'avocado' }, { name:'baby-food' }, { name:'banana' }, { name:'bbq' }, { name:'beans' }, { name:'beer' }, { name:'bell-pepper-capsicum' }, { name:'birthday-cake' }, { name:'bread' }, { name:'broccoli' }, { name:'burger' }, { name:'cabbage' }, { name:'carrot' }, { name:'cauli-flower' }, { name:'cheese' }, { name:'chef' }, { name:'cherry' }, { name:'chicken' }, { name:'chicken-fry' }, { name:'cocktail' }, { name:'coconut' }, { name:'coffee-alt' }, { name:'coffee-mug' }, { name:'coffee-pot' }, { name:'cola' }, { name:'corn' }, { name:'croissant' }, { name:'crop-plant' }, { name:'cucumber' }, { name:'cup-cake' }, { name:'dining-table' }, { name:'donut' }, { name:'egg-plant' }, { name:'egg-poached' }, { name:'farmer' }, { name:'farmer1' }, { name:'fast-food' }, { name:'fish' }, { name:'food-basket' }, { name:'food-cart' }, { name:'fork-and-knife' }, { name:'french-fries' }, { name:'fresh-juice' }, { name:'fruits' }, { name:'grapes' }, { name:'honey' }, { name:'hot-dog' }, { name:'hotel-alt' }, { name:'ice-cream' }, { name:'ice-cream-alt' }, { name:'ketchup' }, { name:'kiwi' }, { name:'layered-cake' }, { name:'lemon-alt' }, { name:'lobster' }, { name:'mango' }, { name:'milk' }, { name:'mushroom' }, { name:'noodles' }, { name:'onion' }, { name:'orange' }, { name:'pear' }, { name:'peas' }, { name:'pepper' }, { name:'pie-alt' }, { name:'pineapple' }, { name:'pizza' }, { name:'pizza-slice' }, { name:'plant' }, { name:'popcorn' }, { name:'potato' }, { name:'pumpkin' }, { name:'raddish' }, { name:'restaurant' }, { name:'restaurant-menu' }, { name:'salt-and-pepper' }, { name:'sandwich' }, { name:'sausage' }, { name:'shrimp' }, { name:'sof-drinks' }, { name:'soup-bowl' }, { name:'spoon-and-fork' }, { name:'steak' }, { name:'strawberry' }, { name:'sub-sandwich' }, { name:'sushi' }, { name:'taco' }, { name:'tea' }, { name:'tea-pot' }, { name:'tomato' }, { name:'waiter-alt' }, { name:'watermelon' }, { name:'wheat' }],

        kids:[{ name:'abc' }, { name:'baby-cloth' }, { name:'baby-milk-bottle' }, { name:'baby-trolley' }, { name:'back-pack' }, { name:'candy' }, { name:'cycling' }, { name:'holding-hands' }, { name:'infant-nipple' }, { name:'kids-scooter' }, { name:'safety-pin' }, { name:'teddy-bear' }, { name:'toy-ball' }, { name:'toy-cat' }, { name:'toy-duck' }, { name:'toy-elephant' }, { name:'toy-hand' }, { name:'toy-horse' }, { name:'toy-lattu' }, { name:'toy-train' }, { name:'unique-idea' }],

        law:[{ name:'bag-alt' }, { name:'burglar' }, { name:'cannon-firing' }, { name:'cc-camera' }, { name:'cop' }, { name:'cop-badge' }, { name:'court' }, { name:'court-hammer' }, { name:'finger-print' }, { name:'handcuff' }, { name:'handcuff-alt' }, { name:'investigation' }, { name:'investigator' }, { name:'jail' }, { name:'judge' }, { name:'law' }, { name:'law-alt-1' }, { name:'law-alt-2' }, { name:'law-alt-3' }, { name:'law-book' }, { name:'law-document' }, { name:'lawyer' }, { name:'lawyer-alt-1' }, { name:'lawyer-alt-2' }, { name:'order' }, { name:'pistol' }, { name:'police' }, { name:'police-badge' }, { name:'police-cap' }, { name:'police-car-alt-1' }, { name:'police-car-alt-2' }, { name:'police-hat' }, { name:'police-van' }, { name:'protect' }, { name:'scales' }, { name:'thief' }, { name:'thief-alt' }],

        mathematical:[{ name:'abacus' }, { name:'abacus-alt' }, { name:'angle' }, { name:'calculator-alt-1' }, { name:'calculator-alt-2' }, { name:'circle-ruler' }, { name:'circle-ruler-alt' }, { name:'compass-alt-1' }, { name:'compass-alt-2' }, { name:'compass-alt-3' }, { name:'compass-alt-4' }, { name:'degrees' }, { name:'degrees-alt-1' }, { name:'degrees-alt-2' }, { name:'golden-ratio' }, { name:'marker-alt-1' }, { name:'marker-alt-2' }, { name:'marker-alt-3' }, { name:'mathematical' }, { name:'mathematical-alt-1' }, { name:'mathematical-alt-2' }, { name:'pen-alt-1' }, { name:'pen-alt-2' }, { name:'pen-alt-3' }, { name:'pen-holder' }, { name:'pen-holder-alt-1' }, { name:'pencil-alt-1' }, { name:'pencil-alt-2' }, { name:'pencil-alt-3' }, { name:'pencil-alt-4' }, { name:'ruler' }, { name:'ruler-alt-1' }, { name:'ruler-alt-2' }, { name:'ruler-compass' }, { name:'ruler-compass-alt' }, { name:'ruler-pencil' }, { name:'ruler-pencil-alt-1' }, { name:'ruler-pencil-alt-2' }, { name:'rulers' }, { name:'rulers-alt' }, { name:'square-root' }],

        medical:[{ name:'aids' }, { name:'ambulance' }, { name:'autism' }, { name:'bandage' }, { name:'bed-patient' }, { name:'blind' }, { name:'blood' }, { name:'blood-drop' }, { name:'blood-test' }, { name:'capsule' }, { name:'crutches' }, { name:'dna' }, { name:'dna-alt-1' }, { name:'doctor' }, { name:'doctor-alt' }, { name:'drug' }, { name:'drug-pack' }, { name:'eye-alt' }, { name:'first-aid-alt' }, { name:'garbage' }, { name:'heart-alt' }, { name:'heartbeat' }, { name:'herbal' }, { name:'hospital' }, { name:'icu' }, { name:'injection-syringe' }, { name:'laboratory' }, { name:'medical-sign' }, { name:'medical-sign-alt' }, { name:'nurse' }, { name:'nurse-alt' }, { name:'nursing-home' }, { name:'operation-theater' }, { name:'paralysis-disability' }, { name:'pills' }, { name:'prescription' }, { name:'pulse' }, { name:'stethoscope' }, { name:'stethoscope-alt' }, { name:'stretcher' }, { name:'surgeon' }, { name:'surgeon-alt' }, { name:'tablets' }, { name:'test-bottle' }, { name:'test-tube' }, { name:'thermometer-alt' }, { name:'tooth' }, { name:'xray' }],

        mobileui:[{ name:'ui-add' },{ name:'ui-alarm' },{ name:'ui-battery' },{ name:'ui-block' },{ name:'ui-bluetooth' },{ name:'ui-brightness' },{ name:'ui-browser' },{ name:'ui-calculator' },{ name:'ui-calendar' },{ name:'ui-call' },{ name:'ui-camera' },{ name:'ui-cart' },{ name:'ui-cell-phone' },{ name:'ui-chat' },{ name:'ui-check' },{ name:'ui-clip' },{ name:'ui-clip-board' },{ name:'ui-clock' },{ name:'ui-close' },{ name:'ui-contact-list' },{ name:'ui-copy' },{ name:'ui-cut' },{ name:'ui-delete' },{ name:'ui-dial-phone' },{ name:'ui-edit' },{ name:'ui-email' },{ name:'ui-file' },{ name:'ui-fire-wall' },{ name:'ui-flash-light' },{ name:'ui-flight' },{ name:'ui-folder' },{ name:'ui-game' },{ name:'ui-handicapped' },{ name:'ui-head-phone' },{ name:'ui-home' },{ name:'ui-image' },{ name:'ui-keyboard' },{ name:'ui-laoding' },{ name:'ui-lock' },{ name:'ui-love' },{ name:'ui-love-add' },{ name:'ui-love-broken' },{ name:'ui-love-remove' },{ name:'ui-map' },{ name:'ui-message' },{ name:'ui-messaging' },{ name:'ui-movie' },{ name:'ui-music' },{ name:'ui-music-player' },{ name:'ui-mute' },{ name:'ui-Refferal' },{ name:'ui-next' },{ name:'ui-note' },{ name:'ui-office' },{ name:'ui-password' },{ name:'ui-pause' },{ name:'ui-play' },{ name:'ui-play-stop' },{ name:'ui-pointer' },{ name:'ui-power' },{ name:'ui-press' },{ name:'ui-previous' },{ name:'ui-rate-add' },{ name:'ui-rate-blank' },{ name:'ui-rate-remove' },{ name:'ui-rating' },{ name:'ui-record' },{ name:'ui-remove' },{ name:'ui-reply' },{ name:'ui-rotation' },{ name:'ui-rss' },{ name:'ui-search' },{ name:'ui-settings' },{ name:'ui-social-link' },{ name:'ui-tag' },{ name:'ui-text-chat' },{ name:'ui-text-loading' },{ name:'ui-theme' },{ name:'ui-timer' },{ name:'ui-touch-phone' },{ name:'ui-travel' },{ name:'ui-unlock' },{ name:'ui-user' },{ name:'ui-user-group' },{ name:'ui-v-card' },{ name:'ui-video' },{ name:'ui-video-chat' },{ name:'ui-video-message' },{ name:'ui-video-play' },{ name:'ui-volume' },{ name:'ui-weather' },{ name:'ui-wifi' },{ name:'ui-zoom-in' },{ name:'ui-zoom-out' }],

        multimedia:[{ name:'cassette' },{ name:'cassette-player' },{ name:'forward' },{ name:'game' },{ name:'guiter' },{ name:'headphone-alt-1' },{ name:'headphone-alt-2' },{ name:'headphone-alt-3' },{ name:'listening' },{ name:'megaphone' },{ name:'megaphone-alt' },{ name:'movie' },{ name:'mp3-player' },{ name:'multimedia' },{ name:'music-disk' },{ name:'music-note' },{ name:'pause' },{ name:'play-alt-1' },{ name:'play-alt-2' },{ name:'play-alt-3' },{ name:'play-pause' },{ name:'record' },{ name:'retro-music-disk' },{ name:'rewind' },{ name:'song-notes' },{ name:'sound-wave' },{ name:'sound-wave-alt' },{ name:'stop' },{ name:'video-alt' },{ name:'video-cam' },{ name:'volume-bar' },{ name:'volume-mute' },{ name:'youtube-play' }],

        payment:[{ name:'amazon' },{ name:'amazon-alt' },{ name:'american-express' },{ name:'american-express-alt' },{ name:'apple-pay' },{ name:'apple-pay-alt' },{ name:'bank-transfer' },{ name:'bank-transfer-alt' },{ name:'braintree' },{ name:'braintree-alt' },{ name:'cash-on-delivery' },{ name:'cash-on-delivery-alt' },{ name:'checkout' },{ name:'checkout-alt' },{ name:'diners-club' },{ name:'diners-club-alt-1' },{ name:'diners-club-alt-2' },{ name:'diners-club-alt-3' },{ name:'discover' },{ name:'discover-alt' },{ name:'eway' },{ name:'eway-alt' },{ name:'google-wallet' },{ name:'google-wallet-alt-1' },{ name:'google-wallet-alt-2' },{ name:'google-wallet-alt-3' },{ name:'jcb' },{ name:'jcb-alt' },{ name:'maestro' },{ name:'maestro-alt' },{ name:'mastercard' },{ name:'mastercard-alt' },{ name:'payoneer' },{ name:'payoneer-alt' },{ name:'paypal' },{ name:'paypal-alt' },{ name:'sage' },{ name:'sage-alt' },{ name:'skrill' },{ name:'skrill-alt' },{ name:'stripe' },{ name:'stripe-alt' },{ name:'visa' },{ name:'visa-alt' },{ name:'visa-electron' },{ name:'western-union' },{ name:'western-union-alt' }],

        person:[{ name:'boy' },{ name:'business-man' },{ name:'business-man-alt-1' },{ name:'business-man-alt-2' },{ name:'business-man-alt-3' },{ name:'funky-man' },{ name:'girl' },{ name:'girl-alt' },{ name:'hotel-boy' },{ name:'hotel-boy-alt' },{ name:'man-in-glasses' },{ name:'user' },{ name:'user-alt-1' },{ name:'user-alt-2' },{ name:'user-alt-3' },{ name:'user-alt-4' },{ name:'user-alt-5' },{ name:'user-alt-6' },{ name:'user-alt-7' },{ name:'user-female' },{ name:'user-male' },{ name:'user-suited' },{ name:'users' },{ name:'users-alt-1' },{ name:'users-alt-2' },{ name:'users-alt-3' },{ name:'users-alt-4' },{ name:'users-alt-5' },{ name:'users-alt-6' },{ name:'users-social' },{ name:'waiter' },{ name:'woman-in-glasses' }],

        search:[{ name:'document-search' },{ name:'folder-search' },{ name:'home-search' },{ name:'job-search' },{ name:'map-search' },{ name:'restaurant-search' },{ name:'search' },{ name:'search-alt-1' },{ name:'search-alt-2' },{ name:'stock-search' },{ name:'user-search' }],

        social:[{ name:'brand-drupal' },{ name:'social-500px' },{ name:'social-aim' },{ name:'social-badoo' },{ name:'social-baidu-tieba' },{ name:'social-bbm-messenger' },{ name:'social-bebo' },{ name:'social-behance' },{ name:'social-blogger' },{ name:'social-bootstrap' },{ name:'social-brightkite' },{ name:'social-cloudapp' },{ name:'social-concrete5' },{ name:'social-delicious' },{ name:'social-designbump' },{ name:'social-designfloat' },{ name:'social-deviantart' },{ name:'social-digg' },{ name:'social-dotcms' },{ name:'social-dribbble' },{ name:'social-dribble' },{ name:'social-dropbox' },{ name:'social-ebuddy' },{ name:'social-ello' },{ name:'social-ember' },{ name:'social-evernote' },{ name:'social-facebook' },{ name:'social-facebook-messenger' },{ name:'social-feedburner' },{ name:'social-flikr' },{ name:'social-folkd' },{ name:'social-foursquare' },{ name:'social-friendfeed' },{ name:'social-ghost' },{ name:'social-github' },{ name:'social-gnome' },{ name:'social-google-buzz' },{ name:'social-google-hangouts' },{ name:'social-google-map' },{ name:'social-google-plus' },{ name:'social-google-talk' },{ name:'social-hype-machine' },{ name:'social-instagram' },{ name:'social-kakaotalk' },{ name:'social-kickstarter' },{ name:'social-kik' },{ name:'social-kiwibox' },{ name:'social-line' },{ name:'social-linkedin' },{ name:'social-linux-mint' },{ name:'social-livejournal' },{ name:'social-magento' },{ name:'social-meetme' },{ name:'social-meetup' },{ name:'social-mixx' },{ name:'social-newsvine' },{ name:'social-nimbuss' },{ name:'social-odnoklassniki' },{ name:'social-opencart' },{ name:'social-oscommerce' },{ name:'social-pandora' },{ name:'social-photobucket' },{ name:'social-picasa' },{ name:'social-pinterest' },{ name:'social-prestashop' },{ name:'social-qik' },{ name:'social-qq' },{ name:'social-readernaut' },{ name:'social-reddit' },{ name:'social-renren' },{ name:'social-rss' },{ name:'social-shopify' },{ name:'social-silverstripe' },{ name:'social-skype' },{ name:'social-slack' },{ name:'social-slashdot' },{ name:'social-slidshare' },{ name:'social-smugmug' },{ name:'social-snapchat' },{ name:'social-soundcloud' },{ name:'social-spotify' },{ name:'social-stack-exchange' },{ name:'social-stack-overflow' },{ name:'social-steam' },{ name:'social-stumbleupon' },{ name:'social-tagged' },{ name:'social-technorati' },{ name:'social-telegram' },{ name:'social-tinder' },{ name:'social-trello' },{ name:'social-tumblr' },{ name:'social-twitch' },{ name:'social-twitter' },{ name:'social-typo3' },{ name:'social-ubercart' },{ name:'social-viber' },{ name:'social-viddler' },{ name:'social-vimeo' },{ name:'social-vine' },{ name:'social-virb' },{ name:'social-virtuemart' },{ name:'social-vk' },{ name:'social-wechat' },{ name:'social-weibo' },{ name:'social-whatsapp' },{ name:'social-xing' },{ name:'social-yahoo' },{ name:'social-yelp' },{ name:'social-youku' },{ name:'social-youtube' },{ name:'social-youtube-play' },{ name:'social-zencart' }],

        sport:[{ name:'badminton-birdie' },{ name:'baseball' },{ name:'baseballer' },{ name:'basketball' },{ name:'basketball-hoop' },{ name:'billiard-ball' },{ name:'boot-alt-1' },{ name:'boot-alt-2' },{ name:'bowling' },{ name:'bowling-alt' },{ name:'canoe' },{ name:'cheer-leader' },{ name:'climbing' },{ name:'corner' },{ name:'cyclist' },{ name:'dumbbell' },{ name:'dumbbell-alt' },{ name:'field' },{ name:'field-alt' },{ name:'football-alt' },{ name:'foul' },{ name:'goal' },{ name:'goal-keeper' },{ name:'golf' },{ name:'golf-alt' },{ name:'golf-bag' },{ name:'golf-field' },{ name:'golfer' },{ name:'gym' },{ name:'gym-alt-1' },{ name:'gym-alt-2' },{ name:'gym-alt-3' },{ name:'hand-grippers' },{ name:'heart-beat-alt' },{ name:'helmet' },{ name:'hockey' },{ name:'hockey-alt' },{ name:'ice-skate' },{ name:'jersey' },{ name:'jersey-alt' },{ name:'jumping' },{ name:'kick' },{ name:'leg' },{ name:'match-review' },{ name:'medal-alt' },{ name:'muscle' },{ name:'muscle-alt' },{ name:'offside' },{ name:'olympic' },{ name:'olympic-logo' },{ name:'padding' },{ name:'penalty-card' },{ name:'racer' },{ name:'racing-car' },{ name:'racing-flag' },{ name:'racing-flag-alt' },{ name:'racings-wheel' },{ name:'referee' },{ name:'refree-jersey' },{ name:'result' },{ name:'rugby' },{ name:'rugby-ball' },{ name:'rugby-player' },{ name:'runner' },{ name:'runner-alt-1' },{ name:'runner-alt-2' },{ name:'score-board' },{ name:'skiing-man' },{ name:'skydiving-goggles' },{ name:'snow-mobile' },{ name:'steering' },{ name:'substitute' },{ name:'swimmer' },{ name:'table-tennis' },{ name:'team' },{ name:'team-alt' },{ name:'tennis' },{ name:'tennis-player' },{ name:'time' },{ name:'track' },{ name:'tracking' },{ name:'trophy' },{ name:'trophy-alt' },{ name:'volleyball' },{ name:'volleyball-alt' },{ name:'volleyball-fire' },{ name:'water-bottle' },{ name:'whisle' },{ name:'win-trophy' },],

        texteditor:[{ name:'align-center' },{ name:'align-left' },{ name:'align-right' },{ name:'all-caps' },{ name:'bold' },{ name:'brush' },{ name:'clip-board' },{ name:'code-alt' },{ name:'color-bucket' },{ name:'color-picker' },{ name:'copy-alt' },{ name:'copy-black' },{ name:'cut' },{ name:'delete-alt' },{ name:'edit-alt' },{ name:'eraser-alt' },{ name:'file-alt' },{ name:'font' },{ name:'header' },{ name:'indent' },{ name:'italic-alt' },{ name:'justify-all' },{ name:'justify-center' },{ name:'justify-left' },{ name:'justify-right' },{ name:'line-height' },{ name:'link-alt' },{ name:'listine-dots' },{ name:'listing-box' },{ name:'listing-number' },{ name:'marker' },{ name:'outdent' },{ name:'paper-clip' },{ name:'paragraph' },{ name:'pin' },{ name:'printer' },{ name:'redo' },{ name:'rotation' },{ name:'save' },{ name:'small-cap' },{ name:'strike-through' },{ name:'sub-listing' },{ name:'subscript' },{ name:'superscript' },{ name:'table' },{ name:'text-height' },{ name:'text-width' },{ name:'trash' },{ name:'underline' },{ name:'undo' },{ name:'unlink' }],

        transport:[{ name:'air-balloon' },{ name:'airplane' },{ name:'airplane-alt' },{ name:'ambulance-crescent' },{ name:'ambulance-cross' },{ name:'articulated-truck' },{ name:'auto-rickshaw' },{ name:'bicycle-alt-1' },{ name:'bicycle-alt-2' },{ name:'bull-dozer' },{ name:'bus-alt-1' },{ name:'bus-alt-2' },{ name:'bus-alt-3' },{ name:'cable-car' },{ name:'car-alt-1' },{ name:'car-alt-2' },{ name:'car-alt-3' },{ name:'car-alt-4' },{ name:'concrete-mixer' },{ name:'delivery-time' },{ name:'excavator' },{ name:'fast-delivery' },{ name:'fire-truck' },{ name:'fire-truck-alt' },{ name:'fork-lift' },{ name:'free-delivery' },{ name:'golf-cart' },{ name:'helicopter' },{ name:'motor-bike' },{ name:'motor-bike-alt' },{ name:'motor-biker' },{ name:'oil-truck' },{ name:'police-car' },{ name:'rickshaw' },{ name:'rocket-alt-1' },{ name:'rocket-alt-2' },{ name:'sail-boat' },{ name:'scooter' },{ name:'sea-plane' },{ name:'ship-alt' },{ name:'speed-boat' },{ name:'taxi' },{ name:'tow-truck' },{ name:'tractor' },{ name:'traffic-light' },{ name:'train-line' },{ name:'train-steam' },{ name:'tram' },{ name:'truck' },{ name:'truck-alt' },{ name:'truck-loaded' },{ name:'van' },{ name:'van-alt' },{ name:'yacht' }],

        travel:[{ name:'5-star-hotel' },{ name:'anchor-alt' },{ name:'beach-bed' },{ name:'camping-vest' },{ name:'coconut-alt' },{ name:'direction-sign' },{ name:'hill-side' },{ name:'island-alt' },{ name:'long-drive' },{ name:'map-pins' },{ name:'plane-ticket' },{ name:'sail-boat-alt-1' },{ name:'sail-boat-alt-2' },{ name:'sandals-female' },{ name:'sandals-male' },{ name:'travelling' }],

        weather:[{ name:'breakdown' },{ name:'celsius' },{ name:'clouds' },{ name:'cloudy' },{ name:'compass-alt' },{ name:'dust' },{ name:'eclipse' },{ name:'fahrenheit' },{ name:'forest-fire' },{ name:'full-night' },{ name:'full-sunny' },{ name:'hail' },{ name:'hail-night' },{ name:'hail-rainy' },{ name:'hail-rainy-night' },{ name:'hail-rainy-sunny' },{ name:'hail-sunny' },{ name:'hail-thunder' },{ name:'hail-thunder-night' },{ name:'hail-thunder-sunny' },{ name:'hill' },{ name:'hill-night' },{ name:'hill-sunny' },{ name:'hurricane' },{ name:'island' },{ name:'meteor' },{ name:'night' },{ name:'rainy' },{ name:'rainy-night' },{ name:'rainy-sunny' },{ name:'rainy-thunder' },{ name:'showy-night-hail' },{ name:'snow' },{ name:'snow-temp' },{ name:'snowy' },{ name:'snowy-hail' },{ name:'snowy-night' },{ name:'snowy-night-rainy' },{ name:'snowy-rainy' },{ name:'snowy-sunny' },{ name:'snowy-sunny-hail' },{ name:'snowy-sunny-rainy' },{ name:'snowy-thunder' },{ name:'snowy-thunder-night' },{ name:'snowy-thunder-sunny' },{ name:'snowy-windy' },{ name:'snowy-windy-night' },{ name:'snowy-windy-sunny' },{ name:'sun-alt' },{ name:'sun-rise' },{ name:'sun-set' },{ name:'sunny' },{ name:'sunny-day-temp' },{ name:'thermometer' },{ name:'thinder-light' },{ name:'tornado' },{ name:'umbrella-alt' },{ name:'volcano' },{ name:'wave' },{ name:'wind' },{ name:'wind-scale-0' },{ name:'wind-scale-1' },{ name:'wind-scale-10' },{ name:'wind-scale-11' },{ name:'wind-scale-12' },{ name:'wind-scale-2' },{ name:'wind-scale-3' },{ name:'wind-scale-4' },{ name:'wind-scale-5' },{ name:'wind-scale-6' },{ name:'wind-scale-7' },{ name:'wind-scale-8' },{ name:'wind-scale-9' },{ name:'wind-waves' },{ name:'windy' },{ name:'windy-hail' },{ name:'windy-night' },{ name:'windy-raining' },{ name:'windy-sunny' },{ name:'windy-thunder' },{ name:'windy-thunder-raining' }],

        webapplication:[{ name:'addons' },{ name:'address-book' },{ name:'adjust' },{ name:'alarm' },{ name:'anchor' },{ name:'archive' },{ name:'at' },{ name:'attachment' },{ name:'audio' },{ name:'auto-mobile' },{ name:'automation' },{ name:'baby' },{ name:'badge' },{ name:'bag' },{ name:'ban' },{ name:'bank' },{ name:'bar-code' },{ name:'bars' },{ name:'battery-empty' },{ name:'battery-full' },{ name:'battery-half' },{ name:'battery-low' },{ name:'beach' },{ name:'beaker' },{ name:'bear' },{ name:'beard' },{ name:'bed' },{ name:'bell' },{ name:'beverage' },{ name:'bicycle' },{ name:'bill' },{ name:'bin' },{ name:'binary' },{ name:'binoculars' },{ name:'bird' },{ name:'birds' },{ name:'black-board' },{ name:'bluetooth' },{ name:'bolt' },{ name:'bomb' },{ name:'book' },{ name:'book-mark' },{ name:'boot' },{ name:'box' },{ name:'brain' },{ name:'briefcase' },{ name:'broken' },{ name:'bucket' },{ name:'bucket1' },{ name:'bucket2' },{ name:'bug' },{ name:'building' },{ name:'bullet' },{ name:'bullhorn' },{ name:'bullseye' },{ name:'bus' },{ name:'butterfly' },{ name:'cab' },{ name:'calculator' },{ name:'calendar' },{ name:'camera' },{ name:'camera-alt' },{ name:'car' },{ name:'card' },{ name:'cart' },{ name:'cc' },{ name:'certificate' },{ name:'charging' },{ name:'chat' },{ name:'check' },{ name:'check-alt' },{ name:'check-circled' },{ name:'checked' },{ name:'children-care' },{ name:'clock-time' },{ name:'close' },{ name:'close-circled' },{ name:'close-line' },{ name:'close-line-circled' },{ name:'close-line-squared' },{ name:'close-line-squared-alt' },{ name:'close-squared' },{ name:'close-squared-alt' },{ name:'cloud' },{ name:'cloud-download' },{ name:'cloud-refresh' },{ name:'cloud-upload' },{ name:'code' },{ name:'code-not-allowed' },{ name:'coffee-cup' },{ name:'comment' },{ name:'compass' },{ name:'computer' },{ name:'connection' },{ name:'console' },{ name:'contacts' },{ name:'contrast' },{ name:'copy' },{ name:'copyright' },{ name:'credit-card' },{ name:'crop' },{ name:'crown' },{ name:'cube' },{ name:'cubes' },{ name:'culinary' },{ name:'dashboard' },{ name:'dashboard-web' },{ name:'data' },{ name:'database' },{ name:'database-add' },{ name:'database-locked' },{ name:'database-remove' },{ name:'delete' },{ name:'diamond' },{ name:'dice' },{ name:'disabled' },{ name:'disc' },{ name:'diskette' },{ name:'document-folder' },{ name:'download' },{ name:'download-alt' },{ name:'downloaded' },{ name:'earth' },{ name:'ebook' },{ name:'edit' },{ name:'eject' },{ name:'email' },{ name:'envelope' },{ name:'envelope-open' },{ name:'eraser' },{ name:'error' },{ name:'exchange' },{ name:'exclamation' },{ name:'exclamation-circle' },{ name:'exclamation-square' },{ name:'exclamation-tringle' },{ name:'exit' },{ name:'expand' },{ name:'external' },{ name:'external-link' },{ name:'eye' },{ name:'eye-blocked' },{ name:'eye-dropper' },{ name:'favourite' },{ name:'fax' },{ name:'female' },{ name:'file' },{ name:'film' },{ name:'filter' },{ name:'fire' },{ name:'fire-burn' },{ name:'fire-extinguisher' },{ name:'first-aid' },{ name:'flag' },{ name:'flag-alt-1' },{ name:'flag-alt-2' },{ name:'flash' },{ name:'flash-light' },{ name:'flask' },{ name:'focus' },{ name:'folder' },{ name:'folder-open' },{ name:'foot-print' },{ name:'football' },{ name:'football-american' },{ name:'game-console' },{ name:'game-pad' },{ name:'gavel' },{ name:'gear' },{ name:'gears' },{ name:'gift' },{ name:'glass' },{ name:'globe' },{ name:'graduate' },{ name:'graffiti' },{ name:'grocery' },{ name:'group' },{ name:'hammer' },{ name:'hand' },{ name:'hanger' },{ name:'hard-disk' },{ name:'headphone' },{ name:'heart' },{ name:'heart-beat' },{ name:'history' },{ name:'home' },{ name:'horn' },{ name:'hotel' },{ name:'hour-glass' },{ name:'id' },{ name:'image' },{ name:'inbox' },{ name:'infinite' },{ name:'info' },{ name:'info-circle' },{ name:'info-square' },{ name:'institution' },{ name:'interface' },{ name:'invisible' },{ name:'italic' },{ name:'jacket' },{ name:'jar' },{ name:'jewlery' },{ name:'karate' },{ name:'key' },{ name:'key-hole' },{ name:'keyboard' },{ name:'kid' },{ name:'label' },{ name:'lamp' },{ name:'laptop' },{ name:'layers' },{ name:'layout' },{ name:'leaf' },{ name:'leaflet' },{ name:'learn' },{ name:'legal' },{ name:'lego' },{ name:'lemon' },{ name:'lens' },{ name:'letter' },{ name:'letterbox' },{ name:'library' },{ name:'license' },{ name:'life-bouy' },{ name:'life-buoy' },{ name:'life-jacket' },{ name:'life-ring' },{ name:'light-bulb' },{ name:'lighter' },{ name:'lightning-ray' },{ name:'like' },{ name:'link' },{ name:'live-support' },{ name:'location-arrow' },{ name:'location-pin' },{ name:'lock' },{ name:'login' },{ name:'logout' },{ name:'lollipop' },{ name:'look' },{ name:'loop' },{ name:'luggage' },{ name:'lunch' },{ name:'lungs' },{ name:'magic' },{ name:'magic-alt' },{ name:'magnet' },{ name:'mail' },{ name:'mail-box' },{ name:'male' },{ name:'map' },{ name:'math' },{ name:'maximize' },{ name:'measure' },{ name:'medal' },{ name:'medical' },{ name:'medicine' },{ name:'mega-phone' },{ name:'memorial' },{ name:'memory-card' },{ name:'mic' },{ name:'mic-mute' },{ name:'micro-chip' },{ name:'microphone' },{ name:'microscope' },{ name:'military' },{ name:'mill' },{ name:'minus' },{ name:'minus-circle' },{ name:'minus-square' },{ name:'mobile-phone' },{ name:'molecule' },{ name:'money' },{ name:'moon' },{ name:'mop' },{ name:'muffin' },{ name:'music' },{ name:'music-alt' },{ name:'music-notes' },{ name:'mustache' },{ name:'mute-volume' },{ name:'navigation' },{ name:'navigation-menu' },{ name:'Refferal' },{ name:'Refferal-tower' },{ name:'news' },{ name:'newspaper' },{ name:'no-smoking' },{ name:'not-allowed' },{ name:'notebook' },{ name:'notepad' },{ name:'notification' },{ name:'numbered' },{ name:'opposite' },{ name:'optic' },{ name:'options' },{ name:'package' },{ name:'page' },{ name:'paint' },{ name:'paper-plane' },{ name:'paperclip' },{ name:'papers' },{ name:'paw' },{ name:'pay' },{ name:'pen' },{ name:'pencil' },{ name:'penguin-linux' },{ name:'pestle' },{ name:'phone' },{ name:'phone-circle' },{ name:'picture' },{ name:'pie' },{ name:'pine' },{ name:'pixels' },{ name:'play' },{ name:'plugin' },{ name:'plus' },{ name:'plus-circle' },{ name:'plus-square' },{ name:'polygonal' },{ name:'power' },{ name:'presentation' },{ name:'price' },{ name:'print' },{ name:'puzzle' },{ name:'qr-code' },{ name:'queen' },{ name:'question' },{ name:'question-circle' },{ name:'question-square' },{ name:'quote-left' },{ name:'quote-right' },{ name:'radio' },{ name:'random' },{ name:'recycle' },{ name:'refresh' },{ name:'repair' },{ name:'reply' },{ name:'reply-all' },{ name:'resize' },{ name:'responsive' },{ name:'retweet' },{ name:'road' },{ name:'robot' },{ name:'rocket' },{ name:'royal' },{ name:'rss-feed' },{ name:'safety' },{ name:'sale-discount' },{ name:'satellite' },{ name:'send-mail' },{ name:'server' },{ name:'settings' },{ name:'share' },{ name:'share-alt' },{ name:'share-boxed' },{ name:'shield' },{ name:'ship' },{ name:'shopping-cart' },{ name:'sign-in' },{ name:'sign-out' },{ name:'signal' },{ name:'site-map' },{ name:'smart-phone' },{ name:'soccer' },{ name:'sort' },{ name:'sort-alt' },{ name:'space' },{ name:'spanner' },{ name:'speech-comments' },{ name:'speed-meter' },{ name:'spinner' },{ name:'spinner-alt-1' },{ name:'spinner-alt-2' },{ name:'spinner-alt-3' },{ name:'spinner-alt-4' },{ name:'spinner-alt-5' },{ name:'spinner-alt-6' },{ name:'spreadsheet' },{ name:'square' },{ name:'ssl-security' },{ name:'star' },{ name:'star-alt-1' },{ name:'star-alt-2' },{ name:'street-view' },{ name:'sun' },{ name:'support-faq' },{ name:'tack-pin' },{ name:'tag' },{ name:'tags' },{ name:'tasks' },{ name:'telephone' },{ name:'telescope' },{ name:'terminal' },{ name:'thumbs-down' },{ name:'thumbs-up' },{ name:'tick-boxed' },{ name:'tick-mark' },{ name:'ticket' },{ name:'tie' },{ name:'toggle-off' },{ name:'toggle-on' },{ name:'tools' },{ name:'transparent' },{ name:'tree' },{ name:'umbrella' },{ name:'unlock' },{ name:'unlocked' },{ name:'upload' },{ name:'upload-alt' },{ name:'usb' },{ name:'usb-drive' },{ name:'vector-path' },{ name:'verification-check' },{ name:'video' },{ name:'video-clapper' },{ name:'volume-down' },{ name:'volume-off' },{ name:'volume-up' },{ name:'wall' },{ name:'wall-clock' },{ name:'wallet' },{ name:'warning' },{ name:'warning-alt' },{ name:'water-drop' },{ name:'web' },{ name:'wheelchair' },{ name:'wifi' },{ name:'wifi-alt' },{ name:'world' },{ name:'zigzag' },{ name:'zipped' },]
      };
    },
    methods:{
      icon_bar(icon){

        this.select_icon.class = 'icofont icofont-'+icon;
        this.select_icon.tag = '<i class="icofont icofont-'+icon+'"></i>';

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