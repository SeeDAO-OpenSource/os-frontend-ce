<template>
  <div>
    <Breadcrumbs main="Ecommerce" title="Product Details" />
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div>
        <div class="row product-page-main p-0">
          <div class="col-xl-4 xl-cs-65 box-col-12">
            <div class="card">
              <div class="card-body">
                <div class="product-slider" id="sync1">
                  <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide v-for="(product, index) in products.images" :key="index">
                      <img :src="getImgUrl(product)" :id="index" class="img-fluid bg-img" alt="index" />
                    </swiper-slide>
                  </swiper>
                </div>
                <div class="slider-nav-images mt-2" id="sync2">
                  <swiper :options="swiperOption1">
                    <swiper-slide v-for="(product, index) in products.images" :key="index">
                      <img :src="getImgUrl(product)" :id="index" class="img-fluid bg-img" alt="index" v-on:click="slideTo(index)" />
                    </swiper-slide>
                  </swiper>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-5 xl-100 box-col-6">
            <div class="card">
              <div class="card-body">
                <div class="product-page-details">
                  <h3>{{ products.name }}</h3>
                </div>
                <div class="product-price">
                  {{ products.price | currency }}
                  <del>{{ products.salePrice | currency }} </del>
                </div>
                <ul class="product-color m-t-15">
                  <li class="bg-primary"></li>
                  <li class="bg-secondary"></li>
                  <li class="bg-success"></li>
                  <li class="bg-info"></li>
                  <li class="bg-warning"></li>
                </ul>
                <hr />
                <p>{{ products.description }}</p>
                <hr />
                <div>
                  <table class="product-page-width">
                    <tbody>
                      <tr>
                        <td><b>Brand &nbsp;&nbsp;&nbsp;:</b></td>
                        <td>Pixelstrap</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Availability &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b>
                        </td>
                        <td class="txt-success in-stock">In stock</td>
                        <td class="txt-danger out-of-stock" style="display: none"> Out Of stock </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Seller &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b>
                        </td>
                        <td>ABC</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Fabric &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b>
                        </td>
                        <td>Cotton</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <hr />
                <div class="row">
                  <div class="col-md-6">
                    <h6 class="product-title">share it</h6>
                  </div>
                  <div class="col-md-6">
                    <div class="product-icon">
                      <ul class="product-social">
                        <li class="d-inline-block">
                          <a href="#"><i class="fa fa-facebook"></i></a>
                        </li>
                        <li class="d-inline-block">
                          <a href="#"><i class="fa fa-google-plus"></i></a>
                        </li>
                        <li class="d-inline-block">
                          <a href="#"><i class="fa fa-twitter"></i></a>
                        </li>
                        <li class="d-inline-block">
                          <a href="#"><i class="fa fa-instagram"></i></a>
                        </li>
                        <li class="d-inline-block">
                          <a href="#"><i class="fa fa-rss"></i></a>
                        </li>
                      </ul>
                      <form class="d-inline-block f-right"></form>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-md-6">
                    <h6 class="product-title">Rate Now:</h6>
                  </div>
                  <div class="col-md-6">
                    <div class="d-flex">
                      <heart-rating v-model="heartrating.rating" :show-rating="false" :item-size="10" :spacing="3" :max-rating="5"></heart-rating>
                      <span>(250 review)</span>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="m-t-15">
                  <router-link :to="'/ecommerce/cart'">
                    <button v-if="!Object.keys(this.cartDate).length" class="btn btn-primary m-r-10" type="button" @click="addToCart(products)">
                      <i class="fa fa-shopping-basket mr-1"></i>Add To Cart
                    </button>
                    <button v-if="Object.keys(this.cartDate).length" class="btn btn-primary m-r-10" type="button"> <i class="fa fa-shopping-basket mr-1"></i> Go To Cart </button>
                  </router-link>
                  <router-link :to="'/ecommerce/checkout'" class="btn btn-success m-r-10 cart-btn-transform"><i class="fa fa-shopping-cart mr-1"></i> Buy Now</router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 xl-cs-35 box-col-6">
            <div class="card">
              <div class="card-body">
                <!-- side-bar colleps block stat-->
                <div class="filter-block">
                  <h4>Brand</h4>
                  <ul>
                    <li>Clothing</li>
                    <li>Bags</li>
                    <li>Footwear</li>
                    <li>Watches</li>
                    <li>ACCESSORIES</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <div class="collection-filter-block">
                  <ul>
                    <li>
                      <div class="media">
                        <feather type="truck"></feather>
                        <div class="media-body">
                          <h5>Free Shipping</h5>
                          <p>Free Shipping World Wide</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="media">
                        <feather type="clock"></feather>
                        <div class="media-body">
                          <h5>24 X 7 Service</h5>
                          <p>Online Service For New Customer</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="media">
                        <feather type="gift"></feather>
                        <div class="media-body">
                          <h5>Festival Offer</h5>
                          <p>New Online Special Festival</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="media">
                        <feather type="credit-card"></feather>
                        <div class="media-body">
                          <h5>Online Payment</h5>
                          <p>Contrary To Popular Belief.</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- silde-bar colleps block end here-->
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="row product-page-main">
          <div class="col-sm-12">
            <ul class="nav nav-tabs border-tab mb-0" id="top-tab" role="tablist">
              <li class="nav-item" @click="tabContent('fabric')">
                <a class="nav-link" id="top-home-tab" data-toggle="tab" role="tab" aria-controls="top-home" aria-selected="false" :class="[{ active: activeTab == 'fabric' }]">Fabric</a>
                <div class="material-border"></div>
              </li>
              <li class="nav-item" @click="tabContent('video')">
                <a class="nav-link" id="profile-top-tab" data-toggle="tab" role="tab" aria-controls="top-profile" aria-selected="false" :class="[{ active: activeTab == 'video' }]">Video</a>
                <div class="material-border"></div>
              </li>
              <li class="nav-item" @click="tabContent('details')">
                <a class="nav-link" id="contact-top-tab" data-toggle="tab" role="tab" aria-controls="top-contact" aria-selected="true" :class="[{ active: activeTab == 'details' }]">Details</a>
                <div class="material-border"></div>
              </li>
              <li class="nav-item" @click="tabContent('brand')">
                <a class="nav-link" id="brand-top-tab" data-toggle="tab" role="tab" aria-controls="top-brand" aria-selected="true" :class="[{ active: activeTab == 'brand' }]">Brand</a>
                <div class="material-border"></div>
              </li>
            </ul>
            <div class="tab-content" id="top-tabContent">
              <div class="tab-pane fade" :class="{ 'show active': activeTab == 'fabric' }" id="top-home" role="tabpanel" aria-labelledby="top-home-tab">
                <p class="mb-0 m-t-20">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
                </p>
                <p class="mb-0 m-t-20">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
              </div>
              <div class="tab-pane fade" :class="{ 'show active': activeTab == 'video' }" id="top-profile" role="tabpanel" aria-labelledby="profile-top-tab">
                <p class="mb-0 m-t-20">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                  PageMaker including versions of Lorem Ipsum Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                  it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </div>
              <div class="tab-pane fade" id="top-contact" role="tabpanel" :class="{ 'show active': activeTab == 'details' }" aria-labelledby="contact-top-tab">
                <p class="mb-0 m-t-20">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                  PageMaker including versions of Lorem Ipsum
                </p>
              </div>
              <div class="tab-pane fade" id="top-brand" role="tabpanel" :class="{ 'show active': activeTab == 'brand' }" aria-labelledby="brand-top-tab">
                <p class="mb-0 m-t-20">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                  PageMaker including versions of Lorem Ipsum
                </p>

                <p class="mb-0 m-t-20">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                  PageMaker including versions of Lorem Ipsum
                </p>
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
import { mapState } from "vuex";
import { HeartRating } from "vue-rate-it";
import router from "@/router";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  name: "ProductDetails",
  components: {
    HeartRating,
    swiper,
    swiperSlide,
  },
  data() {
    return {
      heartrating: {
        rating: 3,
      },
      counter: 1,
      modalShow: false,
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 1,
        freeMode: true,
      },
      swiperOption1: {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        centeredSlides: false,
      },
      activeTab: "fabric",
    };
  },
  computed: {
    ...mapState({
      cartDate: (state) =>
        state.products.cart.find((item) => {
          if (parseInt(router.currentRoute.params.id) === item.sku) return item;
        }) || [],
      products: (state) =>
        state.products.products.find((item) => {
          if (parseInt(router.currentRoute.params.id) === item.sku) return item;
        }),
    }),
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {},
  methods: {
    getImgUrl(path) {
      return require("../../assets/images/" + path);
    },
    slideTo(id) {
      this.swiper.slideTo(id, 1000, false);
    },
    //Add to cart
    addToCart: function (product, qty) {
      product.quantity = qty ? qty : 1;
      this.$store.dispatch("products/addToCart", product);
    },
    increment() {
      if (this.counter < this.quickViewProduct.stock) this.counter++;
    },
    decrement() {
      if (this.counter > 1) this.counter--;
    },
    // Detail Tab
    tabContent(val) {
      this.activeTab = val;
    },
  },
};
</script>
