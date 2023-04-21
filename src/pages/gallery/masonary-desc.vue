<template>
  <div>
    <Breadcrumbs main="Gallery" title="Masonry Gallery Desc"/>
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header">
              <h5>MASONRY GALLERY WITH DESCRIPTION</h5>
            </div>
            <div class="card-body photoswipe-pb-responsive">
                <div
                  v-masonry
                  transition-duration="3s"
                  item-selector=".item"
                  class="masonry-container isotopeContainer row desc-masonry my-gallery gallery-with-description"
                >
                  <div
                    v-masonry-tile
                    class=" grid-item col-xl-3 col-sm-6 isotopeSelector item"
                    :key="index"
                    v-for="(item, index) in imagearray"
                  >
                    <img :src="item.imagepath" class="img-fluid" />
                    <div class="caption">
                      <h4>Portfolio Title</h4>
                      <p>Here is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                    </div>
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
  export default {
    data() {
      return {
        imagearray: [
          {
            imagepath: require('@/assets/images/masonry/1.jpg')
          },
          {
            imagepath: require('@/assets/images/masonry/2.jpg')
          },
          {
            imagepath: require('@/assets/images/masonry/3.jpg')
          },
          {
            imagepath: require('@/assets/images/masonry/4.jpg')
          },
          {
            imagepath: require('@/assets/images/masonry/5.jpg')
          },
          {
            imagepath: require('@/assets/images/masonry/6.jpg')
          },
          {
            imagepath: require('@/assets/images/masonry/7.jpg')
          },
          {
            imagepath: require('@/assets/images/masonry/8.jpg')
          },
          {
            imagepath: require('@/assets/images/masonry/9.jpg')
          },
          {
            imagepath: require('@/assets/images/masonry/10.jpg')
          },
          {
            imagepath: require('@/assets/images/masonry/11.jpg')
          },
          {
            imagepath: require('@/assets/images/masonry/12.jpg')
          },
          {
            imagepath: require('@/assets/images/masonry/14.jpg')
          },  
          {
            imagepath: require('@/assets/images/masonry/15.jpg')
          },
          {
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