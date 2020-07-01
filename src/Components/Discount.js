import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import Select from "react-select";
import "../styles/Discount.scss";

const Discount = () => {
  const options = [
    { value: "% off", label: "% off" },
    {
      value: "% off over minimum spend",
      label: "% off over minimum spend",
    },
    {
      value: "Buy 2 pizzas, get cheapest free",
      label: "Buy 2 pizzas, get cheapest free",
    },
    {
      value: "Buy x number of pizzas, get cheapest free",
      label: "Buy x number of pizzas, get cheapest free",
    },
  ];
  const {
    onApplyDiscount,
    selectedDiscount,
    percentage,
    minSpend,
    clearDiscount,
  } = useContext(AppContext);
  const [percentageInput, setPercentageInput] = useState(10);
  const [minSpendInput, setMinSpendInput] = useState(10);
  const [discountInput, setDiscountInput] = useState("");
  const [xPizzasInput, setXPizzasInput] = useState(2);
  const handleDiscountInput = (input) => {
    setDiscountInput(input.value);
  };
  const handleClear = () => {
    clearDiscount();
    setPercentageInput(0);
    setMinSpendInput(0);
    setDiscountInput("");
    setXPizzasInput(0);
  };
  return (
    <div className="add-discounts">
      <label htmlFor="discountOptions">Add a discount if applicable:</label>
      <Select
        className="selector"
        value={{ label: discountInput }}
        options={options}
        onChange={handleDiscountInput}
        inputId="discountOptions"
      />
      {discountInput === "Buy 2 pizzas, get cheapest free" && (
        <div className="select-discount">
          <input
            type="button"
            onClick={(e) => {
              onApplyDiscount(discountInput, "", "", 2);
            }}
            label="submitBuyOneGetCheapestFree"
            value="Set discount"
          />
        </div>
      )}

      {discountInput === "Buy x number of pizzas, get cheapest free" && (
        <div className="select-discount">
          <p>x number of pizzas</p>
          <input
            type="range"
            step="1"
            min="2"
            max="10"
            value={xPizzasInput}
            onChange={(event) => {
              setXPizzasInput(Number(event.target.value));
            }}
          />
          <input
            type="number"
            step="1"
            min="2"
            value={xPizzasInput}
            onChange={(event) => setXPizzasInput(Number(event.target.value))}
          />
          <input
            type="button"
            onClick={(e) => {
              onApplyDiscount(discountInput, "", "", xPizzasInput);
            }}
            label="submitBuyNGetCheapestFree"
            value="Set discount"
          />
        </div>
      )}
      {discountInput === "% off" && (
        <div className="select-discount">
          <p>Percentage discount</p>
          <input
            type="range"
            step="1"
            min="1"
            max="99"
            value={percentageInput}
            onChange={(event) => setPercentageInput(Number(event.target.value))}
          />
          <input
            type="number"
            step="1"
            min="1"
            max="99"
            value={percentageInput}
            onChange={(event) => setPercentageInput(Number(event.target.value))}
          />
          <input
            type="button"
            onClick={(e) => {
              onApplyDiscount(discountInput, percentageInput);
            }}
            label="submitPercentage"
            value="Set discount"
          />
        </div>
      )}
      {discountInput === "% off over minimum spend" && (
        <div className="select-discount">
          <p>Percentage discount: %</p>
          <input
            type="range"
            step="1"
            min="1"
            max="99"
            value={percentageInput}
            onChange={(event) => setPercentageInput(Number(event.target.value))}
          />
          <input
            type="number"
            step="1"
            min="1"
            max="99"
            value={percentageInput}
            onChange={(event) => setPercentageInput(Number(event.target.value))}
          />
          <p>Minimum spend: £: </p>

          <input
            type="range"
            step="1"
            min="1"
            max="50"
            value={minSpendInput}
            onChange={(event) => setMinSpendInput(Number(event.target.value))}
          />
          <input
            type="number"
            step="1"
            value={minSpendInput}
            onChange={(event) => setMinSpendInput(Number(event.target.value))}
          />
          <input
            type="button"
            onClick={(e) => {
              if (discountInput === "% off") {
                onApplyDiscount(discountInput, percentageInput);
              }
              if (discountInput === "% off over minimum spend") {
                onApplyDiscount(discountInput, percentageInput, minSpendInput);
              }
            }}
            label="submitPercentage"
            value="Set discount"
          />
        </div>
      )}
      {selectedDiscount === "% off" && percentage > 0 && (
        <p>Selected discount: {percentage}% off</p>
      )}
      {selectedDiscount === "% off over minimum spend" && percentage > 0 && (
        <p>
          Selected discount: {percentage}% off over £{minSpend}
        </p>
      )}
      {selectedDiscount === "Buy 2 pizzas, get cheapest free" && (
        <p>Selected discount: {selectedDiscount}</p>
      )}
      {selectedDiscount === "Buy x number of pizzas, get cheapest free" && (
        <p>
          Selected discount: {`Buy ${xPizzasInput} pizzas, get cheapest free`}
        </p>
      )}
      {selectedDiscount !== "" && (
        <div className="select-discount">
          <input type="button" value="Clear" onClick={handleClear} />
        </div>
      )}
    </div>
  );
};

export default Discount;
