<template>
    <div>
        <Breadcrumbs main="Bonus UI" title="toaster"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">

              <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                      <h5 class="card-title">toastr</h5>
                    </div>
                    <div class="card-body btn-showcase">
                      
                      <b-button @click="success" variant="success">Success</b-button>
                      
                      <b-button @click="info" variant="info">Info</b-button>

                      <b-button @click="error" variant="danger">Error</b-button>

                    </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                      <h5 class="card-title">toastr with icon</h5>
                    </div>
                    <div class="card-body btn-showcase">
                      
                      <b-button @click="success_with_icon" variant="success">Success</b-button>
                      
                      <b-button @click="info_with_icon" variant="info">Info</b-button>

                      <b-button @click="error_with_icon" variant="danger">Error</b-button>

                      <b-button @click="info_with_cancle" variant="info">Cancle</b-button>

                    </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                      <h5 class="card-title">toastr with position</h5>
                    </div>
                    <div class="card-body btn-showcase">
                      
                      <b-button @click="position('New order has been placed','top-right')" variant="primary">Top Right</b-button>

                      <b-button @click="position('New order has been placed','top-left')" variant="primary">Top Left</b-button>

                      <b-button @click="position('New order has been placed','top-center')" variant="primary">Top Center</b-button>

                      <b-button @click="position('New order has been placed','bottom-right')" variant="primary">Bottom Right</b-button>

                      <b-button @click="position('New order has been placed','bottom-left')" variant="primary">Bottom Left</b-button>

                      <b-button @click="position('New order has been placed','bottom-center')" variant="primary">Bottom Center</b-button>

                      <b-button @click="full_width" variant="primary">Full Width</b-button>

                    </div>
                </div>
              </div>

            </div>
        </div>
        <!-- Container-fluid Ends-->
    </div>
</template>

<script>
  export default {
    methods:{
      success() {
        this.$toasted.show(' New order has been placed ', { theme: 'outline',position: 'top-right', type: 'success', duration: 2000 });
      },
      info() {
        this.$toasted.show(' New order has been placed ', { theme: 'outline',position: 'top-right', type: 'info', duration: 2000 });
      },
      error() {
        this.$toasted.show(' New order has been placed ', { theme: 'outline',position: 'top-right', type: 'error', duration: 2000 });
      },
      success_with_icon() {
        this.$toasted.show(' New order has been placed ', { theme: 'outline',position: 'top-right', type: 'success', icon : 'check', duration: 2000 });
      },
      info_with_icon() {
        this.$toasted.show(' New order has been placed ', { theme: 'outline',position: 'top-right', type: 'info', icon : 'info', duration: 2000 });
      },
      error_with_icon() {
        this.$toasted.show(' New order has been placed ', { theme: 'outline',position: 'top-right', icon : 'times', type: 'error', duration: 2000 });
      },

      position(text,position) {
        this.$toasted.show(text, { theme: 'outline',position: position, type: 'default', duration: 2000 });
      },

      full_width() {
        this.$toasted.show(' New order has been placed ', { theme: 'outline',position: 'top-right', fullWidth:true, type: 'success', duration: 2000 });
      },

      info_with_cancle() {
        this.$toasted.show(' New order has been placed ', { theme: 'outline',position: 'bottom-right', closeOnSwipe: true, type: 'default', duration: 2000, className:'alert-copy', action : {
          icon : 'times',
          onClick : (e, toastObject) => {
            toastObject.goAway(0);
          }
        } });
      }
    }
  };
</script>