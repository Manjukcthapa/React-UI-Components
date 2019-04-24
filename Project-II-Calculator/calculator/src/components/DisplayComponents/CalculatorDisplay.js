import React from 'react';
import './Display.css';

function CalculatorDisplay(props) {
    return (
        <div>
            <span>{props.text}</span>
        </div>
    )
}

export default CalculatorDisplay;