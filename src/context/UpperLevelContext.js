import React, { createContext, useState } from "react";

const UpperLevelContext = createContext();

const UpperLevelProvider = ({ children }) => {
  const [comparisonDiv, setComparisonDiv] = useState(false);
  const [comparisonClass, setComparisonClass] = useState(
    "single-view-comparison"
  );
  const [splitView, setSplitView] = useState("split-view");
  const [metricUnit, setMetricUnits] = useState(false);
  const coolStuff = () => console.log("Cool! This is contextual!");
  return (
    <UpperLevelContext.Provider
      value={{
        coolStuff,
        comparisonDiv,
        setComparisonDiv,
        comparisonClass,
        setComparisonClass,
        splitView,
        setSplitView,
        metricUnit,
        setMetricUnits,
      }}
    >
      {children}
    </UpperLevelContext.Provider>
  );
};

export { UpperLevelProvider, UpperLevelContext };
