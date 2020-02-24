import React from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import "./Components/InputForm";
import InputForm from "./Components/InputForm";
import PizzaCard from "./Components/PizzaCard";
import PizzaCards from "./Components/PizzaCards";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pizzas: [] };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pizzarithmetic</h1>
          <h3>...best thing since sliced bread(pizza)</h3>
        </header>
        <InputForm />
        <PizzaCard name="Test Pizza" diameter="20" price="7.80" />
        <PizzaCards />
      </div>
    );
  }
}

export default App;
