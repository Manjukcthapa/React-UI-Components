import React from 'react';
import './Button.css';
 function NumberButton(props){
     const number = [1,2,3,4,5,6,7];
    return(
      <div>
          <button className={props.buttonStyle}>{props.numberProp.number}</button>
      </div>
    )
 }

 export default NumberButton;