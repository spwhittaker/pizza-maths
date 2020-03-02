import React, { Component } from "react";
import "../styles/InputForm.css";
import ToggleSwitch from './Toggle.jsx';

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: "",
      diameterInput: "",
      priceInput: null
    };
  }
  handleInput = input => {
    input.preventDefault();
    let inchesVal = this.state.diameterInput;
    if (document.getElementById("switch_right").checked) {
      inchesVal = this.state.diameterInput / 2.54;
    }
    const pizzaId = this.state.nameInput + new Date().getTime();
    const newPizza = {
      name: this.state.nameInput,
      diameter: inchesVal,
      price: this.state.priceInput,
      quantity: 1,
      key: pizzaId,
      pizzaId: pizzaId
    };
    this.props.updatePizzas(newPizza);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleInput}>
          <div className="input-texts">
            <div className="pizza-option">
              <span className="input-options">
                <p>Name</p>
                <input
                  type="text"
                  required
                  name="pizzaName"
                  onChange={event =>
                    this.setState({ nameInput: event.target.value })
                  }
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
                  onChange={event =>
                    this.setState({ diameterInput: event.target.value })
                  }
                />

                < ToggleSwitch/>

              </span>
            </div>
            <div className="pizza-option">
              <span className="input-options">
                <p>Price (£)</p>
                <input
                  type="number"
                  required
                  name="price"
                  step="0.01"
                  min="1"
                  onChange={event =>
                    this.setState({ priceInput: event.target.value })
                  }
                />
              </span>
            </div>
          </div>

          <button type="submit">
            I'm hungry!
          </button>
        </form>
      </div>
    )
  }
};

export default InputForm;
