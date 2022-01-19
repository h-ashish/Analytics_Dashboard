import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
export const DataContext = createContext();

export default function DataProvide({ children }) {
  const [targetValues, setTargetValues] = useState({
    machine_settings: {
      PiecesTarget: 0,
      NetWeightTarget: 0,
    },
    operator_settings: {
      PiecesTarget: 0,
      NetWeightTarget: 0,
    },
  });

  const [machineTarget, setMachineTarget] = useState(0);
  const [operatorTarget, setOperatorTarget] = useState(0);

  const machineHandleChange = (e) => {
    setMachineTarget(Number(e.target.value));
  };

  const operatorHandleChange = (e) => {
    setOperatorTarget(Number(e.target.value));
  };

  return (
    <DataContext.Provider
      value={{
        machineTarget,
        operatorTarget,
        targetValues,
        machineHandleChange,
        operatorHandleChange,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
