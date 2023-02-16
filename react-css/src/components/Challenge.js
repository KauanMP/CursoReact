import React from "react";
import styles from "./Challenge.module.css";
 
const Challenge = ({brand, name, price, year}) => {
  return (
    <div>
        <ul>
            <h3 style={{color: "rgb(148, 100, 45)"}}>Carros</h3>
            <li>Marca: {brand}</li>
            <li>Nome: {name}</li>
            <li>Preço: {price}</li>
            <li>Ano: {year}</li>
        </ul>
    </div>
  )
};
 
export default Challenge;
