<script>
  var primary = localStorage.getItem('primary_color') || '#4466f2';
  var secondary = localStorage.getItem('secondary_color') || '#1ea6ec';
  
  import { Doughnut } from 'vue-chartjs';


  export default {
    extends: Doughnut,
    data () {
      return {
        datacollection: {
          labels: ['North Countries', 'South Countries', 'East Countries', 'West Countries'],
          datasets: [
            {
              label: 'WebsiteVisitor',
              backgroundColor:[primary, secondary ,primary ,secondary ,primary, secondary ,primary],
              borderWidth: 0,
              hoverBorderWidth: 0,
              data: [35,56,80,86],
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