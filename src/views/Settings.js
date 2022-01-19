import React, { useEffect, useState, useContext } from "react";
import {
  Grid,
  Card,
  Box,
  Button,
  CardContent,
  CardHeader,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
} from "@material-ui/core";
import { DataContext } from "../Context/DataContext";
import axios from "axios";

const headings = ["Target", "Kgs", "Pieces", , "Action"];

const Settings = () => {
  const useStyles = makeStyles((theme) => ({
    tableRow: {
      "& .MuiTableCell-alignRight": {
        textAlign: "center",
      },
    },
    tableHead: {
      fontWeight: "600",
    },
    headingStyle: {
      margin: "10px 0 15px 0",
    },
    table: {
      minWidth: 650,
    },
  }));
  const classes = useStyles();
  const { targetValues } = useContext(DataContext);

  const [machinePieces, setMachinePieces] = useState(
    targetValues.machine_settings.PiecesTarget
  );
  const [machineNetWeight, setMachineNetWeight] = useState(
    targetValues.machine_settings.NetWeightTarget
  );

  const [operatorPieces, setOperatorPieces] = useState(
    targetValues.operator_settings.PiecesTarget
  );
  const [operatorNetWeight, setOperatorNetWeight] = useState(
    targetValues.operator_settings.NetWeightTarget
  );
  let targetData = {
    machine_settings: {
      PiecesTarget: machinePieces,
      NetWeightTarget: machineNetWeight,
    },
    operator_settings: {
      PiecesTarget: operatorPieces,
      NetWeightTarget: operatorNetWeight,
    },
  };

  const saveFunc = () => {};

  return (
    <>
      <Typography variant="h1" className={classes.headingStyle}>
        Settings{" "}
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.tableHead}>
            <TableRow className={classes.tableRow}>
              {headings.map((cell, index) => {
                return (
                  <TableCell key={index} align="right">
                    {cell}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Machine Production Targets
              </TableCell>

              <TableCell align="right">
                <TextField
                  id="outlined-search"
                  label="Add Target"
                  variant="outlined"
                  size="small"
                  type="number"
                  defaultValue={targetValues.machine_settings.PiecesTarget}
                  onChange={(e) => setMachinePieces(Number(e.target.value))}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  id="outlined-search"
                  label="Add Target"
                  variant="outlined"
                  size="small"
                  type="number"
                  defaultValue={targetValues.machine_settings.NetWeightTarget}
                  onChange={(e) => setMachineNetWeight(Number(e.target.value))}
                />
              </TableCell>
              <TableCell align="right" rowSpan={2}>
                <Button variant="contained" color="primary" onClick={saveFunc}>
                  Save
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell component="th" scope="row">
                Operator Production Targets
              </TableCell>

              <TableCell align="right">
                <TextField
                  id="outlined-search"
                  label="Add Target"
                  variant="outlined"
                  size="small"
                  type="number"
                  defaultValue={targetValues.operator_settings.PiecesTarget}
                  onChange={(e) => setOperatorPieces(Number(e.target.value))}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  id="outlined-search"
                  label="Add Target"
                  variant="outlined"
                  size="small"
                  type="number"
                  defaultValue={targetValues.operator_settings.NetWeightTarget}
                  onChange={(e) => setOperatorNetWeight(Number(e.target.value))}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* <Typography variant="h2" className={classes.headingStyle}>Target Values </Typography>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
            <TableHead className={classes.tableHead}>
            <TableRow className={classes.tableRow}>
              {
                headings.map((cell)=>{
                  return (
                    <TableCell align="right">{cell}</TableCell>
                  )
                })
              }                
            </TableRow>
            </TableHead>
            <TableBody>
                <TableRow >
                <TableCell align="center" component="th" scope="row">Machine Production Targets</TableCell>
                <TableCell align="center"> 615</TableCell>
                <TableCell align="center"> 615</TableCell>
                <TableCell align="center"> 615</TableCell>
                <TableCell align="center">
                    <Button 
                      variant="contained" 
                      color="primary" 
                      >
                      Delete
                    </Button>
                </TableCell> 
                </TableRow>

                <TableRow >
                <TableCell align="center" component="th" scope="row">Operator Production Targets</TableCell>
                <TableCell align="center"> 615</TableCell>
                <TableCell align="center"> 615</TableCell>
                <TableCell align="center"> 615</TableCell>
                <TableCell align="center">
                    <Button 
                      variant="contained" 
                      color="primary" 
                      >
                      Delete
                    </Button>
                </TableCell> 
                </TableRow>
            </TableBody>
        </Table>
        </TableContainer> */}
    </>
  );
};

export default Settings;
