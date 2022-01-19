import React from "react";
import Chart from "react-apexcharts";

const MachineRuntime = () => {
  let avg = 54;

  const machineRuntimeData = {
    series: [44, 55, 67, 83],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total Runtime",
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 2149 + " mins";
              },
            },
          },
        },
      },
      labels: ["Machine 1", "Machine 2", "Machine 3", "Machine 4"],
    },
  };
  return (
    <div>
      <Chart
        options={machineRuntimeData.options}
        series={machineRuntimeData.series}
        type="radialBar"
        height="380px"
      />
    </div>
  );
};

export default MachineRuntime;
