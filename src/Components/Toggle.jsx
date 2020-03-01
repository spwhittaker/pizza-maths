import React, {Component} from 'react';

class Toggle extends Component {
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
          id="switch_left"
          name="switchToggle"
          value={this.props.leftLabel}
          onChange={this.toggleState}
          checked={!this.state.toggle}
        />
        <label htmlFor="switch_left">{this.props.leftLabel}</label>

        <input
          type="radio"
          id="switch_right"
          name="switchToggle"
          value={this.props.rightLabel}
          onChange={this.toggleState}
          checked={this.state.toggle}
        />
        <label htmlFor="switch_right">{this.props.rightLabel}</label>
      </form>
    );
  }
}

const ToggleSwitch = function() {
  return <Toggle title="Pick a size" leftLabel="in" rightLabel="cm"/>;
}

export default ToggleSwitch;