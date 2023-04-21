<template>
  <div>
    <div v-b-modal.modal-NewComerReachRate class="card ecommerce-widget">
      <div class="card-body support-ticket-font">
        <div class="row">
          <div class="col-5">
            <span><b>新人触及率</b></span>
            <h3 class="total-num counter">45%</h3>
          </div>
          <div class="col-7">
            <div class="text-md-right">
              <ul>
                <li>
                  总数
                  <span class="product-stts txt-success ml-2"> 1,234 </span>
                </li>
                <li>
                  L0
                  <span class="product-stts txt-danger ml-2"> 34 </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="progress-showcase">
          <div class="progress sm-progress-bar">
            <div
              class="progress-bar bg-primary"
              role="progressbar"
              style="width: 70%"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <b-modal
      id="modal-NewComerReachRate"
      title="新人触及率"
      ok-title="Send message"
      class="theme-modal"
      @ok="handleOk"
    >
      <form @submit.stop.prevent="handleSubmit"></form>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "NewComerReachRate",
  data: () => {
    return {};
  },
  methods: {
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {},
  },
};
</script>
