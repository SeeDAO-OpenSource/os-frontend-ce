export const TotalSales = {
  series: [25, 35, 35],
  chartOptions: {
    labels: ["2021", "2020", "2019", "2018"],
    chart: {
      height: 280,
      type: "donut",
      foreColor: "#adb0bb",
      fontFamily: "DM sans",
    },
    colors: ["#03c9d7", "#fb9778", "#ecf0f2"],
    dataLabels: { enabled: false },
    legend: { show: false },
    grid: {
      show: false,
      borderColor: "transparent",
      padding: { top: 0, right: 0 },
    },
    stroke: { colors: ["transparent"] },
    plotOptions: {
      pie: {
        donut: {
          size: "78%",
          background: "transparent",
          labels: {
            show: false,
            name: {
              show: true,
              fontSize: "18px",
              color: undefined,
              offsetY: -10,
            },
            value: { show: false, color: "#98aab4" },
            total: { show: false, label: "Our Visitors", color: "#98aab4" },
          },
        },
      },
    },
    tooltip: { theme: "dark", fillSeriesColor: false },
    responsive: [{ breakpoint: 480, options: { chart: { height: 250 } } }],
  },
};
