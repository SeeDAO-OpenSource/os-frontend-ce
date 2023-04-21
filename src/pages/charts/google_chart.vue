<template>
    <div>
        <Breadcrumbs main="Charts" title="Google Chart"/>
          <!-- Container-fluid starts-->
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12 col-xl-6">
                <div class="card">
                  <div class="card-header">
                    <h5>Pie Chart <span class="digits">1</span></h5>
                  </div>
                  <div class="card-body chart-block">
                    <GChart
                      class="chart-overflow" 
                      id="pie-chart1"
                      type="PieChart"
                      :data="pie_chart.chartData_1"
                      :options="pie_chart.options_1"
                    />
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-xl-6">
                <div class="card">
                  <div class="card-header">
                    <h5>Pie Chart <span class="digits">2</span></h5>
                  </div>
                  <div class="card-body chart-block">
                     <GChart
                      class="chart-overflow" 
                      id="pie-chart2"
                      type="PieChart"
                      :data="pie_chart.chartData_1"
                      :options="pie_chart.options_2"
                    />
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-xl-6">
                <div class="card">
                  <div class="card-header">
                    <h5>Pie Chart <span class="digits">3</span></h5>
                  </div>
                  <div class="card-body chart-block">
                    <GChart
                      class="chart-overflow" 
                      id="pie-chart3"
                      type="PieChart"
                      :data="pie_chart.chartData_2"
                      :options="pie_chart.options_1"
                    />
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-xl-6">
                <div class="card">
                  <div class="card-header">
                    <h5>Pie Chart <span class="digits">4</span></h5>
                  </div>
                  <div class="card-body chart-block">
                    <GChart
                      class="chart-overflow" 
                      id="pie-chart4"
                      type="PieChart"
                      :data="pie_chart.chartData_3"
                      :options="pie_chart.options_3"
                    />
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-xl-6">
                <div class="card">
                  <div class="card-header">
                    <h5>Area Chart <span class="digits">1</span></h5>
                  </div>
                  <div class="card-body chart-block">
                   <GChart
                      class="chart-overflow" 
                      id="area-chart1"
                      type="AreaChart"
                      :data="area_chart.chartData_1"
                      :options="area_chart.options_1"
                    />
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-xl-6">
                <div class="card">
                  <div class="card-header">
                    <h5>Area Chart <span class="digits">2</span></h5>
                  </div>
                  <div class="card-body chart-block">
                    <GChart
                      class="chart-overflow" 
                      id="area-chart2"
                      type="AreaChart"
                      :data="area_chart.chartData_2"
                      :options="area_chart.options_2"
                    />
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-xl-6">
                <div class="card">
                  <div class="card-header">
                    <h5>Column Chart <span class="digits">1</span></h5>
                  </div>
                  <div class="card-body chart-block">
                    <GChart
                      class="chart-overflow" 
                      id="column-chart1"
                      :settings="{packages: ['bar']}"    
                      :data="column_chart.chartData_1"
                      :options="verticalChartOptions"
                      :createChart="(el, google) => new google.charts.Bar(el)"
                      @ready="onChartReady"
                    />
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-xl-6">
                <div class="card">
                  <div class="card-header">
                    <h5>Column Chart <span class="digits">2</span></h5>
                  </div>
                  <div class="card-body chart-block">
                    <GChart
                      class="chart-overflow" 
                      id="column-chart2"
                      :settings="{packages: ['bar']}"    
                      :data="column_chart.chartData_1"
                      :options="horizontalChartOptions"
                      :createChart="(el, google) => new google.charts.Bar(el)"
                      @ready="onChartReady"
                    />
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-xl-6">
                <div class="card">
                  <div class="card-header">
                    <h5>Bars Chart <span class="digits">1</span></h5>
                  </div>
                  <div class="card-body chart-block">
                    <div class="chart-overflow" id="bar-chart1"></div>
                    <GChart
                      class="chart-overflow" 
                      id="bar-chart1"
                      type="ColumnChart"
                      :data="bar_chart.chartData_1"
                      :options="bar_chart.options_1"
                    />
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-xl-6">
                <div class="card">
                  <div class="card-header">
                    <h5>Bars Chart <span class="digits">2</span></h5>
                  </div>
                  <div class="card-body chart-block">
                    <GChart
                      class="chart-overflow" 
                      id="bar-chart2"
                      type="BarChart"
                      :data="bar_chart.chartData_1"
                      :options="bar_chart.options_1"
                    />
                  </div>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Line Chart</h5>
                  </div>
                  <div class="card-body chart-block">
                    <GChart
                      class="chart-overflow" 
                      id="line-chart"
                      type="LineChart"
                      :data="line_chart.chartData_1"
                      :options="line_chart.options_1"
                    />
                  </div>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Combo Chart</h5>
                  </div>
                  <div class="card-body chart-block">
                    <GChart
                      class="chart-overflow" 
                      id="combo-chart"
                      type="ComboChart"
                      :data="combo_chart.chartData_1"
                      :options="combo_chart.options_1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        <!-- Container-fluid Ends-->
    </div>
</template>
<script>

  var primary = localStorage.getItem('primary_color') || '#7366ff';
  var secondary = localStorage.getItem('secondary_color') || '#f73164';

  import { GChart } from 'vue-google-charts';
  
  export default {
    components: { GChart },
    data() {
      return {
        chartsLib: null, 
        pie_chart: {
          chartData_1: [
            ['Task', 'Hours per Day'],
            ['Work',     5],
            ['Eat',      10],
            ['Commute',  15],
            ['Watch TV', 20],
            ['Sleep',    25]
          ],
          chartData_2: [
            ['Task', 'Hours per Day'],
            ['Work',     2],
            ['Eat',      2],
            ['Commute',  11],
            ['Watch TV', 2],
            ['Sleep',    7]
          ],
          chartData_3: [
            ['Language', 'Speakers (in millions)'],
            ['Assamese', 13],
            ['Bengali', 83], 
            ['Bodo', 1.4],
            ['Dogri', 2.3], 
            ['Gujarati', 46], 
            ['Hindi', 300],
            ['Kannada', 38], 
            ['Kashmiri', 5.5], 
            ['Konkani', 5],
            ['Maithili', 20], 
            ['Malayalam', 33], 
            ['Manipuri', 1.5],
            ['Marathi', 72], 
            ['Nepali', 2.9], 
            ['Oriya', 33],
            ['Punjabi', 29], 
            ['Sanskrit', 0.01], 
            ['Santhali', 6.5],
            ['Sindhi', 2.5], 
            ['Tamil', 61], 
            ['Telugu', 74], 
            ['Urdu', 52]
          ],
          options_1: { 
            title: 'My Daily Activities',
            width:'100%',
            height: 400,
            colors: ['#a927f9', primary, '#51bb25', '#f8d62b', secondary]
          },
          options_2: { 
            title: 'My Daily Activities',
            is3D: true,
            width:'100%',
            height: 400,
            colors: ['#a927f9', primary, '#51bb25', '#f8d62b', secondary]
          },
          options_3: { 
            title: 'Indian Language Use',
            legend: 'none',
            width:'100%',
            height: 400,
            pieSliceText: 'label',
            slices: {  4: { offset: 0.2 },
                       12: { offset: 0.3 },
                       14: { offset: 0.4 },
                       15: { offset: 0.5 },
            },
            // colors: ["#ab8ce4", "#26c6da"]
            // colors: ["#7366ff", "#f73164", "#51bb25", "#007bff", "#ff9f40", "#FF5370","#7366ff", "#f73164", "#51bb25", "#007bff", "#ff9f40", "#FF5370","#7366ff", "#f73164", "#51bb25", "#007bff", "#ff9f40", "#FF5370", "#fd7b6c", "#22af47","#007bff", "#ff9f40"]
            colors: ['#dc3545', primary , secondary , '#51bb25', '#a927f9', '#f8d62b','#dc3545', primary , '#f8d62b', '#51bb25', primary , secondary ,'#51bb25', primary , '#a927f9', '#f8d62b', primary , primary, '#a927f9', secondary , primary , '#51bb25']
          },
        },
        area_chart: {
          chartData_1: [  
            ['Year', 'Sales', 'Expenses'],
            ['2013',  1000,      400],
            ['2014',  1170,      460],
            ['2015',  660,       1120],
            ['2016',  1030,      540]
          ],
          chartData_2: [  
            ['Year', 'Cars', 'Trucks' , 'Drones' , 'Segways'],
            ['2013',  100, 400, 2000, 400],
            ['2014',  500, 700, 530, 800],
            ['2015',  2000, 1000, 620, 120],
            ['2016',  120, 201, 2501, 540]
          ],
          options_1: {
            title: 'Company Performance',
            hAxis: { title: 'Year',  titleTextStyle: { color: '#333' } },
            vAxis: { minValue: 0 },
            width:'100%',
            height: 400,
            colors: [ primary , secondary ]
          },
          options_2: {
            title: 'Company Performance',
            hAxis: { title: 'Year',  titleTextStyle: { color: '#333' } },
            vAxis: { minValue: 0 },
            width:'100%',
            height: 400,
            colors: [ primary , secondary , '#51bb25', '#f8d62b']
          }
        },
        column_chart: {
          chartData_1: [  
            ['Year', 'Sales', 'Expenses', 'Profit'],
            ['2014', 1e3, 400, 250],
            ['2015', 1170, 460, 300],
            ['2016', 660, 1120, 400],
            ['2017', 1030, 540, 450]
          ],
        },
        bar_chart: {
          chartData_1: [  
            ['Element', 'Density', { role: 'style' } ],
            ['Copper', 10, primary],
            ['Silver', 12, secondary],
            ['Gold', 14, '#22af47'],
            ['Platinum', 16, 'color: #007bff']
          ],
          options_1:  {
            title: 'Density of Precious Metals, in g/cm^3',
            width:'100%',
            height: 400,
            bar: { groupWidth: '95%' },
            legend: { position: 'none' },
          }
        },
        line_chart: {
          chartData_1: [  
            ['Month', 'Guardians of the Galaxy', 'The Avengers','Transformers: Age of Extinction'],
            [1,  37.8, 80.8, 41.8],
            [2,  30.9, 10.5, 32.4],
            [3,  40.4,   57, 25.7],
            [4,  11.7, 18.8, 10.5],
            [5,   20, 17.6, 10.4],
            [6,   8.8, 13.6,  7.7],
            [7,   7.6, 12.3,  9.6],
            [8,  12.3, 29.2, 10.6],
            [9,  16.9, 42.9, 14.8],
            [10, 12.8, 30.9, 11.6],
            [11,  5.3,  7.9,  4.7],
            [12,  6.6,  8.4,  5.2],
          ],
          options_1:  {
            chart: {
              title: 'Box Office Earnings in First Two Weeks of Opening',
              subtitle: 'in millions of dollars (USD)'
            },
            colors: [primary, secondary, '#51bb25'],
            height: 500,
            width:'100%',
          }
        },
        combo_chart: {
          chartData_1: [  
            ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
            ['2004/05',  165,      938,         522,             998,           450,      614.6],
            ['2005/06',  135,      1120,        599,             1268,          288,      682],
            ['2006/07',  157,      1167,        587,             807,           397,      623],
            ['2007/08',  139,      1110,        615,             968,           215,      609.4],
            ['2008/09',  136,      691,         629,             1026,          366,      569.6]
          ],
          options_1:  {
            title : 'Monthly Coffee Production by Country',
            vAxis: { title: 'Cups' },
            hAxis: { title: 'Month' },
            seriesType: 'bars',
            series: { 5: { type: 'line' } },
            height: 500,
            fullWidth: true,
            colors: [primary, secondary, '#51bb25', '#FF5370', '#007bff']
          }
        },

      };
    },
    computed: {
      verticalChartOptions () {
        if (!this.chartsLib) return null;
        return this.chartsLib.charts.Bar.convertOptions({
          chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017'
          },
          bars: 'vertical',
          vAxis: {
            format: 'decimal'
          },
          height: 400,
          width:'100%',
          colors: [ primary, secondary , '#51bb25']
        });
      },
      horizontalChartOptions () {
        if (!this.chartsLib) return null;
        return this.chartsLib.charts.Bar.convertOptions({
          chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017'
          },
          bars: 'horizontal',
          vAxis: {
            format: 'decimal'
          },
          height: 400,
          width:'100%',
          colors: [ primary, secondary , '#51bb25']
        });
      }
    },
    methods: {
      onChartReady (chart, google) {
        this.chartsLib = google;
      }
    }

  };
</script>