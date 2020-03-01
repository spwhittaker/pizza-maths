import React, { Component } from "react";
import "../styles/InputForm.css";

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
    if (document.getElementById(`cm${this.props.instanceNumber}`).checked) {
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
      <form onSubmit={this.handleInput}>
        <div className="input-texts">
          <div className="pizza-option">
            <div className="input-options">
              <p className="col">Name</p>
              <div className="col">
                <input
                  className="col"
                  type="text"
                  required
                  name="pizzaName"
                  onChange={event =>
                    this.setState({ nameInput: event.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div className="pizza-option">
            <div className="input-options">
              <p className="col">Diameter</p>

              <div className="col" id="diameter-and-units">
                <input
                  type="number"
                  required
                  name="diameter"
                  min="1"
                  onChange={event =>
                    this.setState({ diameterInput: event.target.value })
                  }
                />
                <div className="unit-buttons">
                  <input
                    type="radio"
                    id={`in${this.props.instanceNumber}`}
                    name="units"
                    value={`in${this.props.instanceNumber}`}
                    required
                    className="radio-button"
                  />
                  <label htmlFor={`in${this.props.instanceNumber}`}>
                    inches
                  </label>
                  <input
                    type="radio"
                    id={`cm${this.props.instanceNumber}`}
                    name="units"
                    value={`cm${this.props.instanceNumber}`}
                    required
                    className="radio-button"
                  />
                  <label htmlFor={`cm${this.props.instanceNumber}`}>cm</label>
                </div>
              </div>
            </div>
          </div>
          <div className="pizza-option">
            <div className="input-options">
              <p className="col">Price (£)</p>
              <div className="col">
                <input
                  className="col"
                  type="number"
                  required
                  name="price"
                  step="0.01"
                  min="1"
                  onChange={event =>
                    this.setState({ priceInput: event.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <button type="submit" label="Submit" className="submit-button">
          I'm hungry!
        </button>
      </form>
    );
  }
}

export default InputForm;
