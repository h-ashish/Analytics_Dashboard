import React from "react";
import Chart from "react-apexcharts";

const CustomerWiseDefects = () => {
  let arr = ["Customer 1", "Customer 2", "Customer 3", "Customer 4"];

  const customerDefects = {
    series: [
      {
        name: "Defect Type 1",
        data: [4, 3, 6, 1],
      },
      {
        name: "Defect Type 2",
        data: [3, 2, 5, 4],
      },
      {
        name: "Defect Type 3",
        data: [5, 1, 4, 2],
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
        type: "Companies",
        categories: arr,
        title: {
          text: "Customer Name",
        },
        labels: {
          style: {
            fontSize: "10px",
          },
        },
      },
      yaxis: {
        title: {
          text: "Number of Defects",
        },
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
        options={customerDefects.options}
        series={customerDefects.series}
        type="bar"
        height="350px"
      />
    </div>
  );
};

export default CustomerWiseDefects;
