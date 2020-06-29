import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  return (
    <AppContext.Provider value={{ count, increaseCount }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
