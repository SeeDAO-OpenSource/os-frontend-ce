<template>
  <div class="left-filter">
    <div class="card-body filter-cards-view animate-chk">
      <div class="product-filter">
        <h6 class="f-w-500">Category</h6>
        <div class="checkbox-animated mt-0">
          <label class="d-block" v-for="(product, index) in getCategory" :key="index">
            <input @change="appliedFilter(product.category)" :value="product.category" v-model="applyFilter" class="checkbox_animated" :id="product.category" type="checkbox" />{{
              product.category | capitalize
            }}
          </label>
        </div>
      </div>
      <div class="product-filter">
        <h6 class="f-w-500">Brand</h6>
        <div class="checkbox-animated mt-0">
          <label class="d-block" v-for="(brand, index) in getBrand" :key="index">
            <input @change="appliedFilter(brand)" class="checkbox_animated" :value="brand" v-model="applyFilter" :id="brand" type="checkbox" /> {{ brand | capitalize }}
          </label>
        </div>
      </div>
      <div class="product-filter slider-product">
        <h6 class="f-w-500">Colors</h6>
        <div class="checkbox-animated mt-0">
          <label class="d-block" v-for="(product, index) in getColors" :key="index">
            <input @change="appliedFilter(product.color)" class="checkbox_animated" :value="product.color" v-model="applyFilter" :id="product.color" type="checkbox" />
            <span :class="product.color" v-bind:style="{ 'background-color': product.color }"></span>
            {{ product.color | capitalize }}
          </label>
        </div>
      </div>
      <div class="product-filter pb-0">
        <h6 class="f-w-500">Price</h6>
        <vue-slider v-model="value" :min="0" :max="800" ref="slider" @change="sliderChange($refs.slider.getValue())"> </vue-slider>
      </div>
      <div class="product-filter new-products">
        <h6 class="f-w-500">New Products</h6>
        <swiper :options="swiperOption">
          <swiper-slide>
            <div class="product-box row" v-for="(product, index) in products.slice(0, 3)" :key="index">
              <div class="product-img col-md-6">
                <img class="img-fluid" :src="getImgUrl(product.images[0])" alt="" />
              </div>
              <div class="product-details col-md-6 text-left">
                <span>
                  <i class="fa fa-star font-warning mr-1"></i>
                  <i class="fa fa-star font-warning mr-1"></i>
                  <i class="fa fa-star font-warning mr-1"></i>
                  <i class="fa fa-star font-warning mr-1"></i>
                  <i class="fa fa-star font-warning"></i>
                </span>
                <router-link :to="'/ecommerce/details/' + product.sku">
                  <p class="mb-0">{{ product.name }}</p></router-link
                >
                <div class="product-price">{{ product.price | currency }}</div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide v-if="products.length >= 4">
            <div class="product-box row" v-for="(product, index) in products.slice(3, 6)" :key="index">
              <div class="product-img col-md-6">
                <img class="img-fluid" :src="getImgUrl(product.images[0])" alt="" />
              </div>
              <div class="product-details col-md-6 text-left">
                <span>
                  <i class="fa fa-star font-warning mr-1"></i>
                  <i class="fa fa-star font-warning mr-1"></i>
                  <i class="fa fa-star font-warning mr-1"></i>
                  <i class="fa fa-star font-warning mr-1"></i>
                  <i class="fa fa-star font-warning"></i>
                </span>
                <router-link :to="'/ecommerce/details/' + product.sku">
                  <p class="mb-0">{{ product.name }}</p></router-link
                >
                <div class="product-price">{{ product.price | currency }}</div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import VueSlider from "vue-slider-component";
import { mapGetters, mapState } from "vuex";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  components: {
    VueSlider,
    swiper,
    swiperSlide,
  },
  data() {
    return {
      filter: false,
      value: [0, 450],
      applyFilter: [],
      swiperOption: {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  computed: {
    ...mapState({
      products: (state) => state.products.products,
    }),
    ...mapGetters({
      getCategory: "products/getCategory",
      getBrand: "products/getBrands",
      getColors: "products/getColors",
    }),
  },
  mounted() {
    this.$emit("priceVal", this.value);
  },
  methods: {
    isActive(filterItem) {
      return this.applyFilter.indexOf(filterItem) > -1;
    },
    appliedFilter() {
      this.$emit("allFilters", this.applyFilter);
    },
    sliderChange(event) {
      this.$emit("priceVal", event);
    },
    getImgUrl(path) {
      return require("../../assets/images/" + path);
    },
  },
};
</script>
