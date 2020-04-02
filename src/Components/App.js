import React from "react";
import "../styles/App.scss";
import "./InputForm";
import InputForm from "./InputForm";
import PizzaCards from "./PizzaCards";
import Discount from "./Discount";
import PropTypes from "prop-types";
/* eslint no-restricted-globals:0 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: [
        {
          name: "Test guy",
          diameter: 12,
          price: 7,
          key: "Test guy 0",
          pizzaId: "test id",
          quantity: 2
        },
        {
          name: "Test guy no. 2",
          diameter: 10,
          price: 6,
          key: "Test guy 1",
          pizzaId: "test id1",
          quantity: 3
        }
      ],
      selectedDiscount: "% off",
      percentage: 50,
      minSpend: 0,
      xPizzas: 0
    };
  }

  onApplyDiscount = (
    selectedDiscount = "",
    percentageValue = 0,
    minSpendValue = 0,
    xPizzas = 0
  ) => {
    this.setState({
      selectedDiscount: selectedDiscount,
      percentage: percentageValue,
      minSpend: minSpendValue,
      xPizzas: xPizzas
    });
  };

  clearDiscount = () =>
    this.setState({
      selectedDiscount: "",
      percentage: 0,
      minSpend: 0,
      xPizzas: 0
    });

  updatePizzas = e => {
    if (
      !this.state.pizzas.some(
        obj =>
          obj.name === e.name && Number(obj.diameter) === Number(e.diameter)
      )
    ) {
      this.setState({ pizzas: [...this.state.pizzas, e] });
    }
  };

  handleRemove = e => {
    if (confirm("Are you sure you want to remove this pizza?")) {
      this.setState({
        pizzas: this.state.pizzas.filter(arrPizza => arrPizza.pizzaId !== e)
      });
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
    const {
      sideBySide,
      metricUnits,
      handleMetricConversion,
      handleImperialConversion,
      appInstance
    } = this.props;
    return (
      <div className={`App ${sideBySide}`}>
        <div className="input-and-discounts">
          <InputForm
            updatePizzas={this.updatePizzas}
            metricUnits={metricUnits}
            handleMetricConversion={handleMetricConversion}
            handleImperialConversion={handleImperialConversion}
            appInstance={appInstance}
          />
          <Discount
            selectedDiscount={this.state.selectedDiscount}
            onApplyDiscount={this.onApplyDiscount}
            percentageState={this.state.percentage}
            minSpend={this.state.minSpend}
            clearDiscount={this.clearDiscount}
          />
        </div>
        <PizzaCards
          pizzas={this.state.pizzas}
          addButton={this.handleAdd}
          removeButton={this.handleRemove}
          minusButton={this.handleMinus}
          splitView={sideBySide}
          metricUnits={metricUnits}
          handleMetricConversion={handleMetricConversion}
          handleImperialConversion={handleImperialConversion}
          percentageCalculator={1 - (this.state.percentage / 100).toFixed(2)}
          percentValue={this.state.percentage}
          minSpend={this.state.minSpend}
          selectedDiscount={this.state.selectedDiscount}
          xPizzas={this.state.xPizzas}
        />
      </div>
    );
  }
}

App.propTypes = {
  className: PropTypes.string.isRequired,
  sideBySide: PropTypes.string.isRequired,
  metricUnits: PropTypes.bool.isRequired,
  appInstance: PropTypes.string.isRequired,
  handleMetricConversion: PropTypes.func.isRequired,
  handleImperialConversion: PropTypes.func.isRequired
};

export default App;
