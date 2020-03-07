import React, { Component } from "react";
import "../styles/Toggle.css";

class ToggleSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };

    this.toggleState = this.toggleState.bind(this);
  }
  /*   metricState = () => {
    if (this.props.metricUnits) {
      if (this.props.metricUnits === false) {
        return false;
      }

      return true;
    }
  }; */

  toggleState() {
    this.setState({
      toggle: !this.state.toggle
    });
    if (this.props.toggleFunction) {
      this.props.toggleFunction(this.state.toggle);
    }
  }

  render() {
    return (
      <form className="switch-field">
        <div className="switch-title">{this.props.title}</div>
        <input
          type="radio"
          id={`switch_left${this.props.instanceNumber}`}
          name="switchToggle"
          // value={!this.props.metricState}
          onChange={() => {
            this.props.setImperial === undefined &&
              this.setState({ toggle: true });
            this.props.setImperial !== undefined &&
              this.props.metricUnits === true &&
              this.props.setImperial();
            console.log("go imperial");
          }}
          /* checked={!this.state.toggle} */
          checked={
            this.props.metricUnits !== undefined &&
            this.props.metricUnits === false
              ? true
              : !this.state.toggle
          }
        />
        <label htmlFor={`switch_left${this.props.instanceNumber}`}>in</label>

        <input
          type="radio"
          id={`switch_right${this.props.instanceNumber}`}
          name="switchToggle"
          //value={this.props.metricState}
          onChange={() => {
            this.props.setMetric && this.setState({ toggle: false });
            this.props.setMetric !== undefined &&
              this.props.metricUnits === false &&
              this.props.setMetric();
            console.log("go metric");
          }}
          checked={
            this.props.metricUnits !== undefined &&
            this.props.metricUnits === true
              ? true
              : !this.state.toggle
          }
        />
        <label htmlFor={`switch_right${this.props.instanceNumber}`}>cm</label>
      </form>
    );
  }
}

export default ToggleSwitch;
