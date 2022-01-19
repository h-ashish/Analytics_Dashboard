import React from "react";
import Chart from "react-apexcharts";

const Visitors = ({ quantity }) => {
  const customerDefects = {
    series: [
      {
        name: "Shift A",
        data: [44, 64, 22, 21],
      },
      {
        name: "Shift B",
        data: [53, 32, 33, 44],
      },
      {
        name: "Shift C",
        data: [25, 13, 44, 32],
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
              position: "top",
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
        categories: ["Machine 1", "Machine 2", "Machine 3", "Machine 4"],
        title: {
          text: "Machines",
        },
      },
      yaxis: {
        title: {
          text: `Quantity Produced (${quantity})`,
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

export default Visitors;
