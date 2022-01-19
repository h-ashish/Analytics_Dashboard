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

const CustomerAnalytics = () => {
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
        columnWidth: "40%",
        endingShape: "flat",
      },
    },
    // title: {
    //   text: `${value} v/s ${quantity}`
    // },

    colors: ["#0b70fb", "#6ac3fd", "#FFA000", "#57fc3a", "#FFA000"],
    fill: {
      type: "solid",
      opacity: 1,
    },
    chart: {
      toolbar: {
        show: false,
      },
      stacked: true,
      fontFamily: "poppins",
      sparkline: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: true,
    },
    markers: {
      size: 0,
    },
    legend: {
      show: true,
      position: "right",
      horizontalAlign: "center",
      fontSize: "15",
      showForSingleSeries: true,
    },
    xaxis: {
      title: {
        text: `${value}`,
      },
      type: "category",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    yaxis: {
      title: {
        text: `${quantity}`,
      },
      show: true,
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    stroke: {
      show: true,
      width: 5,
      lineCap: "butt",
      colors: ["transparent"],
    },
    tooltip: {
      theme: "dark",
    },
  };
  //   const options = {
  //     labels: dashboardData.labels,
  //     chart: {
  //         toolbar: {
  //             show: false
  //         }
  //     },
  //     colors: ['#0b70fb', '#6ac3fd', '#000080', "#745af2", "#FFA000"],
  //     stroke: {
  //         curve: 'smooth',
  //         width: [3, 3, 3, 3, 3],
  //     },
  //     dataLabels: {
  //         enabled: false
  //     },
  //     markers: {
  //         size: 0,
  //         colors: ["#fff"],
  //         strokeColors: "#FA2609",
  //         strokeWidth: 5,
  //         hover: {
  //             size: 7
  //         }
  //     },
  //     legend: {
  //         show: true,
  //         position: 'right',
  //         horizontalAlign: 'center',
  //         fontSize: "17"
  //     }
  // }
  const series = [
    {
      name: "Customer 1",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Customer 2",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Customer 3",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
    {
      name: "Customer 4",
      data: [35, 45, 48, 52, 53, 26, 41, 36, 26],
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
    radioStyle: {
      padding: "20px 30px 0 30px",
      display: "flex",
      justifyContent: "space-between",
      // marginLeft: "auto",
      // marginRight: "auto",
      // justifyContent:'center'
    },
    searchStyle: {},
    headingStyle: {
      marginBottom: "10px",
      textAlign: "center",
    },
    chartTitle: {
      display: "flex",
      justifyContent: "space-equally",
      margin: "0px 0px 0 30px",
      alignItems: "center",
    },
    dateStyle: {
      marginRight: "20px",
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        paddingBottom={2}
      >
        <Typography variant="h2" className={classes.headingStyle}>
          Customer Analytics{" "}
        </Typography>
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
      </Box>
      {/* <Typography variant="h4" className={classes.headingStyle}>{value} v/s {quantity} </Typography> */}
      {/* <Box className={classes.boxStyle}>
      <TextField 
        id="outlined-search" 
        label="Search by Dyelot ID" 
        type="search" 
        variant="outlined"
        onChange={()=>onSearchTextChange()} />
      </Box> */}
      <Card>
        <Box className={classes.radioStyle}>
          <Box>
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
            {/* <Typography variant="h4" className={classes.filterHeadingStyle}>Quantity Filter: </Typography> */}
          </Box>
        </Box>
        {/* <CardHeader className={classes.cardHeader} titleTypographyProps={{variant:'h4' }} title="Machine Analytics" subheader="Machine v/s Dyelot Quantity"/> */}
        <CardContent>
          <div style={{ height: 400, width: "100%" }}>
            <Chart
              options={options}
              series={series}
              type="bar"
              height="400px"
            />{" "}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomerAnalytics;
