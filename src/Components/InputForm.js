import React, { useContext, useState } from "react";
import "../styles/InputForm.scss";
import { AppContext } from "../context/AppContext";
import { UpperLevelContext } from "../context/UpperLevelContext";
import ToggleSwitch from "./ToggleSwitch";
import { localCurrency } from "../currencyFormatter.js";

const InputForm = () => {
  const { appInstance, pizzas, updatePizzas } = useContext(AppContext);
  const {
    metricUnits,
    handleMetricConversion,
    handleImperialConversion,
  } = useContext(UpperLevelContext);
  const pizzaNames = [...new Set(pizzas.map((pizza) => pizza.name))];
  const [nameInput, setNameInput] = useState("");
  const [diameterInput, setDiameterInput] = useState("");
  const [priceInput, setPriceInput] = useState("5.00");
  const [metricInput, setMetricInput] = useState(metricUnits);
  const [quantityInput, setQuantityInput] = useState(1);

  const onChangeLeft = () => {
    console.log("imperial");
    setMetricInput(false);
  };
  const onChangeRight = () => {
    console.log("metric");
    setMetricInput(true);
  };
  const handleInput = (input) => {
    input.preventDefault();
    let inchesVal = diameterInput;
    if (metricInput) {
      handleMetricConversion();
      inchesVal = diameterInput / 2.54;
    }
    if (!metricInput) {
      handleImperialConversion();
    }
    const pizzaId = nameInput + new Date().getTime();
    const newPizza = {
      name: nameInput,
      diameter: inchesVal,
      price: priceInput,
      quantity: quantityInput,
      key: pizzaId,
      pizzaId: pizzaId,
    };
    updatePizzas(newPizza);
  };

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
      <form onSubmit={handleInput}>
        <div className="input-texts">
          <div className="pizza-option">
            <span className="input-options">
              <label htmlFor="nameInput">Name:</label>
              <input
                type="text"
                required
                name="pizzaName"
                list="pizza-names"
                onChange={(event) => setNameInput(event.target.value)}
                className="pizza-input"
                id="nameInput"
              />
              {pizzaNameslist}
            </span>
          </div>
          <div className="pizza-option" id="toggle">
            <span className="input-options">
              <label htmlFor="diameterInput">Diameter:</label>
              <label htmlFor="diameterSlider" id="diameterSliderLabel">diameterSlider</label>
              <input
                className="range-input"
                type="range"
                name="diameterSlider"
                min="1"
                max="50"
                value={diameterInput}
                onChange={(event) =>
                  setDiameterInput(Number(event.target.value))
                }
                id="diameterSlider"
              />
              <input
                value={diameterInput}
                type="number"
                required
                name="diameterInput"
                min="1"
                onChange={(event) =>
                  setDiameterInput(Number(event.target.value))
                }
                className="pizza-input"
                id="diameterInput"
              />
            </span>

            <span className="input-options">
              <ToggleSwitch
                uniqueId={`${appInstance}`}
                title="Pick your units"
                isMetric={metricInput}
                onChangeLeft={onChangeLeft}
                onChangeRight={onChangeRight}
                className="pizza-input"
              />
            </span>
          </div>
          <div className="pizza-option">
            <span className="input-options">
              <label htmlFor="priceInput">Price ({localCurrency(1).replace(/[\s0-9.,]/gi, "")})</label>
              <label htmlFor="priceSlider" id="priceSliderLabel">priceSlider</label>
              <input
                className="range-input"
                type="range"
                name="priceSlider"
                min="1"
                max="30"
                step="0.01"
                value={priceInput}
                onChange={(event) =>
                  setPriceInput(Number(event.target.value).toFixed(2))
                }
                id="priceSlider"
              />
              <input
                type="number"
                required
                name="priceInput"
                step="0.01"
                min="1"
                value={priceInput}
                onChange={(event) => setPriceInput(event.target.value)}
                className="pizza-input"
                id="priceInput"
              />
            </span>
          </div>
          <div className="pizza-option">
            <span className="input-options">
              <label htmlFor="quantityInput">Quantity:</label>
              <label htmlFor="quantitySlider" id="quantitySliderLabel">quantitySlider</label>
              <input
                type="range"
                name="quantityInput"
                step="1"
                min="1"
                max="20"
                value={quantityInput}
                onChange={(event) =>
                  setQuantityInput(Number(event.target.value))
                }
                className="pizza-input"
                id="quantityInput"
              />
              <input
                type="number"
                required
                name="quantitySlider"
                step="1"
                min="1"
                value={quantityInput}
                onChange={(event) =>
                  setQuantityInput(Number(event.target.value))
                }
                className="pizza-input"
                id="quantitySlider"
              />
            </span>
          </div>
        </div>

        <div className="add-pizza">
          <button type="submit" aria-label="button">I'm hungry!</button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
