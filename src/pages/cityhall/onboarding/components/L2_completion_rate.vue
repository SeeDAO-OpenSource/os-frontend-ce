<template>
  <div>
    <div v-b-modal.modal-L2CompletionRate class="card ecommerce-widget">
      <div class="card-body support-ticket-font">
        <div class="row">
          <div class="col-5">
            <span>L2 达成率</span>
            <h3 class="total-num counter">32%</h3>
          </div>
          <div class="col-7">
            <div class="text-md-right">
              <ul>
                <li>
                  Profit
                  <span class="product-stts txt-success ml-2">
                    8989
                    <i class="icon-angle-up f-12 ml-1"></i>
                  </span>
                </li>
                <li>
                  Loss
                  <span class="product-stts txt-danger ml-2">
                    2560
                    <i class="icon-angle-down f-12 ml-1"></i>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="progress-showcase mt-4">
          <div class="progress sm-progress-bar">
            <div
              class="progress-bar bg-warning"
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
      id="modal-L2CompletionRate"
      title="L2 达成率"
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
  name: "L2CompletionRate",
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
