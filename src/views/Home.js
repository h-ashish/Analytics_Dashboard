import React, {useEffect, useState} from 'react';
import {
    Grid,
    Card,
    Box,
    CardContent,
    CardHeader,
    Typography,
    TextField,
    makeStyles
  } from '@material-ui/core';
  // import DateRangePicker from '@material-ui/lab/DateRangePicker';
  // import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
  // import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import SalesOverview from  '../Components/DashboardComponents/SalesOverview'  
import Visitors from  '../Components/DashboardComponents/Visitors'  
import InfoCards from '../Components/DashboardComponents/InfoCard';
import Contacts from '../Components/DashboardComponents/Contact';
import Table from './Trends'
import BlogCard from '../Components/DashboardComponents/BlogCards';
import us1 from '../assets/images/backgrounds/u1.jpg'
import us2 from '../assets/images/backgrounds/u2.jpg'
import us3 from '../assets/images/backgrounds/u3.jpg'
import us4 from '../assets/images/backgrounds/u4.jpg'
import axios from 'axios';
import Chart from "react-apexcharts";
import moment from 'moment'

const Home = () => {
    const [dashboardData, setDashboardData] = useState({'number_of_dyelots': {"count": ""},
    'common_defect': {'common': ''},
    'top_shift': {'B': ""},
    'top_tt': {'Bath': ""},
    'top_employee': {'':''},
    'top_month': {'August': ""},
    'customer_wise_prod': {
        },
    'machine_wise_prod': {},
    'operator_wise_prod': {
        }
    })
    const [startDate, setStartDate] = useState("08/09/2021")
    const [endDate, setEndDate] = useState("08/17/2021")
    let dateData = {
        "min_date": startDate,
        "max_date" : endDate    
    }

    useEffect(()=>{
      axios.post('/DashboardData', dateData)
      .then((res)=>{
          const responseData = res.data;
          setDashboardData(responseData)
          // console.log(responseData)
      })
      .catch((err)=>{
          console.log(err)
      })
    },[])

    const handleStartDate =(e)=>{
      const startDate = moment(e.target.value).format("MM/DD/YYYY"); 
      setStartDate(startDate)
    }
    const handleEndDate =(e)=>{
      const endDate = moment(e.target.value).format("MM/DD/YYYY"); 
      setEndDate(endDate)
    }

    useEffect(() =>{
      axios.post('/DashboardData', dateData)
      .then((res)=>{
          const responseData = res.data;
          setDashboardData(responseData)
      })
      .catch((err)=>{
          console.log(err)
      })
    }, [startDate, endDate])

    // const getData = () =>{
    //   axios.post('/DashboardData', dateData)
    //   .then((res)=>{
    //       const responseData = res.data;
    //       setDashboardData(responseData)
    //       console.log(responseData)
    //   })
    //   .catch((err)=>{
    //       console.log(err)
    //   })
    // }
 
    // useEffect(()=>{
    //   getData();
    //   return () => {clearTimeout(clearId)};
    // }, [])
    
    // let clearId = setInterval(getData, 20000);
 
    const graphData = {          
            series: [76, 67, 61, 90, 50],
            options: {
              chart: {
                height: 390,
                type: 'radialBar',
              },
              plotOptions: {
                radialBar: {
                  offsetY: 0,
                  startAngle: 0,
                  endAngle: 270,
                  hollow: {
                    margin: 5,
                    size: '30%',
                    background: 'transparent',
                    image: undefined,
                  },
                  dataLabels: {
                    name: {
                      show: false,
                    },
                    value: {
                      show: false,
                    }
                  }
                }
              },
              colors: ['#0b70fb', '#6ac3fd', '#000080', "#745af2", "#FFA000"],
              labels: ['Machine 1', 'Machine 2', 'Machine 3', 'Machine 4', 'Machine 5'],
              legend: {
                show: true,
                floating: true,
                fontSize: '16px',
                position: 'left',
                offsetX: 0,
                offsetY: 15,
                labels: {
                  useSeriesColors: true,
                },
                markers: {
                  size: 0
                },
                formatter: function(seriesName, opts) {
                  return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                },
                itemMargin: {
                  vertical: 3
                }
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  legend: {
                      show: false
                  }
                }
              }]
            },
        };

    const useStyles = makeStyles((theme)=>({
      boxStyle:{
        display: "flex",
        marginBottom: "20px",
      },
      dateStyle:{
        marginRight: "20px"
      },
    }))
    
    const classes = useStyles();
    
    return (
        <>
        <Box className={classes.boxStyle}>
        <Typography variant="h1" >Dashboard </Typography>
        <Box flexGrow={1} />
        <TextField
          id="date-1"
          label="Start-Date"
          type="date"
          size="small"
          defaultValue={moment(dateData.min_date).format("YYYY-MM-DD")}
          variant="outlined"
          sx={{ width: 180 }}
          InputLabelProps={{
            shrink: true,
          }}
          className={classes.dateStyle}
          onChange={handleStartDate}
        />
        <TextField
          id="date-2"
          label="End-Date"
          type="date"
          size="small"
          defaultValue={moment(dateData.max_date).format("YYYY-MM-DD")}
          variant="outlined"
          sx={{ width: 180 }}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleEndDate}
        />
        </Box>
        <Grid container spacing={3}>
            <Grid item  xs>
                <InfoCards 
                  heading="Total Dyelots Processed" 
                  text="M" 
                  style={{background: '#89c9f3'}} 
                  info={dashboardData.number_of_dyelots.count}/>
            </Grid>
            <Grid item  xs>
                <InfoCards 
                  heading="Most Common Defect" 
                  text="P" 
                  style={{background: '#fdaeae'}} 
                  info={dashboardData.common_defect.common}/>
            </Grid>
            <Grid item  xs>
                <InfoCards 
                  heading="Top Performing Shift" 
                  text="Y" 
                  style={{background: '#f1cc65'}} 
                  info={Object.keys(dashboardData.top_shift)}/>
            </Grid>
            <Grid item  xs>
                <InfoCards 
                  heading="Most Run Towel Type" 
                  text="T" 
                  style={{background: '#97e8b0'}} 
                  info={Object.keys(dashboardData.top_tt)}/>
            </Grid>
            <Grid item  xs>
                <InfoCards 
                  heading="Top Performing Employee" 
                  text="T" 
                  style={{background: '#97e8b0'}} 
                  info={Object.keys(dashboardData.top_employee)}/>
            </Grid>
            
            

            <Grid item lg={8} md={12} xs={12}>
                <Card elevation={1}>
                    <CardHeader titleTypographyProps={{variant:'h4' }} title="Customer wise Production Details" subheader="Customer v/s Production in MT"/>
                    <CardContent>
                        <SalesOverview dashboardData = {dashboardData} />
                    </CardContent>
                </Card>
            </Grid>

            {/* <Grid item lg={4} md={12} xs={12}>
                <Card>
                    <CardHeader titleTypographyProps={{variant:'h4' }} style={{textAlign: "center"}} title="Production" subheader="Machine Wise"/>
                    <CardContent>
                        <Visitors dashboardData = {dashboardData} />
                    </CardContent>
                </Card>
            </Grid> */}

            {/* <Grid item lg={4} md={12} xs={12}>
                <Card>
                    <CardHeader titleTypographyProps={{variant:'h4' }} style={{textAlign: "center"}} title="Defects" subheader="Machine Wise"/>
                    <CardContent>
                    <Chart options={graphData.options} series={graphData.series} type="radialBar" height={350} />                    </CardContent>
                </Card>
            </Grid> */}

            

            {/* <Grid item lg={3} md={12} xs={12}>
                <Contacts/>
            </Grid>
            <Grid item lg={9} md={12} xs={12}>
                <Table/>
            </Grid>

            <Grid item lg={3} md={12} xs={12}>
                <BlogCard image={us1} title="So Exited to watch"/>
            </Grid>
            <Grid item lg={3} md={12} xs={12}>
                <BlogCard image={us2} title="So Exited to watch"/>
            </Grid>
            <Grid item lg={3} md={12} xs={12}>
                <BlogCard image={us3} title="So Exited to watch"/>
            </Grid>
            <Grid item lg={3} md={12} xs={12}>
                <BlogCard image={us4} title="So Exited to watch"/>
            </Grid> */}
        </Grid> 
    </>
    );
}
 
export default Home;