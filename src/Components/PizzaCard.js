import React, { useContext } from "react";
import "../styles/PizzaCard.scss";
import ToggleSwitch from "./ToggleSwitch";
import { UpperLevelContext } from "../context/UpperLevelContext";
import { AppContext } from "../context/AppContext";
import PropTypes from "prop-types";
import { FaPlusCircle, FaMinusCircle, FaTrash } from "react-icons/fa";
import { localCurrency, localCurrencyDetailed } from "../currencyFormatter";

const PizzaCard = ({
  name,
  diameter,
  price,
  quantity,
  pizzaId,
  isBestValue,
}) => {
  const { metricUnits, setMetricUnits } = useContext(UpperLevelContext);
  const { handleRemove, handleAdd, handleMinus } = useContext(AppContext);

  let roundedDiameter =
    diameter % 1 === 0 ? diameter : Number(diameter).toFixed(1);

  const classNames =
    isBestValue === true ? "PizzaCard best-value-pizza" : "PizzaCard";
  const area = Math.PI * Math.pow(diameter / 2, 2);
  const circumference = Math.PI * diameter;

  return (
    <div className={classNames} key={pizzaId}>
      <span className='pizza-detail'>
        <p>
          <strong>Name</strong>:
        </p>

        <p>{name}</p>
      </span>
      <span className='pizza-detail'>
        <p>
          <strong>Diameter</strong>:
        </p>
        <p>
          {metricUnits
            ? `${
                (diameter * 2.54) % 1 === 0
                  ? diameter * 2.54
                  : Number(diameter * 2.54).toFixed(1)
              } cm`
            : `${roundedDiameter} inches`}
        </p>
      </span>

      <span className='pizza-detail'>
        <p>
          <strong>Price per pizza</strong>:
        </p>
        <p>{localCurrency(price)}</p>
      </span>
      <span className='pizza-detail'>
        <p>
          <strong>Quantity</strong>:
        </p>
        <p>{quantity}</p>
      </span>
      <div className='quantity-buttons'>
        <div className='add-remove-buttons'>
          <FaPlusCircle
            className='add-button'
            onClick={() => handleAdd(pizzaId)}
          />

          <FaMinusCircle
            className='minus-button'
            onClick={() => handleMinus(pizzaId)}
          />
          <FaTrash
            className='remove-button'
            onClick={() => handleRemove(pizzaId)}
          />
        </div>
        <ToggleSwitch
          appInstance={pizzaId}
          isMetric={metricUnits}
          onChangeLeft={() => {
            setMetricUnits(false);
          }}
          onChangeRight={() => {
            setMetricUnits(true);
          }}
        />
      </div>
      <span className='pizza-detail'>
        <p>
          <strong>Total</strong>:
        </p>
        <p>{localCurrency(price * quantity)}</p>
      </span>

      <span className='pizza-detail'>
        <p>
          <strong>Area</strong>:
        </p>
        <p>
          {metricUnits
            ? `${(area * quantity * 2.54 * 2.54).toFixed(2)} cm`
            : `${(area * quantity).toFixed(2)} in`}
          <sup>2</sup>
        </p>
      </span>
      <span className='pizza-detail'>
        <p>
          <strong>Crust</strong>:
        </p>
        <p>
          {metricUnits
            ? `${(circumference * quantity * 2.54).toFixed(2)} cm`
            : `${(circumference * quantity).toFixed(2)} inches`}
        </p>
      </span>
      <span className='pizza-detail'>
        <p>
          <strong>Area to crust ratio</strong>:
        </p>
        <p>{((area * quantity) / (circumference * quantity)).toFixed(2)}</p>
      </span>

      <span className='pizza-detail'>
        <p>
          <strong>
            Price per {metricUnits ? "cm" : "in"}
            <sup>2</sup>
          </strong>
          :
        </p>
        <p>
          {metricUnits
            ? localCurrencyDetailed(price / (area * 2.54 * 2.54))
            : localCurrencyDetailed(price / area)}
        </p>
      </span>

      {isBestValue === true && (
        <p className='best-value-text'>(Best value for money on this order!)</p>
      )}
    </div>
  );
};

PizzaCard.propTypes = {
  diameter: PropTypes.number.isRequired,
  isBestValue: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  pizzaId: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default PizzaCard;
