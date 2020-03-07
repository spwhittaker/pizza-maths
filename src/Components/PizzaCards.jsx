import React from "react";

import PizzaCard from "./PizzaCard";

import "../styles/PizzaCards.css";

const PizzaCards = ({
  splitView,
  pizzas,
  addButton,
  minusButton,
  removeButton,
  metricUnits,
  percentageCalculator,
  percentValue,
  minSpend,
  conversionToggle,
  handleMetricConversion,
  handleImperialConversion
}) => {
  let totalVal = 0;
  let areaVal = 0;
  if (pizzas.length > 0) {
    totalVal = Number(
      pizzas
        .map(pizza => pizza.price * pizza.quantity)
        .reduce((total, currentPizza) => total + currentPizza)
    );
  }
  if (pizzas.length > 0) {
    areaVal = pizzas
      .map(pizza => Math.PI * Math.pow(pizza.diameter / 2, 2) * pizza.quantity)
      .reduce((total, currentArea) => total + currentArea);
  }
  let percentageMetThreshold;
  if (minSpend <= totalVal) {
    percentageMetThreshold = percentageCalculator;
  } else {
    percentageMetThreshold = 1;
  }
  console.log("metric pizza cards", handleMetricConversion);
  console.log("imperial pizza cards", handleImperialConversion);
  return (
    <div className="pizza-cards-container">
      {" "}
      <div className={`all-pizzas ${splitView}`}>
        {pizzas.map((pie, index) => {
          return (
            <PizzaCard
              {...pie}
              pizzaId={pie.pizzaId}
              addButtonClick={addButton}
              minusButtonClick={minusButton}
              removeButtonClick={removeButton}
              metricUnits={metricUnits}
              handleMetric={handleMetricConversion}
              handleImperial={handleImperialConversion}
            />
          );
        })}
      </div>
      <div className="total-values">
        {pizzas.length > 0 && (
          <div>
            {percentageMetThreshold === 1 && (
              <h2>Total: £{totalVal.toFixed(2)}</h2>
            )}
            {percentageMetThreshold !== 1 && (
              <h2>Total before discount: £{totalVal.toFixed(2)}</h2>
            )}
            {percentageMetThreshold !== 1 && (
              <h2>Discount applied: {percentValue}%</h2>
            )}
            {percentageMetThreshold !== 1 && (
              <h2>
                Total after discount: £
                {(totalVal * percentageMetThreshold).toFixed(2)}
              </h2>
            )}
            {minSpend > 0 && minSpend > totalVal && (
              <h2>
                You've not met the minimum spend of <br />£{minSpend} to get{" "}
                {percentValue}% off.
              </h2>
            )}

            {metricUnits === false ? (
              <h2>
                Total area: {areaVal.toFixed(2)} in<sup>2</sup>
              </h2>
            ) : (
              <h2>
                Total area: {(areaVal * 2.54 * 2.54).toFixed(2)} cm<sup>2</sup>
              </h2>
            )}
            {metricUnits === false ? (
              <h2>
                Total price per in<sup>2</sup>:{" "}
                {((totalVal / areaVal) * 100 * percentageMetThreshold).toFixed(
                  2
                )}
                p
              </h2>
            ) : (
              <h2>
                Total price per cm<sup>2</sup>:{" "}
                {(
                  (totalVal / (areaVal * 2.54 * 2.54)) *
                  100 *
                  percentageMetThreshold
                ).toFixed(2)}
                p
              </h2>
            )}
            <h2>
              Total area to crust ratio:{" "}
              {(
                areaVal /
                pizzas
                  .map(pizza => Math.PI * pizza.diameter * pizza.quantity)
                  .reduce((total, currentPizza) => total + currentPizza)
              ).toFixed(2)}
            </h2>
          </div>
        )}

        {pizzas.length === 0 && <h1>Add some pizzas!</h1>}
      </div>
    </div>
  );
};

export default PizzaCards;
