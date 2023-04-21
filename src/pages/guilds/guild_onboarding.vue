<template>
    <div>
       <!-- Container-fluid starts-->
        <div class="container-fluid" style="padding-top: 40px;">
          <div class="row">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-header">
                  <h5><b>加入公会</b></h5>
                </div>
                <div class="card-body">
                  <form-wizard color="#4466f2" :start-index="0" title="公会入职帮手" subtitle="Split a complicated flow in multiple steps" back-button-text="Go back!" next-button-text="Go next!" finish-button-text="We're there">
                     <tab-content title="Personal details">
                      <div class="setup-content" id="step-1">
                        <div class="col-xs-12">
                          <div class="form-group">
                              <label class="control-label">First Name</label>
                              <input class="form-control" type="text" placeholder="Johan" required="required">
                            </div>
                            <div class="form-group">
                              <label class="control-label">Last Name</label>
                              <input class="form-control" type="text" placeholder="Deo" required="required">
                            </div>
                        </div>
                      </div>
                     </tab-content>
                     <tab-content title="Additional Info">
                      <div class="setup-content" id="step-2">
                        <div class="col-xs-12">
                          <div class="form-group">
                              <label class="control-label">Email</label>
                              <input class="form-control" type="text" placeholder="name@example.com" required="required">
                            </div>
                            <div class="form-group">
                              <label class="control-label">Password</label>
                              <input class="form-control" type="password" placeholder="Password" required="required">
                            </div>
                        </div>
                      </div>
                     </tab-content>
                     <tab-content title="Last step">
                      <div class="setup-content" id="step-3">
                        <div class="col-xs-12">
                          <div class="form-group">
                              <label class="control-label">Birth date</label>
                              <input class="form-control" type="date" required="required">
                            </div>
                            <div class="form-group">
                              <label class="control-label">Have Passport</label>
                              <input class="form-control" type="text" placeholder="yes / no" required="required">
                            </div>
                        </div>
                      </div>
                     </tab-content>
                   </form-wizard>
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
  
    
    };
  </script>