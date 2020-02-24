import React from "react";
import "../styles/PizzaCard.css";
const PizzaCard = ({ name, diameter, price }) => {
  let roundedDiameter;
  if (diameter % 1 === 0) {
    roundedDiameter = diameter;
  } else {
    roundedDiameter = Number(diameter).toFixed(1);
  }
  const area = (Math.PI * Math.pow(diameter / 2, 2)).toFixed(2);
  const circumference = (Math.PI * diameter).toFixed(2);
  return (
    <div className="PizzaCard">
      <h4>Name: {name}</h4>
      <h4>Diameter (in inches): {roundedDiameter}</h4>
      <h4>Price: £{Number(price).toFixed(2)}</h4>
      <p>
        Area: {area} in<sup>2</sup>
      </p>
      <p>Crust: {circumference} inches</p>
      <p>
        Area to crust (bigger means more area compared to crust):{" "}
        {(area / circumference).toFixed(2)}
      </p>
      <p>
        Price per in<sup>2</sup>: £{(Number(price) / area).toFixed(2)}
      </p>
    </div>
  );
};

export default PizzaCard;
