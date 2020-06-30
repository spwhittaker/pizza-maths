import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([
    // {
    //   name: "Test guy",
    //   diameter: 12,
    //   price: 7,
    //   key: "Test guy 0",
    //   pizzaId: "test id",
    //   quantity: 3,
    // },
    // {
    //   name: "Test guy no. 2",
    //   diameter: 10,
    //   price: 6,
    //   key: "Test guy 1",
    //   pizzaId: "test id1",
    //   quantity: 2,
    // },
    // {
    //   name: "Test guy Pepp",
    //   diameter: 12,
    //   price: 7,
    //   key: "Test guy 2",
    //   pizzaId: "test id",
    //   quantity: 3,
    // },
  ]);

  const [selectedDiscount, setSelectedDiscount] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [minSpend, setMinSpend] = useState(0);
  const [xPizzas, setXPizzas] = useState(0);

  const onApplyDiscount = (
    selectedDiscount = "",
    percentageValue = 0,
    minSpendValue = 0,
    xPizzas = 0
  ) => {
    setSelectedDiscount(selectedDiscount);
    setPercentage(Number(percentageValue));
    setMinSpend(Number(minSpendValue));
    setXPizzas(Number(xPizzas));
  };

  const clearDiscount = () => {
    setSelectedDiscount("");
    setPercentage(0);
    setMinSpend(0);
    setXPizzas(0);
  };

  const updatePizzas = (e) => {
    if (
      !pizzas.some(
        (obj) =>
          obj.name === e.name && Number(obj.diameter) === Number(e.diameter)
      )
    ) {
      setPizzas([...pizzas, e]);
    }
  };

  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to remove this pizza?")) {
      setPizzas([...pizzas].filter((arrPizza) => arrPizza.pizzaId !== id));
    }
  };

  const handleAdd = (id) => {
    let foundPizza = [...pizzas].find((arrPizza) => arrPizza.pizzaId === id);
    let pizzaIndex = pizzas.indexOf(foundPizza);
    foundPizza.quantity = Number(foundPizza.quantity) + 1;
    const newPizzas = [...pizzas];
    newPizzas[pizzaIndex] = foundPizza;
    setPizzas(newPizzas);
  };
  const handleMinus = (id) => {
    let foundPizza = [...pizzas].find((arrPizza) => arrPizza.pizzaId === id);
    let pizzaIndex = pizzas.indexOf(foundPizza);
    if (foundPizza.quantity > 1) {
      foundPizza.quantity = Number(foundPizza.quantity) - 1;
      const newPizzas = [...pizzas];
      newPizzas[pizzaIndex] = foundPizza;
      setPizzas(newPizzas);
    }
  };

  return (
    <AppContext.Provider
      value={{
        pizzas,
        setPizzas,
        selectedDiscount,
        setSelectedDiscount,
        percentage,
        setPercentage,
        minSpend,
        setMinSpend,
        xPizzas,
        setXPizzas,
        onApplyDiscount,
        clearDiscount,
        updatePizzas,
        handleRemove,
        handleAdd,
        handleMinus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
