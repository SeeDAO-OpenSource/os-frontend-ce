<template>
  <div>
    <Breadcrumbs main="Gallery" title="Masonry Gallery"/>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header">
              <h5>MASONRY GALLERY</h5>
            </div>
            <div class="card-body photoswipe-pb-responsive" itemprop="associatedMedia" itemscope>
              <div
                v-masonry
                transition-duration="3s"
                item-selector=".item"
                class="masonry-container isotopeContainer row my-gallery"
              >
                <div
                  v-masonry-tile
                  class="col-sm-3 isotopeSelector item"
                  :key="index"
                  v-for="(item, index) in imagearray"
                >
                  <img :src="item.imagepath" class="img-fluid" />
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
    data() {
      return {
        imagearray: [
          {
            id: 1,
            title: 'Slim Fit Cotton Shirt',
            alt: 'established',
            filter: 'fashion',
            imagepath: require('@/assets/images/masonry/1.jpg')
          },
          {
            id: 2,
            title: 'trim dress',
            alt: 'readable',
            filter: 'shoes',
            imagepath: require('@/assets/images/masonry/2.jpg')
          },
          {
            id: 3,
            title: 'trim dress',
            alt: 'readable',
            filter: 'shoes',
            imagepath: require('@/assets/images/masonry/3.jpg')
          },
          {
            id: 4,
            title: 'trim dress',
            alt: 'readable',
            filter: 'bags',
            imagepath: require('@/assets/images/masonry/4.jpg')
          },
          {
            id: 5,
            title: 'trim dress',
            alt: 'readable',
            filter: 'bags',
            imagepath: require('@/assets/images/masonry/5.jpg')
          },
          {
            id: 6,
            title: 'trim dress',
            alt: 'readable',
            filter: 'bags',
            imagepath: require('@/assets/images/masonry/6.jpg')
          },
          {
            id: 7,
            title: 'trim dress',
            alt: 'readable',
            filter: 'bags',
            imagepath: require('@/assets/images/masonry/8.jpg')
          },
          {
            id: 8,
            title: 'trim dress',
            alt: 'readable',
            filter: 'watch',
            imagepath: require('@/assets/images/masonry/9.jpg')
          },
          {
            id: 9,
            title: 'trim dress',
            alt: 'readable',
            filter: 'watch',
            imagepath: require('@/assets/images/masonry/10.jpg')
          },
          {
            id: 10,
            title: 'trim dress',
            alt: 'readable',
            filter: 'watch',
            imagepath: require('@/assets/images/masonry/11.jpg')
          },
          {
            id: 11,
            title: 'trim dress',
            alt: 'readable',
            filter: 'watch',
            imagepath: require('@/assets/images/masonry/12.jpg')
          },
          {
            id: 12,
            title: 'trim dress',
            alt: 'readable',
            filter: 'watch',
            imagepath: require('@/assets/images/masonry/14.jpg')
          },
          {
            id: 13,
            title: 'trim dress',
            alt: 'readable',
            filter: 'watch',
            imagepath: require('@/assets/images/masonry/15.jpg')
          },
          {
            id: 14,
            title: 'trim dress',
            alt: 'readable',
            filter: 'watch',
            imagepath: require('@/assets/images/masonry/13.jpg')
          }
        ]
      };
    },
    mounted() {
      if (typeof this.$redrawVueMasonry === 'function') {
        this.$redrawVueMasonry();
      }
    }
  };
</script>