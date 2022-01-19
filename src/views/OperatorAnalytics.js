import React, { useState } from "react";

import {
  Typography,
  withStyles,
  makeStyles,
  Tabs,
  Tab,
  Box,
  TextField,
  Container,
} from "@material-ui/core";

import OperatorProduction from "./OperatorProduction";
import OperatorTrends from "./OperatorTrends";

const AntTabs = withStyles({
  root: {
      borderBottom: "1px solid #e8e8e8",
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
      textTransform: "none",
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(3),
      "&$selected": {
          color: "#0b70fb",
          fontWeight: theme.typography.fontWeightMedium,
      },
      "&:focus": {
          color: "#0b70fb",
      },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
      <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
      >
          {value === index && <Box p={3}>{children}</Box>}
      </div>
  );
}

const useStyles = makeStyles((theme)=>({
  tab: { 
    '& .MuiBox-root': {
      padding: '0px',
      },
    },
  headingStyle:{
      margin: "10px 0 10px 0",
      textAlign: 'center'
    },
}))

export default function OperatorAnalytics() {

  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div >
      <Box display="flex" alignItems="center" justifyContent="space-between">
      <Typography variant="h2" className={classes.headingStyle}>Operator Analytics </Typography>
        <Box>
          <AntTabs
              value={value}
              onChange={handleChange}
          >
              <AntTab label="Discrete Chart" />
              <AntTab label="Trends Chart" />
          </AntTabs>
        </Box>
      </Box>
      <Box className={classes.tab}>
        <div style={{ marginTop: "1%" }} >
          <TabPanel value={value} index={0}>
            <OperatorProduction />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <OperatorTrends  />
          </TabPanel>
        </div>
      </Box>
    </div>
  );
}
