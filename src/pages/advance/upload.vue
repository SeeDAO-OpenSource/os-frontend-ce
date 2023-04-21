<template>
    <div>
        <Breadcrumbs main="Bonus UI" title="Upload"/>
        <div class="container-fluid">
         <div class="row">

            <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                        <h5>Single File Upload</h5>
                    </div>
                    <div class="card-body">
                        <vue-dropzone id="singledropzone" :options="singledropzoneOptions" class="dropzone digits">                                
                        </vue-dropzone>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                        <h5>Multi File Upload</h5>
                    </div>
                    <div class="card-body">
                        <vue-dropzone id="multidropzone" :options="multidropzoneOptions" class="dropzone digits">                                
                        </vue-dropzone>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                        <h5>File Type Validation</h5>
                    </div>
                    <div class="card-body">
                        <vue-dropzone id="validationdropzone" :options="validationdropzoneOptions" class="dropzone digits">                                
                        </vue-dropzone>
                    </div>
                </div>
            </div>

         </div>
        </div>
    </div>
</template>

<script>

  import vue2Dropzone from 'vue2-dropzone';

  export default {
    components: {
      vueDropzone: vue2Dropzone
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
        },
        multidropzoneOptions:{
          url:'http://localhost:8080',
          thumbnailWidth: 150,
          maxFilesize: 2,
          addRemoveLinks: true,
          dictDefaultMessage:'<i class=\'icon-cloud-up\'></i><h6>Drop files here or click to upload.</h6><span>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>'
        },
        validationdropzoneOptions:{
          url:'http://localhost:8080',
          thumbnailWidth: 150,
          acceptedFiles:['image/jpeg','image/png'],
          maxFilesize: 2,
          addRemoveLinks: true,
          dictDefaultMessage:'<i class=\'icon-cloud-up\'></i><h6>Drop files here or click to upload.</h6><span>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>'
        }

      };
    }
  };
</script>