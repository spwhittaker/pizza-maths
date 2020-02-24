import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Components/InputForm";
import InputForm from "./Components/InputForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pizzarithmetic</h1>
        <h3>...best thing since sliced bread(pizza)</h3>
      </header>
      <InputForm />
    </div>
  );
}

export default App;
