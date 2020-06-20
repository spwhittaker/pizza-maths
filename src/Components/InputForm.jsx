import React, { Component } from "react";
import "../styles/InputForm.scss";
import ToggleSwitch from "./ToggleSwitch.jsx";
import PropTypes from "prop-types";
import { localCurrency } from "../currencyFormatter";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: "",
      diameterInput: "",
      priceInput: "5.00",
      metricInput: this.props.metricUnits,
      quantityInput: 1,
    };
  }

  onChangeLeft = () => this.setState({ metricInput: false });
  onChangeRight = () => this.setState({ metricInput: true });
  handleInput = (input) => {
    input.preventDefault();
    let inchesVal = this.state.diameterInput;
    if (this.state.metricInput === true) {
      this.props.handleMetricConversion();
      inchesVal = this.state.diameterInput / 2.54;
    }

    if (this.state.metricInput === false) {
      this.props.handleImperialConversion();
    }
    const pizzaId = this.state.nameInput + new Date().getTime();
    const newPizza = {
      name: this.state.nameInput,
      diameter: inchesVal,
      price: this.state.priceInput,
      quantity: this.state.quantityInput,
      key: pizzaId,
      pizzaId: pizzaId,
    };
    this.props.updatePizzas(newPizza);
  };

  render() {
    const { appInstance, pizzaNames } = this.props;
    const pizzaNameslist = (
      <datalist id="pizza-names">
        {pizzaNames.map((pizzaName) => (
          <option value={pizzaName} key={pizzaName}>
            {pizzaName}
          </option>
        ))}
      </datalist>
    );

    return (
      <div className="input-form">
        <form onSubmit={this.handleInput}>
          <div className="input-texts">
            <div className="pizza-option">
              <span className="input-options">
                <p>Name</p>

                {/* <input
                  type="text"
                  required
                  name="pizzaName"
                  onChange={(event) =>
                    this.setState({ nameInput: event.target.value })
                  }
                  className="pizza-input"
                /> */}
                <input
                  type="text"
                  required
                  name="pizzaName"
                  list="pizza-names"
                  onChange={(event) =>
                    this.setState({ nameInput: event.target.value })
                  }
                  className="pizza-input"
                />
                {pizzaNameslist}
              </span>
            </div>
            <div className="pizza-option" id="toggle">
              <span className="input-options">
                <p>Diameter</p>
                <input
                  className="range-input"
                  type="range"
                  name="diameter"
                  min="1"
                  max="50"
                  value={this.state.diameterInput}
                  onChange={(event) =>
                    this.setState({ diameterInput: Number(event.target.value) })
                  }
                />
                <input
                  value={this.state.diameterInput}
                  type="number"
                  required
                  name="diameter"
                  min="1"
                  onChange={(event) =>
                    this.setState({ diameterInput: Number(event.target.value) })
                  }
                  className="pizza-input"
                />
              </span>

              <span className="input-options">
                <ToggleSwitch
                  uniqueId={`${appInstance}`}
                  title="Pick your units"
                  isMetric={this.state.metricInput}
                  onChangeLeft={this.onChangeLeft}
                  onChangeRight={this.onChangeRight}
                  className="pizza-input"
                />
              </span>
            </div>
            <div className="pizza-option">
              <span className="input-options">
                <p>Price ({localCurrency(1).replace(/[\s0-9.,]/gi, "")})</p>
                <input
                  className="range-input"
                  type="range"
                  name="price"
                  min="1"
                  max="30"
                  step="0.01"
                  value={Number(this.state.priceInput).toFixed(2)}
                  onChange={(event) =>
                    this.setState({
                      priceInput: Number(Number(event.target.value).toFixed(2)),
                    })
                  }
                />
                <input
                  type="number"
                  required
                  name="price"
                  step="0.01"
                  min="1"
                  value={Number(this.state.priceInput).toFixed(2)}
                  onChange={(event) =>
                    this.setState({
                      priceInput: Number(event.target.value),
                    })
                  }
                  className="pizza-input"
                />
              </span>
            </div>
            <div className="pizza-option">
              <span className="input-options">
                <p>Quantity</p>
                <input
                  type="range"
                  name="quantity"
                  step="1"
                  min="1"
                  max="20"
                  value={this.state.quantityInput}
                  onChange={(event) => {
                    this.setState({
                      quantityInput: Number(event.target.value),
                    });
                  }}
                  className="pizza-input"
                />
                <input
                  type="number"
                  required
                  name="quantity"
                  step="1"
                  min="1"
                  value={this.state.quantityInput}
                  onChange={(event) =>
                    this.setState({ quantityInput: Number(event.target.value) })
                  }
                  className="pizza-input"
                />
              </span>
            </div>
          </div>

          <div className="add-pizza">
            <button type="submit">I'm hungry!</button>
          </div>
        </form>
      </div>
    );
  }
}
InputForm.propTypes = {
  updatePizzas: PropTypes.func.isRequired,
  metricUnits: PropTypes.bool.isRequired,
  handleMetricConversion: PropTypes.func.isRequired,
  handleImperialConversion: PropTypes.func.isRequired,
  appInstance: PropTypes.string.isRequired,
};

export default InputForm;
