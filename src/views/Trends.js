import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {
    Card,
    CardContent,
    CardHeader,
    RadioGroup,
    FormControlLabel,
    Radio,
    TextField,
    Box,
    Typography,
    makeStyles
  } from '@material-ui/core';
import Chart from 'react-apexcharts';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

const Trends = () => {

  const changeFunc =()=>{
    console.log(":changed")
  }

  const options = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    chart: {
        toolbar: {
            show: false
        }
    },
    colors: ['#06C695', '#FFA000', '#000'],
    stroke: {
        curve: 'smooth',
        width: [1, 1, 1],
    },
    dataLabels: {
        enabled: false
    },
    markers: {
        size: 0,
        colors: ["#fff"],
        strokeColors: "#FA2609",
        strokeWidth: 2,
        hover: {
            size: 7
        }
    },
    legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'center'
    }

}
const series = [
    {
        name: "Quantity",
        data: [10, 40, 30, 10, 20, 59, 4],
    },
    // {
    //     name: "On Leave",
    //     data: [20, 10, 50, 10, 20, 10, 5],
    // },
]

const useStyles = makeStyles((theme)=>({
  filterBar:{
    marginBottom: "20px",
    padding: "10px",
    textAlign: "center"
  },
  boxStyle:{
    marginBottom: "20px"
  },
  radioStyle:{
    padding: "20px"
  },
  headingStyle:{
    marginBottom: "20px"
  }
}))

const classes = useStyles();

const onSearchTextChange = ()=>{
  console.log("Search")
}

  return (
    <div>
      <Typography variant="h1" className={classes.headingStyle}>Trends </Typography>
      <Box className={classes.boxStyle}>
      <TextField 
        id="outlined-search" 
        label="Search by Dyelot ID" 
        type="search" 
        variant="outlined"
        onChange={()=>onSearchTextChange()} />
      </Box>
    <Card>
    <Box className={classes.radioStyle} >
      <RadioGroup row aria-label="position" name="position" defaultValue="top" onChange={changeFunc}>
        <FormControlLabel
          value="shift"
          control={<Radio color="primary" />}
          label="Shift Wise"
          labelPlacement="end"
        />
        <FormControlLabel
          value="day"
          control={<Radio color="primary" />}
          label="Day Wise"
          labelPlacement="end"
        />
        <FormControlLabel
          value="week"
          control={<Radio color="primary" />}
          label="Week Wise"
          labelPlacement="end"
        />
        <FormControlLabel
          value="month"
          control={<Radio color="primary" />}
          label="Month Wise"
          labelPlacement="end"
        />
        <FormControlLabel
          value="year"
          control={<Radio color="primary" />}
          label="Quarterly"
          labelPlacement="end"
        />
      </RadioGroup>
      </Box>
    <CardHeader titleTypographyProps={{variant:'h4' }} title="Trends Charts" subheader="Trends"/>
    <CardContent>
        <div style={{ height: 400, width: '100%' }}>
        <Chart
                options={options}
                series={series}
                type="area"
                height="100%"
            />        </div>
        </CardContent>
    </Card>
    </div>
  );
}

export default Trends;
