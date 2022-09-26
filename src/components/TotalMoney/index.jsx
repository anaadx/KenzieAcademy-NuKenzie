import React from 'react'
import "./styles.css";

function TotalMoney({listTransactions}) {

  console.log(listTransactions)
  const valores = listTransactions.reduce((acc, cur) => acc + cur.transaction, 0)

  return (
    <section className='container__total'>
    <div>
      <h3 className='title3'>Valor total</h3>
      <p className='title3'>${valores}</p>
    </div>
    <h3 className='headline'>O valor se refere ao saldo</h3>
    </section>
  );
}

export default TotalMoney

