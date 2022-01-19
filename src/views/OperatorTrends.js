import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import {
  Card,
  CardContent,
  CardHeader,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Box,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import axios from "axios";
import moment from "moment";

const OperatorTrends = () => {
  const [value, setValue] = useState("shift");
  const [quantity, setQuantity] = useState("Kgs");
  const [startDate, setStartDate] = useState("09/01/2021");
  const [endDate, setEndDate] = useState(new Date());

  let filteredData = {
    min_date: startDate,
    max_date: endDate,
    filter_1: value,
    filter_2: quantity,
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  const dateChange = () => {};

  const options = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    chart: {
      toolbar: {
        show: false,
      },
    },
    // title: {
    //     text: `${value} v/s ${quantity}`
    // },
    colors: [
      "#0b70fb",
      "#6ac3fd",
      "#000080",
      "#745af2",
      "#FFA000",
      "#d40416",
      "#57fc3a",
      "#cd32f0",
    ],
    stroke: {
      curve: "smooth",
      width: [3, 3, 3, 3, 3, 3, 3, 3],
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
      colors: ["#fff"],
      strokeColors: "#FA2609",
      strokeWidth: 5,
      hover: {
        size: 7,
      },
    },
    legend: {
      show: true,
      position: "right",
      horizontalAlign: "center",
      fontSize: "15",
      onItemClick: {
        toggleDataSeries: true,
      },
    },
    yaxis: {
      title: {
        text: `${quantity}`,
      },
    },
    xaxis: {
      title: {
        text: `${value}`,
      },
    },
  };
  const series = [
    {
      name: "Ashish",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Nikhil",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Hitesh",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
    {
      name: "Akhilesh",
      data: [35, 45, 48, 52, 53, 26, 41, 36, 26],
    },
    {
      name: "Avinash",
      data: [44, 61, 58, 63, 60, 55, 57, 56, 66],
    },
    {
      name: "Thanveen",
      data: [87, 105, 91, 114, 76, 85, 101, 98, 94],
    },
    {
      name: "Devdas",
      data: [45, 48, 52, 53, 41, 35, 41, 36, 26],
    },
    {
      name: "Vignesh",
      data: [41, 36, 26, 35, 45, 48, 52, 53, 26],
    },
  ];

  const useStyles = makeStyles((theme) => ({
    filterBar: {
      marginBottom: "20px",
      padding: "10px",
      textAlign: "center",
    },
    boxStyle: {
      marginBottom: "20px",
    },
    cardStyle: {
      padding: "20px 20px 0 20px",
    },
    radioStyle: {
      padding: "20px 30px 0 30px",
      display: "flex",
      justifyContent: "space-between",
      margin: "0 30px 0 30px",
      // justifyContent:'center'
    },
    searchStyle: {
      padding: "10px 20px 0 20px",
      display: "flex",
      justifyContent: "space-between",
    },
    headingStyle: {
      marginBottom: "10px",
      textAlign: "center",
    },
    chartTitle: {
      display: "flex",
      justifyContent: "right",
      margin: "0px 30px 20px 30px",
      alignItems: "flex-start",
      // paddingBottom: "30px",
    },
    dateStyle: {
      marginRight: "20px",
    },
  }));

  const classes = useStyles();

  return (
    <div>
      {/* <Box className={classes.boxStyle}>
      <TextField 
        id="outlined-search" 
        label="Search by Dyelot ID" 
        type="search" 
        variant="outlined"
        onChange={()=>onSearchTextChange()} />
      </Box> */}
      <Card className={classes.cardStyle}>
        <Box className={classes.chartTitle}>
          <TextField
            id="date-1"
            label="Start-Date"
            type="date"
            size="small"
            defaultValue={moment(filteredData.min_date).format("YYYY-MM-DD")}
            variant="outlined"
            sx={{ width: 180 }}
            inputProps={{
              max: moment().format("YYYY-MM-DD"),
            }}
            InputLabelProps={{
              shrink: true,
            }}
            className={classes.dateStyle}
            onChange={(e) => {
              setStartDate(moment(e.target.value).format("MM/DD/YYYY"));
            }}
          />
          <TextField
            id="date-2"
            label="End-Date"
            type="date"
            size="small"
            defaultValue={moment(filteredData.max_date).format("YYYY-MM-DD")}
            variant="outlined"
            sx={{ width: 180 }}
            inputProps={{
              min: moment(filteredData.min_date).format("YYYY-MM-DD"),
              max: moment().format("YYYY-MM-DD"),
            }}
            InputLabelProps={{
              shrink: true,
            }}
            className={classes.dateStyle}
            onChange={(e) => {
              setEndDate(moment(e.target.value).format("MM/DD/YYYY"));
            }}
          />
          <Button variant="contained" color="primary" onClick={dateChange}>
            Go
          </Button>
        </Box>
        <Box className={classes.radioStyle}>
          <Box>
            <TextField
              style={{ width: "200px" }}
              size="small"
              label="Quantity Filter"
              variant="outlined"
              select
              SelectProps={{
                native: true,
              }}
              onChange={(e) => handleChange(e)}
            >
              <option value="shift">Shift Wise</option>
              <option value="Date">Day Wise</option>
              <option value="week">Week Wise</option>
              <option value="month">Month Wise</option>
              <option value="quarter">Quarterly</option>
            </TextField>
          </Box>
          <Box>
            {/* <Typography variant="h4" className={classes.filterHeadingStyle}>Quantity Filter: </Typography> */}
            <TextField
              style={{ width: "200px" }}
              size="small"
              label="Time Filter"
              variant="outlined"
              select
              SelectProps={{
                native: true,
              }}
              onChange={(e) => handleQuantityChange(e)}
            >
              <option value="Kgs">Kgs</option>
              <option value="Pieces">Pieces</option>
            </TextField>
          </Box>
        </Box>
        <CardContent>
          <div style={{ height: 400, width: "100%" }}>
            <Chart
              options={options}
              series={series}
              type="line"
              height="400px"
            />{" "}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OperatorTrends;
