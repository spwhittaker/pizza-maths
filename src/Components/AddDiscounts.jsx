import React, { Component } from "react";
import Select from "react-select";
import "../styles/AddDiscounts.css";
const options = [
  { value: "% off", label: "% off" },
  {
    value: "% off over minimum spend",
    label: "% off over minimum spend"
  },
  { value: "Buy one, get one free", label: "Buy one, get one free" }
];
class AddDiscounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      percentage: "",
      minSpend: ""
    };
  }

  render() {
    const { selectedOption } = this.state;
    return (
      <div className="add-discounts">
        <p>Test!</p>
        <p>Add a discount if applicable:</p>
        <Select
          value={{ label: this.props.selectedDiscount }}
          options={options}
          onChange={this.props.onSelectDiscount}
        />
        {this.props.selectedDiscount === "% off" && (
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
                console.log("test");
                this.props.onApplyPercentageDiscount(this.state.percentage);
              }}
              label="submitPercentage"
              value="Add discount"
              id={`percentage-value${this.props.instanceNumber}`}
            />
          </span>
        )}
        {this.props.selectedDiscount === "% off over minimum spend" && (
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
                if (this.props.selectedDiscount === "% off") {
                  this.props.onApplyPercentageDiscount(this.state.percentage);
                }
                if (
                  this.props.selectedDiscount === "% off over minimum spend"
                ) {
                  this.props.onApplyPercentageDiscount(
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
      </div>
    );
  }
}

export default AddDiscounts;
