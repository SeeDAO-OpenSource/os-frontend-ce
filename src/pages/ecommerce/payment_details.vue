<template>
  <div>
    <Breadcrumbs main="Ecommerce" title="Payment Details"/>
      <!-- Container-fluid starts-->
      <div class="container-fluid credit-card">
        <div class="row">
          <!-- Individual column searching (text inputs) Starts-->
          <div class="col-xl-8">
            <div class="card height-equal">
              <div class="card-header">
                <h5>Credit card </h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-4 text-center"><img class="img-fluid" src="../../assets/images/ecommerce/card.png" alt=""></div>
                  <div class="col-md-8">
                    <form class="theme-form mega-form">
                      <div class="form-group">
                        <input class="form-control" type="text" placeholder="Card number">
                      </div>
                      <div class="form-group">
                        <input class="form-control" type="text" placeholder="First Name">
                      </div>
                      <div class="form-group">
                        <input class="form-control" type="date">
                      </div>
                      <div class="form-group">
                        <input class="form-control" type="text" placeholder="Full Name">
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Individual column searching (text inputs) Ends-->
          <!-- Debit Card Starts-->
          <div class="col-xl-4 col-lg-6 debit-card">
            <div class="card height-equal">
              <div class="card-header">
                <h5>Debit card </h5>
              </div>
              <div class="card-body">
                <form class="theme-form e-commerce-form row">
                  <div class="form-group col-6 p-r-0">
                    <input class="form-control" type="text" placeholder="Full name here">
                  </div>
                  <div class="form-group col-6">
                    <input class="form-control" type="text" placeholder="Card number">
                  </div>
                  <div class="form-group col-6 p-r-0">
                    <input class="form-control" type="text" placeholder="CVV number">
                  </div>
                  <div class="form-group col-6">
                    <input class="form-control" type="text" placeholder="CVC">
                  </div>
                  <div class="col-12">
                    <label class="col-form-label p-t-0">Expiration Date</label>
                  </div>
                  <div class="form-group col-6 p-r-0">
                    <select class="form-control" size="1">
                      <option>Select Month</option>
                      <option>Jan</option>
                      <option>Fab</option>
                      <option>March</option>
                      <option>April</option>
                    </select>
                  </div>
                  <div class="form-group col-6">
                    <select class="form-control" size="1">
                      <option>Select Year</option>
                      <option>2015</option>
                      <option>2016</option>
                      <option>2017</option>
                      <option>2018</option>
                      <option>2019</option>
                    </select>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-primary-gradien btn-block" type="button" data-original-title="btn btn-primary-gradien" title="">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- Debit Card Ends-->
          <!-- COD Starts-->
          <div class="col-xl-4 col-lg-6">
            <div class="card">
              <div class="card-header">
                <h5>COD</h5>
              </div>
              <div class="card-body">
                <form class="theme-form row">
                  <div class="form-group col-6 p-r-0">
                    <input class="form-control" type="text" placeholder="First Name">
                  </div>
                  <div class="form-group col-6">
                    <input class="form-control" type="text" placeholder="Last name">
                  </div>
                  <div class="form-group col-6 p-r-0">
                    <input class="form-control" type="text" placeholder="Pincode">
                  </div>
                  <div class="form-group col-6">
                    <input class="form-control" type="number" placeholder="Enter mobile number">
                  </div>
                  <div class="form-group col-6 p-r-0">
                    <input class="form-control" type="text" placeholder="State">
                  </div>
                  <div class="form-group col-6">
                    <input class="form-control" type="text" placeholder="City">
                  </div>
                  <div class="form-group col-12">
                    <textarea class="form-control" rows="3" placeholder="Address"></textarea>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-primary-gradien btn-block" type="button" data-original-title="btn btn-primary-gradien" title="">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- COD Ends-->
          <!-- EMI Starts-->
          <div class="col-xl-4 col-lg-6">
            <div class="card">
              <div class="card-header">
                <h5>EMI</h5>
              </div>
              <div class="card-body">
                <form class="theme-form row">
                  <div class="form-group col-6 p-r-0">
                    <input class="form-control" type="text" placeholder="First Name">
                  </div>
                  <div class="form-group col-6">
                    <input class="form-control" type="text" placeholder="Last name">
                  </div>
                  <div class="form-group col-6 p-r-0">
                    <input class="form-control" type="text" placeholder="Pincode">
                  </div>
                  <div class="form-group col-6">
                    <select class="form-control" size="1">
                      <option>Bank Name</option>
                      <option>SBI</option>
                      <option>ICICI</option>
                      <option>KOTAK</option>
                      <option>BOB</option>
                    </select>
                  </div>
                  <div class="form-group col-12">
                    <select class="form-control" size="1">
                      <option>Select Card</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div class="form-group col-12">
                    <select class="form-control" size="1">
                      <option>Select Duration</option>
                      <option>2015-2016</option>
                      <option>2016-2017</option>
                      <option>2017-2018</option>
                      <option>2018-2019</option>
                    </select>
                  </div>
                  <div class="form-group col-12">
                    <ul class="payment-opt">
                      <li><img src="../../assets/images/ecommerce/mastercard.png" alt=""></li>
                      <li><img src="../../assets/images/ecommerce/visa.png" alt=""></li>
                      <li><img src="../../assets/images/ecommerce/paypal.png" alt=""></li>
                    </ul>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-primary-gradien btn-block" type="button" data-original-title="btn btn-primary-gradien" title="">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- EMI Ends-->
          <!-- EMI Starts-->
          <div class="col-xl-4 col-lg-6">
            <div class="card">
              <div class="card-header">
                <h5>Net Banking</h5>
              </div>
              <div class="card-body">
                <form class="theme-form row">
                  <div class="form-group col-12">
                    <input class="form-control" type="text" placeholder="AC Holder name">
                  </div>
                  <div class="form-group col-12">
                    <input class="form-control" type="text" placeholder="Account number">
                  </div>
                  <div class="form-group col-6 p-r-0">
                    <select class="form-control" size="1">
                      <option>Select Bank</option>
                      <option>SBI</option>
                      <option>ICICI</option>
                      <option>KOTAK</option>
                      <option>BOB</option>
                    </select>
                  </div>
                  <div class="form-group col-6">
                    <input class="form-control" type="text" placeholder="ICFC code">
                  </div>
                  <div class="form-group col-12">
                    <input class="form-control" type="number" placeholder="Enter mobile number">
                  </div>
                  <div class="form-group col-12">
                    <input class="form-control" type="text" placeholder="Other Details">
                  </div>
                  <div class="col-12">
                    <button class="btn btn-primary-gradien btn-block" type="button" data-original-title="btn btn-primary-gradien" title="">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- EMI Ends-->
        </div>
      </div>
      <!-- Container-fluid Ends-->
  </div>
</template>