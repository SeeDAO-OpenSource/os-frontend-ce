<template>
  <div>
    <Breadcrumbs main="Project" title="Project Create" />
    <!-- Container-fluid starts-->
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <px-card>
                  <div slot="with-padding">
                    <div class="form theme-form">
                      <div class="row">
                        <div class="col">
                          <div class="form-group">
                            <label>Project Title</label>
                            <input class="form-control" type="text" placeholder="Project name *">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="form-group">
                            <label>Client name</label>
                            <input class="form-control" type="text" placeholder="Name client or company name">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-4">
                          <div class="form-group">
                            <label>Project Rate</label>
                            <input class="form-control" type="text" placeholder="Enter project Rate">
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <div class="form-group">
                            <label>Project Type</label>
                            <select class="form-control digits">
                              <option>Hourly</option>
                              <option>Fix price</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <div class="form-group">
                            <label>Priority</label>
                            <select class="form-control digits">
                              <option>Low</option>
                              <option>Medium</option>
                              <option>High</option>
                              <option>Urgent</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-4">
                          <div class="form-group">
                            <label>Project Size</label>
                            <select class="form-control digits">
                              <option>Small</option>
                              <option>Medium</option>
                              <option>Big</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <div class="form-group">
                            <label>Starting date</label>
                            <datepicker input-class="datepicker-here form-control digits"></datepicker>
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <div class="form-group">
                            <label>Ending date</label>
                            <datepicker input-class="datepicker-here form-control digits"></datepicker>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="form-group">
                            <label>Enter some Details</label>
                            <textarea class="form-control" id="exampleFormControlTextarea4" rows="3"></textarea>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="form-group">
                            <label>Upload project file</label>
                            <vue-dropzone id="singledropzone" :options="singledropzoneOptions" class="dropzone digits">                                
                        </vue-dropzone>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="form-group mb-0"><a class="btn btn-success mr-3" href="#">Add</a><a class="btn btn-danger" href="#">Cancel</a></div>
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
  import Datepicker from 'vuejs-datepicker';
  import vue2Dropzone from 'vue2-dropzone';
  import 'vue2-dropzone/dist/vue2Dropzone.min.css';
  
  export default {
    components: {
      vueDropzone: vue2Dropzone,
      Datepicker
    },
    data(){
      return{
        singledropzoneOptions:{
          url:'http://localhost:8080',
          thumbnailWidth: 150,
          maxFiles:1,
          maxFilesize: 2,
          addRemoveLinks: true,
          dictDefaultMessage:'<i class=\'icon-cloud-up\'></i><h6>Drop files here or click to upload.</h6><span>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>'
        }
      };
    }
  };
</script>
