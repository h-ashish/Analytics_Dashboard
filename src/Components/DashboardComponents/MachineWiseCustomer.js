import React from "react";
import Chart from "react-apexcharts";

const MachineWiseCustomer = ({ quantity }) => {
  const customerMachineProduction = {
    series: [
      {
        name: "Company 1",
        data: [44, 64, 22, 21],
      },
      {
        name: "Company 2",
        data: [53, 32, 33, 44],
      },
      {
        name: "Company 3",
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
      colors: ["#d40416", "#57fc3a", "#6ac3fd", "#0b70fb", "#FFA000"],
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
        categories: ["Machine 1", "Machine 2", "Machine 3", "Machine 4"],
        title: {
          text: "Machine Name",
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
        options={customerMachineProduction.options}
        series={customerMachineProduction.series}
        type="bar"
        height="350px"
      />
    </div>
  );
};

export default MachineWiseCustomer;
