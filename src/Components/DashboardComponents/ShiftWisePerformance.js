import React from 'react';
import Chart from "react-apexcharts";

const ShiftWisePerformance = ({dashboardData, quantity}) => {

    const shiftPerformance = {
        series: dashboardData.Shift_wise_total_production.series,
        // series:[{
        //   name: 'Shift A',
        //   data: [9, 3, 7, 5, 6, 2, 4, 8 ]
        // }, {
        //   name: 'Shift B',
        //   data: [13, 5, 2, 6, 3, 7, 5, 6, ]
        // }, {
        //   name: 'Shift C',
        //   data: [2, 10, 8, 4, 5, 2, 6, 3, ]
        // }, ],
        options: {
          chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
              show: true
            },
            zoom: {
              enabled: true
            }
          },
          colors: ['#0b70fb', '#6ac3fd', "#FFA000", "#57fc3a", "#d40416"],
          responsive: [{
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }],
          plotOptions: {
            bar: {
              horizontal: false,
              borderRadius: 5
            },
          },
          xaxis: {
            title: {
              text: "Shift "
            },
            type: 'Companies',
            categories: dashboardData.Shift_wise_total_production.labels,
            // categories: ["Gaurav Ramnani", 'Kalpeshbhai Dulera', 'Kanubha Jadeja', 'Kishor Prajapati', 'Mulji Meghaval', "Naresh Parmar", "Pritesh Harsukhlal Jani", "Raju Kumar"],
          },
          yaxis :{
            title: {
              text: `Quantity Produced (${quantity})`
            },
          },
          // annotations: {
          //   yaxis: [{
          //     y: 77,
          //     borderColor: '#FF4560',
          //     label: {
          //       borderColor: '#FF4560',
          //       style: {
          //         color: '#fff',
          //         background: '#FF4560',
          //       },
          //       text: 'Target',
          //     }
          //   },
          // ],
          // },
          legend: {
            position: 'top',
            offsetY: 10
          },
          fill: {
            opacity: 1
          }
        },    
            };

    return ( 
        <div>
            <Chart
                options={shiftPerformance.options}
                series={shiftPerformance.series}
                type="bar"
                height="350px"
                />
        </div>
    );
}
 
export default ShiftWisePerformance;