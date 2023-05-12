export const WeeklyStats = {
  series: [
    {
      name: "Weekly Stats",
      data: [40, 60, 50, 65],
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
      height: 120,
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
