<template>
  <div>
    <Breadcrumbs main="Gallery" title="Hover Effect"/>
     <!-- Container-fluid starts-->
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Hover Effect <span class="digits">1</span></h5>
                  </div>
                  <div class="card-body">
                    <div class="row my-gallery gallery" id="aniimated-thumbnials" itemscope="">
                      <figure class="col-md-3 col-6 m-0"  
                              v-for="(n,index) in gallery1"  :key="index" 
                              itemprop="associatedMedia" itemscope="">
                          <div class="img-hover hover-1 o-hidden">
                              <img :src="getpath(n)" itemprop="thumbnail" alt="Image description"></div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Hover Effect <span class="digits">2</span></h5>
                  </div>
                  <div class="card-body">
                      <div class="row my-gallery gallery" id="aniimated-thumbnials" itemscope="">
                      <figure class="col-md-3 col-6 m-0"  
                              v-for="(n,index) in gallery1"  :key="index" 
                              itemprop="associatedMedia" itemscope="">
                          <div class="img-hover hover-2 o-hidden">
                              <img :src="getpath(n)" itemprop="thumbnail" alt="Image description"></div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Hover Effect <span class="digits">3</span></h5>
                  </div>
                  <div class="card-body">
                     <div class="row my-gallery gallery" id="aniimated-thumbnials" itemscope="">
                      <figure class="col-md-3 col-6 m-0"  
                              v-for="(n,index) in gallery1"  :key="index" 
                              itemprop="associatedMedia" itemscope="">
                          <div class="img-hover hover-3 o-hidden">
                              <img :src="getpath(n)" itemprop="thumbnail" alt="Image description"></div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Hover Effect <span class="digits">4</span></h5>
                  </div>
                  <div class="card-body">
                   <div class="row my-gallery gallery" id="aniimated-thumbnials" itemscope="">
                      <figure class="col-md-3 col-6 m-0"  
                              v-for="(n,index) in gallery1"  :key="index" 
                              itemprop="associatedMedia" itemscope="">
                          <div class="img-hover hover-4 o-hidden">
                              <img :src="getpath(n)" itemprop="thumbnail" alt="Image description"></div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Hover Effect <span class="digits">5</span></h5>
                  </div>
                  <div class="card-body">
                   <div class="row my-gallery gallery" id="aniimated-thumbnials" itemscope="">
                      <figure class="col-md-3 col-6 m-0"  
                              v-for="(n,index) in gallery1"  :key="index" 
                              itemprop="associatedMedia" itemscope="">
                          <div class="img-hover hover-5 o-hidden">
                              <img :src="getpath(n)" itemprop="thumbnail" alt="Image description"></div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Hover Effect <span class="digits">6</span></h5>
                  </div>
                  <div class="card-body">
                   <div class="row my-gallery gallery" id="aniimated-thumbnials" itemscope="">
                      <figure class="col-md-3 col-6 m-0"  
                              v-for="(n,index) in gallery1"  :key="index" 
                              itemprop="associatedMedia" itemscope="">
                          <div class="img-hover hover-6 o-hidden">
                              <img :src="getpath(n)" itemprop="thumbnail" alt="Image description"></div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Hover Effect <span class="digits">7</span></h5>
                  </div>
                  <div class="card-body">
                   <div class="row my-gallery gallery" id="aniimated-thumbnials" itemscope="">
                      <figure class="col-md-3 col-6 m-0"  
                              v-for="(n,index) in gallery1"  :key="index" 
                              itemprop="associatedMedia" itemscope="">
                          <div class="img-hover hover-7 o-hidden">
                              <img :src="getpath(n)" itemprop="thumbnail" alt="Image description"></div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Hover Effect <span class="digits">8</span></h5>
                  </div>
                  <div class="card-body">
                    <div class="row my-gallery gallery" id="aniimated-thumbnials" itemscope="">
                      <figure class="col-md-3 col-6 m-0"  
                              v-for="(n,index) in gallery1"  :key="index" 
                              itemprop="associatedMedia" itemscope="">
                          <div class="img-hover hover-8 o-hidden">
                              <img :src="getpath(n)" itemprop="thumbnail" alt="Image description"></div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Hover Effect <span class="digits">9</span></h5>
                  </div>
                  <div class="card-body">
                    <div class="row my-gallery gallery" id="aniimated-thumbnials" itemscope="">
                      <figure class="col-md-3 col-6 m-0"  
                              v-for="(n,index) in gallery1"  :key="index" 
                              itemprop="associatedMedia" itemscope="">
                          <div class="img-hover hover-9 o-hidden">
                              <img :src="getpath(n)" itemprop="thumbnail" alt="Image description"></div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Hover Effect <span class="digits">10</span></h5>
                  </div>
                  <div class="card-body">
                  <div class="row my-gallery gallery" id="aniimated-thumbnials" itemscope="">
                      <figure class="col-md-3 col-6 m-0"  
                              v-for="(n,index) in gallery1"  :key="index" 
                              itemprop="associatedMedia" itemscope="">
                          <div class="img-hover hover-10 o-hidden">
                              <img :src="getpath(n)" itemprop="thumbnail" alt="Image description"></div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Hover Effect <span class="digits">11</span></h5>
                  </div>
                  <div class="card-body">
            <div class="row my-gallery gallery" id="aniimated-thumbnials" itemscope="">
                      <figure class="col-md-3 col-6 m-0"  
                              v-for="(n,index) in gallery1"  :key="index" 
                              itemprop="associatedMedia" itemscope="">
                          <div class="img-hover hover-11 o-hidden">
                              <img :src="getpath(n)" itemprop="thumbnail" alt="Image description"></div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Hover Effect <span class="digits">12</span></h5>
                  </div>
                  <div class="card-body">
           <div class="row my-gallery gallery" id="aniimated-thumbnials" itemscope="">
                      <figure class="col-md-3 col-6 6 m-0"  
                              v-for="(n,index) in gallery1"  :key="index" 
                              itemprop="associatedMedia" itemscope="">
                          <div class="img-hover hover-12 o-hidden">
                              <img :src="getpath(n)" itemprop="thumbnail" alt="Image description"></div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Hover Effect <span class="digits">13</span></h5>
                  </div>
                  <div class="card-body">
                  <div class="row my-gallery gallery" id="aniimated-thumbnials" itemscope="">
                      <figure class="col-md-3 col-6 m-0"  
                              v-for="(n,index) in gallery1"  :key="index" 
                              itemprop="associatedMedia" itemscope="">
                          <div class="img-hover hover-13 o-hidden">
                              <img :src="getpath(n)" itemprop="thumbnail" alt="Image description"></div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Hover Effect <span class="digits">14</span></h5>
                  </div>
                  <div class="card-body">
                 <div class="row my-gallery gallery" id="aniimated-thumbnials" itemscope="">
                      <figure class="col-md-3 col-6 m-0"  
                              v-for="(n,index) in gallery1"  :key="index" 
                              itemprop="associatedMedia" itemscope="">
                          <div class="img-hover hover-14 o-hidden">
                              <img :src="getpath(n)" itemprop="thumbnail" alt="Image description"></div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Hover Effect <span class="digits">15</span></h5>
                  </div>
                  <div class="card-body">
                     <div class="row my-gallery gallery" id="aniimated-thumbnials" itemscope="">
                      <figure class="col-md-3 col-6 m-0"  
                              v-for="(n,index) in gallery1"  :key="index" 
                              itemprop="associatedMedia" itemscope="">
                          <div class="img-hover hover-15 o-hidden">
                              <img :src="getpath(n)" itemprop="thumbnail" alt="Image description"></div>
                      </figure>
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
  export default {
    data(){
      return {
        gallery1: [
          '08.jpg',
          '09.jpg',
          '010.jpg',
          '011.jpg'
        ],
      };
    },
    methods:{
      getpath(filename) {
        return require('@/assets/images/lightgallry/' + filename);
      }
    }
     
  };
</script>