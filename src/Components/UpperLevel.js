import App from "./App";
import "../styles/UpperLevel.scss";
import Footer from "./Footer";
import React, { useContext } from "react";
import { AppProvider } from "../context/AppContext";
import { UpperLevelContext } from "../context/UpperLevelContext";
const UpperLevel = () => {
  const {
    comparisonDiv,

    comparisonClass,

    splitView,

    handleAddComparison,
    handleRemoveComparison,
  } = useContext(UpperLevelContext);
  return (
    <div className='upper-level'>
      <div className='background'></div>
      <header className='App-header'>
        <img
          src='/white_logo_transparent_background_edited.png'
          id='logo'
          alt='app logo'
        />
        <h1>...best thing since sliced bread (pizza)</h1>
        <p>Add some pizza details below and check for the best value</p>
      </header>
      <div className='top-level-options'>
        {comparisonDiv === false && (
          <button
            type='button'
            onClick={handleAddComparison}
            className='top-level-button'
          >
            <p>Compare second pizza deal</p>
          </button>
        )}
        {comparisonDiv === true && (
          <button
            type='button'
            onClick={handleRemoveComparison}
            className='top-level-button'
          >
            <p>Remove second comparison</p>
          </button>
        )}
      </div>
      <span className='apps'>
        <AppProvider>
          <App className={comparisonClass} appInstance={"0"} />
        </AppProvider>
        {comparisonDiv && (
          <AppProvider>
            <App className={splitView} appInstance={"1"} />
          </AppProvider>
        )}
      </span>
      <div className='spacer'></div>
      <Footer />
    </div>
  );
};

export default UpperLevel;
