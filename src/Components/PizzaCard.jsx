import React from "react";
import "../styles/PizzaCard.scss";
import ToggleSwitch from "./ToggleSwitch";
import PropTypes from "prop-types";
import { FaPlusCircle, FaMinusCircle, FaTrash } from "react-icons/fa";
import { localCurrency, localCurrencyDetailed } from "../currencyFormatter";

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
  isBestValue,
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
      <span className="pizza-detail">
        <p>
          <strong>Name</strong>:
        </p>

        <p>{name}</p>
      </span>
      {metricUnits === false ? (
        <span className="pizza-detail">
          <p>
            <strong>Diameter</strong>:
          </p>
          <p>{roundedDiameter} inches</p>
        </span>
      ) : (
        <span className="pizza-detail">
          <p>
            <strong>Diameter</strong>:
          </p>
          <p>
            {(diameter * 2.54) % 1 === 0
              ? diameter * 2.54
              : Number(diameter * 2.54).toFixed(1)}{" "}
            cm
          </p>
        </span>
      )}
      <span className="pizza-detail">
        <p>
          <strong>Price per pizza</strong>:
        </p>
        <p>{localCurrency(price)}</p>
      </span>
      <span className="pizza-detail">
        <p>
          <strong>Quantity</strong>:
        </p>
        <p>{quantity}</p>
      </span>
      <div className="quantity-buttons">
        <div className="add-remove-buttons">
          <FaPlusCircle
            className="add-button"
            onClick={() => addButtonClick(pizzaId)}
          />

          <FaMinusCircle
            className="minus-button"
            onClick={() => minusButtonClick(pizzaId)}
          />
          <FaTrash
            className="remove-button"
            onClick={() => removeButtonClick(pizzaId)}
          />
        </div>
        <ToggleSwitch
          uniqueId={pizzaId}
          isMetric={metricUnits}
          onChangeLeft={handleImperial}
          onChangeRight={handleMetric}
        />
      </div>
      <span className="pizza-detail">
        <p>
          <strong>Total</strong>:
        </p>
        <p>{localCurrency(price * quantity)}</p>
      </span>
      {metricUnits === false ? (
        <span className="pizza-detail">
          <p>
            <strong>Area</strong>:
          </p>
          <p>
            {(area * quantity).toFixed(2)} in<sup>2</sup>
          </p>
        </span>
      ) : (
        <span className="pizza-detail">
          <p>
            <strong>Area</strong>:
          </p>
          <p>
            {(area * quantity * 2.54 * 2.54).toFixed(2)} cm
            <sup>2</sup>
          </p>
        </span>
      )}
      {metricUnits === false ? (
        <span className="pizza-detail">
          <p>
            <strong>Crust</strong>:
          </p>
          <p>{(circumference * quantity).toFixed(2)} inches</p>
        </span>
      ) : (
        <span className="pizza-detail">
          <p>
            <strong>Crust</strong>:
          </p>
          <p>{(circumference * quantity * 2.54).toFixed(2)} cm</p>
        </span>
      )}
      <span className="pizza-detail">
        {" "}
        <p>
          <strong>Area to crust ratio</strong>:
        </p>
        <p>{((area * quantity) / (circumference * quantity)).toFixed(2)}</p>
      </span>
      {metricUnits === false ? (
        <span className="pizza-detail">
          <p>
            <strong>
              Price per in<sup>2</sup>
            </strong>
            :
          </p>
          <p>{localCurrencyDetailed(price / area)}</p>
        </span>
      ) : (
        <span className="pizza-detail">
          <p>
            <strong>
              Price per cm<sup>2</sup>
            </strong>
            :
          </p>
          <p>{localCurrencyDetailed(price / (area * 2.54 * 2.54))}</p>
        </span>
      )}
      {/*{isBestValue === true && (*/}
      {/*  <p className="best-value-text">(Best value for money on this order!)</p>*/}
      {/*)}{" "}*/}
    </div>
  );
};

PizzaCard.propTypes = {
  addButtonClick: PropTypes.func.isRequired,
  diameter: PropTypes.number.isRequired,
  handleImperial: PropTypes.func.isRequired,
  handleMetric: PropTypes.func.isRequired,
  isBestValue: PropTypes.bool.isRequired,
  metricUnits: PropTypes.bool.isRequired,
  minusButtonClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  pizzaId: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  removeButtonClick: PropTypes.func.isRequired,
};

export default PizzaCard;
