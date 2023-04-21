<template>
    <div>
        <Breadcrumbs main="Form Widgets" title="Date Picker"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">

                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <h5>Date Picker</h5>
                        </div>
                        <form class="form theme-form datepicker-responsive">
                            <div class="card-body">

                                <div class="form-group form-row">
                                    <label class="col-sm-3 col-form-label text-sm-right">Default</label>
                                    <div class="col-xl-5 col-sm-9">
                                        <datepicker input-class="datepicker-here form-control digits" :format="format" ></datepicker>
                                    </div>
                                </div>

                                <div class="form-group form-row">
                                    <label class="col-sm-3 col-form-label text-sm-right">Month selection</label>
                                    <div class="col-xl-5 col-sm-9">
                                        <datepicker input-class="datepicker-here form-control digits" :minimumView="'month'" :maximumView="'month'" :format="format2" ></datepicker>
                                    </div>
                                </div>

                                <div class="form-group form-row">
                                    <label class="col-sm-3 col-form-label text-sm-right">Disable days of week</label>
                                    <div class="col-xl-5 col-sm-9">
                                        <datepicker input-class="datepicker-here form-control digits" :disabledDates="disabledDates"></datepicker>
                                    </div>
                                </div>

                                <div class="form-group form-row mb-0">
                                    <label class="col-sm-3 col-form-label text-sm-right">Permanently visible Datepicker</label>
                                    <div class="col-sm-3">
                                        <datepicker :inline="true"></datepicker>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Container-fluid Ends-->
    </div>
</template>

<script>
  import Datepicker from 'vuejs-datepicker';
  
  export default {
    components: {
      Datepicker
    },
    data(){
      return{
        format: 'MM/dd/yyyy',
        format2: 'MMMM yyyy',
        disabledDates:{
          days: [6, 0],
        },
      };
    }
  };
</script>