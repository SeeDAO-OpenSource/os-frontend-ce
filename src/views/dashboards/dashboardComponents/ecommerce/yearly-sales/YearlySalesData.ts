export const YearlySalesChart = {
  series: [25, 25, 25, 25],
  chartOptions: {
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          background: "transparent",
          labels: {
            show: false,
            name: {
              show: true,
              fontSize: "18px",
              color: undefined,
              offsetY: -10,
            },
            value: {
              show: false,
              color: "#98aab4",
            },
            total: {
              show: false,
              label: "Our Visitors",
              color: "#98aab4",
            },
          },
        },
      },
    },
    labels: ["2021", "2020", "2019", "2018"],
    colors: ["#03c9d7", "#1e4db7", "#fec90f", "#ecf0f2"],
    chart: {
      toolbar: {
        show: false,
      },
      foreColor: "#adb0bb",
      fontFamily: "'DM Sans',sans-serif",
      type: "donut",
      height: 145,
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
    stroke: {
      colors: ["transparent"],
    },
    tooltip: {
      theme: "dark",
      fillSeriesColor: false,
    },
  },
};
