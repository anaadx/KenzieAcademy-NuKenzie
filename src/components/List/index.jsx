import React from "react";
import { Card } from "../Card.jsx/index.jsx";
import "./styles.css";

export function List({ listTransactions, setListTransactions }) {

  function onDelete(itemNovo) {
    const newList = listTransactions.filter((item) =>
      item !== itemNovo); 
      setListTransactions(newList)
  }

  return (
    <section className="container__list">
      <div className="menu__list">
        <h2>Resumo Financeiro</h2>
        <div>
          <button>Todos</button>
          <button>Entradas</button>
          <button>Despesas</button>
        </div>
      </div>
      <div className="divList">
        <h2>Você ainda não possui nenhum lançamento</h2>
        <ul>
          {listTransactions.map((item) => {
            const itemId = Math.round(Math.random() * 1000) 
            return (
              <Card
                id={itemId}
                item={item}
                onDelete={onDelete}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}
