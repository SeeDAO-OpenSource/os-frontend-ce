<template>
  <div>
    <b-button v-b-modal.modal-createEvent variant="primary">{{
      this.title
    }}</b-button>
    <b-modal
      id="modal-createEvent"
      :title="this.title"
      ok-title="Send message"
      class="theme-modal"
      @ok="handleOk"
    >
      <form @submit.stop.prevent="handleSubmit">
        <label class="col-form-label" for="recipient-name">Recipient:</label>
        <b-form-input v-model="name" placeholder="@fat"></b-form-input>

        <label class="col-form-label" for="message-text">Message:</label>
        <b-form-textarea
          id="textarea"
          v-model="text"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: ["title"],
  name: "CreateEvent",
  data: () => {
    return {
      title: this.title,
    };
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // // 確定表單訊息
      // if (!this.checkFormValidity()) {
      //   return;
      // }
      // Push the name to submitted names
      //this.submittedNames.push(this.name);
      // Hide the modal manually
      // 設定傳回去的資料
      this.$emit("result", { a: 123, b: 321 });
      this.$nextTick(() => {
        this.$bvModal.hide("modal-1");
      });
    },
  },
};
</script>
