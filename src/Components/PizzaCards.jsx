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
      <div className="AllPizzas">
        {this.state.pizzas.map((pie, index) => {
          return (
            <div>
              <PizzaCard {...pie} key={pie.name + index} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default PizzaCards;
