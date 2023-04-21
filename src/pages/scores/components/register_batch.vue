<template>
  <div>
    <b-button v-b-modal.modal-registerbatch variant="primary">{{
      this.title
    }}</b-button>
    <b-modal
      id="modal-registerbatch"
      :title="this.title"
      ok-title="Send message"
      class="theme-modal"
      @ok="handleOk"
    >
      <div class="card-body">
        <vue-dropzone
          id="singledropzone"
          ref="dropzone"
          :options="singledropzoneOptions"
          class="dropzone digits"
          @vdropzone-files-added="vdropzoneFilesAdded"
          @vdropzone-max-files-reached="vdropzoneMaxFilesReached"
          @vdropzone-max-files-exceeded="vdropzoneMaxFilesExceeded"
        >
        </vue-dropzone>
      </div>
    </b-modal>
  </div>
</template>
<style>
.dropzone .dz-preview.dz-error .dz-error-message {
  display: none !important;
}
</style>
<script>
import Papa from "papaparse";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  props: ["title"],
  name: "RegisterBatch",
  components: {
    vueDropzone: vue2Dropzone,
  },
  data: () => {
    return {
      singledropzoneOptions: {
        url: "http://localhost:8080",
        //thumbnailWidth: 150,
        maxFiles: 1,
        //maxFilesize: 1,
        acceptedFiles:
          ".csv, text/csv, application/vnd.ms-excel, application/csv, text/x-csv, application/x-csv, text/comma-separated-values, text/x-comma-separated-values",
        autoProcessQueue: false,
        disablePreviews: true,
        addRemoveLinks: true,
        dictDefaultMessage:
          "<i class='icon-cloud-up'></i><h6>Drop files here or click to upload.</h6>",
      },
    };
  },
  methods: {
    async vdropzoneFilesAdded(file) {
      const fileContent = await file[0].text();
      const csvData = Papa.parse(fileContent, {
        header: true,
      });
      console.log(csvData.data); // 包含 CSV 文件中的数据的数组
    },
    async vdropzoneMaxFilesExceeded(file) {
      this.$refs.dropzone.removeAllFiles();
      this.$refs.dropzone.addFile(file);
    },
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
