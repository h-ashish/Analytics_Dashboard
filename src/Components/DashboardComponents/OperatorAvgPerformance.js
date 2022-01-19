import React from "react";
import Chart from "react-apexcharts";

const OperatorAvgPerformance = ({ quantity }) => {
  let avg = 64;

  let arr = [
    "Ashish",
    "Nikhil",
    "Hitesh",
    "Thanveen",
    "Avinash",
    "Akhilesh",
    "Devdas",
    "Vignesh",
  ];

  const operatorPerformance = {
    series: [
      {
        name: "Shift A",
        data: [44, 64, 22, 21, 30, 12, 98, 39],
      },
      {
        name: "Shift B",
        data: [53, 32, 33, 44, 22, 21, 30, 78],
      },
      {
        name: "Shift C",
        data: [25, 13, 44, 32, 25, 93, 18, 9],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
      colors: ["#0b70fb", "#6ac3fd", "#FFA000", "#57fc3a", "#d40416"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 5,
        },
      },
      xaxis: {
        title: {
          text: "Operator Names",
        },
        type: "Companies",
        categories: arr,
        labels: {
          style: {
            fontSize: "11px",
          },
          // rotateAlways: true,
        },
      },
      yaxis: {
        title: {
          text: `Quantity Produced (${quantity})`,
        },
      },
      annotations: {
        yaxis: [
          {
            y: avg,
            borderColor: "#00E396",
            label: {
              borderColor: "#00E396",
              style: {
                color: "#fff",
                background: "#00E396",
              },
              text: `Group Average - ${avg}`,
            },
          },
        ],
      },
      legend: {
        position: "top",
        offsetY: 10,
      },
      fill: {
        opacity: 1,
      },
    },
  };

  return (
    <div>
      <Chart
        options={operatorPerformance.options}
        series={operatorPerformance.series}
        type="bar"
        height="350px"
      />
    </div>
  );
};

export default OperatorAvgPerformance;
