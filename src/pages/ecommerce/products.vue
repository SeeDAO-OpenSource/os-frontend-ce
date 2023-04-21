<template>
  <div>
    <Breadcrumbs main="Ecommerce" title="Product" />
    <!-- Container-fluid starts-->
    <div
      :class="filtered ? 'container-fluid product-wrapper sidebaron' : 'container-fluid product-wrapper'"
    >
      <div class="product-grid">
        <div class="feature-products">
          <div class="row">
            <div class="col-md-6 products-total">
              <div class="square-product-setting d-inline-block">
                <a class="icon-grid grid-layout-view" @click="gridView()">
                  <feather type="grid"></feather>
                </a>
              </div>
              <div class="square-product-setting d-inline-block">
                <a class="icon-grid m-0 list-layout-view" @click="listView()">
                  <feather type="list"></feather>
                </a>
              </div>
              <span class="d-none-productlist filter-toggle" @click="collapseFilter()">
                <h6>
                  Filters
                  <span class="ml-2">
                    <feather type="chevron-down" class="middle"></feather>
                  </span>
                </h6>
              </span>
              <div class="grid-options d-inline-block">
                <ul>
                  <li @click="grid2()">
                    <a class="product-2-layout-view">
                      <span class="line-grid line-grid-1 bg-primary"></span>
                      <span class="line-grid line-grid-2 bg-primary"></span>
                    </a>
                  </li>
                  <li @click="grid3()">
                    <a href="#" class="product-3-layout-view">
                      <span class="line-grid line-grid-3 bg-primary"></span>
                      <span class="line-grid line-grid-4 bg-primary"></span>
                      <span class="line-grid line-grid-5 bg-primary"></span>
                    </a>
                  </li>
                  <li @click="grid4()">
                    <a href="#" class="product-4-layout-view">
                      <span class="line-grid line-grid-6 bg-primary"></span>
                      <span class="line-grid line-grid-7 bg-primary"></span>
                      <span class="line-grid line-grid-8 bg-primary"></span>
                      <span class="line-grid line-grid-9 bg-primary"></span>
                    </a>
                  </li>
                  <!-- <li @click="grid6()">
                    <a href="#" class="product-6-layout-view">
                      <span class="line-grid line-grid-10 bg-primary"></span>
                      <span class="line-grid line-grid-11 bg-primary"></span>
                      <span class="line-grid line-grid-12 bg-primary"></span>
                      <span class="line-grid line-grid-13 bg-primary"></span>
                      <span class="line-grid line-grid-14 bg-primary"></span>
                      <span class="line-grid line-grid-15 bg-primary"></span>
                    </a>
                  </li> -->
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="pull-right text-right">
                <span class="f-w-500 mr-2">Showing Products 1 - {{filterProduct.length}} Results</span>
                <div class="select2-drpdwn-product select-options d-inline-block">
                  <select
                    class="form-control btn-square"
                    name="select"
                    @change="onChangeSort($event)"
                  >
                                  <option>Order Product By</option>
                                  <option value="a-z">Alphabetically, A-Z</option>
                                  <option value="z-a">Alphabetically, Z-A</option>
                                  <option value="low">price, low to high</option>
                                  <option value="high">price, high to low</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-3">
              <div class="product-sidebar" :class="filtered?'open':''">
                <div class="filter-section">
                  <div class="card">
                    <div class="card-header">
                      <h6 class="mb-0 f-w-600">
                        Filters
                        <span class="pull-right" @click="collapseFilter()">
                          <i class="fa fa-chevron-down toggle-data"></i>
                        </span>
                      </h6>
                    </div>
                    <Slider @allFilters="allfilter" @priceVal="pricefilterArray" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-9 col-sm-12">
              <form>
                <div class="form-group m-0">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Search.."
                  />
                  <i class="fa fa-search"></i>
                </div>
              </form>
              <div class="col-sm-12">
                <div v-if="filterProduct.length == 0">
                  <div class="search-not-found text-center">
                    <!-- <img src="../../assets/images/empty-search.jpg" alt class="second-search" /> -->
                    <p>Sorry, We didn't find any results matching this search</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="product-wrapper-grid" :class="listViewEnable?'list-view':''">
          <div class="row">
            <div
              :class="[col2 ? 'col-md-6': col3 ? 'col-lg-4 col-md-6' : col4 ? 'col-xl-3 col-md-6' : 
                          col6 ? 'col-xl-2 col-lg-4 col-md-6' : list ? 'col-xl-12' : 'col-xl-3 col-md-6']"
              v-for="(product,index) in filterProduct"
              :key="index"
            >
              <div class="card">
                <div class="product-box">
                  <div class="product-img">
                    <div class="ribbon ribbon-danger" v-if="product.sale">Sale</div>
                    <img class="img-fluid" :src="getImgUrl(product.images[0])" alt />
                    <div class="product-hover">
                      <ul>
                        <router-link :to="'/ecommerce/cart'">
                          <li @click="addToCart(product)">
                            <button class="btn" type="button">
                              <i class="icon-shopping-cart"></i>
                            </button>
                          </li>
                        </router-link>
                        <li>
                          <button
                            class="btn"
                            @click="quickView(product)"
                            type="button"
                            data-toggle="modal"
                            data-target="#exampleModalCenter"
                          >
                            <i class="icon-eye"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="product-details">
                    <div class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>
                    <router-link :to="'/ecommerce/details/'+product.sku">
                      <h4>{{product.name}}</h4>
                    </router-link>
                    <p>{{product.shortDescription}}</p>
                    <div class="product-price">
                      {{product.price | currency}}
                      <del>{{product.salePrice | currency}}</del>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- QuickView Modal -->
    <b-modal size="lg" centered v-model="modalShow" hide-footer hide-header>
      <button class="close" type="button" v-on:click="quickViewClose(modalShow)">
        <span>×</span>
      </button>
      <div class="product-box quickview row">
        <div class="product-img col-lg-6">
           <img class="img-fluid" :src="getImgUrl(modalShow?quickViewProduct.images[0]:'ecommerce/11.jpg')" alt="">
        </div>
        <div class="product-details col-lg-6 text-left">
          <h4>{{quickViewProduct.name}}</h4>
          <div class="product-price">
            {{quickViewProduct.price | currency }}
            <del>{{quickViewProduct.salePrice | currency }}</del>
          </div>
          <div class="product-view">
            <h6 class="f-w-600">Product Details</h6>
            <p class="mb-0">
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam eaque ipsa, quae ab illo.
            </p>
          </div>
          <div class="product-size">
            <ul>
              <li>
                <button class="btn btn-outline-light" type="button">M</button>
              </li>
              <li>
                <button class="btn btn-outline-light" type="button">L</button>
              </li>
              <li>
                <button class="btn btn-outline-light" type="button">Xl</button>
              </li>
            </ul>
          </div>
          <div class="product-qnty">
            <h6 class="f-w-600">Quantity</h6>
            <div class="qty-box1">
              <div class="input-group">
                <i class="fa fa-minus btnGtr1" @click="decrement()"></i>
                <input class="touchspin1 text-center" v-model="counter" name="quantity" type="text" />
                <i class="fa fa-plus btnLess1" @click="increment()"></i>
              </div>
            </div>
            <div class="addcart-btn mt-3">
              <router-link :to="'/ecommerce/cart'">
                <button
                  class="btn btn-primary m-r-10"
                  type="button"
                  data-original-title="btn btn-info-gradien"
                  title
                  @click="addToCart(quickViewProduct,counter)"
                >Add To Cart</button>
              </router-link>
              <router-link
                :to="'/ecommerce/checkout'"
                class="btn btn-primary cart-btn-transform"
              >Buy Now</router-link>
            </div>
          </div>
        </div>
      </div>
    </b-modal>

  </div>
</template>
  <script>
  import { mapGetters } from 'vuex';
  import Slider from './filterbar';
  
  export default {
    name: 'Product',
    components: {
      Slider
    },
    data() {
      return {
        modalShow: false,
        quickViewProduct: [],
        counter: 1,
        priceArray: [],
        allfilters: [],
        items: [],
        filtered: false,
        col2: false,
        col3: false,
        col4: true,
        col6: false,
        listViewEnable: false,
        list: false
      };
    },
    computed: {
      ...mapGetters({
        filterProduct: 'products/filterProducts',
        tags: 'products/setTags'
      }),
    },
    methods: {

      //For getting image path
      getImgUrl(path) {
        return require('../../assets/images/' + path);
      },

      // For Order By  
      onChangeSort(event) {
        this.$store.dispatch('products/sortProducts', event.target.value);
      },

      //Filter by Category, Brand, Color
      allfilter(selectedVal) {
        this.allfilters = selectedVal;
        this.$store.dispatch('products/setTags', selectedVal);
      },

      collapseFilter() {
        this.filtered = !this.filtered;
      },

      //Price Filter
      pricefilterArray(item) {
        this.$store.dispatch('products/priceFilter', item);
      },
    
      //Add to cart
      addToCart: function(product, qty) {
        product.quantity = qty ? qty : 1;
        this.$store.dispatch('products/addToCart', product);
      },

      //Quick View
      quickView: function(product) {
        this.modalShow = true;
        return (this.quickViewProduct = product);
      },
      quickViewClose: function() {
        this.modalShow = false;
      },

      //Quantity increment Decrement
      increment() {
        if (this.counter < this.quickViewProduct.stock) this.counter++;
      },

      decrement() {
        if (this.counter > 1) this.counter--;
      },

      //Grid changes
      grid2() {
        this.col2 = true;
        this.col3 = false;
        this.col4 = false;
        this.col6 = false;
        this.listViewEnable = false;
      },
      grid3() {
        this.col2 = false;
        this.col3 = true;
        this.col4 = false;
        this.col6 = false;
        this.listViewEnable = false;
      },
      grid4() {
        this.col2 = false;
        this.col3 = false;
        this.col4 = true;
        this.col6 = false;
        this.listViewEnable = false;
      },
      grid6() {
        this.col2 = false;
        this.col3 = false;
        this.col4 = false;
        this.col6 = true;
        this.listViewEnable = false;
      },
      listView() {
        this.listViewEnable = true;
        this.list = true;
        this.col2 = false;
        this.col3 = false;
        this.col4 = false;
        this.col6 = false;
      },
      gridView() {
        this.listViewEnable = false;
        this.col4 = true;
      }
    }
  };
</script>
