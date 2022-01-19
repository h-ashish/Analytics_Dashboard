import React, { useState, useEffect } from "react";
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
  Typography,
  makeStyles,
} from "@material-ui/core";
import axios from "axios";

const Analytics = () => {
  const [value, setValue] = useState("2021");
  const [machine, setMachine] = useState("All");
  const [quantity, setQuantity] = useState("Kgs");

  function generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      series.push({
        x: x,
        y: y,
      });
      i++;
    }
    return series;
  }

  const series = [
    {
      name: "Jan",
      data: generateData(31, {
        min: 0,
        max: 999,
      }),
    },
    {
      name: "Feb",
      data: generateData(28, {
        min: 0,
        max: 999,
      }),
    },
    {
      name: "Mar",
      data: generateData(31, {
        min: 0,
        max: 999,
      }),
    },
    {
      name: "Apr",
      data: generateData(30, {
        min: 0,
        max: 999,
      }),
    },
    {
      name: "May",
      data: generateData(31, {
        min: 0,
        max: 999,
      }),
    },
    {
      name: "Jun",
      data: generateData(30, {
        min: 0,
        max: 999,
      }),
    },
    {
      name: "Jul",
      data: generateData(31, {
        min: 0,
        max: 999,
      }),
    },
    {
      name: "Aug",
      data: generateData(31, {
        min: 0,
        max: 999,
      }),
    },
    {
      name: "Sep",
      data: generateData(30, {
        min: 0,
        max: 999,
      }),
    },
    {
      name: "Oct",
      data: generateData(31, {
        min: 0,
        max: 999,
      }),
    },
    {
      name: "Nov",
      data: generateData(30, {
        min: 0,
        max: 999,
      }),
    },
    {
      name: "Dec",
      data: generateData(31, {
        min: 0,
        max: 999,
      }),
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "heatmap",
    },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
        radius: 0,
        useFillColorAsStroke: true,
        colorScale: {
          ranges: [
            {
              from: 0,
              to: 100,
              name: "low",
              color: "#00A100",
            },
            {
              from: 101,
              to: 700,
              name: "medium",
              color: "#128FD9",
            },
            {
              from: 701,
              to: 900,
              name: "high",
              color: "#FFB200",
            },
            {
              from: 901,
              to: 999,
              name: "extreme",
              color: "#FF0000",
            },
          ],
        },
      },
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      width: 1,
    },
  };

  const useStyles = makeStyles((theme) => ({
    filterBar: {
      marginBottom: "20px",
      padding: "10px",
      textAlign: "center",
    },
    boxStyle: {
      marginBottom: "20px",
    },
    radioStyle: {
      padding: "20px 20px 0 20px",
      display: "flex",
      marginLeft: "auto",
      marginRight: "auto",
      justifyContent: "space-between",
    },
    headingStyle: {
      marginBottom: "20px",
    },
    radioButtons: {
      marginLeft: "10px",
      marginRight: "30px",
    },
  }));

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const changeInYearValue = (e) => {
    setValue(e.target.value);
  };

  const changeInMachineValue = (e) => {
    setMachine(e.target.value);
  };
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h2" className={classes.headingStyle}>
        Monthly Production Chart{" "}
      </Typography>
      {/* <Box className={classes.boxStyle}>
      <TextField 
        id="outlined-search" 
        label="Search by Dyelot ID" 
        type="search" 
        variant="outlined"
        onChange={()=>onSearchTextChange()} />
      </Box> */}
      <Card elevation={1}>
        <Box className={classes.radioStyle}>
          <TextField
            style={{ width: "200px" }}
            size="small"
            label="Year Filter"
            variant="outlined"
            select
            SelectProps={{
              native: true,
            }}
            onChange={(e) => changeInYearValue(e)}
          >
            {/* <option value={value}>All</option> */}
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </TextField>
          <TextField
            style={{ width: "200px" }}
            size="small"
            label="Machine Filter"
            variant="outlined"
            select
            SelectProps={{
              native: true,
            }}
            onChange={(e) => changeInMachineValue(e)}
          >
            <option value="All">All</option>
            <option value="Machine 1">Machine 1</option>
            <option value="Machine 2">Machine 2</option>
            <option value="Machine 3">Machine 3</option>
            <option value="Machine 4">Machine 4</option>
          </TextField>
          <TextField
            style={{ width: "200px" }}
            size="small"
            label="Quantity Filter"
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
        {/* <CardHeader titleTypographyProps={{variant:'h4' }} title={machine} /> */}
        <CardContent>
          <Chart
            options={options}
            series={series}
            type="heatmap"
            height="400px"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
