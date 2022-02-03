import React, { useContext, useState } from "react";
import "../styles/InputForm.scss";
import { AppContext } from "../context/AppContext";
import { UpperLevelContext } from "../context/UpperLevelContext";
import ToggleSwitch from "./ToggleSwitch";
import { localCurrency } from "../currencyFormatter.js";

const InputForm = ({ appInstance }) => {
  const { pizzas, updatePizzas } = useContext(AppContext);
  const { metricUnits, handleMetricConversion, handleImperialConversion } =
    useContext(UpperLevelContext);
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
    <datalist id='pizza-names'>
      {pizzaNames.map((pizzaName) => (
        <option value={pizzaName} key={pizzaName}>
          {pizzaName}
        </option>
      ))}
    </datalist>
  );

  return (
    <div className='input-form'>
      <form onSubmit={handleInput}>
        <div className='input-texts'>
          <div className='pizza-option'>
            <span className='input-options'>
              <p>Name</p>
              <input
                type='text'
                required
                name='pizzaName'
                list='pizza-names'
                onChange={(event) => setNameInput(event.target.value)}
                className='pizza-input'
              />
              {pizzaNameslist}
            </span>
          </div>
          <div className='pizza-option' id='toggle'>
            <span className='input-options'>
              <p>Diameter</p>
              <input
                className='range-input'
                type='range'
                name='diameter'
                min='1'
                max='50'
                value={diameterInput}
                onChange={(event) =>
                  setDiameterInput(Number(event.target.value))
                }
              />
              <input
                value={diameterInput}
                type='number'
                required
                name='diameter'
                min='1'
                onChange={(event) =>
                  setDiameterInput(Number(event.target.value))
                }
                className='pizza-input'
              />
            </span>

            <span className='input-options'>
              <ToggleSwitch
                appInstance={`${appInstance}`}
                title='Pick your units'
                isMetric={metricInput}
                onChangeLeft={onChangeLeft}
                onChangeRight={onChangeRight}
                className='pizza-input'
              />
            </span>
          </div>
          <div className='pizza-option'>
            <span className='input-options'>
              <p>Price ({localCurrency(1).replace(/[\s0-9.,]/gi, "")})</p>
              <input
                className='range-input'
                type='range'
                name='price'
                min='1'
                max='30'
                step='0.01'
                value={priceInput}
                onChange={(event) =>
                  setPriceInput(Number(event.target.value).toFixed(2))
                }
              />
              <input
                type='number'
                required
                name='price'
                step='0.01'
                min='1'
                value={priceInput}
                onChange={(event) => setPriceInput(event.target.value)}
                className='pizza-input'
              />
            </span>
          </div>
          <div className='pizza-option'>
            <span className='input-options'>
              <p>Quantity</p>
              <input
                type='range'
                name='quantity'
                step='1'
                min='1'
                max='20'
                value={quantityInput}
                onChange={(event) =>
                  setQuantityInput(Number(event.target.value))
                }
                className='pizza-input'
              />
              <input
                type='number'
                required
                name='quantity'
                step='1'
                min='1'
                value={quantityInput}
                onChange={(event) =>
                  setQuantityInput(Number(event.target.value))
                }
                className='pizza-input'
              />
            </span>
          </div>
        </div>

        <div className='add-pizza'>
          <button type='submit'>I'm hungry!</button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
