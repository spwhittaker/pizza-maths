import React, { Component } from "react";

import PizzaCard from "./PizzaCard";
import "../styles/PizzaCards.css";

class PizzaCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pizza-cards-container">
        <div className={`all-pizzas ${this.props.splitView}`}>
          {this.props.pizzas.map((pie, index) => {
            return (
              <PizzaCard
                {...pie}
                pizzaId={pie.pizzaId}
                addButtonClick={this.props.addButton}
                minusButtonClick={this.props.minusButton}
                removeButtonClick={this.props.removeButton}
                metricUnits={this.props.metricUnits}
              />
            );
          })}
        </div>
        <span className="totalValues">
          {this.props.pizzas.length > 0 && (
            <div>
              <h2>
                Total: £
                {this.props.pizzas
                  .map(pizza => pizza.price * pizza.quantity)
                  .reduce((total, currentPizza) => total + currentPizza)
                  .toFixed(2)}
              </h2>

              {this.props.metricUnits === false ? (
                <h2>
                  Total area:{" "}
                  {this.props.pizzas
                    .map(
                      pizza =>
                        Math.PI *
                        Math.pow(pizza.diameter / 2, 2) *
                        pizza.quantity
                    )
                    .reduce((total, currentArea) => total + currentArea)
                    .toFixed(2)}{" "}
                  in<sup>2</sup>
                </h2>
              ) : (
                <h2>
                  Total area:{" "}
                  {(
                    this.props.pizzas
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
              {this.props.metricUnits === false ? (
                <h2>
                  Total price per in<sup>2</sup>:{" "}
                  {(
                    (this.props.pizzas
                      .map(pizza => pizza.price * pizza.quantity)
                      .reduce((total, currentPizza) => total + currentPizza) /
                      this.props.pizzas
                        .map(
                          pizza =>
                            Math.PI *
                            Math.pow(pizza.diameter / 2, 2) *
                            pizza.quantity
                        )
                        .reduce((total, currentArea) => total + currentArea)) *
                    100
                  ).toFixed(2)}
                  p
                </h2>
              ) : (
                <h2>
                  Total price per cm<sup>2</sup>:{" "}
                  {(
                    (this.props.pizzas
                      .map(pizza => pizza.price * pizza.quantity)
                      .reduce((total, currentPizza) => total + currentPizza) /
                      (this.props.pizzas
                        .map(
                          pizza =>
                            Math.PI *
                            Math.pow(pizza.diameter / 2, 2) *
                            pizza.quantity
                        )
                        .reduce((total, currentArea) => total + currentArea) *
                        2.54 *
                        2.54)) *
                    100
                  ).toFixed(2)}
                  p
                </h2>
              )}
              <h2>
                Total area to crust ratio:{" "}
                {(
                  this.props.pizzas
                    .map(
                      pizza =>
                        Math.PI *
                        Math.pow(pizza.diameter / 2, 2) *
                        pizza.quantity
                    )
                    .reduce((total, currentArea) => total + currentArea) /
                  this.props.pizzas
                    .map(pizza => Math.PI * pizza.diameter * pizza.quantity)
                    .reduce((total, currentPizza) => total + currentPizza)
                ).toFixed(2)}
              </h2>
            </div>
          )}

          {this.props.pizzas.length === 0 && <h1>Add some pizzas!</h1>}
        </span>
      </div>
    );
  }
}

export default PizzaCards;
