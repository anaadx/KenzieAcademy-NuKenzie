import React from "react";
import Logo from "../assets/logo2.png";
import Imagem from "../assets/Group.png";
import "./styles.css";

const StartPage = ({ isPage, setPage }) => {
  return (
    <div className="div__startPage">
      <div className="div__startPage__container">
        <div className="texto__startPage">
          <img src={Logo} alt="logo" />
          <h1 className="title1">Centralize o controle das suas finanças</h1>
          <h3>de forma rápida e segura</h3>
          <button type="button" onClick={() => setPage(!isPage)}>
            iniciar
          </button>
        </div>
        <div>
          <img src={Imagem} className="ilustracao" alt="ilustração" />
        </div>
      </div>
    </div>
  );
};

export default StartPage;
