import React from 'react';
import './Button.css';
// import { prependOnceListener } from 'cluster';
 function ActionButton(props){
     return (
         <button className={props.buttonStyle} >
             {props.text}
         </button>
     )
 }

 export default ActionButton;