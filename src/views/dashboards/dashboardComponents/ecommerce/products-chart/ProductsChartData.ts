export const ProductsChart = {
    series: [
      {
        name: "Expence",
        data: [300, 300, 180, 320, 250, 300, 300],
      },
      {
        name: "Budget",
        data: [60, 90, 80, 60, 70, 100, 80],
      },
    ],
    chartOptions: {
      grid: {
        show: false,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '35%',
          borderRadius: 9,
        },
      },
      colors: ["#03c9d7", "#fb9778"],
      fill: {
        type: "solid",
        opacity: 1,
      },
      chart: {
        type: 'bar',
        height: 285,
        stacked: true,
        toolbar: {
          show: false,
        },
        foreColor: '#adb0bb',
        fontFamily: 'DM sans',
        sparkline: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      legend: {
        show: false,
      },
      xaxis: {
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: true,
        min: 100,
        max: 400,
        tickAmount: 3,
      },

      stroke: {
        show: true,
        width: 2,
        curve: 'smooth',
      },
      tooltip: {
        theme: "dark",
      },
    },
};