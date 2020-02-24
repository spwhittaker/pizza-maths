import React, { Component } from "react";

import PizzaCard from "./PizzaCard";

class PizzaCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: [
        { name: "test 1", price: 10.0, diameter: 15 },
        { name: "test 2", price: 12.5, diameter: 17 }
      ]
    };
  }
  render() {
    return (
      <div className="AllPizzas">
        {this.state.pizzas.map(pie => {
          return (
            <div key={pie["_id"]}>
              <PizzaCard {...pie} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default PizzaCards;
