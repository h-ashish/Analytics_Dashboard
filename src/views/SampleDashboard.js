import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  Button,
  Box,
  CardContent,
  CardHeader,
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
  makeStyles,
} from "@material-ui/core";
import Visitors from "../Components/DashboardComponents/Visitors";
import InfoCards from "../Components/DashboardComponents/InfoCard";
import MachineRuntime from "../Components/DashboardComponents/MachineRuntime";
import CustomerTowelProduction from "../Components/DashboardComponents/CustomerTowelProduction";
import MachineWiseCustomer from "../Components/DashboardComponents/MachineWiseCustomer";
import CustomerWiseDefects from "../Components/DashboardComponents/CustomerWiseDefects";
import OperatorAvgPerformance from "../Components/DashboardComponents/OperatorAvgPerformance";
import MachineDefects from "../Components/DashboardComponents/MachineDefects";

const SampleDashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    number_of_dyelots: { count: "" },
    common_defect: { common: "" },
    top_shift: { B: "" },
    top_tt: { Bath: "" },
    top_employee: { "": "" },
    top_month: { August: "" },
    customer_wise_prod: {},
    Machine_wise_Production_Donut: {
      labels: [],
      series: [],
    },
    Effective_Machine_Runtime: {
      labels: [],
      series: [],
    },
    Machine_Wise_Avg_Production: {
      labels: [],
      series: [],
    },
    machine_wise_prod: {},
    "operator wise total production": {
      labels: [],
      series: [],
    },
    Customer_wise_towel_production: {
      labels: [],
      series: [],
    },
    machine_wise_customer_production: {
      labels: [],
      series: [],
    },
    customer_wise_defects: {
      labels: [],
      series: [],
    },
    operator_wise_avg_performance: {
      labels: [],
      series: [],
    },
    operator_wise_total_production: {
      labels: [],
      series: [],
    },
    Shift_wise_total_production: {
      labels: [],
      series: [],
    },
    Machine_Wise_Defects: {
      labels: [],
      series: [],
    },
    Towel_Wise_Defects: {
      labels: [],
      series: [],
    },
    machine_wise_shift_production: {
      labels: [],
      series: [],
    },
    Machine_wise_run_analytics: {
      labels: [],
      series: [],
    },
  });
  const [quantity, setQuantity] = useState("Kgs");

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const useStyles = makeStyles((theme) => ({
    paperStyle: {
      width: "96.5%",
      marginTop: "63px",
      position: "fixed",
      top: "0",
      zIndex: "100",
      backgroundColor: "#fff",
    },
    boxStyle: {
      display: "flex",
      padding: "20px 0 20px 0",
      justifyContent: "space-between",
    },
    dateStyle: {
      marginRight: "20px",
    },
    gridBox: {
      // marginTop: "20px",
    },
  }));

  const classes = useStyles();

  return (
    <>
      {/* <Paper elevation={2} className={classes.paperStyle}> */}
      <Box className={classes.boxStyle}>
        <Typography variant="h1">Dashboard </Typography>
        {/* <Box>
          <RadioGroup
            row
            aria-label="position"
            name="position"
            defaultValue="dyelot"
            value={quantity}
            onChange={handleQuantityChange}
          >
            <FormControlLabel
              value="Doffs"
              control={<Radio color="primary" size="small" />}
              label="Doffs"
              labelPlacement="end"
            />
            <FormControlLabel
              value="pcs"
              control={<Radio color="primary" size="small" />}
              label="Pieces"
              labelPlacement="end"
            />
            <FormControlLabel
              value="Net Weight"
              control={<Radio color="primary" size="small" />}
              label="Net Weight"
              labelPlacement="end"
            />
          </RadioGroup>
        </Box> */}
        <Box>
          <TextField
            style={{ width: "200px" }}
            size="small"
            label="Quantity"
            variant="outlined"
            select
            SelectProps={{
              native: true,
            }}
            onChange={(e) => handleQuantityChange(e)}
          >
            {/* <option value={value}>All</option> */}
            <option value="Kgs">Kgs</option>
            <option value="Pieces">Pieces</option>
          </TextField>
          {/* <TextField
            id="date-1"
            label="Start-Date"
            type="date"
            size="small"
            defaultValue={moment(dateData.min_date).format("YYYY-MM-DD")}
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
            defaultValue={moment(dateData.max_date).format("YYYY-MM-DD")}
            variant="outlined"
            sx={{ width: 180 }}
            inputProps={{
              min: moment(dateData.min_date).format("YYYY-MM-DD"),
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
          </Button> */}
        </Box>
      </Box>
      {/* </Paper> */}
      <Grid container spacing={3} className={classes.gridBox}>
        {/* <Grid item xs={12} >
        <Typography variant="h6" >This is a sample dashboard for approval/review</Typography>
        </Grid> */}
        <Grid item xs>
          <InfoCards
            heading="Net Weight Produced"
            text="T"
            style={{ background: "#97e8b0" }}
            info={"250 Kgs"}
          />
        </Grid>
        <Grid item xs>
          <InfoCards
            heading="Total Quantity Processed"
            text="M"
            style={{ background: "#89c9f3" }}
            info={"167 Kgs"}
          />
        </Grid>
        <Grid item xs>
          <InfoCards
            heading="Most Common Defect"
            text="P"
            style={{ background: "#fdaeae" }}
            info={"Tearing"}
          />
        </Grid>
        <Grid item xs>
          <InfoCards
            heading="Top Performing Shift"
            text="Y"
            style={{ background: "#f1cc65" }}
            info={"Shift A"}
          />
        </Grid>
        <Grid item xs>
          <InfoCards
            heading="Top Performing Employee"
            text="T"
            style={{ background: "#97e8b0" }}
            info={"Ashish H"}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h2">Machine Analytics </Typography>
        </Grid>

        <Grid item lg={7} md={12} xs={12}>
          <Card>
            <CardHeader
              titleTypographyProps={{ variant: "h4" }}
              title="Machine wise Shift Production"
            />
            <CardContent>
              <Visitors quantity={quantity} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item lg={5} md={12} xs={12}>
          <Card elevation={1}>
            <CardHeader
              titleTypographyProps={{ variant: "h4" }}
              title="Effective Machine Runtime"
            />
            <CardContent>
              <MachineRuntime />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h2">Customer Analytics </Typography>
        </Grid>

        <Grid item lg={6} md={12} xs={12}>
          <Card elevation={1}>
            <CardHeader
              titleTypographyProps={{ variant: "h4" }}
              title="Customer Wise Production"
            />
            <CardContent>
              <CustomerTowelProduction quantity={quantity} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item lg={6} md={12} xs={12}>
          <Card elevation={1}>
            <CardHeader
              titleTypographyProps={{ variant: "h4" }}
              title="Machine wise Customer Production"
            />
            <CardContent>
              <MachineWiseCustomer quantity={quantity} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h2">Operator Analytics </Typography>
        </Grid>

        <Grid item lg={12} md={12} xs={12}>
          <Card elevation={1}>
            <CardHeader
              titleTypographyProps={{ variant: "h4" }}
              title="Operator wise Average Performance"
            />
            <CardContent>
              <OperatorAvgPerformance quantity={quantity} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h2">Defect Analytics </Typography>
        </Grid>

        <Grid item lg={6} md={12} xs={12}>
          <Card elevation={1}>
            <CardHeader
              titleTypographyProps={{ variant: "h4" }}
              title="Machine Wise Defects"
            />
            <CardContent>
              <MachineDefects />
            </CardContent>
          </Card>
        </Grid>

        <Grid item lg={6} md={12} xs={12}>
          <Card elevation={1}>
            <CardHeader
              titleTypographyProps={{ variant: "h4" }}
              title="Customer wise Defects"
            />
            <CardContent>
              <CustomerWiseDefects />
            </CardContent>
          </Card>
        </Grid>

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
};

export default SampleDashboard;
