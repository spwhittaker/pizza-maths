import React from "react";
import "../styles/PizzaCard.css";
const PizzaCard = ({ name, diameter, price }) => (
  <div className="PizzaCard">
    <h4>Name: {name}</h4>
    <h4>Diameter (in inches): {diameter}</h4>
    <h4>Price: £{Number(price).toFixed(2)}</h4>
    <p>
      Area: {(Math.PI * Math.pow(diameter / 2, 2)).toFixed(2)} square inches
    </p>
    <p>Crust: {(Math.PI * diameter).toFixed(2)} inches</p>
    <p>
      Area to crust (bigger means more area compared to crust):{" "}
      {((Math.PI * Math.pow(diameter / 2, 2)) / (Math.PI * diameter)).toFixed(
        2
      )}
    </p>
  </div>
);

export default PizzaCard;
