export const FirstClassData = {
  statsData : [
    // 初级组22人参与，展示人数
    // 中级组4人参与，展示人数2人
    {
      color: "primary",
      icon: "speaker",
      title: "参与人数",
      desc: "Attender",
      number: 26,
    },
    {
      color: "warning",
      icon: "message-square",
      title: "共学主题",
      desc: "Colearning Topic",
      number: 2,
    },
    {
      color: "success",
      icon: "star",
      title: "通过考核",
      desc: "Pass The Assessment",
      number: 10,
    },
  ],
  
  series: [
    {
      name: "First Class Data",
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
