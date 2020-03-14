import React from "react";
import "../styles/ToggleSwitch.scss";
import PropTypes from "prop-types";

const ToggleSwitch = ({
  title,
  uniqueId,
  onChangeLeft,
  onChangeRight,
  isMetric
}) => {
  return (
    <div className="switch-field">
      <div className="switch-title">{title}</div>
      <input
        type="radio"
        id={`switch_left${uniqueId}`}
        onChange={onChangeLeft}
        checked={!isMetric}
        value="in"
      />
      <label htmlFor={`switch_left${uniqueId}`}>in</label>
      <input
        type="radio"
        id={`switch_right${uniqueId}`}
        onChange={onChangeRight}
        checked={isMetric}
      />
      <label htmlFor={`switch_right${uniqueId}`}>cm</label>
    </div>
  );
};

ToggleSwitch.propTypes = {
  uniqueId: PropTypes.string,
  title: PropTypes.string,
  isMetric: PropTypes.bool.isRequired,
  onChangeLeft: PropTypes.func.isRequired,
  onChangeRight: PropTypes.func.isRequired
};

export default ToggleSwitch;
