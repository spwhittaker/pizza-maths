import React, { Component } from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import "../styles/Discount.scss";
const options = [
  { value: "% off", label: "% off" },
  {
    value: "% off over minimum spend",
    label: "% off over minimum spend"
  },
  {
    value: "Buy 2 pizzas, get cheapest free",
    label: "Buy 2 pizzas, get cheapest free"
  },
  {
    value: "Buy x number of pizzas, get cheapest free",
    label: "Buy x number of pizzas, get cheapest free"
  }
];
class Discount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 0,
      minSpend: 0,
      selectedDiscount: "",
      xPizzas: 0
    };
  }
  handleDiscountInput = input => {
    this.setState({ selectedDiscount: input.value });
  };

  handleClear = () => {
    this.props.clearDiscount();
    this.setState({
      percentage: 0,
      minSpend: 0,
      selectedDiscount: "",
      xPizzas: 0
    });
  };

  render() {
    const {
      onApplyDiscount,
      selectedDiscount,
      percentageState,
      minSpend
    } = this.props;
    return (
      <div className="add-discounts">
        <p>Add a discount if applicable:</p>
        <Select
          className="selector"
          value={{ label: this.state.selectedDiscount }}
          options={options}
          onChange={this.handleDiscountInput}
        />
        {this.state.selectedDiscount === "Buy 2 pizzas, get cheapest free" && (
          <div className="select-discount">
            <input
              type="button"
              onClick={e => {
                onApplyDiscount(this.state.selectedDiscount, "", "", 2);
              }}
              label="submitBuyOneGetCheapestFree"
              value="Set discount"
            />
          </div>
        )}
        {this.state.selectedDiscount ===
          "Buy x number of pizzas, get cheapest free" && (
          <div className="select-discount">
            <p>x number of pizzas</p>
            <input
              type="number"
              step="1"
              min="2"
              onChange={event => this.setState({ xPizzas: event.target.value })}
            />
            <input
              type="button"
              onClick={e => {
                onApplyDiscount(
                  this.state.selectedDiscount,
                  "",
                  "",
                  this.state.xPizzas
                );
              }}
              label="submitBuyNGetCheapestFree"
              value="Set discount"
            />
          </div>
        )}
        {this.state.selectedDiscount === "% off" && (
          <div className="select-discount">
            <p>Percentage discount</p>
            <input
              type="number"
              step="1"
              min="1"
              max="99"
              onChange={event =>
                this.setState({ percentage: event.target.value })
              }
            />
            <input
              type="button"
              onClick={e => {
                onApplyDiscount(
                  this.state.selectedDiscount,
                  this.state.percentage
                );
              }}
              label="submitPercentage"
              value="Set discount"
            />
          </div>
        )}
        {this.state.selectedDiscount === "% off over minimum spend" && (
          <div className="select-discount">
            <p>Percentage discount: %</p>
            <input
              type="number"
              step="1"
              min="1"
              max="99"
              onChange={event =>
                this.setState({ percentage: event.target.value })
              }
            />
            <p>Minimum spend: £: </p>{" "}
            <input
              type="number"
              step="1"
              max="99"
              onChange={event =>
                this.setState({ minSpend: event.target.value })
              }
            />
            <input
              type="button"
              onClick={e => {
                if (this.state.selectedDiscount === "% off") {
                  onApplyDiscount(
                    this.state.selectedDiscount,
                    this.state.percentage
                  );
                }
                if (
                  this.state.selectedDiscount === "% off over minimum spend"
                ) {
                  onApplyDiscount(
                    this.state.selectedDiscount,
                    this.state.percentage,
                    this.state.minSpend
                  );
                }
              }}
              label="submitPercentage"
              value="Set discount"
            />
          </div>
        )}
        {selectedDiscount === "% off" && percentageState > 0 && (
          <p>Selected discount: {percentageState}% off</p>
        )}
        {selectedDiscount === "% off over minimum spend" &&
          percentageState > 0 && (
            <p>
              Selected discount: {percentageState}% off over £{minSpend}
            </p>
          )}
        {selectedDiscount === "Buy 2 pizzas, get cheapest free" && (
          <p>Selected discount: {selectedDiscount}</p>
        )}
        {selectedDiscount === "Buy x number of pizzas, get cheapest free" && (
          <p>
            Selected discount:{" "}
            {`Buy ${this.state.xPizzas} pizzas, get cheapest free`}
          </p>
        )}
        {selectedDiscount !== "" && (
          <div className="select-discount">
            <input type="button" value="Clear" onClick={this.handleClear} />
          </div>
        )}
      </div>
    );
  }
}

Discount.propTypes = {
  selectedDiscount: PropTypes.string.isRequired,
  onApplyDiscount: PropTypes.func.isRequired,
  percentageState: PropTypes.number.isRequired,
  minSpend: PropTypes.number.isRequired,
  clearDiscount: PropTypes.func.isRequired
};

export default Discount;
