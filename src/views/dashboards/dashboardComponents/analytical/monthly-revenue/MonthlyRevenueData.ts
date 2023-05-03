export const MonthlyRevenueData = {
  series: [
    {
      name: "Monthly Sales",
      data: [35, 60, 30, 55, 40],
    },
  ],
  chartOptions: {
    colors: ["#03c9d7"],
    fill: {
      colors: "#03c9d7",
      opacity: 0.05,
      type: "solid",
    },
    chart: {
      type: "area",
      height: 75,
      toolbar: {
        show: false,
      },
      foreColor: "#adb0bb",
      fontFamily: "'DM Sans',sans-serif",
      sparkline: {
        enabled: true,
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
