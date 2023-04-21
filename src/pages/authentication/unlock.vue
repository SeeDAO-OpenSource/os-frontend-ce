<template>
  <div>
    <div class="page-wrapper">
      <div class="container-fluid p-0">
        <!-- Unlock page start-->
        <div class="authentication-main mt-0 unlock-card">
          <div class="row">
            <div class="col-12">
              <div class="login-card">
                <div>
                  <div>
                    <a class="logo">
                      <img
                        class="img-fluid for-light"
                        src="../../assets/images/logo/login.png"
                        alt="looginpage"
                      />
                      <img
                        class="img-fluid for-dark"
                        src="../../assets/images/logo/logo_dark.png"
                        alt="looginpage"
                      />
                    </a>
                  </div>
                  <div class="login-main login-form-card">
                    <form class="theme-form">
                      <h4>Unlock</h4>
                      <div class="form-group">
                        <label class="col-form-label"
                          >Enter your Password</label
                        >
                        <input
                          class="form-control"
                          type="password"
                          name="login[password]"
                          required=""
                          placeholder="*********"
                        />
                        <div class="show-hide"><span class="show"> </span></div>
                      </div>
                      <div class="form-group mb-0">
                        <div class="checkbox p-0">
                          <input id="checkbox1" type="checkbox" />
                          <label class="text-muted" for="checkbox1"
                            >Remember password</label
                          >
                        </div>
                        <button class="btn btn-primary btn-block" type="submit">
                          Unlock
                        </button>
                      </div>
                      <p class="mt-4 mb-0">
                        Already Have an account?
                        <router-link class="ml-2" tag="a" to="/auth/login">
                          Login
                        </router-link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Unlock page end-->
      </div>
    </div>
  </div>
</template>
