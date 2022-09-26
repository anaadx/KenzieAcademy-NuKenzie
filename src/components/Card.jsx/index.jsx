import React from "react";
import { FaTrash } from "react-icons/fa";
import "./styles.css";

export const Card = ({ description, category, transaction, onDelete, id }) => {

  let itemClass = "profit";
  category === "Saída" ? (itemClass = "charge") : (itemClass = "profit");

  return (
    <li className={itemClass} key={id}>
      <div className="firstDiv">
        <h2>{description}</h2>
        <h3>{category}</h3>
      </div>
      <div className="secondDiv">
        <p>R${transaction}</p>
        <FaTrash
          onClick={(event) => {
            event.preventDefault();
            onDelete(id);
          }}
        />
      </div>
    </li>
  );
};
