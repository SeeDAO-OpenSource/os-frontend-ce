<template>
    <div>
        <Breadcrumbs main="Form Widgets" title="Select2"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
          <div class="select2-drpdwn">
            <div class="row">

              <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                      <h5 class="card-title">Select-2</h5>
                    </div>
                    <div class="card-body">
                      <div class="mb-2">
                        <div class="col-form-label">Default Placeholder</div>
                         <multiselect  v-model="multiValue" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" 
                          label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                      </div>
                      <div class="mb-2">
                        <div class="col-form-label">Single Select</div>
                         <multiselect v-model="singleValue" :options="options" label="name" :searchable="false" :close-on-select="false" :show-labels="false" placeholder="Pick a value"></multiselect>
                      </div>
                      <div class="mb-2">
                        <div class="col-form-label">Limiting The Number Of Selections</div>
                         <multiselect  v-model="limitMultiValue" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" 
                          label="name" :max="2" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                      </div>
                       <div class="mb-2">
                        <div class="col-form-label">Dropdown Open Direction</div>
                         <multiselect  v-model="openDirection" :allow-empty="false" openDirection="above" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" 
                          label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                      </div>
                       <div class="mb-2">
                        <div class="col-form-label">Data With Images</div>
                         <multiselect v-model="imageValue" placeholder="Fav No Man’s Sky path" label="title" track-by="title" :options="imageOptions" :option-height="104" :show-labels="false">
                          <template slot="singleLabel" slot-scope="props"><img class="img-fluid img-100" :src="getImgUrl(props.option.img)" alt="#">
                                  <span class="option__desc"><span class="ml-2">{{ props.option.title }}</span></span></template>
                          <template slot="option" slot-scope="props"><img class="img-fluid img-50" :src="getImgUrl(props.option.img)" alt="#">
                            <div class="option__desc"><span>{{ props.option.title }}</span><span class="option__small">{{ props.option.desc }}</span></div>
                          </template>
                        </multiselect>
                      </div>
                      
                    </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="card">
                  <div class="card-header">
                    <h5 class="card-title">Outline Color Variant</h5>
                  </div>
                  <div class="card-body">

                      <div class="mb-2">
                        <div class="col-form-label">Primary Select</div>
                        <b-form-select class="form-control form-control-primary btn-square" v-model="outline_selected1" :options="outline_options1"></b-form-select>
                      </div>

                      <div class="mb-2">
                        <div class="col-form-label">Secondary Select</div>
                        <b-form-select class="form-control form-control-secondary btn-square" v-model="outline_selected2" :options="outline_options2"></b-form-select>
                      </div>

                      <div class="mb-2">
                        <div class="col-form-label">Success Select</div>
                        <b-form-select class="form-control form-control-success btn-square" v-model="outline_selected3" :options="outline_options3"></b-form-select>
                      </div>

                      <div class="mb-2">
                        <div class="col-form-label">Info Select</div>
                        <b-form-select class="form-control form-control-info btn-square" v-model="outline_selected4" :options="outline_options4"></b-form-select>
                      </div>

                      <div class="mb-2">
                        <div class="col-form-label">Warning Select</div>
                        <b-form-select class="form-control form-control-warning btn-square" v-model="outline_selected5" :options="outline_options5"></b-form-select>
                      </div>

                      <div class="mb-2">
                        <div class="col-form-label">Danger Select</div>
                        <b-form-select class="form-control form-control-danger btn-square" v-model="outline_selected6" :options="outline_options6"></b-form-select>
                      </div>

                      <div>
                        <div class="col-form-label">Inverse Select</div>
                        <b-form-select class="form-control form-control-inverse btn-square" v-model="outline_selected7" :options="outline_options7"></b-form-select>
                      </div>

                  </div>
                </div>
              </div>


              <div class="col-md-6">
                <div class="card">
                  <div class="card-header">
                    <h5 class="card-title">Full Colored Variant</h5>
                  </div>
                  <div class="card-body">

                    <div class="mb-2">
                      <div class="col-form-label">Primary Select</div>
                      <b-form-select class="form-control form-control-primary-fill btn-square" v-model="outline_selected8" :options="outline_options8"></b-form-select>
                    </div>

                    <div class="mb-2">
                      <div class="col-form-label">Secondary Select</div>
                      <b-form-select class="form-control form-control-secondary-fill btn-square" v-model="outline_selected9" :options="outline_options9"></b-form-select>
                    </div>

                    <div class="mb-2">
                      <div class="col-form-label">Success Select</div>
                      <b-form-select class="form-control form-control-success-fill btn-square" v-model="outline_selected10" :options="outline_options10"></b-form-select>
                    </div>

                    <div class="mb-2">
                      <div class="col-form-label">Info Select</div>
                      <b-form-select class="form-control form-control-info-fill btn-square" v-model="outline_selected11" :options="outline_options11"></b-form-select>
                    </div>

                    <div class="mb-2">
                      <div class="col-form-label">Warning Select</div>
                      <b-form-select class="form-control form-control-warning-fill btn-square" v-model="outline_selected12" :options="outline_options12"></b-form-select>
                    </div>

                    <div class="mb-2">
                      <div class="col-form-label">Danger Select</div>
                      <b-form-select class="form-control form-control-danger-fill btn-square" v-model="outline_selected13" :options="outline_options13"></b-form-select>
                    </div>

                    <div>
                      <div class="col-form-label">Inverse Select</div>
                      <b-form-select class="form-control form-control-inverse-fill btn-square" v-model="outline_selected14" :options="outline_options14"></b-form-select>
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
  import Multiselect from 'vue-multiselect';

  export default {
    components: {
      Multiselect
    },
    data(){
      return{
        singleValue:'',
        multiValue: [
          { name: 'Alabama', code: '1' },
          { code: 2, name: 'Wyoming' }
        ],
        options: [
          { code: 1, name: 'Alabama' },
          { code: 2, name: 'Wyoming' },
          { code: 3, name: 'Coming' },
          { code: 4, name: 'Hanry Die' },
          { code: 5, name: 'John Doe' }
        ],
        limitMultiValue:[],
        openDirection:[
          { name: 'Alabama', code: '1' }
        ],
        imageValue: { title: 'Nature 1', img: 'c1.jpg' },
        imageOptions: [
          { title: 'Nature 1', img: 'c1.jpg' },
          { title: 'Nature 2', img: 'c2.jpg' },
          { title: 'Nature 3', img: 'c3.jpg' },
        ],
        outline_selected1:null,
        outline_options1:[
          { value: null, text:'Select One Value Only' },
          { value: 2, text:'Type 2' },
          { value: 3, text:'Type 3' },
          { value: 4, text:'Type 4' },
          { value: 5, text:'Type 5' },
          { value: 6, text:'Type 6' },
          { value: 7, text:'Type 7' },
          { value: 8, text:'Type 8' }
        ],

        outline_selected2:null,
        outline_options2:[
          { value: null, text:'Select One Value Only' },
          { value: 2, text:'Type 2' },
          { value: 3, text:'Type 3' },
          { value: 4, text:'Type 4' },
          { value: 5, text:'Type 5' },
          { value: 6, text:'Type 6' },
          { value: 7, text:'Type 7' },
          { value: 8, text:'Type 8' }
        ],

        outline_selected3:null,
        outline_options3:[
          { value: null, text:'Select One Value Only' },
          { value: 2, text:'Type 2' },
          { value: 3, text:'Type 3' },
          { value: 4, text:'Type 4' },
          { value: 5, text:'Type 5' },
          { value: 6, text:'Type 6' },
          { value: 7, text:'Type 7' },
          { value: 8, text:'Type 8' }
        ],

        outline_selected4:null,
        outline_options4:[
          { value: null, text:'Select One Value Only' },
          { value: 2, text:'Type 2' },
          { value: 3, text:'Type 3' },
          { value: 4, text:'Type 4' },
          { value: 5, text:'Type 5' },
          { value: 6, text:'Type 6' },
          { value: 7, text:'Type 7' },
          { value: 8, text:'Type 8' }
        ],

        outline_selected5:null,
        outline_options5:[
          { value: null, text:'Select One Value Only' },
          { value: 2, text:'Type 2' },
          { value: 3, text:'Type 3' },
          { value: 4, text:'Type 4' },
          { value: 5, text:'Type 5' },
          { value: 6, text:'Type 6' },
          { value: 7, text:'Type 7' },
          { value: 8, text:'Type 8' }
        ],

        outline_selected6:null,
        outline_options6:[
          { value: null, text:'Select One Value Only' },
          { value: 2, text:'Type 2' },
          { value: 3, text:'Type 3' },
          { value: 4, text:'Type 4' },
          { value: 5, text:'Type 5' },
          { value: 6, text:'Type 6' },
          { value: 7, text:'Type 7' },
          { value: 8, text:'Type 8' }
        ],

        outline_selected7:null,
        outline_options7:[
          { value: null, text:'Select One Value Only' },
          { value: 2, text:'Type 2' },
          { value: 3, text:'Type 3' },
          { value: 4, text:'Type 4' },
          { value: 5, text:'Type 5' },
          { value: 6, text:'Type 6' },
          { value: 7, text:'Type 7' },
          { value: 8, text:'Type 8' }
        ],

        outline_selected8:null,
        outline_options8:[
          { value: null, text:'Select One Value Only' },
          { value: 2, text:'Type 2' },
          { value: 3, text:'Type 3' },
          { value: 4, text:'Type 4' },
          { value: 5, text:'Type 5' },
          { value: 6, text:'Type 6' },
          { value: 7, text:'Type 7' },
          { value: 8, text:'Type 8' }
        ],

        outline_selected9:null,
        outline_options9:[
          { value: null, text:'Select One Value Only' },
          { value: 2, text:'Type 2' },
          { value: 3, text:'Type 3' },
          { value: 4, text:'Type 4' },
          { value: 5, text:'Type 5' },
          { value: 6, text:'Type 6' },
          { value: 7, text:'Type 7' },
          { value: 8, text:'Type 8' }
        ],

        outline_selected10:null,
        outline_options10:[
          { value: null, text:'Select One Value Only' },
          { value: 2, text:'Type 2' },
          { value: 3, text:'Type 3' },
          { value: 4, text:'Type 4' },
          { value: 5, text:'Type 5' },
          { value: 6, text:'Type 6' },
          { value: 7, text:'Type 7' },
          { value: 8, text:'Type 8' }
        ],

        outline_selected11:null,
        outline_options11:[
          { value: null, text:'Select One Value Only' },
          { value: 2, text:'Type 2' },
          { value: 3, text:'Type 3' },
          { value: 4, text:'Type 4' },
          { value: 5, text:'Type 5' },
          { value: 6, text:'Type 6' },
          { value: 7, text:'Type 7' },
          { value: 8, text:'Type 8' }
        ],

        outline_selected12:null,
        outline_options12:[
          { value: null, text:'Select One Value Only' },
          { value: 2, text:'Type 2' },
          { value: 3, text:'Type 3' },
          { value: 4, text:'Type 4' },
          { value: 5, text:'Type 5' },
          { value: 6, text:'Type 6' },
          { value: 7, text:'Type 7' },
          { value: 8, text:'Type 8' }
        ],

        outline_selected13:null,
        outline_options13:[
          { value: null, text:'Select One Value Only' },
          { value: 2, text:'Type 2' },
          { value: 3, text:'Type 3' },
          { value: 4, text:'Type 4' },
          { value: 5, text:'Type 5' },
          { value: 6, text:'Type 6' },
          { value: 7, text:'Type 7' },
          { value: 8, text:'Type 8' }
        ],

        outline_selected14:null,
        outline_options14:[
          { value: null, text:'Select One Value Only' },
          { value: 2, text:'Type 2' },
          { value: 3, text:'Type 3' },
          { value: 4, text:'Type 4' },
          { value: 5, text:'Type 5' },
          { value: 6, text:'Type 6' },
          { value: 7, text:'Type 7' },
          { value: 8, text:'Type 8' }
        ],

      };
    },
    methods: {
      addTag (newTag) {
        const tag = {
          name: newTag,
          code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
        };
        this.options.push(tag);
        this.value.push(tag);
      },
      getImgUrl(path) {
        return require('../../assets/images/' + path);
      }
    }
  };
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

