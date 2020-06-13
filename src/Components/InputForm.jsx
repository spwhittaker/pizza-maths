import React, { Component } from "react";
import "../styles/InputForm.scss";
import ToggleSwitch from "./ToggleSwitch.jsx";
import PropTypes from "prop-types";
import { localCurrency } from "../currencyFormatter.js";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: "",
      diameterInput: "",
      priceInput: null,
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
    const { appInstance } = this.props;

    return (
      <div className="input-form">
        <form onSubmit={this.handleInput}>
          <div className="input-texts">
            <div className="pizza-option">
              <span className="input-options">
                <p>Name</p>

                <input
                  type="text"
                  required
                  name="pizzaName"
                  onChange={(event) =>
                    this.setState({ nameInput: event.target.value })
                  }
                  className="pizza-input"
                />
              </span>
            </div>
            <div className="pizza-option" id="toggle">
              <span className="input-options">
                <p>Diameter</p>

                <input
                  type="number"
                  required
                  name="diameter"
                  min="1"
                  onChange={(event) =>
                    this.setState({ diameterInput: event.target.value })
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
                  type="number"
                  required
                  name="price"
                  step="0.01"
                  min="1"
                  onChange={(event) =>
                    this.setState({ priceInput: event.target.value })
                  }
                  className="pizza-input"
                />
              </span>
            </div>
            <div className="pizza-option">
              <span className="input-options">
                <p>Quantity</p>

                <input
                  type="number"
                  required
                  name="quantity"
                  step="1"
                  min="1"
                  defaultValue="1"
                  onChange={(event) =>
                    this.setState({ quantityInput: event.target.value })
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
