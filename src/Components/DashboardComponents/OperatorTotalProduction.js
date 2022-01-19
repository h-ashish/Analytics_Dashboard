import React, {useContext} from 'react';
import Chart from "react-apexcharts";
import { DataContext } from '../../Context/DataContext';


const OperatorTotalProduction = ({dashboardData, quantity, operatorValues}) => {

    const {operatorTarget} = useContext(DataContext)

    let arr =[ ];
    let labels = dashboardData.operator_wise_total_production.labels;
    labels.map((val)=>{
      const splitval = val.split(' ')
      arr.push(splitval)
    })

    const operatorProduction = {
        series: dashboardData.operator_wise_total_production.series,
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
              text: "Operator Names"
            },
            type: 'Companies',
            // categories: dashboardData.operator_wise_total_production.labels,
            categories: arr,
            labels: {
              style:{
                fontSize: "11px"
              }
            }
          },
          yaxis :{
            title: {
              text: `Quantity Produced (${quantity})`
            },
          },
          annotations: {
            yaxis: [{
              y: operatorValues,
              borderColor: '#FF4560',
              label: {
                borderColor: '#FF4560',
                style: {
                  color: '#fff',
                  background: '#FF4560',
                },
                text: `Target - ${operatorValues}`,
              }
            },
          ],
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
                options={operatorProduction.options}
                series={operatorProduction.series}
                type="bar"
                height="350px"
                />
        </div>
    );
}
 
export default OperatorTotalProduction;