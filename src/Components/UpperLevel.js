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
      comparisonClass: "side-by-side-comparison",
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

  handleMetricConversion = () => {
    this.setState({ metricUnits: true });
  };
  handleImperialConversion = () => {
    this.setState({ metricUnits: false });
  };
  /*  handleConversionInput = input => {
    input.preventDefault();
    if (document.getElementById(`switch_right${this.props.instance}`).checked) {
      this.setState({ metricUnits: true });
    }
    if (document.getElementById(`switch_left${this.props.instance}`).checked) {
      this.setState({ metricUnits: false });
    }
  }; */

  render() {
    return (
      <div className="upper-level">
        <header className="App-header">
          <h1>Pizzarithmetic</h1>
          <h3>...best thing since sliced bread(pizza)</h3>
          <p>Add some pizza details below and compare for the best value</p>
        </header>
        <div className="top-level-options">
          {this.state.comparisonDiv === false && (
            <button
              type="button"
              onClick={this.handleAddComparison}
              className="top-level-button"
            >
              Add comparison
            </button>
          )}
          {this.state.comparisonDiv === true && (
            <button
              type="button"
              onClick={this.handleRemoveComparison}
              className="top-level-button"
            >
              Remove second comparison
            </button>
          )}
        </div>
        <span className="apps">
          <App
            className={this.state.comparisonClass}
            sideBySide={this.state.splitViewClass}
            metricUnits={this.state.metricUnits}
            appInstance={"0"}
            handleMetricConversion={this.handleMetricConversion}
            handleImperialConversion={this.handleImperialConversion}
          />
          {this.state.comparisonDiv && (
            <App
              className={this.state.splitViewClass}
              sideBySide={this.state.splitViewClass}
              metricUnits={this.state.metricUnits}
              appInstance={"1"}
              handleMetricConversion={this.handleMetricConversion}
              handleImperialConversion={this.handleImperialConversion}
            />
          )}
        </span>
      </div>
    );
  }
}

export default UpperLevel;
