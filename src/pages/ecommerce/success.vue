<template>
  <div>
    <Breadcrumbs main="Ecommerce" :title="order.length?'Suceess':'Forbidden'" />
    <!-- Container-fluid starts-->
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-body">
              <div class="invoice" v-if="order.length">
                <div>
                  <div>
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="success-text">
                          <i class="fa fa-check-circle" aria-hidden="true"></i>
                          <h2>Thank you</h2>
                          <p>Payment is has been received Order Placed Successfully</p>
                          <p>Transaction ID:{{order.token}}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <!-- End InvoiceTop-->
                  <div>
                    <div class="order-history success-table table-responsive">
                      <table class="table table-bordernone">
                        <thead>
                          <tr>
                            <th scope="col">Prdouct</th>
                            <th scope="col">Prdouct Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Sub Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item,index) in order.product" :key="index">
                            <td>
                              <img
                                class="img-fluid img-60"
                                :src="getImgUrl(item.images[0])"
                                alt="#"
                              />
                            </td>
                            <td>
                              <div class="product-name">
                                <a href="javascript:void()">{{item.name}}</a>
                              </div>
                            </td>
                            <td>{{item.price}}</td>
                            <td>{{item.quantity}}</td>
                            <td>{{item.price*item.quantity}}</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="Rate">
                              <h6 class="mb-0 p-2">Total</h6>
                            </td>
                            <td class="payment digits">
                              <h6 class="mb-0 p-2">${{order.amt}}</h6>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!-- End Table-->
                  </div>
                </div>
                <!-- End Invoice-->
              </div>
              <div class="p-0" v-if="!order.length">
                <div class="error-wrapper display-error">
                  <img class="img-100" src="../../assets/images/other-images/sad.png" alt />
                  <div class="error-heading">
                    <h1 class="headline font-info">403</h1>
                  </div>
                  <p class="sub-content"> You don't have permission to access this page.Server unable to read htaccess file, denying access to be safe
                  </p>
                  <div>
                    <router-link
                      class="btn btn-info-gradien btn-lg"
                      :to="{ path: '/dashboard/default' }"
                    >BACK TO HOME PAGE</router-link>
                  </div>
                </div>
              </div>
              <!-- Section ends -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Container-fluid Ends-->
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters({
        order: 'products/getOrder'
      })
    },
    methods: {
      getImgUrl(path) {
        return require('../../assets/images/' + path);
      }
    }
  };
</script>
