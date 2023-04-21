<template>
  <div>
    <div v-b-modal.modal-L1CompletionRate class="card ecommerce-widget">
      <div class="card-body support-ticket-font">
        <div class="row">
          <div class="col-5">
            <span>L1 达成率</span>
            <h3 class="total-num counter">25%</h3>
          </div>
          <div class="col-7">
            <div class="text-md-right">
              <ul>
                <li>
                  L0 总数
                  <span class="product-stts txt-success ml-2"> 356 </span>
                </li>
                <li>
                  L1 总数
                  <span class="product-stts txt-danger ml-2"> 25 </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="progress-showcase">
          <div class="progress sm-progress-bar">
            <div
              class="progress-bar bg-secondary"
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
      id="modal-L1CompletionRate"
      title="L1 达成率"
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
  name: "L1CompletionRate",
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
