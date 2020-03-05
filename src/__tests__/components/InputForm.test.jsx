import React from "react";
import ReactDOM from "react-dom";
import InputForm from "../../Components/InputForm.jsx";

describe('InputForm tests - main', () => {
    it("InputForm renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<InputForm />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

// will have to test:
  // Diameter takes a number only, also prevents +/-
  // Price takes a number only, also prevents +/- and won't allow for other characters
