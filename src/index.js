import ReactDom from "react-dom";
import React from "react";
import "../src/assets/css/reset.css";
import "../src/assets/css/style.css";
import Inicio from "./components/TelaInicial/Inicio";
import Deck from "./components/Deck/Deck";

function App() {

  return (
    < Deck />
  )

  //   const [page, setPage] = React.useState(false);

  //   return (
  //     <>
  //     {page ? <Deck/> : <Inicio changePage = {() => setPage(true)}/>}
  // </>
  //   );
    
  }

ReactDom.render(App(), document.querySelector(".root")); 



