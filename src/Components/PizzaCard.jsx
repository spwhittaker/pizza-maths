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
      <h4>Name: {name}</h4>
      {metricUnits === false ? (
        <h4>Diameter: {roundedDiameter} inches</h4>
      ) : (
        <h4>
          Diameter:{" "}
          {(diameter * 2.54) % 1 === 0
            ? diameter * 2.54
            : Number(diameter * 2.54).toFixed(1)}{" "}
          cm
        </h4>
      )}
      <h4>Price per pizza: £{Number(price).toFixed(2)}</h4>
      <span>
        <p>Quantity: {quantity}</p>
        <button
          type="button"
          className="addButton"
          onClick={() => addButtonClick(pizzaId)}
        >
          +
        </button>
        <button
          type="button"
          className="minusButton"
          onClick={() => minusButtonClick(pizzaId)}
        >
          -
        </button>
        <button
          type="button"
          className="removeButton"
          onClick={() => removeButtonClick(pizzaId)}
        >
          Remove
        </button>
      </span>

      <h4>Total: £{Number(price * quantity).toFixed(2)}</h4>
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
        Area to crust (bigger means more area compared to crust):{" "}
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
