import React from "react";
import Chart from "react-apexcharts";

const CustomerTowelProduction = ({ quantity }) => {
  const customerProduction = {
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
        categories: ["Customer 1", "Customer 2", "Customer 3", "Customer 4"],
        // categories: [
        //     'Apples',
        //     ['Sugar', 'Baby', 'Watermelon'],
        //     ['Prickly', 'Pear'],
        //     ['Quararibea', 'cordata'],
        //   ],
        title: {
          text: "Customer Name",
          fontSize: "8px",
        },
        labels: {
          style: {
            fontSize: "10px",
          },
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
        options={customerProduction.options}
        series={customerProduction.series}
        type="bar"
        height="350px"
      />
    </div>
  );
};

export default CustomerTowelProduction;
