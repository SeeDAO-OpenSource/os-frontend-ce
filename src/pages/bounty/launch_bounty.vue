<template>
    <div>
      <!-- Container-fluid starts-->
            <div class="container-fluid" style="padding-top: 40px;">
              <div class="row">
                <div class="col-sm-12">
                  <px-card>
                    <div slot="with-padding">
                      <div class="form theme-form">
                        <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <label>悬赏标题</label>
                              <input class="form-control" type="text" placeholder="输入标题...">
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <label>SBT 要求</label>
                              <input class="form-control" type="text" placeholder="多选 SBT...">
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>主持人</label>
                              <input class="form-control" type="text" placeholder="昵称...">
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>悬赏型式</label>
                              <select class="form-control digits">
                                <option>线上悬赏</option>
                                <option>线下悬赏</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>悬赏分类</label>
                              <select class="form-control digits">
                                <option>讲座</option>
                                <option>研讨会</option>
                                <option>运营</option>
                                <option>会议</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>人数限制</label>
                              <select class="form-control digits">
                                <option>10</option>
                                <option>50</option>
                                <option>300</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>开始时间</label>
                              <datepicker input-class="datepicker-here form-control digits"></datepicker>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>结束时时间</label>
                              <datepicker input-class="datepicker-here form-control digits"></datepicker>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <label>悬赏详情</label>
                              <ckeditor :editor="editor"  v-model="editorData"></ckeditor>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <label>悬赏附件</label>
                              <vue-dropzone id="singledropzone" :options="singledropzoneOptions" class="dropzone digits">                                
                          </vue-dropzone>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <div class="form-group mb-0"><a class="btn btn-primary mr-3" href="#">创建悬赏</a><a class="btn btn-outline-primary" href="#">取消</a></div>
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
    import CKEditor from '@ckeditor/ckeditor5-vue';
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    
    export default {
      components: {
        vueDropzone: vue2Dropzone,
        ckeditor: CKEditor.component,
        Datepicker
      },
      data(){
        return{
          editor: ClassicEditor,
        editorData: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>',
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