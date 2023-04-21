<script>
  var primary = localStorage.getItem('primary_color') || '#4466f2';
  var secondary = localStorage.getItem('secondary_color') || '#1ea6ec';

  import { Doughnut } from 'vue-chartjs';

  export default {
    extends: Doughnut,
    data () {
      return {
        datacollection: {
          labels: ['Google Crome', 'Mozila Firefox', 'Safari', 'Opera Browser'],
          datasets: [
            {
              label: 'BrowserUses',
              backgroundColor: [primary, secondary ,primary ,secondary ,primary, secondary ,primary],
              borderWidth: 0,
              hoverBorderWidth: 0,
              data: [90,70,80,60],
            }
          ]
        },
        options: {
          legend: {
            display: false,
          }
        }
      };
    },
    mounted () {
      this.renderChart(this.datacollection, this.options, { responsive: true, maintainAspectRatio: false });
    }
  };
</script>
