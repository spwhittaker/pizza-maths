import React from "react";
import ReactDOM from "react-dom";
import App from "../../Components/App.js";

describe('App tests', () => {
  it("App renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});