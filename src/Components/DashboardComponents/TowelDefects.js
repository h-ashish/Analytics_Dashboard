import React from 'react';
import Chart from "react-apexcharts";

const TowelDefects = ({dashboardData}) => {

    const towelDefects = {
        series: dashboardData.Towel_Wise_Defects.series,
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
            type: 'Companies',
            categories: dashboardData.Towel_Wise_Defects.labels,
            title:{
              text: "Towel Type"
            }
          },
          yaxis :{
            title:{
              text: "Number of Defects"
            }
          },
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
                options={towelDefects.options}
                series={towelDefects.series}
                type="bar"
                height="350px"
                />
        </div>
    );
}
 
export default TowelDefects;