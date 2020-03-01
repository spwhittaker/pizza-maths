import React from "react";
import "../styles/App.css";
import "./InputForm";
import InputForm from "./InputForm";
import PizzaCards from "./PizzaCards";
/* eslint no-restricted-globals:0 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: [
        /*  {
          name: "Test guy",
          diameter: 12,
          price: 7,
          key: "Test guy 0",
          pizzaId: "test id",
          quantity: 2
        } */
      ]
    };
    this.handlePizzaInput = this.handlePizzaInput.bind(this);
  }

  handlePizzaInput(e) {
    if (
      !this.state.pizzas.some(
        obj =>
          obj.name === e.name && Number(obj.diameter) === Number(e.diameter)
      )
    ) {
      this.setState({ pizzas: [...this.state.pizzas, e] });
    }
  }

  handleRemove = e => {
    if (confirm("Are you completely sure you want to remove this pizza?")) {
      this.setState({
        pizzas: this.state.pizzas.filter(arrPizza => arrPizza.pizzaId !== e)
      });
    } else {
    }
  };

  handleAdd = e => {
    let foundPizza = this.state.pizzas.find(arrPizza => arrPizza.pizzaId === e);
    let pizzaIndex = this.state.pizzas.indexOf(foundPizza);
    foundPizza.quantity += 1;
    const newPizzas = [...this.state.pizzas];
    newPizzas[pizzaIndex] = foundPizza;
    this.setState({ pizzas: newPizzas });
  };

  handleMinus = e => {
    let foundPizza = this.state.pizzas.find(arrPizza => arrPizza.pizzaId === e);
    let pizzaIndex = this.state.pizzas.indexOf(foundPizza);
    if (foundPizza.quantity > 1) {
      foundPizza.quantity -= 1;
      const newPizzas = [...this.state.pizzas];
      newPizzas[pizzaIndex] = foundPizza;
      this.setState({ pizzas: newPizzas });
    }
  };

  render() {
    const { sideBySide, metricUnits } = this.props;
    return (
      <div className="App">
        <InputForm
          updatePizzas={this.handlePizzaInput}
          pizzas={this.state.pizzas}
          instanceNumber={this.props.appInstance}
        />
        <PizzaCards
          pizzas={this.state.pizzas}
          addButton={this.handleAdd}
          removeButton={this.handleRemove}
          minusButton={this.handleMinus}
          splitView={sideBySide}
          metricUnits={metricUnits}
        />
      </div>
    );
  }
}

export default App;
