export const ProductsReportChart = {
    series: [
      {
        name: "Products Performance",
        data: [35, 60, 30, 55, 40],
      },
    ],
    chartOptions: {
      grid: {
        show: false,
      },
      colors: ["#03c9d7"],
      chart: {
        toolbar: {
          show: false,
        },
        foreColor: "#adb0bb",
        fontFamily: "'DM Sans',sans-serif",
        type: "line",
        height: 30,
        sparkline: {
          enabled: true,
        },
      },
      markers: {
        size: 0,
      },
      legend: {
        show: false,
      },
      stroke: {
        show: true,
        width: 2,
        curve: "smooth",
      },
      tooltip: {
        theme: "dark",
      },
    },
};