import React, { Component } from "react";
import Select from "react-select";
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
  }
  /* { value: "Buy one, get one free", label: "Buy one, get one free" } */
];
class Discount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: "",
      minSpend: "",
      selectedDiscount: ""
    };
  }
  handleDiscountInput = input => {
    this.setState({ selectedDiscount: input.value });
  };
  handleClear = () => {
    this.props.clearDiscount();
    this.setState({
      percentage: "",
      minSpend: "",
      selectedDiscount: ""
    });
  };

  render() {
    return (
      <div className="add-discounts">
        <p>Add a discount if applicable:</p>
        <Select
          value={{ label: this.state.selectedDiscount }}
          options={options}
          onChange={this.handleDiscountInput}
        />
        {this.state.selectedDiscount === "Buy 2 pizzas, get cheapest free" && (
          <span>
            <input
              type="button"
              onClick={e => {
                this.props.onApplyPercentageDiscount(
                  this.state.selectedDiscount,
                  "",
                  ""
                );
              }}
              label="submitBuyOneGetCheapestFree"
              value="Add discount"
              id={`percentage-value${this.props.instanceNumber}`}
            />
          </span>
        )}
        {this.state.selectedDiscount === "% off" && (
          <span>
            <p>Percentage discount</p>
            <input
              type="number"
              step="1"
              max="99"
              id={`percentage${this.props.instanceNumber}`}
              onChange={event =>
                this.setState({ percentage: event.target.value })
              }
            />
            <input
              type="button"
              onClick={e => {
                this.props.onApplyPercentageDiscount(
                  this.state.selectedDiscount,
                  this.state.percentage
                );
              }}
              label="submitPercentage"
              value="Add discount"
              id={`percentage-value${this.props.instanceNumber}`}
            />
          </span>
        )}
        {this.state.selectedDiscount === "% off over minimum spend" && (
          <span>
            <p>Percentage discount: %</p>
            <input
              type="number"
              step="1"
              min="1"
              max="99"
              id={`percentage${this.props.instanceNumber}`}
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
                  this.props.onApplyPercentageDiscount(
                    this.state.selectedDiscount,
                    this.state.percentage
                  );
                }
                if (
                  this.state.selectedDiscount === "% off over minimum spend"
                ) {
                  this.props.onApplyPercentageDiscount(
                    this.state.selectedDiscount,
                    this.state.percentage,
                    this.state.minSpend
                  );
                }
              }}
              label="submitPercentage"
              value="Add discount"
              id={`percentage-value${this.props.instanceNumber}`}
            />
          </span>
        )}
        {this.props.selectedDiscount === "% off" &&
          this.props.percentageState > 0 && (
            <p>Selected discount: {this.props.percentageState}% off</p>
          )}
        {this.props.selectedDiscount === "% off over minimum spend" &&
          this.props.percentageState > 0 && (
            <p>
              Selected discount: {this.props.percentageState}% off over £
              {this.props.minSpend}
            </p>
          )}
        {this.props.selectedDiscount === "Buy 2 pizzas, get cheapest free" && (
          <p>Selected discount: {this.props.selectedDiscount}</p>
        )}
        {this.props.selectedDiscount !== "" && (
          <input type="button" value="Clear" onClick={this.handleClear} />
        )}
      </div>
    );
  }
}

export default Discount;
