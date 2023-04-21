<template>
  <div>
      <Breadcrumbs main="Charts" title="Chartjs"/>
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-6 col-md-12">
              <px-card title="Bar Chart">
                    <div slot="headerAction" ></div>
                    <div slot="with-padding" >
                      <Bar class="chart-height"/>
                    </div>
                </px-card>
            </div>
            <div class="col-xl-6 col-md-12">
              <px-card title="Line Graph">
                    <div slot="headerAction" ></div>
                    <div slot="with-padding" >
                      <Lines class="chart-height"/>
                    </div>
                </px-card>
            </div>

            <div class="col-xl-6 col-md-12">
              <px-card title="Radar Graph">
                    <div slot="headerAction" ></div>
                    <div slot="with-padding" >
                      <Radar class="chart-height"/>
                    </div>
                </px-card>
            </div>

            <div class="col-xl-6 col-md-12">
              <px-card title="Line Chart">
                    <div slot="headerAction" ></div>
                    <div slot="with-padding" >
                      <Linechart class="chart-height"/>
                    </div>
                </px-card>
            </div>

            <div class="col-xl-6 col-md-12">
              <px-card title="Doughnut Chart">
                    <div slot="headerAction" ></div>
                    <div slot="with-padding" >
                       <Doughnut class="chart-height"/>
                    </div>
                </px-card>
            </div>

            <div class="col-xl-6 col-md-12">
              <px-card title="Polar Chart">
                    <div slot="headerAction" ></div>
                    <div slot="with-padding" >
                       <PolarArea class="chart-height"/>
                    </div>
                </px-card>
            </div>
          </div>
        </div>
        <!-- Container-fluid Ends-->
  </div>
</template>
<script>
  import Lines from './chartjs/Line';
  import Bar from './chartjs/Bar';
  import Radar from './chartjs/Radar';
  import Linechart from './chartjs/Linechart';
  import Doughnut from './chartjs/Doughnut';
  import PolarArea from './chartjs/Polar';
  
  export default {
    components:{ Bar, Lines,Radar,Linechart,Doughnut,PolarArea }
  };
</script>

<style>
</style>