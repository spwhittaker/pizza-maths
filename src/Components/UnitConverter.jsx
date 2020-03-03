import React, { Component } from "react";
import "../styles/UnitConverter.css";


class UnitConverter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comparisonDiv: false,
            metricUnits: true
        };
    }

    handleUnitConversion = event => {
        this.setState({ metricUnits: !this.state.metricUnits });
    };
    render() {
        return (
            <div className="ChangeUnit">
                <button
                    type="button"
                    onClick={this.handleUnitConversion}
                    className="top-level-button"
                >
                    Change values to {this.state.metricUnits === false && "cm"}
                    {this.state.metricUnits === true && "inches"}
                </button>
            </div>
        );
    }
}

export default UnitConverter; //needs state ?PizzaCard
