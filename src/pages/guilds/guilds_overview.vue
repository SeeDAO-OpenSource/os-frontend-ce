<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid" style="padding-top: 40px">
      <div class="row">
        <div class="col-sm-12">
          <px-card title="公会一览" :actions="false">
            <div slot="with-padding">
              <div class="row">
                <div class="col-xl-3 col-sm-6">
                  <div class="pricingtable">
                    <div class="pricingtable-header">
                      <h5 class="title">活动型公会</h5>
                    </div>
                    <div class="price-value">
                      <span class="amount">研发</span>
                    </div>
                    <ul class="pricing-content">
                      <li>50GB Disk Space</li>
                      <li>50 Email Accounts</li>
                      <li>Maintenance</li>
                      <li>15 Subdomains</li>
                    </ul>
                    <div class="pricingtable-signup">
                      <a class="btn btn-primary btn-lg" href="#">加入公会</a>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6">
                  <div class="pricingtable">
                    <div class="pricingtable-header">
                      <h5 class="title">活动型公会</h5>
                    </div>
                    <div class="price-value">
                      <span class="amount">翻译</span>
                    </div>
                    <ul class="pricing-content">
                      <li>50GB Disk Space</li>
                      <li>50 Email Accounts</li>
                      <li>Maintenance</li>
                      <li>15 Subdomains</li>
                    </ul>
                    <div class="pricingtable-signup">
                      <a class="btn btn-primary btn-lg" href="#">加入公会</a>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6">
                  <div class="pricingtable">
                    <div class="pricingtable-header">
                      <h5 class="title">活动型公会</h5>
                    </div>
                    <div class="price-value">
                      <span class="amount">投研</span>
                    </div>
                    <ul class="pricing-content">
                      <li>50GB Disk Space</li>
                      <li>50 Email Accounts</li>
                      <li>Maintenance</li>
                      <li>15 Subdomains</li>
                    </ul>
                    <div class="pricingtable-signup">
                      <a class="btn btn-primary btn-lg" href="#">加入公会</a>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6">
                  <div class="pricingtable">
                    <div class="pricingtable-header">
                      <h5 class="title">活动型公会</h5>
                    </div>
                    <div class="price-value">
                      <span class="amount">治理</span>
                    </div>
                    <ul class="pricing-content">
                      <li>50GB Disk Space</li>
                      <li>50 Email Accounts</li>
                      <li>Maintenance</li>
                      <li>15 Subdomains</li>
                    </ul>
                    <div class="pricingtable-signup">
                      <a class="btn btn-primary btn-lg" href="#">加入公会</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </px-card>
          <px-card title="公会身份" :actions="false">
            <div slot="with-padding">
              <div class="row">
                <div class="col-xl-4 col-sm-12">
                  <label for="inputState">选择公会</label>
                  <select class="form-control" id="inputState">
                    <option selected>选择...</option>
                    <option>研发公会</option>
                    <option>翻译公会</option>
                    <option>投研公会</option>
                  </select>
                </div>
              </div>
              <div class="row pricing-content mt-5">
                <div class="col-xl-3 col-sm-6 xl-50 box-col-6">
                  <div class="card text-center pricing-simple">
                    <div class="card-body">
                      <h3>前端开发者</h3>
                      <h1>SBT</h1>
                      <h6 class="mb-0">Lorum Ipsum</h6>
                    </div>
                    <a class="btn btn-lg btn-primary btn-block" href="#">
                      <h5 class="mb-0">取得身份</h5></a
                    >
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 xl-50 box-col-6">
                  <div class="card text-center pricing-simple">
                    <div class="card-body">
                      <h3>后端开发者</h3>
                      <h1>SBT</h1>
                      <h6 class="mb-0">Lorum Ipsum</h6>
                    </div>
                    <a class="btn btn-lg btn-primary btn-block" href="#">
                      <h5 class="mb-0">取得身份</h5></a
                    >
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 xl-50 box-col-6">
                  <div class="card text-center pricing-simple">
                    <div class="card-body">
                      <h3>项目经理</h3>
                      <h1>SBT</h1>
                      <h6 class="mb-0">Lorum Ipsum</h6>
                    </div>
                    <a class="btn btn-lg btn-primary btn-block" href="#">
                      <h5 class="mb-0">取得身份</h5></a
                    >
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 xl-50 box-col-6">
                  <div class="card text-center pricing-simple">
                    <div class="card-body">
                      <h3>合约开发者</h3>
                      <h1>SBT</h1>
                      <h6 class="mb-0">Lorum Ipsum</h6>
                    </div>
                    <a class="btn btn-lg btn-primary btn-block" href="#">
                      <h5 class="mb-0">取得身份</h5></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </px-card>
        </div>
      </div>
    </div>
    <!-- Container-fluid Ends-->
  </div>
</template>

<script>
export default {}
</script>
