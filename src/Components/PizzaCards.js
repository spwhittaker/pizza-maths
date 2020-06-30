import React, { useContext } from "react";
import { UpperLevelContext } from "../context/UpperLevelContext";
import { AppContext } from "../context/AppContext";
import PizzaCard from "./PizzaCard";
import "../styles/PizzaCards.scss";
import PropTypes from "prop-types";
import { localCurrency, localCurrencyDetailed } from "../currencyFormatter";

const PizzaCards = ({ appInstance }) => {
  const { splitView, metricUnits } = useContext(UpperLevelContext);
  const {
    pizzas,
    selectedDiscount,
    percentage,
    minSpend,
    xPizzas,
  } = useContext(AppContext);

  const percentageCalculator = 1 - (percentage / 100).toFixed(2);
  let totalVal = 0;
  let areaVal = 0;
  if (pizzas.length > 0) {
    totalVal = pizzas
      .map((pizza) => pizza.price * pizza.quantity)
      .reduce((total, currentPizza) => total + currentPizza);
  }
  let totalPizzasQuantity = 0;
  if (pizzas.length > 0) {
    totalPizzasQuantity = pizzas
      .map((pizza) => pizza.quantity)
      .reduce((a, b) => a + b);
  }

  const pricePerAreas = pizzas.map(
    (pizza) => pizza.price / (Math.pow(pizza.diameter / 2, 2) * Math.PI)
  );
  const cheapestArr = pricePerAreas
    .map((e, index) => {
      if (
        e ===
        pricePerAreas[
          pricePerAreas.indexOf(Math.min.apply(null, pricePerAreas))
        ]
      ) {
        return index;
      } else {
        return null;
      }
    })
    .filter((e) => e !== null);

  if (pizzas.length > 0) {
    areaVal = pizzas
      .map(
        (pizza) => Math.PI * Math.pow(pizza.diameter / 2, 2) * pizza.quantity
      )
      .reduce((total, currentArea) => total + currentArea);
  }
  let percentageMetThreshold = minSpend <= totalVal ? percentageCalculator : 1;

  let totalAfterDiscount = totalVal;
  const buyXCheapestFree = (xValue) => {
    if (totalPizzasQuantity > 1) {
      let allPizzaPrices = [];
      pizzas
        .map((pizza) => {
          const arr = [];
          for (let i = 0; i < pizza.quantity; i++) {
            arr.push(pizza.price);
          }
          return arr;
        })
        .forEach((element) =>
          element.forEach((nestedElement) => allPizzaPrices.push(nestedElement))
        );

      const freePizzasNumber = Math.floor(totalPizzasQuantity / xValue);

      if (allPizzaPrices.length > 0 && freePizzasNumber > 0) {
        return allPizzaPrices
          .sort()
          .slice(0, freePizzasNumber)
          .reduce((a, b) => Number(a) + Number(b));
      }
    }
    return 0;
  };
  totalAfterDiscount =
    selectedDiscount === "Buy x number of pizzas, get cheapest free" ||
    selectedDiscount === "Buy 2 pizzas, get cheapest free"
      ? totalVal - buyXCheapestFree(xPizzas)
      : totalVal * percentageCalculator;

  return (
    <div className="pizza-cards-container">
      {splitView === "single-view" && (
        <h1 className="order-heading">Single Order</h1>
      )}
      {splitView === "split-view" && (
        <h1 className="order-heading">{`Order ${Number(appInstance) + 1}`}</h1>
      )}
      <div className={`all-pizzas ${splitView}`}>
        {pizzas.map((pie, index) => {
          return (
            <PizzaCard
              {...pie}
              isBestValue={
                cheapestArr.includes(index) && pizzas.length > 1 ? true : false
              }
              pizzaId={pie.pizzaId}
            />
          );
        })}
      </div>
      <div className="total-values">
        {pizzas.length > 0 && (
          <div>
            {(totalVal === totalAfterDiscount || minSpend > totalVal) && (
              <h2 className="total-label-and-value">
                <span>Total:</span> <span>{localCurrency(totalVal)}</span>
              </h2>
            )}
            {percentageMetThreshold !== 1 && (
              <>
                <h2 className="total-label-and-value">
                  <span>Total before discount: </span>
                  <span>{localCurrency(totalVal)}</span>
                </h2>

                <h2 className="total-label-and-value">
                  <span>Discount applied: </span>
                  <span>{percentage}%</span>
                </h2>
                <h2 className="total-label-and-value">
                  <span>Savings: </span>
                  <span>{localCurrency(totalVal - totalAfterDiscount)}</span>
                </h2>

                <h2 className="total-label-and-value">
                  <span>Total after discount: </span>
                  <span>{localCurrency(totalAfterDiscount)}</span>
                </h2>
              </>
            )}
            {minSpend > 0 && minSpend > totalVal && (
              <h2>
                You've not met the minimum spend of <br />
                {localCurrency(minSpend)} to get {percentage}% off.
              </h2>
            )}
            {totalPizzasQuantity >= xPizzas &&
              (selectedDiscount ===
                "Buy x number of pizzas, get cheapest free" ||
                selectedDiscount === "Buy 2 pizzas, get cheapest free") && (
                <div>
                  <h2 className="total-label-and-value">
                    <span>Total before discount: </span>
                    <span>{localCurrency(totalVal)}</span>
                  </h2>

                  <h2 className="total-label-and-value">
                    <span>Discount applied: </span>
                    <span>{`Buy ${xPizzas} pizzas, get cheapest free`}</span>
                  </h2>
                  <h2 className="total-label-and-value">
                    <span>Savings: </span>
                    <span>{localCurrency(totalVal - totalAfterDiscount)}</span>
                  </h2>

                  <h2 className="total-label-and-value">
                    <span>Total after discount: </span>
                    <span>{localCurrency(totalAfterDiscount)}</span>
                  </h2>
                </div>
              )}
            <h2 className="total-label-and-value">
              <span>Total area: </span>
              <span>
                {metricUnits
                  ? `${(areaVal * 2.54 * 2.54).toFixed(2)} cm`
                  : `${areaVal.toFixed(2)} in`}
                <sup>2</sup>
              </span>
            </h2>

            <h2 className="total-label-and-value">
              <span>
                Total price per {metricUnits ? "cm" : "in"}
                <sup>2</sup>:
              </span>
              <span>
                {metricUnits
                  ? localCurrencyDetailed(
                      totalAfterDiscount / (areaVal * 2.54 * 2.54)
                    )
                  : localCurrencyDetailed(totalAfterDiscount / areaVal)}
              </span>
            </h2>

            <h2 className="total-label-and-value">
              <span>Total area to crust ratio: </span>
              <span>
                {(
                  areaVal /
                  pizzas
                    .map((pizza) => Math.PI * pizza.diameter * pizza.quantity)
                    .reduce((total, currentPizza) => total + currentPizza)
                ).toFixed(2)}
              </span>
            </h2>
          </div>
        )}

        {pizzas.length === 0 && <h1>Add some pizzas!</h1>}
      </div>
    </div>
  );
};
PizzaCards.propTypes = {
  appInstance: PropTypes.string.isRequired,
};

export default PizzaCards;
