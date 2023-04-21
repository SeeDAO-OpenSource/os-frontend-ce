<template>
  <div>
    <Breadcrumbs main="Bonus UI" title="Image Cropper"/>
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Image Cropper</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-xl-9 col-md-12">
                  <div class="img-container">
                    <vue-cropper
                    ref='cropper'
                    :guides="true"
                    :view-mode=viewmodeselected
                    drag-mode="crop"
                    :aspectRatio=aspectRatioselected
                    :auto-crop-area="0.5"
                    :min-container-width="250"
                    :min-container-height="180"
                    :background="true"
                    :rotatable="true"
                    :movable="true"
                    :src="getImgUrl()"
                    alt="Source Image"
                    :ready="ready"
                    :crop="cropImage"
                    :img-style="{ 'width': '800px', 'height': '500px' }">
                  </vue-cropper>
                </div>
              </div>
              <div class="col-xl-3 col-md-12">
                <!-- <h3>Preview:</h3>-->
                <div class="docs-preview clearfix">
                  <!-- <div class="img-preview preview-lg"></div>-->
                  <div class="img-preview preview-md"></div>
                  <div class="img-preview preview-sm"></div>
                  <div class="img-preview preview-xs"></div>
                </div>
                <!-- <h3>Data:</h3>-->
                <div class="docs-data">
                  <div class="input-group input-group-sm">
                    <span class="input-group-prepend">
                      <label class="input-group-text">X</label>
                    </span>
                    <input class="form-control digits" type="text" placeholder="x" :value="imageData.x">
                    <span class="input-group-append"><span class="input-group-text">px</span></span>
                  </div>
                  <div class="input-group input-group-sm">
                    <span class="input-group-prepend">
                      <label class="input-group-text">Y</label>
                    </span>
                    <input class="form-control digits" type="text" placeholder="y" :value="imageData.y">
                    <span class="input-group-append"><span class="input-group-text">px</span></span>
                  </div>
                  <div class="input-group input-group-sm">
                    <span class="input-group-prepend">
                      <label class="input-group-text">Width</label>
                    </span>
                    <input class="form-control digits" type="text" placeholder="width" :value="imageData.width">
                    <span class="input-group-append"><span class="input-group-text">px</span></span>
                  </div>
                  <div class="input-group input-group-sm">
                    <span class="input-group-prepend">
                      <label class="input-group-text">Height</label>
                    </span>
                    <input class="form-control digits" type="text" placeholder="height" :value="imageData.height">
                    <span class="input-group-append"><span class="input-group-text">px</span></span>
                  </div>
                  <div class="input-group input-group-sm">
                    <span class="input-group-prepend">
                      <label class="input-group-text">Rotate</label>
                    </span>
                    <input class="form-control digits" type="text" placeholder="rotate" :value="imageData.rotate">
                    <span class="input-group-append"><span class="input-group-text">deg</span></span>
                  </div>
                  <div class="input-group input-group-sm">
                    <span class="input-group-prepend">
                      <label class="input-group-text">ScaleX</label>
                    </span>
                    <input class="form-control digits" type="text" placeholder="scaleX" :value="imageData.scaleX">
                  </div>
                  <div class="input-group input-group-sm mb-0">
                    <span class="input-group-prepend">
                      <label class="input-group-text">ScaleY</label>
                    </span>
                    <input class="form-control digits" type="text" placeholder="scaleY" :value="imageData.scaleY">
                  </div>
                  <img :src="cropImg" class="img-fluid mt-2" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <div class="row img-cropper">
              <div class="col-xl-9 col-md-12 docs-buttons">
                <b-button-group>
                  <b-button id="move" variant="primary" v-on:click="moveImage"><span class="fa fa-arrows"></span></b-button>
                  <b-tooltip target="move" triggers="hover" placement="top">Move</b-tooltip>
                  <b-button id="crop" variant="primary" class="br-right"><span class="fa fa-crop"></span></b-button>
                  <b-tooltip target="crop" triggers="hover" placement="top">Crop</b-tooltip>
                </b-button-group>
                <b-button-group>
                  <b-button id="zoomin" variant="primary" v-on:click="zoominImage"><span class="fa fa-search-plus"></span></b-button>
                  <b-tooltip target="zoomin" triggers="hover" placement="top">Zoom In</b-tooltip>
                  <b-button id="zoomout" variant="primary" v-on:click="zoomoutImage" class="br-right"><span class="fa fa-search-minus"></span></b-button>
                  <b-tooltip target="zoomout" triggers="hover" placement="top">Zoom Out</b-tooltip>
                </b-button-group>
                <b-button-group>
                  <b-button id="moveleft" variant="outline-primary" v-on:click="moveImageLeft"><span class="fa fa-arrow-left"></span></b-button>
                  <b-tooltip target="moveleft" triggers="hover" placement="top">Move Left</b-tooltip>
                  <b-button id="moveright" variant="outline-primary" v-on:click="moveImageRight"><span class="fa fa-arrow-right"></span></b-button>
                  <b-tooltip target="moveright" triggers="hover" placement="top">Move Right</b-tooltip>
                  <b-button id="moveup" variant="outline-primary" v-on:click="moveImageUp"><span class="fa fa-arrow-up"></span></b-button>
                  <b-tooltip target="moveup" triggers="hover" placement="top">Move Up</b-tooltip>
                  <b-button id="movedown" variant="outline-primary" v-on:click="moveImageDown" class="br-right"><span class="fa fa-arrow-down"></span></b-button>
                  <b-tooltip target="movedown" triggers="hover" placement="top">Move Down</b-tooltip>
                </b-button-group>
                <b-button-group>
                  <b-button id="rotateleft" variant="outline-primary" v-on:click="rotateLeft"><span class="fa fa-rotate-left"></span></b-button>
                  <b-tooltip target="rotateleft" triggers="hover" placement="top">Rotate Left</b-tooltip>
                  <b-button id="rotateright" variant="outline-primary" v-on:click="rotateRight" class="br-right"><span class="fa fa-rotate-right"></span></b-button>
                  <b-tooltip target="rotateright" triggers="hover" placement="top">Rotate Left</b-tooltip>
                </b-button-group>
                <b-button-group>
                  <b-button id="fliphorizontal" variant="outline-primary" v-on:click="fliphorizontal"><span class="fa fa-arrows-h"></span></b-button>
                  <b-tooltip target="fliphorizontal" triggers="hover" placement="top">Flip Horizontal</b-tooltip>
                  <b-button id="flipvertical" variant="outline-primary" v-on:click="flipvertical" class="br-right"><span class="fa fa-arrows-v"></span></b-button>
                  <b-tooltip target="flipvertical" triggers="hover" placement="top">Flip Vertical</b-tooltip>
                </b-button-group>
                <b-button-group>
                  <b-button id="crop" variant="outline-primary"><span class="fa fa-check"></span></b-button>
                  <b-tooltip target="crop" triggers="hover" placement="top">Crop</b-tooltip>
                  <b-button id="clear" variant="outline-primary" v-on:click="clear" class="br-right"><span class="fa fa-remove"></span></b-button>
                  <b-tooltip target="clear" triggers="hover" placement="top">Clear</b-tooltip>
                </b-button-group>
                <b-button-group>
                  <b-button id="disable" variant="outline-primary" v-on:click="disable"><span class="fa fa-lock"></span></b-button>
                  <b-tooltip target="disable" triggers="hover" placement="top">Disable</b-tooltip>
                  <b-button id="enable" variant="outline-primary" v-on:click="enable" class="br-right"><span class="fa fa-unlock"></span></b-button>
                  <b-tooltip target="enable" triggers="hover" placement="top">Enable</b-tooltip>
                </b-button-group>
                <b-button-group>
                  <b-button id="reset" variant="outline-primary" v-on:click="reset"><span class="fa fa-refresh"></span></b-button>
                  <b-tooltip target="reset" triggers="hover" placement="top">Reset</b-tooltip>
                  <b-button id="upload" variant="outline-primary" v-on:click="imageUpload"><span class="fa fa-upload"></span></b-button>
                  <b-tooltip target="upload" triggers="hover" placement="top">Import image with Blob URLs</b-tooltip>
                  <b-button id="destroy" variant="outline-primary" v-on:click="destroy" class="br-right"><span class="fa fa-power-off"></span></b-button>
                  <b-tooltip target="destroy" triggers="hover" placement="top">Destroy</b-tooltip>
                </b-button-group>
                <b-button-group>
                  <b-button id="getCroppedCanvas4096" v-on:click="getCroppedCanvas4096" variant="primary"><span class="docs-tooltip">Get Cropped Canvas</span></b-button>
                  <b-tooltip target="getCroppedCanvas4096" triggers="hover" placement="top">
                    $().cropper(&quot;getCroppedCanvas&quot;, { maxWidth: 4096, maxHeight: 4096 })
                  </b-tooltip>

                  <b-button id="getCroppedCanvas16090" v-on:click="getCroppedCanvas16090" variant="primary"><span class="docs-tooltip">160×90</span></b-button>
                  <b-tooltip target="getCroppedCanvas16090" triggers="hover" placement="top">
                    $().cropper(&quot;getCroppedCanvas&quot;, { width: 160, height: 90 })
                  </b-tooltip>

                  <b-button id="getCroppedCanvas320180" v-on:click="getCroppedCanvas320180" variant="primary" class="br-right"><span class="docs-tooltip">320×180</span></b-button>
                  <b-tooltip target="getCroppedCanvas320180" triggers="hover" placement="top">
                    $().cropper(&quot;getCroppedCanvas&quot;, { width: 320, height: 180 })
                  </b-tooltip>
                </b-button-group>
                <b-modal ref="getCroppedCanvas4096" id="getCroppedCanvas4096" title="Cropped" cancel-title="Close" ok-title="Download" ok-variant="outline-primary" cancel-variant="primary" class="theme-modal">
                  <img :src="cropImg" class="img-fluid"/>
                </b-modal>
                <b-modal ref="getCroppedCanvas16090" id="getCroppedCanvas16090" title="Cropped" cancel-title="Close" ok-title="Download" ok-variant="outline-primary" cancel-variant="primary" class="theme-modal">
                  <img :src="cropImg" width="160" height="90" />
                </b-modal>
                <b-modal ref="getCroppedCanvas320180" id="getCroppedCanvas320180" title="Cropped" cancel-title="Close" ok-title="Download" ok-variant="outline-primary" cancel-variant="primary" class="theme-modal">
                  <img :src="cropImg" width="320" height="180" />
                </b-modal>
                <b-button id="getdata" variant="primary" v-on:click="getCropperdata">Get Data</b-button>
                <b-tooltip target="getdata" triggers="hover" placement="top">$().cropper("getData")</b-tooltip>
                <b-button id="setdata" variant="primary">Set Data</b-button>
                <b-tooltip target="setdata" triggers="hover" placement="top">$().cropper("setData",data)</b-tooltip>
                <b-button id="getContainerdata" variant="primary" v-on:click="getContainerdata">Get Container Data</b-button>
                <b-tooltip target="getContainerdata" triggers="hover" placement="top">$().cropper("getContainerData")</b-tooltip>
                <b-button id="getImagedata" variant="primary" v-on:click="getImagedata">Get Image Data</b-button>
                <b-tooltip target="getImagedata" triggers="hover" placement="top">$().cropper("getImageData")</b-tooltip>
                <b-button id="getCanvasData" variant="primary" v-on:click="getCanvasData">Get Canvas Data</b-button>
                <b-tooltip target="getCanvasData" triggers="hover" placement="top">$().cropper("getCanvasData")</b-tooltip>
                <b-button id="getCropBoxData" variant="primary" v-on:click="getCropBoxData">Get Crop Box Data</b-button>
                <b-tooltip target="getCropBoxData" triggers="hover" placement="top">$().cropper("getCropBoxData")</b-tooltip>
                <b-button id="moveImageTo" variant="primary" v-on:click="moveImageTo">Move to [0,0]</b-button>
                <b-tooltip target="moveImageTo" triggers="hover" placement="top">cropper.moveTo(0)</b-tooltip>
                <b-button id="zoom100" variant="primary" v-on:click="zoom100">Zoom to 100%</b-button>
                <b-tooltip target="zoom100" triggers="hover" placement="top">cropper.zoomTo(1)</b-tooltip>
                <b-button id="rotate180" variant="primary" v-on:click="rotate180">Rotate 180°</b-button>
                <b-tooltip target="rotate180" triggers="hover" placement="top">cropper.rotateTo(180)</b-tooltip>
                <b-button id="scaleImage" variant="primary" v-on:click="scaleImage">Scale (-2, -1)</b-button>
                <b-tooltip target="scaleImage" triggers="hover" placement="top">cropper.scale(-2, -1)</b-tooltip>
                <b-form-textarea id="putData" v-model="putData" rows="1" placeholder="Get data to here or set data with this value" ></b-form-textarea>
              </div>
              <div class="col-xl-3 col-md-12 docs-toggles">
                <!-- <b-form-group class="mb-0"> -->
                  <b-form-radio-group
                  id="aspectRatio"
                  v-model="aspectRatioselected"
                  :options="aspectRatioOptions"
                  buttons
                  button-variant="outline-primary"
                  name="aspectRatio"
                  ></b-form-radio-group>
                <!-- </b-form-group> -->
                <!-- <b-form-group class="mb-0"> -->
                  <b-form-radio-group class="mb-0"
                  id="viewmode"
                  v-model="viewmodeselected"
                  :options="viewmodeOptions"
                  buttons
                  button-variant="outline-primary"
                  name="viewmode"
                  ></b-form-radio-group>
                <!-- </b-form-group> -->
              </div>
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
  import VueCropper from 'vue-cropperjs';
  import 'cropperjs/dist/cropper.css';
  
  export default {
    components: {
      VueCropper,
    },
    data(){
      return{
        myimgSrc:'img-cropper.jpg',
        imgSrc:'',
        imageData:'',
        containerData:'',
        putData:'',
        viewmodeselected:0,
        cropImg: '',
        viewmodeOptions: [
          { text: 'VM0', value: 0 },
          { text: 'VM1', value: 1 },
          { text: 'VM2', value: 2 },
          { text: 'VM3', value: 3 },
        ],
        aspectRatioselected:1.7777777777777777,
        aspectRatioOptions: [
          { text: '16:9', value: 1.7777777777777777 },
          { text: '4:3', value: 1.3333333333333333 },
          { text: '1:1', value: 1 },
          { text: '2:3', value: 0.6666666666666666 },
          { text: 'Free', value: NaN }
        ]
      };
    },
    mounted(){
      this.imageData = this.$refs.cropper.getData();
    },
    methods:{
      getImgUrl() {
        var images = require.context('../../assets/images/other-images/', false, /\.jpg$/);
        return images('./' + this.myimgSrc);
      },
      ready(){
        this.containerData = this.$refs.cropper.getContainerData();
      },
      cropImage(){
        this.imageData = this.$refs.cropper.getData();
        this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
      },
      moveImage(){
        this.$refs.cropper.move(1);
      },
      zoominImage(){
        this.$refs.cropper.zoomTo(0.5);
      },
      zoomoutImage(){
        this.$refs.cropper.zoomTo(0);
      },
      zoom100(){
        this.$refs.cropper.zoomTo(1);
      },
      moveImageLeft(){
        this.$refs.cropper.move(-10,0);
      },
      moveImageRight(){
        this.$refs.cropper.move(10,0);
      },
      moveImageUp(){
        this.$refs.cropper.move(0,10);
      },
      moveImageDown(){
        this.$refs.cropper.move(0,-10);
      },
      moveImageTo(){
        this.$refs.cropper.moveTo(0);
      },
      rotateLeft(){
        this.$refs.cropper.rotate(-45);
      },
      rotateRight(){
        this.$refs.cropper.rotate(45);
      },
      rotate180(){
        this.$refs.cropper.rotateTo(180);
      },
      fliphorizontal(){
        if(this.imageData.scaleX === 1) {
          this.$refs.cropper.scale(-1, 1);
        } else {
          this.$refs.cropper.scale(1, 1);
        }
      },
      flipvertical(){      
        if(this.imageData.scaleY === 1) {
          this.$refs.cropper.scale(1, -1);
        } else {
          this.$refs.cropper.scale(1, 1);
        }
      },
      scaleImage(){
        this.$refs.cropper.scale(-2, -1);
      },
      clear(){
        this.$refs.cropper.clear();
      },
      disable(){
        this.$refs.cropper.disable();
      },
      enable(){
        this.$refs.cropper.enable();
      },
      reset(){
        this.$refs.cropper.reset();
      },
      destroy(){
        this.$refs.cropper.destroy();
      },
      imageUpload(){
      },
      getCroppedCanvas(){
        this.$refs.getCroppedCanvasModal.show();
      },
      getCroppedCanvas4096(){
        this.$refs.getCroppedCanvas4096.show();
      },
      getCroppedCanvas16090(){
        this.$refs.getCroppedCanvas16090.show();
      },
      getCroppedCanvas320180(){
        this.$refs.getCroppedCanvas320180.show();
      },
      getCropperdata(){
        var data = this.$refs.cropper.getData();
        this.putData = '{"x":'+data.x+',"y":'+data.y+',"width":'+data.width+',"height":'+data.height+',"rotate":'+data.rotate+',"scaleX":'+data.scaleX+',"scaleY":'+data.scaleY+'}';
      },
      getContainerdata(){
        var data = this.$refs.cropper.getContainerData();
        this.putData = '{"width":'+data.width+',"height":'+data.height+'}';
      },
      getImagedata(){
        var data = this.$refs.cropper.getImageData();
        this.putData = '{"naturalWidth":'+data.naturalWidth+',"naturalHeight":'+data.naturalHeight+',"aspectRatio":'+data.aspectRatio+',"width":'+data.width+',"height":'+data.height+',"left":'+data.left+',"top":'+data.top+'}';
      },
      getCanvasData(){
        var data = this.$refs.cropper.getCanvasData();
        this.putData = '{"left":'+data.left+',"top":'+data.top+',"width":'+data.width+',"height":'+data.height+',"naturalWidth":'+data.naturalWidth+',"naturalHeight":'+data.naturalHeight+'}';
      },
      getCropBoxData(){
        var data = this.$refs.cropper.getCropBoxData();
        this.putData = '{"left":'+data.left+',"top":'+data.top+',"width":'+data.width+',"height":'+data.height+'}';
      }
    }
  };
</script>
