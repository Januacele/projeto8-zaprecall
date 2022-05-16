
import React from "react";
import "../assets/css/reset.css";
import "../assets/css/style.css";
import Deck from "../components/Deck/Deck";
import logo from '../assets/Images/logo.png';
import '../components/TelaInicial/styleInicio.css';

export default function App() {

  const [page, setPage] = React.useState(false);
  return (
    <>
      {!page ? (
        <div className="Inicio">
          <img src={logo} alt="ZapRecall" />
          <h1>ZapRecall</h1>
          <button type="button" onClick={() => setPage(true)}>Iniciar Recall !</button>
        </div>
      )
        : <Deck />}

    </>

  );

}
