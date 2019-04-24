import React from 'react';
import './App.css';
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay"
import NumberButton from "./components/ButtonComponents/NumberButton"
import ActionButton from "./components/ButtonComponents/ActionButton"

const App = () => {
  return (
    <div className = "row">
      <div className="display" >
        <CalculatorDisplay text={"0"} />
      </div>

      <div class ="first-row">
      
        <ActionButton text = "clear" buttonStyle = "buttonsize" />
        <NumberButton text="/" buttonStyle = "colorbutton" />
     
      </div>

        <div class = "second-row">
        <NumberButton text="7" buttonStyle = "numbers"  />
        <NumberButton text="8" buttonStyle = "numbers" />
        <NumberButton text="9" buttonStyle = "numbers" />
        <NumberButton text="*"buttonStyle = "colorbutton" />
        </div>

        <div class = "second-row">
        <NumberButton text="4" buttonStyle = "numbers" />
        <NumberButton text="5"  buttonStyle = "numbers" />
        <NumberButton text="6"  buttonStyle = "numbers" />
        <NumberButton text="+" buttonStyle = "colorbutton" />
        </div>

        <div className = "second-row">
        <NumberButton text="1" buttonStyle = "numbers" />
        <NumberButton text="2" buttonStyle = "numbers" />
        <NumberButton text="3"  buttonStyle = "numbers" />
        <NumberButton text="-" buttonStyle = "colorbutton" />
        </div>

        <div className = "first-row">
        <ActionButton text = "0" buttonStyle = "buttonsize"/>
        <NumberButton text="="  buttonStyle = "colorbutton" />
        </div>
      </div>

    
  )

};

export default App;
