import React from "react";
import "../styles/PizzaCard.css";
const PizzaCard = ({
  name,
  diameter,
  price,
  quantity,
  pizzaId,
  addButtonClick,
  minusButtonClick,
  removeButtonClick,
  metricUnits
}) => {
  let roundedDiameter;
  if (diameter % 1 === 0) {
    roundedDiameter = diameter;
  } else {
    roundedDiameter = Number(diameter).toFixed(1);
  }
  const area = Math.PI * Math.pow(diameter / 2, 2);
  const circumference = Math.PI * diameter;
  return (
    <div className="PizzaCard" key={pizzaId}>
      <p>Name: {name}</p>
      {metricUnits === false ? (
        <p>Diameter: {roundedDiameter} inches</p>
      ) : (
        <p>
          Diameter:{" "}
          {(diameter * 2.54) % 1 === 0
            ? diameter * 2.54
            : Number(diameter * 2.54).toFixed(1)}{" "}
          cm
        </p>
      )}
      <p>Price per pizza: £{Number(price).toFixed(2)}</p>
      <div className="quantity-buttons">
        <p>Quantity: {quantity}</p>
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
      </div>

      <p>Total: £{Number(price * quantity).toFixed(2)}</p>
      {metricUnits === false ? (
        <p>
          Area: {(area * quantity).toFixed(2)} in<sup>2</sup>
        </p>
      ) : (
        <p>
          Area: {(area * quantity * 2.54 * 2.54).toFixed(2)} cm<sup>2</sup>
        </p>
      )}
      {metricUnits === false ? (
        <p>Crust: {(circumference * quantity).toFixed(2)} inches</p>
      ) : (
        <p>Crust: {(circumference * quantity * 2.54).toFixed(2)} cm</p>
      )}
      <p>
        Area to crust ratio:{" "}
        {((area * quantity) / (circumference * quantity)).toFixed(2)}
      </p>
      {metricUnits === false ? (
        <p>
          Price per in<sup>2</sup>: {((Number(price) / area) * 100).toFixed(2)}p
        </p>
      ) : (
        <p>
          Price per cm<sup>2</sup>:
          {(Number(price / (area * 2.54 * 2.54)) * 100).toFixed(2)}p
        </p>
      )}
    </div>
  );
};

export default PizzaCard;
