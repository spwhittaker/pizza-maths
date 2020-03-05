import React, { Component } from "react";
import "../styles/Toggle.scss";

class ToggleSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };

    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  render() {
    return (
      <form className="switch-field">
        <div className="switch-title">{this.props.title}</div>
        <input
          type="radio"
          id={`switch_left${this.props.instanceNumber}`}
          name="switchToggle"
          value={this.props.leftLabel}
          onChange={this.toggleState}
          checked={!this.state.toggle}
        />
        <label htmlFor={`switch_left${this.props.instanceNumber}`}>
          {this.props.leftLabel}
        </label>

        <input
          type="radio"
          id={`switch_right${this.props.instanceNumber}`}
          name="switchToggle"
          value={this.props.rightLabel}
          onChange={this.toggleState}
          checked={this.state.toggle}
        />
        <label htmlFor={`switch_right${this.props.instanceNumber}`}>
          {this.props.rightLabel}
        </label>
      </form>
    );
  }
}

export default ToggleSwitch;
