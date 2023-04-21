<template>
  <div>
    <Breadcrumbs main="Gallery" title="Grid Gallery With Description" />
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header">
              <h5>IMAGE GALLERY</h5>
            </div>
            <div class="card-body my-gallery gallery gallery-with-description">
              <div class="row" itemscope itemprop="thumbnail">
                <figure
                  class="col-xl-3 col-sm-6 m-0"
                  v-for="(n,index) in lightgallery"
                  :key="index"
                  @click="gindex = index"
                >
                  <a>
                    <img :src="getpath(n.image)" class="img-thumbnail" alt="Image description" />
                    <div class="caption">
                      <h4 v-text="n.title"></h4>
                      <p v-text="n.description"></p>
                    </div>
                  </a>
                </figure>
                <VueGallery
                  :images="biglightgallery"
                  :index="gindex"
                  @close="gindex = null"
                  :options="galleryoptions"
                >
                </VueGallery>
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
            image: '01.jpg',
            title: 'Portfolio Title',
            description:
              'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.'
          },
          {
            image: '02.jpg',
            title: 'Portfolio Title',
            description:
              'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.'
          },
          {
            image: '03.jpg',
            title: 'Portfolio Title',
            description:
              'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.'
          },
          {
            image: '04.jpg',
            title: 'Portfolio Title',
            description:
              'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.'
          },
          {
            image: '05.jpg',
            title: 'Portfolio Title',
            description:
              'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.'
          },
          {
            image: '06.jpg',
            title: 'Portfolio Title',
            description:
              'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.'
          },
          {
            image: '07.jpg',
            title: 'Portfolio Title',
            description:
              'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.'
          },
          {
            image: '08.jpg',
            title: 'Portfolio Title',
            description:
              'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.'
          }
        ],
        biglightgallery: [
          '01.jpg',
          '02.jpg',
          '03.jpg',
          '04.jpg',
          '05.jpg',
          '06.jpg',
          '07.jpg',
          '08.jpg'
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