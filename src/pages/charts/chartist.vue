<template>
  <div>
    <Breadcrumbs main="Charts" title="Chartist"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
          <div class="row chartist-container">
            <div class="col-xl-6 col-md-12 col-sm-12">
              <px-card title="Advanced SMIL Animations">
                    <div slot="headerAction" ></div>
                    <div slot="with-padding" >
                       <chartist
                          class="ct-6 flot-chart-container"
                          ratio="ct-major-second"
                          type="Line"
                          :data="chart1.data"
                          :options="chart1.options"
                          :event-handlers="chart1.eventHandlers">
                  </chartist>
                    </div>
                </px-card>
            </div>

            <div class="col-xl-6 col-md-12 col-sm-12">
              <px-card title="SVG Path Animations">
                    <div slot="headerAction" ></div>
                    <div slot="with-padding" >
                       <chartist
                          class="ct-7 flot-chart-container"
                          ratio="ct-major-second"
                          type="Line"
                          :data="chart2.data"
                          :options="chart2.options"
                          :event-handlers="chart2.eventHandlers">
                  </chartist>
                    </div>
                </px-card>
            </div>

            <div class="col-xl-6 col-md-12 col-sm-12">
              <px-card title="Animating a Donut with Svg.animate">
                    <div slot="headerAction" ></div>
                    <div slot="with-padding" >
                       <chartist
                          class="ct-8 flot-chart-container"
                          ratio="ct-major-second"
                          type="Pie"
                          :data="chart3.data"
                          :options="chart3.options"
                          :event-handlers="chart3.eventHandlers">
                  </chartist>
                    </div>
                </px-card>
            </div>

            <div class="col-xl-6 col-md-12 col-sm-12">
              <px-card title="Bi-polar Line chart with area only">
                    <div slot="headerAction" ></div>
                    <div slot="with-padding" >
                       <chartist
                          class="ct-5 flot-chart-container"
                          ratio="ct-major-second"
                          type="Line"
                          :data="chart4.data"
                          :options="chart4.options">
                  </chartist>
                    </div>
                </px-card>
            </div>

            <div class="col-xl-6 col-md-12 col-sm-12">
              <px-card title="Line chart with area">
                    <div slot="headerAction" ></div>
                    <div slot="with-padding" >
                       <chartist
                          class="ct-4 flot-chart-container"
                          ratio="ct-major-second"
                          type="Line"
                          :data="chart5.data"
                          :options="chart5.options">
                  </chartist>
                    </div>
                </px-card>
            </div>

            <div class="col-xl-6 col-md-12 col-sm-12">
               <px-card title="Bi-polar bar chart">
                    <div slot="headerAction" ></div>
                    <div slot="with-padding" >
                      <chartist
                          class="ct-9 flot-chart-container"
                          ratio="ct-major-second"
                          type="Bar"
                          :data="chart6.data"
                          :options="chart6.options">
                  </chartist>
                    </div>
                </px-card>
            </div>

            <div class="col-xl-6 col-md-12 col-sm-12">
              <px-card title="Stacked bar chart">
                    <div slot="headerAction" ></div>
                    <div slot="with-padding" >
                      <chartist
                          class="ct-10 flot-chart-container"
                          ratio="ct-major-second"
                          type="Bar"
                          :data="chart7.data"
                          :options="chart7.options">
                  </chartist>
                    </div>
                </px-card>
            </div>

            <div class="col-xl-6 col-md-12 col-sm-12">
              <px-card title="Horizontal bar chart">
                    <div slot="headerAction" ></div>
                    <div slot="with-padding" >
                      <chartist
                          class="ct-11 flot-chart-container"
                          ratio="ct-major-second"
                          type="Bar"
                          :data="chart8.data"
                          :options="chart8.options">
                  </chartist>
                    </div>
                </px-card>
            </div>

            <div class="col-xl-6 col-md-12 col-sm-12">
              <px-card title="Extreme responsive configuration">
                    <div slot="headerAction" ></div>
                    <div slot="with-padding" >
                      <chartist
                          class="ct-12 flot-chart-container"
                          ratio="ct-major-second"
                          type="Bar"
                          :data="chart9.data"
                          :options="chart9.options"
                          :responsiveOptions="chart9.responsiveOptions">
                  </chartist>
                    </div>
                </px-card>
            </div>

            <div class="col-xl-6 col-md-12 col-sm-12">
              <px-card title="Simple line chart">
                    <div slot="headerAction" ></div>
                    <div slot="with-padding" >
                      <chartist
                          class="ct-1 flot-chart-container"
                          ratio="ct-major-second"
                          type="Line"
                          :data="chart10.data"
                          :options="chart10.options">
                  </chartist>
                    </div>
                </px-card>
            </div>

            <div class="col-xl-6 col-md-12 col-sm-12">
              <px-card title="Holes in data">
                    <div slot="headerAction" ></div>
                    <div slot="with-padding" >
                      <chartist
                          class="ct-2 flot-chart-container"
                          ratio="ct-major-second"
                          type="Line"
                          :data="chart11.data"
                          :options="chart11.options">
                  </chartist>
                    </div>
                </px-card>
            </div>

            <div class="col-xl-6 col-md-12 col-sm-12">
              <px-card title="Filled holes in data">
                    <div slot="headerAction" ></div>
                    <div slot="with-padding" >
                      <chartist
                          class="ct-3 flot-chart-container"
                          ratio="ct-major-second"
                          type="Line"
                          :data="chart12.data"
                          :options="chart12.options">
                  </chartist>
                    </div>
                </px-card>
            </div>

          </div>
        </div>
        <!-- Container-fluid Ends-->
  </div>
</template>
<script>
  import * as Chartist from 'chartist';

  var seq = 0;
  var delays = 80;
  var durations = 500;
  
  export default {
    data() {
      return {
        chart1 : {
          data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            series: [
              [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
              [4,  5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
              [5,  3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
              [3,  4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
            ]
          },
          options: {
            low: 0,
            showArea: false,
            fullWidth: true,
          },
          eventHandlers : [{
            event: 'draw',
            fn(data) {
              seq++;
              if(data.type === 'line') {
                data.element.animate({
                  opacity: {
                    begin: seq * delays + 1000,
                    dur: durations,
                    from: 0,
                    to: 1
                  }
                });
              } else if(data.type === 'label' && data.axis === 'x') {
                data.element.animate({
                  y: {
                    begin: seq * delays,
                    dur: durations,
                    from: data.y + 100,
                    to: data.y,
                    easing: 'easeOutQuart'
                  }
                });
              } else if(data.type === 'label' && data.axis === 'y') {
                data.element.animate({
                  x: {
                    begin: seq * delays,
                    dur: durations,
                    from: data.x - 100,
                    to: data.x,
                    easing: 'easeOutQuart'
                  }
                });
              } else if(data.type === 'point') {
                data.element.animate({
                  x1: {
                    begin: seq * delays,
                    dur: durations,
                    from: data.x - 10,
                    to: data.x,
                    easing: 'easeOutQuart'
                  },
                  x2: {
                    begin: seq * delays,
                    dur: durations,
                    from: data.x - 10,
                    to: data.x,
                    easing: 'easeOutQuart'
                  },
                  opacity: {
                    begin: seq * delays,
                    dur: durations,
                    from: 0,
                    to: 1,
                    easing: 'easeOutQuart'
                  }
                });
              } else if(data.type === 'grid') {
                var pos1Animation = {
                  begin: seq * delays,
                  dur: durations,
                  from: data[data.axis.units.pos + '1'] - 30,
                  to: data[data.axis.units.pos + '1'],
                  easing: 'easeOutQuart'
                };
                var pos2Animation = {
                  begin: seq * delays,
                  dur: durations,
                  from: data[data.axis.units.pos + '2'] - 100,
                  to: data[data.axis.units.pos + '2'],
                  easing: 'easeOutQuart'
                };
                var animations = {};
                animations[data.axis.units.pos + '1'] = pos1Animation;
                animations[data.axis.units.pos + '2'] = pos2Animation;
                animations['opacity'] = {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'easeOutQuart'
                };
                data.element.animate(animations);
              }
            }
          }]
        },
        chart2 : {
          data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            series: [
              [1, 5, 2, 5, 4, 3],
              [2, 3, 4, 8, 1, 2],
              [5, 4, 3, 2, 1, 0.5]
            ]
          },
          options: {
            low: 0,
            showArea: true,
            showPoint: false,
            fullWidth: true,
          },
          eventHandlers : [{
            event: 'draw',
            fn(data) {
              if(data.type === 'line' || data.type === 'area') {
                data.element.animate({
                  d: {
                    begin: 2000 * data.index,
                    dur: 2000,
                    from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                    to: data.path.clone().stringify(),
                    easing: Chartist.Svg.Easing.easeOutQuint
                  }
                });
              }
            }
          }]
        },
        chart3 : {
          data: {
            series: [10, 20, 50, 20, 5, 50, 15],
            labels: [1, 2, 3, 4, 5, 6, 7]
          },
          options: {
            donut: true,
            showLabel: false,
          },
          eventHandlers : [{
            event: 'draw',
            fn(data) {
              if(data.type === 'slice') {
                var pathLength = data.element._node.getTotalLength();
                data.element.attr({
                  'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
                });
                var animationDefinition = {
                  'stroke-dashoffset': {
                    id: 'anim' + data.index,
                    dur: 1000,
                    from: -pathLength + 'px',
                    to:  '0px',
                    easing: Chartist.Svg.Easing.easeOutQuint,
                    fill: 'freeze'
                  }
                };
                data.element.attr({
                  'stroke-dashoffset': -pathLength + 'px'
                });
                data.element.animate(animationDefinition, false);
              } 
            }
          }]
        },
        chart4 : {
          data: {
            abels: [1, 2, 3, 4, 5, 6, 7, 8],
            series: [
              [1, 2, 3, 1, -2, 0, 1, 0],
              [-2, -1, -2, -1, -2.5, -1, -2, -1],
              [0, 0, 0, 1, 2, 2.5, 2, 1],
              [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
            ]
          },
          options: {
            high: 3,
            low: -3,
            showArea: true,
            showLine: false,
            showPoint: false,
            fullWidth: true,
            axisX: {
              showLabel: false,
              showGrid: false
            },
          },
        },
        chart5 : {
          data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8],
            series: [
              [5, 9, 7, 8, 5, 3, 5, 4]
            ]
          },
          options: {
            low: 0,
            showArea: true,
          },
        },
        chart6 : {
          data: {
            labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
            series: [
              [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
            ]
          },
          options: {
            high: 10,
            low: -10,
            axisX: {
              labelInterpolationFnc: function(value, index) {
                return index % 2 === 0 ? value : null;
              }
            },
          },
        },
        chart7 : {
          data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q13', 'Q14'],
            series: [
              [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300],
              [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300],
              [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300]
            ]
          },
          options: {
            stackBars: true,
            axisY: {
              labelInterpolationFnc: function(value) {
                return (value / 1000) + 'k';
              }
            },
          },
        },
        chart8 : {
          data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            series: [
              [5, 4, 3, 7, 5, 10, 3],
              [3, 2, 9, 5, 4, 6, 4]
            ]
          },
          options: {
            seriesBarDistance: 10,
            reverseData: true,
            horizontalBars: true,
            axisY: {
              offset: 70
            },
          },
        },
        chart9 : {
          data: {
            labels: ['2010-11', '2011-12', '2012-13', '2013-13', '2014-15', '2015-16', '2016-17', '2017-18'],
            series: [
              [0.9, 0.4, 1.5, 4.9, 3, 3.8, 3.8, 1.9],
              [6.4, 5.7, 7, 4.95, 3, 3.8, 3.8, 1.9],
              [4.3, 2.3, 3.6, 4.5, 5, 2.8, 3.3, 4.3],
              [3.8, 4.1, 2.8, 1.8, 2.2, 1.9, 6.7, 2.9]
            ]
          },
          options: {
            seriesBarDistance: 15,
            horizontalBars: false,
            axisY: {
              offset: 20
            },
          },
          responsiveOptions : [
            ['screen and (min-width: 1200px) and (max-width: 1366px)', {
              seriesBarDistance: 10
            }],
            ['screen and (max-width: 767px)', {
              seriesBarDistance: 10
            }],
            ['screen and (max-width: 480px)', {
              stackBars: true,
              seriesBarDistance: 6,
            }]
          ]
        },
        chart10 : {
          data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            series: [
              [12, 9, 7, 8, 5],
              [2, 1, 3.5, 7, 3],
              [1, 3, 4, 5, 6]
            ]
          },
          options: {
            fullWidth: true,
            chartPadding: {
              right: 40
            }
          },
        },
        chart11 : {
          data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            series: [
              [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9],
              [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null],
              [null, null, null, null, 3, 4, 1, 3, 4,  6,  7,  9, 5, null, null, null],
              [{ x:3, y: 3 },{ x: 4, y: 3 }, { x: 5, y: undefined }, { x: 6, y: 4 }, { x: 7, y: null }, { x: 8, y: 4 }, { x: 9, y: 4 }]
            ]
          },
          options: {
            fullWidth: true,
            chartPadding: {
              right: 10
            },
            low: 0
          },
        },
        chart12 : {
          data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            series: [
              [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9],
              [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null],
              [null, null, null, null, 3, 4, 1, 3, 4,  6,  7,  9, 5, null, null, null],
              [{ x:3, y: 3 },{ x: 4, y: 3 }, { x: 5, y: undefined }, { x: 6, y: 4 }, { x: 7, y: null }, { x: 8, y: 4 }, { x: 9, y: 4 }]
            ]
          },
          options: {
            fullWidth: true,
            chartPadding: {
              right: 10
            },
            lineSmooth: Chartist.Interpolation.cardinal({
              fillHoles: true
            }),
            low: 0
          }
        }
      };
    }
  };
</script>