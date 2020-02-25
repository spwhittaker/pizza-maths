import React from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import "./Components/InputForm";
import InputForm from "./Components/InputForm";
import PizzaCards from "./Components/PizzaCards";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: [{ name: "Test guy", diameter: 12, price: 7, key: "Test guy 0" }]
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.state.pizzas.push(e);
    this.forceUpdate();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pizzarithmetic</h1>
          <h3>...best thing since sliced bread(pizza)</h3>
        </header>
        <InputForm
          updatePizzas={this.handleChange}
          pizzas={this.state.pizzas}
        />
        <PizzaCards pizzas={this.state.pizzas} />
      </div>
    );
  }
}

export default App;
