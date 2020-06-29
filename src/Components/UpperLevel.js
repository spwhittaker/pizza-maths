import App from "./App";
import "../styles/UpperLevel.scss";
import Footer from "./Footer";
import React, { Component } from "react";
import { AppProvider } from "../context/AppContext";

class UpperLevel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comparisonDiv: false,
      comparisonClass: "single-view-comparison",
      splitView: "single-view",
      metricUnits: false,
    };
  }

  handleAddComparison = (event) => {
    this.setState({
      comparisonDiv: true,
      comparisonClass: "side-by-side-comparison",
      splitView: "split-view",
    });
  };

  handleRemoveComparison = (event) => {
    this.setState({
      comparisonDiv: false,
      comparisonClass: "single-view-comparison",
      splitView: "single-view",
    });
  };

  handleMetricConversion = () => {
    this.setState({ metricUnits: true });
  };
  handleImperialConversion = () => {
    this.setState({ metricUnits: false });
  };

  render() {
    return (
      <div className="upper-level">
        <div className="background"></div>
        <header className="App-header">
          <img
            src="/white_logo_transparent_background_edited.png"
            id="logo"
            alt="app logo"
          />
          <h1>...best thing since sliced bread (pizza)</h1>
          <p>Add some pizza details below and check for the best value</p>
        </header>
        <div className="top-level-options">
          {this.state.comparisonDiv === false && (
            <button
              type="button"
              onClick={this.handleAddComparison}
              className="top-level-button"
            >
              <p>Compare second pizza deal</p>
            </button>
          )}
          {this.state.comparisonDiv === true && (
            <button
              type="button"
              onClick={this.handleRemoveComparison}
              className="top-level-button"
            >
              <p>Remove second comparison</p>
            </button>
          )}
        </div>
        <span className="apps">
          <AppProvider>
            <App
              className={this.state.comparisonClass}
              sideBySide={this.state.splitView}
              metricUnits={this.state.metricUnits}
              appInstance={"0"}
              handleMetricConversion={this.handleMetricConversion}
              handleImperialConversion={this.handleImperialConversion}
            />
          </AppProvider>
          {this.state.comparisonDiv && (
            <AppProvider>
              <App
                className={this.state.splitView}
                sideBySide={this.state.splitView}
                metricUnits={this.state.metricUnits}
                appInstance={"1"}
                handleMetricConversion={this.handleMetricConversion}
                handleImperialConversion={this.handleImperialConversion}
              />
            </AppProvider>
          )}
        </span>
        <div className="spacer"></div>
        <Footer />
      </div>
    );
  }
}

export default UpperLevel;
