import React from "react";
import { useState } from "react";
import { Card } from "../Card.jsx/index.jsx";
import "./styles.css";

export function List({ listTransactions, setListTransactions }) {

  function onDelete(itemNovo) {
    const newList = listTransactions.filter((item) =>
      item !== itemNovo); 
      setListTransactions(newList)
  }

  const [listAll, setListAll] = useState ("Todos")

  return (
    <section className="container__list">
      <div className="menu__list">
        <h2>Resumo Financeiro</h2>
        <div>
          <button type="button" onClick={() => {setListAll("Todos")}}>Todos</button>
          <button type="button" onClick={() => {setListAll("Entradas")}}>Entradas</button>
          <button type="button" onClick={() => {setListAll("Despesas")}}>Despesas</button>
        </div>
      </div>
      <div className="divList">
        <h2>Você ainda não possui nenhum lançamento</h2>
        <ul className="ulList">
    {
      listAll === "Todos" ? (
        listTransactions.map((item) => {
          const itemId = Math.round(Math.random() * 1000) 
          return (
            <Card
            key={itemId}
              id={itemId}
              item={item}
              onDelete={onDelete}
            />
          );
        })): listAll === "Entradas" ? (listTransactions.map((item, index) =>(
          (item.category === "Entrada")?(
            <Card
              key={index}
                id={index}
                item={item}
                onDelete={onDelete}
              />
          ): " "
           ))) : (listTransactions.map((item, index) =>(
            (item.category === "Saída")?(
              <Card
                key={index}
                  id={index}
                  item={item}
                  onDelete={onDelete}
                />
            ) : " "
             ))) }
        </ul>
      </div>
    </section>
  );
}
