import React, { Component } from "react";

import PizzaCard from "./PizzaCard";
import "../styles/PizzaCards.css";

class PizzaCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: this.props.pizzas
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pizzas !== this.props.pizzas) {
      this.setState({ pizzas: this.props.pizzas });
    }
  }

  render() {
    return (
      <div>
        <div className="AllPizzas">
          {this.state.pizzas.map(pie => {
            return (
              <PizzaCard
                {...pie}
                pizzaId={pie.pizzaId}
                addButtonClick={this.props.addButton}
              />
            );
          })}
        </div>
        <span>
          <h2>
            Total: £
            {this.props.pizzas
              .map(pizza => pizza.price * pizza.quantity)
              .reduce((total, currentPizza) => total + currentPizza)
              .toFixed(2)}
          </h2>
        </span>
      </div>
    );
  }
}

export default PizzaCards;
