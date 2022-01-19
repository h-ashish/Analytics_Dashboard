import React from "react";
import Chart from "react-apexcharts";

const MachineDefects = () => {
  const machineDefects = {
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
      colors: ["#0b70fb", "#6ac3fd", "#d40416", "#FFA000", "#57fc3a"],
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
          horizontal: true,
          borderRadius: 5,
        },
      },
      xaxis: {
        type: "Companies",
        categories: ["Machine 1", "Machine 2", "Machine 3", "Machine 4"],
        title: {
          text: "Number of Defects",
        },
      },
      yaxis: {
        title: {
          text: "Machine Name",
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
        options={machineDefects.options}
        series={machineDefects.series}
        type="bar"
        height="350px"
      />
    </div>
  );
};

export default MachineDefects;
