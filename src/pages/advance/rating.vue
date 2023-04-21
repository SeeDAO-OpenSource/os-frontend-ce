<template>
    <div>
        <Breadcrumbs main="Bonus UI" title="rating"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-6">
                    <div class="card">
                      <div class="card-header">
                        <h5><span class="digits">1/10</span> Rating</h5>
                      </div>
                      <div class="card-body">
                        <div class="rating-container digits">
                          <image-rating :src="rectanglerating()" :item-size="12" :max-rating="10"></image-rating>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="card">
                      <div class="card-header">
                        <h5><span class="digits">1/10</span> Rating</h5>
                      </div>
                      <div class="card-body">
                        <div class="rating-container digits rate-svg">
                          <image-rating :src="rectangleratingtwo()" :max-rating="10"></image-rating>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="card">
                      <div class="card-header">
                        <h5>Clickable Value</h5>
                      </div>
                      <div class="card-body">
                        <div class="rating-container digits">
                          <star-rating v-model="starrating.rating1" :star-size="20" :max-rating="10" :show-rating="false"></star-rating>
                            <hr>
                            <pre class="mb-0 rating-pre">Rating {{ starrating.rating1 }}</pre>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="card">
                      <div class="card-header">
                        <h5>Readonly Ratings</h5>
                      </div>
                      <div class="card-body">
                        <div class="rating-container digits">
                          <star-rating v-model="starrating.rating2" :star-size="20" :max-rating="10" :show-rating="false" :read-only="starrating.rating2_control"></star-rating>
                            <b-button :pressed.sync="starrating.rating2_control" variant="danger" size="sm" v-if="starrating.rating2_control" class="rating-show">Readonly</b-button>
                            <b-button :pressed.sync="starrating.rating2_control" variant="success" size="sm" v-else class="rating-show">Editable</b-button>
                            <hr>
                            <pre class="mb-0 rating-pre">Rating {{ starrating.rating2 }}</pre>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="card">
                      <div class="card-header">
                        <h5>Edit Or Clear Rating</h5>
                      </div>
                      <div class="card-body">
                        <div class="rating-container digits rating-space">
                          <star-rating v-model="starrating.rating3" :star-size="20" :max-rating="10" :show-rating="false" :read-only="starrating.rating3_control"></star-rating>
                            <div class="rating-show">
                                <b-button :pressed.sync="starrating.rating3_control" variant="danger" size="sm" v-if="starrating.rating3_control" class="mr-1">Readonly</b-button>
                                <b-button :pressed.sync="starrating.rating3_control" variant="success" size="sm" v-else class="mr-1">Editable</b-button>
                                <b-button variant="outline-primary" size="sm" v-on:click="starrating.rating3=0">Clear</b-button>
                            </div>
                        </div>
                          <hr>
                          <pre class="mb-0">Rating {{ starrating.rating3 }}</pre>
                      </div>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="card">
                      <div class="card-header">
                        <h5>Star Rating</h5>
                      </div>
                      <div class="card-body">
                        <div class="rating-container digits">
                          <star-rating :max-rating="10" :star-size="20" :increment="0.01" ></star-rating>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="card">
                      <div class="card-header">
                        <h5>Heart Rating</h5>
                      </div>
                      <div class="card-body">
                        <div class="rating-container digits">
                          <heart-rating v-model="heartrating.rating1" :item-size="15" :spacing="3" :max-rating="10"></heart-rating>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="card">
                      <div class="card-header">
                        <h5>Image Rating</h5>
                      </div>
                      <div class="card-body">
                        <div class="rating-container digits">
                          <image-rating :src="vuelogo()" :item-size="15" :max-rating="10"></image-rating>
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
  import StarRating from 'vue-star-rating';
  import { HeartRating } from 'vue-rate-it';
  import { ImageRating } from 'vue-rate-it';
  
  export default {
    components: {
      StarRating,
      HeartRating,
      ImageRating
    },
    data(){
      return{
        starrating:{
          rating1:0,
          rating2:0,
          rating2_control:false,
          rating3:0,
          rating3_control:false,
          rating4:0
        },
        heartrating:{
          rating1:0,
        },
        imagerating:{
        }
      };
    },
    methods:{
      vuelogo(){
        var vuelogo = require('../../assets/images/vuelogo.png');
        return vuelogo;
      },
      rectanglerating(){
        var vuelogo = require('../../assets/images/rectanglerating1.jpg');
        return vuelogo;
      },
      rectangleratingtwo(){
        var vuelogo = require('../../assets/images/rectanglerating2.jpg');
        return vuelogo;
      }
    }
  };
</script>
