import React from 'react';
import Chart from "react-apexcharts";

const SalesOverview = ({dashboardData}) => {
    const optionssalesoverview = {
        grid: {
          show: true,
          borderColor: "rgba(0,0,0,.08)",
          strokeDashArray: 2,
          padding: {
            left: 0,
            right: 0,
            bottom: 0,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "15%",
            endingShape: "flat",
          },
        },
        
        colors: ["#0b70fb", "#6ac3fd"],
        fill: {
          type: "solid",
          opacity: 1,
        },
        chart: {
          toolbar: {
            show: false,
          },
          fontFamily: 'poppins',
          sparkline: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
        },
        legend: {
          show: true,
        },
        xaxis: {
          type: "category",
          categories: Object.keys(dashboardData.customer_wise_prod),
          labels: {
            style: {
              cssClass: "grey--text lighten-2--text fill-color",
            },
          },
        },
        yaxis: {
          show: true,
          labels: {
            style: {
              cssClass: "grey--text lighten-2--text fill-color",
            },
          },
        },
        stroke: {
          show: true,
          width: 0,
          lineCap: 'butt',
          colors: ['transparent']
        },
        tooltip: {
          theme: "dark",
        },
      };
      const seriessalesoverview = [
        {
          name: "Quantity",
          data: Object.values(dashboardData.customer_wise_prod),
        },
        // {
        //   name: "Pixel",
        //   data: [6, 3, 9, 5, 4, 6, 4],
        // },
      ];

    return (
        <div>
            <Chart
              options={optionssalesoverview}
              series={seriessalesoverview}
              type="bar"
              height="310px"
            />
        </div>
    );
}
 
export default SalesOverview;