import React from "react";
import { FaTrash } from "react-icons/fa";
import "./styles.css";

export const Card = ({ item, onDelete, id }) => {

  let itemClass = "profit";
  item.category === "Saída" ? (itemClass = "charge") : (itemClass = "profit");

  return (
    <li className={itemClass} key={id}>
      <div className="firstDiv">
        <h2>{item.description}</h2>
        <h3>{item.category}</h3>
      </div>
      <div className="secondDiv">
        <p>R${item.transaction}</p>
        <FaTrash
          onClick={() => {
            onDelete(item);
          }}
        />
      </div>
    </li>
  );
};
