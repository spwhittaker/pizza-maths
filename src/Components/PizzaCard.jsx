import React from "react";
import "../styles/PizzaCard.scss";
import ToggleSwitch from "./ToggleSwitch";
const PizzaCard = ({
  name,
  diameter,
  price,
  quantity,
  pizzaId,
  addButtonClick,
  minusButtonClick,
  removeButtonClick,
  metricUnits,
  handleMetric,
  handleImperial,
  isBestValue
}) => {
  let roundedDiameter;
  if (diameter % 1 === 0) {
    roundedDiameter = diameter;
  } else {
    roundedDiameter = Number(diameter).toFixed(1);
  }
  let classNames = "PizzaCard";
  if (isBestValue === true) {
    classNames = "PizzaCard best-value-pizza";
  }

  const area = Math.PI * Math.pow(diameter / 2, 2);
  const circumference = Math.PI * diameter;

  return (
    <div className={classNames} key={pizzaId}>
      <p>
        <strong>Name</strong>: {name}
      </p>
      {metricUnits === false ? (
        <p>
          <strong>Diameter</strong>: {roundedDiameter} inches
        </p>
      ) : (
        <p>
          <strong>Diameter</strong>:{" "}
          {(diameter * 2.54) % 1 === 0
            ? diameter * 2.54
            : Number(diameter * 2.54).toFixed(1)}{" "}
          cm
        </p>
      )}
      <p>
        <strong>Price per pizza</strong>: £{Number(price).toFixed(2)}
      </p>
      <div className="quantity-buttons">
        <p>
          <strong>Quantity</strong>: {quantity}
        </p>
        <button
          type="button"
          className="add-button"
          onClick={() => addButtonClick(pizzaId)}
        >
          +
        </button>
        <button
          type="button"
          className="minus-button"
          onClick={() => minusButtonClick(pizzaId)}
        >
          -
        </button>
        <button
          type="button"
          className="remove-button"
          onClick={() => removeButtonClick(pizzaId)}
        >
          Remove
        </button>
        <ToggleSwitch
          uniqueId={pizzaId}
          isMetric={metricUnits}
          onChangeLeft={handleImperial}
          onChangeRight={handleMetric}
        />
      </div>
      <p>
        <strong>Total</strong>: £{Number(price * quantity).toFixed(2)}
      </p>
      {metricUnits === false ? (
        <p>
          <strong>Area</strong>: {(area * quantity).toFixed(2)} in<sup>2</sup>
        </p>
      ) : (
        <p>
          <strong>Area</strong>: {(area * quantity * 2.54 * 2.54).toFixed(2)} cm
          <sup>2</sup>
        </p>
      )}
      {metricUnits === false ? (
        <p>
          <strong>Crust</strong>: {(circumference * quantity).toFixed(2)} inches
        </p>
      ) : (
        <p>
          <strong>Crust</strong>: {(circumference * quantity * 2.54).toFixed(2)}{" "}
          cm
        </p>
      )}
      <p>
        <strong>Area to crust ratio</strong>:{" "}
        {((area * quantity) / (circumference * quantity)).toFixed(2)}
      </p>
      {metricUnits === false ? (
        <p>
          <strong>
            Price per in<sup>2</sup>
          </strong>
          : {((Number(price) / area) * 100).toFixed(2)}p
        </p>
      ) : (
        <p>
          <strong>
            Price per cm<sup>2</sup>
          </strong>
          : {(Number(price / (area * 2.54 * 2.54)) * 100).toFixed(2)}p
        </p>
      )}
      {isBestValue === true && (
        <p className="best-value-text">(Best value for money!)</p>
      )}{" "}
    </div>
  );
};

export default PizzaCard;
