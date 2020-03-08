(this["webpackJsonppizza-maths"] = this["webpackJsonppizza-maths"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./margherita.jpg */ "./src/margherita.jpg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\nhtml {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed;\n  background-size: cover;\n  height: 100%;\n  overflow-x: hidden;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/App.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/App.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n}\n.App-header {\n  background-color: #282c34;\n  min-height: 15vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(8px + 2vmin);\n  color: white;\n  width: 100%;\n  margin: 0;\n  width: 100%;\n  padding: 0;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n.input-options {\n  display: flex;\n  min-width: 30vw;\n  flex-grow: 1;\n  align-content: center;\n  justify-content: space-evenly;\n}\n\n.pizza-option {\n  min-width: 20%;\n  display: inline;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/InputForm.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/InputForm.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* button {\n  background-color: rgb(255, 230, 0);\n  border-radius: 10%;\n  width: 20%;\n  margin-left: 40%;\n  margin-right: 40%;\n  margin-top: 5px;\n  margin-bottom: 5px;\n} */\n\n/* button {\n  background-color: #ffec64;\n  border-radius: 6px;\n  border: 1px solid #ffaa22;\n\n  cursor: pointer;\n  color: #333333;\n  font-family: Arial;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 6px 24px;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #ffee66;\n  width: max-content;\n  margin-left: 40%;\n  margin-right: 40%;\n\nmargin-top: 5px;\n  margin-bottom: 5px;\n  text-align: center;\n} */\n.submit-button {\n  background-color: #ffec64;\n  border-radius: 6px;\n  border: 1px solid #ffaa22;\n\n  cursor: pointer;\n  color: #333333;\n  font-family: Arial;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 6px 24px;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #ffee66;\n  width: max-content;\n  margin-left: 40%;\n  margin-right: 40%;\n\n  margin-top: 5px;\n  margin-bottom: 5px;\n  text-align: center;\n}\n\nbutton:hover {\n  background-color: #ffab23;\n}\nbutton:active {\n  position: relative;\n  top: 1px;\n}\n\nform {\n  background-color: rgb(245, 208, 0);\n  padding: 15px;\n  border-radius: 30px;\n  border: solid rgba(97, 39, 5, 0.746) 3px;\n}\n.input-texts {\n  display: flex;\n  flex-direction: column;\n}\n.col {\n  flex: 1 1;\n  align-self: center;\n}\n\n.radio-button {\n  visibility: hidden;\n  flex-basis: 1;\n}\n\nlabel {\n  cursor: pointer;\n  border-radius: 3px;\n  padding: 3px;\n  margin: 5px;\n  display: inline-block;\n  border: solid rgb(105, 60, 0) 2px;\n  background-color: rgba(255, 157, 0, 0.7);\n}\n.radio-button:checked + label {\n  background: red;\n}\n\n/* #diameter-and-units {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\n */\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/PizzaCard.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/PizzaCard.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".PizzaCard {\n  margin: 5px;\n  border: solid #333333 3px;\n  border-radius: 5px;\n  display: inline-block;\n  padding: 5px;\n  background-color: whitesmoke;\n  opacity: 0.75;\n}\n\n.quantity-buttons button {\n  background-color: #ffec64;\n  border-radius: 6px;\n  border: 1px solid #ffaa22;\n\n  cursor: pointer;\n  color: #333333;\n  font-family: Arial;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 6px 24px;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #ffee66;\n  width: max-content;\n  margin-left: 5px;\n  margin-right: 5px;\n\n  margin-top: 5px;\n  margin-bottom: 5px;\n  text-align: center;\n}\n/* \n#add-button {\n  display: inline;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n#minus-button {\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n#remove-button {\n  margin-left: 5px;\n  margin-right: 5px;\n}\n */\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/PizzaCards.css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/PizzaCards.scss ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".all-pizzas {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.split-view {\n  flex-direction: column;\n}\n.pizza-cards-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.total-values {\n  align-self: center;\n  background-color: red;\n  margin: 5px;\n  padding: 5px;\n  border: solid maroon 3px;\n  max-width: 100%;\n  border-radius: 5px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/UpperLevel.css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/UpperLevel.scss ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".apps {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n}\n\n.side-by-side-comparison {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.body {\n  background-color: orange;\n  width: 100%;\n  height: 100%;\n  background: gray;\n  position: relative;\n  display: block;\n  /*  background: url(\"/styles/margherita.jpg\") no-repeat center center fixed;\n\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover; */\n}\n#bg {\n  position: fixed;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n}\n#bg img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  min-width: 50%;\n  min-height: 50%;\n}\n.app-header {\n  z-index: 99;\n}\n\n.top-level-button {\n  background-color: #ffec64;\n  border-radius: 6px;\n  border: 1px solid #ffaa22;\n\n  cursor: pointer;\n  color: #333333;\n  font-family: Arial;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 6px 24px;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #ffee66;\n  width: max-content;\n  margin-left: 40%;\n  margin-right: 40%;\n\n  margin-top: 5px;\n  margin-bottom: 5px;\n  text-align: center;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/Components/App.js":
/*!*******************************!*\
  !*** ./src/Components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/App.scss */ "./src/styles/App.css");
/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _InputForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputForm */ "./src/Components/InputForm.jsx");
/* harmony import */ var _PizzaCards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PizzaCards */ "./src/Components/PizzaCards.jsx");
var _jsxFileName = "/home/stephen/Projects/pizza-maths/src/Components/App.js";





/* eslint no-restricted-globals:0 */

class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.handleRemove = e => {
      if (confirm("Are you completely sure you want to remove this pizza?")) {
        this.setState({
          pizzas: this.state.pizzas.filter(arrPizza => arrPizza.pizzaId !== e)
        });
      } else {}
    };

    this.handleAdd = e => {
      let foundPizza = this.state.pizzas.find(arrPizza => arrPizza.pizzaId === e);
      let pizzaIndex = this.state.pizzas.indexOf(foundPizza);
      foundPizza.quantity += 1;
      const newPizzas = [...this.state.pizzas];
      newPizzas[pizzaIndex] = foundPizza;
      this.setState({
        pizzas: newPizzas
      });
    };

    this.handleMinus = e => {
      let foundPizza = this.state.pizzas.find(arrPizza => arrPizza.pizzaId === e);
      let pizzaIndex = this.state.pizzas.indexOf(foundPizza);

      if (foundPizza.quantity > 1) {
        foundPizza.quantity -= 1;
        const newPizzas = [...this.state.pizzas];
        newPizzas[pizzaIndex] = foundPizza;
        this.setState({
          pizzas: newPizzas
        });
      }
    };

    this.state = {
      pizzas: [{
        name: "Test guy",
        diameter: 12,
        price: 7,
        key: "Test guy 0",
        pizzaId: "test id",
        quantity: 2
      }]
    };
    this.handlePizzaInput = this.handlePizzaInput.bind(this);
  }

  handlePizzaInput(e) {
    if (!this.state.pizzas.some(obj => obj.name === e.name && Number(obj.diameter) === Number(e.diameter))) {
      this.setState({
        pizzas: [...this.state.pizzas, e]
      });
    }
  }

  render() {
    const {
      sideBySide,
      metricUnits
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "App",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InputForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
      updatePizzas: this.handlePizzaInput,
      pizzas: this.state.pizzas,
      instanceNumber: this.props.appInstance,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PizzaCards__WEBPACK_IMPORTED_MODULE_3__["default"], {
      pizzas: this.state.pizzas,
      addButton: this.handleAdd,
      removeButton: this.handleRemove,
      minusButton: this.handleMinus,
      splitView: sideBySide,
      metricUnits: metricUnits,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Components/InputForm.jsx":
/*!**************************************!*\
  !*** ./src/Components/InputForm.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_InputForm_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/InputForm.scss */ "./src/styles/InputForm.css");
/* harmony import */ var _styles_InputForm_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_InputForm_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/stephen/Projects/pizza-maths/src/Components/InputForm.jsx";



class InputForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.handleInput = input => {
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

    this.state = {
      nameInput: "",
      diameterInput: "",
      priceInput: null
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.handleInput,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-texts",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pizza-option",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-options",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "col",
      type: "text",
      required: true,
      name: "pizzaName",
      onChange: event => this.setState({
        nameInput: event.target.value
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pizza-option",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-options",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "Diameter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col",
      id: "diameter-and-units",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      required: true,
      name: "diameter",
      min: "1",
      onChange: event => this.setState({
        diameterInput: event.target.value
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "radio",
      id: `in${this.props.instanceNumber}`,
      name: "units",
      value: `in${this.props.instanceNumber}`,
      required: true,
      className: "radio-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: `in${this.props.instanceNumber}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "inches"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "radio",
      id: `cm${this.props.instanceNumber}`,
      name: "units",
      value: `cm${this.props.instanceNumber}`,
      required: true,
      className: "radio-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: `cm${this.props.instanceNumber}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, "cm")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pizza-option",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-options",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, "Price (\xA3)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "col",
      type: "number",
      required: true,
      name: "price",
      step: "0.01",
      min: "1",
      onChange: event => this.setState({
        priceInput: event.target.value
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      label: "Submit",
      className: "submit-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, "I'm hungry!"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (InputForm);

/***/ }),

/***/ "./src/Components/PizzaCard.jsx":
/*!**************************************!*\
  !*** ./src/Components/PizzaCard.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_PizzaCard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/PizzaCard.scss */ "./src/styles/PizzaCard.css");
/* harmony import */ var _styles_PizzaCard_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_PizzaCard_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/stephen/Projects/pizza-maths/src/Components/PizzaCard.jsx";



const PizzaCard = ({
  name,
  diameter,
  price,
  quantity,
  pizzaId,
  addButtonClick,
  minusButtonClick,
  removeButtonClick,
  metricUnits
}) => {
  let roundedDiameter;

  if (diameter % 1 === 0) {
    roundedDiameter = diameter;
  } else {
    roundedDiameter = Number(diameter).toFixed(1);
  }

  const area = Math.PI * Math.pow(diameter / 2, 2);
  const circumference = Math.PI * diameter;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "PizzaCard",
    key: pizzaId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Name: ", name), metricUnits === false ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Diameter: ", roundedDiameter, " inches") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Diameter:", " ", diameter * 2.54 % 1 === 0 ? diameter * 2.54 : Number(diameter * 2.54).toFixed(1), " ", "cm"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "Price per pizza: \xA3", Number(price).toFixed(2)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "quantity-buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "Quantity: ", quantity), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "add-button",
    onClick: () => addButtonClick(pizzaId),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "+"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "minus-button",
    onClick: () => minusButtonClick(pizzaId),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "-"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "remove-button",
    onClick: () => removeButtonClick(pizzaId),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Remove")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, "Total: \xA3", Number(price * quantity).toFixed(2)), metricUnits === false ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "Area: ", (area * quantity).toFixed(2), " in", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "2")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, "Area: ", (area * quantity * 2.54 * 2.54).toFixed(2), " cm", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, "2")), metricUnits === false ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "Crust: ", (circumference * quantity).toFixed(2), " inches") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, "Crust: ", (circumference * quantity * 2.54).toFixed(2), " cm"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, "Area to crust (bigger means more area compared to crust):", " ", (area * quantity / (circumference * quantity)).toFixed(2)), metricUnits === false ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, "Price per in", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, "2"), ": ", (Number(price) / area * 100).toFixed(2), "p") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, "Price per cm", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, "2"), ":", (Number(price / (area * 2.54 * 2.54)) * 100).toFixed(2), "p"));
};

/* harmony default export */ __webpack_exports__["default"] = (PizzaCard);

/***/ }),

/***/ "./src/Components/PizzaCards.jsx":
/*!***************************************!*\
  !*** ./src/Components/PizzaCards.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PizzaCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PizzaCard */ "./src/Components/PizzaCard.jsx");
/* harmony import */ var _styles_PizzaCards_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/PizzaCards.scss */ "./src/styles/PizzaCards.css");
/* harmony import */ var _styles_PizzaCards_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_PizzaCards_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/stephen/Projects/pizza-maths/src/Components/PizzaCards.jsx";




const PizzaCards = ({
  splitView,
  pizzas,
  addButton,
  minusButton,
  removeButton,
  metricUnits
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pizza-cards-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: `all-pizzas ${splitView}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, pizzas.map((pie, index) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PizzaCard__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, pie, {
      pizzaId: pie.pizzaId,
      addButtonClick: addButton,
      minusButtonClick: minusButton,
      removeButtonClick: removeButton,
      metricUnits: metricUnits,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: undefined
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "total-values",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, pizzas.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "Total: \xA3", pizzas.map(pizza => pizza.price * pizza.quantity).reduce((total, currentPizza) => total + currentPizza).toFixed(2)), metricUnits === false ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "Total area:", " ", pizzas.map(pizza => Math.PI * Math.pow(pizza.diameter / 2, 2) * pizza.quantity).reduce((total, currentArea) => total + currentArea).toFixed(2), " ", "in", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "2")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "Total area:", " ", (pizzas.map(pizza => Math.PI * Math.pow(pizza.diameter / 2, 2) * pizza.quantity).reduce((total, currentArea) => total + currentArea) * 2.54 * 2.54).toFixed(2), " ", "cm", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, "2")), metricUnits === false ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, "Total price per in", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "2"), ":", " ", (pizzas.map(pizza => pizza.price * pizza.quantity).reduce((total, currentPizza) => total + currentPizza) / pizzas.map(pizza => Math.PI * Math.pow(pizza.diameter / 2, 2) * pizza.quantity).reduce((total, currentArea) => total + currentArea) * 100).toFixed(2), "p") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, "Total price per cm", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, "2"), ":", " ", (pizzas.map(pizza => pizza.price * pizza.quantity).reduce((total, currentPizza) => total + currentPizza) / (pizzas.map(pizza => Math.PI * Math.pow(pizza.diameter / 2, 2) * pizza.quantity).reduce((total, currentArea) => total + currentArea) * 2.54 * 2.54) * 100).toFixed(2), "p"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, "Total area to crust ratio:", " ", (pizzas.map(pizza => Math.PI * Math.pow(pizza.diameter / 2, 2) * pizza.quantity).reduce((total, currentArea) => total + currentArea) / pizzas.map(pizza => Math.PI * pizza.diameter * pizza.quantity).reduce((total, currentPizza) => total + currentPizza)).toFixed(2))), pizzas.length === 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, "Add some pizzas!")));
};

/* harmony default export */ __webpack_exports__["default"] = (PizzaCards);

/***/ }),

/***/ "./src/Components/UpperLevel.js":
/*!**************************************!*\
  !*** ./src/Components/UpperLevel.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/Components/App.js");
/* harmony import */ var _styles_UpperLevel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/UpperLevel.scss */ "./src/styles/UpperLevel.css");
/* harmony import */ var _styles_UpperLevel_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_UpperLevel_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _margherita_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../margherita.jpg */ "./src/margherita.jpg");
/* harmony import */ var _margherita_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_margherita_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/stephen/Projects/pizza-maths/src/Components/UpperLevel.js";





class UpperLevel extends react__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  constructor(props) {
    super(props);

    this.handleAddComparison = event => {
      this.setState({
        comparisonDiv: true,
        comparisonClass: "side-by-side-comparison",
        splitViewClass: "split-view"
      });
    };

    this.handleRemoveComparison = event => {
      this.setState({
        comparisonDiv: false,
        comparisonClass: "",
        splitViewClass: ""
      });
    };

    this.handleUnitConversion = event => {
      this.setState({
        metricUnits: !this.state.metricUnits
      });
    };

    this.state = {
      comparisonDiv: false,
      comparisonClass: "",
      splitView: "",
      metricUnits: false
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "upper-level",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("header", {
      className: "App-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "Pizzarithmetic"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "...best thing since sliced bread(pizza)"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Add some pizza details below and compare for the best value")), this.state.comparisonDiv === false && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      type: "button",
      onClick: this.handleAddComparison,
      className: "top-level-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "Add comparison"), this.state.comparisonDiv === true && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      type: "button",
      onClick: this.handleRemoveComparison,
      className: "top-level-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "Remove second comparison"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      type: "button",
      onClick: this.handleUnitConversion,
      className: "top-level-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, "Change values to ", this.state.metricUnits === true && "cm", this.state.metricUnits === false && "inches"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "apps",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_0__["default"], {
      className: this.state.comparisonClass,
      sideBySide: this.state.splitViewClass,
      metricUnits: this.state.metricUnits,
      appInstance: "0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }), this.state.comparisonDiv && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_0__["default"], {
      className: this.state.splitViewClass,
      sideBySide: this.state.splitViewClass,
      metricUnits: this.state.metricUnits,
      appInstance: "1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (UpperLevel);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_UpperLevel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/UpperLevel */ "./src/Components/UpperLevel.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/home/stephen/Projects/pizza-maths/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_UpperLevel__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById("root")); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/margherita.jpg":
/*!****************************!*\
  !*** ./src/margherita.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/margherita.256757d0.jpg";

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ "./src/styles/App.css":
/*!****************************!*\
  !*** ./src/styles/App.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/App.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/styles/InputForm.css":
/*!**********************************!*\
  !*** ./src/styles/InputForm.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./InputForm.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/InputForm.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./InputForm.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/InputForm.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./InputForm.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/InputForm.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/styles/PizzaCard.css":
/*!**********************************!*\
  !*** ./src/styles/PizzaCard.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./PizzaCard.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/PizzaCard.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./PizzaCard.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/PizzaCard.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./PizzaCard.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/PizzaCard.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/styles/PizzaCards.css":
/*!***********************************!*\
  !*** ./src/styles/PizzaCards.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./PizzaCards.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/PizzaCards.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./PizzaCards.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/PizzaCards.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./PizzaCards.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/PizzaCards.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/styles/UpperLevel.css":
/*!***********************************!*\
  !*** ./src/styles/UpperLevel.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./UpperLevel.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/UpperLevel.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./UpperLevel.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/UpperLevel.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./UpperLevel.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/UpperLevel.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/stephen/Projects/pizza-maths/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /home/stephen/Projects/pizza-maths/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/stephen/Projects/pizza-maths/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map