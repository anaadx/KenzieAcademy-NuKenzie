import React from 'react'
import "./styles.css";
import { useState } from 'react';

function TotalMoney({listTransactions}) {
  // const [total, setTotal] = useState(0);

  // const totalCharge = 
  // listTransactions.filter((item) => item.category === "Saída")
  // .map((item) => Number(item.transaction));
  // console.log(totalCharge)

  // const totalProfit = listTransactions
  //   .filter((item) => item.category === "Entrada")
  //   .map((item) => Number(item.transaction));
  //   console.log(totalProfit)

  // const charge = totalCharge.reduce((acc, cur) => acc + cur, 0).toFixed(2);
  // const profit = totalProfit.reduce((acc, cur) => acc + cur, 0).toFixed(2);
  // const newTotal = Math.abs(profit - charge).toFixed(2);

  // setTotal(`${Number(profit) < Number(charge) ? "-" : ""}R$ ${newTotal}`);

  return (
    <section className='container__total'>
    <div>
      <h3 className='title3'>Valor total</h3>
      <p className='title3'>${"200"}</p>
    </div>
    <h3 className='headline'>O valor se refere ao saldo</h3>
    </section>
  );
}

export default TotalMoney

