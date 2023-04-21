<template>
  <div>
    <Breadcrumbs main="Widgets" title="Chart" />
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <!-- Chart widget top Start-->
      <div class="row">
        <div class="col-xl-4 col-md-12 box-col-12">
          <px-card class="o-hidden">
            <div class="chart-widget-top">
              <div class="card-body pb-0">
                <div class="media">
                  <div class="media-body">
                    <h5>Total Sale</h5>
                    <h4>$3654.00</h4>
                    <span class="font-roboto">Compare to last month</span>
                  </div>
                  <h6 class="num total-value font-success">
                    +65%
                    <!-- <span class="counter">
                      <countTo
                        :startVal="0"
                        :endVal="3654"
                        :duration="3000"
                        :decimals="2"
                      ></countTo>
                    </span> -->
                  </h6>
                  <!-- <span class="num">
                    <span class="counter">
                      <countTo
                        :startVal="0"
                        :endVal="90"
                        :duration="3000"
                      ></countTo> </span
                    >%
                    <i class="icon-angle-up f-12 ml-1"></i>
                  </span> -->
                </div>
              </div>
              <div>
                <div id="chart-widget1">
                  <apexchart
                    height="170"
                    type="area"
                    :options="chart1.options"
                    :series="chart1.series"
                  ></apexchart>
                </div>
              </div>
            </div>
          </px-card>
        </div>
        <div class="col-xl-4 col-md-12 box-col-12">
          <px-card class="o-hidden">
            <div class="chart-widget-top">
              <div class="card-body pb-0">
                <div class="media">
                  <div class="media-body">
                    <h5>Total Project</h5>
                    <h4>12569</h4>
                    <span class="font-roboto">Compare to last month</span>
                  </div>
                  <h6 class="num total-value font-success">
                    +30%
                    <!-- <span class="counter">
                      <countTo
                        :startVal="0"
                        :endVal="3654"
                        :duration="3000"
                        :decimals="2"
                      ></countTo>
                    </span> -->
                  </h6>
                  <!-- <span class="num">
                    <span class="counter">
                      <countTo
                        :startVal="0"
                        :endVal="90"
                        :duration="3000"
                      ></countTo> </span
                    >%
                    <i class="icon-angle-up f-12 ml-1"></i>
                  </span> -->
                </div>
              </div>
              <div id="chart-widget2">
                <div
                  class="flot-chart-placeholder"
                  id="chart-widget-top-second"
                >
                  <apexchart
                    height="170"
                    type="area"
                    :options="chart2.options"
                    :series="chart2.series"
                  ></apexchart>
                </div>
              </div>
            </div>
          </px-card>
        </div>
        <div class="col-xl-4 col-md-12 box-col-12">
          <px-card class="o-hidden">
            <div class="chart-widget-top">
              <div class="card-body pb-0">
                <div class="media">
                  <div class="media-body">
                    <h5>Total Product</h5>
                    <h4>93M</h4>
                    <span class="font-roboto">Compare to last month</span>
                  </div>
                  <h6 class="num total-value font-success">
                    +68%
                    <!-- <span class="counter">
                      <countTo
                        :startVal="0"
                        :endVal="3654"
                        :duration="3000"
                        :decimals="2"
                      ></countTo>
                    </span> -->
                  </h6>
                  <!-- <span class="num">
                    <span class="counter">
                      <countTo
                        :startVal="0"
                        :endVal="90"
                        :duration="3000"
                      ></countTo> </span
                    >%
                    <i class="icon-angle-up f-12 ml-1"></i>
                  </span> -->
                </div>
              </div>
              <div id="chart-widget3">
                <div class="flot-chart-placeholder" id="chart-widget-top-third">
                  <apexchart
                    height="170"
                    type="area"
                    :options="chart3.options"
                    :series="chart3.series"
                  ></apexchart>
                </div>
              </div>
            </div>
          </px-card>
        </div>
      </div>
      <!-- Chart widget top Ends-->
      <!-- Chart widget with bar chart Start-->
      <div class="row">
        <div class="col-md-12">
          <px-card title="Monthly  History">
            <div class="bar-chart-widget">
              <div class="bottom-content card-body">
                <div class="row">
                  <div class="col-12">
                    <div id="chart-widget4" class="legend-apex">
                      <apexchart
                        height="350"
                        type="bar"
                        :options="chart4.options"
                        :series="chart4.series"
                      ></apexchart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </px-card>
        </div>
        <!-- <div class="col-xl-5 col-md-12 box-col-12">
          <px-card title="Total Earning">
            <div class="bar-chart-widget">
              <div class="top-content bg-primary"></div>
              <div class="bottom-content card-body">
                <div class="row">
                  <div class="col-12">
                    <div id="chart-widget5">
                      <apexchart
                        height="360"
                        type="radialBar"
                        :options="chart5.options"
                        :series="chart5.series"
                      ></apexchart>
                    </div>
                  </div>
                </div>
                <div class="row text-center f-w-600 pt-5">
                  <div class="col-4 b-r-light">
                    <div>
                      <span class="num font-primary">
                        12%
                        <i class="icon-angle-up f-12 ml-1"></i>
                      </span>
                      <span class="text-muted mt-2 mb-2 block-bottom"
                        >Year</span
                      >
                      <h4 class="num m-0">
                        <span class="counter color-bottom">
                          <countTo
                            :startVal="36"
                            :endVal="3659"
                            :duration="3000"
                          ></countTo> </span
                        >M
                      </h4>
                    </div>
                  </div>
                  <div class="col-4 b-r-light">
                    <div>
                      <span class="num font-primary">
                        15%
                        <i class="icon-angle-up f-12 ml-1"></i>
                      </span>
                      <span class="text-muted mt-2 mb-2 block-bottom"
                        >Month</span
                      >
                      <h4 class="num m-0">
                        <span class="counter color-bottom">
                          <countTo
                            :startVal="6"
                            :endVal="698"
                            :duration="3000"
                          ></countTo> </span
                        >M
                      </h4>
                    </div>
                  </div>
                  <div class="col-4">
                    <div>
                      <span class="num font-primary">
                        34%
                        <i class="icon-angle-up f-12 ml-1"></i>
                      </span>
                      <span class="text-muted mt-2 mb-2 block-bottom"
                        >Today</span
                      >
                      <h4 class="num m-0">
                        <span class="counter color-bottom">
                          <countTo
                            :startVal="93"
                            :endVal="9421"
                            :duration="3000"
                          ></countTo> </span
                        >M
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </px-card>
        </div> -->
        <div class="col-xl-4 col-lg-12 box-col-6 xl-50">
          <px-card>
            <div slot="headerCustom">
              <div class="row">
                <div class="col-9">
                  <h5>Skill Status</h5>
                </div>
                <div class="col-3 text-right">
                  <i class="text-muted" data-feather="trending-up"></i>
                </div>
              </div>
            </div>
            <div slot="with-padding">
              <div class="chart-container">
                <div id="circlechart">
                  <apexchart
                    height="350"
                    type="radialBar"
                    :options="chart6.options"
                    :series="chart6.series"
                  ></apexchart>
                </div>
              </div>
            </div>
          </px-card>
        </div>
        <div class="col-xl-8 col-lg-12 box-col-6 xl-50">
          <px-card>
            <div slot="headerCustom">
              <div class="row">
                <div class="col-9">
                  <h5>Order Status</h5>
                </div>
                <div class="col-3 text-right">
                  <i class="text-muted" data-feather="shopping-bag"></i>
                </div>
              </div>
            </div>
            <div slot="with-padding">
              <div class="chart-container">
                <div id="progress1">
                  <apexchart
                    height="70"
                    type="bar"
                    :options="progress1.options"
                    :series="progress1.series"
                  ></apexchart>
                </div>
                <div id="progress2">
                  <apexchart
                    height="70"
                    type="bar"
                    :options="progress2.options"
                    :series="progress2.series"
                  ></apexchart>
                </div>
                <div id="progress3">
                  <apexchart
                    height="70"
                    type="bar"
                    :options="progress3.options"
                    :series="progress3.series"
                  ></apexchart>
                </div>
                <div id="progress4">
                  <apexchart
                    height="70"
                    type="bar"
                    :options="progress4.options"
                    :series="progress4.series"
                  ></apexchart>
                </div>
                <div id="progress5">
                  <apexchart
                    height="70"
                    type="bar"
                    :options="progress5.options"
                    :series="progress5.series"
                  ></apexchart>
                </div>
              </div>
            </div>
          </px-card>
        </div>
      </div>
      <!-- Chart widget with bar chart Ends-->
      <div class="row">
         <!-- Live Product chart widget Start-->
        <div class="xl-50 col-md-7">
          <px-card title="Live Products">
            <div slot="with-padding">
              <div class="chart-container">
                <div class="row">
                  <div class="col-12">
                    <div id="chart-widget6">
                      <apexchart
                        height="320"
                        type="line"
                        :options="chart10.options"
                        :series="chart10.series"
                      ></apexchart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </px-card>
        </div>
        <!-- Live Product chart widget Ends-->
        <!-- Turnover chart widget Start-->
        <div class="xl-50 col-md-5">
          <px-card title="Turnover">
            <div slot="with-padding">
              <div class="chart-container">
                <div class="row">
                  <div class="col-12">
                    <div id="chart-widget7">
                      <apexchart
                        height="320"
                        type="area"
                        :options="chart11.options"
                        :series="chart11.series"
                      ></apexchart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </px-card>
        </div>
        <!-- Turnover chart widget Ends-->
      </div>
      <!-- Browser uses and website visiter widget Start-->
      <div class="row">
        <!-- browser uses widget chart Start-->
        <div class="col-sm-12 box-col-12">
          <px-card title="Stock Market">
            <div slot="with-padding">
              <div id="chart-widget13">
                <apexchart
                  height="500"
                  type="candlestick"
                  :options="candleChart9.options"
                  :series="candleChart9.series"
                ></apexchart>
              </div>
            </div>
          </px-card>
        </div>
        <!-- browser uses widget chart Endss -->
      </div>
      <!-- status widget Start-->
      <div class="row">
        <div class="col-xl-5 col-lg-12 box-col-12">
          <px-card>
            <div slot="headerCustom">
              <div class="row">
                <div class="col-9">
                  <h5>Finance</h5>
                </div>
                <div class="col-3 text-right">
                  <i class="text-muted" data-feather="navigation"></i>
                </div>
              </div>
            </div>
            <div slot="with-padding">
              <div class="chart-container">
                <div id="columnchart">
                  <apexchart
                    height="350"
                    type="bar"
                    :options="chart7.options"
                    :series="chart7.series"
                  ></apexchart>
                </div>
              </div>
            </div>
          </px-card>
        </div>
        <div class="col-xl-7 col-lg-12 box-col-12">
          <px-card>
            <div slot="headerCustom">
              <div class="row">
                <div class="col-9">
                  <h5>Order Status</h5>
                </div>
                <div class="col-3 text-right">
                  <i class="text-muted" data-feather="shopping-bag"></i>
                </div>
              </div>
            </div>
            <div slot="with-padding">
              <div class="chart-container">
                <div id="linechart">
                  <apexchart
                    height="350"
                    type="line"
                    :options="chart8.options"
                    :series="chart8.series"
                  ></apexchart>
                </div>
              </div>
            </div>
          </px-card>
        </div>
      </div>
      <!-- status widget Ends-->
      <!-- small widgets Start-->
      <div class="row">
        <!-- Monthly Sale chart widget Start-->
        <div class="xl-50 col-md-5">
          <px-card title="Monthly Sales">
            <div slot="with-padding">
              <div class="chart-container">
                <div class="row">
                  <div class="col-12">
                    <div id="chart-widget8">
                      <apexchart
                        height="320"
                        type="radar"
                        :options="chart12.options"
                        :series="chart12.series"
                      ></apexchart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </px-card>
        </div>
        <!-- Monthly Sale chart widget Ends-->
        <!-- Uses chart widget Start-->
        <div class="xl-50 col-md-7">
          <px-card title="Uses">
            <div slot="with-padding">
              <div class="chart-container">
                <div class="row">
                  <div class="col-12">
                    <div id="chart-widget9">
                      <apexchart
                        height="320"
                        type="bubble"
                        :options="chart13.options"
                        :series="chart13.series"
                      ></apexchart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </px-card>
        </div>
        <!-- Uses chart widget Ends-->
      </div>
      <!-- small widgets Ends-->
    </div>
    <!-- Container-fluid Ends-->
  </div>
</template>
<script>
  var primary = localStorage.getItem('primary_color') || '#7366ff';
  var secondary = localStorage.getItem('secondary_color') || '#f73164';
  // import countTo from "vue-count-to";
  // function generateData1(count, yrange) {
  //   var i = 0;
  //   var series = [];
  //   while (i < count) {
  //     var x = "w" + (i + 1).toString();
  //     var y =
  //       Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

  //     series.push({
  //       x: x,
  //       y: y,
  //     });
  //     i++;
  //   }
  //   return series;
  // }
  function generateData(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
  
  export default {
    name: 'ChartWidgets',
    components: {
    // countTo,
    },
    data() {
      return {
        chart1: {
          options: {
            chart: {
              width: 510,
              height: 190,
              type: 'area',
              toolbar: {
                show: false,
              },
            },
            colors: [primary],
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: 'smooth',
              width: 2,
            },
            xaxis: {
              show: false,
              type: 'datetime',
              categories: [
                '2018-09-19T00:00:00',
                '2018-09-19T01:30:00',
                '2018-09-19T02:30:00',
                '2018-09-19T03:30:00',
                '2018-09-19T04:30:00',
                '2018-09-19T05:30:00',
                '2018-09-19T06:30:00',
                '2018-09-19T07:30:00',
                '2018-09-19T08:30:00',
                '2018-09-19T09:30:00',
              ],
              labels: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
            },
            yaxis: {
              show: false,
            },
            fill: {
              colors: [primary],
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm',
              },
            },
            grid: {
              show: false,
              padding: {
                left: 0,
                right: -10,
                bottom: -50,
              },
            },
          },
          series: [
            {
              name: 'series1',
              data: [14, 12, 20, 20, 14, 22, 18, 26, 12, 18, 0],
            },
          ],
        },
        chart2: {
          options: {
            chart: {
              width: 510,
              height: 190,
              type: 'area',
              toolbar: {
                show: false,
              },
            },
            colors: [secondary],
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: 'smooth',
              width: 2
            },
            xaxis: {
              show: false,
              type: 'datetime',
              categories: [
                '2018-09-19T00:00:00',
                '2018-09-19T01:30:00',
                '2018-09-19T02:30:00',
                '2018-09-19T03:30:00',
                '2018-09-19T04:30:00',
                '2018-09-19T05:30:00',
                '2018-09-19T06:30:00',
                '2018-09-19T07:30:00',
                '2018-09-19T08:30:00',
                '2018-09-19T09:30:00',
              ],
              labels: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
            },
            yaxis: {
              show: false,
            },
            fill: {
              colors: [secondary],
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm',
              },
            },
            grid: {
              show: false,
              padding: {
                left: 0,
                right: -10,
                bottom: -50,
              },
            },
          },
          series: [
            {
              name: 'series1',
              data: [14, 12, 20, 20, 14, 22, 18, 26, 12, 18, 0],
            },
          ],
        },
        chart3: {
          options: {
            chart: {
              width: 510,
              height: 190,
              type: 'area',
              toolbar: {
                show: false,
              },
            },
            colors: ['#51BB25'],
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: 'smooth',
              width: 2,
            },
            xaxis: {
              show: false,
              type: 'datetime',
              categories: [
                '2018-09-19T00:00:00',
                '2018-09-19T01:30:00',
                '2018-09-19T02:30:00',
                '2018-09-19T03:30:00',
                '2018-09-19T04:30:00',
                '2018-09-19T05:30:00',
                '2018-09-19T06:30:00',
                '2018-09-19T07:30:00',
                '2018-09-19T08:30:00',
                '2018-09-19T09:30:00',
              ],
              labels: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
            },
            yaxis: {
              show: false,
            },
            fill: {
              colors: ['#51BB25'],
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm',
              },
            },
            grid: {
              show: false,
              padding: {
                left: 0,
                right: -10,
                bottom: -50,
              },
            },
          },
          series: [
            {
              name: 'series1',
              data: [14, 12, 20, 20, 14, 22, 18, 26, 12, 18, 0],
            },
          ],
        },
        chart4: {
          options: {
            chart: {
              width: 855,
              height: 350,
              type: 'bar',
              toolbar: {
                show: false,
              },
            },
            legend: {
              show: true,
            },
            colors: [primary, secondary],
            dataLabels: {
              enabled: false,
            },
            plotOptions: {
              bar: {
                endingShape: 'rounded',
                radius: 10,
                borderRadius: 8,
                horizontal: false,
                columnWidth: '30%',
              },
            },
            stroke: {
              show: true,
              colors: ['transparent'],
              curve: 'smooth',
              lineCap: 'butt',
            },
            xaxis: {
              categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
              ],
            },
            yaxis: {
              title: {
                text: '$ (thousands)',
              },
            },
            fill: {
              colors: [secondary, '#51bb25', primary],
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return '$ ' + val + ' thousands';
                },
              },
            },
            grid: {
              yaxis: {
                show: false
              },
              padding: {
                left: 0,
                right: 0,
              },
            },
          },
          series: [
            {
              name: 'Profit',
              data: [100, 45, 30, 56, 45, 53, 41],
            },
            {
              name: 'Revenue',
              data: [75, 20, 40, 52, 50, 114, 94],
            },
            {
              name: 'Cash Flow',
              data: [95, 55, 100, 48, 105, 60, 66],
            },
          ],
        },
        chart5: {
          options: {
            chart: {
              width: 585,
              height: 360,
              type: 'radialBar',
            },
            plotOptions: {
              radialBar: {
                startAngle: -135,
                endAngle: 225,
                hollow: {
                  margin: 0,
                  size: '70%',
                  background: '#fff',
                  image: undefined,
                  imageOffsetX: 0,
                  imageOffsetY: 0,
                  position: 'front',
                  dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 4,
                    opacity: 0.05,
                  },
                },
                track: {
                  background: '#fff',
                  strokeWidth: '67%',
                  margin: 0, // margin is in pixels
                  dropShadow: {
                    enabled: true,
                    top: -3,
                    left: 0,
                    blur: 4,
                    opacity: 0.15,
                  },
                },
                dataLabels: {
                  show: true,
                  name: {
                    offsetY: -10,
                    show: true,
                    color: '#111',
                    fontSize: '17px',
                  },
                  value: {
                    formatter: function (val) {
                      return parseInt(val);
                    },
                    color: '#111',
                    fontSize: '36px',
                    show: true,
                  },
                },
              },
            },
            fill: {
              type: 'gradient',
              gradient: {
                shade: 'dark',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: [primary],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100],
              },
            },
            stroke: {
              lineCap: 'round',
            },
          },
          series: [70],
          labels: ['Volatility'],
        },
        chart6: {
          options: {
            chart: {
              width: 450,
              height: 350,
              type: 'radialBar',
              offsetY: -30,
              offsetX: 20,
            },
            legend: {
              show: true,
            },
            colors: [secondary, primary, '#51bb25'],
            plotOptions: {
              radialBar: {
                size: undefined,
                inverseOrder: false,
                hollow: {
                  margin: 5,
                  size: '48%',
                  background: 'transparent',
                },
                track: {
                  show: true,
                  background: '#f2f2f2',
                  strokeWidth: '10%',
                  opacity: 1,
                  margin: 3,
                },
              },
            },
          },
          series: [75, 63, 50],
          labels: ['Skill 01', 'Skill 02', 'Skill 03'],
        },
        progress1: {
          options: {
            chart: {
              fontFamily: 'Roboto, sans-serif',
              width: 990,
              height: 70,
              type: 'bar',
              stacked: true,
              sparkline: {
                enabled: true,
              },
            },
            stroke: {
              width: 0,
            },
            fill: {
              colors: ['rgba(115, 102, 255, 1)'],
            },
            legend: {
              show: true,
            },
            colors: ['rgba(115, 102, 255, 1)'],
            plotOptions: {
              bar: {
                horizontal: true,
                barHeight: '10%',
                colors: {
                  backgroundBarColors: ['rgba(115, 102, 255, 0.1)'],
                },
              },
            },
            title: {
              floating: true,
              offsetX: -10,
              offsetY: 5,
              text: 'Packed',
            },
            subtitle: {
              floating: true,
              align: 'right',
              offsetY: 0,
              text: '20%',
            },
            tooltip: {
              enabled: false,
            },
            xaxis: {
              categories: ['Process 1'],
            },
            yaxis: {
              max: 100,
            },
          },
          series: [
            {
              name: 'Process 1',
              data: [20],
            },
          ],
          labels: ['Device 1', 'Device 2'],
        },
        progress2: {
          options: {
            chart: {
              fontFamily: 'Roboto, sans-serif',
              width: 990,
              height: 70,
              type: 'bar',
              stacked: true,
              sparkline: {
                enabled: true,
              },
            },
            stroke: {
              lineCap: 'round'
            },
            fill: {
              colors: ['#f73164'],
            },
            legend: {
              show: true,
            },
            colors: ['#f73164'],
            plotOptions: {
              bar: {
                horizontal: true,
                barHeight: '10%',
                colors: {
                  backgroundBarColors: ['rgba(249 ,79 ,123, 0.1)'],
                },
              },
            },
            title: {
              floating: true,
              offsetX: -10,
              offsetY: 5,
              text: 'Dispatched',
            },
            subtitle: {
              floating: true,
              align: 'right',
              offsetY: 0,
              text: '40%',
            },
            tooltip: {
              enabled: false,
            },
            xaxis: {
              categories: ['Process 2'],
            },
            yaxis: {
              max: 100,
            },
          },
          series: [
            {
              name: 'Process 2',
              data: [40],
            },
          ],
          labels: ['Device 1', 'Device 2'],
        },
        progress3: {
          options: {
            chart: {
              fontFamily: 'Roboto, sans-serif',
              width: 990,
              height: 70,
              type: 'bar',
              stacked: true,
              sparkline: {
                enabled: true,
              },
            },
            stroke: {
              width: 0,
            },
            fill: {
              colors: ['#a927f9'],
            },
            legend: {
              show: true,
            },
            colors: ['#a927f9'],
            plotOptions: {
              bar: {
                horizontal: true,
                barHeight: '10%',
                colors: {
                  backgroundBarColors: ['rgba(180, 74, 248, 0.1)'],
                },
              },
            },
            title: {
              floating: true,
              offsetX: -10,
              offsetY: 5,
              text: 'Reach Station',
            },
            subtitle: {
              floating: true,
              align: 'right',
              offsetY: 0,
              text: '50%',
            },
            tooltip: {
              enabled: false,
            },
            xaxis: {
              categories: ['Process 3'],
            },
            yaxis: {
              max: 100,
            },
          },
          series: [
            {
              name: 'Process 3',
              data: [50],
            },
          ],
          labels: ['Device 1', 'Device 2'],
        },
        progress4: {
          options: {
            chart: {
              fontFamily: 'Roboto, sans-serif',
              width: 990,
              height: 70,
              type: 'bar',
              stacked: true,
              sparkline: {
                enabled: true,
              },
            },
            stroke: {
              width: 0,
            },
            fill: {
              colors: ['#F8D62B'],
            },
            legend: {
              show: true,
            },
            colors: ['#F8D62B'],
            plotOptions: {
              bar: {
                horizontal: true,
                barHeight: '10%',
                colors: {
                  backgroundBarColors: ['rgba(248,214, 43, 0.1)'],
                },
              },
            },
            title: {
              floating: true,
              offsetX: -10,
              offsetY: 5,
              text: 'Out for delivery',
            },
            subtitle: {
              floating: true,
              align: 'right',
              offsetY: 0,
              text: '60%',
            },
            tooltip: {
              enabled: false,
            },
            xaxis: {
              categories: ['Process 4'],
            },
            yaxis: {
              max: 100,
            },
          },
          series: [
            {
              name: 'Process 4',
              data: [60],
            },
          ],
          labels: ['Device 1', 'Device 2'],
        },
        progress5: {
          options: {
            chart: {
              fontFamily: 'Roboto, sans-serif',
              width: 990,
              height: 70,
              type: 'bar',
              stacked: true,
              sparkline: {
                enabled: true,
              },
            },
            stroke: {
              width: 0,
            },
            fill: {
              colors: ['#51bb25'],
            },
            legend: {
              show: true,
            },
            colors: ['#51bb25'],
            plotOptions: {
              bar: {
                horizontal: true,
                barHeight: '10%',
                colors: {
                  backgroundBarColors: ['rgba(107, 197, 75, 0.1)'],
                },
              },
            },
            title: {
              floating: true,
              offsetX: -10,
              offsetY: 5,
              text: 'Delivered',
            },
            subtitle: {
              floating: true,
              align: 'right',
              offsetY: 0,
              text: '10%',
            },
            tooltip: {
              enabled: false,
            },
            xaxis: {
              categories: ['Process 5'],
            },
            yaxis: {
              max: 100,
            },
          },
          series: [
            {
              name: 'Process 5',
              data: [10],
            },
          ],
          labels: ['Device 1', 'Device 2'],
        },
        chart7: {
          options: {
            chart: {
              width: 585,
              height: 350,
              type: 'bar',
              toolbar: {
                show: false,
              },
              zoom: {
                enabled: false,
              },
            },
            legend: {
              show: false,
            },
            colors: [primary],
            dataLabels: {
              enabled: false,
            },
            plotOptions: {
              bar: {
                radius: 10,
                horizontal: false,
                columnWidth: '55%',
              },
            },
            stroke: {
              show: true,
              colors: ['transparent'],
              curve: 'smooth',
              lineCap: 'butt'
            },
            title: {
              text: 'Load Average',
              align: 'left',
              style: {
                fontSize: '12px',
              },
            },
            subtitle: {
              text: '20%',
              floating: true,
              align: 'right',
              offsetY: 0,
              style: {
                fontSize: '22px',
              },
            },
            xaxis: {
              categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ],
            },
            fill: {
              colors: [primary],
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return '$ ' + val + ' thousands';
                },
              },
            },
          },
          series: [
            {
              data: [200, 250, 330, 390, 420, 500, 580, 620, 700],
            },
          ],
        },
        chart8: {
          options: {
            chart: {
              height: 350,
              type: 'line',
              toolbar : {
                show: false
              },
            },
            dataLabels: {
              enabled: false,
            },
            colors: [secondary, primary],
            title: {
              text: 'HeatMap Chart',
            },
          },
          stroke: {
            width: [2, 2],
          },
          series: [
            {
              name: 'Complete',
              data: [35, 45, 20, 42, 48, 35, 55, 60, 45, 65, 58, 62]
            },
            {
              name: 'Running',
              data: [35, 55, 50, 60, 75, 65, 64, 80, 90, 80, 83, 90]
            }
          ],
        },
        candleChart9: {
          options: {
            chart: {
              width: 1530,
              height: 500,
              type: 'candlestick',
              toolbar: {
                show: false,
              },
            },
            plotOptions: {
              candlestick: {
                colors: {
                  upward: primary,
                  downward: secondary,
                },
              },
            },
            colors: [primary],
            title: {
              text: 'CandleStick Chart',
              align: 'left',
            },
            xaxis: {
              type: 'datetime',
            },
            yaxis: {
              tooltip: {
                enabled: true,
              },
            },
          },
          series: [
            {
              data: [
                {
                  x: new Date(1538778600000),
                  y: [6629.81, 6650.5, 6623.04, 6633.33],
                },
                {
                  x: new Date(1538780400000),
                  y: [6632.01, 6643.59, 6620, 6630.11],
                },
                {
                  x: new Date(1538782200000),
                  y: [6630.71, 6648.95, 6623.34, 6635.65],
                },
                {
                  x: new Date(1538784000000),
                  y: [6635.65, 6651, 6629.67, 6638.24],
                },
                {
                  x: new Date(1538785800000),
                  y: [6638.24, 6640, 6620, 6624.47],
                },
                {
                  x: new Date(1538787600000),
                  y: [6624.53, 6636.03, 6621.68, 6624.31],
                },
                {
                  x: new Date(1538789400000),
                  y: [6624.61, 6632.2, 6617, 6626.02],
                },
                {
                  x: new Date(1538791200000),
                  y: [6627, 6627.62, 6584.22, 6603.02],
                },
                {
                  x: new Date(1538793000000),
                  y: [6605, 6608.03, 6598.95, 6604.01],
                },
                {
                  x: new Date(1538794800000),
                  y: [6604.5, 6614.4, 6602.26, 6608.02],
                },
                {
                  x: new Date(1538796600000),
                  y: [6608.02, 6610.68, 6601.99, 6608.91],
                },
                {
                  x: new Date(1538798400000),
                  y: [6608.91, 6618.99, 6608.01, 6612],
                },
                {
                  x: new Date(1538800200000),
                  y: [6612, 6615.13, 6605.09, 6612],
                },
                {
                  x: new Date(1538802000000),
                  y: [6612, 6624.12, 6608.43, 6622.95],
                },
                {
                  x: new Date(1538803800000),
                  y: [6623.91, 6623.91, 6615, 6615.67],
                },
                {
                  x: new Date(1538805600000),
                  y: [6618.69, 6618.74, 6610, 6610.4],
                },
                {
                  x: new Date(1538807400000),
                  y: [6611, 6622.78, 6610.4, 6614.9],
                },
                {
                  x: new Date(1538809200000),
                  y: [6614.9, 6626.2, 6613.33, 6623.45],
                },
                {
                  x: new Date(1538811000000),
                  y: [6623.48, 6627, 6618.38, 6620.35],
                },
                {
                  x: new Date(1538812800000),
                  y: [6619.43, 6620.35, 6610.05, 6615.53],
                },
                {
                  x: new Date(1538814600000),
                  y: [6615.53, 6617.93, 6610, 6615.19],
                },
                {
                  x: new Date(1538816400000),
                  y: [6615.19, 6621.6, 6608.2, 6620],
                },
                {
                  x: new Date(1538818200000),
                  y: [6619.54, 6625.17, 6614.15, 6620],
                },
                {
                  x: new Date(1538820000000),
                  y: [6620.33, 6634.15, 6617.24, 6624.61],
                },
                {
                  x: new Date(1538821800000),
                  y: [6625.95, 6626, 6611.66, 6617.58],
                },
                {
                  x: new Date(1538823600000),
                  y: [6619, 6625.97, 6595.27, 6598.86],
                },
                {
                  x: new Date(1538825400000),
                  y: [6598.86, 6598.88, 6570, 6587.16],
                },
                {
                  x: new Date(1538827200000),
                  y: [6588.86, 6600, 6580, 6593.4],
                },
                {
                  x: new Date(1538829000000),
                  y: [6593.99, 6598.89, 6585, 6587.81],
                },
                {
                  x: new Date(1538830800000),
                  y: [6587.81, 6592.73, 6567.14, 6578],
                },
                {
                  x: new Date(1538832600000),
                  y: [6578.35, 6581.72, 6567.39, 6579],
                },
                {
                  x: new Date(1538834400000),
                  y: [6579.38, 6580.92, 6566.77, 6575.96],
                },
                {
                  x: new Date(1538836200000),
                  y: [6575.96, 6589, 6571.77, 6588.92],
                },
                {
                  x: new Date(1538838000000),
                  y: [6588.92, 6594, 6577.55, 6589.22],
                },
                {
                  x: new Date(1538839800000),
                  y: [6589.3, 6598.89, 6589.1, 6596.08],
                },
                {
                  x: new Date(1538841600000),
                  y: [6597.5, 6600, 6588.39, 6596.25],
                },
                {
                  x: new Date(1538843400000),
                  y: [6598.03, 6600, 6588.73, 6595.97],
                },
                {
                  x: new Date(1538845200000),
                  y: [6595.97, 6602.01, 6588.17, 6602],
                },
                {
                  x: new Date(1538847000000),
                  y: [6602, 6607, 6596.51, 6599.95],
                },
                {
                  x: new Date(1538848800000),
                  y: [6600.63, 6601.21, 6590.39, 6591.02],
                },
                {
                  x: new Date(1538850600000),
                  y: [6591.02, 6603.08, 6591, 6591],
                },
                {
                  x: new Date(1538852400000),
                  y: [6591, 6601.32, 6585, 6592],
                },
                {
                  x: new Date(1538854200000),
                  y: [6593.13, 6596.01, 6590, 6593.34],
                },
                {
                  x: new Date(1538856000000),
                  y: [6593.34, 6604.76, 6582.63, 6593.86],
                },
                {
                  x: new Date(1538857800000),
                  y: [6593.86, 6604.28, 6586.57, 6600.01],
                },
                {
                  x: new Date(1538859600000),
                  y: [6601.81, 6603.21, 6592.78, 6596.25],
                },
                {
                  x: new Date(1538861400000),
                  y: [6596.25, 6604.2, 6590, 6602.99],
                },
                {
                  x: new Date(1538863200000),
                  y: [6602.99, 6606, 6584.99, 6587.81],
                },
                {
                  x: new Date(1538865000000),
                  y: [6587.81, 6595, 6583.27, 6591.96],
                },
                {
                  x: new Date(1538866800000),
                  y: [6591.97, 6596.07, 6585, 6588.39],
                },
                {
                  x: new Date(1538868600000),
                  y: [6587.6, 6598.21, 6587.6, 6594.27],
                },
                {
                  x: new Date(1538870400000),
                  y: [6596.44, 6601, 6590, 6596.55],
                },
                {
                  x: new Date(1538872200000),
                  y: [6598.91, 6605, 6596.61, 6600.02],
                },
                {
                  x: new Date(1538874000000),
                  y: [6600.55, 6605, 6589.14, 6593.01],
                },
                {
                  x: new Date(1538875800000),
                  y: [6593.15, 6605, 6592, 6603.06],
                },
                {
                  x: new Date(1538877600000),
                  y: [6603.07, 6604.5, 6599.09, 6603.89],
                },
                {
                  x: new Date(1538879400000),
                  y: [6604.44, 6604.44, 6600, 6603.5],
                },
                {
                  x: new Date(1538881200000),
                  y: [6603.5, 6603.99, 6597.5, 6603.86],
                },
                {
                  x: new Date(1538883000000),
                  y: [6603.85, 6605, 6600, 6604.07],
                },
                {
                  x: new Date(1538884800000),
                  y: [6604.98, 6606, 6604.07, 6606],
                },
              ],
            },
          ],
        },
        chart10: {
          options: {
            chart: {
              width: 855,
              height: 320,
              type: 'line',
              toolbar: {
                show: false,
              },
            },
            colors: [primary, secondary],
            stroke: {
              curve: 'smooth',
              width: 0,
            },
            markers: {
              size: 0,
            },
            yaxis: [
              {
                title: {
                  text: 'Dollars in thounand',
                },
              }
            ],
            fill: {
              colors: [secondary,primary],
              opacity: 0.5
            },
            tooltip: {
              shared: true,
            },
          },
          labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
          ],
          series: [
            {
              name: 'TEAM A',
              type: 'area',
              data: [60, 90, 65, 80, 55, 72, 30, 50, 31],
            },
            {
              name: 'TEAM B',
              type: 'area',
              data: [20, 30, 25, 50, 32, 75, 65, 80, 45],
            },
          ],
        },
        chart11: {
          options: {
            chart: {
              width: 510,
              height: 190,
              type: 'area',
              toolbar: {
                show: false,
              },
            },
            colors: [primary],
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: 'smooth',
              width: 2,
            },
            xaxis: {
              show: true,
              categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
              ],
            },
            fill: {
              colors: [primary],
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm',
              },
            },
            grid: {
              yaxis: {
                show: false,
              },
              padding: {
                right: -75,
                bottom: 0,
              },
            },
          },
          series: [
            {
              name: 'series1',
              data: [14, 12, 20, 20, 14, 22, 18, 26, 12, 18, 0],
            },
          ],
        },
        chart12: {
          options: {
            fill: {
              type: 'gradient',
              gradient: {
                shade: 'light',
                type: 'Reflected',
                shadeIntensity: 0.1,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 0.8,
                stops: [0, 100],
              },
            },
            colors: [primary, secondary, '#544fff'],
            chart: {
              height: 300,
              type: 'radar',
              dropShadow: {
                enabled: true,
                blur: 1,
                left: 1,
                top: 1,
              },
            },
            title: {
              text: 'Radar Chart - Multi Series',
            },
            stroke: {
              width: 0,
            },
            markers: {
              size: 0,
            },
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          },
          series: [
            {
              name: 'Series 1',
              data: [80, 50, 30, 40, 99, 20],
            },
            {
              name: 'Series 2',
              data: [20, 30, 40, 80, 20, 80],
            },
            {
              name: 'Series 3',
              data: [44, 76, 78, 13, 43, 10],
            },
          ],
        },
        chart13: {
          options: {
            chart: {
              toolbar: {
                show: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            fill: {
              type: 'gradient',
              gradient: {
                shade: 'light',
                type: 'horizontal',
                shadeIntensity: 0.4,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 0.7,
                stops: [0, 100],
              },
            },
            colors: [primary, secondary, '#51bb25', '#544fff'],
            title: {
              text: 'Simple Bubble Chart',
            },
            xaxis: {
              // tickAmount: 12,
              // type: 'category',
              show: false,
              labels: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
            },
            yaxis: {
              max: 70,
            },
          },
          series: [
            {
              name: 'Bubble1',
              data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60,
              }),
            },
            {
              name: 'Bubble2',
              data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60,
              }),
            },
            {
              name: 'Bubble3',
              data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60,
              }),
            },
            {
              name: 'Bubble4',
              data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60,
              }),
            },
          ],
        },
      };
    },
  };
</script>
