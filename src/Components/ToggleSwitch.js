import React from "react";
import "../styles/ToggleSwitch.scss";
import PropTypes from "prop-types";

const ToggleSwitch = ({
  title,
  appInstance,
  onChangeLeft,
  onChangeRight,
  isMetric,
}) => {
  return (
    <div className='switch-field'>
      <div className='switch-title'>{title}</div>
      <span>
        <input
          type='radio'
          id={`switch_left${appInstance}`}
          onChange={onChangeLeft}
          checked={!isMetric}
          value='in'
        />
        <label htmlFor={`switch_left${appInstance}`}>in</label>
        <input
          type='radio'
          id={`switch_right${appInstance}`}
          onChange={onChangeRight}
          checked={isMetric}
        />
        <label htmlFor={`switch_right${appInstance}`}>cm</label>
      </span>
    </div>
  );
};

ToggleSwitch.propTypes = {
  appInstance: PropTypes.string,
  title: PropTypes.string,
  isMetric: PropTypes.bool.isRequired,
  onChangeLeft: PropTypes.func.isRequired,
  onChangeRight: PropTypes.func.isRequired,
};

export default ToggleSwitch;
