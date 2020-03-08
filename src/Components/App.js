import React from "react";
import "../styles/App.scss";
import "./InputForm";
import InputForm from "./InputForm";
import PizzaCards from "./PizzaCards";
import Discount from "./Discount";
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
      minSpend: ""
    };
    this.handlePizzaInput = this.handlePizzaInput.bind(this);
  }

  onApplyPercentageDiscount = (
    selectedDiscount = "",
    percentageValue = "",
    minSpendValue = ""
  ) => {
    this.setState({
      selectedDiscount: selectedDiscount,
      percentage: percentageValue,
      minSpend: minSpendValue
    });
  };

  clearDiscount = () =>
    this.setState({
      selectedDiscount: "",
      percentage: "",
      minSpend: ""
    });

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
          metricUnits={this.props.metricUnits}
          pizzas={this.state.pizzas}
          handleMetricConversion={this.props.handleMetricConversion}
          handleImperialConversion={this.props.handleImperialConversion}
          instanceNumber={this.props.appInstance}
        />
        <Discount
          selectedDiscount={this.state.selectedDiscount}
          onSelectDiscount={this.handleDiscountInput}
          onApplyPercentageDiscount={this.onApplyPercentageDiscount}
          instanceNumber={this.props.appInstance}
          discountState={this.state.selectedDiscount}
          percentageState={this.state.percentage}
          minSpend={this.state.minSpend}
          clearDiscount={this.clearDiscount}
        />
        <PizzaCards
          pizzas={this.state.pizzas}
          addButton={this.handleAdd}
          removeButton={this.handleRemove}
          minusButton={this.handleMinus}
          splitView={sideBySide}
          setMetric={this.props.setMetric}
          setImperial={this.props.setImperial}
          metricUnits={metricUnits}
          handleMetricConversion={this.props.handleMetricConversion}
          handleImperialConversion={this.props.handleImperialConversion}
          percentageCalculator={Number(
            1 - (this.state.percentage / 100).toFixed(2)
          )}
          percentValue={this.state.percentage}
          minSpend={this.state.minSpend}
          selectedDiscount={this.state.selectedDiscount}
        />
      </div>
    );
  }
}

export default App;
