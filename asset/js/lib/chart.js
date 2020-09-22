const chart = () => {
  const chart = echarts.init(document.getElementById("chart"));
  const d1 = [65, 59, 80, 81, 40, 56, 55];

  // specify chart configuration item and data
  const option = {
    tooltip: {},
    legend: {
      data: ["Sales"],
    },
    xAxis: {
      data: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    },
    yAxis: {},
    series: [
      {
        type: "bar",
        barWidth: 20,
        data: d1.map((item) => {
          return {
            value: item,
            itemStyle: {
              color: item > 0 ? "#2196F3" : "#F44336",
              barBorderRadius: item > 0 ? [100, 100, 0, 0] : [0, 0, 100, 100],
            },
          };
        }),
      },
    ],
  };

  chart.setOption(option);
  // var myChart = new Chart(ctx, {
  //   type: "bar",
  //   data: {
  //     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //     datasets: [
  //       {
  //         label: "# of Votes",
  //         data: [12, 19, 3, 5, 2, 3],
  //         backgroundColor: [
  //           "rgba(255, 99, 132, 0.2)",
  //           "rgba(54, 162, 235, 0.2)",
  //           "rgba(255, 206, 86, 0.2)",
  //           "rgba(75, 192, 192, 0.2)",
  //           "rgba(153, 102, 255, 0.2)",
  //           "rgba(255, 159, 64, 0.2)",
  //         ],
  //         borderColor: [
  //           "rgba(255, 99, 132, 1)",
  //           "rgba(54, 162, 235, 1)",
  //           "rgba(255, 206, 86, 1)",
  //           "rgba(75, 192, 192, 1)",
  //           "rgba(153, 102, 255, 1)",
  //           "rgba(255, 159, 64, 1)",
  //         ],
  //         borderWidth: 1,
  //       },
  //     ],
  //   },
  //   options: {
  //     scales: {
  //       yAxes: [
  //         {
  //           ticks: {
  //             beginAtZero: true,
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });
};

export default chart;
