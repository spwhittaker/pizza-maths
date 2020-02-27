import React, { Component } from "react";

import PizzaCard from "./PizzaCard";
import "../styles/PizzaCards.css";

class PizzaCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="AllPizzas">
          {this.props.pizzas.map((pie, index) => {
            return (
              <PizzaCard
                {...pie}
                pizzaId={pie.pizzaId}
                addButtonClick={this.props.addButton}
                minusButtonClick={this.props.minusButton}
                removeButtonClick={this.props.removeButton}
              />
            );
          })}
        </div>
        <span>
          {this.props.pizzas.length > 0 && (
            <h2>
              Total: £
              {this.props.pizzas
                .map(pizza => pizza.price * pizza.quantity)
                .reduce((total, currentPizza) => total + currentPizza)
                .toFixed(2)}
            </h2>
          )}
          {this.props.pizzas.length === 0 && <h1>Add some pizzas!</h1>}
        </span>
      </div>
    );
  }
}

export default PizzaCards;
