import App from "./App";
import "../styles/UpperLevel.css";

import React, { Component } from "react";

class UpperLevel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comparisonDiv: false,
      comparisonClass: "",
      splitView: "",
      metricUnits: false
    };
  }

  handleAddComparison = event => {
    this.setState({
      comparisonDiv: true,
      comparisonClass: "sideBySideComparison",
      splitViewClass: "split-view"
    });
  };

  handleRemoveComparison = event => {
    this.setState({
      comparisonDiv: false,
      comparisonClass: "",
      splitViewClass: ""
    });
  };

  handleUnitConversion = event => {
    this.setState({ metricUnits: !this.state.metricUnits });
  };
  render() {
    return (
      <div>
        <header className="App-header">
          <h1>Pizzarithmetic</h1>
          <h3>...best thing since sliced bread(pizza)</h3>
        </header>
        {this.state.comparisonDiv === false && (
          <button type="button" onClick={this.handleAddComparison}>
            Add comparison
          </button>
        )}
        {this.state.comparisonDiv === true && (
          <button type="button" onClick={this.handleRemoveComparison}>
            Remove second comparison
          </button>
        )}
        <button type="button" onClick={this.handleUnitConversion}>
          Change values to {this.state.metricUnits === true && "cm"}
          {this.state.metricUnits === false && "inches"}
        </button>
        <span className="UpperLevel">
          <App
            className={this.state.comparisonClass}
            sideBySide={this.state.splitViewClass}
            metricUnits={this.state.metricUnits}
          />
          {this.state.comparisonDiv && (
            <App
              className={this.state.splitViewClass}
              sideBySide={this.state.splitViewClass}
              metricUnits={this.state.metricUnits}
            />
          )}
        </span>
      </div>
    );
  }
}

export default UpperLevel;
