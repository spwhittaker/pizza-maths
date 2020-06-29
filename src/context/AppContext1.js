import React, { createContext, useState } from "react";

const AppContext1 = createContext();

const AppProvider1 = ({ children }) => {
  return <AppContext1.Provider>{children}</AppContext1.Provider>;
};

export { AppContext1, AppProvider1 };
