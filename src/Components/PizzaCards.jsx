import React, { Component } from "react";

import PizzaCard from "./PizzaCard";

class PizzaCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: this.props.pizzas
      /* pizzas: [{ diameter: 10, price: 23.45, name: "Food" }] */
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
        {/* {console.log("pizza props", this.props)} */}
        {/* {this.props.pizzas.map(pie => { */}
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
