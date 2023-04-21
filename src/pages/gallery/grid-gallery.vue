<template>
<div>
  <Breadcrumbs main="Gallery" title="Grid Gallery"/>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h5>IMAGE GALLERY</h5>
          </div>
          <div class="card-body my-gallery gallery">
            <div class="row" itemscope itemprop="thumbnail">
              <figure
                class="col-xl-3 col-sm-6 m-0"
                v-for="(n,index) in lightgallery"
                :key="index"
                @click="gindex = index"
              >
                <a>
                  <img :src="getpath(n.image)" class="img-thumbnail" alt="Image description" />
                </a>
              </figure>
              <VueGallery
                :images="biglightgallery"
                :index="gindex"
                @close="gindex = null"
                :options="galleryoptions"
              ></VueGallery>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import VueGallery from 'vue-gallery';

  export default {
    components: {
      VueGallery
    },
    data() {
      return {
        gindex: null,
        lightgallery: [
          {
            image: '013.jpg'
          },
          {
            image: '014.jpg'
          },
          {
            image: '015.jpg'
          },
          {
            image: '016.jpg'
          },
          {
            image: '012.jpg'
          },
          {
            image: '01.jpg'
          },
          {
            image: '02.jpg'
          },
          {
            image: '03.jpg'
          },
          {
            image: '04.jpg'
          },
          {
            image: '05.jpg'
          },
          {
            image: '06.jpg'
          },
          {
            image: '07.jpg'
          }
        ],
        biglightgallery: [
          '013.jpg',
          '014.jpg',
          '015.jpg',
          '016.jpg',
          '012.jpg',
          '01.jpg',
          '02.jpg',
          '03.jpg',
          '04.jpg',
          '05.jpg',
          '06.jpg',
          '07.jpg'
        ],
        galleryoptions: {
          prevClass: 'prev',
          nextClass: 'next'
        }
      };
    },
    mounted() {
      this.setimagesparth();
    },
    methods: {
      setimagesparth() {
        for (var i = 0; i < this.biglightgallery.length; i++) {
          this.biglightgallery[i] = this.getbigimgpath(this.biglightgallery[i]);
        }
      },
      getpath(filename) {
        return require('@/assets/images/big-lightgallry/' + filename);
      },
      getbigimgpath(filename) {
        return require('@/assets/images/big-lightgallry/' + filename);
      }
    }
  };
</script>