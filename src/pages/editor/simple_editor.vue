<template>
    <div>
        <Breadcrumbs main="Editor" title="Simple Editor"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                      <h5 class="card-title">Simple Editor</h5>
                    </div>
                    <div class="card-body">
                      <vue-editor v-model="content"></vue-editor>
                    </div>
                </div>
              </div>

            </div>
        </div>
        <!-- Container-fluid Ends-->
    </div>
</template>

<script>
  import { VueEditor } from 'vue2-editor';
  
  export default {
    components: {
      VueEditor
    },
    data() {
      return {
        content: '<h1>Some initial content</h1>'
      };
    },
  };
</script>