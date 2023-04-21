<template>
  <div class="checkout">
    <Breadcrumbs main="Ecommerce" title="Checkout" />
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="card">
        <div class="card-header">
          <h5>Billing Details</h5>
        </div>
        <div class="card-body">
          <form>
          <div class="row">
            <div class="col-xl-6 col-sm-12">
              <div class="form-row">
                <div class="form-group col-sm-6">
                  <label for="inputEmail4">First Name</label>
                  <input
                    type="text"
                    v-model="user.firstName"
                    id="firstName"
                    name="firstName"
                    class="form-control"
                    :class="{ 'is-invalid': submitted && errors.has('firstName') }"
                  />
                  <div
                    v-if="submitted && errors.has('firstName')"
                    class="invalid-feedback"
                  >{{ errors.first('firstName') }}</div>
                </div>
                <div class="form-group col-sm-6">
                  <label for="inputPassword4">Last Name</label>
                  <input
                    type="text"
                    v-model="user.lastName"
                    id="lastName"
                    name="lastName"
                    class="form-control"
                    :class="{ 'is-invalid': submitted && errors.has('lastName') }"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-sm-6">
                  <label for="inputEmail4">Phone</label>
                  <input
                    type="text"
                    v-model="user.phone"
                    id="phone"
                    name="phone"
                    class="form-control"
                    :class="{ 'is-invalid': submitted && errors.has('phone') }"
                  />
                </div>
                <div class="form-group col-sm-6">
                  <label for="inputPassword4">Email Address</label>
                  <input
                    type="email"
                    v-model="user.email"
                    id="email"
                    name="email"
                    class="form-control"
                    :class="{ 'is-invalid': submitted && errors.has('email') }"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="inputState">Country</label>
                <select class="form-control" id="inputState">
                  <option>Choose...</option>
                  <option selected>India</option>
                  <option>USA</option>
                  <option>UK</option>
                </select>
              </div>
              <div class="form-group">
                <label for="inputAddress2">Address</label>
                <input
                  type="text"
                  v-model="user.address"
                  id="address"
                  name="address"
                  class="form-control"
                  :class="{ 'is-invalid': submitted && errors.has('address') }"
                />
              </div>
              <div class="form-group">
                <label for="inputCity">Town/City</label>
                <input
                  type="text"
                  v-model="user.city"
                  id="city"
                  name="city"
                  class="form-control"
                  :class="{ 'is-invalid': submitted && errors.has('city') }"
                />
              </div>
              <div class="form-group">
                <label for="inputAddress2">State/Country</label>
                <input
                  type="text"
                  v-model="user.state"
                  id="state"
                  name="state"
                  class="form-control"
                  :class="{ 'is-invalid': submitted && errors.has('state') }"
                />
              </div>
              <div class="form-group">
                <label for="inputAddress2">Postal Code</label>
                <input
                  type="text"
                  v-model="user.pincode"
                  id="pincode"
                  name="pincode"
                  class="form-control"
                  :class="{ 'is-invalid': submitted && errors.has('pincode') }"
                />
              </div>
            </div>
            <div class="col-xl-6 col-sm-12">
              <div class="checkout-details">
                <div class="order-box">
                  <div class="title-box">
                    <div class="checkbox-title">
                      <h4>Product</h4>
                      <span>Total</span>
                    </div>
                  </div>
                  <ul class="qty" v-if="cart.length">
                    <li v-for="(item,index) in cart" :key="index">
                      {{item.name}} × {{item.quantity}}
                      <span>{{item.price * item.quantity | currency}}</span>
                    </li>
                  </ul>
                  <ul class="qty" v-if="!cart.length">
                    <li v-if="!cart.length">There are no products in cart</li>
                  </ul>
                  <ul class="sub-total">
                    <li>
                      Subtotal
                      <span class="count">{{getAmount | currency}}</span>
                    </li>
                  </ul>
                  <ul class="sub-total">
                    <li>
                      Total
                      <span class="count">{{getAmount | currency}}</span>
                    </li>
                  </ul>
                  <div class="animate-chk" v-if="cart.length">
                    <div class="row">
                      <div class="col">
                        <label class="d-block" for="edo-ani">
                          <input
                            class="radio_animated"
                            id="edo-ani"
                            v-model="payment"
                            :value="false"
                            type="radio"
                            name="rdo-ani"
                            checked
                            data-original-title
                            title
                          />Stripe
                        </label>
                        <label class="d-block" for="edo-ani1">
                          <input
                            class="radio_animated"
                            id="edo-ani1"
                            v-model="payment"
                            type="radio"
                            :value="true"
                            name="rdo-ani"
                            data-original-title
                            title
                          />PayPal
                        </label>
                        <label class="d-block" for="edo-ani2">
                          <img class="img-paypal" src="../../assets/images/checkout/paypal.png" alt />
                        </label>
                      </div>
                    </div>
                  </div>
                  <PayPal
                      :amount=getamt()
                      currency="USD"
                      :client="paypal"
                      :env="environment"
                      :style="button_style"
                      v-if="payment"
                      v-on:payment-authorized="onPaymentComplete"
                      v-on:payment-cancelled="onCancelled()">
                  </PayPal>
                  <div class="text-right m-t-10" v-if="cart.length && !payment">
                      <button
                      class="btn btn-primary"
                      @click="payWithStripe"
                      type="button"
                    >Place Order</button>
                  </div>                   
                </div>
              </div>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
    <!-- Container-fluid Ends-->
  </div>
</template>
<script>
  import { mapState } from 'vuex';
  import PayPal from 'vue-paypal-checkout';

  export default {
    name: 'Checkout',
    components: {
      PayPal
    },
    data() {
      return {
        user: {
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          address: '',
          city: '',
          state: '',
          pincode: ''
        },
        submitted: false,
        payment: false,
        complete: false,
        paypal: {
          sandbox: 'YOUR SANDBOX ID'
        },
        environment : 'sandbox',
        button_style : {
          label: 'checkout',
          size:  'large',    // small | medium | large | responsive
          shape: 'pill',         // pill | rect
          color: 'blue'         // gold | blue | silver | black
        },
        amtchar:''
      };
    },
    computed: {
      ...mapState({
        cart: state => state.products.cart,
        getAmount() {
          return (this.totalAmount = this.$store.getters[
            'products/getTotalAmount'
          ]);
        }
      })
    },
    methods: {
      payWithStripe() {
        var handler = (window).StripeCheckout.configure({
          key: 'PUBLISHBLE_KEY', // 'PUBLISHBLE_KEY' publishble key
          locale: 'auto',
          token: (token) => {
            this.$store.dispatch('products/createOrder', {
              product: this.cart,
              userDetail: this.user,
              token: token.id,
              amt: this.totalAmount
            });
            this.$router.push('/ecommerce/success');
          },
        });
        handler.open({
          name: 'SeeDAO ',
          description: 'Your Choice Theme',
          amount: this.totalAmount * 100
        });
      },
      getamt(){
        return this.totalAmount.toString();
      },
      removeProduct: function(product) {
        this.$store.dispatch('products/removeProduct', product);
      },
      onPaymentComplete: function (data) {
        this.$store.dispatch('products/createOrder', {
          product: this.cart,
          userDetail: this.user,
          token: data.orderID,
          amt: this.totalAmount
        });
      },
      onCancelled(){
      }
    }
  };
</script>
