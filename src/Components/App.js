import React, { useContext } from "react";
import "../styles/App.scss";
import "./InputForm";
import InputForm from "./InputForm";
import PizzaCards from "./PizzaCards";
import Discount from "./Discount";
import PropTypes from "prop-types";
import { UpperLevelContext } from "../context/UpperLevelContext";

const App = ({ appInstance }) => {
  const { splitView, metricUnits } = useContext(UpperLevelContext);

  return (
    <div className={`App ${splitView} app-number-${appInstance}`}>
      <div className="input-and-discounts">
        <InputForm />
        <Discount />
      </div>

      <PizzaCards
        appInstance={appInstance}
        splitView={splitView}
        metricUnits={metricUnits}
      />
    </div>
  );
};

App.propTypes = {
  appInstance: PropTypes.string.isRequired,
};

export default App;
