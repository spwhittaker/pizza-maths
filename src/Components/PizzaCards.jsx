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
  percentValue
}) => {
  return (
    <div className="pizza-cards-container">
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
            />
          );
        })}
      </div>
      <div className="total-values">
        {pizzas.length > 0 && (
          <div>
            {percentageCalculator === 1 && (
              <h2>
                Total: £
                {(
                  Number(
                    pizzas
                      .map(pizza => pizza.price * pizza.quantity)
                      .reduce((total, currentPizza) => total + currentPizza)
                  ) * percentageCalculator
                ).toFixed(2)}
              </h2>
            )}
            {percentageCalculator !== 1 && (
              <h2>
                Total before discount: £
                {Number(
                  pizzas
                    .map(pizza => pizza.price * pizza.quantity)
                    .reduce((total, currentPizza) => total + currentPizza)
                ).toFixed(2)}
              </h2>
            )}
            {percentageCalculator !== 0 && (
              <h2>Discount applied: {percentValue}%</h2>
            )}
            {percentageCalculator !== 1 && (
              <h2>
                Total after discount: £
                {(
                  Number(
                    pizzas
                      .map(pizza => pizza.price * pizza.quantity)
                      .reduce((total, currentPizza) => total + currentPizza)
                  ) * percentageCalculator
                ).toFixed(2)}
              </h2>
            )}

            {metricUnits === false ? (
              <h2>
                Total area:{" "}
                {pizzas
                  .map(
                    pizza =>
                      Math.PI * Math.pow(pizza.diameter / 2, 2) * pizza.quantity
                  )
                  .reduce((total, currentArea) => total + currentArea)
                  .toFixed(2)}{" "}
                in<sup>2</sup>
              </h2>
            ) : (
              <h2>
                Total area:{" "}
                {(
                  pizzas
                    .map(
                      pizza =>
                        Math.PI *
                        Math.pow(pizza.diameter / 2, 2) *
                        pizza.quantity
                    )
                    .reduce((total, currentArea) => total + currentArea) *
                  2.54 *
                  2.54
                ).toFixed(2)}{" "}
                cm<sup>2</sup>
              </h2>
            )}
            {metricUnits === false ? (
              <h2>
                Total price per in<sup>2</sup>:{" "}
                {(
                  (pizzas
                    .map(pizza => pizza.price * pizza.quantity)
                    .reduce((total, currentPizza) => total + currentPizza) /
                    pizzas
                      .map(
                        pizza =>
                          Math.PI *
                          Math.pow(pizza.diameter / 2, 2) *
                          pizza.quantity
                      )
                      .reduce((total, currentArea) => total + currentArea)) *
                  100 *
                  percentageCalculator
                ).toFixed(2)}
                p
              </h2>
            ) : (
              <h2>
                Total price per cm<sup>2</sup>:{" "}
                {(
                  (pizzas
                    .map(pizza => pizza.price * pizza.quantity)
                    .reduce((total, currentPizza) => total + currentPizza) /
                    (pizzas
                      .map(
                        pizza =>
                          Math.PI *
                          Math.pow(pizza.diameter / 2, 2) *
                          pizza.quantity
                      )
                      .reduce((total, currentArea) => total + currentArea) *
                      2.54 *
                      2.54)) *
                  100 *
                  percentageCalculator
                ).toFixed(2)}
                p
              </h2>
            )}
            <h2>
              Total area to crust ratio:{" "}
              {(
                pizzas
                  .map(
                    pizza =>
                      Math.PI * Math.pow(pizza.diameter / 2, 2) * pizza.quantity
                  )
                  .reduce((total, currentArea) => total + currentArea) /
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
