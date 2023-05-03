export const RevenueChart = {
  series: [
    {
      name: "Earnings",
      data: [0, 5, 6, 8, 25, 9, 11, 24],
    },
    {
      name: "Expense",
      data: [0, 3, 1, 2, 8, 1, 5, 1],
    },
  ],
  chartOptions: {
    colors: ["#fb9678", "#03c9d7"],
    fill: {
      type: "solid",
      opacity: 1,
    },
    chart: {
      toolbar: {
        show: false,
      },
      type: "line",
      foreColor: "#adb0bb",
      fontFamily: "'DM Sans',sans-serif",
      height: 300,
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 4,
      border: 1,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        "16/08",
        "17/08",
        "18/08",
        "19/08",
        "20/08",
        "21/08",
        "22/08",
        "23/08",
      ],
    },
    grid: {
      show: true,
      borderColor: "rgba(0, 0, 0, .2)",
      color: "#777e89",
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
      theme: "dark",
    },
  },
};
