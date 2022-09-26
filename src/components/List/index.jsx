import React from "react";
import { Card } from "../Card.jsx/index.jsx";
import "./styles.css";

export function List({ listTransactions, setListTransactions }) {

  function onDelete(id) {
    const newList = listTransactions.filter((item) =>
      item.id !== item.key); 

      // listTransactions.forEach((item) => {
      //   console.log(item.id)
      //   console.log(id)
      // })

      
    console.log(newList)
    console.log(listTransactions)
    console.log(id)
  
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
                key={itemId}
                description={item.description}
                category={item.category}
                transaction={item.transaction}
                onDelete={onDelete}
                id={itemId}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}
