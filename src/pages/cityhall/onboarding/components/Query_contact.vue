<template>
  <div>
    <div v-b-modal="'modal-QueryContact' + id">查询联络方式</div>

    <b-modal
      :id="'modal-QueryContact' + id"
      title="查询联络方式"
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
  props: ["id"],
  name: "QueryContact",
  data: () => {
    return {
      i: this.id,
    };
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
