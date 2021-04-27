import React from 'react';
import './Button.css'
const Button=(props) => {
    console.log(props)
    return <div style={{backgroundColor:props.couleurDeFond,fontSize:props.taillePolice+'px'}} className="Button" onClick={(evt)=>{props.lorsqueJeClickSurLeBoutton(true)}}>{props.label}</div>
};
export default Button;