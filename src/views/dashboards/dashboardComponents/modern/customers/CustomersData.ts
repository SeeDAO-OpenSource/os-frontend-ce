export const CustomerChart = {
  series: [
    {
      name: "Customers",
      data: [1, 19, 3, 13, 2, 19],
    },
  ],
  chartOptions: {
    chart: {
      toolbar: {
        show: false,
      },
      foreColor: "#adb0bb",
      fontFamily: "'DM Sans',sans-serif",
      type: "line",
      height: 55,
      sparkline: {
        enabled: true,
      },
    },
    colors: ["rgb(255,255,255)"],

    marker: {
      size: 0,
    },

    tooltip: {
      theme: "dark",
    },

    grid: {
      show: false,
    },

    stroke: {
      show: true,
      width: 2,
      curve: "smooth",
    },
  },
};
