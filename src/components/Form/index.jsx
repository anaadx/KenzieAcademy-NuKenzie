import React from 'react'
import { useState } from 'react'
import "./styles.css";
import TotalMoney from '../TotalMoney'

export function Form({ listTransactions, setListTransactions }) {

    const [category, setOption] = useState("Entrada")

    function updateList(){
    const description = document.querySelector(".descriptionInput").value
    const transaction = document.querySelector(".valueInput").value
    const numberTransaction = Number(transaction)

    if(category === "Saída"){
    const newTransaction = numberTransaction*-1

    const newValue = {description, transaction:newTransaction, category}
    return setListTransactions([...listTransactions, newValue])
    }
    
    const newValue = {description, transaction:numberTransaction, category}
    setListTransactions([...listTransactions, newValue])
}

  return (
    <section className="form">
      <div>
      <form onSubmit={(event) => {
          event.preventDefault()
          updateList()}
      }>
        <label className='headLine'>
          Descrição
          <input className='descriptionInput' placeholder="Digite a sua descrição"></input>
        </label>
        <p className='.body'>ex: compra de roupas</p>
        <div className='inputValues'>
          <label>
            Valor
            <input className='valueInput' placeholder='1'></input>
          </label>
          <label>
            Tipo de valor
            <select name='estado' value={category} onChange={(event) => setOption(event.target.value)}>
              <option value="Entrada">Entrada</option>
              <option value="Saída">Saída</option>
            </select>
          </label>
        </div>
        <button type='submit'>Inserir Valor</button>
      </form>
      </div>
      <div>
        <TotalMoney listTransactions={listTransactions}/>
      </div>
    </section>
  );
}
